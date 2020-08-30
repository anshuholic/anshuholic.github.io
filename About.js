import React from 'react';
import {NavLink} from 'react-router-dom';
import img2 from '../anshumanpic.jpg';
import Common from './Common';
import aws from '../aws.svg';
import css from '../css.svg';
import html from '../html5.svg';
import java from '../java.svg';
import javascript from '../javascript.svg';
import mysql from '../mysql.svg';
import node from '../nodejs.svg';
import react from '../react.svg';
import c from '../c.svg';






const About = () => {
  return (
    <>
      <Common name="About" imgsrc={img2} visit="/contact" btname="Contact Now" />

          
      <h1 className="text-center container">Skills</h1>
      
      <div className="row">
        <div className="column">
          <img src={html} alt="HTML5" width="100" height="120" />
        </div>
        <div className="column">
          <img src={css} alt="CSS" width="100" height="120" />
        </div>
        <div className="column">
          <img src={javascript} alt="JS" width="100" height="120" />
        </div>
        <div className="column">
          <img src={react} alt="React" width="100" height="120" />
        </div>
        <div className="column">
          <img src={java} alt="java" width="100" height="120" />
        </div>
        <div className="column">
          <img src={node} alt="NodeJS" width="100" height="120" />
        </div>
        <div className="column">
          <img src={aws} alt="AWS" width="100" height="120" />
        </div>
        <div className="column">
          <img src={mysql} alt="MySQl" width="100" height="120" />
        </div>
        <div className="column">
          <img src={c} alt="C" width="100" height="120" />
        </div>
      </div>
      {}


    </>

  );
};


export default About;
