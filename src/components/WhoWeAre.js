import { ReactComponent as QuestionMark } from "../assets/images/question-mark.svg";

function WhoWeAre() {
    const items = [
        {
            order: "01",
            text: "We develop innovative products, systems and services"
        },
        {
            order: "02",
            text: "Next we build teams to scale them into companies"
        },
        {
            order: "03",
            text: "Each startup solving one problem at a time"
        }
    ]
    return (
        <div className="mt-[120px]">
            <div className="mb-[20px] flex justify-center md:justify-between">
                <div className="text-center md:text-left">
                    <h3 className="text-[50px] text-[#3D4F5C]">Who we are</h3>
                    <p className='mb-[12px] font-normal text-[24px] text-[#FB8958]'>We create products that have innovation and technology at their core<br/>We value working with talented people that understand the possibilites of today</p>
                </div>
                <div className="hidden md:block">
                    <QuestionMark />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    items.map((item, index) =>
                        <div key={index} className="w-full md:w-1/3 mb-[20px] md:mb-[0px]">
                            <p className="w-fit mb-[24px] pb-[4px] pr-[12px] border-b-2 border-[#3D4F5C] text-[30px] text-[#FB8958]">{item.order}</p>
                            <p className="text-[#3D4F5C] text-[30px] leading-[30px]">{item.text}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default WhoWeAre;