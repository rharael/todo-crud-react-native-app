import { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      Home: undefined;
    }
  }
}
