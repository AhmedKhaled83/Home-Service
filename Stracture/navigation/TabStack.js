import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from '../utils/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  // tab
  HomeStack,
  MyRequestsScreen,
  // filter
  FilterScreen,
  //
  ProfileStack,
  GalleryStack,
  ServiceStack,
} from './index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Filter = () => {
  return (
    <Stack.Navigator
      initialRouteName="FilterScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#F3B052',
            tabBarInactiveTintColor: '#878787',
            tabBarStyle: {
              backgroundColor: '#000',
            },
          }}>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={({route}) => ({
              tabBarStyle: (route => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                if (
                  routeName === 'ServicesDetailsMore' ||
                  routeName === 'Payment' ||
                  routeName === 'Search' ||
                  routeName === 'FilterSearch' ||
                  routeName === 'ProviderScreen' ||
                  routeName === 'Dates'
                ) {
                  return {display: 'none'};
                }
                return {
                  backgroundColor: '#000',
                };
              })(route),
              title: 'الرئيسيه',
              tabBarIcon: ({focused}) => (
                <Image
                  source={icons.Home}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#F3B052' : '#878787',
                  }}
                />
              ),

              // hide tab on a specific screen
            })}
          />
          <Tab.Screen
            name="GalleryStack"
            component={GalleryStack}
            options={({route}) => ({
              tabBarStyle: (route => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                if (
                  routeName === 'AddGallery' ||
                  routeName === 'ServiceDetails'
                ) {
                  return {display: 'none'};
                }
                return {
                  backgroundColor: '#000',
                };
              })(route),
              title: 'المعرض',
              tabBarIcon: ({focused}) => (
                <Image
                  source={icons.Photo}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#F3B052' : '#878787',
                  }}
                />
              ),
            })}
          />
          <Tab.Screen
            name="ServiceStack"
            component={ServiceStack}
            options={({route}) => ({
              tabBarStyle: (route => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                if (routeName === 'AddServices') {
                  return {display: 'none'};
                }
                return {backgroundColor: '#000'};
              })(route),
              title: 'خدماتي',
              tabBarIcon: ({focused}) => (
                <Image
                  source={icons.bag}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#F3B052' : '#878787',
                  }}
                />
              ),
            })}
          />
          <Tab.Screen
            name="MyRequestsScreen"
            component={MyRequestsScreen}
            options={{
              title: 'طلباتي',
              tabBarIcon: ({focused}) => (
                <Image
                  source={icons.Box}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#F3B052' : '#878787',
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={({route}) => ({
              tabBarStyle: (route => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                if (
                  routeName === 'ProfileModificationScreen' ||
                  routeName === 'AboutMonoScreen' ||
                  routeName === 'MyFavoritesScreen' ||
                  routeName === 'ShareCodeScreen' ||
                  routeName === 'walletProfile' ||
                  routeName === 'AddressProfile' ||
                  routeName === 'AddressEditProfile'
                ) {
                  return {display: 'none'};
                }
                return {
                  backgroundColor: '#000',
                };
              })(route),
              title: 'حسابي',
              tabBarIcon: ({focused}) => (
                <Image
                  source={icons.User}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#F3B052' : '#878787',
                  }}
                />
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default TabStack;


