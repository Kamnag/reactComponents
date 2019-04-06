import React, { Component, createContext } from 'react';

// first we will make a new context
const MyContext = createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    text: 'Temp',
    no: 50,
    bool: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        incrValue: () => this.setState({
          no: this.state.no + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>No: {context.state.no}</p>
              <p>Text: {context.state.text}</p>
              <button onClick={context.incrValue}>Increment</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>Test app</p>
          <Person />
        </div>
      </MyProvider>
    );
  }
}


export default App;
