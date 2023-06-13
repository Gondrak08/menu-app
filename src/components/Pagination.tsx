interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export default function Pagination(props: IPagination) {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePrevClick = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const visiblePageCount = 4;
    const pageNumbers: number[] = [];
  
    if (totalPages <= visiblePageCount) {
      // Exibe todos os números de página se o total for menor ou igual ao limite visível
      pageNumbers.push(...Array.from({ length: totalPages }, (_, i) => i));
    } else {
      const firstPage = 0; // Primeira página sempre será 0
      const lastPage = totalPages - 1; // Última página
  
      const midPageCount = visiblePageCount - 2; // Quantidade de páginas intermediárias (excluindo o primeiro e o último)
  
      const step = Math.floor(midPageCount / 2); // Passo para cálculo das páginas intermediárias
  
      // Adiciona o primeiro número da página
      pageNumbers.push(firstPage);
  
      if (currentPage < firstPage + step) {
        // Adiciona as páginas intermediárias antes da página atual
        pageNumbers.push(...Array.from({ length: Math.min(midPageCount, totalPages) }, (_, i) => firstPage + i + 1));
      } else if (currentPage > lastPage - step) {
        // Adiciona as páginas intermediárias após a página atual
        pageNumbers.push(...Array.from({ length: Math.min(midPageCount, totalPages) }, (_, i) => lastPage - midPageCount + i));
      } else {
        // Adiciona as páginas intermediárias em torno da página atual
        const start = currentPage - step;
        const end = currentPage + step;
  
        pageNumbers.push(...Array.from({ length: midPageCount }, (_, i) => start + i + 1));
      }
  
      // Adiciona o último número de página
      pageNumbers.push(lastPage);
    }
  
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex mx-auto w-fit">
      <ul id="pagination" className="flex   items-center gap-5">
        <li>
          <button
            className={`page-item text-sm md:text-md p-2 rounded-md  
              ${currentPage === 0 ? 'bg-gray-500 text-white cursor-not-allowed ' : 'bg-red-500  text-white'}`}
            onClick={handlePrevClick}
            disabled={currentPage === 0}
          >
            Prev
          </button>
        </li>
        <div className="flex  w-full  items-center justify-center gap-1 md:gap-5" >
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${pageNumber === currentPage ? 'active bg-red-500 text-white rounded p-1 px-2' : ''}`}
          >
            <button className="page-link" onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}
        </div>
        <li>
          <button
            className={`page-item text-sm md:text-md p-2 rounded-md ${
              currentPage === totalPages ? 'disabled bg-gray-500 text-white cursor-not-allowed' : 'bg-red-500  text-white'
            }`}
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
