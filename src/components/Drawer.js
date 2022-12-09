import logo from '../logo.svg';

const Drawer = () => {

    const handleClick = () => {
        console.log("click");
    }

    const handleTouchStart = (e) => {
        console.log("touch start");
        console.log(e.touches[0].clientY);
    }

    const handleTouchMove = (e) => {
        console.log("touch move");
        console.log(e);
        console.log(e.touches[0].clientY);
    }

    const handleTouchEnd = (e) => {
        console.log("touch end");
        console.log(e);
        console.log(e.changedTouches[0].clientY);
    }

    const handleTouchCancel = () => {
        console.log("touch cancel");
    }

    return (
        <div className="drawer swipeable" 
                onClick={() => handleClick()}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
                onTouchCancel={() => handleTouchCancel()}
                >
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
};

export default Drawer;