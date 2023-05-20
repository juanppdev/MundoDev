import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout'
import Header from '../components/header'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <title>About | MundoDev</title>
        <Header/>
        <section class="st-flex">
            <div class="Image">
                <h1>Nuestra historia</h1>
                <Image class="img-center" src="/image/logo.png" width={150} height={150}/>
            </div>
            <div>
                <p>MundoDev (Antes conocido como Fomundi) nace de la pasión de un joven por la programación y la fotografía. El nombre "Fomundi" surge de la combinación de "Fo" por "Fotografía", "mun" por "mundo" y "di" por "diseño". Además del diseño, también se enfocan en programación, ya que hay que diseñar algunos aspectos de la programación también.</p>
            <br/>
            <p>Ademas todo esto surge cuando empezó a programar, a seguir cursos en linea y a meterse mas en este mundo de la Programación y más o menos entre 1 o dos años en el mundo de la Fotografia.</p>
            <br/>
            <br/>
            <p class="text-center">
              ATENCION: Fomundi ha cambiado su nombre a "MundoDev", y todos se preguntan porque?, y la  respuesta es que todo lo estoy enfocando mucho a la Programación y todo lo  relacionado con la fotografia lo hare como un Hobby.
            </p>
            </div>
        </section>
        <section class="st-flex">
            <div class="Image">
                <h1>¿Quién está detrás de todo esto?</h1>
            </div>
            <div>
                <p>Mi nombre es Juan Pablo Patino Lopez, tengo 24 años de edad y soy de Colombia</p>
                <br/>
                <p>He aprendido por cuenta propia y aún lo sigo haciendo. Esta es la única web que he podido realizar. Además, quiero poder realizar proyectos con más gente, pero por ahora me gustaría dedicarme a seguir aprendiendo e ir creando proyectos personales.</p>
                <br/>
                <p>Si quieres saber más de mí, te invito a que le des click a <Link href="/portfolio">Portfolio</Link>.</p>
            </div>
        </section>
        
    </Layout>
  )
}
