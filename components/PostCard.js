import Link from 'next/link';
import Image from 'next/image'

export default function PostCard({title, imagen, imagen_perfil, categoria, contenido, fecha, nombreAutor, btn_link}) {
    
    const date = new Date(fecha);
    const formatDate = date
    
  return (
      <>
      <Link href={`${title}`}>
        <article class="card">
            <header class="header-card">
                <Image src={imagen} width={1000} height={600} />
            </header>
            <footer class="footer-card">
                <div class="categoria-card">
                    <span>{categoria}</span>
                </div>
                <div class="texto-card">
                    <h3>{title}</h3>
                    <p>{contenido}</p>
                </div>
                <div class="perfil-card">
                    <div class="img-perfil-card">
                        <Image src={imagen_perfil} width={50} height={50}/>
                    </div>
                    <div class="text-perfil-card">
                        <span>{nombreAutor}</span>
                        <span>{formatDate}</span>
                    </div>
                </div>
            </footer>
        </article>
        </Link>
      </>

    )
}