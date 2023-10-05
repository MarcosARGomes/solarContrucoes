import { ClassType, SelectedPage } from '@/share/types'
import image1 from "@/assets/telhado.jpg";
import image2 from "@/assets/engenheiro.png";
import image3 from "@/assets/pintura.jpg";
import image4 from "@/assets/reforma.jpg";

import { motion } from 'framer-motion';
import { HText } from '@/share/HText';
import Class from './Class';


const classes: Array<ClassType> = [
    {
        name: "Wieght Training Classses",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a corrupti rem debitis?",
        image: image1,
    },
    {
        name: "Wieght Training Classses",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a corrupti rem debitis?",
        image: image2,
    },
    {
        name: "Wieght Training Classses",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a corrupti rem debitis?",
        image: image3,
    },
    {
        name: "Wieght Training Classses",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a corrupti rem debitis?",
        image: image4,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}