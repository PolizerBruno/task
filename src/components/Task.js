import React from 'react'
import {Text,SafeAreaView, View, TouchableNativeFeedback,TouchableOpacity} from 'react-native'
import Style from '../style'
import Icon from 'react-native-vector-icons/FontAwesome'
import Moment from 'moment'
import 'moment/locale/pt-br'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default props => {

    const done = props.completeAt != null ? {textDecorationLine : 'line-through'} : {}

    const date = props.completeAt ?  props.completeAt : props.toDoAt 
    const formatedDate = Moment(date).locale('pt-br').format('ddd, D [de] MMMM')
    const getRightContetent = () => {
        return (
            <TouchableOpacity onPress={()=> props.onDelete && props.onDelete(props.id)} style={Style.Exclude}><Icon name="trash" size={20} /><Text>Excluir</Text></TouchableOpacity>
        )
    }
   
    return (
            <Swipeable 
            renderRightActions={getRightContetent}
            >
                <SafeAreaView style = {Style.TaskContainer}>
                <TouchableNativeFeedback onPress={() => props.toggleTask(props.id)}>
                    <View style = {Style.CheckContainer}>
                        {getCheckView(props.completeAt)}
                    </View>
                </TouchableNativeFeedback>              
                    <View style={Style.Container} >
                        <Text style={[Style.Description,done]}>{props.description}</Text>
                        <Text style={Style.DateFormat}>{formatedDate}</Text>
                    </View>
                </SafeAreaView>
            </Swipeable>
    )
}

function getCheckView(completeAt){
    if(completeAt !== null){
        return (
            <View style={Style.Done}>
                <Icon name = "check" size ={15} color="#FFFFFF"></Icon>
            </View>
        )
    }else{
        return (
            <View style={Style.Pending}>
                
            </View>
        )
    }
    
}