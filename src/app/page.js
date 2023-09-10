"use client"
import React, { useState } from 'react';
import Input from '@/components/Input';
import Output from '@/components/Output';
import Image from 'next/image';
import { AppProvider } from '@/context/AppContext';

export default function Home() {
  return (
    <AppProvider>
      <div className="min-h-screen md:hidden lg:flex flex flex-col items-center justify-center">
        <Image src={'/logo.png'} alt="Keyzy" width={48} height={48} className="rounded" />
        <div className="bg-white md:shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 flex flex-col lg:flex-row">
          <div className="p-4 flex-1">
            <Input />
          </div>
          <div className="p-4 flex-1">
            <Output/>
          </div>
        </div>
      </div>
      <div className="hidden md:flex lg:hidden md:h-screen items-center justify-center">
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <span className="font-medium">Info alert!</span> Not tablet friendly, please use mobile or desktop device.
        </div>
      </div>
    </AppProvider>
  )
}
