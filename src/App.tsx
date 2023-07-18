import React from 'react';
import { Route, Routes, Link as ReachLink } from 'react-router-dom';

import Home from './pages/Home';
import {
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  HStack,
} from '@chakra-ui/react';
import AdviceGeneratorApp from './pages/AdviceGeneratorApp';
import ResultsSummaryComponent from './pages/ResultsSummaryComponent';
import Wordle from './pages/Wordle';

const App = () => {
  return (
    <>
      <VStack>
        <HStack w={'100%'} py={'1em'} bgColor={'teal'} align={'flex-start'}>
          <Link as={ReachLink} to={'/'}>
            <Button>Home</Button>
          </Link>
          <Menu>
            <MenuButton as={Button}>Frontend Mentor</MenuButton>
            <MenuList>
              <HStack>
                <VStack className="newbie-challenges">
                  <Text align={'center'}>Newbie</Text>
                  <Link as={ReachLink} to={'/frontend-mentor/newbie/results-summary-component'}>
                    <MenuItem>Results Summary Component</MenuItem>
                  </Link>
                </VStack>
                <VStack className="junior-challenges">
                  <Text align={'center'}>Junior</Text>
                  <Link as={ReachLink} to={'/frontend-mentor/junior/advice-generator-app'}>
                    <MenuItem>Advice Generator App</MenuItem>
                  </Link>
                </VStack>
                <VStack className="intermediate-challenges">
                  <Text align={'center'}>Intermediate</Text>
                </VStack>
                <VStack className="advanced-challenges">
                  <Text align={'center'}>Advanced</Text>
                </VStack>
                <VStack className="guru-challenges">
                  <Text align={'center'}>Guru</Text>
                </VStack>
              </HStack>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button}>Games</MenuButton>
            <MenuList>
              <Link as={ReachLink} to={'/games/wordle'}>
                <MenuItem>Wordle</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route
            path={'/frontend-mentor/newbie/results-summary-component'}
            element={<ResultsSummaryComponent />}
          />
          <Route
            path={'/frontend-mentor/junior/advice-generator-app'}
            element={<AdviceGeneratorApp />}
          />
          <Route path={'/games/wordle'} element={<Wordle />} />
        </Routes>
      </VStack>
    </>
  );
};

export default App;
