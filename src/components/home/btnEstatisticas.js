import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function BtnEstatisticas() {
const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.btnEstatisticas} onPress={() => navigation.navigate('Estatísticas')}>
            <Text style={styles.textBtnEstatisticas}>Estatísticas</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnEstatisticas:{
        backgroundColor: '#fff',
        width: '30%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    textBtnEstatisticas:{
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
}); 