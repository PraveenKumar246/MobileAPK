
import React from "react";
import MapView ,{ PROVIDER_GOOGLE ,Marker}from 'react-native-maps'; 
import { View,StyleSheet} from "react-native";

const Notification =  () => {
    return(
        <View style={styles.container}>
     <MapView
        provider={PROVIDER_GOOGLE}
       style={styles.map}
       region={{
         latitude: 13.04,
         longitude: 80.17,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
       <MapView.Marker 
            coordinate={{
              latitude:13.04,
              longitude: 80.17,

            }}
            title="My Location"
            description="Here i am."
            />
     </MapView>
     </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    container: {
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    }, 
    map: {
    
      position:'absolute',
      top:0,left:0,
      right:0,bottom:0
    },
   });