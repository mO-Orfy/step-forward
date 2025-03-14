import { useState } from "react";
import React from "react";
import { useDispatch } from 'react-redux';
import {addItem} from '../redux/slice/cartSlice'


function FootwearBlock({ id, title, price, img_url, size }) {
  const dispatch = useDispatch();
  const [addedCount, setAddedCount] = useState(0);
  const onClickAdd = () => {
    setAddedCount(addedCount + 1);
    const item = {
      id,
      title,
      price,
      img_url,
      size: size[activeSize]
    };
    dispatch(addItem(item));
  }
  const [activeSize, setActiveSize] = useState(0);
    return (
        <div className="footwear-block">
  <img
    className="footwear-block__image"
    src={img_url}
    alt="Footwear"
  />
  <h4 className="footwear-block__title">{title}</h4>
  <div className="footwear-block__selector">
    <ul>
    {
      size.map((sizes, i) => <li onClick={() => setActiveSize(i)} className={activeSize === i ? "active" : ''}>{sizes}</li>)
    }
    </ul>
  </div>
  <div className="footwear-block__bottom">
    <div className="footwear-block__price">{price} ₽</div>
    <button onClick={onClickAdd} className="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      { addedCount > 0 && <i>{addedCount}</i>}
    </button>
  </div>
</div> 
    )
}

export default FootwearBlock