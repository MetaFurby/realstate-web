import "../styles/index.scss";
import Recipes from "./Recipes";
import houseImg from "../assets/house-1.png"
const App = () => {
    return(
        <>
            <section className="house"></section>
            <main>
                <section>
                    <h1>hi react</h1>
                </section>
                <img src={houseImg} alt="houseImg" width="250"></img>
            </main>
            <Recipes></Recipes>
        </>
    )
}
export default App;