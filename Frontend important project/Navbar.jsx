import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const active = ({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-slate-700';
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">YourName</Link>
        <div className="space-x-4">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/projects" className={active}>Projects</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
