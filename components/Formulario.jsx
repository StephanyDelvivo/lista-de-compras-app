import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
} from "react-native";

import { salvarItem } from "./dados";
import { alterarItem } from './dados'
import ItemLista from "./ItemLista";

export default function Formulario({ navigation, route }) {

    const [id, setId] = useState(null)
    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [edit, setEdit] = useState(false)


    useEffect(() => {
        console.log(route.params)
        if (route.params) {
            const { id, descricao, quantidade } = route.params
            setId(id)
            setDescricao(descricao)
            setQuantidade(quantidade.toString())
            setEdit(true)
        }
    }, [route])

    const editarItem = async () => {
        if (descricao !== '' && quantidade !== '') {
            const item = {
                id: id,
                descricao: descricao,
                quantidade: quantidade
            }

            await alterarItem(item.id, item)
            setDescricao('')
            setQuantidade('')
            setEdit(false)
            navigation.navigate('Lista', item)
        }
    }

    const cancelarEdicao = () => {
        setId(null)
        setDescricao('')
        setQuantidade('')
        setEdit(false)
        navigation.navigate('Lista')
    }

    const handleButtonPress = async () => {
        const itemLista = {
            id: new Date().getTime(),
            descricao: descricao,
            quantidade: parseInt(quantidade)
        }

        await salvarItem(itemLista)

        setDescricao('')
        setQuantidade('')
        navigation.navigate('Lista', itemLista)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Item para comprar</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="O que está faltando em casa?"
                    value={descricao}
                    onChangeText={(valor) => { setDescricao(valor) }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite a quantidade"
                    keyboardType="numeric"
                    value={quantidade}
                    onChangeText={setQuantidade}
                />
                {edit && <>
                    <TouchableOpacity style={styles.button} onPress={editarItem}>
                        <Text style={styles.buttonText}>Salvar Alterações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCancelar} onPress={cancelarEdicao}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </>}
                {!edit && descricao !== '' && quantidade !== '' ?
                    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                    : <></>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6655CC",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: "90%",
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#fff",
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: "blue",
        borderRadius: 10,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonCancelar: {
        marginTop: 10,
        height: 60,
        backgroundColor: "red",
        borderRadius: 10,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
});
