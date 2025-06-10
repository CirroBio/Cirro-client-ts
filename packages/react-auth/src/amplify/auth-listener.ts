import { AuthHubEventData } from "@aws-amplify/core/src/Hub/types/AuthTypes";
import { AuthEventHandlerOptions } from "@cirrobio/react-ui-core";

export const amplifyAuthEventHandler = ({ payload }, options: AuthEventHandlerOptions): void => {
  const { event }: AuthHubEventData = payload;
  const { onSignIn, onSignOut } = options ?? {};
  switch (event) {
    case 'signedIn': {
      console.log('user has signed in successfully');
      onSignIn();
      break;
    }
    case 'signedOut':
    case 'tokenRefresh_failure': {
      onSignOut();
      break;
    }
    default: {
      console.info(event);
      break;
    }
  }
};
