import React from "react";
import { ThemeProvider } from "styled-components";
import Table from "./components/Table";
import theme from "./constants/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Table />
    </ThemeProvider>
  );
};

export default App;
