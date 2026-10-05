import React from 'react';
import Projects from '../components/Projects';

export default function ProjectsPage({ t, onSelectProject }) {
  return (
    <main>
      <Projects t={t} onSelectProject={onSelectProject} />
    </main>
  );
}
