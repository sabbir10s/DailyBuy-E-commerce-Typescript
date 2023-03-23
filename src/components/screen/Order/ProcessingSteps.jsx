import React from 'react';
import {BsCheck2} from 'react-icons/bs';
const ProcessingSteps = () => {
    return (
        <div className='hidden md:block w-full'>
            <div className="flex items-center overflow-x-auto h-[200px]">
                <div className="flex items-center relative">
                    <div
                        className="rounded-full flex items-center justify-center h-10 w-10 py-3 border border-primary-600 bg-primary-600 text-white text-2xl">
                        <BsCheck2/>
                    </div>
                    <div
                        className="absolute top-0 -ml-10 text-center mt-12 w-32 text-sm font-medium">Order Pending</div>
                </div>
                <div className="flex-auto border-t-4 border-primary-600"></div>
                <div className="flex items-center relative">
                    <div
                        className="rounded-full flex items-center justify-center h-10 w-10 py-3 border border-primary-600 border-dashed text-lg font-semibold text-primary-600">
                        2
                    </div>
                    <div
                        className="absolute top-0 -ml-10 text-center mt-12 w-32 text-sm font-medium">Order Processing</div>
                </div>
                <div className="flex-auto border-t-4 border-gray-200"></div>
                <div className="flex items-center relative">
                    <div
                        className="rounded-full flex items-center justify-center h-10 w-10 py-3 border border-primary-600 border-dashed text-lg font-semibold text-primary-600">
                        3
                    </div>
                    <div
                        className="absolute top-0 -ml-10 text-center mt-12 w-32 text-sm font-medium">Order At Local Facility</div>
                </div>
                <div className="flex-auto border-t-4 border-gray-200"></div>
                <div className="flex items-center relative">
                    <div
                        className="rounded-full flex items-center justify-center h-10 w-10 py-3 border border-primary-600 border-dashed text-lg font-semibold text-primary-600">
                        4
                    </div>
                    <div
                        className="absolute top-0 -ml-10 text-center mt-12 w-32 text-sm font-medium">Order Out For Delivery</div>
                </div>
                <div className="flex-auto border-t-4 border-gray-200"></div>
                <div className="flex items-center relative">
                    <div
                        className="rounded-full flex items-center justify-center h-10 w-10 py-3 border border-primary-600 border-dashed text-lg font-semibold text-primary-600">
                        5
                    </div>
                    <div
                        className="absolute top-0 -ml-10 text-center mt-12 w-32 text-sm font-medium">Order Completed</div>
                </div>
            </div>
        </div>
    );
};

export default ProcessingSteps;