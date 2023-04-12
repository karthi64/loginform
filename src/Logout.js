import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Logout = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate('Login')}>
                <Text style={styles.input}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        color: '#000',
        fontFamily: 'serif',
        textAlign: 'center',
    },
    btn: {
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 10,
        width: '30%',
        backgroundColor: '#ddd',

    },
});

export default Logout;