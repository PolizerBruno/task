import React,{Component} from 'react'
import {Text,Modal,TouchableWithoutFeedback, View,TouchableOpacity,TextInput,Platform, Alert} from 'react-native'
import Style from '../style'
import DateTimePicker from '@react-native-community/datetimepicker'
import Moment from 'moment'


const initialState = {
    description : '',
    date : new Date(),
    showDatePicker : false,
}

export default class AddTask extends Component{

    state = {
        ...initialState
    }

   
    save = () =>{
        const newTask = {
            description: this.state.description,
            date : this.state.date,
        }
        this.props.onSave && this.props.onSave(newTask);
        this.props.onSaveOnlineTask(newTask);
        this.setState({...initialState})
    }

    getDateTimePicker = () => {
        let datePicker = <DateTimePicker value={this.state.date} onChange={(_event,date)=> this.setState({date, showDatePicker : false})} mode='date'/>
        const dateString = Moment(this.state.date).format('dddd, D-MMMM-YYYY')
        if(Platform.OS === 'android'){
            datePicker = (
                <View>
                    <TouchableOpacity onPress={()=>this.setState({showDatePicker : true})}>
                        <Text style={Style.InputDate}>
                          {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }else{

        }
        
        return datePicker
    }
    render(){
        return(
            <Modal style={Style.AddTask} transparent={true} visible={this.props.isVisible}
             onRequestClose={this.props.onCancel} animationType="slide">
                <TouchableWithoutFeedback onPress={this.props.onCancel}><View style={Style.AddTaskOverlay}></View></TouchableWithoutFeedback>
                    <View style={Style.FormArea}>
                        <Text style={Style.FormAreaHeader}>Nova Tarefa</Text>
                        <TextInput style = {Style.Input} placeholder="Informe a descrição" onChangeText={desc => this.setState({description : desc})} value={this.state.description}></TextInput>
                        {this.getDateTimePicker()}
                        <View style={Style.Buttons}>
                            <TouchableOpacity onPress={this.props.onCancel}>
                                <Text style={Style.TextButton}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.save}>
                                <Text style={Style.TextButton}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}><View style={Style.AddTaskOverlay}></View></TouchableWithoutFeedback>
            </Modal>
        )
    }
}