import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Chats from '../components/Chats/Chats';
import { SafeAreaView, Text } from 'react-native';

const ChatPage = () => {

    return (
        <SafeAreaView>
            <Header/>
            <Chats/>
        </SafeAreaView>
    );
}
export default ChatPage;
