class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick() {    
    this.setState(state => ({      
      isToggleOn: !state.isToggleOn    
    }));  
  }

  render() {
    return (
      // should use arrow function to avoid 'this' error
      // BUT this way has performance problem because
      // a different callback is created each time the 'Toggle' render
      
      //  --> check out the "better.js" file
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);