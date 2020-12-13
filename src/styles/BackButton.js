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
        background: "black",
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
    backBtn: {
        fontSize: "1.5rem",
        padding: "5px 25px",
        fontWeight: 300,
        border: "none",
        background: "rgba(255,255,255, 0.6)",
        color: "white",
        textTransform: "uppercase",
        cursor: "pointer",
        textDecoration: "none"
    }
}