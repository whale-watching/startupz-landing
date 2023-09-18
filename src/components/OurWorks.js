import MacBook from '../assets/images/macbook.png';
import IPad from '../assets/images/ipad.png';
import IPad1 from '../assets/images/ipad1.png';
import MacBook1 from '../assets/images/macbook1.png';

function OurWorks() {
    const items = [
        {
            title: "Tolq",
            color: "#A9BC87",
            text: "Tolq is the translation solution built for e-commerce.It provides all pieces of the localization puzzle in one single integrated solution.",
            image: MacBook,
            alt: 'macbook'
        },
        {
            title: "Feedback Labs",
            color: "#8BB5C9",
            text: "Feedback Labs turns feedback into actionable insights for your team.",
            image: IPad,
            alt: 'ipad'
        },
        {
            title: "Codekeeper",
            color: "#00A0B6",
            text: "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
            image: IPad1,
            alt: 'ipad1'
        },
        {
            title: "LegalSite",
            color: "#8B60D3",
            text: "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
            image: MacBook1,
            alt: 'macbook1'
        }
    ]
    return (
        <div>
            <div className="text-center mt-[200px] mb-[60px]">
                <h3 className="text-[50px] text-[#3D4F5C]">Our works</h3>
            </div>
            <div className="flex flex-wrap text-center">
                {
                    items.map((item, index) =>
                        <div key={index} className="mb-[80px] px-[90px] w-full md:w-1/2 flex flex-col items-center">
                            <h3 className="text-[30px]" style={{color: item.color}}>{item.title}</h3>
                            <p className='mt-[18px] text-[#3D4F5C]'>{item.text}</p>
                            <img src={item.image} alt={item.alt}/>
                            <button className='px-[50px] py-[12px] mt-[20px] border border-[#46B8C8] rounded-[40px] text-[#46B8C8]'>More</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default OurWorks;