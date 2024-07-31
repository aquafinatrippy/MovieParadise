import "./App.css";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { MovieCard } from "./components/Movie-card";
import { MovieInfo } from "./components/Movie-info";

function App() {
  const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box height="100%" width="100%">
      <Header />
      <Box
        display="flex"
        alignItems="space-between"
        flexDirection="column"
        height="100%"
      >
        <MovieInfo />
        <Box
          display="flex"
          flexDirection="row"
          gap="32px"
          height="300px"
          overflow="hidden"
        >
          {dummyArray.map((item) => (
            <MovieCard key={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
