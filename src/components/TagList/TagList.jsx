function TagList({ tags }) {
    return (
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {tags.map((tag) => (
                <li
                    key={tag}
                    className="px-3 py-1 text-sm text-text-primary bg-surface-elevated rounded-full"
                >
                    {tag}
                </li>
            ))}
        </ul>
    );
}

export default TagList;
