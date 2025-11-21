import React from 'react';

/**
 * Composant ReviewCard pour les avis clients
 */
const ReviewCard = ({ text, author, team, image, isMiddle = false }) => {
  return (
    <div
      className={`bg-[#1E293B80] border border-slate-custom rounded-3xl p-8 h-full     ${
        isMiddle ? 'transform md:translate-y-8' : ''
      }`}
    >
      {/* Texte du avis */}
      <p className="text-[#F1F5F9] font-semibold leading-6 mb-3">
        "{text}"
      </p>

      {/* Auteur */}
      <div className="flex gap-3">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-bold text-sm leading-6">{author}</p>
          <p className="text-gray-review-text text-xs leading-4">{team}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
