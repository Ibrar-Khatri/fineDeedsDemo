import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutFinedeeds from './aboutFinedeeds';
import Home from './home';
import Analytics from './analytics';
import Approvals from './approvals';
import NonProfits from './nonProfits';
import Finances from './finances';
import Events from './events';
import Projects from './projects';
import Employees from './employees';
import Settings from './settings';
import Dashboard from './dashboard';
import TellYourStory from './tellYourStory/tellYourStory';

const Drawer = createDrawerNavigator();

export default DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="dashboard" component={Dashboard} />
      <Drawer.Screen name="analytics" component={Analytics} />
      <Drawer.Screen name="approvals" component={Approvals} />
      <Drawer.Screen name="non-profits" component={NonProfits} />
      <Drawer.Screen name="finances" component={Finances} />
      <Drawer.Screen name="events" component={Events} />
      <Drawer.Screen name="projects" component={Projects} />
      <Drawer.Screen name="employees" component={Employees} />
      <Drawer.Screen name="settings" component={Settings} />
      <Drawer.Screen name="tell-your-story" component={TellYourStory} />
      <Drawer.Screen name="about-finedeeds" component={AboutFinedeeds} />
    </Drawer.Navigator>
  );
};
