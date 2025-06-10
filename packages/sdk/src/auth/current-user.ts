export class CurrentUser {
  username: string;
  /**
   * The unique identifier for the user
   */
  sub: string

  /**
   * The time the user authenticated
   */
  authTime: Date;

  /**
   * The groups the user belongs to
   */
  groups: string[];

  static fromCognitoUser(idTokenPayload: Record<string, any>): CurrentUser {
    return {
      username: idTokenPayload["cognito:username"] ?? idTokenPayload.username,
      sub: idTokenPayload.sub,
      authTime: new Date(idTokenPayload.auth_time * 1000),
      groups: idTokenPayload["cognito:groups"] ?? [],
    };
  }
}
