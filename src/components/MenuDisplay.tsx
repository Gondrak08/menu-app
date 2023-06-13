import { useState } from 'react';
import { TbShoppingCartX } from 'react-icons/tb';
import Card from './Card';
import Pagination from './Pagination';


export default function MenuDisplay({ products }: { products: Object[] }) {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const itemsPerPage: number = 4;
    const paginatedItems: Object[] = [];

    for (let i = 0; i < products.length; i += itemsPerPage) {
        paginatedItems.push(products.slice(i, i + itemsPerPage))
    }

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const itemsToDisplay = paginatedItems[currentPage];

    return (
        <section id="menu-component" className="flex flex-col gap-5
         h-full w-full bg-gray-200  py-5 px-0 md:px-3 box-border">

            <div className="menu flex flex-col gap-3" >
                {
                    Array.isArray(itemsToDisplay) && itemsToDisplay.map((product: any, index: number) => (
                        <Card key={index} product={product} />
                    ))
                }
            </div>
            <div className='flex w-full' >
                <Pagination
                    currentPage={currentPage}
                    totalPages={paginatedItems.length}
                    onPageChange={handlePageChange}
                    
                />
            </div>
        </section>
    )
}