import Link from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-yellow-100">
      <div className="flex h-screen -mr-0.5">
        <BandMember name="Joey" url="/members/joey" slideInFromTop={true} />
        <BandMember name="Johnny" url="/members/joey" slideInFromTop={false} />
        <BandMember name="Dee Dee" url="/members/joey" slideInFromTop={true} />
        <BandMember name="Tommy" url="/members/joey" slideInFromTop={false} />
      </div>

      <Footer htmlTag="h1" />
    </div>
  );
}

const BandMember = ({ name, url, slideInFromTop }) => (
  <div className="flex flex-1 justify-center items-center text-3xl font-bold bg-yellow-200 mr-0.5 text-center hover:bg-yellow-100">
    <Link href={url}>{name}</Link>
  </div>
);
