import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

export default function Hero({title, parraf, btn_link, btn_name}) {
  return (
<>
    <div class="hero-content">
         <h1 class="hero-title">
              {title}
         </h1>
         <h2 class="hero-subtitle">
              {parraf}
         </h2>
         
         <button type="button" class="hero-button" onClick="location.href='/about'">
                {btn_name} &raquo;
           </button>
         
      </div>  
  </>

    )
}