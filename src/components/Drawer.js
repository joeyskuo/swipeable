import logo from '../logo.svg';
import {useState} from 'react';

const Drawer = () => {

    const defaultPosition = 500;
    const [drawerPosition, setDrawerPosition] = useState(defaultPosition);
    const [startPosition, setStartPosition] = useState(0);

    const handleClick = () => {
        console.log("click");
    }

    const handleTouchStart = (e) => {
        console.log("touch start");
        console.log(e.touches[0].clientY);
        setStartPosition(e.touches[0].clientY);
    }

    const handleTouchMove = (e) => {
        console.log("touch move");
        console.log(e);
        console.log(e.touches[0].clientY);
        const currentPosition = e.touches[0].clientY;
        const offset = currentPosition - startPosition;
        setDrawerPosition(defaultPosition + offset);
    }

    const handleTouchEnd = (e) => {
        console.log("touch end");
        console.log(e);
        console.log(e.changedTouches[0].clientY);
        const currentPosition = e.changedTouches[0].clientY;
        const offset = currentPosition - startPosition;
        if(offset > 150) {
            hideDrawer();
        } else {
            setStartPosition(0);
            setDrawerPosition(defaultPosition);
        }
    }

    const handleTouchCancel = () => {
        console.log("touch cancel");

    }

    const calculateStyle = () => {
        return {
            top: drawerPosition
        }
    }

    const hideDrawer = () => {
        const drawer = document.querySelector('.drawer');
        drawer.classList.remove('visible');
    }

    return (
        <div className="drawer swipeable visible" 
                onClick={() => handleClick()}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
                onTouchCancel={() => handleTouchCancel()}
                style={calculateStyle()}
                >
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
};

export default Drawer;