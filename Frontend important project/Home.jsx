import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold">Hi — I'm Your Name</h1>
      <p className="mt-4 text-lg text-slate-600">I build web applications and delightful user experiences.</p>
      <div className="mt-6">
        <Link to="/projects" className="px-4 py-2 bg-blue-600 text-white rounded">View Projects</Link>
      </div>
    </section>
  );
}
