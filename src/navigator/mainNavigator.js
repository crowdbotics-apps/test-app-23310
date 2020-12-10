import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile184261Navigator from '../features/UserProfile184261/navigator';
import Tutorial184260Navigator from '../features/Tutorial184260/navigator';
import NotificationList184232Navigator from '../features/NotificationList184232/navigator';
import Settings184231Navigator from '../features/Settings184231/navigator';
import Settings184223Navigator from '../features/Settings184223/navigator';
import UserProfile184221Navigator from '../features/UserProfile184221/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile184261: { screen: UserProfile184261Navigator },
Tutorial184260: { screen: Tutorial184260Navigator },
NotificationList184232: { screen: NotificationList184232Navigator },
Settings184231: { screen: Settings184231Navigator },
Settings184223: { screen: Settings184223Navigator },
UserProfile184221: { screen: UserProfile184221Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
