import { View, Text, Button, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Estilos } from '../Styles/Estilos';

export default function Camara() {
    const [events, setEvents] = useState([
        { id: '1', title: 'Concierto de Rock', place: 'Auditorio Nacional', description: 'Un concierto increíble de rock.', date: '2024-05-25', images: [] },
        { id: '2', title: 'Exposición de Arte', place: 'Museo de Arte Moderno', description: 'Exposición de arte contemporáneo.', date: '2024-06-10', images: [] },
        { id: '3', title: 'Carrera 10K', place: 'Parque Central', description: 'Carrera de 10 kilómetros para todas las edades.', date: '2024-07-01', images: [] }
    ]);

    const addEventImage = async (eventId) => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setEvents(events.map(event =>
                event.id === eventId ? { ...event, images: [...event.images, result.assets[0].uri] } : event
            ));
        }
    };

    return (
        <View style={Estilos.container}>
            <FlatList
                data={events}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={Estilos.eventItem}>
                        <Text style={Estilos.eventTitle}>{item.title}</Text>
                        <Text style={Estilos.eventDetails}>Lugar: {item.place}</Text>
                        <Text style={Estilos.eventDetails}>Descripción: {item.description}</Text>
                        <Text style={Estilos.eventDetails}>Fecha: {item.date}</Text>
                        <View style={Estilos.buttonContainer}>
                            <Button title="Tomar Fotografía" onPress={() => addEventImage(item.id)} />
                        </View>
                        <FlatList
                            data={item.images}
                            keyExtractor={(img, index) => index.toString()}
                            horizontal
                            renderItem={({ item: imageUri }) => (
                                <Image
                                    style={Estilos.eventImage}
                                    source={{ uri: imageUri }}
                                />
                            )}
                        />
                    </View>
                )}
            />
        </View>
    );
}
