import "./App.css";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import Form from "./components/Form";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import HookCounter from "./components/HookCounter";
import Message from "./components/Message";
import ParentCompo from "./components/ParentCompo";
import PostList from "./components/PostList";
import UseEffectHook from "./components/UseEffectHook";
import UseReduer from "./components/UseReduer";
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

          <div className="flex justify-center items-center p-3 bg-purple-400 rounded-full font-bold">
            <ParentCompo />
          </div>

          <div className="flex justify-center mx-5 items-center p-3 my-5 bg-green-400 rounded-md font-bold">
            <Form />
          </div>

          <div className="p-3 my-3 mx-3 bg-yellow-200 text-blue-800 font-serif text-xl">
            <PostList />
          </div>

          <div className="p-3 my-3 mx-3 bg-violet-200 font-serif text-xl">
            <HookCounter />
          </div>

          <div className="p-3 bg-fuchsia-600 text-cyan-400">
            <UseEffectHook />
          </div>

          <div className="p-3 bg-emerald-300 text-amber-800">
            <UseReduer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
