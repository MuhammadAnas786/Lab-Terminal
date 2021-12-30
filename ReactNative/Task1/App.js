import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  
  return (
    <View style={styles.container2}>

      {/* <View>
      <View style={{marginBottom:'20px', backgroundColor:'gray',color:'white'}}>
      <View>Muhammad Anas</View>
      <View>
      FA18-BSE-084
    </View>
      </View>
      <View>
        192-100
      </View>
      <View>
      92
      </View>

      </View>

    <View style={styles.container}>
      
     <View style={{backgroundColor:'gray',border:'1px solid black',padding:'30px'}} >
        <Text style={styles.white}>7</Text>
        <Text style={styles.white}>4</Text>
        <Text style={styles.white}>1</Text>
        <Text style={styles.white}>AC</Text>
      </View>
      <View style={{backgroundColor:'gray',border:'1px solid black',padding:'30px'}} >
      <Text style={styles.white}>8</Text>
        <Text style={styles.white}>5</Text>
        <Text style={styles.white}>2</Text>
        <Text style={styles.white}>0</Text>
    </View>
    <View style={{backgroundColor:'gray',border:'1px solid black',padding:'30px'}} >
    
        <Text style={styles.white}>9</Text>
        <Text style={styles.white}>6</Text>
        <Text style={styles.white}>3</Text>
        <Text style={styles.white}>=</Text>
          </View>
    <View style={{backgroundColor:'blue',border:'1px solid black',padding:'30px'}}>
    <Text style={styles.white}>/</Text>
        <Text style={styles.white}>x</Text>
        <Text style={styles.white}>+</Text>
        <Text style={styles.white}>-</Text>
         </View>
   </View>
    */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
  },
  container2: {
    display:'flex',
    width:'100vw',
    height:'100vh',
    backgroundColor: 'red',
  },
  white:{
    color:'white',
    marginBottom:'10px'
  }
});
