import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './application/store/index';
import {UpdateAuth} from './application/store/CycleAppSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AuthStack,
  Splash_Screen,
  TabStack,
  Screen_navigation
} from './application/navigation/index';

const App = () => {
  const dispatch = useDispatch();
  const {tokenUser, loading} = useSelector(state => state.cycle);

  useEffect(() => {
    setTimeout(async () => {
      let token;
      token = null;
      try {
        token = await AsyncStorage.getItem('tokenUser');
      } catch (e) {
        console.log(e);
      }
      dispatch(UpdateAuth(token));
    }, 1500);
  }, []);

  if (loading) {
    return <Splash_Screen />;
  }
  return <>{!tokenUser ? <AuthStack /> : <TabStack />}</>;
};

const App2 =()=>{
  return(
    <>
  <App/>
  </>
  )
}
export default App2;


