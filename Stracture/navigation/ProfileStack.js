import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ProfileModificationScreen,
  AboutMonoScreen,
  MyFavoritesScreen,
  ShareCodeScreen,
  MyProfileScreen,
  walletProfile,
  AddressProfile,
  AddressEditProfile,
} from './index';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyProfileScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Stack.Screen
        name="ProfileModificationScreen"
        component={ProfileModificationScreen}
      />
      <Stack.Screen name="AboutMonoScreen" component={AboutMonoScreen} />
      <Stack.Screen name="MyFavoritesScreen" component={MyFavoritesScreen} />
      <Stack.Screen name="ShareCodeScreen" component={ShareCodeScreen} />
      <Stack.Screen name="walletProfile" component={walletProfile} />
      <Stack.Screen name="AddressProfile" component={AddressProfile} />
      <Stack.Screen name="AddressEditProfile" component={AddressEditProfile} />
    </Stack.Navigator>
  );
};
export default ProfileStack;
