import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="about">
      <div className="giphy">
        <Link to="/" exact>
          <div>
            <iframe
              src="https://giphy.com/embed/W4p9FR45765il3VVYj"
              width="100%"
              height="100%"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </Link>
      </div>

      <div className="resources-container">
        <div className="resources">
          <div>
            A variety of resources will scroll here.
            
              <img
                src="https://images.unsplash.com/photo-1531425300797-d5dc8b021c84?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5ncnklMjBjYXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="angry cat" 
              />
            
            <img
              src="https://images.unsplash.com/photo-1526458184224-8391d3d45387?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5ncnklMjBjYXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="angry cat"
            />
            <img
              src="https://images.unsplash.com/photo-1496285259194-7ede00d50224?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YW5ncnklMjBjYXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="angry cat"
            />
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
