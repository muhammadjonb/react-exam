import { Link } from "react-router-dom"
import "./NotFound.scss"

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h3>Sorry, the page you visited does not exist.</h3>
      <button>
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
}

export default NotFound