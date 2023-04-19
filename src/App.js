import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import SubjectSection from "./components/SubjectSection";
import RewardSection from "./components/RewardSection";
import ChallengeSection from './components/ChallengeSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ChakraProvider>
        <header>
          <Header />
        </header>
        <main>
          <LandingSection />
          <SubjectSection />
          <RewardSection />
          <ChallengeSection />
          <NewsSection />
          <ContactSection />
        </main>
        <footer>
          <Footer />
        </footer>
      </ChakraProvider>
    </>
  );
}

export default App;