import React from 'react';
import {View,Text} from 'react-native';
import {Button} from 'react-native-paper';


function SettingsScreen ({navigation}) {
    return(
      <View style={{alignItems:'center'}}> 
        <Text>
        <Button onPress={()=> navigation.navigate('Graph')}> Graph</Button>,
        <Button onPress={()=> navigation.navigate('Weather')}>Weather</Button>
        </Text>
      </View>
    );
}
export default SettingsScreen;