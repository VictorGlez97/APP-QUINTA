import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'

export default function Register() {

    const [login, setlogin] = useState({})

    const HandleInputChange = ( input, text ) => {

        setlogin({
            ...login,
            [ input ] : text,
        })

        //console.log( login )

    }

    const Register = async() => {

        if (login.pass === login.pass2 & login.pass != '' & login.pass2 != ''){

            const url = 'https://apiquinta.000webhostapp.com/users/register'

            const newUser = JSON.stringify([{
                'name': login.name,
                'lastname': login.lastname,
                'tel': login.tel,
                'email': login.email,
                'pass': login.pass
            }]);
            //console.log( newUser );

            const response = await fetch( url, {
                method: 'POST',
                body: newUser,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            const jsonResponse = await response.json();
            console.log( jsonResponse );
        }

    }

    return (
        <ScrollView
            centerContent={ true }
            style={ styles.ViewBody }
        >
            <View>

                <Text style={ styles.Label }> Nombre </Text>
                <Input 
                    placeholder='Nombre'
                    leftIcon={<Icon type='material-community' name='account-outline' />}
                    onChangeText={ ( text ) => HandleInputChange( 'name', text ) }
                />

                <Text style={ styles.Label }> Apellido </Text>
                <Input 
                    placeholder='Apellido'
                    leftIcon={<Icon type='material-community' name='account-outline' />}
                    onChangeText={ ( text ) => HandleInputChange( 'lastname', text ) }
                />

                <Text style={ styles.Label }> Correo </Text>
                <Input 
                    placeholder='Correo'
                    leftIcon={<Icon type='material-community' name='email-outline' />}
                    onChangeText={ ( text ) => HandleInputChange( 'email', text ) }
                />

                <Text style={ styles.Label }> Celular </Text>
                <Input 
                    placeholder='Celular'
                    leftIcon={<Icon type='material-community' name='phone-outline' />}
                    onChangeText={ ( text ) => HandleInputChange( 'tel', text ) }
                />

                <Text style={ styles.Label }> Contraseña </Text>
                <Input 
                    secureTextEntry={ true }
                    placeholder='Contraseña'
                    leftIcon={<Icon type='material-community' name='lock-outline' />}
                    onChangeText={ ( text ) => HandleInputChange( 'pass', text ) }
                />

                <Text style={ styles.Label }> Repita la contraseña </Text>
                <Input 
                    secureTextEntry={ true }
                    placeholder='Contraseña'
                    leftIcon={<Icon type='material-community' name='lock-outline' />}
                    onChangeText={ ( text ) => HandleInputChange( 'pass2', text ) }
                />

                <Button 
                    title='Registrarme'
                    onPress={ () => Register() }
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
        fontWeight: 'bold',
        color: '#1E90FF'
    }
})