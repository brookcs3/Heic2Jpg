/**
 * Site configuration
 * This file contains site-specific settings that change based on which
 * domain/brand is being displayed.
 */

// Define conversion mode type
export type ConversionMode = 'avifToJpg' | 'jpgToAvif' | 'heicToJpg';

// Define site configuration types
export interface SiteConfig {
  siteName: string;
  defaultConversionMode: ConversionMode;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  logoText: string;
  domain: string;
}

// Configuration for Heic2Jpg
const heic2JpgConfig: SiteConfig = {
  siteName: 'Heic2Jpg',
  defaultConversionMode: 'heicToJpg',
  primaryColor: '#8b5cf6',    // Purple-500
  secondaryColor: '#7c3aed',  // Purple-600
  accentColor: '#a78bfa',     // Purple-400
  logoText: 'Heic2Jpg',
  domain: 'heic2-jpg.vercel.app'
};

// Configuration for JPGFlip
const jpgFlipConfig: SiteConfig = {
  siteName: 'JPGFlip',
  defaultConversionMode: 'jpgToAvif',
  primaryColor: '#10b981',
  secondaryColor: '#059669',
  accentColor: '#34d399',
  logoText: 'JPGFlip',
  domain: 'jpgflip.com'
};

// Configuration for AVIFlip
const aviFlipConfig: SiteConfig = {
  siteName: 'AVIFlip',
  defaultConversionMode: 'avifToJpg',
  primaryColor: '#3b82f6',    // Blue-500
  secondaryColor: '#2563eb',  // Blue-600
  accentColor: '#60a5fa',     // Blue-400
  logoText: 'AVIFlip',
  domain: 'aviflip.com'
};

// Determine which configuration to use based on hostname and URL parameters
export function getSiteConfig(): SiteConfig {
  // First check URL parameter (any of ?site=jpgflip or ?jpgflip or ?mode=jpgflip)
  const urlParams = new URLSearchParams(window.location.search);
  const forceSite = urlParams.get('site')?.toLowerCase();
  
  // Check for site parameter
  if (forceSite === 'jpgflip') {
    console.log('USING JPGFLIP CONFIG: URL site parameter override');
    return jpgFlipConfig;
  }
  
  if (forceSite === 'aviflip') {
    console.log('USING AVIFLIP CONFIG: URL site parameter override');
    return aviFlipConfig;
  }
  
  if (forceSite === 'heic2jpg') {
    console.log('USING HEIC2JPG CONFIG: URL site parameter override');
    return heic2JpgConfig;
  }
  
  // Check for direct parameter (no value needed)
  if (urlParams.has('jpgflip')) {
    console.log('USING JPGFLIP CONFIG: Direct URL parameter override');
    return jpgFlipConfig;
  }
  
  if (urlParams.has('heic2jpg')) {
    console.log('USING HEIC2JPG CONFIG: Direct URL parameter override');
    return heic2JpgConfig;
  }
  
  // Check for mode parameter
  const mode = urlParams.get('mode')?.toLowerCase();
  if (mode === 'jpgflip') {
    console.log('USING JPGFLIP CONFIG: URL mode parameter override');
    return jpgFlipConfig;
  }
  
  if (mode === 'heic2jpg') {
    console.log('USING HEIC2JPG CONFIG: URL mode parameter override');
    return heic2JpgConfig;
  }
  
  // Then check hostname exactly
  const hostname = window.location.hostname.toLowerCase();
  
  if (hostname === 'jpgflip.com' || hostname === 'www.jpgflip.com') {
    console.log('USING JPGFLIP CONFIG: Hostname match');
    return jpgFlipConfig;
  }
  
  if (hostname === 'aviflip.com' || hostname === 'www.aviflip.com') {
    console.log('USING AVIFLIP CONFIG: Hostname match');
    return aviFlipConfig;
  }
  
  if (hostname === 'heic2-jpg.vercel.app') {
    console.log('USING HEIC2JPG CONFIG: Hostname match');
    return heic2JpgConfig;
  }
  
  // Default to Heic2Jpg config as the primary application
  console.log('USING HEIC2JPG CONFIG: Default fallback');
  return heic2JpgConfig;
}

// Export the current site configuration
export const siteConfig = getSiteConfig();