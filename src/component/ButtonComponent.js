import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { colors } from '../contains/color';

export const ButtonComponent = ({ text, img }) => {
    return (
        <TouchableOpacity style={styles.btnSignUp} >
            {img ? (
                <Image source={img} />
            ) : <></>}
            <Text style={styles.textSignUp}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnSignUp: {
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
    }
})