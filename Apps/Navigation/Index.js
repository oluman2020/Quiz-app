import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import Home from "../Screens/Home"
import Quiz from "../Screens/Quiz"
import Result from "../Screens/Result.js"


const Stack = createStackNavigator()
const MyStack = () => (

    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Myquiz' component={Quiz} />
        <Stack.Screen name='Result' component={Result} />
    </Stack.Navigator>
)
export default MyStack