- To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

- When you call setState in a component, React automatically updates the child components inside of it too.

- In React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.

- Controlled Components: no maintain state, receive value from parent, inform the parent when have events

- In React, Function Components are a simpler way to write components that only contain a render method and don’t have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. 

- An input form element whose value is controlled by React in this way is called a “controlled component”.

- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

- There should be a single “source of truth” for any data that changes in a React application. 

- 