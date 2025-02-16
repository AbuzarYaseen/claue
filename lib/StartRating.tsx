import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const StarRating = ({ rating }: { rating: number }) => {
  // Calculate full, half, and empty stars
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center gap-0.5">
      {/* Render full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <IoIosStar key={`full-${i}`} className="text-yellow-500" />
      ))}

      {/* Render half star */}
      {halfStars > 0 && <IoIosStarHalf className="text-yellow-500" />}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <IoIosStarOutline key={`empty-${i}`} className="text-gray-300" />
      ))}
    </div>
  );
};

export default StarRating;
