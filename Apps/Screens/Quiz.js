import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Quiz() {
    return (
        <View style={styles.Container}>
            <View >
                <Text>Imagin this is real question </Text>
            </View>
            <View style={styles.Options}>
                <TouchableOpacity>
                    <Text>Option 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 2 </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 3 </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 4 </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity>
                    <Text>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress>
                    <Text>End</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    Container: {
        paddingTop: 10,
        height: '100%',

    },
    Options: {
        marginVertical: 20,
        flex: 1,

    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginBottom: 15
    },
});