import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Boutique en ligne de produits bien-être</title>
        <meta name="description" content="Encens bougies, pierres, Pendule, bol, huiles, huiles essentiels, lampe de sel, soin du corps ..." />
        <link rel="canonical" href="https://www.laboutiquedubienetre.net/" />
       
      </Head>
      <main>
        <h1>Bienvenue à la boutique du Bien-Être</h1>
        <p>Découvrez nos produits un bien-être renouvelé.</p>
        <section>
          <h2 className='font-bold underline'>Nos Services</h2>
          <Image src="/path-to-your-image.jpg" alt="Massage Shiatsu" width={640} height={360} />
         
          <p>les encens</p> <p>les encens</p> <p>les bougies</p> <p>les pendules</p> <p>les pierres</p>
          <p>les bols tibétains</p> <p>les huiles essentiels</p>
        </section>

      </main>
    </>
  );
}