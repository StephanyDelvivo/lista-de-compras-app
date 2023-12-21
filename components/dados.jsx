import AsyncStorage from "@react-native-async-storage/async-storage";

export async function salvarItem(itemLista) {
  try {
    const lista = await getLista();
    lista.push(itemLista);

    const jsonLista = JSON.stringify(lista);
    await AsyncStorage.setItem("lista", jsonLista);
  } catch (e) {
    console.log(e)
  }
}

export async function alterarItem(idItem, item){
  // console.log(`ID: ${idItem}`)
  // console.log(`ITEM: ${JSON.stringify(item)}`)
  try {
    const lista = await getLista()
    let indice = lista.findIndex((item) => item.id == idItem)
    lista[indice] = item
    const listaJson = JSON.stringify(lista)
    await AsyncStorage.setItem("lista", listaJson)
  } catch (e) {
    console.log(e)
  }
}

export async function removeItem(idItem) {
  try {
    const lista = await getLista();
    let listaNova = JSON.stringify(lista.filter((item) => item.id != idItem))
    await AsyncStorage.setItem("lista", listaNova)
  } catch(e) {
    console.log(e)
  }
}

export async function getLista() {
  try{
    const dados = await AsyncStorage.getItem("lista")
    return dados ? JSON.parse(dados) : []
  } catch (e) {
    console.log(e)
  }
}
