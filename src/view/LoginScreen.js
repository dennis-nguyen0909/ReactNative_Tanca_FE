import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { colors } from '../contains/color';
import { ButtonItem } from '../component/ButtonItem';

export const LoginScreen = () => {
    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                <Image
                    style={{ color: colors.back, marginLeft: 25 }}
                    source={require("../../assets/Back.png")} />
                <Text style={{
                    fontSize: 20, fontWeight: 600,
                    width: 206, height: 26,
                    marginLeft: 49
                }}>Create your business</Text>
            </View>
            <View style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', marginTop: 50 }}>
                <Image source={require("../../assets/Artwork8.png")} style={styles.image} />
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.text}>Creating an account will allow you to use</Text>
                    <Text style={styles.text}>Tanca on your phone and on the web</Text>
                </View>
            </View>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30 }} >
                <TouchableOpacity style={styles.btnSignUp} >
                    <Image source={require("../../assets/Vector.png")} />
                    <Text style={styles.textSignUp}>Sign Up with Iphone</Text>
                </TouchableOpacity>
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
        </>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 322,
        height: 247
    },
    text: {
        color: colors.text,
    }, btnSignUp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.btnSignUp,
        width: 336,
        height: 53,
        borderRadius: 20
    }, textSignUp: {
        color: colors.colorBtnSignUp,
        marginLeft: 10
    }, line: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 30, marginTop: 40
    }, containerButton: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 30
    }
})


