import { JWT } from "aws-amplify/auth"

interface IdTokenPayload {
  "cognito:username": string;
  "cognito:groups"?: string[];
  exp: number;
  iat: number;
  iss: string;
  sub: string;
  auth_time: number;
}

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

  static fromCognitoUser(idToken: JWT): CurrentUser {
    const payload = idToken.payload as unknown as IdTokenPayload;
    return {
      username: payload["cognito:username"],
      sub: payload.sub,
      authTime: new Date(payload.auth_time * 1000),
      groups: payload["cognito:groups"] ?? [],
    };
  }
}
