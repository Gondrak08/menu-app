import { useState } from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "@/redux/store";

import MenuDisplay from '@/components/MenuDisplay';
import SideBar from '@/components/SideBar';
import PresentationDisplay from '@/components/PresentationDisplay';
import { TbShoppingCartPlus, TbShoppingCartX } from 'react-icons/tb';
import { toggleCart } from '@/redux/reducer';
import ShopCart from '@/components/ShopCart';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function Home() {
  const [fetchData, setFetchData] = useState<Object[] | null>(null);
  const dispatch = useDispatch();
  const cartState = useTypedSelector(state => state.cart.isCart);
  const cartItem = useTypedSelector(state => state.cart.items);
  const handleCart = () => {
    dispatch(toggleCart(cartState));
  };

  return (
    <main className="flex h-screen box-border  items-center justify-between ">
      <SideBar
        fetchData={fetchData ?? null}
        setFetchData={setFetchData}
      />
      <section className='w-full h-full  flex flex-col gap-5 bg-gray-200 box-border py-5 relative '>
        <div className='max-w-[1100px] w-full mx-auto flex justify-between  items-center' >

          <h1 className="text-3xl font-bold  uppercase text-red-500">Pap{`${"'"}`}s Kitchen House</h1>

          <div className='relative'>
            {
             cartItem !=null &&  cartItem.length > 0 ? 
             <TbShoppingCartPlus onClick={() => handleCart()} className='cursor-pointer text-2xl text-red-500' />  
             :  
             (
              <div className='flex items-center gap-3' >
                <span className='text-red-500 font-bold' >your cart is empty</span>
                <TbShoppingCartX  className='cursor-not-allowed text-2xl text-gray-500 opacity-[.5] ' />
              </div>
             )
            }
            {cartState && (<ShopCart />)}
          </div>

        </div>
        <div className='w-full' >
          {fetchData === null && <PresentationDisplay setFetchData={setFetchData} />}
          {fetchData !== null && <MenuDisplay products={fetchData} />}
        </div>
      </section>
    </main>
  )
}
