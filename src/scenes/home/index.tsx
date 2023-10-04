import { SelectedPage } from '@/share/types'
import useMediaQuery from '@/hooks/useMediaQuery';
import { ActionButton } from '@/share/ActionButton';
import HomePageText2 from "@/assets/Solar_Construções.png"
import HomePageGraphic from "@/assets/Sun energy-amico.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { HText } from '@/share/HText';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    return (
        <section
            id="home"
            className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
        >
            {/* Image and main header */}
            <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                {/* Main header */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/*Headings */}
                    <motion.div className='md:-mt-20'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img src={HomePageText2} alt="home-page-text top" />
                            </div>
                        </div>
                        <p className="mt-8 text-sm ">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </motion.div>
                    {/*Actions */}
                    <motion.div
                        className='mt-8 flex items-center gap-8 '
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* Image */}
                <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                    <img src={HomePageGraphic} alt="home-pageGraphic" />
                </div>
            </motion.div>
            {/* Sponsors */}
            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-5'>
                    <div className='mx-auto w-5/6'>
                        <div className=' items-center justify-between gap-2 ' >
                            <HText>Financie sua energia solar em até 36X</HText>
                        </div>
                        <div className='flex w-3/5 items-center justify-between gap-8 mt-2'>
                            <img src={SponsorRedBull} alt="redbull-sponsor" />
                            <img src={SponsorForbes} alt="Forbes-sponsor" />
                            <img src={SponsorFortune} alt="Fortune-sponsor" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}