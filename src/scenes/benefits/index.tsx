import { HText } from "@/share/HText";
import { BenefitType, SelectedPage } from "@/share/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import { Benefit } from "./Benefit";
import { ActionButton } from "@/share/ActionButton";
import BenefitsPageGraphic from "@/assets/solar_panel.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Economia",
        description: "Com a produção de energia solar é possível reduzir sua conta de luz mensal."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Valorização",
        description:
            "Com energia solar seu imóvel conquista uma valorização de até 6%.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Rentabilidade",
        description:
            "Excelente investimento com retorno garantido em poucos anos (de 2 a 5 anos).",
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};


export const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="beneficios" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Beneficios)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-5/9"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>Vantagens de produzir sua Energia Solar:</HText>
                    <p className="my-5 text-base">
                        A economia na conta de luz, a valorização do imóvel, a fácil instalação e o retorno sobre o investimento são alguns exemplos do que os painéis fotovoltaicos podem oferecer. Além disso, a energia renovável proporcionada pela tecnologia contribui para a preservação do meio ambiente.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                    Cuidamos de todas as etapas, para você não ter nenhuma dor de cabeça.{" "}
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <AnchorLink className='text-sm font-bold  hover:text-secondary-500'
                                    onClick={() => setSelectedPage(SelectedPage.Contato)}
                                    href={`#${SelectedPage.Contato}`}>
                                    <ActionButton setSelectedPage={setSelectedPage} >
                                        Saiba Mais
                                    </ActionButton>
                                </AnchorLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Colocar aqui */}
            </motion.div>
        </section>
    );
}