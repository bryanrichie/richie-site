import React, { useEffect, useState } from 'react';
import { Flex, Spinner, Text } from '@chakra-ui/react';

interface AdviceSlip {
  slip: {
    id: number;
    advice: string;
  };
}

const AdviceGeneratorApp = () => {
  const [advice, setAdvice] = useState<AdviceSlip>();

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data: AdviceSlip) => {
        setAdvice(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {!advice ? (
        <Spinner />
      ) : (
        <Flex>
          <Text>{advice.slip.id}</Text>
          <Text>{advice.slip.advice}</Text>
        </Flex>
      )}
    </>
  );
};

export default AdviceGeneratorApp;
