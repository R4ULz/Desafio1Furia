import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';

export default function PlayersCArd({foto, nome, idade, pais}) {
    return(
        <View style={styles.container}>
                <Image source={{uri: foto}}
                style={{width: 150, height: 150, marginBottom: 10, marginTop:20}}/>
                <Text style={styles.infos}>{nome}</Text>
                <Text style={styles.infos}>Idade: {idade}</Text>
                <Text style={styles.infos}>País: {pais}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: 300,
        width: 300,
        marginLeft: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    infos:{
        color: '#fff',
        fontSize: 20,
    },

})