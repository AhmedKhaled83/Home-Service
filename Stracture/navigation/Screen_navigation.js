import AuthStack from "./AuthStack";
import GalleryStack from "./GalleryStack";
import HomeStack from "./HomeStack"
import ProfileStack from "./ProfileStack";
import ServiceStack from "./ServiceStack";
import TabStack from "./TabStack";

import React, {useEffect} from 'react';
import {View}  from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Screen_navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="TabStack"
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen name="AuthStack" component={AuthStack} />

{/* 
      <Stack.Screen name="GalleryStack" component={GalleryStack} />
      
      <Stack.Screen name="HomeStack" component={HomeStack} />
      
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
      
      <Stack.Screen name="ServiceStack" component={ServiceStack} /> */}
      
      <Stack.Screen name="TabStack" component={TabStack} />


      </Stack.Navigator>
      </NavigationContainer>


  )
    }


    export default Screen_navigation;