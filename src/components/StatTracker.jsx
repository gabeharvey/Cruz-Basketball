import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function StatTracker() {
  const [stats, setStats] = useState({
    points: '',
    rebounds: '',
    assists: '',
    steals: '',
    blocks: '',
  });

  const [gameInfo, setGameInfo] = useState({
    team: '',
    opponent: '',
    date: '',
  });

  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddGame = () => {
    setGames([...games, { ...gameInfo, ...stats }]);
    setStats({
      points: '',
      rebounds: '',
      assists: '',
      steals: '',
      blocks: '',
    });
    setGameInfo({
      team: '',
      opponent: '',
      date: '',
    });
  };

  const calculateAverages = (statName) => {
    const total = games.reduce((sum, game) => sum + (parseFloat(game[statName]) || 0), 0);
    return games.length ? (total / games.length).toFixed(2) : 0;
  };

  const averagesHS = {
    points: calculateAverages('points'),
    rebounds: calculateAverages('rebounds'),
    assists: calculateAverages('assists'),
    steals: calculateAverages('steals'),
    blocks: calculateAverages('blocks'),
  };

  const averagesTexasHardwork = {
    points: calculateAverages('points'),
    rebounds: calculateAverages('rebounds'),
    assists: calculateAverages('assists'),
    steals: calculateAverages('steals'),
    blocks: calculateAverages('blocks'),
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={16}
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" textAlign="center">
        Stat Tracker
      </Heading>
      <Flex gap={4} mb={6} justifyContent="center">
        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#FF4500"
          borderWidth="4px"
        >
          <Text 
            color="#7DF9FF" 
            fontWeight="bold" 
            fontFamily="'Raleway', sans-serif" 
            fontSize="md"
            textAlign="center" 
          >
            Central Catholic Stats
          </Text>
          <Text color="#7DF9FF">Points: {averagesHS.points}</Text>
          <Text color="#7DF9FF">Rebounds: {averagesHS.rebounds}</Text>
          <Text color="#7DF9FF">Assists: {averagesHS.assists}</Text>
          <Text color="#7DF9FF">Steals: {averagesHS.steals}</Text>
          <Text color="#7DF9FF">Blocks: {averagesHS.blocks}</Text>
        </MotionBox>

        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#FF4500"
          borderWidth="4px"
        >
          <Text 
            color="#7DF9FF" 
            fontWeight="bold" 
            fontFamily="'Raleway', sans-serif"  
            fontSize="md"
            textAlign="center" 
          >
            Elite Club Stats
          </Text>
          <Text color="#7DF9FF">Points: {averagesTexasHardwork.points}</Text>
          <Text color="#7DF9FF">Rebounds: {averagesTexasHardwork.rebounds}</Text>
          <Text color="#7DF9FF">Assists: {averagesTexasHardwork.assists}</Text>
          <Text color="#7DF9FF">Steals: {averagesTexasHardwork.steals}</Text>
          <Text color="#7DF9FF">Blocks: {averagesTexasHardwork.blocks}</Text>
        </MotionBox>
      </Flex>
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#F8F8FF"
        borderRadius="12px"
        borderColor="#FF4500"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <Heading fontSize="lg" color="#000000" fontFamily="'Lobster Two', sans-serif" mb={4}>
          Player Stats:
        </Heading>
        {games.length === 0 ? (
          <Text color="#000000">No games added yet.</Text>
        ) : (
          <Grid gap={4}>
            {games.map((game, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px" borderColor="#FF4500">
                <Text color="#000000" fontWeight="bold" fontFamily="'Lobster Two', sans-serif">
                  Game {index + 1} - Valentina Cantu:
                </Text>
                <Text color="#000000">Team: {game.team}</Text>
                <Text color="#000000">Opponent: {game.opponent}</Text>
                <Text color="#000000">Date: {game.date}</Text>
                <Text color="#000000">Points: {game.points}</Text>
                <Text color="#000000">Rebounds: {game.rebounds}</Text>
                <Text color="#000000">Assists: {game.assists}</Text>
                <Text color="#000000">Steals: {game.steals}</Text>
                <Text color="#000000">Blocks: {game.blocks}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </MotionBox>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#FF4500"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
              Team
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FF4500"
              value={gameInfo.team}
              name="team"
              onChange={handleGameInfoChange}
              placeholder="Enter team name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
              Opponent
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FF4500"
              value={gameInfo.opponent}
              name="opponent"
              onChange={handleGameInfoChange}
              placeholder="Enter opponent name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
              Date
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FF4500"
              value={gameInfo.date}
              name="date"
              onChange={handleGameInfoChange}
              placeholder="Enter date"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
              Points
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FF4500"
              value={stats.points}
              name="points"
              onChange={handleInputChange}
              placeholder="Enter points scored"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
              Rebounds
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FF4500"
              value={stats.rebounds}
              name="rebounds"
              onChange={handleInputChange}
              placeholder="Enter number of rebounds"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
              Assists
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FF4500"
              value={stats.assists}
              name="assists"
              onChange={handleInputChange}
              placeholder="Enter number of assists"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
              Steals
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FF4500"
              value={stats.steals}
              name="steals"
              onChange={handleInputChange}
              placeholder="Enter number of steals"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
              Blocks
            </FormLabel>
            <Input
              bgColor="#F8F8FF"
              color="#38393d"
              borderColor="#FF4500"
              value={stats.blocks}
              name="blocks"
              onChange={handleInputChange}
              placeholder="Enter number of blocks"
            />
          </FormControl>

          <Button
            mt={4}
            bgColor="#FF4500"
            color=" #000000"
            minW="100%"
            maxW="45%"
            alignSelf="center"
            fontFamily="'Lobster Two', sans-serif"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#FF4500"
            borderWidth="3px"
            _hover={{ borderColor: '#7DF9FF' }}
            onClick={handleAddGame}
          >
            Add Game
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default StatTracker;
