import react from '../../assets/icons/react.svg';
import js from '../../assets/icons/js.svg';
import html from '../../assets/icons/html.svg';
import sql from '../../assets/icons/SQL.jpg';
import post from '../../assets/icons/postgres.png';
import api from '../../assets/icons/api.jpeg';
import redux from '../../assets/icons/redux.png';
import ruby_on_rails from '../../assets/icons/ruby_on_rails.svg';
import bs from '../../assets/icons/bs.png';
import sinatra from '../../assets/icons/sinatra.jpeg';
import ruby from '../../assets/icons/ruby.svg';

const Languages = [
    {
        icon: js,
        name: "JavaScript"
    },
    {
        icon: html,
        name: "HTML"
    },
    {
        icon: ruby,
        name: "Ruby"
    },
    {
        icon: redux,
        name: "Redux"
    },
    {
        icon: api,
        name: "RESTful API"
    }
]

const FrameWorks = [
    {
        icon: ruby_on_rails,
        name: 'Ruby on Rails'
    },
    {
        icon: react,
        name: "React"
    },
    {
        icon: bs,
        name: "Bootstrap"
    },
        {
        icon: sinatra,
        name: "Sinatra"
    }
]

const DataBases = [
{   icon: sql,
    name: "SQL"
},
{   icon: post,
    name: "PostgreSQL"
},


]

export {Languages, FrameWorks, DataBases}