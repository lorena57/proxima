import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';


const Projects = () => {

    const [projects, setProjects] = useState(data_projects)

    const [active, setActive] = useState("All")

    const handleFilterCategory = (name) => {
       const new_array = data_projects.filter(project => project.category.includes(name))
       setProjects(new_array)
       setActive(name)
    }

    return (
        <div className="container projects">
            <div className="projects_navbar">
                <div className={active === 'All' && 'projects_navbar_active'} onClick={
                    () => {
                    setProjects(data_projects)
                    setActive("All")
                    }
                }>All</div>
                <div className={active === 'React' && 'projects_navbar_active'} onClick={() => handleFilterCategory('React')}>React</div>
                <div className={active === 'Rails' && 'projects_navbar_active'} onClick={() => handleFilterCategory('Rails')}>Rails</div>
                <div className={active === 'JavaScript' && 'projects_navbar_active'} onClick={() => handleFilterCategory('JavaScript')}>JavaScript</div>
                <div className={active === 'SQL' && 'projects_navbar_active'} onClick={() => handleFilterCategory('SQL')}>SQL</div>
            </div>
            <div className="row">
                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />

                    )
                }
            </div>
        </div>
    );
}

export default Projects;
