import Header from '@/components/Header'
import React from 'react'

const InvoiceForm = () => {
  return (
    <div className='flex flex-col justify-center mx-[520px] mt-[120px] space-y-3 border py-5'>
        <h2 className='text-3xl text-center'>Invoice Form</h2>

        <form className='mx-auto flex flex-col space-y-5'>
            <input 
                type='text'
                placeholder='Enater Customer Name'
                className='w-[520px] pl-3 py-2 bg-slate-200'
            />

            <input 
                type='text'
                placeholder='Enater Product Name'
                className='w-[520px] pl-3 py-2 bg-slate-200'
            />

            <input 
                type='text'
                placeholder='Enater Product Price'
                className='w-[520px] pl-3 py-2 bg-slate-200'
            />

            <button className='bg-slate-600 py-2 text-white rounded font-semibold'>Submit Invoice</button>
        </form>
    </div>
  )
}

export default InvoiceForm