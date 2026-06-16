import { useState } from 'react';

function ImageGallery({ images }) {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const closeLightbox = () => setLightboxIndex(null);

    const showPrev = () => {
        setLightboxIndex((i) => (i > 0 ? i - 1 : images.length - 1));
    };

    const showNext = () => {
        setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {images.map((image, index) => (
                    <figure key={image.src} className="m-0">
                        <button
                            type="button"
                            onClick={() => setLightboxIndex(index)}
                            className="w-full p-0 border-none bg-transparent cursor-pointer rounded-lg overflow-hidden ring-1 ring-cream-300 hover:ring-accent transition-shadow duration-200"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="w-full h-auto block bg-surface-elevated"
                            />
                        </button>
                        {image.caption && (
                            <figcaption className="mt-2 text-sm text-text-secondary">
                                {image.caption}
                            </figcaption>
                        )}
                    </figure>
                ))}
            </div>

            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 p-4"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                >
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeLightbox();
                        }}
                        className="absolute top-4 right-4 text-white text-2xl leading-none bg-transparent border-none cursor-pointer p-2"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrev();
                        }}
                        className="absolute left-4 text-white text-3xl bg-transparent border-none cursor-pointer p-2"
                        aria-label="Previous image"
                    >
                        &#8249;
                    </button>
                    <img
                        src={images[lightboxIndex].src}
                        alt={images[lightboxIndex].alt}
                        className="max-w-full max-h-[90vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            showNext();
                        }}
                        className="absolute right-4 text-white text-3xl bg-transparent border-none cursor-pointer p-2"
                        aria-label="Next image"
                    >
                        &#8250;
                    </button>
                </div>
            )}
        </>
    );
}

export default ImageGallery;
