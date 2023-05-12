import { useState } from 'react';
import MenuDisplay from '@/components/MenuDisplay';
import SideBar from '@/components/SideBar';
import PresentationDisplay from '@/components/PresentationDisplay';

import { TbShoppingCartX } from 'react-icons/tb';


export default function Home() {
  const [fetchData, setFetchData] = useState<Object[] | null>(null);
  // const { burgers, isLoading} = useFetchData();

  console.log("fetchedData", fetchData);

  return (
    <main className="flex h-screen box-border  items-center justify-between ">
      <SideBar fetchData={fetchData ?? null} setFetchData={setFetchData} />
      <section className='w-full h-full  flex flex-col gap-5 bg-gray-200 box-border py-5 relative '>
        <div className='max-w-[1100px] w-full mx-auto flex justify-between  items-center' >

          <h1 className="text-4xl uppercase text-red-500">Burgers House</h1>

          <div>
            <TbShoppingCartX className='text-2xl text-red-500' />
          </div>

        </div>
        <div className='w-full' >
            {fetchData === null && <PresentationDisplay/> }
            {fetchData !==null &&  <MenuDisplay products={fetchData}  />}    
        </div>
      </section>
    </main>
  )
}
