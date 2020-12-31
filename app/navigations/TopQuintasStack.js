import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopQuintas from '../screens/TopQuintas'

const Stack = createStackNavigator();

export default function TopQuintasStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='TopQuintas'
                component={ TopQuintas }
                options={{ title: 'Las Mejores Quintas' }}
            />
        </Stack.Navigator>
    )
}
