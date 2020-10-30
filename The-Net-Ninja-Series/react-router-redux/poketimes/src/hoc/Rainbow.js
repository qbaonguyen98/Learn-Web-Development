function Rainbow(WrappedComponent) {
  const colors = ['red', 'green', 'blue', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * 3)];
  const className = randomColor + '-text';

  return function(props) {
    return (
      <div className={className}>
        <WrappedComponent { ...props }/>
      </div>
    )
  }
}

export default Rainbow    // this hoc will colorize the text of wrapped component 