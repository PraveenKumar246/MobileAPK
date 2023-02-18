import React from "react";
import { View ,Text,Image, ImageBackground,Icon} from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-ui-lib";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "../Styles";



const DrawerNavigator = (props)=>{
    return(
        <View style={{flex:1}}>
       
           <View style={{flex:0.6,backgroundColor:'#87CEEB'}}>

              <ImageBackground style={{padding:10}}>
                 <Image source={require('../images/prabhas.jpg')} style={styles.ProfileImage}/>
                 <Text style={styles.ProfileName}> Praveen Kumar</Text>
                 <Text style={styles.ProfileSubtitle}> View Profile</Text>
             
               </ImageBackground>
            </View>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#fffr'}}>


                <DrawerItemList style={{backgroundColor:'#fff'}} {...props}/>

            </DrawerContentScrollView>
   
        
            <View style={styles.DrawerBottomView}>
              <TouchableOpacity onPress={() => {}} style={styles.DrawerBottomTouchableOpacity}>
                  <View style={styles.DrawerBottomContentView}>
                    <Ionicons name="share-social" size={20} style={styles.DrawerBottomIcons}/>
                    <Text style={styles.DrawerBottomContentText}>Share to a Friend</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}} style={styles.DrawerBottomTouchableOpacity}>
                  <View style={styles.DrawerBottomContentView}>
                    <Ionicons name="exit" size={20} style={styles.DrawerBottomIcons}/>
                    <Text style={styles.DrawerBottomContentText}>Sign Out</Text>
                  </View>
              </TouchableOpacity>
            </View>
        </View>

    )
}
export default DrawerNavigator;