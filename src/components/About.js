import React from 'react';
import SkillCard from './SkillCard';
import skills from './data/about_data'


const About = () => {

    return (
        <div className="about">
            <h6 className="about_intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about_container">
                <h6 className="about_heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <SkillCard skill={skill} key={skill.title}/>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;
