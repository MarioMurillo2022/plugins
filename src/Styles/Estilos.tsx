import { StyleSheet } from 'react-native';

export const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    eventItem: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    eventDetails: {
        fontSize: 14,
        marginBottom: 5,
    },
    eventImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 5,
    },
    imageGaleria: {
        width: 200,
        height: 200,
        marginVertical: 10,
    },
    imageCamara: {
        width: 300,
        height: 300,
        marginVertical: 10,
    },
    buttonContainer: {
        paddingVertical: 10,
    },
});
