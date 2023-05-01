import React from 'react'
import {View, Text, Button, StyleSheet, ScrollView,Card } from 'react-native';
import TreeHeader from '../components/header';
import Icon from 'react-native-vector-icons/Ionicons';

function Task(props) {
 
  return (
    <>
    <>
     <TreeHeader hideInput={true}  header={`${props.route.params.data.EmpID}-${props.route.params.data.Designation}`} />
 
    </>

  </>
  )
}

export default Task;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#8fcbbc'
  }
  });
  


