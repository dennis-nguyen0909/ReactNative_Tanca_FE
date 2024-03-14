import React from 'react'
import { colors } from '../contains/color';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { TextInputCustom } from '../component/TextInputCustom';
import { ButtonItem } from '../component/ButtonItem';
import { ButtonComponent } from '../component/ButtonComponent';
import { AccountComponent } from '../component/AccountComponent';
export const SignUpScreen = () => {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                <Image
                    style={{ color: colors.back, marginLeft: 25 }}
                    source={require("../../assets/Back.png")} />
                <Text style={{
                    fontSize: 20, fontWeight: 600,
                    width: 206, height: 26,
                    marginLeft: 49
                }}>Sign up Tanca</Text>
            </View>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <TextInputCustom />
            </View>
            <View>
                <Text style={{ color: colors.gray, marginLeft: 30, paddingVertical: 10 }}>Email required, phone optional</Text>
            </View>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                <ButtonComponent text={'Sign Up'} />
            </View>
            <View style={styles.line}>
                <Image source={require("../../assets/Vector5.png")} />
                <Text>or, sign up with</Text>
                <Image source={require("../../assets/Vector5.png")} />
            </View>
            <View style={styles.containerButton}>
                <ButtonItem image={require("../../assets/email.png")} />
                <ButtonItem image={require("../../assets/faceboo.png")} />
                <ButtonItem image={require("../../assets/google.png")} />
                <ButtonItem image={require("../../assets/apple.png")} />
            </View>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <AccountComponent />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 30, marginTop: 40
    }, containerButton: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 30
    }
})