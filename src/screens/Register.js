import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder='Name'
                    onChangeText={(name) => this.setState({ name: name })}
                />
                <TextInput
                    placeholder='Email'
                    onChangeText={(email) => this.setState({ email: email })}
                />
                <TextInput
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button 
                onPress={() => onSignUp()}
                title='Register'/>
            </View>
        )
    }
}

export default Register

const styles = StyleSheet.create({})