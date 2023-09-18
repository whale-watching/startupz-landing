import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as Twitter } from "../assets/images/twitter.svg";
import { ReactComponent as Linkedin } from "../assets/images/Linkedin.svg";
import { ReactComponent as Instagram } from "../assets/images/instagram.svg";

function Footer () {
    const companies = ["Tolq", "LegalSite", "CodeKeeper", "Feedback Labs"];

    return (
        <div className="bg-[#FBFBFA] py-[40px] w-full">
            <div className="container flex flex-wrap sm:justify-between w-full">
                <div className="h-[150px] flex flex-col justify-between min-w-full md:min-w-[300px] m-4">
                    <Logo />
                    <p>
                        © 2020 Startupz.<br/>All rights reserved. 
                    </p>
                </div>
                <div className="h-[150px] flex flex-col justify-between max-w-[300px] m-4">
                    <h4 className="text-[#3D4F5C]">Companies</h4>
                    <ul>
                        {
                            companies.map((company, index) => 
                                <li key={index} className="text-[#46B8C8]">{company}</li>
                            )
                        }
                    </ul>
                </div>
                <div className="h-[150px] flex flex-col justify-between xs:max-w-[300px] md:max-w-[400px] lg:max-w-[300px] m-4">
                    <h4 className="text-[#3D4F5C]">Contact</h4>
                    <p>
                        World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM The Hague The Netherlands
                    </p>
                    <button className="text-[#46B8C8] text-left">Send us an email</button>
                </div>
                <div className="h-[150px] flex flex-col justify-between max-w-[300px] m-4 w-[110px]">
                    <h4 className="text-[#3D4F5C]">Follow us</h4>
                    <Twitter />
                    <Linkedin />
                    <Instagram />
                </div>
            </div>
        </div>
    )
}

export default Footer;
