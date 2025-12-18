import { generateImage, downloadImage } from '../lib/generate-image';
import * as path from 'path';
import * as fs from 'fs';

const attempts = [
  {
    name: 'attempt1',
    prompt: 'Adventure park logo. Green pine trees with rope bridge between them. Text "TREELINE ADVENTURES" in earthy brown font below. White background. Clean vector style, single logo centered, no mockups.',
  },
  {
    name: 'attempt2', 
    prompt: 'Aerial ropes course logo: Simple silhouette of person on zipline between two trees. "TREELINE" text in forest green. Minimalist design on pure white background.',
  },
  {
    name: 'attempt3',
    prompt: 'Outdoor adventure logo for ropes course called Treeline Adventures. Mountain and forest icon with climbing rope. Green and brown colors. Professional branding on white canvas.',
  },
];

async function regenRopesCourse() {
  const outputDir = path.join(process.cwd(), 'public', 'generated', 'logos', 'ropes-course-attempts');
  
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

regenRopesCourse();

