import React from 'react';
import Navbar from '../components/Navbar';
import Widgets from '../components/Widgets';

interface AdminLayoutProps {
  children: React.ReactNode;
  onToggleView: () => void;
  isAdmin: boolean;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  onToggleView,
  isAdmin,
}) => {
  return (
    <div className="min-h-screen bg-bodyColor text-designColor bg-opacity-95">
      <Navbar onToggleView={onToggleView} isAdmin={isAdmin} />
      <Widgets isAdmin={isAdmin} />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default AdminLayout;
