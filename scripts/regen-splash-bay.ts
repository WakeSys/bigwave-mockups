import { generateImage, downloadImage } from '../lib/generate-image';
import * as path from 'path';
import * as fs from 'fs';

const attempts = [
  {
    name: 'attempt1',
    prompt: 'Simple water park logo. Blue ocean wave with water droplets splashing. Text reads "SPLASH BAY" in bold navy blue font. Entire image on solid white background. Clean vector style. No mockups, no variations, single logo centered.',
  },
  {
    name: 'attempt2', 
    prompt: 'Aqua park company logo: A fun cartoon wave with a smiling sun, "SPLASH BAY" written below in playful blue letters. White background only. Flat design, no gradients, no shadows.',
  },
  {
    name: 'attempt3',
    prompt: 'Professional logo for water attraction called Splash Bay. Abstract water splash icon in cyan and blue. Company name in clean sans-serif font. Minimalist design on pure white canvas.',
  },
];

async function regenSplashBay() {
  const outputDir = path.join(process.cwd(), 'public', 'generated', 'logos', 'splash-bay-attempts');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const attempt of attempts) {
    console.log(`\nGenerating ${attempt.name}...`);
    
    try {
      const imageUrl = await generateImage({ 
        prompt: attempt.prompt, 
        size: '1792x1024',
        quality: 'hd',
        style: 'natural'
      });
      
      if (imageUrl) {
        const outputPath = path.join(outputDir, `${attempt.name}.png`);
        await downloadImage(imageUrl, outputPath);
        console.log(`✓ Saved ${attempt.name}.png`);
      }
    } catch (error) {
      console.error(`✗ Error:`, error);
    }
  }

  console.log(`\n✓ Check results in: ${outputDir}`);
}

regenSplashBay();


