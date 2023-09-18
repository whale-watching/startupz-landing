import LeftHand from '../assets/images/left-hand.png';
import RightHand from '../assets/images/right-hand.png';

function LoveSolving () {
    return (
        <div className="relative mt-[180px] py-[20px] flex flex-col md:flex-row justify-center items-center">
            <img className='hidden md:block' src={LeftHand} alt='left-hand'/>
            <p className='mx-[10px] mb-[30px] md:mb-[0px] text-[40px] leading-[40px] text-[#FB8958] text-center'>
                We love solving problems!
            </p>
            <img className='hidden md:block' src={RightHand} alt='right-hand'/>
            <div className='relative md:absolute md:right-0 md:bottom-0 flex flex-col'>
                <div className='flex items-center mb-[10px]'>
                    <div className='px-[28px] py-[16px] mr-[70px] bg-[#46B8C8] rounded-[40px] rounded-br-[0px] text-white'>
                        Hi! I am Ben, your virtual assistant. <br/> How can I make your day better?
                    </div>
                    <button className='mr-[10px] text-[#939393] text-[25px]'>X</button>
                </div>
                <div className='flex justify-end'>
                    <div className='p-[34px] rounded-full bg-[#F5F5F5] shadow-[0_6px_6px_rgba(0,0,0,0.2)]'>
                        <div className='man'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoveSolving;