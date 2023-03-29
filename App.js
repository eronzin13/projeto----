import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Filme from "./src/components/Filme";

const filmes = [
  {
    nome: "AVATAR 2",
    genero: "Aventura",
    imagem: "https://static.stealthelook.com.br/wp-content/uploads/2022/09/novos-filmes-que-eu-mal-posso-esperar-para-ver-esse-ano-avatar-the-way-of-the-water-20220908180112.jpg",
  },
  {
    nome: "Champions",
    genero: "Comédia",
    imagem:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i46Gke8Kg3uH2K5eM0rDo4HzPtq.jpg",
  },
  {
    nome: "THE LAST OF US",
    genero: "Drama",
    imagem:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  },
  {
    nome: "Ataque dos Titãs",
    genero: "Animação",
    imagem:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hNEG0e6aPq0EwrugX5A5rCc9TGg.jpg",
  },
  {
    nome: "A Era do Gelo o Big Bang",
    genero: "Animação",
    imagem:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gh9LEW4bzN2nuDfyViLqWSV67sa.jpg",
  },
  {
    nome: "Três Homens em Conflito",
    genero: "Ação",
    imagem:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5KI3QNTtEUzuAOsX42aepAjHhYf.jpg",
  },
  {
    nome: "Os smurfs",
    genero: "Animação",
    imagem:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/leKD311kVljhYLaXqwRUOF317vh.jpg",
  },
];

const ListaFilmes = () => {
  const [filmesList, setFilmesList] = useState(filmes);

  const handleRemove = (index) => {
    const newFilmesList = [...filmesList];
    newFilmesList.splice(index, 1);
    setFilmesList(newFilmesList);
  };

  return (
    <ScrollView style={styles.scroll}>
      {filmesList.map((filme, index) => (
        <Filme key={index} filme={filme} onRemove={() => handleRemove(index)} />
      ))}
    </ScrollView>
  );
};

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Filmes Diario</Text>
      <ListaFilmes />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#000",
    height: 85,
    paddingTop: 30,
  },
  scroll: {
    padding: 50,
  },
  content: {
    flex: 1,
  },
});
