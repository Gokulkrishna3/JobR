import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import TreeHeader from '../components/header';
import { useSelector } from 'react-redux';

function Job(props) {
  const myState = useSelector(state => state.myReducer);

  const [empData,setEmpData] = React.useState(myState.data);

  return (
    < >
  <TreeHeader header={'All Jobs'} navigation={props.navigation} hideInput={false}/>
 <>
 {empData?.map((row, index) => (
  <TouchableOpacity onPress={()=> {
    props.navigation.navigate('task',{data:row})
  }}>
             <Card key={index}>
             <View>
                    <Text style={{color:'blue',fontWeight:'800',color:'blue'}}>{row.EmpID} -{row.EmpName}</Text>
                    <Text style={{fontWeight:'800',fontSize:12,color:'black'}}>{row.CompName}</Text>
                   <View style={{flexDirection:'row',marginVertical:8}}>
                   <View style={{flexDirection:'row',marginRight:25,}}>
                    <Icon name="briefcase-outline" size={20} color='grey' />
                    <Text style={{marginLeft:5,fontWeight:'800',color:'black'}}>{row.Designation}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginRight:20}}>
                    <Icon name="calendar-outline" size={20} color='grey' />
                    <Text style={{marginLeft:5,fontWeight:'800',color:'black'}}>{row.Date}</Text>
                    </View>
                   </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Icon name="location-outline" size={20} color='grey' />
                    <Text  style={{fontWeight:'800',color:'black'}}>{row.Location}</Text>
                    </View>
                </View>
            </Card> 
            </TouchableOpacity>
                ))}
            </>
            </>
            )
}

export default Job



