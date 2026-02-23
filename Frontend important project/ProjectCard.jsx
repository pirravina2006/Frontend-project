import React from 'react';

export default function ProjectCard({p}){
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{p.title}</h3>
      <p className="text-sm mt-2">{p.desc}</p>
      <div className="mt-3 space-x-2">
        {p.tech?.map(t=> <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>)}
      </div>
      <div className="mt-3">
        <a href={p.live} target="_blank" rel="noreferrer" className="mr-2">Live</a>
        <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>
      </div>
    </div>
  );
}
