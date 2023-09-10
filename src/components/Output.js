import React from 'react';
import { useAppContext } from '@/context/AppContext';

const Output = () => {
    const { discount, desiredYield, crr, duration } = useAppContext();

    const listingPrice = 100000;
    const postCode = "CR69RR";

    const targetPrice = listingPrice * (1 - (discount / 100));
    const rent = targetPrice / 12 * (desiredYield / 100);
    const convertedRent = targetPrice / 12 * (desiredYield / 100) * (crr / 100);
    const totalMonthlyRent = rent + convertedRent;
    const futureBuyBackPrice = targetPrice - (convertedRent * duration * 12);

    const convertCurrency = (num) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(num);
    }

    return (
        <>
            <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                    <div className="mb-6">
                        <h3 className="mb-3 text-lg">Data Retrieved</h3>
                        <div className="flex justify-between mb-1">
                            <span>Listing price</span>
                            <p>{listingPrice ? convertCurrency(listingPrice) : '£______'}</p>
                        </div>
                        <div className="flex justify-between mb-1">
                            <span>Post code</span>
                            <p>{postCode ? postCode : 'N/A'}</p>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h3 className="mb-3 text-lg">Outputs</h3>
                        <div className="flex justify-between mb-1">
                            <span>Target price</span>
                            <p>{targetPrice ? convertCurrency(targetPrice) : '£______'}</p>
                        </div>
                        <div className="flex justify-between mb-1">
                            <span>Total monthly rental</span>
                            <p>{totalMonthlyRent ? convertCurrency(totalMonthlyRent) : '£______'}</p>
                        </div>
                        <div className="flex justify-between mb-1 ml-6">
                            <span>Rent</span>
                            <p>{rent ? convertCurrency(rent) : '£______'}</p>
                        </div>
                        <div className="flex justify-between mb-1 ml-6">
                            <span>Converted rent</span>
                            <p>{convertedRent ? convertCurrency(convertedRent) : '£______'}</p>
                        </div>
                        <div className="flex justify-between mb-1">
                            <span>Future buy-back price</span>
                            <p>{futureBuyBackPrice ? convertCurrency(futureBuyBackPrice) : '£______'}</p>
                        </div>
                    </div>
                </label>
            </div>
        </>
    )
}
export default Output;