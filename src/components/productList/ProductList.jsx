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
                    Below are my most recent projects, the first project is the 
                    <a class="blue" href="https://github.com/qmkDuran/Instaverse" target="_blank"> Instaverse Blog (Github Repo) </a>,
                    where you can post images and write a description for that image. 
                    
                    The next project has a woman in a coat, and that is a <a class="blue" href="https://github.com/qmkDuran/E-Commerce-Site" target="_blank"> E-commerce Store Design (Github Repo) </a> 
                    that sells winter coats. 
                    
                    Than their is the <a class="blue" href="https://github.com/qmkDuran/Crypto-Project" target="_blank">Crypto Investor App (Github Repo) </a> 
                    which lets you know what the current prices are in the market. 
                    
                    The last project at the bottom is a <a class="blue" href="https://github.com/qmkDuran/Screen-Mirroring" target="_blank">Screen Mirror Application (Github Repo). </a> 
                    This application lets you create a mini screen of any displays that you have connected and move it around. 
                </p>
            </div>
            <div className="pl-list">
                <div className="p">
                    <div className="p-browser">
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                    </div>
                    <a href="https://instaverseblog.netlify.app/" target="_blank" rel="noreference">
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
                    <a href="https://cryptoinvestor.netlify.app/" target="_blank" rel="noreference">
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
