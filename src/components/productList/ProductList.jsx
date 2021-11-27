import "./productList.css"
// import "../product/product.css"
import Img01 from "../../img/Img01.png"
import Img02 from "../../img/Img02.png"
import Img03 from "../../img/Img03.png"
import Img04 from "../../img/Img04.png"




const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Latest Creations</h1>
                <p className="pl-desc">
                    Below are my most recent projects, the first project on the left is a blog where you can post
                    images and write a description. The project to the right of it, is an E-commerce store design for winter coats. 
                    Than their is my pink friend the robot who tells you developer jokes and hopefully he is behaving himself today. 
                    The last project on the right is a screen mirror application. This application lets you create a mini screen of any 
                    displays that you have connected and move it around. 
                </p>
            </div>
            <div className="pl-list">
                <div className="p">
                    <div className="p-browser">
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                    </div>
                    <a href="https://laughing-swartz-ff3afc.netlify.app/" target="_blank" rel="noreference">
                        <img src={Img01} alt="" className="p-img" />
                    </a>      
                </div>
                <div className="p">
                    <div className="p-browser">
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                    </div>
                    <a href="https://qmkduran.github.io/E-Commerce-Site/" target="_blank" rel="noreference">
                        <img src={Img02} alt="" className="p-img" />
                    </a>
                </div>
                <div className="p">
                    <div className="p-browser">
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                    </div>
                    <a href="https://qmkduran.github.io/Joke-Generator/" target="_blank" rel="noreference">
                        <img src={Img03} alt="" className="p-img" />
                    </a>
                </div>    
                <div className="p">
                    <div className="p-browser">
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                    </div>
                    <a href="https://qmkduran.github.io/Screen-Mirroring/" target="_blank" rel="noreference">
                        <img src={Img04} alt="" className="p-img" />
                    </a>
                </div>  
            </div>
        </div>
    )
}

export default ProductList
