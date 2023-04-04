import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({product, handleRemoveCartProduct}) => {
    const {id, name, img, price, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='title'>{name}</p>
                <p>Price: <span className='gold-text'>${price}</span></p>
                <p>Quantity: <span className='gold-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveCartProduct(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;