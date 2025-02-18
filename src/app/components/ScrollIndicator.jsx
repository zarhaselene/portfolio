const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm   flex flex-col items-center">
      <span className="w-1.5 h-1.5 bg-secondary rounded-full absolute -top-2 left-1/2 -translate-x-1/2 animate-moveAndFade"></span>
      <span>Scroll to Explore</span>
    </div>
  );
};

export default ScrollIndicator;
