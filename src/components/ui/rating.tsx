'use client';

import * as React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingProps {
  value: number;
  readOnly?: boolean;
  // In the future, you could add onChange, etc.
}

export function Rating({ value, readOnly = true }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    if (value >= starValue) {
      return <FaStar key={index} className="text-yellow-400" />;
    } else if (value >= starValue - 0.5) {
      return <FaStarHalfAlt key={index} className="text-yellow-400" />;
    } else {
      return <FaRegStar key={index} className="text-yellow-400" />;
    }
  });

  return <div className="flex items-center">{stars}</div>;
}
