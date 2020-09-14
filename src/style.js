import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    Exclude:{
        flex : 0.15,
        justifyContent : "center",
        alignItems : "center",
    },
    ButtonTrash:{
        backgroundColor : 'red',
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "flex-end",
        padding : 20,
    },
    InputDate:{
        fontSize : 24,
        textTransform : "capitalize",
        textAlign : "center",
    }, 
    OpenModalAddTask: {
        position : "absolute",
        right : 10,
        bottom : 10,
        width : 50,
        height : 50,
        borderRadius : 35,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#C70039",
    },  
    Buttons : {
        flexDirection : 'row',
        justifyContent : "space-around",
    },
    Input : {
        height : 40,
        margin: 15,
        backgroundColor : '#FFFFFF',
        borderWidth : 1,
        borderColor : '#E3E3E3',
        borderRadius : 5,
    },
    TextButton : {
        padding : 5,
        borderColor : '#C70039',
        borderWidth : 1,
        margin : 10,
        marginRight : 30,
        color : '#900C3F',
        borderRadius : 5,
    },
    FormAreaHeader : {
        padding : 10,
        backgroundColor : '#A5B0B5',
        textAlign : "center",
        fontSize : 36,
        color : "#FFFFFF",
        textShadowColor : "#000",
        textShadowRadius : 1,
        textShadowOffset: { width: 0.5, height:0.5},
        textTransform : "capitalize"
    },
    FormArea : {
        flex : 1,
        backgroundColor : '#FFFFFF',
    },
    AddTaskOverlay:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },  
    IconBar:{
        marginHorizontal : 20,
        flexDirection : 'row',
        justifyContent : "flex-end",
    },
    Done : {
        height : 30,
        width : 30,
        borderRadius : 20,
        borderWidth : 2,
        backgroundColor : "#145A32",
        borderColor : '#000',
        justifyContent : 'center',
        alignItems : 'center',
    },
    Pending : {
        height : 30,
        width : 30,
        borderRadius : 20,
        borderWidth : 2,
        borderColor : '#000',
        justifyContent : 'center',
        alignItems : 'center',
    },
    TaskContainer : {
        flexWrap : "wrap",
        flexDirection : "row",
        alignItems : 'center',
        borderBottomColor : '#AAA',
        borderBottomWidth : 1,
    },
    CheckContainer : {
        padding : 10,
        width : '20%',
        alignItems : "flex-start",
        justifyContent : 'center',
    },  
    Container : {
        flex : 1,
    },
    ContainerFlexCenter : {
        flex : 1,
        justifyContent : "space-around",
        alignItems : "center",
    },
    BackGround : {
        flex: 3,
    },
    TaskList : {
        borderTopWidth: 0.5,
        flex : 7,
        padding: 20,
    },
    Date :{
        padding : 10,
        flexWrap : "wrap",
        fontSize : 48,
        textAlign : "center",
        color : "#FFFFFF",
        fontStyle : "italic",
        textShadowColor : "#000",
        textShadowRadius : 1,
        textShadowOffset: { width: 4, height:4},
        textTransform : "capitalize"
    },
    Hoje : {
        fontSize : 48,
        textAlign : "center",
        color : "#FFFFFF",
        fontStyle : "italic",
        textShadowColor : "#000",
        textShadowRadius : 1,
        textShadowOffset: { width: 4, height:4},
        textTransform : "capitalize"
    },
    Text : {
        fontSize : 16,
        flexWrap : "wrap",
    },
    Description : {
        fontFamily : "Lato",
        fontSize : 18,
        textShadowRadius : 0.5,
        textShadowOffset: { width: 0.5, height:0.5},
    },
    DateFormat: {
        fontSize : 12,
    },


})