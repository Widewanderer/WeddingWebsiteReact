import Pic7 from '../assets/heroPics/Pic7.png';
import Pic10 from '../assets/heroPics/Pic10.png';
import Pic100 from '../assets/heroPics/pic100.png';


export default function Hero() {
    const heroStyle = {
      width: "100%",
      height: "auto",
    };

    const heroImageStyle = {
        width: "100%",
        height: "auto",
        objectfit: "cover",
    };


return (
    <div className="hero" style ={heroStyle}>
        <img src={Pic7} alt="Home page engagment Photo" style={heroImageStyle}/> 
    </div>
);
}