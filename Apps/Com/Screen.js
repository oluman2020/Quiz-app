import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

export default function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.container, style]}><View>{children}</View></SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: 'white'

    }
})