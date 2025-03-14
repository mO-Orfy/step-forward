import React, { useEffect, useState } from 'react';
import FootwearBlock from '../components/FootwearBlock';

const Home = ({ categoryId, sortType }) => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        getShoes(categoryId, sortType);
    }, [categoryId, sortType]);

    const getShoes = async (categoryId, sortType) => {
        let url = 'http://localhost:5000/shoes';

        if (categoryId !== 0) {
            url += `?category=${categoryId}`;
        }

        if (sortType) {
            url += `${url.includes('?') ? '&' : '?'}sort=${sortType}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setShoes(data);
    };

    return (
        <>
            <h2 className="content__title">Обувь</h2>
            <div className="content__items">
                {shoes &&
                    shoes.map((obj) => (
                        <FootwearBlock
                            key={obj.id}
                            id={obj.id}
                            title={obj.title}
                            price={obj.price}
                            size={obj.size}
                            img_url={obj.img_url}
                        />
                    ))}
            </div>
        </>
    );
};

export default Home;