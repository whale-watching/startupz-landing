import HiringLeft from '../assets/images/hiring-left.png';
import HiringRight from '../assets/images/hiring-right.png';

function WeHiring () {
    return (
        <div className="mt-[60px] py-[20px] flex flex-wrap items-center">
            <div className='hidden md:flex justify-start w-1/3'>
                <img src={HiringLeft} alt="hiring-left" />
            </div>
            <div className='w-full md:w-1/3 px-[10px] flex flex-col items-center text-center'>
                <h3 className="mb-[10px] text-[#3D4F5C] text-[50px]">We are hiring!</h3>
                <p className="mb-[30px] text-[#FB8958] text-[24px] leading-[24px]">
                    We're always looking for talented people to join and help build our startups. Check out our current openings
                </p>
                <button className="w-fit px-[30px] py-[10px] bg-[#46B8C8] rounded-[20px] text-white">See current openings</button>
            </div>
            <div className='hidden md:flex justify-end w-1/3'>
                <img src={HiringRight} alt="hiring-right" />
            </div>
        </div>
    )
}

export default WeHiring;
