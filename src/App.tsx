import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ResultCard } from "./components/ResultCard";
import { SideDecor } from "./components/SideDecor";
import { Footer } from "./components/Footer";
import { getRandomGreeting } from "./data/greetings";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultContent, setResultContent] = useState("");

  // Store last query for regeneration
  const [lastQuery, setLastQuery] = useState<{
    tag: string;
    keyword: string;
  } | null>(null);

  const handleGenerate = (tag: string, keyword: string) => {
    setShowResult(true);
    setIsLoading(true);
    setLastQuery({ tag, keyword }); // Save for regeneration
    setResultContent(""); // Clear previous content

    // Simulate network delay for AI processing
    setTimeout(() => {
      const greeting = getRandomGreeting(tag, keyword);
      setResultContent(greeting);
      setIsLoading(false);
    }, 2800); // 2.8s to allow the terminal logs to play out
  };

  const handleRegenerate = () => {
    if (lastQuery) {
      handleGenerate(lastQuery.tag, lastQuery.keyword);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red/5 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow max-w-[800px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow max-w-[800px]" />
      </div>

      <SideDecor />

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 pt-6 md:pt-12 flex-1 flex flex-col items-center gap-12 md:gap-16 z-10">
        <Header />

        <main className="w-full flex flex-col items-center gap-8 md:gap-12 pb-20">
          <Hero onGenerate={handleGenerate} />
          <ResultCard
            isVisible={showResult}
            isLoading={isLoading}
            content={resultContent}
            onRegenerate={handleRegenerate}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
