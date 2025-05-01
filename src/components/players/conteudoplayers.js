import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import MatchesCard from './matchesCard';
import PlayersCArd from './playersCard';


export default function ConteudoPlayers(){

    matches = [
        {time1: 'https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c', time2: 'https://img-cdn.hltv.org/teamlogo/bRk2sh_tSTO6fq1GLhgcal.png?ixlib=java-2.1.0&w=50&s=8b08e53858eb817852ae74b30a30151d', pontTime1: 0, pontTime2: 2},
        {time1: 'https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c', time2:'https://img-cdn.hltv.org/teamlogo/4eJSkDQINNM6Tbs4WvLzkN.png?ixlib=java-2.1.0&w=50&s=d8c857ea47046f61eca695beab0d12ef', pontTime1: 1, pontTime2: 2},
        {time1: 'https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c', time2: 'https://img-cdn.hltv.org/teamlogo/HP3QlPseFLIDHNmZjeyA9A.png?ixlib=java-2.1.0&w=50&s=1501bcedcd47063f56d6611756d1b80a', pontTime1: 1, pontTime2: 2},
        {time1: 'https://example.com/time7.png', time2: 'https://img-cdn.hltv.org/teamlogo/iX5wi-ZLkdHTARnXcMEvZF.png?ixlib=java-2.1.0&w=50&s=d543c7f38ede96ef911a66c407b6b6cd', pontTime1: 2, pontTime2: 0},
        {time1: 'https://example.com/time9.png', time2: 'https://img-cdn.hltv.org/teamlogo/U6ziW17pgYxsxR_WQJ_9-V.png?ixlib=java-2.1.0&w=50&s=c26471695a9e28f1c08dd5cf856ecb55', pontTime1: 1, pontTime2: 2},
    ]

    players = [
        {foto: 'https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a', nome: 'Gabriel "Fallen" Toledo', data: 'AWP', idade: 33, pais: 'Brasil'},
        {foto: 'https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb', nome: 'Yuri "Yuriih" Santos', data: 'AWP', idade: 25, pais: 'Brasil'},
        {foto: 'https://img-cdn.hltv.org/playerbodyshot/rRclDPBXIMxFv2fv0dV0J0.png?ixlib=java-2.1.0&w=400&s=2b0f6209ca40efa081852b9d1d8e01c1', nome: 'Mareks "YEKINDAR" Gaļinskis', data: 'AWP', idade: 25, pais: 'Letônia'},
        {foto: 'https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca', nome: 'Kaique "KSCERATO" Cerato', data: 'AWP', idade: 25, pais: 'Brasil'},
        {foto: 'https://img-cdn.hltv.org/playerbodyshot/qNyAd_xVHTTmbCAKPx-jPk.png?ixlib=java-2.1.0&w=400&s=b128ede878e462107c70590202b14139', nome: 'Danil "molodoy" Golubenko', data: 'AWP', idade: 20, pais: 'Cazaquistão'},

    ]

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.textoPrincipal}>Estatísticas Gerais</Text>
            <Text style={styles.textoSecundario}>Últimas Partidas</Text>
            <ScrollView horizontal={true}>
                {matches.map((match, index) => (
                    <MatchesCard 
                        key={index}
                        time1={match.time1} 
                        time2={match.time2} 
                        pontTime1={match.pontTime1} 
                        pontTime2={match.pontTime2} 
                    />
                ))}

            </ScrollView>
            <Text style={styles.textoSecundario}>Nossos Players</Text>
            <ScrollView contentContainerStyle={styles.conteudoContainerPlayers}>
                {players.map((player, index) => (
                    <PlayersCArd 
                        key={index}
                        foto={player.foto} 
                        nome={player.nome} 
                        idade={player.idade} 
                        pais={player.pais} 
                    />
                ))}
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1b1b1b',
    },
    textoPrincipal: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
    },
    textoSecundario: {
        fontSize: 20,
        color: '#fff',
        marginTop: 20,
        marginLeft: 15,
    },
    conteudoContainerPlayers:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        rowGap:20,
        padding:10,
    }
});