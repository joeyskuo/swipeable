import logo from '../logo.svg';

const Drawer = () => {

    const handleClick = () => {
        console.log("click");
    }

    const handleTouchStart = (e) => {
        console.log("touch start");
        console.log(e.touches[0].clientY);
    }

    const handleTouchMove = () => {
        console.log("touch move");
    }

    const handleTouchEnd = () => {
        console.log("touch end");
    }

    const handleTouchCancel = () => {
        console.log("touch cancel");
    }

    return (
        <div className="drawer swipeable" 
                onClick={() => handleClick()}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={() => handleTouchMove()}
                onTouchEnd={() => handleTouchEnd()}
                onTouchCancel={() => handleTouchCancel()}
                >
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
};

export default Drawer;