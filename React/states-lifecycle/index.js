// Clock component
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,       // not good, we need <Clock />
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);

// USE STATES
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  // runs after the component output
  // has been rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // bỏ method này đi thì app vẫn chạy --> có nó để làm gì ?
  // chạy khi component bị xóa khỏi DOM
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// a component can pass its states as props