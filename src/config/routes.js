import {
  createNavigationContainer,
  StackNavigator,
  StackRouter,
  TabNavigator
} from 'react-navigation';

import HomeScreen from '../views/HomeScreen';
import AltScreen from '../views/AltScreen';

export const AppNavigator = StackRouter({
  Home: {
    screen: HomeScreen,
    path: '',
  },
  Alt: {
    screen: AltScreen,
    path: 'alt'
  }
}, {
  initialRouteName: 'Alt',
});
