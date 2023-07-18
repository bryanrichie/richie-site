/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { faker } from '@faker-js/faker';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const Wordle = () => {
  const [word, setWord] = React.useState<string>('');
  const [guessInput, setGuessInput] = React.useState(['']);
  const [guesses, setGuesses] = React.useState<[string]>(['']);
  const [guessCount, setGuessCount] = React.useState<number>(0);

  React.useEffect(() => {
    setWord(faker.word.sample(5));
  }, []);

  // React.useEffect(() => {
  //   const handleKeyup = (event: any) => {
  //     // if (event.altKey || event.metaKey || event.ctrlKey || event.shiftKey) {
  //     //   return;
  //     // }

  //     console.log(event);

  //     if (event.key.match(/[a-z]/) && guessInput.length < 5) {
  //       setGuessInput([...guessInput, event.key]);
  //     }
  //   };

  //   // console.log(guessInput);

  //   window.addEventListener('keyup', handleKeyup, false);

  //   return () => {
  //     window.removeEventListener('keyup', handleKeyup, false);
  //   };
  // }, [guessInput]);

  window.addEventListener(
    'keyup',
    (event) => {
      if (event.key.match(/[a-z]/) && guessInput.length < 5) {
        console.log(event);
        setGuessInput([...guessInput, event.key]);
      }
    },
    false
  );

  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      bgColor={'hsl(255, 30%, 60%)'}
      width={'100%'}
      height={'100vh'}
    >
      <Heading>Wordle</Heading>
      <Text>Word: {word}</Text>
      <Text>Attempt: {guessCount}</Text>
      <Text>Guess: {guessInput}</Text>
      <Flex
        bgColor={'hsl(150, 50%, 50%)'}
        width={'100%'}
        height={'100%'}
        justify={'center'}
        align={'center'}
        flexDir={'column'}
        gap={6}
      >
        {/* <Grid backgroundColor={'tomato'} templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
        </Grid>
        <Grid backgroundColor={'tomato'} templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
        </Grid>
        <Grid backgroundColor={'tomato'} templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
        </Grid>
        <Grid backgroundColor={'tomato'} templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
        </Grid>
        <Grid backgroundColor={'tomato'} templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} height={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
          <GridItem width={'50px'} bgColor={'teal'} />
        </Grid> */}
      </Flex>
    </Flex>
  );
};

export default Wordle;
