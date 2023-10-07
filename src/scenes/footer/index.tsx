import Logo from "@/assets/Solar_Construções.png";
import Instagram from "@/assets/instagran.png";
import WhatsApp from "@/assets/whatsapp.png";



type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-primary-100 py-5">
            <div className="justify-content mx-auto w-5/6 gap-10 md:flex flex space-x-60 ">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />

                    <p>© MarcosGomes All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0 ">
                    <h4 className="font-bold">Contatos</h4>
                    <p>(65)98403-6755</p>
                    <div className="flex">
                        <a href="https://www.instagram.com/solar_construcoes23/" target="_blank" rel="noreferrer " className="flex">
                            <img src={Instagram} alt="Instagram" className="w-16" />
                        </a>
                        <a href="https://google.com" target="_blank" rel="noreferrer " className="flex">
                            <img src={WhatsApp} alt="WhatsApp" className="w-20" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;