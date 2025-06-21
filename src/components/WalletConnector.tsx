import { useState } from 'react';
import { Button, Text, Box, useToast } from '@chakra-ui/react';
import { ethers } from 'ethers';

export function WalletConnector() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const toast = useToast();

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum && (window as any).ethereum.isMetaMask) {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        const address = accounts[0];
        setWalletAddress(address);

        const balanceBigInt = await provider.getBalance(address);
        const balanceInEth = ethers.formatEther(balanceBigInt);
        setBalance(parseFloat(balanceInEth).toFixed(4));

        toast({
          title: 'Carteira conectada!',
          description: `Endereço: ${address}`,
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      } catch (err) {
        toast({
          title: 'Erro ao conectar carteira',
          description: `${(err as Error).message}`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: 'MetaMask não encontrada',
        description: 'Instale a extensão para continuar',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box textAlign="center" mt="10">
      <Button colorScheme="teal" onClick={connectWallet} isLoading={false}>
        Conectar carteira
      </Button>
      {walletAddress && (
        <>
          <Text mt="4" fontSize="lg" color="green.300">
            Carteira conectada: {walletAddress}
          </Text>
          {balance && (
            <Text fontSize="md" color="yellow.300">
              Saldo: {balance} ETH
            </Text>
          )}
        </>
      )}
    </Box>
  );
}
