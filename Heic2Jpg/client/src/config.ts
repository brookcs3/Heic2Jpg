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
export const heic2JpgConfig: SiteConfig = {
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
  // OVERRIDE: For Heic2Jpg project, always use Heic2Jpg config
  console.log('USING HEIC2JPG CONFIG: Forced override for Heic2Jpg project');
  return heic2JpgConfig;
}

// Export the current site configuration
export const siteConfig = getSiteConfig();