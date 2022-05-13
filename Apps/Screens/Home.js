import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../Com/Title'
import AppText from '../Com/AppText'
import Constants from "expo-constants";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Title />

            <View>
                < Image
                    style={styles.image}
                    source={require('../assets/speed.png')}

                    resizeMode='contain'

                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Myquiz')}>
                <AppText>Start</AppText>
            </TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({

    container: {

        paddingTop: Constants.statusBarHeight,

    },

    image: {
        height: 250,
        width: 300,
        resizeMode: 'contain'

    }
})