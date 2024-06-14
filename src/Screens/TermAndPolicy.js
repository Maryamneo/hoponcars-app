import React from 'react';
import { View, Text,Image, TouchableOpacity,KeyboardAvoidingView,TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { colors } from '../Constants/index';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const TermAndPolicy = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} style={styles.arrowStyle} />
        </TouchableOpacity>
        <View style={styles.secView}>
            <View style={styles.imgView}>
                <Image source={require('../Images/Designer.png')} style={styles.imgStyle} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.textStyle}>
                    By tapping the arrow below, you agree to Uber’s Terms of Use and acknowledge that you have read the Privacy Policy.
                </Text>
            </View>
        </View>
        <View style={styles.btnView}>
            <Text style={styles.lightStyle}>
                Check the box to indicate that you are at least 18 years of age, agree to the <Text style={styles.termStyle}>Terms & Conditions</Text> and acknowledge the <Text style={styles.termStyle}>Privacy Policy</Text>.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAwareScrollView>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 16,
    justifyContent: 'space-between',
},
secView: {
    flex: 1,
    justifyContent: 'space-evenly',
},
imgView: {
    alignItems: 'center',
    marginTop: hp(5),
},
imgStyle: {
    height: hp(20),
    width: wp(40),
},
arrowStyle: {
    color: colors.White,
    marginBottom: hp(2),
},
textView: {
    marginTop: hp(2),
    alignItems: 'center',
    paddingHorizontal: wp(0),
},
textStyle: {
    fontSize: 17,
    color: '#EDF6FF',
    fontWeight: '400',
    textAlign: 'left',
},
// btnView: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: wp(5),
//     paddingBottom: hp(0),
// },
lightStyle: {
    fontSize: 14,
    color: '#EDF6FF',
    fontWeight: '400',
    textAlign: 'left',
    marginBottom: hp(2),
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
},
buttonText: {
  color: 'white',
  fontSize: 18,
},
termStyle: {
    color: colors.purpleblue,
},
});

export default TermAndPolicy;