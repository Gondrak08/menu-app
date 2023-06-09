import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/reducer";


export default function Card({ product }: { product: any }) {
    const dispatch = useDispatch();
    const handleAddItemToCart = () => { dispatch(addItemToCart(product)) }
    return (
        <div
            id="card"
            className={`
                w-full
                max-w-[50em] 
                md:min-h-[10em]
                min-h-[8em]  
                h-full 
                flex 
                bg-white 
                rounded
                box-border
                mx-auto`
            } >
            <div id="image" className="w-[5em] md:w-[15em] h-full relative rounded-bl rounded-tl" >
                <img src={product?.img} className="absolute object-cover w-full h-full rounded-bl rounded-tl" />
            </div>

            <div id="description" className="w-full  p-2 flex flex-col justify-between ">
                <div>
                    <h3 className="text-sm md:text-2xl font-bold" >{product?.name}</h3>
                    <p className="text-sm md:text-md text-gray-500" >{product.dsc}</p>
                </div>

                <div className="flex justify-between items-end w-full " >
                    <span className="text-sm md:text-lg font-bold " >
                        R$ {product.price}
                    </span>
                    <button onClick={() => { handleAddItemToCart() }}
                        className="text-[11px] md:text-lg font-bold text-white
                     bg-red-500 px-2 md:px-5 py-2 rounded"
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}