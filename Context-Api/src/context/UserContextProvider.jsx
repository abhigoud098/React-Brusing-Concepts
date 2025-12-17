import { useState } from "react";
import UserContext from "./UserContext";

//Here this is a person who provide a data at pass in itself as a trite component children
function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
      {/* Everything inside UserContextProvider ... UserContextProvider — in this case App  — becomes the children prop So here, children literally represents whatever you wrap inside your provider. */}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
