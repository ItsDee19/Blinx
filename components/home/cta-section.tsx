import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">Transform your PDFs into beautiful summaries today</p>
        <Link 
          href="/#pricing"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-slate-700 to-rose-600 text-white
           hover:from-slate-800 hover:to-rose-700 transition-colors"
        >
          Start Now
        </Link>
      </div>
    </section>
  );
}