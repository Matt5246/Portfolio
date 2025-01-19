import * as React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:Matt57628@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div className='flex flex-col text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center md:mb-0 mb-[50px]'>
            <div className='flex flex-col space-y-8 md:space-y-10'>
                <div className='space-y-8 md:space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <Phone className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-lg md:text-2xl'>+48 515 289 007</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <Mail className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-lg md:text-2xl'>matt57628@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPin className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-lg md:text-2xl'>Opole</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full max-w-md mx-auto'>
                        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                            <Input {...register("name")} placeholder="Name" className='contactInput' type="text" />
                            <Input {...register("email")} placeholder="Email" className='contactInput' type="email" />
                        </div>

                        <Input {...register("subject")} placeholder="Subject" className='contactInput' type="text" />

                        <Textarea {...register("message")} placeholder="Message" className='contactInput' />
                        <Button className='bg-[#F7AB0A] py-3 md:py-5 px-8 md:px-10 rounded-md text-black font-bold text-lg'>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
