import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/Octicons';

const Chats = () => {

    return (
        <View style={styles.chatContainer}>
            <View style={styles.archiveContainer}>
                <Icon style={styles.archiveIcon} name="archive" size={15}></Icon>
                <Text style={styles.archiveText}>Archived</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.4,
                }}
            />
            <View style={styles.chatStyle}>
                <Image source={{ uri: "https://picsum.photos/200/200" }} style={styles.userImage} />
                <View style={styles.chatBox}>
                    <Text style={styles.chatUser}>sena kılınç</Text>
                    <Text></Text>
                </View>
                <Text style={styles.messageDate}>22.34</Text>
            </View>
        </View>
    )
}

export default Chats;

const styles = StyleSheet.create(
    {
        chatContainer: {
            padding: 15,
            paddingLeft: 30,
        },
        chatStyle: {
            marginTop: 10,
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        archiveIcon: {
            marginLeft: 12,

        },
        archiveContainer: {
            display: "flex",
            flexDirection: "row",
            height: 25,
        },
        archiveText: {
            fontSize: 20,
            fontWeight: "700",
            marginLeft: 30,
        },
        userImage: {
            width: 40,
            height: 40,
            justifyContent: "center",
            borderRadius: 50,
        },
        messageDate: {
            fontSize: 10,
        },
        chatBox: {
            display: "flex",
            flexDirection: "column",
        },
        chatUser: {
            fontSize:20,
            fontWeight:"600",
        }
    }
)