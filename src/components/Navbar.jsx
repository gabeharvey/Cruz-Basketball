import {
    Box,
    Flex,
    Heading,
    Spacer,
    Link as ChakraLink,
    IconButton,
    useDisclosure,
    Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { CgMenuGridO } from 'react-icons/cg';
import { useEffect, useRef, useState } from 'react';
import '../App.css';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    const menuRef = useRef();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1240);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setShowCloseIcon(true), 200);
        } else {
            setShowCloseIcon(false);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const menuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
        exit: { opacity: 0, x: '100%' },
    };

    return (
        <Box
            bgColor="#FAF0E6"
            borderBottomRadius="12px"
            py="2.5rem"
            px="2rem"
            position="relative"
            boxShadow="lg"
            mb="10px"
            fontFamily="'Russo One', sans-serif"
        >
            <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
                <Flex
                    flexDirection={isMobile ? 'column' : 'row'}
                    alignItems={isMobile ? 'flex-start' : 'center'}
                >
                    <Heading
                        as={ScrollLink}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontFamily="'Russo One', sans-serif"
                        color="#2E2E2E"
                        letterSpacing="wider"
                        mb={isMobile ? 2 : 0}
                        style={{ cursor: 'pointer' }}
                    >
                        Cruz Cantu
                    </Heading>
                </Flex>
                <Spacer />
                <IconButton
                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                    icon={
                        showCloseIcon ? (
                            <motion.div
                                whileHover={{ scale: 1.2, color: '#5A7D9A' }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                                style={{ color: '#2E2E2E' }}
                            >
                                <CloseIcon />
                            </motion.div>
                        ) : (
                            <motion.div
                                whileHover={{ scale: 1.2, color: '#5A7D9A' }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                                style={{ color: '#2E2E2E' }}
                            >
                                <CgMenuGridO />
                            </motion.div>
                        )
                    }
                    display={isMobile ? 'block' : 'none'}
                    onClick={isOpen ? onClose : onOpen}
                    variant="unstyled"
                    fontSize="30px"
                    _focus={{ boxShadow: 'none' }}
                    mt="20px"
                    mb="20px"
                />
                <Flex
                    as="ul"
                    display={isMobile ? 'none' : 'flex'}
                    listStyleType="none"
                    ml="auto"
                    alignItems="center"
                    gap="2rem"
                    flex="1"
                    justifyContent="space-evenly"
                    whiteSpace="nowrap"
                >
                    {['PLAYER BIO', 'HOOPS FILM', 'ASK CRUZ', 'PLAYER CARDS', 'MEDIA', 'ACADEMICS', 'CONTACT'].map((text, index) => (
                        <ChakraLink
                            key={index}
                            as={ScrollLink}
                            to={text.replace(' ', '-').toLowerCase()} 
                            spy={true}
                            smooth={true}
                            offset={-100} 
                            duration={500}
                            fontSize="md"
                            fontWeight="extrabold"
                            fontFamily="'Exo 2', sans-serif"
                            color="#2E2E2E"
                            position="relative"
                            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: '#5A7D9A' }}
                            _after={{
                                content: '""',
                                position: 'absolute',
                                bottom: '-0.2rem',
                                left: 0,
                                width: '0%',
                                height: '2px',
                                bg: '#e47608',
                                transition: 'width 0.3s ease',
                            }}
                            _hoverAfter={{ width: '100%' }}
                            style={{ cursor: 'pointer' }}
                        >
                            {text}
                        </ChakraLink>
                    ))}
                </Flex>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        style={{ position: 'fixed', top: 0, right: 0, width: '70%', height: '100vh', zIndex: 10 }}
                    >
                        <Box
                            ref={menuRef}
                            bgColor="#FAF0E6"
                            p="1rem"
                            borderTopLeftRadius="30px"
                            borderBottomLeftRadius="30px"
                            color="#2E2E2E"
                            height="100%"
                            boxShadow="0 0 20px rgba(0, 0, 0, 0.9)"
                        >
                            <Flex alignItems="center" justifyContent="space-between" mb="1rem">
                                <Text fontSize="2xl" ml="20px" fontWeight="bold">
                                    Menu
                                </Text>
                                <IconButton
                                    icon={<CloseIcon w={6} h={6} />}
                                    color="#2E2E2E"
                                    aria-label="Close Menu"
                                    variant="outline"
                                    onClick={onClose}
                                    bgColor="transparent"
                                    _focus={{ boxShadow: 'none' }}
                                    _hover={{ bg: 'transparent' }}
                                    size="lg"
                                    fontWeight="bold"
                                    borderColor="transparent"
                                />
                            </Flex>
                            {/* <Divider /> */}
                            <Flex as="ul" flexDirection="column" alignItems="flex-start" gap="1rem" mt="1rem">
                                {['PLAYER BIO', 'HOOPS FILM', 'ASK CRUZ', 'PLAYER CARDS', 'MEDIA', 'ACADEMICS', 'CONTACT'].map((text, index) => (
                                    <ChakraLink
                                        key={index}
                                        as={ScrollLink}
                                        to={text.replace(' ', '-').toLowerCase()} 
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        fontSize="lg"
                                        fontFamily="'Exo 2', sans-serif"
                                        fontWeight="bold"
                                        color="#2E2E2E"
                                        position="relative"
                                        _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: '#5A7D9A' }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {text}
                                    </ChakraLink>
                                ))}
                            </Flex>
                        </Box>
                    </motion.div>
                )}
            </Flex>
        </Box>
    );
};

export default Navbar;