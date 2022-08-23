import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

const Header = () => {
    return (
        <View>
            <HeaderTop/>
            <Text style={styles.headerStyle}>Chats</Text>
            <HeaderBottom/>
        </View>
    )

}
const HeaderTop = () => {
    return (
        <View style={styles.headerBottomContainer}>
            <Text style={styles.textStyle}>Edit</Text>
            <Icon name="new-message" size={25}></Icon>
        </View>
    )
}

const HeaderBottom =()=>{
    return(
        <View style={styles.headerBottomContainer}>
            <Text style={styles.textStyle}>Broadcast List</Text>
            <Text style={styles.textStyle}>New Group</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create(
    {
        headerBottomContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
            paddingBottom:5,

        },
        textStyle: {
            fontSize:20,
        },
        headerStyle:{
            padding: 15,
            fontSize:30,
            fontWeight:"700",
        }
    }
)