interface IPagination {
    currentPage:number,
    totalPages:number,
    onPageChange:(pageNumber:number)=>void;
};

export default function Pagination(props:IPagination){
    const {currentPage, totalPages, onPageChange} = props;
    const pageNumbers = Array.from({length:totalPages}, (_,i) => i+1);

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
            <li className={`page-item p-2 rounded-md ${currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : ''}`}>
              <button className="page-link" onClick={handlePrevClick} disabled={currentPage === 1}>
                Prev
              </button>
            </li>
            {pageNumbers.map(pageNumber => (
              <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(pageNumber)}>
                  {pageNumber}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={handleNextClick} disabled={currentPage === totalPages}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      );

}