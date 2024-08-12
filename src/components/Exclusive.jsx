import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Exclusive = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Email is required.');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
            // Show SweetAlert2 success message if validation passes
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
            // Clear the form after showing the alert
            setEmail('');
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) {
            setError(''); // Hide error when user starts typing
        }
    };

    return (
        <div className='container max-w-[1140px] mx-auto px-3'>
            <div className='flex justify-center pt-[180px] max-lg:pt-[120px] max-md:pt-[80px] max-sm:pt-12 pb-[29px]'>
                <div className='flex flex-col text-center'>
                    <h2 className='font_gilroy_medium font-medium text-5xl max-lg:text-4xl max-sm:text-2xl max-sm:leading-6 leading-[57px] text-black'>
                        Get in touch with <span className='text-blue'>Hyperleen</span>
                    </h2>
                    <p className='font-poppins max-sm:text-sm font-normal text-base leading-6 text-gray max-w-[731px] opacity-70 pt-6'>
                        Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events, and more. We’d hate to be annoying, please unsubscribe anytime!
                    </p>
                    <div>
                        <form onSubmit={handleSubmit} className='flex gap-[14px] justify-center pt-6 flex-nowrap max-sm:flex-wrap max-sm:gap-[24px]'>
                            <div className='max-w-[323px] w-full rounded-[16px] bg-[#0000000A] p-4 flex flex-col justify-start'>
                                <input
                                    type="email"
                                    placeholder="Your e-mail"
                                    className="outline-none w-full bg-transparent"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                                {error && (
                                    <p className='text-red-500 text-sm mt-2'>{error}</p>
                                )}
                            </div>
                            <button type="submit" className='font-normal text-lg leading-7 rounded-full shadow-3xl text-white bg-blue hover:text-black px-6 py-2 sm:py-[14px] h-[50px] sm:h-[55px] hover:bg-white border border-white hover:border-black duration-300 ease-linear cursor-pointer shadow-buttonShadow flex items-center justify-center w-fit'>
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;
