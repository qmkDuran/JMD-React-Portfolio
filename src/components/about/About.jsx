import "./about.css"

const About = () => {
    return (
    <div className="a">
        <div className="a-texts">
            <h1 className="a-title">About Me</h1>
                <p className="a-desc">
                My name is Jose Michael Duran but I go by Michael Duran.  I'm a Front End Developer based out of Louisville, Ky. 
                I describe myself as a passionate developer who loves coding and open source projects. 
                On my free time I hang out with my two year old son and my wonderful wife. 
                My hobbies are; spending time with family, gaming with friends and building coding projects that challenge me.
                </p>
            <h1 className="a-titletwo">Skills</h1>
                <p className="a-desc">
                HTML, CSS, Javascript, SASS
                </p> 
                <p className="a-desctwo">
                React, Node, Express, MongoDB
                </p>
        </div>
        <div class="scroll-downs">
            <div class="mousey">
                <div class="scroller"></div>
            </div>
            </div>
    </div>

    )
}

export default About
