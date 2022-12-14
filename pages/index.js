import { Button, Flex, Text } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import Head from "next/head";
import Dashboard from "./dashboard";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { isAuthenticated, authenticate } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          bgGradient="linear(to-br, red.400, orange.300)"
        >
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Hi!
          </Text>
          <Button colorScheme="gray" onClick={() => authenticate({})}>
            Login with Metamask
          </Button>
        </Flex>
      </>
    );
  }
}
