// pages/projects/[id]/page.js

import { notFound } from 'next/navigation';
import { projects } from '../../components/data'; // Adjust the import path as needed
import ProjectClient from '../../components/ProjectClient';

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

const ProjectPage = ({ params }) => {
    const project = projects.find((project) => project.id === params.id);

    if (!project) {
        notFound();
        return null;
    }

    return (
        <ProjectClient project={project} projects={projects} />
    );
};

export default ProjectPage;
