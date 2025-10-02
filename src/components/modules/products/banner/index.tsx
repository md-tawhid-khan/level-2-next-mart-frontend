import React from 'react';
import styles from './banner.module.css'

type TProductBanner ={
    title:string;
    path:string ;
}
const ProductsBanner = ({title,path}:TProductBanner) => {
    return (
        <div className={`${styles.banner} flex justify-center items-center`}>
            <div className='text-center'>
                <h1 className='text-3xl font-extrabold'>{title}</h1>
                <p>{path}</p>
            </div>
        </div>
    );
};

export default ProductsBanner;