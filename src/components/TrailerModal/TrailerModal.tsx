'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { TrailerModalProps } from './trailerModal.types';

export const TrailerModal: FC<TrailerModalProps> = ({ trailerUrl }) => {
  const router = useRouter();

  const videoUrl = `https://www.youtube.com/watch?v=${trailerUrl}`;

  const closeModal = () => {
    router.back();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      data-type="overlay">
      <div className="p-8 border w-auto shadow-lg rounded-md bg-black">
        <div className="text-center">
          <h3 className="text-2xl font-normal text-white">Play Trailer</h3>
          <div className="mt-2 px-7 py-3">
            <ReactPlayer url={videoUrl} controls />
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-indigo-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-white hover:text-indigo-600 duration-500 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
