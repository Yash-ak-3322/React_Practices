import "./App.css";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="flex justify-start h-screen w-screen max-h-screen bg-gray-100">
      {" "}
      <header className="p-4 pb-6">
        <Welcome name="React" />
      </header>
      <main className="p-4 justify-center ">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">
            <Greet name="Home" />
          </h2>
          <p>
            <Message />
          </p>
          <div className="my-5 bg-gray-200 rounded-xl p-5 font-serif">
            Functions Events <FunctionClick />
            Class Events <ClassClick />
          </div>

          <div className="my-5 bg-orange-200 rounded-xl p-5 font-serif">
            Functions Events Binding <FunctionClick />
            Class Events Binding <EventBind />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
