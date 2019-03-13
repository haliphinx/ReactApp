
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
        color: "#5693a0",
        transition:"opacity 1.5s",
        fontFamily: 'RussoOne',
    },
    footer: {
        // self styles
        height: 118,
        backgroundColor: '#deebed',
        alignSelf: 'stretch',
        marginRight:5,
        marginLeft:5,
        marginBottom:5,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: "#5693a0",
        borderWidth:0.5,
        // children styles
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer_text: {
        fontSize: 25,
        color: "#5693a0",
    },
    footer_link: {
        fontSize: 25,
        color: "#5693a0",
        marginLeft: 10,
    },
    placeholder: {
        flex: 1,
    },
}

export default styles;