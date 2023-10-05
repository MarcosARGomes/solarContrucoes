import { SelectedPage } from '@/share/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

export const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
            <div className='mb-4 flex justify-center'>
                <div className='rounded-full border-2 border-gray-100 bg-primary-100'>
                    {icon}
                </div>
            </div>
            <h4 className='font-bold text-xl'>{title}
            </h4>
            <p className='my-3'>{description}</p>
            <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.Contato)}
                href={`#${SelectedPage.Contato}`}>
            </AnchorLink>
        </div>
    )
}