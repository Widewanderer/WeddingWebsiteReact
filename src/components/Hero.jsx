
export default function Hero(props) {
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
      color: "white", 
      fontSize: "3rem", 
      fontWeight: "bold",
      textAlign: "center",
    };


return (
    <div className="hero" style ={heroStyle}>
        <img src={props.image} alt="Home page engagment Photo" style={heroImageStyle}/>
        {/* refactor Src to be a prop that will pass in an image depending on the page  */}
        <div style={textOverlayStyle}>
            Slava & Fiona
        </div>
    </div>
);
}