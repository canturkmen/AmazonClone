import React, { useCallback, useState } from "react";

export const UserContext = React.createContext({
  user: {},
  login: (user) => {},
});

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const loginHandler = useCallback((newUser) => {
    setUser(newUser);
  }, []);

  const userContext = {
    user: user,
    login: loginHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};
