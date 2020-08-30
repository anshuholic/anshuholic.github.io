import React from 'react';
import img1 from '../anshumanpic.jpg';

import Common from './Common';

const Home = () => {
      return (
      <>
        <Common name="I am" imgsrc={img1} visit="/about" btname="Have a look" />
      </>

    );
  };


export default Home;
