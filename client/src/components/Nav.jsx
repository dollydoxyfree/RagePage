import { Link } from 'react-router-dom'



function Nav() {

  return (
    <nav>
           <Link to='/'>
     <h4 className='navcontent'>🏠  <br/></h4>
      </Link><br/><br/>
      <Link to='/relationships'>
      <h4 className='navcontent'>💕  </h4>
      </Link><br />
       <Link to='/hospitality'>
      <h4 className='navcontent'> 🏫  </h4>
      </Link><br />
      <Link to='/road-rage'>
      <h4 className='navcontent'>  🚗</h4>
      </Link><br />
 </nav>
  )
}

export default Nav;