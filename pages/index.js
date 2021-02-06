import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-yellow-100">
      <div className="flex h-screen -mr-0.5">
        <BandMember name="Joey" slideInFromTop={true} />
        <BandMember name="Johnny" slideInFromTop={false} />
        <BandMember name="Dee Dee" slideInFromTop={true} />
        <BandMember name="Tommy" slideInFromTop={false} />
      </div>

      <h1 className="text-5xl font-bold absolute bottom-20 left-0 w-full bg-black text-yellow-200 text-center py-5">
        R.A.M.O.N.E.S
      </h1>
    </div>
  );
}

const BandMember = ({ name, slideInFromTop }) => (
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
    className="flex flex-grow justify-center items-center text-3xl font-bold bg-yellow-200 mr-0.5 text-center hover:bg-yellow-100"
  >
    <Link href="/members/joey">{name}</Link>
  </motion.div>
);
