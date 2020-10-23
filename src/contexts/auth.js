import React, { createContext, useState }  from 'react';
import api from '../configs/apiConfig';

const AuthContext = createContext({ signed: false, user: {}});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function signIn(email, password) {
    try {
      const response = await api.post('/auth/login', { email, password })

      setUser(response.data.user);
    } catch (err) {
      alert("Deu pau!")
    }
  } 
  
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;