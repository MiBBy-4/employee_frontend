import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Items({ currentItems }) {
  const navigate = useNavigate();

  const handleEmployeeClick = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  };

  return (
    <section className="departments" id="employees">
      <h1 className="text-center departments-header">Department Employees List</h1>
      <div className="departments-container">
        <div className="row departments-row">
          {currentItems && currentItems.map((item) => (
            <div className="col-1 department" id="employee">
              <h3 className="employee-id">{item.employee_id}</h3>
              <h6 className="employee-name">{item.employee_name}</h6>
              <button type="submit" className="btn departments-btn" onClick={() => handleEmployeeClick(item.employee_id)}>Show</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PaginatedItems({ itemsPerPage, employees }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(employees.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(employees.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % employees.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
