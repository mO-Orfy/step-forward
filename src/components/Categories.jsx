import React from "react"

function Categories({value, onClickCategory}) {

const categories = ['Все', 'Кроссовки👟', 'Шлепанцы🩴', 'Ботинки👞', 'Сапоги👢'];

    return (
       
     <div className="categories">
                 <ul>
                 {categories.map((CategoryName, i) => (
                   <li
                   key={i}
                   onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
                 {CategoryName}
                   </li>
                ))}
                 </ul>
      </div>

    )
   }


export default Categories