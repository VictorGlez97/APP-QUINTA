import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import { Icon, Input, Card, Button } from 'react-native-elements'

import { quintas } from '../utils/quintasobj'

export default function Search() {
    
    const [busqueda, setbusqueda] = useState({})
    const [input, setinput] = useState({})

    // useEffect(() => {
        
        
    // }, [ input ])
    
    const HandleInputChange = async (inp, val) => {

        await setinput({
            ...input,
            [ inp ]: val,
        })

        console.log( input )
        //SearchQuinta( input )

    }

    const SearchQuinta = () => {

        setbusqueda( quintas.filter( (quinta) => {
            return quinta.name.toLowerCase().indexOf( input.buscar.toLowerCase() ) > -1
        }))

        console.log( busqueda )

    }
    
    return (
        <ScrollView>
            <View>
                
                <Input 
                    placeholder='buscar por nombre de quinta'
                    onChangeText={ (value) => HandleInputChange('buscar', value) }
                    style={{ width: '80%' }}
                />

                <Button    
                    icon={ <Icon type='font-awesome' name='search' color='white' /> }
                    onPress={ () => SearchQuinta() }
                    style={{ width: '30%', alignSelf: 'center' }}
                />

            </View>

            <View style={ styles.ContCards }>

            {
                busqueda.length >= 1 
                ?
                busqueda.map( (quinta) => 

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
                :
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

        </ScrollView>
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