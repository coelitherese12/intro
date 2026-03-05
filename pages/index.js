import Head from 'next/head';
import Layout, { siteTitle } from '../Components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><strong>Coeli Therese G. Brillante</strong></p>
        <ul>
          <li>When you think about a "perfect" website, are you more drawn to how it (UI/UX, animations, layouts) or how it (databases, user authentication, logic)? Explain why.</li>
          <p>I am more drawn to the visual and interactive aspects of a website, such as UI/UX and animations, because they directly impact the user's emotional connection and engagement. While backend logic is crucial for functionality, the frontend is what ultimately captures attention and defines the overall experience.</p>
          <li>Are there specific technologies or frameworks you are eager to learn (e.g., React, Tailwind CSS, Node.js, Next.js)?</li>
          <p>I am particularly eager to deepen my expertise in React and Next.js to build scalable, server-side rendered applications. Additionally, mastering Tailwind CSS would allow me to create highly responsive and consistent designs much more efficiently.</p>
          <li>What is one specific feature you’ve seen on a modern website that you’ve always wondered how to build?</li>
          <p>I have always been fascinated by seamless infinite scroll implementations that load content without any noticeable lag or layout shift. I wonder how developers manage the complex state management and performance optimization required to keep that experience smooth across different devices.</p>
        </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}