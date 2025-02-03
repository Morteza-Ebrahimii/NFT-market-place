import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ConectWallet } from "./pages/ConectWallet";
import { MarketPlace } from "./pages/Marketplace";
import { SignUp } from "./pages/SignUp";
import { Ranking } from "./pages/Rankings";
import { NftDetail } from "./pages/NFTDetail";
import { ArtistProvider } from "./context/ArtistContext";
import { ArtistProfile } from "./pages/ArtistProfile";
import { NftProvider } from "./context/NftContext";

function App() {
  const [isToggleHomburgerMenu, setIsToggleHomburgerMenu] = useState(false);

  return (
    <Router>
      <ArtistProvider>
        <NftProvider>
          <div className="app">
            {isToggleHomburgerMenu && (
              <div className="xl:hidden fixed inset-0 w-full h-full bg-black/30 z-10"></div>
            )}
            <Header setIsToggleHomburgerMenu={setIsToggleHomburgerMenu} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/marketplace" element={<MarketPlace />} />
              <Route path="/connectWallet" element={<ConectWallet />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/rankings" element={<Ranking />} />
              <Route path="/rankings/:id" element={<ArtistProfile />} />
              <Route path="/nft/:id" element={<NftDetail />} />
            </Routes>
          </div>
        </NftProvider>
      </ArtistProvider>
    </Router>
  );
}

export default App;
