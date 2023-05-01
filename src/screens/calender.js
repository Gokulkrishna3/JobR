import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View, Text, Button, StyleSheet } from 'react-native';

function Calender() {
  return (
   
  
<View style={styles.container}>
<Text>Calender Screen</Text>
<Button title='Click Here'/>
</View>

   
  )
}

export default Calender

const styles = StyleSheet.create({
container : {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : '#8fcbbc'
}
});

