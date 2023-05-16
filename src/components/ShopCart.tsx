import { useEffect, useState } from 'react';

import { AiOutlineShopping } from 'react-icons/ai';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { getAllPrice, removeItem, toggleCart } from '@/redux/reducer';
import { RootState } from "@/redux/store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function ShopCart() {
    const dispatch = useDispatch();
    const cartState = useTypedSelector(state => state.cart.isCart);
    const cartProducts = useTypedSelector(state => state.cart.items);
    const finalPrice = useTypedSelector(state => state.cart.finalPrice);
    const [isSended, setIsSended] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getAllPrice());
    });


    const handleSendOrder = (e: any) => {
        e.preventDefault()
        setIsSended(true);
    }

    useEffect(() => {
        if (isSended) {
            setTimeout(() => {
                setIsSended(false)
                dispatch(toggleCart(false));
            }, 1500);
        }
    }, [isSended]);


    const SendedContainer = () => {
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <h3 className='text-xl' >Seu pedido foi enviado com sucesso!</h3> 
            </div>
        )
    }

    return (
        <section className="flex flex-col w-[30em] h-[50em] absolute top-6 right-6 z-50 rounded p-3 drop-shadow-xl  bg-gray-100" >
            <div id='cart-header' className=' flex gap-3 items-center text-xl border-b-2 py-2' >
                <h1>Os seus pedidos</h1> <AiOutlineShopping />
            </div>
            {
                isSended ? <SendedContainer /> : (
                    <div id='cart-body' className='w-full h-full flex flex-col  box-border justify-between relative ' >
                        <div id='cart-content' className='max-h-[40em] flex flex-col gap-2 w-full  p-2 overflow-auto  drop-shadow-lg ' >
                            {
                                cartProducts?.map((product: any, index: number) => (
                                    <CartCard product={product} />
                                ))
                            }
                        </div>
                        <div className='flex flex-col items-end gap-2 justify-end w-full absolute bottom-2' >
                            <span className='mr-4 font-bold' >Total price ${finalPrice}</span>
                            <button onClick={(e) => handleSendOrder(e)} className='p-3 bg-red-500 text-white rounded font-bold' >Send Order</button>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

const CartCard = ({ product }: { product: any }) => {
    const dispatch = useDispatch();
    const handleRemoveItem = () => {
        dispatch(removeItem(product))
    }

    return (
        <div
            id="card"
            className={`
            w-full 
            h-fit 
            flex 
            bg-white 
            rounded
            box-border
            mx-auto`
            } >
            <div id="image" className="w-full max-w-[8em] h-full relative rounded-bl rounded-tl" >
                <img src={product?.img} className=" w-full h-full rounded-bl rounded-tl" />
            </div>

            <div id="description" className="w-full  p-2 flex flex-col justify-between ">
                <div>
                    <h3 className="text-2xl font-bold" >{product?.name}</h3>
                    <p className="text-gray-500" >{product.dsc}</p>
                </div>

                <div className="flex justify-between  items-end w-full " >
                    <div className='flex justify-state items-end gap-2' >
                        <span className="text-md font-bold " >{product.count} x</span>
                        <span className="text-lg font-bold " >R$ {product.price}</span>
                    </div>
                    <button onClick={() => handleRemoveItem()}>remove</button>
                </div>
            </div>
        </div>
    );
}