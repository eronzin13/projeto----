import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Filme = ({ filme, onRemove }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: filme.imagem }} style={styles.image} />
      <View style={{ padding: 10 }}>
        <Text style={styles.text}>{filme.nome}</Text>
        <Text style={styles.text2}>{filme.genero}</Text>
        <TouchableOpacity onPress={onRemove}>
          <Text style={styles.delete}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#212121",
    borderRadius: 10,
    hadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  image: {
    width: "100%",
    height: 450,
    resizeMode: "stretch",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  text2: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  delete: {
    fontSize: 20,
    color: "red",
  },
});

export default Filme;
