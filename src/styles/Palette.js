

export default {
    root: {
        height: "100vh",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column", /* Solution to keep page in proportion to content */
        "@media(max-width: 991px)": {
            overflowY: "scroll"
        }
    },
    singlePalette: {
        justifyContent: "space-between"
    },
    nav: {
        display: "flex",
        alignItems: "center",
        padding: "20px",
        justifyContent: "flex-start",
        position: "fixed",
        top: 0,
        left: 0,
        background: "white",
        width: "100%",
        zIndex: 5,
        height: "74px",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            alignItems: "flex-start",
            height: "auto"
        }
    },
    navLogo: {
        flex: "0 0 auto",
        "@media(max-width: 600px)": {
            margin: "5px 0"
        }
    },
    navSliderWrapper: {
        display: "flex",
        alignItems: "center",
        marginLeft: "50px",
        flex: "1 0 auto",
        marginRight: "auto",
        "@media(max-width: 600px)": {
            marginLeft: 0,
            width: "100%"
        }
    },
    navSlider: {
        marginLeft: "20px",
        width: "100%",
        maxWidth: "500px",
        "@media(max-width: 850px)": {
            maxWidth: "300px"
        },
        "@media(max-width: 991px)": {
            maxWidth: "350px"
        }
    },
    navFormat: {
        flex: "0 0 auto",
        marginLeft: "10px",
        "@media(max-width: 600px)": {
            marginLeft: 0
        }
    },
    colors: {
        height: "calc(100vh - 74px)",
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "74px",
        "@media(max-width: 600px)": {
            height: "calc(100vh - 154.875px)",
            paddingTop: "154.875px"
        }
    },
    footer: {
        fontWeight: "700",
        background: "white",
        padding: "10px 40px",
        display: "flex",
        justifyContent: "flex-end"
    }
}