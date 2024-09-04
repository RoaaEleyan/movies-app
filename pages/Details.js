import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";

const MovieDetails = ({ route }) => {
  const { title, overview, poster_path } = route.params;
  return (
    <ScrollView>
      <View c>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
          style={styles.Img}
        />
        <View className="p-4">
          <Text style={styles.Text}>{title}</Text>
          <Text style={styles.Text}>{overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Img: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  Text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default MovieDetails;
