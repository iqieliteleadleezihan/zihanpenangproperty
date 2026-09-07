import AffordabilityCalculator from '@/components/AffordabilityCalculator';
export const metadata={title:'Property Affordability Calculator'};
export default function Page(){return <main className="min-h-screen bg-paper pt-28"><div className="container-x py-14"><div className="max-w-3xl"><div className="eyebrow text-ink/40">Affordability calculator</div><h1 className="display mt-3 text-6xl font-semibold md:text-8xl">Know your range before you fall for the brochure.</h1></div><div className="mt-10"><AffordabilityCalculator/></div></div></main>}
