import { Box, Checkbox, Text, Heading, VStack } from '@chakra-ui/react';
import { useState } from 'react';

interface Mission {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const initialMissions: Mission[] = [
  {
    id: '1',
    title: 'Assistir tutorial Web3',
    description: 'Assista ao vídeo introdutório sobre Web3',
    completed: false,
  },
  {
    id: '2',
    title: 'Conectar carteira',
    description: 'Conecte sua carteira MetaMask no app',
    completed: true,
  },
  {
    id: '3',
    title: 'Completar missão teste',
    description: 'Finalize esta missão para ganhar seu primeiro badge',
    completed: false,
  },
];

export function Missions() {
  const [missions, setMissions] = useState<Mission[]>(initialMissions);

  const toggleComplete = (id: string) => {
    setMissions(missions.map(m =>
      m.id === id ? { ...m, completed: !m.completed } : m
    ));
  };

  return (
    <Box mt="10" px="6">
      <Heading size="md" color="teal.400" mb="4">
        Missões
      </Heading>
      <VStack align="start" spacing="4">
        {missions.map(mission => (
          <Checkbox
            key={mission.id}
            isChecked={mission.completed}
            onChange={() => toggleComplete(mission.id)}
            colorScheme="teal"
          >
            <Text fontWeight="bold">{mission.title}</Text>
            <Text fontSize="sm" color="gray.300" ml="6">{mission.description}</Text>
          </Checkbox>
        ))}
      </VStack>
    </Box>
  );
}
