import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div className="App">
      <h1 className="text-xl font-semibold "> QUIZ 1 </h1>
      <p>
        {" "}
        CREATE AN APP WHICH READ DATA AND DELETE IT FROM AN API. BELOW I USE
        FIREBASE API{" "}
      </p>
      <Todo />
      <h1 className="text-xl font-semibold ">ASSIGMENT 2</h1>
      <p>
        Below there is a form which validates the form on Every Key Stroke and
        become invalid also if user Touches it and not complete it
      </p>
      <Form />

      <h1 className="text-xl font-semibold ">ASSIGMENT 3</h1>
      <p>
        Below There is a pagination. ( free ecommerce api from fakestore) it
        automatically decide total number of pages by defining the total post
        per page. Aand change the current page on click
      </p>

      <Pagination />
    </div>
  );
}

export default App;
