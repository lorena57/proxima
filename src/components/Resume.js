import React from 'react';
import Bar from '../components/Bar';
import { Languages, FrameWorks, DataBases } from './data/resume_data';

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume_card">
          <h4 className="resume_card_heading">Education:</h4>
          <div className="resume_card_body">
            <h5 className="resume_card_title">
              Flatiron School - Software Engineering
            </h5>
            {/* <p className="resume_card_name">Flatiron</p> */}
            {/* <p className="resume_card_details">Lorem ipsum dolor sit amet.</p> */}
          </div>
        </div>
        {/* <div className="col-lg-6 resume_card">
          <h4 className="resume_card_heading">Experience</h4>
          <div className="resume_card_body">
            <h5 className="resume_card_title">Don't know</h5>
            <p className="resume_card_name">Flatiron</p>
            <p className="resume_card_details">Lorem ipsum dolor sit amet.</p>
          </div>
        </div> */}
      </div>

      <div className="row">
        <div className="col-lg-4 resume_languages">
          <h5 className="resume_language_heading">Languages</h5>
          <div className="resume_language_body mt-3">
            {Languages.map((language) => (
              <Bar value={language} key={language.name} />
            ))}
          </div>
        </div>
        <div className="col-lg-4 resume_languages">
          <h5 className="resume_language_heading">Frameworks</h5>
          <div className="resume_language_body mt-3">
            {FrameWorks.map((tool) => (
              <Bar value={tool} key={tool.name} />
            ))}
          </div>
        </div>
        <div className="col-lg-4 resume_languages">
          <h5 className="resume_language_heading">DB Management</h5>
          <div className="resume_language_body mt-3">
            {DataBases.map((database) => (
              <Bar value={database} key={database.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
