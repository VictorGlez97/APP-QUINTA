import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Modal, TouchableHighlight, StyleSheet } from 'react-native'
import { Card, Button, Icon, Image, Divider } from 'react-native-elements'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import axios from 'axios'
import Loading from '../components/Loading'
import { quintas } from '../utils/quintasobj'

export default function Feed() {
    
    //const [quintas, setquintas] = useState({})
    const [viewquinta, setviewquinta] = useState({ visible: false, quinta: {} })

    // const req = fetch('http://localhost:80/APIQUINTA/api/quintas/list')
    // .then((response) => response.json())
    // .catch((e) => console.log( e ))

    return (
        <ScrollView>
            <Map setviewquinta={ setviewquinta } />
            <Cards />
            <ModalCard viewquinta={ viewquinta } setviewquinta={ setviewquinta } />
        </ScrollView>
    )
}

function Map( props ){

    const [location, setlocation] = useState({})

    const { setviewquinta } = props;
    console.log( setviewquinta )

    useEffect(() => {
        
        ( async () => {
            const resultPermisions = await Permissions.askAsync( 
                Permissions.LOCATION 
            );
            //console.log( resultPermisions )
            const statusPermissions = resultPermisions.permissions.location.status;

            if ( statusPermissions !== "granted" ){

            } else {
                const loc = await Location.getCurrentPositionAsync({})
                //console.log( loc )
                setlocation({
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                })
                //console.log( location )
            }

        })();

    }, [])

    return(
        <View>
            {   location.latitude & location.longitude
                    ?  
                <MapView 
                    style={ styles.mapStyle }
                    initialRegion={ location }
                    showsUserLocation={ true }
                    onRegionChange={ ( region ) => setlocation( region ) }
                >
                    {/* <MapView.Marker 
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        draggable
                    /> */}

                    {
                        quintas.map( (quinta) => 
                            
                            <MapView.Marker 
                                coordinate={{
                                    latitude: quinta.lat,
                                    longitude: quinta.lng
                                }}
                                draggable
                                onPress={ () => setviewquinta({ visible: true, quinta }) }
                                key={ quinta.id }
                            />

                        )
                    }

                </MapView>
                    :
                <Loading isVisible={ true } text='Cargando...' />
            }
        </View>
    );
}

function Cards() {

    // const [quintas, setquintas] = useState({})

    // useEffect(() => {
        
    //     ( async () => {
            
    //         await axios.get("http://localhost:4000/api/users")
    //         .then( response => {
    //             const quinta = response.data;
    //             //console.log( quinta )
    //             setquintas( quinta );
    //         })
    //         .catch( ( e ) => console.log( e ) )
        
    //     })();

    // }, [])

    // console.log( quintas )
    console.log( quintas )

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

function ModalCard( props ) {

    const { viewquinta, setviewquinta } = props
    console.log( viewquinta )

    const HandleCloseModal = () => {
        setviewquinta({ visible: false, quinta: {} })
    }

    return(

        <Modal
            animationType="slide"
            transparent={ true }
            visible={ viewquinta.visible }
            style={ styles.modalbehind }
        >
            <View style={ styles.centerstyle }>
                <View style={ styles.modalstyle }>

                    <View style={ styles.quintaperform }>

                        
                        <View style={ styles.cardperform }>
                        
                            <Text style={ styles.title }> { viewquinta.quinta.name }  </Text>
                            <Card.Image 
                                source={ require('../../assets/img/quinta1.jpg') }
                                style={{ width: '100%', padding: 20 }}
                            />
                        </View>


                        <Text> { viewquinta.quinta.address } </Text>
                        <Text> { viewquinta.quinta.street } </Text>
                        <Text> { "# " + viewquinta.quinta.num } </Text>

                    </View>

                    <View style={ styles.spacebtns }>
                        <Button 
                            title='Cerrar'
                            style={ styles.closebtn }
                            onPress={ () => HandleCloseModal() }
                        />

                        <Button 
                            title='Rentar'
                            type='outline'
                            style={{ marginLeft: 5 }}
                            onPress={ () => console.log( viewquinta.quinta.id ) }
                        />

                    </View>

                </View>
            </View>
        </Modal>

    )

}

const styles = StyleSheet.create({
    mapStyle: {
        width: '100%',
        height: 500,
    },
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
    modalbehind: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
    },  
    centerstyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalstyle: {
        height: 350,
        width: 350,
        margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
    },
    closebtn: {
        color: 'green',
        marginRight: 5,
    },
    rentbtn: {
        backgroundColor: '#1E90FF',
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: '25%'
    },
    showimg: {
        backgroundColor: '#1E90FF',
        width: '100%',
        marginBottom: 5,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'center',
        color: 'white'
    },
    dividerstyle: {
        marginTop: 8,
        marginBottom: 8,
        marginRight: 5,
        marginLeft: 5,
    },
    quintaperform: {
        marginBottom: 20,
        width: '100%',
    },
    spacebtns: {
        flexDirection: 'row', 
        alignItems: 'center', 
        alignSelf: 'center',
    },
    cardperform: {
        backgroundColor: '#1E90FF',
        paddingBottom: 30,
        paddingTop: 10,
        borderRadius: 20,
        marginBottom: 10,
    }
})