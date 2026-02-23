import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';
import ProjectCard from '../components/ProjectCard';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  useEffect(()=>{ fetchProjects().then(setProjects).catch(()=>{}); }, []);
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
