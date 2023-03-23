import React from 'react';
import productImg from '../../../assets/products/product (1).png'
const OrderItem = () => {
    return (
        <div class="w-full pt-8 overflow-hidden rounded-lg shadow-lg">
            <div class="w-full overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr
                            class="text-[14px] font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase">
                            <th class="px-4 py-3">Product</th>
                            <th class="px-4 py-3">Quantity</th>
                            <th class="px-4 py-3">Total</th>
                            <th class="px-4 py-3"></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="text-gray-700">
                            <td class="px-4 py-3">
                                <div class="flex items-center text-sm">
                                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                        <img
                                            class="object-cover w-full h-full rounded-full"
                                            src={productImg}
                                            alt=""
                                            loading="lazy"/>
                                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <p class="font-semibold text-black">Healthy Cashew Nuts</p>
                                        <p class="text-xs text-gray-600">5.00</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold">3</td>
                            <td class="px-4 py-3 text-ms font-semibold">$15.00</td>
                            <td class="px-4 py-3 text-xs">
                                <button
                                    class="px-2 py-1 font-semibold leading-tight text-primary-600 bg-primary-100 rounded-sm">
                                    Add Review
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderItem;