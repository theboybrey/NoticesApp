import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import firebase from 'firebase'

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
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
                    title='Register' />
            </View>
        )
    }
}

export default Register

const styles = StyleSheet.create({})