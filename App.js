
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './src/components/Header/Header';
import Chats from './src/components/Chats/Chats';

const App=() => {
 
  return (
    <SafeAreaView>
      <Header/>
      <Chats/>
    </SafeAreaView>
  );
};


export default App;
