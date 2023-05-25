import * as React from 'react'; 
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {useState} from 'react';



export default function Onboarding({navigation}){
  const [firstName, onChangeFirstName] = useState('');
  const [email, onChangeEmail] = useState('');

  return(
    <View style={{flex: 1}}>
      <View style={{flex: 0.15, backgroundColor: 'white'}}>
        <Text>Inserire logo</Text>
      </View>
      <View style={{flex: 0.55, backgroundColor: '#EDEFE0'}}>
        <Text style={styles.headerText}>Let us get to know you</Text>
        <Text style={styles.regularText}>First Name</Text>
        <TextInput
          style={styles.inputBox}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={'First Name'}
        />
        <Text style={styles.regularText}>Email</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={'Email'}
        />
      </View>
      <View style={{flex: 0.3, backgroundColor: 'white'}}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
    
  );
}

const styles= StyleSheet.create({
  headerText: {
    padding: 40,    
    marginBottom: 60,
    fontSize: 30,    
    textAlign: 'center',
  },
  regularText: {
    padding: 10,
    fontSize: 24,    
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    borderColor: '#000000',
    backgroundColor: '#EDEFEE',
    borderRadius: 10
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EDEFE0',
    borderColor: '#EDEFE0',
    borderWidth: 2,
    borderRadius: 10,
    
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});