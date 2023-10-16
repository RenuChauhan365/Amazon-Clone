import { useState, useContext, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });


  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({

         user: parseData.user,
         token: parseData.token });
    }
  }, []);




  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};


const isAuthenticated = () => {
  const data = localStorage.getItem("auth");
  if (data) {
    const parseData = JSON.parse(data);
    return !!parseData.token; // Returns true if token exists, else false
  }
  return false;
};


//custom hook
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider ,isAuthenticated };
