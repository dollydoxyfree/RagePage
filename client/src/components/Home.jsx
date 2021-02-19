import {Link} from 'react-router-dom'


function Home() {
  return (


    <div className='about'>

      <div className='giphy'>
      <Link to='/' exact>
      <div><iframe src="https://giphy.com/embed/W4p9FR45765il3VVYj" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
 
        </Link >
        </div>
  
      <div className='resources-container'>
        <div className='resources'>
        
          <div>
            A variety of resources will scroll here.
          </div>

          </div>
      </div>
</div>
  )
}

export default Home;