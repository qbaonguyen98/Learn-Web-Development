- It’s strongly recommended that you assign proper keys whenever you build dynamic lists

- Keys tell React about the identity of each component which allows React to maintain state between re-renders. If a component’s key changes, the component will be destroyed and re-created with a new state.

- Even though key may look like it belongs in props, key cannot be referenced using this.props.key. React automatically uses key to decide which components to update. A component cannot inquire about its key.

- If no key is specified, React will present a warning and use the array index as a key by default. 

- Keys do not need to be globally unique; they only need to be unique between components and their siblings.
