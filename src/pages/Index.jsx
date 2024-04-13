import { Box, Button, Container, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="gray.50" py={4}>
        <Container maxW="container.lg">
          <HStack justify="space-between">
            <HStack>
              <Image src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhcnRpY2xlJTIwbG9nb3xlbnwwfHx8fDE3MTMwNDcxMjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Particles logo" h={8} />
              <Heading as="h1" size="lg">
                Particles
              </Heading>
            </HStack>
            <Button colorScheme="blue">Sign In</Button>
          </HStack>
        </Container>
      </Box>

      {/* Hero */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8} align="center">
            <VStack align={["center", "flex-start"]} spacing={4} flex={1}>
              <Heading as="h2" size="2xl">
                Connecting Companies with Top Web Talent
              </Heading>
              <Text fontSize="xl">Particles is the leading marketplace to find and hire exceptional developers, designers, and more for your web projects.</Text>
              <Button colorScheme="blue" size="lg">
                View Available Talent
              </Button>
            </VStack>
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXJzJTIwd29ya2luZ3xlbnwwfHx8fDE3MTMwNDcxMjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web developers working" flex={1} />
          </Stack>
        </Container>
      </Box>

      {/* Features */}
      <Box py={20}>
        <Container maxW="container.lg">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" textAlign="center">
              Why Hire on Particles?
            </Heading>
            <Stack direction={["column", "row"]} spacing={8}>
              <VStack align="center" spacing={4} flex={1}>
                <Image src="https://images.unsplash.com/photo-1653154726310-5dcc764680ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwaWNvbnxlbnwwfHx8fDE3MTMwNDcxMjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Quality icon" h={12} />
                <Heading as="h3" size="lg">
                  Top Quality Talent
                </Heading>
                <Text>Hire pre-vetted experts in React, Node.js, UI/UX design, and more.</Text>
              </VStack>
              <VStack align="center" spacing={4} flex={1}>
                <Image src="https://images.unsplash.com/photo-1473646590311-c48e1bc77b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGVlZCUyMGljb258ZW58MHx8fHwxNzEzMDQ3MTI4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Speed icon" h={12} />
                <Heading as="h3" size="lg">
                  Quick Matching
                </Heading>
                <Text>We'll match you with the right talent based on your project needs.</Text>
              </VStack>
              <VStack align="center" spacing={4} flex={1}>
                <Image src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwaWNvbnxlbnwwfHx8fDE3MTMwNDcxMjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Support icon" h={12} />
                <Heading as="h3" size="lg">
                  Dedicated Support
                </Heading>
                <Text>Our team is here to help at every step of the hiring process.</Text>
              </VStack>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* CTA */}
      <Box bg="gray.800" py={20}>
        <Container maxW="container.lg">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="xl" color="white">
              Start Hiring Top Web Talent
            </Heading>
            <Button colorScheme="blue" size="lg" leftIcon={<FaSearch />}>
              View Available Talent
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
