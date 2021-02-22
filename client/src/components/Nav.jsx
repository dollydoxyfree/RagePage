import { Link } from 'react-router-dom'



function Nav() {

  return (
    <nav>
           <Link to='/'>
     <h4 className='navcontent'>HOME <br/></h4>
      </Link>
      <Link to='/relationships'>
      <h4 className='navcontent'>RELATIONSHIPS </h4>
      </Link>
       <Link to='/hospitality'>
      <h4 className='navcontent'>BUSINESS/HOSPITALITY </h4>
      </Link>
      <Link to='/road-rage'>
      <h4 className='navcontent'>ROADRAGE</h4>
      </Link>
 </nav>
  )
}

export default Nav;