import { ReactComponent as Logo } from "../assets/images/logo.svg";
import CustomButton from "./CustomButton";

function NavBar() {
  const navButtons = [
    {
      className: "text-[#3D4F5C] text-[18px] mr-[40px]",
      text: "Startups",
    },
    {
      className: "text-[#3D4F5C] text-[18px] mr-[40px]",
      text: "Contact",
    },
    {
      className:
        "py-[14px] px-[40px] rounded-[20px] border-2 border-[#46B8C8] text-[#46B8C8] text-[18px]",
      text: "Work with us!",
    },
  ];

  return (
    <div className="container">
      <div className="mt-[36px] mb-[90px] flex flex-col sm:flex-row justify-between">
        <Logo />
        <div className="flex align-center">
          {navButtons.map((button, index) => (
            <CustomButton
              key={index}
              className={button.className}
              text={button.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
