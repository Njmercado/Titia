'use client'

import { notFound } from "next/navigation"
import { PROJECTS } from "@/constants/projects.constant";
import { ProjectView } from "@/components";

export interface ProjectProviderProps {
  name: string;
}

export default function ProjectProvider({
  name
}: ProjectProviderProps) {

  const getProject = () => {
    const projectName = name.toUpperCase()
    const gottenProject = PROJECTS.filter(project =>
      project.title.toUpperCase() === projectName
    )[0]

    return gottenProject;
  }

  const project = getProject();

  if (!project) {
    notFound();
  }

  return (
    <ProjectView
      title={project?.title ?? ''}
      description={project?.description}
      images={project?.images}
      techs={project?.techs}
      technicalDescription={project?.technicalDescription}
      link={project?.link}
      history={project?.history}
    />
  )
}