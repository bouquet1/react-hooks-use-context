import React from "react";

//create the context object for our user data.
const UserContext = React.createContext();

//create a provider component
function UserProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  //setting up the context value to be stateful
  const [user, setUser] = useState(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };

/*
I test the UserContext in Profile comp with console.log(user) it was null. Then I did code along, change the value of UserContext to user data below. cosole log gave me the oject of currentUser.

function UserProvider({ children }) {
  const currentUser = {
    name: "Duane",
    interests: ["Coding", "Biking", "Words ending in 'ing'"],
  };
  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
}

*/
