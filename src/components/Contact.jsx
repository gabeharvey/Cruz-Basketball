import { Box, VStack, Heading, Input, Textarea, Button, Grid, FormControl, FormLabel } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Contact() {
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
      mb={16}
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#FAF0E6" fontFamily="'Russo One', sans-serif">
        Contact Cruz
      </Heading>
      
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#FAF0E6"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Grid gap={4}>
          <FormControl id="name">
            <FormLabel color="#FAF0E6" fontFamily="'Russo One', sans-serif">
              Name
            </FormLabel>
            <Input
              placeholder="Your Name"
              bgColor="#FAF0E6"
              color="#38383d"
              borderRadius="8px"
              borderColor="#FAF0E6"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel color="#FAF0E6" fontFamily="'Russo One', sans-serif">
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              bgColor="#FAF0E6"
              color="#38393d"
              borderRadius="8px"
              borderColor="#FAF0E6"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="message">
            <FormLabel color="#FAF0E6" fontFamily="'Russo One', sans-serif">
              Message
            </FormLabel>
            <Textarea
              placeholder="Your Message"
              bgColor="#FAF0E6"
              color="#38393d"
              borderRadius="8px"
              borderColor="#FAF0E6"
              _placeholder={{ color: 'gray.500' }}
              rows={4}
            />
          </FormControl>

          <Button
            mt={4}
            bgColor="#5A7D9A"
            color="#FAF0E6"
            minW="100%"
            maxW="45%"
            alignSelf="center"
            fontFamily="'Russo One', sans-serif"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#5A7D9A"
            borderWidth="3px"
            _hover={{ borderColor: '#FAF0E6' }}
          >
            Submit
          </Button>
        </Grid>
      </MotionBox>
    </VStack>
  );
}

export default Contact;