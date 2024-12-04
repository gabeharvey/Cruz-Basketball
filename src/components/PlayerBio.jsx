import { useState, useRef } from 'react';
import { VStack, Heading, Box, Flex, Grid, Text, IconButton } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PlayerProfile() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const player = {
    frontImg: "ai-basketball-placeholder.png",
    secondImg: "ai-basketball-placeholder.png",
    name: "Player Bio", 
    bioCategories: [
      { title: "Class", description: "2030" },
      { title: "Position", description: "PF/C" },
      { title: "Height", description: "5'10\"" },
      { title: "Weight", description: "145 lbs" },
      { title: "Place of Birth", description: "San Antonio, TX" },
      { title: "High School", description: "Central Catholic" },
    ],
  };

  return (
    <VStack
      spacing={10}
      p={6}
      mt={12} 
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" mb="5">
        {player.name}
      </Heading>

      {/* Play Button */}
{/* Play/Pause Button */}
{isPlaying ? (
  <button
    onClick={() => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7DF9FF"
      strokeWidth="2"
      width="40px"
      height="40px"
    >
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  </button>
) : (
  <button
    onClick={handlePlay}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7DF9FF"
      strokeWidth="2"
      width="40px"
      height="40px"
    >
      <polygon points="5,3 19,12 5,21" />
    </svg>
  </button>
)}

      <audio ref={audioRef} src="rap-1.mp3" preload="auto" />
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box
          bgImage={`url(${player.frontImg})`} 
          bgSize="cover"
          bgPosition="center"
          borderRadius="12px"
          borderColor="#7DF9FF"
          borderWidth="3px"
          minH="500px"
          minW="350px"
          m="5"
        />
        <Box
          w={{ base: '90%', md: '500px' }}
          h="700px"
          minW="320px"
          m="5"
          bgColor="#F8F8FF"
          bgImage="linear-gradient(-45deg, #F8F8FF 25%, transparent 25%, transparent 50%, #F8F8FF 50%, #F8F8FF 75%, transparent 75%, transparent)"
          bgSize="1px 1px"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#FF4500"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={6}
        >
          <Grid gap={4}>
            {player.bioCategories.map((category, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#000000" fontWeight="bold" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
                  {category.title}
                </Text>
                <Text color="#000000" fontFamily="'Raleway', sans-serif" fontSize="lg" fontWeight="semibold" mt={1}>
                  {category.description}
                </Text>
              </Box>
            ))}
          </Grid>
          <Flex justifyContent="center" mt={6}>
            <IconButton
              as={Link}
              to="https://www.facebook.com"
              aria-label="Facebook"
              icon={<FaFacebookF />}
              variant="ghost"
              color="#000000" 
              fontSize="24px"
              _hover={{ color: '#0056b3' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://www.instagram.com"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              color="#000000" 
              fontSize="24px"
              _hover={{ color: '#e1306c' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://snapchat.com"
              aria-label="Snapchat"
              icon={<FaSnapchatGhost />}
              variant="ghost"
              color="#000000" 
              fontSize="24px"
              _hover={{ color: '#fffc00' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://www.youtube.com"
              aria-label="YouTube"
              icon={<FaYoutube />}
              variant="ghost"
              color="#000000" 
              fontSize="24px"
              _hover={{ color: '#c4302b' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
          </Flex>
        </Box>
      </Flex>

      <Box
        w="100%"
        h="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="transparent"
        border="none"
      >
        <img 
          src="/basketball-image.png" 
          alt="Player Image" 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </Box>
    </VStack>
  );
}

export default PlayerProfile;
