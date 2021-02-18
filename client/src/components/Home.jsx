import {Link} from 'react-router-dom'


function Home() {
  return (


    <div className='about'>
      <Link to='/' exact>
        <iframe src="https://giphy.com/embed/RjxGkhKMl4ZWTcrI4b" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </Link>
      
      <div className='resources'>
        <h4>Mindfullness now I will keep typing just to fill the div and see if the scroll will truley scroll or if i need to try again</h4><br/>
        <h4>and now here is some more text just for great measure...</h4>
      </div>
      </div>
  )
}

export default Home;