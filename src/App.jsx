import "./App.css";
import ContactFrom from "./components/ContactForm/ContactFrom";
import ContactHader from "./components/ContactHader/ContactHader";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHader />
        <ContactFrom />
      </main>
    </div>
  );
}

export default App;
