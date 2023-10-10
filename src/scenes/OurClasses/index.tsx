import { ClassType, SelectedPage } from '@/share/types'
import image1 from "@/assets/placa.jpeg";
import image2 from "@/assets/engenheiro.png";
import image3 from "@/assets/pintura.jpg";
import image4 from "@/assets/reforma.jpg";
import image5 from "@/assets/acabamento.jpeg"
import image6 from "@/assets/farmacia1.jpeg"
import image7 from "@/assets/fundação.jpeg"
import image8 from "@/assets/paiver.jpeg"



import { motion } from 'framer-motion';
import { HText } from '@/share/HText';
import Class from '../class/index';


const classes: Array<ClassType> = [
    {
        name: "Instalação de placas solares",
        description: "Sustentabilidade aliado ao conforto e economia.",
        image: image1,
    },
    {
        name: "Acabamento Profissional",
        description: "Rapidez e qualidade, construção da fundação ao acabamento",
        image: image5,
    },
    {
        name: "Construção Civil",
        description: "Prazo e preço, tiramos seu projeto do papel",
        image: image6,
    },
    {
        name: "Fundação ",
        description: "Fundação de toda a obra com qualidade e profissionalismo",
        image: image7,
    },
    {
        name: "Instalação de Piso Drenante",
        description: " Beleza aliado a sustentabilidade. Ecologicamente correto.",
        image: image8,
    },
    {
        name: "Construção Civil",
        description: "Cuidamos de todas as etapas da construção, do projeto ao acabamento",
        image: image2,
    },
    {
        name: "Pintura e Acabamento",
        description: " Acabamento com qualidade, um toque de beleza e qualidade solar",
        image: image3,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="serviços" className="w-full bg-primary-100 py-20 mt-6">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Serviços)}
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
                    <div className="md:w-5/5">
                        <HText>Serviços Prestados</HText>
                        <p className="py-4">
                            Nossa equipe altamente qualificada está pronta para oferecer um atendimento personalizado e responder a todas as suas perguntas. Nosso compromisso é garantir que você tenha uma experiência positiva e sem complicações ao adotar a energia solar.
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