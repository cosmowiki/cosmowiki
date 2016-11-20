import React from 'react';

const LetterLinks = ({letters}) => {
  const lastIndex = letters.length - 1;
  return (
    <div id="letterLinks" className="person center">
      {letters.map((letter, index) => <Letter letter={letter} isLast={index == lastIndex} key={index} />)}
    </div>
  );
};

export default LetterLinks;

const Letter = ({letter, isLast}) => {
  return (
    <span>
      <a href={`#${letter}`}>{letter}</a>{isLast ? '' : ' - '}
    </span>
  )
};
