import second from "./img/second-img.png"
import "./Content.css"

const Content = () => {
    const pStyle = {
        fontFamily: "Tahoma",
        fontSize: "1.3rem",
        lineHeight: "1.5rem",
    }

    const imgStyle = {
        display : "block",
        margin: "auto",
        maxWidth: "70vw",
        marginBottom: "1rem",
        borderRadius: "2rem",
    }

    return (
        <div>
            <h2 style={{ color: "white", backgroundColor: "red" }}>React Js</h2>
            <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, laborum!</p>

            <img style={imgStyle} src="https://cdn.pixabay.com/photo/2023/02/14/19/49/chocolate-7790334_960_720.jpg" alt="chocolate1" />
            <img style={imgStyle} src={second} alt="bp-banner" />

            <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita ducimus ipsum aliquam magni praesentium quaerat harum ipsa minus quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, accusantium.</p>

            <p className="par">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt incidunt voluptas eos? Non itaque eaque officia possimus, alias commodi nihil minima deleniti repudiandae dignissimos ipsam nemo rerum cumque eius.</p>

        </div>
    )
}

export default Content