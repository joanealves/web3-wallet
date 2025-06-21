import { ChakraProvider, Heading, Box } from '@chakra-ui/react';
import { WalletConnector } from './components/WalletConnector';
import { NFTList } from './components/NFTList';
import { Missions } from './components/Missions';

function App() {
  return (
    <ChakraProvider>
      <Box p="6" bg="gray.900" minH="100vh">
        <Heading color="teal.400" mb="6" textAlign="center">
          Conexão Web3 com MetaMask
        </Heading>
        <WalletConnector />
        <NFTList />
        <Missions />
      </Box>
    </ChakraProvider>
  );
}

export default App;
