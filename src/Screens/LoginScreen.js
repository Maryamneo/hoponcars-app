import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CountryPickerInput } from '../components/CountryPickerInput';
import { colors } from '../Constants/index';

const LoginScreen = ({ navigation }) => {
    const [countryNameCode, setCountryNameCode] = useState('GB');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [callingCode, setCallingCode] = useState('+44');

    const onCountrySelect = value => {
        setCountryNameCode(value.cca2);
        setCallingCode('+' + value.callingCode);
    };

 return (
    // <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
         <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" style={styles.arrowStyle} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Enter your mobile number</Text>
                    <View style={styles.inputContainer}>
                        <CountryPickerInput
                            countryNameCode={countryNameCode}
                            callingCode={callingCode}
                            onSelect={onCountrySelect}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                    </View>
                </View>
                <View style={styles.btnView}>
                    <Text style={styles.textStyle}>By continuing you may recieve an SMS for
                                   verification. Message and data rates may apply.</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('NumberVerify')}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        // </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 16,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 28,
        color: 'white',
        marginBottom: 40,
        marginTop: 20,
        textAlign: 'left',
        fontWeight: '500',
    },
    inputContainer: {
        flexDirection: 'row',
        width: wp('100%'),
        alignSelf: 'center',
        marginVertical: 20,
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
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    textStyle:{
        bottom:0,
        // marginTop:hp(10),
        fontSize:16,
        color:colors.graywhite
    }
});

export default LoginScreen;
