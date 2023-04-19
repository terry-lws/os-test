import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import SubjectSection from "./components/SubjectSection";
import RewardSection from "./components/RewardSection";
import ChallengeSection from './components/ChallengeSection';

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
        </main>
      </ChakraProvider>
    </>
  );
}

export default App;