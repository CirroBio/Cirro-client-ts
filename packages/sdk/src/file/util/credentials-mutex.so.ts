import { AWSCredentials } from '@cirrobio/api-client';

class Mutex<T> {
  private mutex = Promise.resolve();

  lock(): PromiseLike<() => void> {
    let begin: (unlock: () => void) => void = () => { /* Do nothing */ };

    this.mutex = this.mutex.then(() => new Promise(begin));

    return new Promise((res) => {
      begin = res;
    });
  }

  async dispatch(fn: (() => T) | (() => PromiseLike<T>)): Promise<T> {
    const unlock = await this.lock();
    try {
      return await Promise.resolve(fn());
    } finally {
      unlock();
    }
  }
}

/**
 * A mutex to ensure that only one request for credentials is made at a time.
 */
export const credentialsMutex = new Mutex<AWSCredentials>();
/**
 * A cache of credentials to avoid making multiple requests for the same credentials.
 */
export const credentialsCache: Map<string, AWSCredentials> = new Map<string, AWSCredentials>();
