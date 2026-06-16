import { Link } from 'react-router-dom';
import TagList from '../TagList/TagList';

function CaseCard({ slug, title, summary, coverImage, tags, featured = false }) {
    return (
        <Link
            to={`/cases/${slug}`}
            className={`group block bg-card rounded-lg overflow-hidden ring-1 ring-cream-300 hover:ring-accent transition-all duration-200 hover:shadow-md ${
                featured ? 'sm:col-span-2' : ''
            }`}
        >
            <div className={`overflow-hidden bg-surface-elevated ${featured ? 'aspect-[21/9]' : 'aspect-video'}`}>
                <img
                    src={coverImage}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
            </div>
            <div className="p-5">
                <h3 className="text-xl font-medium text-text-primary mb-2">{title}</h3>
                <p className="text-base text-text-secondary mb-4">{summary}</p>
                <TagList tags={tags} />
            </div>
        </Link>
    );
}

export default CaseCard;
