import React from 'react'
import Container from './layout/Container';
import LeftSideBar from './layout/LeftSideBar';
import Content from './layout/Content';
import RightSideBar from './layout/RightSideBar';

export const App = () => {
  return (
    <Container>
      <LeftSideBar/>
      <Content/>
      <RightSideBar/>
    </Container>
   
  )
};

export default App;
