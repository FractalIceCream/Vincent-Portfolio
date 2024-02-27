
export default function Project({ project }) {
  const { name, repo, link, description, imgSrc } = project;

  return (
    <div className="project" key={name}>
      <img
        src={imgSrc}
        alt={name}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{name}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
