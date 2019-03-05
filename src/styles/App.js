import background_image from '../assets/images/background.png';

const styles = {
    container: {
        //self
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        //children
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
    },
}

export default styles;