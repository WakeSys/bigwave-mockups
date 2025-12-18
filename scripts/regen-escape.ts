import { generateImage, downloadImage } from '../lib/generate-image';
import * as path from 'path';
import * as fs from 'fs';

const attempts = [
  {
    name: 'attempt1',
    prompt: 'Escape room logo. Mysterious golden key with keyhole icon. Text "ENIGMA ESCAPE" in elegant dark purple font. White background. Clean vector design, single centered logo, no mockups.',
  },
  {
    name: 'attempt2', 
    prompt: 'Escape room company logo: Vintage lock with question mark inside. "ENIGMA" in mysterious serif font. Deep purple and gold colors. Minimalist design on pure white background.',
  },
  {
    name: 'attempt3',
    prompt: 'Mystery escape room logo for Enigma Escape Rooms. Stylized puzzle piece forming a door. Dark purple and metallic gold. Professional branding, white canvas, horizontal layout.',
  },
];

async function regenEscape() {
  const outputDir = path.join(process.cwd(), 'public', 'generated', 'logos', 'escape-attempts');
  
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

regenEscape();

