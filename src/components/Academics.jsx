import { Box, VStack, Heading, Flex, Link, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Academics() {
  const academicAchievements = [
    "Graduated with Honors from Central Catholic",
    "Dean's List for 8 semesters",
    "Recipient of the Academic Excellence Scholarship",
    "Completed a major in Computer Science with a focus on AI",
    "Co-Founder of the Women in Tech Club at Central Catholic",
    "Volunteered as a mentor for aspiring computer scientists"
  ];

  return (
    <VStack
      spacing={10}
      mt={12}
      align="center"
      p={{ base: 5, md: 10 }}
      minH="100vh"
      bgImage="url('/background-image.png')" 
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#FAF0E6" fontFamily="'Russo One', sans-serif" mb="5">
        Academics
      </Heading>

      <MotionBox
        w={{ base: '80%', md: '300px' }} 
        h="auto"
        m="5"
        bgColor="#FAF0E6"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#FAF0E6"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={0} 
        display="flex"
        flexDirection="column"
        alignItems="center"
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <Image 
          src="/mens-basketball-placeholder.png" 
          alt="Cruz's Student Photo"
          borderRadius="12px"
          w="100%" 
          h="100%" 
          objectFit="cover" 
        />
      </MotionBox>

      <Flex direction="column" alignItems="center" width="100%">
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="120px"
          m="5"
          bgColor="#FAF0E6"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#DC143C"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          alignItems="center"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Link
            fontFamily="'Russo One', sans-serif"
            fontWeight="bold"
            href="/path-to-transcripts"
            isExternal
            color="#2E2E2E"
            fontSize="lg"
            p={3}
            _hover={{ color: '#DC143C', textDecoration: 'underline' }}
            textAlign="center" 
            width="100%" 
            display="flex"
            justifyContent="center" 
            alignItems="center" 
          >
            View Transcripts
          </Link>
        </MotionBox>

        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="auto"
          m="5"
          bgColor="#FAF0E6"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#DC143C"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"  
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Text fontWeight="bold" fontSize="lg" color="#2E2E2E" mb="2" textAlign="center">
            Academic Achievements
          </Text>
          <VStack spacing={2} align="start" fontFamily="'Exo 2', sans-serif" fontWeight="bold">
            {academicAchievements.map((achievement, index) => (
              <Text key={index} color="#2E2E2E">
                - {achievement}
              </Text>
            ))}
          </VStack>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default Academics;