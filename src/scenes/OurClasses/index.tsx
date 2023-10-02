import { SelectedPage } from '@/share/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import image7 from "@/assets/image7.png";
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export const OurClasses = (setSelectedPage: Props) => {
    return (
        <section id="ourclasses" className='w-full bg-primary-100 py-40'>
            <motion.div>
                
            </motion.div>

        </section>
    )
}