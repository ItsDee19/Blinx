import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-4">
          <div className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <div className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-pink-100 transition-colors duration-200 flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
              Powered by AI
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center py-4">
          <span className="relative inline-block">Transform PDFs into{' '}
            <span className="relative inline-block">
              <span className="relative z-10 px-2">concise</span>
              <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
            </span>
          </span>
          {' '}
          summaries
        </h1>
        <h2 className="text-lg text-center py-3 sm:text-xl lg:text-2xl text-gray-600">
          Get a beautiful summary reel of the document in seconds.
        </h2>

        <div className="flex items-center justify-center">
          <Button variant={'link'} className="bg-gradient-to-r from-slate-700 to-rose-600 text-white px-6 py-2 rounded-full hover:from-slate-800 hover:to-rose-700 transition-colors sm:text-lg lg:text-xl sm:px-10 lg:px-12 sm:py-6 lg:py-7 mt-6 lg:mt-12 shadow-lg hover:shadow-xl">
            <Link href="/#pricing">Try Blinx!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}