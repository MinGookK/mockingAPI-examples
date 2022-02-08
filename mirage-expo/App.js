import { StatusBar } from "expo-status-bar";
import { createServer } from "miragejs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get("/api/movies", () => {
      return {
        movies: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      };
    });
  },
});

export default function App() {
  let [movies, setMovies] = React.useState([]);
  console.log("asdfsadfasd");
  React.useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((json) => setMovies(json.movies));
  }, []);

  return (
    <View>
      {movies.map((movie) => (
        <Text key={movie.id}>
          {movie.name} ({movie.year})
        </Text>
      ))}
    </View>
  );
}
