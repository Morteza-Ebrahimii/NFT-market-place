import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";

function App() {
  const [isToggleHomburgerMenu, setIsToggleHomburgerMenu] = useState(false);

  return (
    <div className="app">
      {isToggleHomburgerMenu && (
        <div className="xl:hidden fixed inset-0 w-full h-full bg-black/30 z-10"></div>
      ) }
      <Header setIsToggleHomburgerMenu={setIsToggleHomburgerMenu} />
      <HomePage setIsToggleHomburgerMenu={setIsToggleHomburgerMenu} />
    </div>
  );
}

export default App;
