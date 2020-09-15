import React,{Component} from 'react'
import {Text,SafeAreaView, ImageBackground, View, TouchableOpacity,Platform, Alert} from 'react-native'
import TaskImage from '../../assets/imgs/office.jpg'
import Moment from 'moment'
import 'moment/locale/pt-br'
import Style from '../style'
import Task from '../components/Task'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddTask from './addTask'
import AsyncStorage from '@react-native-community/async-storage'

const initialState = {
    showAddTask : false,
    showDoneTask : true,
    visibleTasks : [],
    tasks : [],
}

export default class TaskList extends Component{

    state = {
       ...initialState
    }
    componentDidMount = async() =>{
       const stateString =  await AsyncStorage.getItem('taskState')
       const state = JSON.parse(stateString) || initialState
       this.setState(state,this.filterTasks)
       
    }

    filterTasks = () => {
        let visibleTasks = null
        if(this.state.showDoneTask){
            visibleTasks = [...this.state.tasks]
        }else{
            visibleTasks = this.state.tasks.filter(task=>{return task.completeAt === null})
        }
        this.setState({visibleTasks})
        AsyncStorage.setItem('taskState',JSON.stringify(this.state))
    }

    toogleFilter = () => {
        this.setState({showDoneTask : !this.state.showDoneTask},this.filterTasks)
    }

    toggleTask = taskId =>{

        const tasks = [...this.state.tasks] 
        if(tasks.length >= 0){
            tasks.forEach(task => {
                if(task.id === taskId){
                    task.completeAt = task.completeAt ? null : new Date()
                }
            })
            this.setState({tasks})
        }
    }

    addTask = (newTask) =>{
        if(!newTask.description.trim()){
            Alert.alert('Dados inválidos','Descrição não informada');
            return
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            description : newTask.description,
            toDoAt : newTask.date,
            completeAt : null,
        })
        this.setState({tasks:tasks,showAddTask:false},this.filterTasks)
    }

    onDelete = (taskId) =>{
        const tasks = this.state.tasks.filter(task => task.id != taskId)
        this.setState({tasks},this.filterTasks)
    }

    render(){
        return(
        <SafeAreaView style={Style.Container}>
            <AddTask onSave={this.addTask} isVisible={this.state.showAddTask} onCancel={() =>{this.setState({showAddTask : !this.state.showAddTask})}} />
            <ImageBackground style={Style.BackGround} source={TaskImage}>
                <View style={Style.IconBar}>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.toogleFilter}>
                        <Icon name={this.state.showDoneTask ? 'filter' : 'eye'} size = {30} color = "#C70039"/>
                    </TouchableOpacity>
                </View>
                <View style={Style.ContainerFlexCenter}>
                    <Text style={Style.Hoje}>Hoje</Text>
                    <Text style={Style.Date}>{Moment().locale('pt-br').format('dddd, DD MMMM')}</Text>
                </View>
            </ImageBackground>
            <SafeAreaView style={Style.TaskList}>
                <FlatList data ={this.state.visibleTasks} keyExtractor ={item => `${item.id}`} 
                renderItem={ ({item}) => <Task {...item} toggleTask = {this.toggleTask} onDelete={this.onDelete} />} />
            </SafeAreaView>
            <TouchableOpacity activeOpacity={0.7}  style={Style.OpenModalAddTask} onPress={() => this.setState({showAddTask : true})}>
                <Icon name="plus" size={15} color="#FFFFFF"/>
            </TouchableOpacity>
        </SafeAreaView>
        )
    }
}