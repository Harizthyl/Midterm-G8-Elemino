import Sidebar from "./Components/Sidebar";
import Guide from "./Components/Guide";
import Feedback from "./Components/Feedback";
import Docs from "./Components/Docs";
function App() {

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar author="Briar Rovic Z. Elemino"></Sidebar>
      <Docs/>
      <Guide />
      <Feedback />
    </div>
  );
}

export default App;
