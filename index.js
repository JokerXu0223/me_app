import { AppRegistry, YellowBox } from 'react-native';
import App from './src';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

AppRegistry.registerComponent('me_app', () => App);
