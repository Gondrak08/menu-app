import { useState } from 'react';
import MenuDisplay from '@/components/MenuDisplay';
import SideBar from '@/components/SideBar';

import useFetchData from '@/utils/useFetchData';
import burgers from '../menuData/burgers.json';
import bbqs from '../menuData/bbqs.json'


export default function Home() {
    const [fetchData, setFetchData] = useState<Object[]|null>(null);
  // const { burgers, isLoading} = useFetchData();

  console.log("fetchedData", fetchData);

  return (
    <main className="flex min-h-screen  items-center justify-between ">
        <SideBar fetchData={fetchData ?? null} setFetchData={setFetchData} />
        <MenuDisplay products={fetchData ?? [{}]}  />    
    </main>
  )
}
