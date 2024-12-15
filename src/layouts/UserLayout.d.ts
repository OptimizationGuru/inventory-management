import React from 'react';
interface UserLayoutProps {
    children: React.ReactNode;
    onToggleView: () => void;
    isAdmin: boolean;
}
declare const UserLayout: React.FC<UserLayoutProps>;
export default UserLayout;
