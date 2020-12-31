import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import FeedStack from './FeedStack'
import QuintasStack from './QuintasStack'
import TopQuintasStack from './TopQuintasStack'
import AccountStack from './AccountStack'
import SearchStack from './SearchStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {

    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="feed"
                tabBarOptions={{ 
                    inactiveTintColor: "#1E90FF",
                    activeTintColor: "#7B68EE",      
                }}

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions( route, color )
                })}
            >

                <Tab.Screen 
                    name="feed" 
                    component={ FeedStack } 
                    options={{ title: 'Inicio' }} 
                />

                <Tab.Screen 
                    name="quintas" 
                    component={ QuintasStack }
                    options={{ title: 'Quintas' }}
                />

                <Tab.Screen 
                    name="buscar" 
                    component={ SearchStack }
                    options={{ title: 'Buscar' }}
                />

                <Tab.Screen 
                    name="ranking" 
                    component={ TopQuintasStack }
                    options={{ title: 'Ranking' }}
                />

                <Tab.Screen 
                    name="cuenta" 
                    component={ AccountStack }
                    options={{ title: 'Mi Cuenta' }}
                />
            
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions( route, color ){

    let type;
    let iconName;

    switch (route.name) {
        
        case 'feed':
            type="simple-line-icon"
            iconName = "home"
            break;
        
        case 'quintas':
            // type="font-awesome-5"
            // iconName = "warehouse"
            type="simple-line-icon"
            iconName = "support"
            break;
        
        case 'buscar':
            type="antdesign"
            iconName = "search1"
            break;
    
        case 'cuenta':
            type="simple-line-icon"
            iconName = "user"
            break;    
    
        case 'ranking':
            // type="font-awesome-5"
            // iconName="crown"
            type="simple-line-icon"
            iconName = "star"
            break;

        default:
            break;
    }
    
    return (
        <Icon type={ type } name={ iconName } size={22} color={ color } />
    )
}