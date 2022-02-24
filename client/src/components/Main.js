import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Main = () => {
    const { formData, handleChange, sendTransaction } = useContext(TransactionContext);

    const handleSubmit = async (e) => {
        const { addressTo, amount } = formData;
        e.preventDefault();
    
        if (!addressTo || !amount) return
    
        sendTransaction()
      }

    return (
        <div className="w-screen flex justify-center grow items-center">
            <div className="bg-[#191B1F] w-[40rem] rounded-2xl p-3">
                <div className="px-2 flex items-center justify-between font-semibold text-3xl">
                    <div>Trade</div>
                </div>
                <div className="bg-[#20242A] my-3 rounded-2xl p-3 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between">
                    <input
                        type='text'
                        className="bg-transparent placeholder:text-[#B2B9D2] outline-none mb-1 w-full text-2xl"
                        placeholder='0.0'
                        pattern='^[0-9]*[.,]?[0-9]*$'
                        onChange={e => handleChange(e, 'amount')}
                    />
                </div>
                <div className="bg-[#20242A] my-3 rounded-2xl p-3 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between">
                    <input
                        type='text'
                        className="bg-transparent placeholder:text-[#B2B9D2] outline-none mb-1 w-full text-2xl"
                        placeholder='0x...'
                        onChange={e => handleChange(e, 'addressTo')}
                    />
                    <div className="flex w-1/4"></div>
                    </div>
                    <div onClick={e => handleSubmit(e)} className="bg-fuchsia-100 hover:bg-gray-50 text-slate-900 my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]">
                    Confirm
                    </div>
            </div>
        </div>
    )
}

export default Main;