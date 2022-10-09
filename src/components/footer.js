import React, { useState } from "react";






function FooterPage(params) {
    const [email,setEmail]=useState('');
    const [body,setBody]=useState('');

    function sendEmail(e) {
        e.preventDefault();
        console.log("hello world")
        window.open(`mailto:shibamnaskar69@gmail.com?subject=${email}&body=${body}`);

        
    }




    return (
        <section className="max-w-xl mt-12 mx-auto px-4">
            <div className="space-y-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Connect With Us
                </h1>
                <p className="text-gray-400 leading-relaxed">
                    Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to send query with your email.
                </p>
            </div>
            <div className="mt-5">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="items-center justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                    />

                    <input
                        type="text"
                        placeholder="Your query"
                        className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                        onChange={(e)=>{
                            setBody(e.target.value);
                        }}
                    />
                    <button
                        className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
                        onClick={(e)=>{
                            console.log("hello");
                            sendEmail(e);
                        }}
                    >
                        Send
                    </button>
                </form>
                <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-400">
                    No spam ever, we are care about the protection of your data.
                    Read our <a className="text-indigo-600 underline" href="/"> Privacy Policy </a>
                </p>
            </div>
        </section>
    )
}

export default FooterPage;