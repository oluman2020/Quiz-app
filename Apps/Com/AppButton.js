import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import AppText from './AppText'
import Colors from '../Config/Colors'



export default function AppButton({ title, color = 'primary', onPress }) {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: Colors[color] }]}>

            <AppText style={styles.text} onPress={onPress}>{title}</AppText>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 25,
        backgroundColor: "#4ecdc4",
        padding: 15,
        marginVertical: 10,
    },

    text: {
        textTransform: "uppercase",
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }



})