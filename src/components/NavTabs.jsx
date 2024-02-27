import { Link, useLocation } from "react-router-dom";

// export default function NavTabs() {
//     const currentPage = useLocation().pathname;

//     return (
//         <ul className ="nav nav-tabs">
//             <li className="nav-item">
//                 <Link 
//                     to="/"
//                     className={currentPage === "/" ? "nav-link active" : "nav-link"}
//                 > Home </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                     to="/About"
//                     className={currentPage === "/About" ? "nav-link active" : "nav-link"}
//                 > About </Link>
//             </li>
//             <li className="nav-item">
//             <Link
//                     to="/Blog"
//                     className={currentPage === "/Blog" ? "nav-link active" : "nav-link"}
//                 > Blog </Link>
//             </li>
//             <li className="nav-item">
//             <Link
//                     to="/Contact"
//                     className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
//                 > Contact </Link>
//             </li>
//         </ul>
//     );
// }

export default function Nav({currentPage}) {
    const pages = ['Portfolio', 'Contact', 'Resume'];

    return (
        <nav>
            <ul className="flex-row">
                <li className={`mx-5 ${currentPage === '/' && 'navActive'}`} key='About'>
                    <Link to='/'>About</Link></li>
            {pages.map((Page) => (
                <li className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`} key={Page}>
                    <Link to={`/${Page}`}>{Page}</Link></li>
                ))}
            </ul>
        </nav>
    );
};