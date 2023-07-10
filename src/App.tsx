import React from 'react';
import { Route, Routes, Link as ReachLink } from 'react-router-dom';

import Home from './pages/Home';
import { Button, Text, Link, Menu, MenuButton, MenuItem, MenuList, VStack } from '@chakra-ui/react';
import AdviceGeneratorApp from './pages/AdviceGeneratorApp';

const App = () => {
  return (
    <>
      <VStack>
        <VStack w={'100%'} py={'1em'} bgColor={'teal'}>
          <Menu>
            <Link as={ReachLink} to={'/'}>
              <Button>Home</Button>
            </Link>
            <MenuButton as={Button}>Frontend Mentor</MenuButton>
            <MenuList>
              <Text align={'center'}>Junior</Text>
              <Link as={ReachLink} to={'/frontend-mentor/junior/advice-generator-app'}>
                <MenuItem>Advice Generator App</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </VStack>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route
            path={'/frontend-mentor/junior/advice-generator-app'}
            element={<AdviceGeneratorApp />}
          />
        </Routes>
      </VStack>
    </>
  );
};

export default App;
