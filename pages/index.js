import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../components/Footer';
import { getBandMembers } from '../lib/api';

export default function Home({ members }) {
  return (
    <div className="relative overflow-hidden bg-yellow-100">
      <div className="flex h-screen -mr-0.5">
        {members.map((member, index) => (
          <BandMember
            {...member}
            slideInFromTop={index % 2 == 1}
            key={member.name}
          />
        ))}
      </div>

      <Footer htmlTag="h1" />
    </div>
  );
}

const BandMember = ({ name, url, slideInFromTop }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { y: slideInFromTop ? '-100vh' : '100vh' },
      visible: { y: 0 }
    }}
    whileHover={{
      scale: 1.2
    }}
    className="flex flex-1 justify-center items-center text-3xl font-bold bg-yellow-200 mr-0.5 text-center hover:bg-yellow-100"
  >
    <Link href={url}>{name}</Link>
  </motion.div>
);

export async function getStaticProps() {
  const members = await getBandMembers();
  return {
    props: { members }
  };
}
