
const styles = {
    panel: {
        //self
        width: 500,
        height: 600,
        backgroundColor: '#deebed',
        marginTop: 100,
        borderRadius: 10,
        boxShadow:"5px 3px 10px #f2fbfc",
        opacity:0.2,
        transition:"opacity 1.5s",
        //children
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        fontSize: 50,
        color: "#ff4c38",
        transition:"opacity 1.5s",
        fontFamily: 'RussoOne',
    },
}

export default styles;