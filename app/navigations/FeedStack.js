import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Feed from '../screens/Feed'

const Stack = createStackNavigator();

export default function FeedStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Feed'
                component={ Feed }
                options={{ title: 'Inicio' }}
            />
        </Stack.Navigator>
    )
}
