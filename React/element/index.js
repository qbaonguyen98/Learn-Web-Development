function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

// “root” DOM node: everything inside it will be managed by React DOM.
// Applications built with just React usually have a single root DOM node

// Once you create an element, you can’t change its children or attributes

// In practice, most React apps only call ReactDOM.render() once.

// React DOM compares the element and its children to the previous one, 
// and only applies the DOM updates necessary to bring the DOM to the desired state.



