import { Header } from "./components/Header";
import { KPICards } from "./components/KPICards";
import { TabsSection } from "./components/TabsSection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <KPICards />
      <TabsSection />
    </div>
  );
}

export default App;
