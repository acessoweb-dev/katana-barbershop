import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerCustom } from 'components';

import Private from 'screens/_layouts/Private';
import App from 'screens/Application';

import { Props } from 'interfaces/routes.interface';

const Stack = createNativeStackNavigator();

const useLayout = (Component: React.FC<Props>) => (props: any) => (
  <Private>
    <Component {...props} />
  </Private>
);

const Drawer = createDrawerNavigator();

// const ProfissionaisRoutes = () => (
//   <Stack.Navigator
//     initialRouteName="Profissionais"
//     screenOptions={{ headerShown: false }}
//   >
//     <Stack.Screen
//       name="Profissionais"
//       component={useLayout(Dashboard.Profissionais)}
//     />
//     <Stack.Screen
//       name="ProfissionaisDetails"
//       component={useLayout(Dashboard.ProfissionaisDetails)}
//     />
//   </Stack.Navigator>
// );

// const CategoriasRoutes = () => (
//   <Stack.Navigator
//     initialRouteName="Categorias"
//     screenOptions={{ headerShown: false }}
//   >
//     <Stack.Screen
//       name="Categorias"
//       component={useLayout(Dashboard.Categorias)}
//     />
//     <Stack.Screen
//       name="ProfissionaisDetails"
//       component={useLayout(Dashboard.ProfissionaisDetails)}
//     />
//     <Stack.Screen
//       name="Profissionais"
//       component={useLayout(Dashboard.Profissionais)}
//     />
//   </Stack.Navigator>
// );

const DashboardStackRoutes = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <DrawerCustom {...props} />}
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: 'transparent',
        height: '90%',
        marginTop: 40,
      },
    }}
  >
    <Drawer.Screen name="Home" component={useLayout(App.Home)} />
    <Drawer.Screen name="Scheduling" component={useLayout(App.Scheduling)} />
    <Drawer.Screen name="Services" component={useLayout(App.Services)} />
    <Drawer.Screen name="Products" component={useLayout(App.Products)} />
    <Drawer.Screen name="UsefulLinks" component={useLayout(App.UsefulLinks)} />
    <Drawer.Screen
      name="Announcements"
      component={useLayout(App.Announcements)}
    />
    <Drawer.Screen name="AboutUs" component={useLayout(App.AboutUs)} />
    <Drawer.Screen name="Suggestions" component={useLayout(App.Suggestions)} />
    <Drawer.Screen
      name="ChangeCredentials"
      component={useLayout(App.ChangeCredentials)}
    />
  </Drawer.Navigator>
);

const PrivateRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainApplication" component={DashboardStackRoutes} />
  </Stack.Navigator>
);

export default PrivateRoutes;
