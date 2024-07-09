import Head from 'next/head';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - Kakao Tech</title>
        <meta name="description" content="Learn more about Kakao Tech, our mission, and our team." />
      </Head>
      <Header />
      <main className="container mx-auto py-8">
        <section>
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to Kakao Tech. We are committed to creating innovative technology solutions that make life better.
          </p>
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="mb-4">
            Our mission is to leverage technology to bring people together, making communication and collaboration easier and more enjoyable.
          </p>
          <h2 className="text-2xl font-bold mb-2">Our Team</h2>
          <p className="mb-4">
            We have a diverse team of engineers, designers, and product managers who are passionate about building great products.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or would like to get in touch, please email us at <a href="mailto:info@kakao.com" className="text-blue-600">info@kakao.com</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
