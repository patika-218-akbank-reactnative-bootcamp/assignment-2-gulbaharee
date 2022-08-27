import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Octicons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from '@react-navigation/native';
import { chatList } from '../../assets/ChatList';

const Chats = () => {

    const { navigate } = useNavigation();

    //function to go to message detail
    //parameters are given to get user info
    const goChatBox = (id,name,text) => {
        navigate('ChatBox', { id,name,text })
    }

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
            <ScrollView>
                //according to mock data this component will be repeated
                {chatList.map(chats =>
                    <Pressable onPress={() => { goChatBox(chats.id,chats.receiver.firstName,chats.message[0].text) }}>
                        <Chat id={chats.id} name={chats.receiver.firstName} text={chats.message[0].text}/>
                    </Pressable>)}
            </ScrollView>
        </View >
    )
}

//chat in reusable format for message lines
const Chat = ({id, name, text}) => {

    return (
        <View key={id}>
            <View style={styles.chatStyle}>
                <Image source={{ uri: "https://picsum.photos/200/200" }} style={styles.userImage} />
                <View style={styles.chatBox}>
                    <Text style={styles.chatUser}>{name}</Text>
                    <Text style={styles.messagaContext}>{text}</Text>
                </View>
                <Text style={styles.messageDate}>22.34</Text>
            </View>
            <View style={styles.border} />
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
            height: 40,
        },
        chatUser: {
            fontSize: 20,
            fontWeight: "600",
            flex: 1,
            width: 250,
        },
        messagaContext: {
            fontSize: 13,
        },
        border: {
            borderBottomColor: 'gray',
            borderBottomWidth: 0.4,
            width: 300,
            marginLeft: 45,
        }
    }
)