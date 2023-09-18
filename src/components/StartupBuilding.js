import LeftHand from '../assets/images/left-hand.png';
import RightHand from '../assets/images/right-hand.png';

function StartupBuilding () {
    return (
        <div className="mt-[60px] py-[20px] flex justify-between items-center">
            <img className='hidden md:block' src={LeftHand} alt='left-hand'/>
            <p className='mx-[30px] text-[40px] leading-[40px] text-[#FB8958] text-center'>
            Startups create a world that actually is better.
            Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.
            </p>
            <img className='hidden md:block' src={RightHand} alt='right-hand'/>
        </div>
    )
}

export default StartupBuilding;