import CaseCard from '../components/CaseCard/CaseCard';
import { getSortedCases } from '../data/cases';

const skills = [
    { category: 'Design', items: ['Figma', 'UX research', 'Design systems', 'Branding'] },
    { category: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML/CSS', 'Vite'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Cursor'] },
];

function Home() {
    const cases = getSortedCases();

    return (
        <>
            <section className="max-w-5xl mx-auto px-5 py-16 sm:py-24">
                <p className="text-sm text-text-secondary mb-3">Portfolio</p>
                <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary mb-4 max-w-2xl">
                    I design and build thoughtful digital experiences.
                </h1>
                <p className="text-lg text-text-secondary max-w-xl">
                    Selected case studies in UX, product design, and frontend development.
                </p>
            </section>

            <section id="work" className="max-w-5xl mx-auto px-5 pb-20">
                <h2 className="text-2xl font-medium text-text-primary mb-8">Selected work</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cases.map((caseItem) => (
                        <CaseCard key={caseItem.slug} {...caseItem} />
                    ))}
                </div>
            </section>

            <section id="skills" className="bg-card border-y border-cream-300">
                <div className="max-w-5xl mx-auto px-5 py-16">
                    <h2 className="text-2xl font-medium text-text-primary mb-8">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {skills.map((group) => (
                            <div key={group.category}>
                                <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-3">
                                    {group.category}
                                </h3>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    {group.items.map((item) => (
                                        <li key={item} className="text-base text-text-primary">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="max-w-5xl mx-auto px-5 py-16">
                <h2 className="text-2xl font-medium text-text-primary mb-4">Get in touch</h2>
                <p className="text-base text-text-secondary mb-6">
                    Open to collaborations and new opportunities.
                </p>
                <a
                    href="mailto:hello@example.com"
                    className="inline-block text-accent hover:underline text-base font-medium"
                >
                    hello@example.com
                </a>
            </section>
        </>
    );
}

export default Home;
