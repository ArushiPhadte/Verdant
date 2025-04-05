import React, { createContext, useContext, useState } from 'react';

const CommunityContext = createContext();

export const useCommunity = () => {
  return useContext(CommunityContext);
};

export const CommunityProvider = ({ children }) => {
  const [community, setCommunity] = useState('');

  return (
    <CommunityContext.Provider value={{ community, setCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
};
