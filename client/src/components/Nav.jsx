import { Link } from 'react-router-dom'



function Nav() {

  return (
    <nav>
           <Link to='/'>
     <h4>Home  |<br/></h4>
      </Link><br/><br/>
      <Link to='/relationships'>
      <h4>| Relationships | </h4>
      </Link><br />
       <Link to='/hospitality'>
      <h4>| Hospitality |</h4>
      </Link><br />
      <Link to='/road-rage'>
      <h4>| Road Rage</h4>
      </Link><br />
 </nav>
  )
}

export default Nav;