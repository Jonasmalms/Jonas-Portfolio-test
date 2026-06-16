export const cases = [
    {
        slug: 'ecommerce-redesign',
        title: 'E-commerce Redesign',
        summary: 'Modernized checkout flow and mobile experience for a retail brand.',
        description:
            'Led the end-to-end redesign of an e-commerce platform, focusing on conversion optimization and mobile-first layouts. Collaborated with engineering to ship a new checkout flow that reduced cart abandonment.',
        tags: ['UX', 'React', 'Figma'],
        role: 'Lead designer',
        outcome: '18% increase in mobile conversion rate',
        coverImage: '/cases/ecommerce-redesign/cover.svg',
        images: [
            {
                src: '/cases/ecommerce-redesign/01-homepage.svg',
                alt: 'Homepage redesign',
                caption: 'New homepage with clearer product hierarchy',
            },
            {
                src: '/cases/ecommerce-redesign/02-mobile.svg',
                alt: 'Mobile view',
                caption: 'Mobile-first product detail and cart experience',
            },
            {
                src: '/cases/ecommerce-redesign/03-checkout.svg',
                alt: 'Checkout flow',
                caption: 'Streamlined checkout with fewer steps',
            },
        ],
        links: { live: '', github: '' },
        featured: true,
        order: 1,
    },
    {
        slug: 'brand-identity',
        title: 'Brand Identity',
        summary: 'Visual identity system for a Nordic startup.',
        description:
            'Developed a complete brand identity including logo system, color palette, and typography guidelines. Delivered assets ready for web and print use across marketing channels.',
        tags: ['Branding', 'Illustration', 'Design systems'],
        role: 'Brand designer',
        outcome: 'Unified visual language across 4 product touchpoints',
        coverImage: '/cases/brand-identity/cover.svg',
        images: [
            {
                src: '/cases/brand-identity/01-logo.svg',
                alt: 'Logo system',
                caption: 'Primary and secondary logo lockups',
            },
            {
                src: '/cases/brand-identity/02-colors.svg',
                alt: 'Color palette',
                caption: 'Core palette with accessibility-tested contrast ratios',
            },
        ],
        links: { live: '', github: '' },
        featured: false,
        order: 2,
    },
];

export function getCaseBySlug(slug) {
    return cases.find((c) => c.slug === slug) ?? null;
}

export function getSortedCases() {
    return [...cases].sort((a, b) => a.order - b.order);
}
