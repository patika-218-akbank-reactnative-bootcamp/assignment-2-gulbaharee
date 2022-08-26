import react, { Component } from 'react';

import {View} from 'react-native';
import Chats from './Chats';

export class ArchivePage extends Component(){
    constructor(props){
        super(props);

        
    }

    render(){

        return(
            <View>
                {Chats}
            </View>
        )
    }
}