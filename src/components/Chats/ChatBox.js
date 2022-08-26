import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import IconOction from 'react-native-vector-icons/Octicons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';

export default ChatBox = ({ route }) => {
    const { title } = route.params;
    const {goBack} =useNavigation();
    return (
        <View>
            <View style={styles.header}>
                <IconIonicons name="chevron-back-sharp" style={{ marginTop:60,marginLeft:10}} size={25} onPress={()=>goBack('Chats')}/>
                <Text style={styles.Receiver}>{title}</Text>
                <View style={styles.icon} >
                    <Icon style={{ marginRight: 15 }} name="phone" size={25}></Icon>
                    <IconOction name="device-camera-video" size={25} />
                </View>

            </View>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.4,
                }}
            />
            <ScrollView style={{ height: 600 }}>
                <Messages />
                <Messages />
            </ScrollView>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.4,
                }}
            />
            <View style={styles.messageBox}>
                <TextInput style={styles.textInput} />
                <IconIonicons name="send" style={{ padding: 20 }} size={25} />
            </View>
        </View>
    )
}

const Messages = () => {
    return (
        <View style={styles.chatbox}>
            <Text style={styles.message}>selam!</Text>
        </View>
    )

}


const styles = StyleSheet.create(
    {
        header: {
            height: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        Receiver: {
            fontSize: 25,
            marginTop: 60,
            width:250,
        },
        icon: {
            marginTop: 60,
            marginRight: 30,
            display: "flex",
            flexDirection: "row",
        },
        chatbox: {
            margin: 20,
            backgroundColor: "gray",
            borderRadius: 20,
            width: 150,
        },
        message: {
            fontSize: 25,
            margin: 10,
        },
        messageBox: {
            height: 50,
            display: "flex",
            flexDirection: "row",
        },
        textInput: {
            justifyContent: "center",
            margin: 10,
            height: 50,
            width: 310,
            borderRadius: 20,
            borderWidth: 0.4,
            borderColor: "black",

        }
    }
)