import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import BtnComeco from './btnComeco';
import BtnEstatisticas from './btnEstatisticas';

export default function ConteudoHome() {
    
    return (
        <ScrollView contentContainerStyle={styles.insideScrollview} style={styles.ScrollView}>
            <View style={styles.containerMain}>
                <Text style={styles.mainText}>Bem Vindo ao nosso aplicativo de conversação Furioso!!</Text>
                <Text style={styles.text}>Aqui nós iremos tirar algumas dúvidas sobre o nosso time e mostrar dados dos nossos jogadores!</Text>
            </View>
            <View style={styles.containerBtn}>
                <BtnComeco />
                <BtnEstatisticas />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerMain:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '50%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20,
    },
    ScrollView:{
        width: '100%',
        height: '100%',
        backgroundColor: '#1b1b1b',
    },
    insideScrollview:{
        height: '100%',
        width: '100%',
        padding: 20,
    },
    mainText:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '85%',
        paddingTop: 20,
    },
    text:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
    },
    containerBtn:{
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        marginTop: 20,
    }
});







