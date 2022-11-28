import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title='Register'
                onPress={() => navigation.navigate('Register')}
            />
            <Button
                title='Login'
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
}) 