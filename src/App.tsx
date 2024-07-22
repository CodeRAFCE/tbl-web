import Routes from "./routes/Route";
import ThemeProvider from "./theme/Theme";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;