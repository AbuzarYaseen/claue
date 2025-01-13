import React from "react";

const StarRating = ({ rating }: any) => {
  // Calculate full, half, and empty stars
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center">
      {/* Render full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={`full-${i}`} className="text-yellow-500">
          ★
        </span>
      ))}

      {/* Render half star */}
      {halfStars > 0 && <span className="text-yellow-500">☆</span>}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">
          ✩
        </span>
      ))}
    </div>
  );
};

export default StarRating;
