import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PopularShowsScreen from './screens/PopularShowsScreen';
import DetailsScreen from './screens/DetailsScreen';



const Stack = createNativeStackNavigator();

export const ROUTE_NAMES = {

  PopularShowsScreen: 'PopularShows',
  DetailsScreen: 'Details',


};

const MyRouterStack = () => {

  return (
    <Stack.Navigator initialRouteName="PopularShows">
      <Stack.Screen
        name="PopularShows"
        component={PopularShowsScreen}

        options={{
          title: 'PopularShows',
          headerShown: false,

        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} options={{
        headerShown: true,

      }}
      />

    </Stack.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <MyRouterStack />
    </NavigationContainer>
  );
}

export default App;
