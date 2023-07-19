import React from 'react';
import { faker } from '@faker-js/faker';
import { Box, Flex, Grid, GridItem, Heading, Text, background } from '@chakra-ui/react';

const Wordle = () => {
  const [word, setWord] = React.useState<string>('');
  const [guess, setGuess] = React.useState<string>('');
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const [guessCount, setGuessCount] = React.useState<number>(0);

  React.useEffect(() => {
    setWord(faker.word.sample(5));
  }, []);

  const handleKeyUp = React.useCallback(
    (event: KeyboardEvent) => {
      const key: string = event.key;

      if (key === 'Backspace') {
        setGuess((prev) => prev.slice(0, -1));
      }

      if (key === 'Enter' && guess.length === 5) {
        setGuesses((prev) => [...prev, guess]);
        setGuessCount((prev) => prev + 1);
        setGuess('');
      }

      if (/^[a-z]$/.test(key) && guess.length < 5) {
        setGuess((prev) => prev + key);
      }
    },
    [guess]
  );

  React.useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false);

    return () => {
      document.removeEventListener('keyup', handleKeyUp, false);
    };
  }, [handleKeyUp]);

  const handleActiveGuess = guess?.split('').map((letter, index) => {
    return (
      <GridItem
        width={'100px'}
        height={'100px'}
        border={'2px solid black'}
        key={index}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        fontSize={'50'}
        fontWeight={'extrabold'}
      >
        {letter.toUpperCase()}
      </GridItem>
    );
  });

  const handleGuesses = (count: number) => {
    const guessLetters = guesses[count]?.split('');

    return guessLetters?.map((letter, index) => {
      console.log(letter, index);
      return (
        <GridItem
          width={'100px'}
          height={'100px'}
          border={'2px solid black'}
          key={index}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          fontSize={'50'}
          fontWeight={'extrabold'}
          backgroundColor={compareWords(word, guesses[count])}
        >
          {letter.toUpperCase()}
        </GridItem>
      );
    });
  };

  const compareWords = (word: string, guess: string) => {
    const wordChars = word.split('');
    const guessChars = guess.split('');

    const backgroundColor = wordChars.map((char, index) => {
      if (char === guessChars[index]) {
        return 'green';
      } else if (guessChars.includes(char)) {
        return 'yellow';
      } else {
        return 'grey';
      }
    });

    return backgroundColor;
  };

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
      <Flex
        bgColor={'hsl(150, 50%, 50%)'}
        width={'100%'}
        height={'100%'}
        justify={'center'}
        align={'center'}
        flexDir={'column'}
        gap={6}
      >
        <Box position={'relative'}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem width={'100px'} height={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
          </Grid>
          {guessCount === 0 ? (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleActiveGuess}
            </Grid>
          ) : (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleGuesses(0)}
            </Grid>
          )}
        </Box>

        <Box position={'relative'}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem width={'100px'} height={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
          </Grid>
          {guessCount === 1 ? (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleActiveGuess}
            </Grid>
          ) : (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleGuesses(1)}
            </Grid>
          )}
        </Box>

        <Box position={'relative'}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem width={'100px'} height={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
          </Grid>
          {guessCount === 2 ? (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleActiveGuess}
            </Grid>
          ) : (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleGuesses(2)}
            </Grid>
          )}
        </Box>

        <Box position={'relative'}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem width={'100px'} height={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
          </Grid>
          {guessCount === 3 ? (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleActiveGuess}
            </Grid>
          ) : (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleGuesses(3)}
            </Grid>
          )}
        </Box>

        <Box position={'relative'}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem width={'100px'} height={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
          </Grid>
          {guessCount === 4 ? (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleActiveGuess}
            </Grid>
          ) : (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleGuesses(4)}
            </Grid>
          )}
        </Box>

        <Box position={'relative'}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem width={'100px'} height={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
            <GridItem width={'100px'} border={'2px solid grey'} />
          </Grid>
          {guessCount === 5 ? (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleActiveGuess}
            </Grid>
          ) : (
            <Grid templateColumns="repeat(5, 1fr)" gap={6} position={'absolute'} top={'0'}>
              {handleGuesses(5)}
            </Grid>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Wordle;
