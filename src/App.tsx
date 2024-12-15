import React, { useState } from 'react';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import useFetchInventory from './hooks/useFetchInventory';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const toggleView = () => setIsAdmin(!isAdmin);

  useFetchInventory();

  return isAdmin ? (
    <AdminPage onToggleView={toggleView} isAdmin={isAdmin} />
  ) : (
    <UserPage onToggleView={toggleView} isAdmin={isAdmin} />
  );
};

export default App;
