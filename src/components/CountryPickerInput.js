import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from '../Constants/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CountryPickerInput = ({ onSelect, countryNameCode, callingCode, value, onChangeText }) => {
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    
    return (
        <View style={styles.countryPickerInputContainer}>
            <TouchableOpacity
                style={styles.countryCodeContainer}
                onPress={() => setShowCountryPicker(true)}
            >
                <CountryPicker
                    onSelect={onSelect}
                    cca2={countryNameCode}
                    translation="eng"
                    visible={showCountryPicker}
                    countryCode={countryNameCode}
                    withCallingCode={true}
                    withFilter={true}
                    withFlag={true}
                    onClose={() => setShowCountryPicker(false)}
                />
                 <Ionicons name="chevron-down" size={15} color={colors.White} />
           
                  <Text style={styles.countryCodeText}>{callingCode}</Text>
               
            </TouchableOpacity>
            <TextInput
                placeholder="Phone Number"
                style={styles.phoneInputText}
                placeholderTextColor="grey"
                keyboardType="number-pad"
                value={value}
                onChangeText={onChangeText}
                returnKeyType="done"
                maxLength={12}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    countryPickerInputContainer: {
        justifyContent:'center',
        width: wp('90%'),
        alignSelf: 'center',
        height: hp('7%'),
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft:wp(3),
        //  borderWidth: 0.8,
        // borderTopLeftRadius: 15,
        // borderBottomRightRadius: 15,
        //  borderBottomColor: '#293170',
        paddingHorizontal: wp(3),
        marginTop: hp(1.5),
        // backgroundColor: 'white',
    },
    countryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: hp('7%'),
        width: wp('20%'),
    },
    countryCodeText: {
        color: colors.White,
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 5,
    },
    phoneInputText: {
        flex: 1,
        color: 'black',
        fontSize: 16,
        marginLeft: wp('6%'),
        borderBottomWidth:1,
        borderBottomColor:'white',
      

        // backgroundColor: 'white',
    },
});
