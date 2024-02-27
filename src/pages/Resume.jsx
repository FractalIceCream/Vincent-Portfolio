import oldResume from '../assets/VincentRocoResume_FEB_2024.pdf';

export default function Resume() {
    return (
      <section className="my-5">
        <div className="my-2">
        <p>
          Download my <a href={oldResume}>resume</a>
          </p>
          <h2>Full-Stack Proficiencies</h2>
          <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
          </ul>
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </section>
    );
  };
  
  