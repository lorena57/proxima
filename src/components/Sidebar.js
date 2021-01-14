import React from 'react';
// import contact from '../assets/icons/contact.svg';
import github from '../assets/icons/github.svg';
import download from '../assets/icons/download.svg';
import location from '../assets/icons/location.svg';
import resume_test from '../assets/resume/resume_test.pdf'

const Sidebar = () => {

    const handleEmailMe = () => {
        window.open("mailto:lorena@proxima.dev")
    }

    return (
        <div className='sidebar'>
            <img src="" alt="" className='sidebar_image'/>
            <div className="sidebar_name">Lorena <span>Cardenas</span></div>
            <div className="sidebar_item sidebar_title">Software Developer</div>
            <a href={resume_test} download='resume_test.pdf'>
                <div className="sidebar_image sidebar_resume">
                    <img src={download} alt="resume" className='sidebar_icon mr-2'/>Download Resume
                </div>
            </a>
            <figure className='sidebar_social_icons my-2'>
                {/* <a href=""><img src={contact} alt="Twitter" className='sidebar_icon mr-3' /></a>  */}
                {/* <a href=""><img src={github} alt="Insta" className='sidebar_icon' /></a> */}
            </figure>
            <div className="sidebar_contact">
                <div className="sidebar_item sidebar_github">
                    <a href="#"><img src={github} alt="github" className='sidebar_icon mr-2'/>github</a>
                </div>
                <div className="sidebar_location">
                    <img src={location} alt="" className='sidebar_icon mr-2'/>Portland, Oregon
                </div>
                <div className='sidebar_item'>lorena@proxima.dev</div>
                <div className='sidebar_item'>818-468-5574</div>
            </div>
            <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email me</div>
        </div>
    )
}

export default Sidebar;
