import * as React from "react";
import { View, StyleSheet, Text, Image, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FuriaLogo from "../icons/furiaLogo";
import MenuIcon from "../icons/menuIcon";

export default function Header(){

    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Home');
    }

    const openMenu = () => {
        navigation.toggleDrawer();
    }

    return(
        <View style={styles.headerContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={goToHome}>
                    <FuriaLogo width={40} height={40}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={openMenu}>
                    <MenuIcon width={20} height={20}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        width: '100%',
        backgroundColor: '#000',
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 60,
    },
    container:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

})