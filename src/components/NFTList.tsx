import { Box, Image, Text, SimpleGrid, Heading } from '@chakra-ui/react';

interface NFT {
  id: string;
  name: string;
  description: string;
  image: string;
}

const mockNFTs: NFT[] = [
  {
    id: '1',
    name: ' Badge #1',
    description: 'Badge de participação na Fan Quest',
    image: 'https://via.placeholder.com/150/8e44ad/ffffff?text=Badge+1',
  },
  {
    id: '2',
    name: 'Badge #2',
    description: 'Badge de missão completada',
    image: 'https://via.placeholder.com/150/2980b9/ffffff?text=Badge+2',
  },
  {
    id: '3',
    name: 'Badge #3',
    description: 'Badge de top player',
    image: 'https://via.placeholder.com/150/c0392b/ffffff?text=Badge+3',
  },
];

export function NFTList() {
  return (
    <Box mt="10" px="6">
      <Heading mb="4" size="md" color="teal.400">Seus NFTs</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="6">
        {mockNFTs.map(nft => (
          <Box
            key={nft.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="4"
            _hover={{ boxShadow: 'lg' }}
            bg="gray.700"
          >
            <Image src={nft.image} alt={nft.name} borderRadius="md" mb="3" />
            <Text fontWeight="bold" mb="1">{nft.name}</Text>
            <Text fontSize="sm" color="gray.300">{nft.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
