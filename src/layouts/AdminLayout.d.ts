import React from 'react';
interface AdminLayoutProps {
    children: React.ReactNode;
    onToggleView: () => void;
    isAdmin: boolean;
}
declare const AdminLayout: React.FC<AdminLayoutProps>;
export default AdminLayout;
