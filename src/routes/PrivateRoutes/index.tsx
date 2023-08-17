import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import DrawerCustom from 'components/DrawerCustom';

// import Private from 'screens/_layouts/Private';
// import Dashboard from 'screens/Dashboard';

import { Props } from 'interfaces/routes.interface';

const Stack = createNativeStackNavigator();

// const useLayout = (Component: React.FC<Props>) => (props: any) =>
//   (
//     <Private>
//       <Component {...props} />
//     </Private>
//   );

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

// const DashboardStackRoutes = () => (
//   <Drawer.Navigator
//     initialRouteName="Home"
//     drawerContent={props => <DrawerCustom {...props} />}
//     screenOptions={{
//       headerShown: false,
//       drawerStyle: {
//         backgroundColor: 'transparent',
//         height: '90%',
//         marginTop: 40,
//       },
//     }}
//   >
//     <Drawer.Screen name="Home" component={useLayout(Dashboard.Home)} />
//     <Drawer.Screen name="Profile" component={useLayout(Dashboard.Profile)} />
//     <Drawer.Screen name="Cidades" component={useLayout(Dashboard.Cidades)} />
//     <Drawer.Screen name="CategoriasRoutes" component={CategoriasRoutes} />
//     <Drawer.Screen name="ProfissionaisRoutes" component={ProfissionaisRoutes} />
//     <Drawer.Screen name="AboutUs" component={useLayout(Dashboard.AboutUs)} />
//   </Drawer.Navigator>
// );

const PrivateRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name="Dashboard" component={DashboardStackRoutes} /> */}
  </Stack.Navigator>
);

export default PrivateRoutes;
