import React, { useEffect, useState } from 'react';

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="flex max-w-2xl mx-auto border border-gray-300 shadow-lg rounded-lg p-4 mt-10 bg-pink-200">
      {/* Image Section */}
      <div className="w-1/3 flex justify-center items-center ">
        <img
          className="w-24 h-24 rounded-full border"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </div>
      {/* User Info Section */}
      <div className="w-2/3 pl-4">
        <h1 className="text-lg font-bold">{`${user.name.first} ${user.name.last}`}</h1>
        <p className="text-gray-600">Gender: {user.gender}</p>
        <p className="text-gray-600">Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
