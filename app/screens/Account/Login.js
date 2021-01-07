import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation();

    const [login, setlogin] = useState({})

    const HandleInputChange = ( input, text ) => {

        setlogin({
            ...login,
            [ input ] : text,
        })

        console.log( login )

    }

    return (
        <ScrollView
            centerContent={ true }
            style={ styles.ViewBody }
        >
            <View>

                <Text style={ styles.Label }> Correo </Text>
                <Input 
                    placeholder='Correo'
                    leftIcon={<Icon type='material-community' name='email-outline' />}
                    onChangeText={ ( text ) => HandleInputChange( 'email', text ) }
                />

                <Text style={ styles.Label }> Contraseña </Text>
                <Input 
                    secureTextEntry={ true }
                    placeholder='Contraseña'
                    leftIcon={<Icon type='material-community' name='lock-outline' />}
                    onChangeText={ ( text ) => HandleInputChange( 'pass', text ) }
                />

                <Button 
                    title='Entrar'
                    style={{ marginBottom: 8 }}
                />

                <Button 
                    title='Registrarme'
                    onPress={ () => navigation.navigate('Registro') }
                />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ViewBody: {
        marginLeft: 30,
        marginRight: 30,
    },
    Label: {
        fontWeight: 'bold'
    }
})