import React from 'react'
import styles from '../../styles/styles'
import CountDown from './CountDown'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { backend_url } from '../../server'
import formatPrice from '../../utils/formatPrice'
import { useTranslation } from 'react-i18next'

const EventCard = ({active,data}) => {
    // const { cart } = useSelector((state) => state.cart);
    const {t} = useTranslation();

    const addToCartHandler = (data) => {
    //   const isItemExists = cart && cart.find((i) => i._id === data._id);
    //   if (isItemExists) {
    //     toast.error("Item already in cart!");
    //   } else {
    //     if (data.stock < 1) {
    //       toast.error("Product stock limited!");
    //     } else {
    //       const cartData = { ...data, qty: 1 };
    //       dispatch(addTocart(cartData));
    //       toast.success("Item added to cart successfully!");
    //     }
    //   }
    }
  return (
    //TODO: if the application is on mobile screen, the item will have the block attribute, 
    //TODO: and if it is on a desktop screen, it will have the flex attribute. If the actie value is true, the margin bottom will be set to 0px, otherwise it will be 12px


    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
        <div className='w-full lg:w-[50%] m-auto'>
            <img 
            src={data?.images[0].url}
            
            alt="" 
            
            />
        </div>

        {/* // TODO: Use a div tag with flex and flex-col properties to place items vertically and if you have to
        // TODO: set up layout in those div tags, you can still use flex property. */}
        <div className='w-full lg:w-[50%] flex flex-col justify-center'>
            <h2 className={`${styles.productDiscountPrice}`}>
                {data?.name}
            </h2>
            <p>
            
                 {data?.description} 
            </p>

            <div className='flex py-2 justify-between'>
            <div className='flex'>
                <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through'>
                    {formatPrice(data?.originalPrice)}
                    

                </h5>
                <h5 className='font-bold text-[20px] text-[#333] font-Roboto'>
                    {formatPrice(data?.discountPrice)}
                    
                </h5>

            </div>
            <span className='pr-3 font-[400] text-[17px] text-[#44a55e]'>
                {data?.sold_out} {t("dashboard.sold_out")}
         
            </span>
        </div>
        <CountDown data={data}/>
       
    
        <br/>
        <div className='flex items-center'>
            <Link to={`/product/${data?._id}?isEvent=true`}>
                <div className={`${styles.button} text-[#fff]`}>
                {t("dashboard.seeDetail")}

                </div>
            </Link>
            <div 
            className={`${styles.button} text-[#fff] ml-5`}
            onClick={()=> addToCartHandler(data)}
            >
                {t("product_card.add_to_cart")}

            </div>
        </div>
         </div>
    </div>
  )
}

export default EventCard
