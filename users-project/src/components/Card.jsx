import React, { useEffect, useState } from "react";
import { Container, Img } from "./CardStyle";

const Card = () => {
  const [users, setUsers] = useState([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com/users";
  const getUsers = () => {
    fetch(BASE_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container className="Card w-25">
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div>
              <Img
                className=""
                src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`}
                alt=""
              />
              <h1 key={user.id}>{user.name}</h1>
              <p key={user.id}>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Card;
