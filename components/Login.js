import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';
const Login = () => {
    
    return (
        <div className='grid place-items-center'>
            <Image
                src="https://links.papareact.com/t4i"
                height={400}
                width={400}
                objectFit='contain'
                alt=''
            />
            <h1
                onClick={signIn}
                className='px-5 py-3 bg-blue-500 rounded-full text-center text-white cursor-pointer'>Login with facebook</h1>
            
        </div>
    );
};

export default Login;