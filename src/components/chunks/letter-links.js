export default class LetterLinks {
  
  render() {
    const {letters} = this.props;
    const lastIndex = letters.length - 1;
    return (
      <div id="letterLinks" className="person center">
        {letters.map((letter, index) => <Letter letter={letter} isLast={index == lastIndex} key={index} />)}
      </div>
    );
  }
  
}

class Letter {
  render() {
    const {letter, isLast} = this.props;
    return (
      <span>
        <a href={`#${letter}`}>{letter}</a>{isLast ? '' : ' - '}
      </span>
    )
  }
}
