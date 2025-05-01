import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function BtnComeco() {

    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.btnComeco} onPress={() => navigation.navigate('Chat')}>
            <Text style={styles.textBtnComeco}>Começar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnComeco:{
        backgroundColor: '#000000',
        width: '30%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    textBtnComeco:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
}); 














