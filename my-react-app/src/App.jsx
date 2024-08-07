import Header from "./Header.jsx" // introduction
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"; // card 
import Button from "./Button/Button.jsx" 
import Button2 from "./Button2.jsx"; // apply css
import Student from "./Student.jsx"; //4. props
import UserGreeting from "./UserGreeting.jsx"; // 5. conditional rendering
import List from "./List.jsx"; // 6. render lists
import ClickButton from "./ClickButton.jsx"; // 7. event handler
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx"; // 8. state hook
import Counter from "./Counter.jsx"; // 8.state hook, 11. updater function
import MyComponent2 from "./MyComponent2.jsx"; // 9. onChange event handler
import ColorPicker from "./ColorPicker.jsx"; // 10. Color Picker
import MyComponent3 from "./MyComponent3.jsx"; // 12. update OBJECTS in state
import UpdateArray from "./UpdateArray.jsx"; // 13. update arrays in state
import ArrayOfObject from "./ArrayOfObject.jsx";  // 14. update ARRAY of OBJECTS in state
import ToDoList from "./ToDoList.jsx"; // 15. ToDoList app
import UseEffect from "./UseEffect.jsx"; // 16. useEffect
import UseEffect2 from "./UseEffect2.jsx";
import DigitalClock from "./DigitalClock.jsx"; // 17. digital clock app
import ComponentA from "./ComponentA18.jsx"; // 18. useContext() prop drilling
import UseRef from "./useRef.jsx"; // 19. useRef
import Stopwatch from "./Stopwatch.jsx"; // 20. stopwatch app


function App() {

  const fruits = [
    {id: 1, name: "Apple", calories: 95}, 
    {id: 2, name:"Orange", calories: 45}, 
    {id: 3, name:"Banana", calories: 105}, 
    {id: 4, name:"Coconut", calories: 125}, 
    {id: 5, name:"Pineapple", calories: 37}
  ];

  const vegetables = [
    {id: 6, name: "Potato", calories: 95}, 
    {id: 7, name:"Cucumber", calories: 45}, 
    {id: 8, name:"Broccoli", calories: 105}, 
    {id: 9, name:"Carrot", calories: 125}, 
    {id: 10, name:"Spinach", calories: 37}
  ];

  return (
    <>
      <Header/>
      <Card/>
      <Card/>
      <UserGreeting isLoggedIn={true} username="Khairulamirin"/>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
      <ClickButton/>
      <ProfilePicture/>
      <Student name="Amirin" age={21} isStudent={true}/>
      <Student name="Khairul" age={30} isStudent={false}/>
      <Student name="Hafiz" age={23} isStudent={true}/>
      <Student name="Anis" />
      <MyComponent/>
      <Counter/>
      <MyComponent2/>
      <MyComponent3/>
      <UpdateArray/>
      <ArrayOfObject/>
      <ToDoList/>
      <UseEffect/>
      <Button/>
      <Button2/>
      <UseEffect2/>
      <DigitalClock/>
      <DigitalClock/>
      <Stopwatch/>
      <ComponentA/>
      <UseRef/>
      <Food/>
      <ColorPicker/>
      <Footer/>
    </>
  );
}

export default App
