import { View, Text, StyleSheet } from "react-native";



export default function Lista() {
    return (
        <View style={styles.container}>
            <Text>Lista</Text>
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
});