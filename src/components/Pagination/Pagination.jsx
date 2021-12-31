import { useState, useEffect } from "react";
import PaginationNums from "./PaginationNums";

function Pagination() {
  const [items, setItems] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [postPerPage] = useState(4);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems(data);
    };
    sendRequest();
  }, []);

  // SETTING PAGES
  const lastPostNumber = currPage * postPerPage;
  const firstPostNumber = lastPostNumber - postPerPage;
  const displayPost = items.slice(firstPostNumber, lastPostNumber);
  console.log(displayPost);

  const changeFn = (num) => setCurrPage(num);

  return (
    <>
      <div className="bg-slate-200 h-[100vh] w-[100vw] flex items-center justify-center">
        <section>
          <div className="flex gap-4">
            {displayPost.map((post) => (
              <div className="max-w-[10rem]" key={post.id}>
                <img src={post.image} className="object-fit" />
                <label>{post.title}</label>
              </div>
            ))}
          </div>
          <div>
            <ul className="flex gap-5 justify-center mt-10">
              <PaginationNums
                items={items}
                postPerPage={postPerPage}
                change={changeFn}
              />
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Pagination;
