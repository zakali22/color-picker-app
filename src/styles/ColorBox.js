import chroma from "chroma-js"

export default {
    root: {
        height: props => props.type === 'single' ? "54%" : "25%",
        width: "20%",
        maxWidth: "20%",
        flex: "1 1 20%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover $boxBtnCopy": {
            opacity: 1,
            transform: "scale(1)"
        },
        "@media(max-width: 991px)": {
            width: "33.33%",
            maxWidth: "33.33%",
            flex: "1 1 33.33%"
        },
        "@media(max-width: 767px)": {
            width: "50%",
            maxWidth: "50%",
            flex: "1 1 50%"
        },
        "@media(max-width: 500px)": {
            width: "100%",
            maxWidth: "100%",
            flex: "1 1 100%",
            height: "80px"
        }
    },
    colorName: {
        position: "absolute",
        left: "1rem",
        bottom: "1rem",
        color: props => chroma(props[props.format]).luminance() <= 0.5 ? 'white' : 'black',
        zIndex: "1",
        textTransform: "uppercase",
        fontSize: "1.3rem",
        fontWeight: "600",
    
    },
    copyContent: { 
        position: 'relative'
    },
    boxBtn: {
        border: "none",
        background: "rgba(255,255,255, 0.6)",
        color: "white",
        padding: 0,
        textTransform: "uppercase",
        cursor: "pointer",
        textDecoration: "none"
    },
    boxBtnCopy: {
        fontSize: "1.5rem",
        padding: "5px 25px",
        fontWeight: 300,
        opacity: 0,
        transition: "all .3s ease",
        transform: "scale(.6)"
    },
    boxBtnMore: {
        fontSize: "1.3rem",
        padding: "5px",
        position: "absolute",
        right: 0,
        bottom: 0,
        "&:hover": {
            transform: "scale(1.1)"
        }
    },
    boxColor: {
        background: props => props[props.format]
    },
    boxOverlay: {
        width: "100%",
        height: "100%",
        background: props => props[props.format],
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
        transform: "scale(0.5)",
        transition:"opacity .1s ease-in, transform .4s ease-in",
        height: "100%",
        opacity: 0
    },
    showBoxOverlay: {
        transform: "scale(100)",
        opacity: 1
    },
    hideBoxOverlay: {
        opacity: 0,
        visibility: "hidden"
    },
    messageBox: {
        position: "fixed", /* Setting it to fixed will take it out of the whole layout */
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 3,
        justifyContent: "center",
        display: "none",
        opacity: 0,
        "& > $boxBtn": {
            width: "100%",
            textAlign: "center",
            fontSize: "4rem",
            marginBottom: "15px",
            textShadow: "1px 2px black",
            opacity: 1,
            "@media(max-width: 767px)": {
                fontSize: "2.6rem"
            }
        },
        "& span": {
            fontSize: "2rem",
            fontWeight: 300,
            "@media(max-width: 767px)": {
                fontSize: "2rem"
            }
        }
    },
    showMessageBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        animation: "$zoomInAnim 1s ease-in-out forwards",
        animationDelay: ".6s",
    },
    "@keyframes zoomInAnim": {
        "0%": {
            opacity: 1,
            transform: "scale(0)"
        },
        "50%": {
            transform: "scale(1.4)"   
        },
        "100%": {
            opacity: 1,
            transform: "scale(1)"
        }
    }
}