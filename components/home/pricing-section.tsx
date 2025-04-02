import Link from 'next/link';

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: 9,
    items: ['5 PDF summaries per month'],
    description: 'For the casual user',
    paymentLink: 'https://buy.stripe.com/test_14k8x855555555555555555'
  },
  {
    id: 2,
    name: 'Pro',
    price: 15,
    items: ['Unlimited PDF summaries, 24/7 support'],
    description: 'For the serious user',
    paymentLink: 'https://buy.stripe.com/test_14k8x855555555555555555'
  },
  
];  

const PricingCard = ({ plan }: { plan: any }) => {
  return (
    <div className="relative w-full max-w-lg p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <p className="text-gray-600">{plan.description}</p>
        <p className="text-3xl font-bold">${plan.price}</p>
        <ul className="space-y-2">
          {plan.items.map((item: string, index: number) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-rose-500">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <Link 
          href={plan.paymentLink}
          className="mt-4 inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-slate-700 to-rose-600 text-white hover:from-slate-800 hover:to-rose-700 transition-colors"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};


export default function PricingSection() {
  return (
    <section>
          <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12'>
            <div className='flex items-center justify-center w-full pb-12'>
                <h2 className='text-2xl font-bold mb-8 text-rose-500'>Pricing</h2>
            </div>
            <div className="relative justify-center items-center flex flex-col lg:flex-row
            lg:items-stretch gap-8">
            { plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
                </div>
            </div>
            <div>
          </div>
    </section>
  );
}
