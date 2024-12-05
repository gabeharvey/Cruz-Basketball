/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, name, bio, funFact, cardNumber, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="420px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >

        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
            <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
            borderColor="#5A7D9A"
            borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-end"
            boxShadow="0 0 25px rgba(90, 125, 154, 0.9), 0 0 50px rgba(70, 100, 130, 0.7)"
            >
            <Text
              bg="rgba(0, 0, 0, 0)"
              w="100%"
              color="#2E2E2E"
              fontSize="2xl"
              fontFamily="'Russo One', sans-serif"
              textAlign="center"
              p={2}
              borderBottomRadius="12px"
            >
              {name}
            </Text>
          </Box>
        </Box>

        <Box
            bgGradient="linear(to-t, rgba(90, 125, 154, 0.7), rgba(70, 100, 130, 0.8), rgba(50, 75, 100, 0.6), rgba(30, 50, 80, 0.8))"
            position="absolute"
            style={{ backfaceVisibility: 'hidden' }}
            w="100%"
            h="100%"
            borderRadius="12px"
            borderColor="#FAF0E6"
            borderWidth="3px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 25px rgba(250, 240, 230, 0.9), 0 0 50px rgba(245, 235, 220, 0.7)"
            transform="rotateY(180deg)"
            p={5}
            >

  <Box mb={2}>
    <img src="basketball-image.png" alt="Team Logo" style={{ width: '60px', height: 'auto' }} />
  </Box>

  <Text
    mt={2}
    color="#FAF0E6"
    fontFamily="'Exo 2', sans-serif"
    fontWeight="bold"
    fontSize="md"
    textAlign="center"
    textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
  >
    Field Goal Percentage: .450
  </Text>
  <Text
    color="#FAF0E6"
    fontFamily="'Exo 2', sans-serif"
    fontWeight="bold"
    fontSize="md"
    textAlign="center"
    textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
  >
    Three-Pointers Made: 15
  </Text>
  <Text
    mt={4}
    color="#FAF0E6"
    fontFamily="'Exo 2', sans-serif"
    fontWeight="bold"
    fontSize="md"
    textAlign="center"
    textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
  >
    Card #{cardNumber}
  </Text>
  <Text
    mt={4}
    color="#FAF0E6"
    fontFamily="'Russo One', sans-serif"
    fontWeight="bold"
    fontSize="md"
    textAlign="center"
    textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
  >
    {bio}
  </Text>
  <Text
    mt={2}
    color="#FAF0E6"
    fontFamily="'Exo 2', sans-serif"
    fontWeight="bold"
    fontSize="md"
    textAlign="center"
    textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
  >
    Fun Fact: {funFact}
  </Text>
</Box>

      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "mens-basketball-placeholder.png",
      name: "Cruz Cantu",
      bio: "Cruz Cantu is a standout on the court, known for his clutch shooting and leadership.",
      funFact: "Loves to watch highlight reels of his favorite NBA players.",
      cardNumber: 1,
    },
    {
      frontImg: "mens-basketball-placeholder.png",
      name: "Cruz Cantu",
      bio: "Cruz Cantu has a knack for sinking three-pointers in high-pressure situations.",
      funFact: "Is an avid collector of vintage basketball cards.",
      cardNumber: 2,
    },
    {
      frontImg: "mens-basketball-placeholder.png",
      name: "Cruz Cantu",
      bio: "Cruz Cantu is a fast break specialist, always looking to convert steals into easy points.",
      funFact: "Loves playing pick-up games at the local gym.",
      cardNumber: 3,
    },
    {
      frontImg: "mens-basketball-placeholder.png",
      name: "Cruz Cantu",
      bio: "Cruz Cantu's defense is unmatched, with an impressive steals per game ratio.",
      funFact: "Has a secret love for playing the piano.",
      cardNumber: 4,
    },
    {
      frontImg: "mens-basketball-placeholder.png",
      name: "Cruz Cantu",
      bio: "Cruz Cantu's athleticism allows his to dominate both ends of the court, excelling at both offense and defense.",
      funFact: "Enjoys watching classic basketball games from the 90s.",
      cardNumber: 5,
    },
    {
      frontImg: "mens-basketball-placeholder.png",
      name: "Cruz Cantu",
      bio: "Cruz Cantu is a skilled ball handler, able to create his own shot when needed.",
      funFact: "Aspires to become a professional coach in the future.",
      cardNumber: 6,
    },
    {
      frontImg: "mens-basketball-placeholder.png",
      name: "Cruz Cantu",
      bio: "Cruz Cantu brings intensity to every game, pushing hisself and his teammates to the limit.",
      funFact: "Loves watching buzzer-beaters and clutch moments in basketball.",
      cardNumber: 7,
    },
    {
      frontImg: "mens-basketball-placeholder.png",
      name: "Cruz Cantu",
      bio: "Cruz Cantu excels in both transition offense and defense, always being in the right place at the right time.",
      funFact: "Passionate about mentoring younger players.",
      cardNumber: 8,
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }}
      mb={{ base: 12, md: 16 }}
    >
      <Text fontSize="4xl" fontWeight="medium" color="#FAF0E6" fontFamily="'Russo One', sans-serif">
        Player Cards
      </Text>
      <Text fontSize="xl" fontWeight="medium" color="#FAF0E6" fontFamily="'Russo One', sans-serif">
        Click on a card to see more info
      </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }}
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card
            key={index}
            frontImg={player.frontImg}
            name={player.name}
            bio={player.bio}
            funFact={player.funFact}
            cardNumber={player.cardNumber}
            flipSound={flipSound}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
