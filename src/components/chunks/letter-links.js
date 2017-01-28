import React from 'react';

const LetterLinks = ({letters}) => {
  const lastIndex = letters.length - 1;
  return (
    <div id="letterIndexArea" className="pure-u-1 center">
      <ul id="letterLinksList">
        {letters.map((letter, index) => <Letter letter={letter} isLast={index == lastIndex} key={index} />)}
      </ul>
    </div>
  );
};

export default LetterLinks;

const Letter = ({letter, isLast}) => {
  return (
    <li className="letter-link">
      <a href={`#${letter}`}>{letter}</a>{isLast ? '' : ' - '}
    </li>
  )
};
