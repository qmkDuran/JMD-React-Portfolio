import "./intro.css"
import iconone from "../../img/iconone.png"

const Intro = () => {
    return (
        <div class="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Michael Duran</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front End Developer</div>
                            <div className="i-title-item">HTML</div>
                            <div className="i-title-item">CSS</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">React</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={iconone} alt="" className="i-img"></img>
            </div>
        </div>
    )
}

export default Intro
