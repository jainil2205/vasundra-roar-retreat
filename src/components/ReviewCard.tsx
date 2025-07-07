import { Star } from "lucide-react";
// import Image from "next/image";

type ReviewCardProps = {
  review: {
    id: number;
    name: string;
    date: string;
    rating: number;
    review: string;
    tags: string[];
    avatar: string;
    images: string[];
  }
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
   
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{review.name}</h4>
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating 
                      ? "text-yellow-400 fill-current" 
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">{review.date}</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{review.review}</p>
      
      {review.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {review.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {review.images.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mt-4">
          {review.images.map((image, index) => (
            <div key={index} className="relative h-20 rounded-md overflow-hidden">
         
            </div>
          ))}
        </div>
      )}
    </div>
  );
};