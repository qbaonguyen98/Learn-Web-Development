import { Link, NavLink, withRouter } from 'react-router-dom'

function Navbar(props) {
  console.log(props);

  // setTimeout(() => {
  //   props.history.push('/about');
  // }, 3000);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          {/* 
            NavLink --> have "active" class when active, Link does NOT, see index.css
          */}
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)   // withRouter is a high-order component (hoc) --> give extra functionalities, features to the component passed (Navbar)