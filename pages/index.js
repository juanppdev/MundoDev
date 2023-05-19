import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout'
import Header from '../components/header'
import Hero from '../components/hero'
import {MdOutlineDevices} from 'react-icons/md'

export default function Home() {
  return (
    <Layout>
      <title>Inicio | MundoDev</title>
    
        <Header/>
        
        <section class="hero">
               <Hero title="Descubre lo que hacemos" parraf="Hecha un vistazo, explora y ponte al dia con lo que hacemos y si quieres revisa mi portfolio." btn_name="Search for tours" btn_link="/about"/>
        </section>
        <section class="st-flex">
            <div>
                <h1></h1>
            </div>
            <div>
                
            </div>
        </section>
        <hr/>
        <section class="st-service">
            <h1>Que hago?</h1>
            <article class="st-article">
              <div class="icon-size">
                <MdOutlineDevices size={"5rem"}/>
              </div>
              <h3>Diseño y creacion de Paginas web</h3>
              <p>Creo sitios web al estilo del cliente o empresa, y diseñados para cualquier dispositivo.</p>
            </article>
            <article class="st-article">
              <h3></h3>
              <p>Parrafo</p>
            </article>
            <article class="st-article">
              <h3></h3>
              <p>Parrafo</p>
            </article>
            <article class="st-article">
              <h3></h3>
              <p>Parrafo</p>
            </article>
        </section>
        <hr/>
        
    </Layout>
  )
}
