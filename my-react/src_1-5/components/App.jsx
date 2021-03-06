import React from 'react';

export class App extends React.Component {
  state = {
    counterValue: 3
  };

  componentDidMount() { // Nutze das anstatt constructor
    console.log('componentDidMount:')
    this.myInterval = setInterval(() => {
      // Modify state only with setState
      this.setState((state) => { // state über funktion setzen
        if (state.counterValue > 0) {
          return { counterValue: state.counterValue - 1 };
        } else {
          return { counterValue: 0 };
        }
      })
    }, 1000)

    // setInterval(() => {
    //   // Modify state only with setState
    //   this.setState({  // state direkt setzen
    //     counterValue: Math.max(0, this.state.counterValue -1),
    //   })
    // }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counterValue === 0) {
      return false;
    }
    return true;
  }

  render() {
    const { title, name, nameObj } = this.props;
    return <div>
            <div title={title}>Hallo {nameObj.prename} {nameObj.lastname} <strong>Countdown = {this.state.counterValue}</strong></div>
            <div>{this.props.children}</div>
            <div>{this.props.coolKid}</div>
           </div>
  }
}
