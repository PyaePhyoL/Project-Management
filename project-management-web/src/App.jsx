import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { ProjectListProvider } from "./provider/ProjectListProvider";

function App() {
  return (
    <>
      <ProjectListProvider>
        <main className="h-screen pt-8 flex gap-8">
          <SideBar />
          <Outlet/>
        </main>
      </ProjectListProvider>
    </>
  );
}

export default App;
