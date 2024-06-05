import React, { createContext, useEffect, useState } from 'react';
import KeycloakService from '@/module/keycloak';
import { getKeycloakAccount, getMemberInfoByUserId } from '@/api/member';

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const authService = new KeycloakService();
  const login = async () => {
    authService.login();
    setUser(await initUser());
  }
  const logout = async () => {
    await authService.logout();
    setUser(null);
  }
  const initUser = async () => {
    if(!authService || !authService.isAuthenticated()) return null
    const keycloakUserId = (await getKeycloakAccount()) ? (await getKeycloakAccount()).data.id : null;
    if(!keycloakUserId) return null;
    return await getMemberInfoByUserId(keycloakUserId) ? (await getMemberInfoByUserId(keycloakUserId)).data : null;
  }
  useEffect(() => {
    const fetchUser = async () => {
      const user = await initUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, authService }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };