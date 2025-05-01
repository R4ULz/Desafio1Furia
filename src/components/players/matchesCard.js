import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FuriaLogo from '../../icons/furiaLogo';

export default function MatchesCard({time1, time2, pontTime1, pontTime2}){
    const pont1 = parseInt(pontTime1);
    const pont2 = parseInt(pontTime2);

    const getStylePoint1 = () => {
        if (pont1 > pont2) return styles.textWinner;
        if (pont1 < pont2) return styles.textLoser;
        return styles.text;
    }
    
    
    const getStylePoint2 = () => {
        if (pont2 > pont1) return styles.textWinner;
        if (pont2 < pont1) return styles.textLoser;
        return styles.text;
    }
    return(
        <View style={styles.container}>
            <FuriaLogo width={20} height={20} />
            <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5}}>
                <Text style={getStylePoint1()}>{pontTime1}</Text>
                <Text style={styles.text}> : </Text>
                <Text style={getStylePoint2()}>{pontTime2}</Text>
            </View>
            <Image source={{uri: time2}} style={{width:25, height:25}} />

        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        height: 60,
        width: 100,
        backgroundColor: '#000',
        margin: 10,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    textWinner:{
        color:'#00ff00',
        fontSize: 16,
    },
    textLoser:{
        color:'#ff0000',
        fontSize: 16,
    }
    
});