import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading( props ) {

    const { isVisible, text } = props;

    return (
        <Overlay
            isVisible={ isVisible }
            windowBackgroundColor="rgba(0, 0, 0, 0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={ styles.overlay }
        >
            <View
                style={ styles.view }
            >
                <ActivityIndicator size="large" color="#1E90FF" />
                { text && <Text style={ styles.text }> { text } </Text> }
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        width: 200,
        height: 125,
        backgroundColor: "#FFF",
        borderColor: "#1E90FF",
        borderWidth: 2,
        borderRadius: 10,
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#1E90FF',
        textTransform: 'uppercase',
        marginTop: 10,
    }
});