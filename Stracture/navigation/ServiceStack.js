import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyServisScreen, AddServices} from './index';

const Stack = createNativeStackNavigator();

const ServiceStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyServisScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyServisScreen" component={MyServisScreen} />
      <Stack.Screen name="AddServices" component={AddServices} />
    </Stack.Navigator>
  );
};
export default ServiceStack;
