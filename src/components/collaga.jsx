import React from "react";

const collaga = () => {
  const images = [
    {
      src: "/path/to/image1.jpg",
      size: "w-28",
      top: "top-0",
      left: "left-1/2",
    },
    {
      src: "/path/to/image2.jpg",
      size: "w-10",
      top: "top-20",
      left: "left-1/3",
    },
    {
      src: "/path/to/image3.jpg",
      size: "w-20",
      top: "top-28",
      left: "left-2/3",
    },
    {
      src: "/path/to/image4.jpg",
      size: "w-8",
      top: "top-36",
      left: "left-1/2",
    },
    {
      src: "/path/to/image5.jpg",
      size: "w-24",
      top: "top-40",
      left: "left-1/4",
    },
    {
      src: "/path/to/image6.jpg",
      size: "w-28",
      top: "top-48",
      left: "left-2/3",
    },
    {
      src: "/path/to/image7.jpg",
      size: "w-10",
      top: "top-52",
      left: "left-[30%]",
    },
    {
      src: "/path/to/image8.jpg",
      size: "w-16",
      top: "top-56",
      left: "left-[60%]",
    },
    {
      src: "/path/to/image9.jpg",
      size: "w-14",
      top: "top-64",
      left: "left-[40%]",
    },
    {
      src: "/path/to/image10.jpg",
      size: "w-20",
      top: "top-72",
      left: "left-[50%]",
    },
  ];
  return (
    <div className="relative w-full h-[700px] bg-white">
      {/* Logo */}
      <img
        src="/path/to/logo.png"
        alt="GM Lawason Logo"
        className="absolute w-28 top-64 left-1/3 z-10"
      />

      {/* Image Circles */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={`Collage image ${idx + 1}`}
          className={`absolute ${img.size} ${img.top} ${img.left} rounded-full object-cover border-4 border-white shadow-lg`}
        />
      ))}
    </div>
  );
};

export default collaga;
