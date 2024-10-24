"use client";
// pages/gallery.js
import Head from 'next/head';
import { useState } from 'react';
import Image from "next/image";

// Daftar gambar
const galleryImages = [
  {
    src: '/BNI citY.jpg',
    alt: 'Project 1 Description',
  },
  {
    src: '/elaina.jpg',
    alt: 'Project 2 Description',
  },
  {
    src: '/garden.jpg',
    alt: 'Project 3 Description',
  },
  {
    src: '/STtheresia.png',
    alt: 'Project 4 Description',
  },
  {
    src: 'cathedral.jpg',
    alt: 'Project 5 Description',
  },
  {
    src: '/forest.jpg',
    alt: 'Project 6 Description',
  },
  {
    src: '/NightJakarta.png',
    alt: 'Project 7 Description',
  },
  // Tambahkan lebih banyak gambar sesuai kebutuhan
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="project" className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Head>
        <title>My Gallery</title>
      </Head>
      <h1 className="text-4xl font-bold text-white mt-10">My Project</h1>
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal(image)}
            />
            <div className="p-4">
              <p className="text-gray-300">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal untuk menampilkan gambar ukuran penuh */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
 