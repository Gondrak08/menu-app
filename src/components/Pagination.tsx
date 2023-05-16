interface IPagination {
    currentPage:number,
    totalPages:number,
    onPageChange:(pageNumber:number)=>void;
};

export default function Pagination(props:IPagination){
    const {currentPage, totalPages, onPageChange} = props;
    const pageNumbers = Array.from({length:totalPages}, (_,i) => i);

    const handlePrevClick=()=>{
        if(currentPage > 1){
            onPageChange(currentPage -1);
        }
    }

    const handleNextClick=()=>{
        if(currentPage < totalPages){
            onPageChange(currentPage + 1);
        }
    }


    return (
        <nav className="flex mx-auto w-fit" >
          <ul id="pagination" className="flex items-center gap-5" >
            <li >
              <button className={`page-item  ${currentPage === 0 ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-red-500 rounded-md text-white p-2'}`} onClick={handlePrevClick} disabled={currentPage === 0}>
                Prev
              </button>
            </li>
            {pageNumbers.map(pageNumber => (
              <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active bg-red-500 text-white rounded p-1 px-2' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(pageNumber)}>
                  {pageNumber}
                </button>
              </li>
            ))}
            <li>
              <button className={`page-item ${currentPage === totalPages ? 'disabled bg-gray-500 text-white cursor-not-allowed ' : 'bg-red-500 rounded-md text-white p-2'}`} onClick={handleNextClick} disabled={currentPage === totalPages}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      );

}