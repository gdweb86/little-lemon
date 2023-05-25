import {View, Text, StyleSheet, Image, Pressable, TextInput, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Profile(){
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');

  return(
    <SafeAreaView>
    <ScrollView showVerticalScrollIndicator={false}>
    <View>
      <Text style={styles.headerText}>Personal information</Text>
    </View>
    <View style={styles.profileHeader}>
      <Image source={require('../assets/Profile.png')} style={styles.logo} />
      <Pressable style={styles.buttonC}>
          <Text style={styles.buttonText}>Change</Text>
        </Pressable>
        <Pressable style={styles.buttonR}>
          <Text style={styles.buttonText}>Remove</Text>
        </Pressable>
    </View>
    <View>
        <Text style={styles.regularText}>First Name</Text>
        <TextInput
          style={styles.inputBox}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={'First Name'} 
        />

        <Text style={styles.regularText}>Last Name</Text>
        <TextInput
          style={styles.inputBox}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder={'Last Name'} 
        />

        <Text style={styles.regularText}>Email</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={'Email'} 
        />

        <Text style={styles.regularText}>Phone Number</Text>
        <TextInput
          style={styles.inputBox}
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          placeholder={'Phone Number'} 
        />

        <Text style={styles.headerText}>Email Notifications</Text>

        <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Order statuses"
          iconStyle={{ borderColor: "green" }}
          innerIconStyle={{ borderWidth: 2 }}
          style={styles.checkbox}
          //textStyle={{ fontFamily: "JosefinSans-Regular" }}
          textStyle={{ textDecorationLine: "none",}}
          isChecked
          onPress={(isChecked) => {}}
        />

        <BouncyCheckbox
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Password changes"
          iconStyle={{ borderColor: "green" }}
          innerIconStyle={{ borderWidth: 2 }}
          style={styles.checkbox}
          //textStyle={{ fontFamily: "JosefinSans-Regular" }}
          textStyle={{ textDecorationLine: "none",}}
          isChecked
          onPress={(isChecked) => {}}
        />
        <BouncyCheckbox
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Special offers"
          iconStyle={{ borderColor: "green" }}
          innerIconStyle={{ borderWidth: 2 }}
          style={styles.checkbox}
          //textStyle={{ fontFamily: "JosefinSans-Regular" }}
          textStyle={{ textDecorationLine: "none",}}
          isChecked
          onPress={(isChecked) => {}}
        />

        <BouncyCheckbox
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Newsletter"
          iconStyle={{ borderColor: "green" }}
          innerIconStyle={{ borderWidth: 2 }}
          style={styles.checkbox}
          //textStyle={{ fontFamily: "JosefinSans-Regular" }}
          textStyle={{ textDecorationLine: "none",}}
          isChecked
          onPress={(isChecked) => {}}
        />        
        </View>

    </View>
    <View>
      <Pressable style={styles.buttonLogout}>
        <Text style={styles.buttonText}>Log out</Text>
      </Pressable>
    </View>
    <View style={styles.profileHeader}>      
      <Pressable style={styles.buttonR}>
          <Text style={styles.buttonText}>Discard changes</Text>
        </Pressable>
        <Pressable style={styles.buttonC}>
          <Text style={styles.buttonText}>Save changes</Text>
        </Pressable>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerText:{
    fontSize: 24,
    margin: 12
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden"
     
  },
  profileHeader:{
    flexDirection: 'row',
    margin: 20
  },
  buttonC: {
    flex: 1,
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    height: 50,
    margin: 8,
    backgroundColor: 'green',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,    
  },
  buttonR: {
    flex: 1,
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    height: 50,
    margin: 8,
    backgroundColor: '#FFFFFF',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,    
  },
  buttonLogout:{
    flex: 1,
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    height: 50,
    margin: 8,
    backgroundColor: 'yellow',
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 10,    
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  regularText: {
    padding: 10,
    fontSize: 16,    
    textAlign: 'flex-start',
  },
  inputBox: {
    height: 40,
    marginTop: 2,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    borderColor: 'green',
    backgroundColor: '#EDEFEE',
    borderRadius: 10
  },

  checkboxContainer: {

    marginBottom: 20,
  },
  checkbox: {
    padding: 12
  }


});