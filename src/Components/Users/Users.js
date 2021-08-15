import React from "react";
import "./Users.css";

const Users = () => {
  const user = [
    { name: "Ahmed", age: 35, occupation: "He is a Mechanical engineer" },
    { name: "Zayd", age: 20, occupation: "He is a Student" },
    { name: "Noor", age: 25, occupation: "She is a Doctor" },
    { name: "Jad", age: 30, occupation: "He is an officer" },
  ];
  const handleClick = (user) => {
    alert("Hello " + user.name);
  };
  return (
    <>
      <div>
        <h2 className="title">List of users</h2>
        <div className="users">
          {user.map((user, i) => (
            <div className="values" key={i} onClick={() => handleClick(user)}>
              <h2>{user.name}</h2>
              <h3>{user.age}</h3>
              <p>{user.occupation}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <h2 className="title">List of users where age is greater then 25</h2>
        <div className="users">
          {user
            .filter((el) => el.age > 25)
            .map((user, i) => (
              <div className="values" key={i}>
                <h2>{user.name}</h2>
                <h3>{user.age}</h3>
                <p>{user.occupation}</p>
              </div>
            ))}
        </div>
      </div>
      <hr />
      <div>
        <h2 className="title">Sum of ages</h2>
        <div className="sum">
          {user.reduce((acc, user) => acc + user.age, 0)}
        </div>
      </div>
    </>
  );
};

export default Users;
