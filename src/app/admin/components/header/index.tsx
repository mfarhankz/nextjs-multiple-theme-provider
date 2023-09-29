"use client";

import React from "react";
import Image from "next/image";
import configuration from "@/configuration";
import Link from "next/link";
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

function Header() {
  const start = <Link href="/dashboard" className="flex items-center pr-10"><Image src={configuration?.logo} alt="Brand Logo" width={190} height={50} /></Link>;
  const end = <InputText placeholder="Search" type="text" />;
  return (
    <>
      <header className="shadow-xl bg-header">
        <nav className="border-gray-200">
          <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2.2">
            <Menubar model={configuration.routesAdmin} start={start} end={end} className="w-full bg-transparent border-0" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
