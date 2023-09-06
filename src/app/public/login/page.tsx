"use client"

import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function Login() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <a className="mr-5 hover:text-gray-900" onClick={() => setVisible(true)}>Login</a>

            <Dialog header="Header" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                    Login
                </p>
            </Dialog>
        </div>
    )
}

export default Login