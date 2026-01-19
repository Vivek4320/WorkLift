/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Type declarations for CSS imports
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Type declarations for swiper CSS imports
declare module 'swiper/css';
declare module 'swiper/css/pagination';
declare module 'swiper/css/navigation';
declare module 'swiper/css/effect-fade';
