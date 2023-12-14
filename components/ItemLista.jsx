import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ItemLista(props) {

  const chamaFormEdicao = (descricao, quantidade, id) => {
    const item = {
      id: id,
      descricao: descricao,
      quantidade: quantidade
    }

    const navigation = props.navegacao
    navigation.navigate('Formulario', {
      id: id,
      desc: descricao,
      quant: quantidade
    }
    )

  }

  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{props.descricao}</Text>
      <Text style={styles.textItem}>{props.quantidade}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText} onPress={() => chamaFormEdicao(props.descricao, props.quantidade, props.id)}>
            Editar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: 10,
    marginTop: 10,
  },
  editButton: {
    marginLeft: 10,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  deleteButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  textItem: {
    fontSize: 20,
  },
});
