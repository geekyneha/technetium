import { useEffect, useState } from 'react';
import './Card.css';

export default function Card() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getUsers = async () => {
    const response = await fetch('https://reqres.in/api/users/');
    const data = await response.json();
    const usr = await data.data;
    setUsers(usr);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setCurrentUser(users[currentIndex]);
  }, [currentIndex, users]);

  const handleNextUser = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="card-container">
      <div className="card">
        {currentUser ? (
          <div className="details">
            <div className="container">
              <img
                className="img"
                src={currentUser.avatar}
                width={100}
                height={100}
                alt=""
              />
              <p className="user-id"> Id : {currentUser.id}</p>
              <p className="email">Email : {currentUser.email}</p>
              <p className="fname">First Name : {currentUser.first_name}</p>
              <p className="lname">Last Name : {currentUser.last_name}</p>
            </div>
            
          </div>
        ) : (
          <p>Loading...</p>
        )}
       
      </div>
      <button onClick={handleNextUser}>
              {currentIndex === users.length - 1 ? 'Start Over' : 'Next User'}
      </button>
    </div>
  );
}
