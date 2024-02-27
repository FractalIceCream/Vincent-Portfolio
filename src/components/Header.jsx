import coverImage from '../assets/images/portfolio-background.jpg';

export default function Header(props) {
    return (
        <header className="flex-row space-between px-1">
            <h1>Vincent's Portfolio</h1>
            <img src={coverImage} alt="tech background"></img>
            {props.children}
        </header>
    );
}