import React from "react";
import { Box, Heading, Text, Image, Stack, Button, Link, Flex, Spacer } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.900" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Cristiano Ronaldo
          </Heading>
        </Flex>
        <Stack direction="row" spacing={4} align="center">
          <Link href="#about">About</Link>
          <Link href="#career">Career</Link>
          <Link href="#contact">Contact</Link>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Box backgroundImage="https://images.unsplash.com/photo-1623199971727-c59b8c11fdfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmlzdGlhbm8lMjByb25hbGRvJTIwYWN0aW9ufGVufDB8fHx8MTcxMjI0NzA0Nnww&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" height="100vh" display="flex" alignItems="center" justifyContent="center">
        <Box textAlign="center" color="white">
          <Heading as="h1" size="4xl">
            Cristiano Ronaldo
          </Heading>
          <Text fontSize="2xl">Professional Footballer</Text>
        </Box>
      </Box>

      {/* About Section */}
      <Box id="about" py={20}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          About Me
        </Heading>
        <Flex direction={["column", "row"]} align="center" justify="center">
          <Box flex={1} mr={[0, 10]} mb={[10, 0]}>
            <Image src="https://images.unsplash.com/photo-1657061681431-293af17cdddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmlzdGlhbm8lMjByb25hbGRvJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMjQ3MDQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cristiano Ronaldo" borderRadius="full" boxSize="300px" objectFit="cover" />
          </Box>
          <Box flex={2}>
            <Text fontSize="xl">I am Cristiano Ronaldo, a professional footballer from Portugal. I currently play as a forward for Manchester United and the Portugal national team. Throughout my career, I have won numerous awards and broken many records. I am widely regarded as one of the greatest players of all time.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Career Section */}
      <Box id="career" py={20} bg="gray.100">
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Career Highlights
        </Heading>
        <Stack spacing={8} direction={["column", "row"]} justify="center">
          <Box p={5} shadow="md" borderWidth="1px" flex={1} borderRadius="md">
            <Heading fontSize="xl">Club Career</Heading>
            <Text mt={4}>Manchester United, Real Madrid, Juventus</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex={1} borderRadius="md">
            <Heading fontSize="xl">International Career</Heading>
            <Text mt={4}>Portugal National Team</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex={1} borderRadius="md">
            <Heading fontSize="xl">Individual Awards</Heading>
            <Text mt={4}>5 Ballon d'Or, 4 European Golden Shoes</Text>
          </Box>
        </Stack>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Get in Touch
        </Heading>
        <Flex justify="center">
          <Stack spacing={4} direction={["column", "row"]}>
            <Link href="https://www.instagram.com/cristiano/" isExternal>
              <Button leftIcon={<FaInstagram />} colorScheme="pink" variant="solid">
                Instagram
              </Button>
            </Link>
            <Link href="https://www.facebook.com/Cristiano" isExternal>
              <Button leftIcon={<FaFacebook />} colorScheme="facebook" variant="solid">
                Facebook
              </Button>
            </Link>
            <Link href="https://twitter.com/Cristiano" isExternal>
              <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="solid">
                Twitter
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10} textAlign="center">
        <Text>&copy; 2023 Cristiano Ronaldo. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
