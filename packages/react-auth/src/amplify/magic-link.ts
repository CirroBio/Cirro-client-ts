import { confirmSignIn, signIn } from 'aws-amplify/auth';
import { IRedeemSignInLink, ISignInLinkRequest } from "@cirrobio/react-ui-core";

export const COGNITO_PROVIDER_ID = 'COGNITO';
export const LOGIN_SENT_SUCCESS_MSG = 'Check your email for the login link. If you don’t have an account, the link won’t be sent.';

export async function requestSignInLink({ username, redirectUri }: ISignInLinkRequest): Promise<void> {
  const redirectUriToUse = redirectUri || window.location.origin + "/magic-link";
  try {
    const { nextStep } = await signIn({
      username,
      password: null,
      options: {
        authFlowType: "CUSTOM_WITHOUT_SRP",
      },
    });
    if (nextStep.signInStep !== 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE') {
      return;
    }

    const clientMetadata = {
      signInMethod: "MAGIC_LINK",
      redirectUri: redirectUriToUse,
      hasMagicLink: "no",
    }
    await confirmSignIn({
      challengeResponse: "cirro-is-awesome",
      options: {
        clientMetadata,
      },
    });
  } catch (e) {
    // Cleanup the error message
    const errorMessage = e.toString();
    if (errorMessage.includes('UserLambdaValidationException')) {
      throw Error(errorMessage.split('failed with error')[1]);
    } else if (errorMessage.includes('Incorrect username or password')) {
      throw Error('Incorrect username or password.');
    }
    throw Error(errorMessage);
  }
}

export async function redeemSignInLink({ username, challenge }: IRedeemSignInLink): Promise<void> {
  await signIn({
    username: username,
    password: null,
    options: {
      authFlowType: "CUSTOM_WITHOUT_SRP",
    },
  });
  const clientMetadata = {
    signInMethod: "MAGIC_LINK",
    hasMagicLink: "yes",
  }
  await confirmSignIn({
    challengeResponse: challenge,
    options: {
      clientMetadata,
    },
  });
}
