import React,{Component} from 'react'
import {Text,SafeAreaView, View, TouchableOpacity, Alert} from 'react-native'
import Moment from 'moment'
import 'moment/locale/pt-br'
import Style from '../style'
import Task from '../components/Task'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddTask from './addTask'
import AsyncStorage from '@react-native-community/async-storage'
import {server,showError} from '../api'
import axios from 'axios'

const initialState = {
    showAddTask : false,
    showDoneTask : true,
    showUpdateTask : false,
    visibleTasks : [],
    tasks : [],
    userId : '',
}

export default class TaskList extends Component{
    state = {
       ...initialState
    }
    
    componentDidMount = async() =>{
        const stateString =  await AsyncStorage.getItem('taskState')
        const {params} = this.props.navigation.state
        const userId = params ? params.user_id : this.props.navigation.navigate('Auth');
        this.setState({userId : userId})
        const onlineTask = await this.getOnlineTask(this.state.userId)
        const abc = await this.filterTasks()
    }

    getOnlineTask = async(id)=>{
        try {
            const query = await axios.post(`${server}/taskManager`,{
               "id" : id
            })
            query.data.forEach(element => {
                this.state.tasks.push(element)
            });
           
        }catch (error) {
            showError(error)
        }
    }



    filterTasks = () => {
        let visibleTasks = null
        if(this.state.showDoneTask){
            visibleTasks = [...this.state.tasks]
        }else{
            const array = this.state.tasks || []
            visibleTasks = array.filter(task=>{return task.completeAt === null})
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
                    this.uploadDataTask(task)
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
            description : newTask.description,
            toDoAt : newTask.date,
            completeAt : null,
        })
        this.setState({tasks:tasks,showAddTask:false},this.filterTasks)
    }

    onDelete = (taskId) =>{
        const tasks = this.state.tasks.filter(task => task.id != taskId)
        this.deleteDataTask(taskId)
        this.setState({tasks},this.filterTasks)
    }
    saveOnlineTask = async(task)=>{
        try {
            const query = await axios.post(`${server}/taskInsert`,{
                "user_id" : this.state.userId,
                "description" : task.description,
                "toDoAt" : task.date,
                "completeAt" : null,
            })
        } catch (error) {
            Alert.alert('Erro','Erro não foi possivel cadastrar sua tarefa! Macacos treinados estão resolvendo seu problema, tente novamante mais tarde.')
        }
    }

    uploadDataTask = async(task)=>{
        const query = await axios.post(`${server}/updateTask`,{
            "id" : task.id,
            "user_id" : this.state.userId,
            "description" : task.description,
            "toDoAt" : task.toDoAt,
            "completeAt" : task.completeAt,
        })
    }

    deleteDataTask = async(id)=>{
        const query = await axios.post(`${server}/deleteTask`,{
            "id" : id,
        })
        if(query.status == 201){
            Alert.alert('Sucesso','A terefa foi removida com sucesso')
        }else{
            Alert.alert('Erro','Não foi possivel remover sua tarefa tente novamente mais tarde')
        }
    }
    

    render(){
        return(
        <SafeAreaView style={Style.Container}>
            <AddTask onSaveOnlineTask={this.saveOnlineTask} onSave={this.addTask} isVisible={this.state.showAddTask} onCancel={() =>{this.setState({showAddTask : !this.state.showAddTask})}} />
                <View style={Style.ContainerFlexCenterUp}>
                    <Text style={Style.Hoje}>Hoje</Text>
                    <Text style={Style.Date}>{Moment().locale('pt-br').format('dddd, DD MMMM')}</Text>
                    <View style = {Style.ContainerFlexCenterUpInside}>    
                        <View style={Style.IconBar}>
                            <TouchableOpacity activeOpacity={0.7} onPress={this.toogleFilter}>
                                <Icon name={this.state.showDoneTask ? 'filter' : 'eye'} size = {30} color = "#000"/>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}  style={Style.OpenModalAddTask} onPress={() => this.setState({showAddTask : true})}>
                                <Icon name="plus" size={25} color="#FFFFFF"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={Style.ContainerFlexCenterDown}>
                    <SafeAreaView style={Style.ContainerFlexCenterDownInside}>
                        <FlatList  style={Style.FlatList} data ={this.state.visibleTasks} keyExtractor ={item => `${item.id}`} 
                        renderItem={ ({item}) => <Task style={Style.TaskLine} {...item} toggleTask = {this.toggleTask} onDelete={this.onDelete} />} />
                    </SafeAreaView>
                </View>
        </SafeAreaView>
        )
    }
}