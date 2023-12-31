import { ClassType, SelectedPage } from '@/share/types'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from "@/assets//Sun energy-bro.png";
import { HText } from '@/share/HText';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
    return (
        <section id='contato' className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contato)}>
                {/* HEADER */}
                <motion.div
                    className='md:w-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <HText>
                        <span className='text-primary-500'>ENTRE EM CONTATO </span>
                        E VENHA PARA A SOLAR
                    </HText>
                    <p>Entre em contato conosco para uma avaliação gratuita e personalizada de suas necessidades de energia. Estamos ansiosos para colaborar com você e criar um mundo mais sustentável juntos.</p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className='mt-2 justify-between gap-8 md:flex'>
                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <form
                            target='_blank'
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/marcosandrebahia@gmail.com"
                            method='POST'
                        >
                            <input className={inputStyles}
                                type="text"
                                placeholder="Nome"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "Este campo é obrigatório"}
                                    {errors.name.type === "maxLenght" && "No maximo 100 caracteres"}
                                </p>
                            )}
                            <input className={inputStyles}
                                type="email"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "Este campo é obrigatório"}
                                    {errors.email.type === "pattern" && "E-mail invalido."}
                                </p>
                            )}
                            <textarea
                                className={inputStyles}
                                placeholder="Mensagem"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" &&
                                        "Este campo é obrigatório."}
                                    {errors.message.type === "maxLength" &&
                                        "Tamanho maximo de 2000 caracteres"}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                Enviar
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext ">
                            <img
                                className="w-full"
                                alt="contact-us-page-graphic"
                                src={ContactUsPageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
export default ContactUs;