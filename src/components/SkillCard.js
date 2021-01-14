import React from 'react';


const SkillCard = ({ skill: {icon, title, about} } ) => 

    <div className="col-lg-6">
        <div className="skill_card">
            <img src={icon} alt="coding icon" className="skill_card_icon"/>
                <div className="skill_card_body">
                    <h6 className="skill_card_title">{title}</h6>
                    <p className="skill_card_content">{about}</p>
                </div>
        </div>
    </div>


export default SkillCard;

