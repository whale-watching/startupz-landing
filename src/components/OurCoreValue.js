import { ReactComponent as Lamp } from '../assets/images/lamp.svg';

function OurCoreValue() {
    const items = [
        {
            order: "01. ",
            title: "Innovation",
            text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models."
        },
        {
            order: "02. ",
            title: "People",
            text: "Talent is what enable us to create great companies."
        }
    ]
    return (
        <div className="mx-[40px] mt-[200px]">
            <div className="mb-[50px] flex justify-center md:justify-between">
                <div className="text-center md:text-left">
                    <h3 className="text-[50px] text-[#3D4F5C]">Our core values</h3>
                </div>
                <div className="hidden md:block">
                    <Lamp />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    items.map((item, index) =>
                        <div key={index} className="w-full md:w-1/2 mb-[20px] md:mb-[0px]">
                            <p className="w-fit mb-[32px] pr-[12px] text-[30px] text-[#FB8958]"><span className="pb-[18px] border-b border-[#3D4F5C]">{item.order}</span>{item.title}</p>
                            <p className="text-[#3D4F5C] text-[30px] leading-[30px]">{item.text}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default OurCoreValue;