import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as firebase from 'firebase'
import Loading from '../../components/Loading'
import UserLoged from './UserLoged'
import UserGuest from './UserGuest'

export default function Account() {
    
    const [login, setlogin] = useState(null)

    useEffect(() => {
    
        firebase.auth().onAuthStateChanged( ( user ) => {
            console.log( user )
            
            !user ? setlogin( false ) : setlogin( true );
        } )
    
    }, [])

    if ( login === null ) return <Loading isVisible={ true } text={ 'Cargando...' } />
    
    return login ? <UserLoged /> : <UserGuest /> 

}
