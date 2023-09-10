import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

const Input = () => {
    const { url, setUrl, discount, setDiscount, desiredYield, setDesiredYield, crr, setCrr, duration, setDuration, setFetchedData } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchData = async () => {
        setIsLoading(true);
        try{
            const response = await fetch(url,{
                'Access-Control-Allow-Origin': '*'
            });
            if(response.ok){
                const data = await response.json();
                console.log(data);
                setFetchedData(data);
            } else {
                console.error('Failed to fetch data');
                alert('Failed to fetch data');
            }
        } catch(error){
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <h3 className="mb-3 text-lg font-medium">Inputs</h3>
            <div className="mb-3">
                <label htmlFor="url" className="block text-sm font-medium text-gray-900">URL</label>
                <input type="text" id="url" onBlur={() => handleFetchData()} value={url} onChange={(e) => setUrl(e.target.value)} className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="https://www.rightmove.co.uk/properties/130774457#" />
            </div>
            <div className="mb-3">
                <label htmlFor="discount" className="block text-sm font-medium text-gray-900 dark:text-white">Discount vs. asking price: {discount}</label>
                <div className="flex text-sm justify-between items-center">
                    <p className="p-1">0%</p><input id="discount" type="range" min="0" max="30" value={discount} onChange={(e) => setDiscount(e.target.value)} className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200" /><p className="p-1">30%</p>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="desiredYield" className="block text-sm font-medium text-gray-900">Desired yield</label>
                <input id="desiredYield" type="number" min="4.5" max="9" step="0.01" value={desiredYield} onChange={(e) => setDesiredYield(e.target.value)} className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="6.0%" />
            </div>
            <div className="mb-3">
                <label htmlFor="crr" className="block text-sm font-medium text-gray-900 dark:text-white">Converted rent rate: {crr}</label>
                <div className="flex text-sm justify-center items-center">
                    <p className="p-1">10%</p><input id="crr" type="range" min="10" max="25" value={crr} onChange={(e) => setCrr(e.target.value)} className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200" /><p className="p-1">25%</p>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="discount" className="block text-sm font-medium text-gray-900 dark:text-white">Duration</label>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button" onClick={() => setDuration(3)} className={`rounded-l-lg border ${duration == 3 ? 'bg-gray-100 text-azure' : 'bg-white text-gray-900'} border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700`}>3 years</button>
                    <button type="button" onClick={() => setDuration(5)} className={`border-b border-t border-gray-200 ${duration == 5 ? 'bg-gray-100 text-azure' : 'bg-white text-gray-900'}  px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700`}>5 years</button>
                    <button type="button" onClick={() => setDuration(7)} className={`rounded-r-md border ${duration == 7 ? 'bg-gray-100 text-azure' : 'bg-white text-gray-900'} border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700`}>7 years</button>
                </div>
            </div>
        </>
    )
}

export default Input;