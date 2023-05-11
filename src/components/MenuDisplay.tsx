import { useState } from 'react';
import { TbShoppingCartX } from 'react-icons/tb';
import Card from './Card';
import Pagination from './Pagination';


export default function MenuDisplay({ products }: { products: Object[] }) {
    const [currentPage, setCurrentPage] = useState<number>(0);

    console.log('menu-products', products.length)

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
        <section id="menu-component" className="flex flex-col gap-5 h-[100vh] w-full bg-gray-200 overflow-auto py-5 px-3">

            <section id="header" className='w-full bg-gray-200'>
                <div className='max-w-[1100px] w-full mx-auto flex justify-between  items-center' >

                    <h1 className="text-4xl uppercase text-red-500">Burgers House</h1>

                    <div>
                        <TbShoppingCartX className='text-2xl text-red-500' />
                    </div>

                </div>
            </section>

            <div className="menu flex flex-col gap-3" >
                {
                    Array.isArray(itemsToDisplay) && itemsToDisplay.map((product: any, index: number) => (
                        <Card key={index} product={product} />
                    ))
                }
            </div>
            <div className='flex' >
            <Pagination
                currentPage={currentPage}
                totalPages={paginatedItems.length}
                onPageChange={handlePageChange}
                
            />
            </div>
        </section>
    )
}