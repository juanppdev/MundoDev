import axios from 'axios'
import Layout from '../components/layout'
import Header from '../components/header'
import Image from 'next/image'

export default function Blog({post}) {
    
    const date = new Date(post.fecha);
    const formatDate = date.toISOString().substring(0,10)
  
  return (
      
      <Layout>
        <Header/>
        
        <section class="st-post">
            <div class="component-bread">
                <ul class="breadcrumb">
                    <li><a href="/blog">blog</a></li>
                    <li>{post.titulo}</li>
                </ul>
            </div>
            
            <div class="component-blog">
                <h1 class="mt-2">{post.titulo}</h1>
                <h6 class="m-negative">por: {post.nombre_pefil} | {formatDate}</h6>
                <p>{post.contenido}</p>
            </div>
            <div class="image-container mt-2">
                <Image src={post.imagen} layout="fill" className={'image'} />
            </div>
        </section>
        
      </Layout>
      
  )
}

export const getServerSideProps = async ({ query }) => {
    const { data: post } = await axios.get("https://mundodev-juanppdev.vercel.app/api/posts/" + query.id
    );
    
    console.log(post)

    return {
        props: {
            post,
        },
    };
};

/*

            <div class="component-blog">
                <div class="chip">
                <h4>Autor</h4>
                    <Image src={post.imagen_perfil} width={96} height={96}/>
                    {post.nombre_pefil}
                </div>
                <div class="chip">
                <h4>Fecha</h4>
                    {formatDate}
                </div>
            </div>
            
            <h1 class="text-center">{post.titulo}</h1>
            
            <div>
                <p class="m-2">
                  {post.contenido}  
                </p>
            </div>
            <Image src={post.imagen} width={550} height={150}/>
*/