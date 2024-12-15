import React from 'react';
import Navbar from '../components/Navbar';
import Widgets from '../components/Widgets';

interface UserLayoutProps {
  children: React.ReactNode;
  onToggleView: () => void;
  isAdmin: boolean;
}

const UserLayout: React.FC<UserLayoutProps> = ({
  children,
  onToggleView,
  isAdmin,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onToggleView={onToggleView} isAdmin={isAdmin} />
      <Widgets isAdmin={isAdmin} />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default UserLayout;
