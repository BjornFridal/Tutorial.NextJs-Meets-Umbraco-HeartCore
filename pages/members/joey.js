import { motion } from 'framer-motion';
import Link from 'next/link';
import { getBandMember } from '../../lib/api';
import Footer from '../../components/Footer';

export default function Joe({ name, biography }) {
  return (
    <div className="flex h-screen overflow-hidden bg-yellow-200">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: { scale: 0.1, y: 30, opacity: 0 },
          enter: {
            rotate: [270, 0],
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: [0.48, 0.15, 0.25, 0.96]
            }
          }
        }}
      >
        <div className="w-2/5 mx-auto	pt-20">
          <h1 className="text-5xl font-bold mb-5">{name}</h1>
          <p className="text-lg">{biography}</p>
          <GoBack />
        </div>
      </motion.div>

      <Footer htmlTag="div" />
    </div>
  );
}

const GoBack = () => (
  <Link href="/">
    <motion.span whileHover={{ x: 10 }} className="flex cursor-pointer mt-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="h-6 w-6 fill-current text-black mr-2"
      >
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
      </svg>
      <span className="text-lg font-bold uppercase tracking-wider text-black">
        Back
      </span>
    </motion.span>
  </Link>
);

export function getStaticProps() {
  const data = getBandMember();
  return {
    props: { ...data }
  };
}
