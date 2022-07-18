import { Link } from "react-router-dom";

export default function UserCard({ id, poster, title, profession }) {
  return (
    <div className="card">
      <Link to={"/user/" + id}>
        <img src={poster} alt="img" />
        <div className={"user-info"}>
          <p className="bold">{title}</p>
          <span>{profession}</span>
        </div>
      </Link>
    </div>
  );
}
