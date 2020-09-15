import React,{Component} from 'react'
import {ImageBackground,Text,View,TextInput,TouchableHighlight} from 'react-native'
import Style from '../style'
import imageBack from '../../assets/imgs/cubos.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class extends Component {

    state = {
        email : '',
        password : '',
    }

    render () {
        return (
            <View style={Style.BackGround}>
                <ImageBackground style={Style.Container} source={imageBack} />
                <View style={Style.LoginForm}>
                    <TextInput value={this.state.email} onChange={email=>this.setState({email})} placeholder={"Email"} style={Style.Input} />
                    <TextInput value={this.state.password} onChange={password=>this.setState({password})} placeholder={"Password"} secureTextEntry={true} style={Style.Input} />
                    <TouchableHighlight style={Style.LoginButton}>
                        <Text style={Style.LoginText}>Login</Text>
                     </TouchableHighlight>
                     <TouchableHighlight style={Style.RecoverPass}>
                        <Text style={Style.RecoverText}>Forgot Password/Email ?</Text>
                     </TouchableHighlight>
                     <TouchableHighlight style={Style.registerButton}>
                        <Text style={Style.RegisterText}>Create your account <Icon  name="arrow-circle-right" size={15} color="#000"/></Text>
                     </TouchableHighlight>
                </View>
            </View>
        
      
        )
    }
}