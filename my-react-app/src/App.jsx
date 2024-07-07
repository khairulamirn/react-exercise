import Header from "./Header.jsx" // introduction
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"; // card 
import Button from "./Button/Button.jsx" 
import Button2 from "./Button2.jsx"; // apply css
import Student from "./Student.jsx"; //4. props
import UserGreeting from "./UserGreeting.jsx"; // 5. conditional rendering

function App() {

  return (
    <>
      <Header/>
      <Card/>
      <Card/>
      <UserGreeting isLoggedIn={true} username="Khairulamirin"/>
      <Student name="Amirin" age={21} isStudent={true}/>
      <Student name="Khairul" age={30} isStudent={false}/>
      <Student name="Hafiz" age={23} isStudent={true}/>
      <Student name="Anis" />
      <Button/>
      <Button2/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
