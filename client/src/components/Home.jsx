import {Link} from 'react-router-dom'


function Home() {
  return (


    <div className='about'>

      <div className='giphy'>
      <Link to='/' exact>
        <iframe src="https://giphy.com/embed/SiItwB3nrAZuRKl3vP" />
 
        </Link >
        </div>
  
      <div className='resources-container'>
        <div className='resources'>
        
          <div>
            Scroll stuff goes here.
          </div>

          </div>
      </div>
</div>
  )
}

export default Home;