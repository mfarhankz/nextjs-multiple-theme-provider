"use client"

import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { AiOutlineRight } from 'react-icons/ai';

function Login() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <a className="mr-5 hover:text-gray-900" onClick={() => setVisible(true)}>Login</a>

            <Dialog visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
                <div>
                    <div className="text-center">
                        <h3 className="lg:text-3xl sm:text-xl font-sans text-[#4E4E4E] font-light">
                            Login to your account
                        </h3>
                        <p className="text-sm mb-7 font-sans">
                            Please enter your credentials below.
                        </p>
                    </div>
                    <div>
                        <form className="mb-4">
                            <label className="lg:text-[15px] sm:text-xs text-[#09C5D1] font-sans text-left">
                                Email Address
                            </label>
                            <input type="email" placeholder="E.g. name@company.com" className="px-5 lg:text-[15px] sm:text-xs leading-none py-2 mt-1 border-2 rounded-lg border-slate-200 w-full font-sans " />
                        </form>
                        <form className="mb-4">
                            <label className="lg:text-[15px] sm:text-xs text-[#09C5D1] font-sans text-left">
                                Password
                            </label>
                            <input type="password" placeholder="Password" className="px-5 lg:text-[15px] sm:text-xs leading-none py-2 mt-1 border-2 rounded-lg border-slate-200 w-full font-sans " />
                        </form>
                        <button className="font-sans text-center w-full bg-[#3ca87a] px-[6px] py-[9px] rounded text-white hover:bg-[#52CC98]">
                            Login.
                        </button>
                    </div>
                    <hr className="mt-[20px]" />
                    <div className="py-[20px]">
                        <div className="flex">
                            <div className="w-1/2">
                                <p className="text-sm font-sans">
                                    Password forgotten ?
                                </p>
                                <a className="text-sm font-sans flex hover:underline hover:underline-offset-4" href="#">
                                    Recover it now
                                    <span className="mt-1">
                                        <AiOutlineRight />
                                    </span>
                                </a>
                            </div>
                            <div className="w-1/2">
                                <p className="text-sm font-sans">
                                    Don,t have an account ?
                                </p>
                                <a className="text-sm font-sans flex hover:underline hover:underline-offset-4" href="#">
                                    Get started right now
                                    <span className="mt-1">
                                        <AiOutlineRight />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Login