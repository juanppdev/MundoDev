import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import {MdOutlineClear} from 'react-icons/md';
import {IoReorderFourSharp} from 'react-icons/io5';
import Image from 'next/image'

export default function Header() {
    
    const [activeBtn, setActiveBtn] = useState(false)
    
    const handleClick = () => {
        setActiveBtn(!activeBtn)
    };
    
    
    const discord = "https://discord.gg/SDtfeZFCBB"
  return (
      <>
        <header class="header-header">
            <nav class="container">
                <div class="container-logo">
                <Image src="/image/logo.png" width={30} height={30}/>
                    <h1>MundoDev</h1>
                </div>
                <div class="btn-toggle" onClick={handleClick}>
                        {activeBtn ? <MdOutlineClear/> : <IoReorderFourSharp/>}
                </div>
                <ul class={activeBtn ? "coontainer-expanded" : "container-links"}>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/about">Quienes Somos</Link></li>
                    <li><Link href="/">Fomtal</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href={discord}>Discord</Link></li>
                </ul>
            </nav>
        </header>
      </>
  )
}