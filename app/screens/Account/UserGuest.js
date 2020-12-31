import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements' 
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {

    const navigation = useNavigation();

    return (
        <ScrollView
            centerContent={ true }
            style={ styles.viewBody }
        >
            
            <Image 
                source={ require("../../../assets/img/usericon.png") }
                resizeMode="contain"
                style={ styles.image }
            />

            <Text style={ styles.title }> Consulta tu perfil de "Quinta" </Text>
            <Text style={ styles.description }>
                ¿ Como disfrutaras de tu proximo evento ?
            </Text>
            <View style={ styles.viewbtn }>
                <Button 
                    title="Ver tu perfil"
                    buttonStyle={ styles.btnStyle }
                    containerStyle={ styles.btnContainer }
                    onPress={ () => navigation.navigate('Login') }
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 350,
        width: '100%',
        marginBottom: 40,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    viewbtn: {
        flex: 1,
        alignItems: 'center',
    },
    btnStyle: {
        backgroundColor: '#1E90FF',
    },
    btnContainer: {
        width: '70%',
    }
})
