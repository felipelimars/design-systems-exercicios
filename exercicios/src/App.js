import { ChakraBaseProvider } from "@chakra-ui/react";
import ProductAddToCartion from "./components/card";

function App() {
  return (
    <ChakraBaseProvider>
      <ProductAddToCartion/>
    </ChakraBaseProvider>
  );
}

export default App;
