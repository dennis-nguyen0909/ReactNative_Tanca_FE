import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export const ButtonItem = ({ image }) => {
    return (
        <TouchableOpacity >
            <Image source={image} />
        </TouchableOpacity>
    )
}
