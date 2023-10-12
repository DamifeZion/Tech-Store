const SliderImages = ({ src, alt, id, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      id={id}
      className={`${className} min-w-full min-h-full object-cover`}
    />
  );
};

export default SliderImages;
