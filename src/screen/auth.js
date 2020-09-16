import React,{Component} from 'react'
import {ImageBackground,Text,View,TextInput,TouchableHighlight, Alert} from 'react-native'
import Style from '../style'
import imageBack from '../../assets/imgs/cubos.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'
import {showSuccess,showError,server} from '../api'
import axios from 'axios'

    const initialState = {
        name : '',
        email : '',
        password : '',
        comfirmPassword : '',
        screenRegister : false,
    }

    

export default class extends Component {
    
    state = {
        ...initialState
    }


    signUp = async ()=>{
        try {
            const query = await axios.post(`${server}/signUp`,{
                name : this.state.name,
                email : this.state.email,
                password : this.state.password,
                comfirmPassword : this.state.comfirmPassword,
            })
            query.status == '200' ? this.setState({...initialState},showSuccess('Obrigado por se cadastrar')) : Alert.alert('Erro',`${query.data}`)
        } catch (error) {
            showError(error)
        }
    }

    signIn = async ()=>{
        try {
            const query = await axios.post(`${server}/signIn`,{
                email : this.state.email,
                password : this.state.password,
            })
            query.status == '200' ? this.props.navigation.navigate('Home',{user : query.data.id}) : Alert.alert('Erro',`${query.data}`)
        } catch (error) {
            showError(error)
        }
    }

    render () {
        return (
            <View style={Style.BackGround}>
                <ImageBackground style={Style.Container} source={imageBack} />
                <View style={Style.LoginForm}>
                    {this.state.screenRegister && 
                        <View style={Style.InputTextIcon}>
                            <Icon Style={Style.InputIcon} name="user" size={15} color="#000"/>
                            <TextInput value={this.state.name} onChangeText={(text)=>this.setState({name:text})} placeholder={"Name"} style={Style.Input} />
                        </View>                     
                    }
                    <View style={Style.InputTextIcon}>
                        <Icon Style={Style.InputIcon} name="at" size={15} color="#000"/>
                        <TextInput  value={this.state.email} onChangeText={(text)=>this.setState({email:text})} placeholder={"Email"} style={Style.Input} />
                    </View>
                    <View style={Style.InputTextIcon}>
                        <Icon Style={Style.InputIcon} name="lock" size={15} color="#000"/>
                        <TextInput value={this.state.password} onChangeText={(text)=>this.setState({password:text})} placeholder={"Password"} secureTextEntry={true} style={Style.Input} />                    
                    </View>
                    {this.state.screenRegister && 
                    <View style={Style.InputTextIcon}>
                        <Icon Style={Style.InputIcon} name="lock" size={15} color="#000"/>
                        <TextInput value={this.state.comfirmPassword} onChangeText={(text)=>this.setState({comfirmPassword:text})} secureTextEntry={true} placeholder={"Comfirm your password"} style={Style.Input} />
                    </View>
                    }
                    {this.state.screenRegister ?  
                    
                    <TouchableHighlight onPress={()=>this.signUp()} style={Style.LoginButton}>
                        <Text style={Style.LoginText}>Register</Text>
                    </TouchableHighlight> : 
                    <TouchableHighlight onPress={()=>this.signIn()} style={Style.LoginButton}>
                        <Text style={Style.LoginText}>Login</Text>
                    </TouchableHighlight>
                    }
                    {this.state.screenRegister ? false : 
                     <TouchableHighlight style={Style.RecoverPass}>
                        <Text style={Style.RecoverText}>Forgot Password/Email ?</Text>
                     </TouchableHighlight>
                    }
                    {this.state.screenRegister ?  
                    <TouchableHighlight onPress={()=>this.setState({screenRegister : !this.state.screenRegister})} style={Style.registerButton}>
                        <Text style={Style.RegisterText}>Back <Icon  name="arrow-circle-left" size={15} color="#000"/></Text>
                     </TouchableHighlight> : 
                     <TouchableHighlight onPress={()=>this.setState({screenRegister : !this.state.screenRegister})} style={Style.registerButton}>
                        <Text style={Style.RegisterText}>Create your account <Icon  name="arrow-circle-right" size={15} color="#000"/></Text>
                     </TouchableHighlight>
                    }
                </View>
            </View>
        )
    }
}