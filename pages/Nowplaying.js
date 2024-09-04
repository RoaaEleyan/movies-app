import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Now = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  const api_key = "89d66455b2ee6725a1826cf9fafe5afa";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    fetchMovies();
  }, []);

  return (
    <View style={{ flex: 2, backgroundColor: "1e3b31" }}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("MovieDetails", { movieId: item.id })
            }
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
              style={styles.Img}
            />
            <Text style={styles.Text}>{item.title}</Text>
            <View style={styles.detailsContainer}>
              <Button
                title="Add to fav"
                color="#fca5a5"
                onPress={() => {
                  dispatch(toggle(item));
                  console.log("pressed");
                }}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Img: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#a3a3a3",
    borderRadius: 10,
  },
  Text: {
    fontSize: 16,

    marginVertical: 5,
  },

  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default Now;
