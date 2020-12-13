
export default {
    root: {
        height: "auto",
        minHeight: "100vh",
        background: "dodgerblue"
    },
    container: {
        height: "100%"
    },
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& h3": {
            fontSize: "3rem"
        }
    },
    listing: {
        display: "grid",
        gridTemplate: "250px / repeat(3, 1fr)",
        gridRowGap: "40px",
        gridColumnGap: "20px",
        gridAutoRows: "250px",
        height: "auto",
        padding: "10px 0 50px 0",
        "@media(max-width: 767px)": {
            gridTemplateRows: "200px",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gridRowGap: "30px",
            gridColumnGap: "15px",
            gridAutoRows: "200px"
        }
    },
    listingItem: {
        textDecoration: "none",
        color: "inherit",
        width: "100%"
    }
}