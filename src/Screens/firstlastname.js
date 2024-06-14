import React from 'react';
import { View, Text, TouchableOpacity,KeyboardAvoidingView,TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { colors } from '../Constants/index';
const NameScreen = ({ navigation }) => {
  return (

    <KeyboardAvoidingView style={{ flex: 1,backgroundColor:'red' }}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" style={styles.arrowStyle} />
          </TouchableOpacity>
          <Text style={styles.title}>What's your name?</Text>
           <View style={styles.inputContainer}> 
            <TextInput placeholder="First" style={styles.input} placeholderTextColor="white" />
            <TextInput placeholder="Last" style={styles.input} placeholderTextColor="white" />
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TermAndPolicy')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      padding: 16,
      justifyContent: 'space-between',

    },
    title: {
      fontSize: 24,
      color: colors.White,
      marginBottom: 40,
      marginTop:20,
      textAlign: 'left',
      fontWeight:'500'
    
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 300,
      alignSelf: 'center',
    },
    input: {
        color: colors.White,
      borderBottomWidth: 1,
      borderBottomColor: colors.graywhite,
      width: 140,
      padding: 8,
      fontSize: 16,
    },
    arrowStyle: {
      marginRight: 'auto',
    },
    btnView: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#000000',
      paddingVertical: 15,
      borderRadius: 5,
      marginTop: 40,
      alignItems: 'center',
      width: '100%',
      shadowOpacity:10,
      elevation:10
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });

export default NameScreen;
