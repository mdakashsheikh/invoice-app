import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto mt-10'>
        Invoice

        <div className='border shadow mt-[120px] rounded-md'>
            <div className='grid grid-cols-5'>
                <div className='col-span-2 flex flex-col justify-center mt-10 mx-10'>
                    <h2 className='text-4xl'>NUR_IT</h2>
                    <p>Notunbazar, Dhaka</p>
                </div>

                <div className='col-span-2'></div>
                <div className='col-span-1 text-end mx-10 mt-5'>
                    <h2 className='text-2xl'>Invoice</h2>
                    <div>
                        <div className='flex justify-between'>
                            <p>DATE:</p>
                            <p>30/12/2024</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>INVOICE#</p>
                            <p>8523</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>CUSTOMER ID</p>
                            <p>C1613</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='my-5 mx-10'/>

            <div className='mx-10'>
                <h2 className='text-xl'>BILL TO</h2>
                <p>Akash Sheikh,</p>
                <p>Sector - 10, Uttara</p>
            </div>

            <div className='mt-[100px] mx-10 grid grid-cols-4'>
                <div>
                    <h2 className='font-semibold'>Description</h2>
                    <hr className='my-3'/>

                    <p>Gren T-Shirt</p>
                    <hr className='my-3'/>
                </div>

                <div className='text-end'>
                    <h2 className='font-semibold'>Qantity</h2>
                    <hr className='my-3'/>

                    <p>2</p>
                    <hr className='my-3'/>
                </div>

                <div className='text-end'>
                    <h2 className='font-semibold'>Unit Price</h2>
                    <hr className='my-3'/>

                    <p>$120</p>
                    <hr className='my-3'/>
                </div>

                <div className='text-end'>
                    <h2 className='font-semibold'>Total Price</h2>
                    <hr className='my-3'/>

                    <p>$240</p>
                    <hr className='my-3'/>
                </div>
            </div>

            <div className='mx-10 my-[70px] grid grid-cols-7'>
                <div className='col-span-6'>
                    <p className='font-semibold'>NOTES</p>
                    <p>Test Note</p>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <p className='font-semibold'>SUBTOTAL</p>
                        <p className='font-semibold'>VAT#</p>
                        <p className='font-semibold'>TOTAL</p>
                    </div>
                    <div>
                        <p>$240</p>
                        <p>0</p>
                        <p>$240</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page