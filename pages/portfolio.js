import Link from 'next/link';
import Layout from '../components/layout'
import Header from '../components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <title>portfolio | MundoDev</title>
        <Header/>
        
        <section class="container-portfolio">
          <div class="pfoto">
            <div class="flexbox">
              <figure>
                <Image src=""/>
                <figcaption>Disponible como Freelance</figcaption>
              </figure>
                <a class="downloadCV" href="" download>Descargar CV</a>
            </div>
          </div>
          <div class="description">
            <h1>Hola soy <span class="pname">Juan Pablo</span></h1>
          </div>
          <div class="more-description">
            <div>
              <h5>Edad<span>24 años</span></h5>
              <h5>Email<span>fomundi.fr@gmail.com</span></h5>
            </div>
            <div>
              <h5>Telefono<span>+4917625563008</span></h5>
              <h5>Nacionalidad<span>Colombiano</span></h5>
            </div>
          </div>
        </section>
        
    </Layout>
  )
}
