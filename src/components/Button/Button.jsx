// Button.jsx — Reusable button component.
// Props: label (text), variant ("secondary" | "primary"), href (optional — renders as link)

function Button({ label, variant = "secondary", href }) {
    const base = "inline-block mt-auto w-fit rounded-full px-6 py-3.5 text-base font-medium cursor-pointer border-none transition-colors duration-200 no-underline text-center";

    const variants = {
        secondary: "bg-btn-secondary text-text-primary hover:bg-btn-secondary-hover",
        primary:   "bg-btn-primary text-white hover:bg-btn-primary-hover",
    };

    const className = `${base} ${variants[variant]}`;

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {label}
            </a>
        );
    }

    return (
        <button type="button" className={className}>
            {label}
        </button>
    );
}

export default Button;
