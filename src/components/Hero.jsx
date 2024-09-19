import Pic7 from '../assets/heroPics/Pic7.png';
import Pic10 from '../assets/heroPics/Pic10.png';
import Pic100 from '../assets/heroPics/pic100.png';


export default function Hero() {
    const heroStyle = {
      width: "100%",
      height: "auto",
      position: "relative",
    };

    const heroImageStyle = {
        width: "100%",
        height: "auto",
        objectfit: "cover",
    };

    const textOverlayStyle = {
      position: "absolute", // Position the text absolutely
      top: "78%", // Center the text vertically
      left: "50%", // Center the text horizontally
      transform: "translate(-50%, -50%)", // Offset to truly center
      color: "white", // Text color
      fontSize: "3rem", // Adjust font size as needed
      fontWeight: "bold",
      textAlign: "center",
    };


return (
    <div className="hero" style ={heroStyle}>
        <img src={Pic7} alt="Home page engagment Photo" style={heroImageStyle}/>
        <div style={textOverlayStyle}>
            Slava & Fiona
        </div>
    </div>
);
}