import React from "react";

const PostCard = () => {
  const cardData = [
    {
      imageUrl: "https://readymadeui.com/cardImg.webp",
      title: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
    },
    {
      imageUrl: "https://readymadeui.com/cardImg.webp",
      title: "Heading 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
    },
    {
      imageUrl: "https://readymadeui.com/cardImg.webp",
      title: "Heading 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
    },
  ];

  return (
    <div className="mt-8 mb-10 mr-6">
      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg overflow-hidden font-[sans-serif] `}
          >
            <img src={card.imageUrl} className="w-full" alt="Card Image" />
            <div className="px-4 py-6">
              <h3 className="text-[#333] text-xl font-bold">{card.title}</h3>
              <p className="mt-4 text-sm text-gray-500">{card.content}</p>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-6 py-2.5 mt-6 mr-2 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
