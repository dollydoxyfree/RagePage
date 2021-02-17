import { Route, Link } from 'react-router-dom'
import Relationships from '../components/Relationships'
import Hospitality from '../components/Hospitality'
import RoadRage from '../components/RoadRage'


function Home() {
  return (
    <div>
      <header>
        <h1 id="title1">WGMG</h1>
        <h3 id="title2">What GRINDS My Gears</h3>
      </header>

      <Route path="/relationships">
        <div>
          <Relationships />
        </div>
      </Route>
      <Route path='/hospitality'>
        <div>
          <Hospitality />
        </div>
      </Route>
      <Route path='/road-rage'>
        <div>
          <RoadRage />
        </div>
      </Route>
    </div>
  );
}

export default Home;