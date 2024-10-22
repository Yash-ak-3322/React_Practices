import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="flex justify-start h-screen bg-gray-100">
      {" "}
      <header className="p-4 pb-6">
        <Welcome />
      </header>
      <main className="p-4 justify-center ">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">
            <Greet />
          </h2>
          <p>
            <Message />
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
