import { useState } from "react";
import Project from "../components/Project";
import BookSeekers from '../assets/images/projects/bookseekers.PNG';
import DudeWheresMyBrew from '../assets/images/projects/dudebrew.png';
import ParcsNRecs from '../assets/images/projects/parksrec.PNG';
import Employees4U from '../assets/images/projects/employeedb.PNG';
import Weather4Cast from '../assets/images/projects/weatherforecast.PNG';
import DevBlogger from '../assets/images/projects/devblogger.PNG';

export default function Portfolio() {
    const [projects] = useState([
        {
            name: 'BookSeekers',
            description: 'RestAPI refactor to MERN',
            link: 'https://bookseekers.onrender.com/',
            repo: 'https://github.com/FractalIceCream/BookSeekers',
            imgSrc: BookSeekers
        },
        {
            name: 'DudeWheresMyBrew',
            description: 'Group Project #1 3rd-party API',
            link: 'https://fractalicecream.github.io/DudeWheresMyBrew/',
            repo: 'https://github.com/FractalIceCream/DudeWheresMyBrew',
            imgSrc: DudeWheresMyBrew
        },
        {
            name: 'ParcsNRecs',
            description: 'Group Project #2 MVC-MySQL',
            link: 'https://whispering-beyond-13977-ec09eded4ce5.herokuapp.com/',
            repo: 'https://github.com/FractalIceCream/ParcsNRecs',
            imgSrc: ParcsNRecs
        },
        {
            name: 'Employees4U',
            description: 'MySQL',
            link: 'https://github.com/FractalIceCream/Employees4u',
            repo: 'https://github.com/FractalIceCream/Employees4u',
            imgSrc: Employees4U
        },
        {
            name: 'Weather4Cast',
            description: '3rd-party API',
            link: 'https://fractalicecream.github.io/Weather4Cast/',
            repo: 'https://github.com/FractalIceCream/Weather4Cast',
            imgSrc: Weather4Cast
        },
        {
            name: 'DevBlogger',
            description: 'CMS Blogger with MVC',
            link: 'https://whispering-peak-44380-76c2238a9bc5.herokuapp.com/',
            repo: 'https://github.com/FractalIceCream/DevBlogger',
            imgSrc: DevBlogger
            
        },
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, id) => (
                    <Project
                        project={project}
                        key={project.name} />
                ))}
            </div>
        </div>
    );
};