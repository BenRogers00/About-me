import { Link } from "react-router-dom";
import '../styling/nav.css';

export default function Nav() {
  return (
    <nav>
        <ul>
          <li><Link to="/"><div className='name'><strong style={{fontSize: '1em'}}>Ben.</strong></div></Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  );
}
