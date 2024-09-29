import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import FavouritesContextProvider from './store/context/favourites-context';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Categories" component={CategoriesScreen} />
//       <Drawer.Screen name="Favourites" component={FavouriteScreen} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <>
      <StatusBar barStyle={'default'} backgroundColor={'#352c2c'} />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#352c2c'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#524242'},
            }}>
            {/* <Stack.Screen name="drawer" component={DrawerNavigator} /> */}
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailScreen}
              // options={{
              //   headerRight: () => {
              //     return <Button title="Tap!!" onPress={}/>;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

//
