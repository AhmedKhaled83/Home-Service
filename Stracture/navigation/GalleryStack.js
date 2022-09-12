import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddGallery, ServiceDetails, GalleryScreen} from './index';

const Stack = createNativeStackNavigator();

const GalleryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="GalleryScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
      <Stack.Screen name="AddGallery" component={AddGallery} />
    </Stack.Navigator>
  );
};
export default GalleryStack;
