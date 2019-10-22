import React from 'react';
import ReactDom from 'react-dom';
import './index.style.css';
import './index.style.scss';
import baloonImage from './hot-air-balloon.svg';
import SVG from 'react-inlinesvg';

const rootElement = document.getElementById('root');

ReactDom.render(
  <div>
    Hello World Godfrey!
    <SVG src={baloonImage} />
  </div>,
  rootElement
);
