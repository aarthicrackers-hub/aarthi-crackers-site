// Logo utility functions for handling logo display
export const LOGO_FALLBACK = 'A';

// Alternative logo sources in order of preference
export const LOGO_SOURCES = [
  '/logo.png',
  '/assets/logo.png',
  './logo.png'
];

// Check if logo loads successfully
export const checkLogoLoad = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

// Get the first working logo source
export const getWorkingLogoSource = async (): Promise<string | null> => {
  for (const src of LOGO_SOURCES) {
    const isLoaded = await checkLogoLoad(src);
    if (isLoaded) {
      console.log(`Logo loaded successfully from: ${src}`);
      return src;
    }
  }
  console.log('No logo source loaded successfully, using fallback');
  return null;
};
