import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout'
import Header from '../components/header'
import PostCard from '../components/PostCard'
import axios from 'axios'

export default function Blog({posts = []}) {
  
  const renderPosts = () => {
    if (posts.length === 0) return <h1>Sin Posts publicados</h1>;
    return posts.map((post) => (
      <PostCard title={post.titulo} imagen={post.imagen} imagen_perfil={post.imagen_perfil} categoria={post.categoria} contenido={post.contenido} fecha={post.fecha} nombreAutor={post.nombre_pefil} btn_link={post.btn_link}/>
    ));
  };
  
  return (
      
      <Layout>
        <title>Blog | MundoDev</title>
        <Header/>
        
        <section class="st-blog">
            {renderPosts()}
        </section>
        
      </Layout>
      
  )
}

export const getServerSideProps = async () => {
    const { data: posts } = await axios.get("https://mundodev-juanppdev.vercel.app/posts")

    return {
        props: {
            posts
        },
    };
};