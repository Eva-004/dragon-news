import CategoryNews from '@/components/homePage/CategoryNews';
import { getCategories, getNewsByCategory } from '@/lib/data';
import LeftSideBar from '@/components/homePage/LeftSideBar';
import RightSideBar from '@/components/homePage/RightSideBar';
import React from 'react';

const NewsCategoryPage = async({params}) => {
    const {id}= await params;
    const categories = await getCategories();
        const news = await getNewsByCategory(id)
    return (
        <div className="grid grid-cols-12 gap-6 my-14 container mx-auto">
            <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
            <CategoryNews news={news}></CategoryNews>
            <RightSideBar></RightSideBar>
           </div>
    );
};

export default NewsCategoryPage;