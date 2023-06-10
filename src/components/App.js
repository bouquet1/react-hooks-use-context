import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
//import the provider
import { UserProvider } from "../context/user";
import user from "../data";

function App() {
  const [theme, setTheme] = useState("dark");
  //const [user, setUser] = useState(null); will be deleted
  return (
    <main className={theme}>
      {/*we'll wrap the comp that need access to context data in the provider */}
      <UserProvider>
        <Header
          theme={theme}
          setTheme={setTheme}
          // user={user} setUser={setUser} the user prop removed, since we'll be accessing that data via context instead.
        />
        <Profile
          theme={theme}
          // user={user}
        />
      </UserProvider>
    </main>
  );
}

export default App;
