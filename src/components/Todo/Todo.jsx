import { useState, useEffect, useCallback, useMemo } from "react";
import Input from "../Input/Input";
import useInput from "../../hooks/use-Input";
import useHttp from "../../hooks/useHttp";

function Todo() {
  const [todo, setTodo] = useState([]);
  const dataHandler = useCallback((dataObj) => {
    setTodo(dataObj);
  }, []);

  const {
    value: todoValue,
    inputTouched: todoInputTouched,
    hasError: todoInputHasError,
    changeValueHandler: todoChangeHandler,
    changeBlurHandler: todoFocusHandler,
    reset: todoRestHandler,
  } = useInput((value) => value.trim() != "");

  const confiObj = useMemo(() => {
    return {
      url: "https://react-http-1610c-default-rtdb.firebaseio.com/todos.json",
    };
  });
  const confiObj2 = useMemo(() => {
    return {
      url: "https://react-http-1610c-default-rtdb.firebaseio.com/todos.json",
      method: "POST",
    };
  });
  const confiObj3 = useMemo(() => {
    return {
      url: "https://react-http-1610c-default-rtdb.firebaseio.com/todos",
      method: "DELETE",
    };
  });
  const { isLoading, error, sendRequest } = useHttp(confiObj, dataHandler);

  const {
    isLoading: postIsLoading,
    error: postError,
    sendRequest: postRequest,
  } = useHttp(confiObj2, null);
  const {
    isLoading: deleteIsLoading,
    error: deleteError,
    sendRequest: deleteRequest,
  } = useHttp(confiObj3, null);

  const addTodo = (event) => {
    event.preventDefault();
    postRequest({ activity: todoValue });
    sendRequest();

    todoRestHandler();
  };
  const deleteTodo = (event) => {
    event.preventDefault();
    deleteRequest(null, event.target.dataset.id);
    // setInterval(() => {
    // }, [1000]);
    sendRequest();
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const returnTodoJSX = (obj) => {
    let content = [];
    for (let id in obj) {
      content.push(
        <li
          key={id}
          className="block bg-gray-300 p-4 shadow-sm hover:shadow-lg hover:scale-105 mt-1 transition-all"
        >
          <span className="flex justify-between items-center">
            <span>{obj[id].activity}</span>
            <button
              data-id={id}
              onClick={deleteTodo}
              className="bg-white py-2 px-4 rounded-full hover:shadow-xl cursor-pointer"
            >
              X
            </button>
          </span>
        </li>
      );
    }
    return content;
  };

  return (
    <>
      <form>
        <div className="w-[80vw] bg-slate-500 mx-auto p-10 mt-10">
          <div>
            <Input
              label="Enter Todo"
              type="text"
              placeholder="Enter Your Todo"
              value={todoValue}
              isTouched={todoInputTouched}
              isNotValid={todoInputHasError}
              onChange={todoChangeHandler}
              onBlur={todoFocusHandler}
            />

            <button
              onClick={addTodo}
              className="bg-sky-400 p-2 rounded-lg shadow-md hover:scale-125 mt-2"
            >
              Add Todo
            </button>
          </div>
          <div className="min-h-[10rem] pt-10 ">
            <ul>{returnTodoJSX(todo)}</ul>
          </div>
        </div>
      </form>
    </>
  );
}

export default Todo;
