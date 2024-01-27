import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
function Navview()
{
    const [text] = useTypewriter({
        words: ['Welcome to', 'DynamicFlow'],
        loop: true, // Loop the animation
        // Adjust type speed as needed
      });
    return(
        <div>
       <nav className="navbar navbar-expand-lg navbar-light" id="nav">
  <div className="container-fluid">
        <div className="ty">
          <span style={{ color: "antiquewhite" }}>{text}</span>
          <Cursor cursorColor={'aquamarine'} />
        </div>
    </div>
 
</nav>


    </div>
    );
}
export default Navview;