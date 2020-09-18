import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    RecoverPass: {
        flex: 1,
        alignContent : "center",
        alignItems : "center"
    },
    RegisterText : {
        color : '#000',
        fontSize : 15,
    },
    LoginButton : {
        marginBottom : 10,
        borderRadius : 20,
        width : '80%',
        backgroundColor : "#08B9E0",
        alignItems : "center",
        alignContent : "center"
    },
    registerButton : {
        borderWidth : 0.5,
        borderRadius : 20,
        marginBottom : 10,
        width : '80%',
        alignItems : "center",
        alignContent : "center"
    },    
    RegisterArea : {
        flex: 1,
        margin : 5,
        width : '100%',
    },  
    RecoverText : {
        marginBottom : 40,
    },  
    LoginText : {
        textAlign : 'center',
        fontSize : 20,
        color : "#FFFFFF",
        fontStyle : "italic",
        textShadowColor : "#000",
        textShadowRadius : 1,
        textShadowOffset: { width: 1, height:1},
        textTransform : "capitalize"
    },  
    LoginForm : {
        width : '60%',
        backgroundColor : 'rgba(255,255,255,0.85)',
        position: "absolute",
        left : '20%',
        top : '35.0%',
        alignItems : "center",
        alignContent : "center",
        borderRadius : 15,
    },  
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
        width : 30,
        height : 30,
        borderRadius : 35,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#000",
    },  
    Buttons : {
        flexDirection : 'row',
        justifyContent : "space-around",
    },
    Input : {
        borderBottomWidth : 2,
        height : 40,
        width : '80%',
        margin: 10,
        backgroundColor : '#FFFFFF',
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
        width : '100%',
        position : "absolute",
        top : 30,
        backgroundColor : '#FFFFFF',
    },
    AddTaskOverlay:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    AddTask : {
        flex : 1,
    },  
    IconBar:{
        margin : 10,
        flexDirection : 'row'
    },
    TaskLine : {
        width : '100%'
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
    InputIcon : {
        marginLeft : 30,
    },
    InputTextIcon:{
        paddingLeft : 10,
        margin : 5,
        borderRadius : 10,
        backgroundColor : 'rgb(255,255,255)',
        flex : 1,
        flexDirection : 'row',
        alignItems : "center",
        alignContent : 'center',
    },
    Container : {
        flex : 1,
    },
    ContainerFlexCenterUp : {
        flex : 2,
        backgroundColor : '#004654',
        paddingRight : 20,
        paddingLeft : 20,
        
    },
    ContainerFlexCenterUpInside : {
        flex : 1,
        backgroundColor : '#FFFFFF',
        marginLeft : 20,
        marginRight : 20,
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20,
        alignItems : "flex-end",
        justifyContent : "space-around",
        borderBottomWidth : 2,
        borderColor : '#B8C1C2',
        padding: 5,
    },
    ContainerFlexCenterDown : {
        backgroundColor : '#6699CC',
        paddingRight : 20,
        paddingLeft : 20,
        flex : 8,
    },
    ContainerFlexCenterDownInside : {
        flex : 1,
        backgroundColor : '#FFFFFF',
        marginLeft : 20,
        marginRight : 20,
        marginBottom : 40,
        borderBottomRightRadius : 20,
        borderBottomLeftRadius : 20,
        alignItems : "flex-end",
        justifyContent : "space-around",
        padding: 5,
    },
    ContainerTask : {
        flex : 2,
        alignItems : "flex-end",
        backgroundColor : 'rgba(255,255,255,1)',
        margin : 20,
        borderRadius : 20,
        padding : 5,
    },
    FlatList : {
        width : '100%',
        maxHeight : '100%',
        paddingBottom : 40,
    },
    BackGround : {
        backgroundColor : '#FDEBD0',
        flex: 1,
    },
    TaskList : {
        paddingBottom : 100,
        borderTopWidth: 0.5,
        width : '100%',
    },
    Date :{
        color : '#FFFFFF',
        fontSize : 48,
        padding : 10,
        flexWrap : "wrap",
        fontSize : 26,
        textAlign : "left",
        fontStyle : "italic",
        textTransform : "capitalize"
    },
    Hoje : {
        color : '#FFFFFF',
        fontSize : 40,
        textAlign : "left",
        fontStyle : "italic",

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