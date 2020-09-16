import React,{Component} from 'react'
import {ImageBackground,Text,View,TextInput,TouchableHighlight} from 'react-native'
import Style from '../style'
import imageBack from '../../assets/imgs/cubos.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class extends Component {

    state = {
        name : '',
        email : '',
        password : '',
        screenRegister : false,
    }

    render () {
        return (
            <View style={Style.BackGround}>
                <ImageBackground style={Style.Container} source={imageBack} />
                <View style={Style.LoginForm}>
                    {this.state.screenRegister && 
                        <TextInput value={this.state.name} onChange={name=>this.setState({name})} placeholder={"Name"} style={Style.Input} />
                    }
                    <TextInput value={this.state.email} onChange={email=>this.setState({email})} placeholder={"Email"} style={Style.Input} />
                    <TextInput value={this.state.password} onChange={password=>this.setState({password})} placeholder={"Password"} secureTextEntry={true} style={Style.Input} />
                    {this.state.screenRegister ?  
                    <TouchableHighlight style={Style.LoginButton}>
                        <Text style={Style.LoginText}>Register</Text>
                    </TouchableHighlight> : 
                    <TouchableHighlight style={Style.LoginButton}>
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