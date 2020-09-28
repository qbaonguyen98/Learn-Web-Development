- Do NOT modify state directly --> ONLY use setState method

- props and states maybe updated ASYNC --> should NOT use to calculate next state --> If necessary, use the second form of setState method:

    this.setState((state, props) => ({
      counter: state.counter + props.increment
  })); 

- A component can pass its state down as props