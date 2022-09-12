import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  ServicesDetailsMore,
  CategoryScreen,
  Payment,
  Search,
  FilterSearch,
  Notification,
  ProviderScreen,
  Dates,
} from './index';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ServicesDetailsMore"
        component={ServicesDetailsMore}
      />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="FilterSearch" component={FilterSearch} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="ProviderScreen" component={ProviderScreen} />
      <Stack.Screen name="Dates" component={Dates} />
    </Stack.Navigator>
  );
};
export default HomeStack;
