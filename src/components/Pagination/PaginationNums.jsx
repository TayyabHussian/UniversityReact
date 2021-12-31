import classes from "./PaginationNums.module.css";

function PaginationNums({ items, postPerPage, change }) {
  console.log(items.length, Math.ceil(items.length / postPerPage));

  let pages = [];
  for (let i = 1; i <= items.length / postPerPage; i++) {
    console.log(i);
    pages.push(i);
    console.log(pages);
  }
  return (
    <ul>
      {pages.map((page) => (
        <li
          key={page}
          onClick={(event) => console.log(event.target)}
          className={`${classes.btnPagination} `}
          onClick={() => change(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
}

export default PaginationNums;
