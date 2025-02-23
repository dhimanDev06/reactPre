import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mt-2">
            <Link to={`/user/${user.id}`} className="text-blue-500 underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
