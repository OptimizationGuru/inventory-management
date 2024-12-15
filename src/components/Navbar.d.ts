import React from 'react';
interface NavbarProps {
    onToggleView: () => void;
    isAdmin: boolean;
}
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
