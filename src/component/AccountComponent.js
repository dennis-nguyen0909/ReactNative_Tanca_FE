import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { colors } from '../contains/color';

export const AccountComponent = () => {
    return (
        <View style={{ marginTop: 200, width: 335, height: 112, backgroundColor: colors.backGroundInputText, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, borderRadius: 20 }}>
            <View style={{ position: 'relative' }}>
                <Image source={require("../../assets/elipse.png")} />
                <Image source={require("../../assets/mobile.png")} style={{ position: 'absolute', top: -5, left: 3 }} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Text style={{ fontWeight: 500, fontSize: 18 }}>Don’t have an account?</Text>
                <View >
                    <Text style={{ color: colors.textSignUp }}>Accept the invite email from</Text>
                    <Text style={{ color: colors.textSignUp }}>your manager to sign up</Text>
                </View>
            </View>
            <View>
                <Image source={require("../../assets/arrowRigh.png")} />
            </View>
        </View>
    )
}
