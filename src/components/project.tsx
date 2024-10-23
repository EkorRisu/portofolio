// pages/gallery.js
import Head from 'next/head';

const galleryImages = [
  {
    src: '/images/project1.jpg', // Ganti dengan path gambar yang sebenarnya
    alt: 'Project 1 Description',
  },
  {
    src: '/images/project2.jpg',
    alt: 'Project 2 Description',
  },
  {
    src: '/images/project3.jpg',
    alt: 'Project 3 Description',
  },
  {
    src: '/images/project4.jpg',
    alt: 'Project 4 Description',
  },
  {
    src: '/images/project4.jpg',
    alt: 'Project 4 Description',
  },
  {
    src: '/images/project4.jpg',
    alt: 'Project 4 Description',
  },
  // Tambahkan lebih banyak gambar sesuai kebutuhan
];

const Gallery = () => {
  return (
    <div id='project' className="min-h-screen bg-gray-9absolute inset-0 bg-gray-700 opacity-100 flex flex-col items-center">
      <Head>
        <title>My Project</title>
      </Head>
      <h1 className="text-4xl font-bold text-white mt-10">My Project</h1>
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <p className="text-gray-300">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
