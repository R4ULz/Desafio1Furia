import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import ConteudoPlayers from '../components/players/conteudoplayers';

export default function PlayersScreen() {
    return (
        <SafeAreaView>
            <ConteudoPlayers />
        </SafeAreaView>
    );
}
