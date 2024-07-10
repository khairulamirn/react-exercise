

function ClickButton() {

    // let count = 0;

    // const handleClick = (nameClick) => {
    //     console.log("OUCH!");

    //     if(count < 3) {
    //         count++; // count = count + 1
    //         console.log(`${nameClick} you have clicked me ${count} times!`);
    //     } else {
    //         console.log(`${nameClick}, stop clicking me!`);
    //     }
    // };

    const handleClick = (e) => e.target.textContent = "OUCH! 🥲";

    return ( // when clicked () on the button to this =>
        <button onDoubleClick={ (e) => handleClick(e)}>Click me 😊</button>
    );
}

export default ClickButton