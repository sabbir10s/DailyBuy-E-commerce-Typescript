import React from 'react';

const OrderInformation = () => {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-5 mt-16">
            <div className="col-span-2">
                <table className="text-sm">
                    <tr>
                        <th className="text-xl font-bold pb-4 ">
                            Total Amount
                        </th>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Sub Total</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8">$5.00</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Shipping Charge</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8">$50.00</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Tax</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8">$00.10</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Discount</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8">$00.0</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Total</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8">$55.10</td>
                    </tr>
                </table>
            </div>
            <div className="col-span-3">
                <table className="text-sm ">
                    <tr>
                        <th className="whitespace-nowrap text-xl font-bold pb-4">
                            Order Details
                        </th>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Name</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8"></td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Total Item</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8">1 Item</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Delivery Time</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8">Express Delivery</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Shipping Address</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8">mermoz, Dakar, Dakar, 38169, Sénégal</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Billing Address</td>
                        <td className="py-2">:</td>
                        <td className="py-2 pl-8">Voluptatum qui sunt, Quod et consequatur, Ipsum qui
                            minus sint, 51397, Aut fugiat iusto do</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default OrderInformation;