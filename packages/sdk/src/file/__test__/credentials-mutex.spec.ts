import { Mutex } from "../util/credentials-mutex.so";

describe('integration: credentialsMutex', () => {
  const cache: Map<string, string> = new Map<string, string>();

  beforeEach(() => {
    cache.clear();
  });

  it('should only have one call with concurrent requests', async () => {
    let fetchCount = 0;
    const mutex = new Mutex();

    const fetchCredentials = async (userId: string): Promise<string> => {
      const cached = cache.get(userId);
      if (cached) {
        return cached;
      }

      fetchCount++;
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 50));
      const resp = userId;
      cache.set(userId, resp);
      return resp;
    };

    // Multiple concurrent requests for same user
    const promises = [
      mutex.dispatch(() => fetchCredentials('user1')),
      mutex.dispatch(() => fetchCredentials('user1')),
      mutex.dispatch(() => fetchCredentials('user1')),
    ];

    const results = await Promise.all(promises);

    // Should return the same credentials
    expect(results[0]).toEqual(results[1]);
    expect(results[1]).toEqual(results[2]);

    // But only one fetch should have occurred
    expect(fetchCount).toBe(1);
  });
});
