# Heic2Jpg

A versatile and user-friendly tool for converting HEIC image files to JPG format with high-quality preservation.

## Features

- Simple drag-and-drop interface for uploading HEIC images
- Batch conversion support for multiple files
- High-quality preservation during conversion
- Adjustable compression settings
- Preview functionality before download
- Fast, client-side conversion using modern web technologies
- Cross-platform compatibility (works on any device with a modern browser)
- No file size limits (depends only on your browser's capabilities)
- Privacy-focused: all conversions happen in your browser, no server uploads

## Technologies

- React with TypeScript for frontend
- Vite for fast development and optimized builds
- Web Workers for non-blocking conversion process
- FFMPEG.wasm for image format conversion
- TailwindCSS and shadcn/ui for a clean, responsive interface

## Installation

```bash
# Clone the repository
git clone https://github.com/brookcs3/Heic2Jpg.git
cd Heic2Jpg

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

1. Open the application in your browser (default: http://localhost:5000)
2. Drag and drop HEIC files onto the conversion area (or click to browse)
3. Adjust conversion settings if desired
4. Click "Convert" to process your images
5. Preview the converted JPG images
6. Download individual images or all at once as a ZIP file

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

This project is inspired by other conversion tools like [AviFlip](https://github.com/brookcs3/AviFlip) and builds upon their concepts to provide an easy solution for HEIC to JPG conversion.