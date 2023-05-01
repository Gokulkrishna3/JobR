import React from 'react'
import { View,StyleSheet,Image,Text,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TreeHeader = (props) => {
    return(
       <View style={{backgroundColor:'white',paddingVertical:10}}>
         <View style={styles.successRow}>
        <Icon name="chevron-back-outline" size={20} color='grey' />

            <View>
                <Text style={{fontWeight:'800',color:'black'}}>{props.header}</Text>
            </View>
            {!props.hideInput ? <View style={{flexDirection:'row'}}>
        <Icon name="funnel-outline" size={20} color='grey' />
        <View style={{marginLeft:8}}>
        <Icon name="notifications-outline" size={22} color='grey' />
        </View>
        </View> : <View style={{flexDirection:'row'}}><Icon name="ellipsis-vertical-outline" size={20} color='grey' /></View>}
       
        </View>
        {!props.hideInput && <View style={styles.searchContainer}>
        <Icon name="search" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#999"
       />
      </View>}
       </View>
       
        
    )
}

export default TreeHeader

const styles = StyleSheet.create({
    successRow: {
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:15,
        paddingTop:10,
        paddingHorizontal:30
    },
    container: {
        backgroundColor: '#fff',
        padding: 10,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth:1,
        borderRadius:15,
        marginHorizontal:20
      },
      searchIcon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        height: 40,
        color: '#000',
        fontSize: 16,
      },
})