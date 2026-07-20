import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b-4 border-black px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="font-headings text-2xl font-black uppercase tracking-tight hover:text-gray-700 transition-colors">
        Nino Mercado
      </Link>
      <div className="hidden sm:flex items-center gap-6 font-bold text-sm sm:text-base">
        <Link href="/#about" className="hover:underline underline-offset-4 decoration-2">About Me</Link>
        <Link href="/#projects" className="hover:underline underline-offset-4 decoration-2">Projects</Link>
        <Link href="/#trajectory" className="hover:underline underline-offset-4 decoration-2">Experience</Link>
      </div>
    </nav>
  );
}
