import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Camara from '../screens/Camara';
import Inicio from '../screens/Inicio';

export default function MyDrawer() {

    const Drawer = createDrawerNavigator();

    return (

        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Inicio} />
                <Drawer.Screen name="Camara" component={Camara} />
            </Drawer.Navigator>
        </NavigationContainer>

    )
}