import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Appbar: {
        backgroundColor:'white',
        justifyContent:'space-between'
        },
    AvatarImage:{
         marginLeft:8
    },
    chip: {
        flexDirection: 'row',
        width : 230
       },
    CardActions:{justifyContent:'space-between'},
    ProfileImage:{
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:10
        },
    ProfileName:{
        color:'white',
        fontSize:20,
        fontFamily:'Roboto-Medium'
        },
    ProfileSubtitle:{
        color:'white',
        fontSize:14,
        fontFamily:'Roboto-Regular',
        marginHorizontal:4,
        marginBottom:10,
        marginTop:10
       },
    DrawerBottomView:{
        padding:2,
        borderTopWidth:1,
        borderTopColor:'#ccc'
        },
    DrawerBottomContentView:{
        flexDirection:'row',
        alignItems:'center'
        },
    DrawerBottomContentText:{
        fontSize:15,
        fontFamily:'Roboto-Medium'
        ,marginLeft:15,
        color:'black'
        },
    DrawerBottomTouchableOpacity:{
        paddingVertical:15
    },
    DrawerBottomIcons:{
        marginLeft:16
    },
    GraphView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    GraphText:{
        justifyContent:'center',
        alignItems:'center'
    },
    Comments:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'}
});