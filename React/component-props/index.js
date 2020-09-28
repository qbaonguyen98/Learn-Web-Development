// Conceptually, components are like JavaScript functions. 
// They accept arbitrary inputs (called “props”) and return 
// React elements describing what should appear on the screen.

// function component
function Welcome1(props) {
  return <h1>Hello, {props.name}</h1>;
}

// class component
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// elements can also represent user-defined components
const element = <Welcome1 name="Sara" />;     // name is a prop

ReactDOM.render(
  element,
  document.getElementById('root')
);

// All React components must act like pure functions (not change the inputs)
// with respect to their props.

// --> Props are READ-ONLY