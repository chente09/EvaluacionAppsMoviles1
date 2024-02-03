import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const SextaScr = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}></Text>
            <Text style={styles.box2}></Text>
            <Text style={styles.box3}></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C3E50',
        
    },
    box1: {
        flex:2,
        backgroundColor: '#E0E0E0',
        borderWidth: 2,
        borderColor: 'white',  
    },
    box2: {
        flex:2,
        backgroundColor: '#FF5722',
        borderWidth: 2,
        borderColor: 'white',
        
    },
    box3: {
        flex:4,
        backgroundColor: '#A1887F',
        borderWidth: 2,
        borderColor: 'white',
    }
})

