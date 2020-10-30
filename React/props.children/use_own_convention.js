function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

function Contacts() {
  return (
    <h1>Quoc Bao Nguyen</h1>
  )
}

function Chat() {
  return (
    <h1>Reus Nguyen</h1>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);