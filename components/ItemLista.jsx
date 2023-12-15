import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform } from "react-native";
import { removeItem } from "./dados";

export default function ItemLista({ navigation, item }) {

  const chamaFormEdicao = (item) => {
    navigation.navigate('Formulario', item)
  }

  const apagar = async (id) => {
    if (Platform.OS == 'web') {
      if (confirm('Deseja apagar ?')) {
        await removeItem(id);
        navigation.navigate('Lista', item.id)
      }
    }
    Alert.alert('Confirmação', 'Deseja apagar ?', [
      {
        text: 'Cancelar',
        onPress: () => navigation.navigate('Lista')
      },
      {
        text: 'Continuar', onPress: async () => {
          await removeItem(id);
          navigation.navigate('Lista', item.id)
        }
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{item.descricao}</Text>
      <Text style={styles.textItem}>{item.quantidade}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => apagar(item.id)}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText} onPress={() => chamaFormEdicao(item)}>
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
