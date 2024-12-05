/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#5A7D9A"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#5A7D9A"
        bgImage="linear-gradient(-45deg, #5A7D9A 25%, transparent 25%, transparent 50%, #5A7D9A 50%, #5A7D9A 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#FAF0E6" h="30%">
          <Text fontSize="2xl" fontWeight="semibold" color="#2E2E2E" fontFamily="'Russo One', sans-serif">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#2E2E2E" fontFamily="'Exo 2', sans-serif">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function HoopsFilm() {
  const videos = [
    {
      videoSrc: "Cruz-vid-1.MOV",
      title: "Fast Break Finish",
      description: "Speed Video",
    },
    {
      videoSrc: "Cruz-vid-2.MOV",
      title: "Steal and Score",
      description: "Athleticism and Finish",
    },
    {
      videoSrc: "Cruz-vid-3.MOV",
      title: "Half-Court Swish",
      description: "Jump Shot Range",
    },
    {
      videoSrc: "Cruz-vid-4.MOV",
      title: "Triple Threat",
      description: "Dribble, Pass, Shoot",
    },
    {
      videoSrc: "Cruz-vid-5.MOV",
      title: "Nothing But Net",
      description: "Sharp Shooter on the Court",
    },
    {
      videoSrc: "../video6.mp4",
      title: "Training Hustle",
      description: "Gym Drills and Skills",
    },
    {
      videoSrc: "../video7.mp4",
      title: "All-Star Highlights",
      description: "Elite Game Moments",
    },
    {
      videoSrc: "../video8.mp4",
      title: "Varsity Vision",
      description: "High School Hoops Highlights",
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
        Hoops Film
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
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
          alt="Basketball Net"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </Box>
    </VStack>
  );
}

export default HoopsFilm;
