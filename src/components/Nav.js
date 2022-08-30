import { Link } from "react-router-dom";
import { LeaderBoardUrl, NewQuestionUrl } from "../constants/path";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={LeaderBoardUrl}>Leader board</Link>
        </li>
        <li>
          <Link to={NewQuestionUrl}>New</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
