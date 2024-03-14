import selfie from '../assets/images/selfie.JPG';

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img alt='self portrait' src={selfie} style={{width: "500px"}}/>
            <p>
                Hello, my name is Vincent and welcome. I am an up and coming software developer finishing up a BS in Computer Science and a bootcamp for full-stack web development. 

                I've previously work with a background in Chemical Engineering, working in plant facilities. My enthusiasm for computers and technology lead me working with it in some fashion for my work. Troubleshooting DCS systems, implementing graphic UI/UX for board operators, and producing logic and programming for plant controls. 

                While I enjoyed my time that era of my life, understanding what made me enjoy my work back then put me here now and continue to expand my knowledge base for software development and computer technology.
            </p>
        </div>

        // <section className="my-5">
        //     <div className="my-2">
        //         <div className="profil-img my-5">
        //             <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        //         </div>
        //         <p> aksjdhaklsdjhgajk </p>
        //         <p> asjdhfksajdhflkjsajdj </p>
        //     </div>
        // </section>
    );
};

export default About;