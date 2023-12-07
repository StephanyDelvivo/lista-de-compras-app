import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";


export default function Formulario() {
    const [item, setItem] = useState('')
    const [quantidade, setQuantidade] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Item para comprar
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='O que está faltando em casa?'
                    onChangeText={(texto) => setItem(texto)}/>
                <TextInput
                    style={styles.input}
                    placeholder='Digite a quantidade'
                    keyboardType='numeric'
                    onChangeText={(numero) => setQuantidade(numero)} />
                <TouchableOpacity style={styles.button} onPress={() => alert(`Item: ${item}; Quantidade: ${quantidade}`)}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6655CC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 0.6,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
    },
    button: {
        marginTop: 10,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});