import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

/*
  // YOU CAN USE A CONST INTO THE USE STATE
  const tempUser: User = {
    uid:'XCW345',
    name: 'asd'
  }
*/

const User = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Dave",
    });
  };

  return (
    <div className="mb-5">
      <h3>User: useState</h3>

      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>

      {!user ? (
        <pre className="mt-4"> There is not such user here, it should be in other part tho!</pre>
      ) : (
        <pre className="mt-4"> {JSON.stringify(user)} </pre>
      )}
    </div>
  );
};

export default User;
