import { Link, useParams } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import TagList from '../components/TagList/TagList';
import Button from '../components/Button/Button';
import { getCaseBySlug } from '../data/cases';

function CaseDetail() {
    const { slug } = useParams();
    const caseItem = getCaseBySlug(slug);

    if (!caseItem) {
        return (
            <div className="max-w-5xl mx-auto px-5 py-24 text-center">
                <h1 className="text-2xl font-medium text-text-primary mb-4">Case not found</h1>
                <p className="text-text-secondary mb-8">
                    The project you are looking for does not exist or has been moved.
                </p>
                <Link to="/" className="text-accent hover:underline">
                    Back to all work
                </Link>
            </div>
        );
    }

    const hasLinks = caseItem.links?.live || caseItem.links?.github;

    return (
        <article className="max-w-5xl mx-auto px-5 py-12 sm:py-16">
            <header className="mb-12">
                <p className="text-sm text-text-secondary mb-2">{caseItem.role}</p>
                <h1 className="font-display text-3xl sm:text-4xl font-medium text-text-primary mb-4">
                    {caseItem.title}
                </h1>
                <p className="text-lg text-text-secondary mb-6 max-w-2xl">{caseItem.description}</p>
                <TagList tags={caseItem.tags} />
                {caseItem.outcome && (
                    <p className="mt-6 text-base text-text-primary">
                        <span className="font-medium">Outcome:</span> {caseItem.outcome}
                    </p>
                )}
            </header>

            <section className="mb-12">
                <h2 className="text-xl font-medium text-text-primary mb-6">Gallery</h2>
                <ImageGallery images={caseItem.images} />
            </section>

            {hasLinks && (
                <div className="flex flex-wrap gap-4">
                    {caseItem.links.live && (
                        <Button label="View live" variant="primary" href={caseItem.links.live} />
                    )}
                    {caseItem.links.github && (
                        <Button label="View on GitHub" variant="secondary" href={caseItem.links.github} />
                    )}
                </div>
            )}
        </article>
    );
}

export default CaseDetail;
