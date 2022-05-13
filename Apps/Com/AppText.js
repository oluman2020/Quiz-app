import { Text, StyleSheet, Platform, } from 'react-native'
import React from 'react'


export default function AppText({ children, style, ...otherProps }) {

    return (

        <Text style={[styles.text, style]}{...otherProps}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        textTransform: 'lowercase',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",

    }

})