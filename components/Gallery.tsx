import React, { useState } from 'react';

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface GallerySection {
  title: string;
  description: string;
  photos: GalleryPhoto[];
}

interface GalleryProps {
  sections: GallerySection[];
}

const Gallery: React.FC<GalleryProps> = ({ sections }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string } | null>(null);
  const [mobileSlideIndex, setMobileSlideIndex] = useState<{ [key: number]: number }>({});

  const handleNextSlide = (sectionIndex: number, totalPhotos: number) => {
    const currentIndex = mobileSlideIndex[sectionIndex] || 0;
    setMobileSlideIndex({
      ...mobileSlideIndex,
      [sectionIndex]: (currentIndex + 1) % totalPhotos
    });
  };

  const handlePrevSlide = (sectionIndex: number, totalPhotos: number) => {
    const currentIndex = mobileSlideIndex[sectionIndex] || 0;
    setMobileSlideIndex({
      ...mobileSlideIndex,
      [sectionIndex]: (currentIndex - 1 + totalPhotos) % totalPhotos
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Our Spaces</h2>
          <p className="text-stone-600 text-lg">Experience both elegance and nature</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {sections.map((section, sectionIndex) => {
            const currentSlideIndex = mobileSlideIndex[sectionIndex] || 0;
            const currentPhoto = section.photos[currentSlideIndex];

            return (
              <div key={sectionIndex}>
                <h3 className="text-3xl font-serif mb-3">{section.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-8">{section.description}</p>
                
                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-2 gap-4">
                  {section.photos.map((photo, photoIndex) => (
                    <div
                      key={photoIndex}
                      className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group h-48"
                      onClick={() => setSelectedPhoto({ src: photo.src, title: section.title })}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>

                {/* Mobile Carousel View */}
                <div className="md:hidden">
                  <div className="relative rounded-lg overflow-hidden shadow-lg h-72 mb-4 bg-stone-100">
                    <img
                      src={currentPhoto.src}
                      alt={currentPhoto.alt}
                      className="w-full h-full object-cover transition-all duration-500"
                      onClick={() => setSelectedPhoto({ src: currentPhoto.src, title: section.title })}
                    />
                    
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePrevSlide(sectionIndex, section.photos.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-900 rounded-full w-10 h-10 flex items-center justify-center transition-all z-10"
                    >
                      ❮
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={() => handleNextSlide(sectionIndex, section.photos.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-900 rounded-full w-10 h-10 flex items-center justify-center transition-all z-10"
                    >
                      ❯
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {section.photos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setMobileSlideIndex({ ...mobileSlideIndex, [sectionIndex]: index })}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentSlideIndex ? 'bg-white w-6' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Slide Counter */}
                  <div className="text-center text-sm text-stone-500">
                    {currentSlideIndex + 1} of {section.photos.length}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for enlarged photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
