import { useState } from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "@/redux/store";

import MenuDisplay from '@/components/MenuDisplay';
import SideBar from '@/components/SideBar';
import PresentationDisplay from '@/components/PresentationDisplay';
import { TbShoppingCartX } from 'react-icons/tb';
import { toggleCart } from '@/redux/reducer';
import ShopCart from '@/components/ShopCart';

const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;

export default function Home() {
  // const { burgers, isLoading} = useFetchData();
  const [fetchData, setFetchData] = useState<Object[] | null>(null);
  const dispatch = useDispatch();
  const cartState = useTypedSelector(state=>state.cart.isCart);
  const cartItem = useTypedSelector(state=>state.cart.items);
  const handleCart = () => {
    dispatch(toggleCart(cartState));
  };
  
  console.log('cart-item:', cartItem);


  return (
    <main className="flex h-screen box-border  items-center justify-between ">
      <SideBar fetchData={fetchData ?? null} setFetchData={setFetchData} />
      <section className='w-full h-full  flex flex-col gap-5 bg-gray-200 box-border py-5 relative '>
        <div className='max-w-[1100px] w-full mx-auto flex justify-between  items-center' >

          <h1 className="text-4xl uppercase text-red-500">Burgers House</h1>

          <div className='relative'>
            <TbShoppingCartX  onClick={()=>handleCart()}  className='cursor-pointer text-2xl text-red-500' />
              {cartState&&(<ShopCart/>)}
          </div>

        </div>
        <div className='w-full' >
            {fetchData === null && <PresentationDisplay setFetchData={setFetchData} /> }
            {fetchData !==null &&  <MenuDisplay products={fetchData}  />}    
        </div>
      </section>
    </main>
  )
}
