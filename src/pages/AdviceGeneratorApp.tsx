import React from 'react';
import { Flex, Image, Spinner, Text, VStack } from '@chakra-ui/react';
import '../assets/AdviceGeneratorApp/css/font.css';

interface AdviceSlip {
  slip: {
    id: number;
    advice: string;
  };
}

const AdviceGeneratorApp = () => {
  const [advice, setAdvice] = React.useState<AdviceSlip>();

  React.useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data: AdviceSlip) => {
        setAdvice(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Flex
      w={'1440px'}
      h={'100vh'}
      backgroundColor={'hsl(218, 23%, 16%)'}
      align={'center'}
      justify={'center'}
    >
      {!advice ? (
        <Spinner />
      ) : (
        <VStack backgroundColor={'hsl(217, 19%, 24%)'} fontFamily={'Manrope'}>
          <Text color={'hsl(150, 100%, 66%)'}>ADVICE #{advice.slip.id}</Text>
          <Text fontSize={'28px'} color={'hsl(193, 38%, 86%)'}>
            "{advice.slip.advice}"
          </Text>
          <Image src="/src/assets/AdviceGeneratorApp/pattern-divider-desktop.svg" />
          <Image
            src="/src/assets/AdviceGeneratorApp/icon-dice.svg"
            borderRadius={'full'}
            backgroundColor={'hsl(150, 100%, 66%)'}
            padding={'5'}
          />
        </VStack>
      )}
    </Flex>
  );
};

export default AdviceGeneratorApp;
