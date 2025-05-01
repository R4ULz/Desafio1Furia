import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import ConteudoHome from '../components/home/conteudoHome';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <ConteudoHome />
        </SafeAreaView>
    );
}