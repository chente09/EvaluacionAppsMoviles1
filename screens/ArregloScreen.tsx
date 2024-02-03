import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export const ArregloScreen = () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [numerosPares, setNumerosPares] = useState<number[]>([]);
    const [numerosImpares, setNumerosImpares] = useState<number[]>([]);

    const clasificarNumeros = () => {
        const pares: number[] = [];
        const impares: number[] = [];

        numeros.forEach((numero) => {
            if (numero % 2 === 0) {
                pares.push(numero);
            } else {
                impares.push(numero);
            }
        });

        setNumerosPares(pares);
        setNumerosImpares(impares);
    };

    const resetearClasificacion = () => {
        setNumerosPares([]);
        setNumerosImpares([]);
    };


    return (
        <View style={style.container}>
            <Text style={style.title}>1. Arreglo</Text>
            <Text style={style.texto}>Numeros: {numeros.join(', ')}</Text>
            <TouchableOpacity onPress={clasificarNumeros} style={style.btn}>
                <Text style={style.btnText}>Clasificar</Text>
            </TouchableOpacity>
            <Text style={style.texto2}>Pares: {numerosPares.length > 0 ? numerosPares.join(', ') : ''}</Text>
            <Text style={style.texto2}>Impares: {numerosImpares.length > 0 ? numerosImpares.join(', ') : ''}</Text>
            <TouchableOpacity onPress={resetearClasificacion} style={style.btn}> 
                <Text style={style.btnText}>Limpiar</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#607D8B',
        justifyContent: 'center',
        alignItems:'center'
    },
    title: {
        // backgroundColor:'red',
        textAlign: 'center',
        fontSize: 30,
        position:'absolute',
        top:120
    },
    texto: {
        // backgroundColor:'red',
        textAlign: 'center',
        fontSize: 19,
        position:'relative',
          
    },
    texto2: {
        // backgroundColor:'red',
        textAlign: 'center',
        fontSize: 20,
        position:'relative',  
    },
    btn:{
        backgroundColor:'gray',
        margin:5,
        borderRadius:20
    },
    btnText: {
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
