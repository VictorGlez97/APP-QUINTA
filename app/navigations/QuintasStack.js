import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Quintas from '../screens/Quintas'

const Stack = createStackNavigator();

export default function QuintasStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Quintas'
                component={ Quintas }
                options={{ title: 'Quintas' }}
            />
        </Stack.Navigator>
    )
}
