import { generateImage, downloadImage } from '../lib/generate-image';
import * as path from 'path';

async function fixSplashBay() {
  const outputDir = path.join(process.cwd(), 'public', 'generated', 'logos');

  console.log(`\nRegenerating Splash Bay logo...`);
  
  const prompt = 'Corporate logo design, horizontal layout. On pure white background: teal/blue stylized wave icon on left side, bold black text "SPLASH BAY" on right side. Single clean logo only, minimalist flat design, no multiple versions, no mockups, centered in frame, white background everywhere';
  
  try {
    const imageUrl = await generateImage({ 
      prompt: prompt, 
      size: '1792x1024',
      quality: 'hd',
      style: 'natural'
    });
    
    if (imageUrl) {
      const outputPath = path.join(outputDir, 'logo_splash_bay.png');
      await downloadImage(imageUrl, outputPath);
      console.log(`✓ Saved logo_splash_bay.png`);
    }
  } catch (error) {
    console.error(`✗ Error:`, error);
  }
}

fixSplashBay();

