import { Link } from "react-router-dom";

function Home() {
  return (

    <Link to='/'>
      <div className="details">
        <p>
          <h1> Welcome to <strong>Rage☠︎Page!</strong></h1>
          <h5> There are many moments in life when someone (or something), really just rubs you the wrong way.  Really GRINDS your gears.

          Maybe it was the waiter who got your order wrong, maybe someone cut you off while driving, maybe your coworker keeps stealing your lunch, who knows!
          These moments you REALLY wish you could give them a piece of your mind.  HOWEVER.  This would not end well, this sort of confrontation will do more harm than good.
           </h5>

          <h5>Rage☠︎Page is a place to vent all your anger and frustration instead of vocalizing toxic energy into the world.  Have fun with it!!  Get off what's been on your chest.</h5>
        </p>

        <p>
          <h6>While this is meant to be a fun release, built up anger and frustration is never healthy.  Here are a few ideas to help if you are still having these emotions after using Rage☠︎Page.</h6>
        </p>

        <h6><ul>
          <li>
            Get some exercise
          </li>
          <li>
            Take some quiet time
          </li>
          <li>
            USE HUMOR TO RELEASE TENSION!
          </li>
        </ul></h6>
      </div>
    </Link>
  );
}

export default Home;
