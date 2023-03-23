import React from 'react';
import fruitsAndVegetable from '../../assets/icon/foodCategoryPrimaryIcon.png'
import MeatsFish from '../../assets/icon/foodCategoryPrimaryIcon (2).png'
import BreadsBakery from '../../assets/icon/foodCategoryPrimaryIcon (3).png'
import BreakfastDairy from '../../assets/icon/foodCategoryPrimaryIcon (4).png'
import FrozenFoods from '../../assets/icon/foodCategoryPrimaryIcon (5).png'
const FoodCategoryV2 = () => {
    return (
        <div className=' flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-24 mt-[65px]'>
            <div className=' text-center flex flex-col items-center justify-center'>
                <div className=' w-[80px] lg:w-[130px] h-[80px] lg:h-[130px] flex items-center justify-center rounded-full bg-primary-50'>
                    <img className='w-[50px] lg:w-[75px]' src={fruitsAndVegetable} alt=""/>
                </div>
                <h2 className=' text-[12px] md:text-[16px] lg:text-[20px] mt-[24px]'>Fruits & Vegetable</h2>
                <p className=' text-[10px] md:text-[12px] lg:text-[16px] text-gray-500'>6 Items</p>
            </div>
            <div className=' text-center flex flex-col items-center justify-center'>
                <div className=' w-[80px] lg:w-[130px] h-[80px] lg:h-[130px] flex items-center justify-center rounded-full bg-primary-50'>
                    <img className='w-[50px] lg:w-[75px]' src={MeatsFish} alt=""/>
                </div>
                <h2 className=' text-[12px] md:text-[16px] lg:text-[20px] mt-[24px]'>Meats & Fish</h2>
                <p className=' text-[10px] md:text-[12px] lg:text-[16px] text-gray-500'>6 Items</p>
            </div>
            <div className=' text-center flex flex-col items-center justify-center'>
                <div className=' w-[80px] lg:w-[130px] h-[80px] lg:h-[130px] flex items-center justify-center rounded-full bg-primary-50'>
                    <img className='w-[50px] lg:w-[75px]' src={BreadsBakery} alt=""/>
                </div>
                <h2 className=' text-[12px] md:text-[16px] lg:text-[20px] mt-[24px]'>Breads & Bakery</h2>
                <p className=' text-[10px] md:text-[12px] lg:text-[16px] text-gray-500'>6 Items</p>
            </div>
            <div className=' text-center flex flex-col items-center justify-center'>
                <div className=' w-[80px] lg:w-[130px] h-[80px] lg:h-[130px] flex items-center justify-center rounded-full bg-primary-50'>
                    <img className='w-[50px] lg:w-[75px]' src={BreakfastDairy} alt=""/>
                </div>
                <h2 className=' text-[12px] md:text-[16px] lg:text-[20px] mt-[24px]'>Breakfast & Dairy</h2>
                <p className=' text-[10px] md:text-[12px] lg:text-[16px] text-gray-500'>6 Items</p>
            </div>
            <div className=' text-center flex flex-col items-center justify-center'>
                <div className=' w-[80px] lg:w-[130px] h-[80px] lg:h-[130px] flex items-center justify-center rounded-full bg-primary-50'>
                    <img className='w-[50px] lg:w-[75px]' src={FrozenFoods} alt=""/>
                </div>
                <h2 className=' text-[12px] md:text-[16px] lg:text-[20px] mt-[24px]'>Frozen Foods</h2>
                <p className=' text-[10px] md:text-[12px] lg:text-[16px] text-gray-500'>6 Items</p>
            </div>
        </div>
    );
};

export default FoodCategoryV2;