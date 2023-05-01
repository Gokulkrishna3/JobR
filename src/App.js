/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MyTabs from './navigation/tab';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { useStore } from '../src/redux/store/store';



const  App = ()=>{
  const store = useStore();

  return (
    <Provider store={store}>
<NavigationContainer>
 <MyTabs/>
</NavigationContainer>
</Provider>
  );
}



export default App;
