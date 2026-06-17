// SVG 로고 컴포넌트들

export const YoutubeIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#FF0000"/>
    <path d="M38.5 16.6C38.3 15.8 37.7 15.1 36.9 14.9C35.4 14.5 28 14.5 28 14.5C28 14.5 20.6 14.5 19.1 14.9C18.3 15.1 17.7 15.8 17.5 16.6C17 18.1 17 21.3 17 21.3C17 21.3 17 24.5 17.5 26C17.7 26.8 18.3 27.5 19.1 27.7C20.6 28.1 28 28.1 28 28.1C28 28.1 35.4 28.1 36.9 27.7C37.7 27.5 38.3 26.8 38.5 26C39 24.5 39 21.3 39 21.3C39 21.3 39 18.1 38.5 16.6ZM25.5 24.3V18.3L31.5 21.3L25.5 24.3Z" fill="white"/>
  </svg>
);

export const InstagramIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-grad" x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FED373"/>
        <stop offset="0.25" stopColor="#F15245"/>
        <stop offset="0.5" stopColor="#D92E7F"/>
        <stop offset="0.75" stopColor="#9B36B7"/>
        <stop offset="1" stopColor="#515ECF"/>
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="10" fill="url(#ig-grad)"/>
    <rect x="13" y="13" width="22" height="22" rx="6" stroke="white" strokeWidth="2.5" fill="none"/>
    <circle cx="24" cy="24" r="5.5" stroke="white" strokeWidth="2.5" fill="none"/>
    <circle cx="33" cy="15" r="1.5" fill="white"/>
  </svg>
);

export const ThreadsIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#000000"/>
    <path d="M29.5 22.7C29.3 22.6 29.1 22.5 28.9 22.5C28.9 20 27.1 18.5 24 18.5C22.2 18.5 20.8 19.2 20 20.3L21.7 21.5C22.2 20.8 23 20.5 24 20.5C25.5 20.5 26.5 21.2 26.8 22.5C26 22.4 25.1 22.4 24.2 22.5C21.1 22.8 19 24.3 19 26.8C19 29.3 21.2 30.8 23.8 30.8C25.6 30.8 27.1 30.1 28.2 28.9C29.1 27.9 29.6 26.6 29.6 25C29.6 24.8 29.6 24.6 29.5 24.3C30 24 30.3 23.5 30.3 22.9C30.3 22.9 30 22.8 29.5 22.7ZM24 28.8C22.8 28.8 21.1 28.2 21.1 26.8C21.1 25.6 22.4 24.8 24.3 24.7C25 24.6 25.7 24.7 26.3 24.8C26 27 25.2 28.8 24 28.8Z" fill="white"/>
    <path d="M24 13C18 13 13 18 13 24C13 30 18 35 24 35C30 35 35 30 35 24C35 18 30 13 24 13ZM24 15C28.9 15 33 19.1 33 24C33 28.9 28.9 33 24 33C19.1 33 15 28.9 15 24C15 19.1 19.1 15 24 15Z" fill="white" opacity="0.4"/>
  </svg>
);

export const TiktokIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#010101"/>
    <path d="M32.5 14.5C31.4 13.3 30.8 11.7 30.8 10H27V28.5C27 29.9 25.9 31 24.5 31C23.1 31 22 29.9 22 28.5C22 27.1 23.1 26 24.5 26C24.8 26 25 26.1 25.3 26.1V22.3C24.9 22.2 24.7 22.2 24.5 22.2C21 22.2 18.1 25.1 18.1 28.6C18.1 32.1 21 35 24.5 35C28 35 30.9 32.1 30.9 28.6V19.4C32.3 20.3 33.9 20.8 35.5 20.8V17C34.2 17 33.3 15.9 32.5 14.5Z" fill="white"/>
    <path d="M32.5 14.5C31.4 13.3 30.8 11.7 30.8 10H27V28.5C27 29.9 25.9 31 24.5 31C23.1 31 22 29.9 22 28.5C22 27.1 23.1 26 24.5 26C24.8 26 25 26.1 25.3 26.1V22.3C24.9 22.2 24.7 22.2 24.5 22.2C21 22.2 18.1 25.1 18.1 28.6C18.1 32.1 21 35 24.5 35C28 35 30.9 32.1 30.9 28.6V19.4C32.3 20.3 33.9 20.8 35.5 20.8V17C34.2 17 33.3 15.9 32.5 14.5Z" fill="#FE2C55" opacity="0.4" style={{mixBlendMode: 'multiply'}} transform="translate(-2,0)"/>
    <path d="M32.5 14.5C31.4 13.3 30.8 11.7 30.8 10H27V28.5C27 29.9 25.9 31 24.5 31C23.1 31 22 29.9 22 28.5C22 27.1 23.1 26 24.5 26C24.8 26 25 26.1 25.3 26.1V22.3C24.9 22.2 24.7 22.2 24.5 22.2C21 22.2 18.1 25.1 18.1 28.6C18.1 32.1 21 35 24.5 35C28 35 30.9 32.1 30.9 28.6V19.4C32.3 20.3 33.9 20.8 35.5 20.8V17C34.2 17 33.3 15.9 32.5 14.5Z" fill="#25F4EE" opacity="0.4" style={{mixBlendMode: 'multiply'}} transform="translate(1,0)"/>
  </svg>
);
