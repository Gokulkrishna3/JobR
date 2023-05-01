import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Home() {
  return (
   
  
<View style={styles.container}>
<Text>Home Screen</Text>
<Button title='Click Here'/>
</View>

   
  )
}

export default Home

const styles = StyleSheet.create({
container : {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : '#8fcbbc'
}
});

