import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Inicio = () => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/CeutecLogo.jpg')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    btnIr: {
        width: '50%'
    },
});

export default Inicio
