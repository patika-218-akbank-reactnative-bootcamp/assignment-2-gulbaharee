
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import Header from './src/components/Header/Header';
import Chats from './src/components/Chats/Chats';
import ChatPage from './src/pages/ChatPage';

const Stack = createStackNavigator();

const App=() => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Chats" component={ChatPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
