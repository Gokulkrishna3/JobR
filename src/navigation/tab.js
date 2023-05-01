import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, TouchableOpacity } from 'react-native';
import Home from '../screens/home';
import Job from '../screens/job';
import Calender from '../screens/calender';
import Task from '../screens/task';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
 
    <Tab.Navigator
    screenOptions={{
      tabBarStyle : {
        position:'absolute',
        bottom:25,
        left:20,
        right: 20,
        elevation:0,
        backgroundColor:'#ffffff',
        borderRadius:15,
        height:90,
      },
      headerShown:false
    }}
    >
      <Tab.Screen name="home" component={Home} 
      options={{
        tabBarLabel:'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home-outline" size={25} color="black" />
        ),
      }}/>
      <Tab.Screen name="job" component={Job} 
       options={{
        tabBarLabel: 'Job',
        tabBarIcon: ({ color, size }) => (
          <Icon name="desktop-outline" size={25} color="black" />
        ),
      }}/>
      <Tab.Screen name="jobs" component={Job} 
       options={{
        tabBarLabel: '',
        tabBarIcon: () => (
          <View style={{top:-30,justifyContent:'center', alignItems:'center'}}>
          <Icon name="add-outline" size={25} color="black" style={{width:50,height:50,borderRadius:35,backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}/>
          </View>
        ),
      }}/>
      <Tab.Screen name="calender" component={Calender} 
       options={{
        tabBarLabel: 'Calender',
        tabBarIcon: ({ color, size }) => (
          <Icon name="calendar-outline" size={25} color="black" />
        ),
      }}/>
      <Tab.Screen name="task" component={Task} 
       options={{
        tabBarLabel: 'Task',
        tabBarIcon: ({ color, size }) => (
          <Icon name="clipboard-outline" size={25} color="black" />
        ),
      }}/>

    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
   icon : {
    alignItems:'center',
    justifyContent: 'center'
   }
});

export default MyTabs;

