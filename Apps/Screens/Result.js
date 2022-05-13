import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Result() {
    return (
        <View>
            <View>
                <Text>Result</Text>
                <View style={styles.banner}>
                    < Image
                        style={styles.image}
                        source={require('../assets/speed.png')}
                        resizeMode='contain'

                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>Homes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    banner: {
        padding: 8,

    },
    image: {
        height: 250,
        width: 300,
    }

})