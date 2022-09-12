import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  CheckingPassword,
  ForgetPassword,
  Login,
  NewPass,
  SignUp,
  Onboarding,
} from './index';
import {useSelector, useDispatch} from 'react-redux';
import {UpdateBoarding} from '../store/CycleAppSlice';
const Stack = createNativeStackNavigator();

const Boarding = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CheckingPassword" component={CheckingPassword} />
      <Stack.Screen name="NewPass" component={NewPass} />
    </Stack.Navigator>
  );
};
const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CheckingPassword" component={CheckingPassword} />
      <Stack.Screen name="NewPass" component={NewPass} />
    </Stack.Navigator>
  );
};

function AuthStack() {
  const dispatch = useDispatch();
  const {tokenBoarding} = useSelector(state => state.cycle);

  const choice = async () => {
    let token;
    token = null;
    try {
      token = await AsyncStorage.getItem('tokenBoarding');
    } catch (e) {
      console.log(e);
    }
    dispatch(UpdateBoarding(token));
  };

  useEffect(() => {
    choice();
  }, [dispatch]);

  return <>{tokenBoarding ? <Auth /> : <Boarding />}</>;
}
export default () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
