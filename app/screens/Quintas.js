import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button, Icon, Image } from 'react-native-elements'

import { quintas } from '../utils/quintasobj'

export default function Quintas() {
    return (
        <View style={ styles.ContCards }>

            {
                quintas.map( (quinta) => 

                    // {/*const img_url = `../../assets/img/${ quinta.img }`},

                    <Card containerStyle={ styles.cardStyle } >
                        <Card.Image 
                            source={ {uri: "../../assets/img/" + quinta.img } } 
                            style={ styles.cardImg }
                        />
                        <Card.Title> { quinta.name } </Card.Title>
                        <Button
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            icon={ <Icon type='material-community' name='eye-outline' color='#FFF' /> }
                            onPress={ () => console.log( `../../assets/img/${quinta.img}` ) }
                        />
                    </Card>

                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    ContCards: {
        alignItems: 'center',
    },
    cardStyle: {
        width: '95%',
        borderRadius: 8,
    },
    cardImg: {
        flex: 1,
        marginBottom: 3,
        width: '100%'
    },
    cardbtn: {
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0,
    },
})