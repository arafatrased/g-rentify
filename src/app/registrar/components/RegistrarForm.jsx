"use client"
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import Button from '@/app/components/Button';
import { registrarUser } from './../../actions/auth/registrarUser';

const RegistrarForm = () => {

    const handleRegistrar = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const payload = {
            name,
            email,
            password
        }
        console.log(payload);
        const registrarSingleUser = await registrarUser(payload);
        console.log(registrarSingleUser);
    }
    return (
        <div className='w-full mx-auto place-content-center'>

            <form onSubmit={handleRegistrar} className='flex flex-col items-center space-y-4'>
                <h1 className="text-3xl font-bold">Registrar</h1>
                <div className="w-full md:w-[80%] relative">
                    <RiAccountCircleLine
                        className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
                    <input
                        type="text"
                        name="name"
                        id="text"
                        placeholder="Full Name"
                        className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                </div>

                {/* password input with icon */}
                <div className="w-full md:w-[80%] relative">
                    <MdOutlineMail
                        className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
                    <input
                        type="eamil"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                </div>

                {/* email input with icon */}
                <div className="w-full md:w-[80%] relative">
                    <RiLockPasswordLine
                        className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                </div>
                <Button buttonText={"Registrar"} type="submit"></Button>
            </form>
        </div>
    );
};

export default RegistrarForm;