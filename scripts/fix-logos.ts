import { generateImage, downloadImage } from '../lib/generate-image';
import * as path from 'path';

const logosToFix = [
  {
    name: 'splash-bay',
    prompt: 'Single horizontal logo on PURE WHITE background. Logo shows wave icon in teal/blue on the left, text "SPLASH BAY" on the right in bold blue letters. Clean minimal vector design, no shadows, no other elements, entire background is solid white #FFFFFF, professional branding',
  },
  {
    name: 'airzone',
    prompt: 'Single horizontal logo on PURE WHITE background. Logo shows jumping person silhouette icon on the left in orange, text "AIRZONE" on the right in purple bold letters. Clean minimal vector design, no colored boxes, no shadows, entire background is solid white #FFFFFF, professional branding',
  },
  {
    name: 'enigma-escape',
    prompt: 'Single horizontal logo on PURE WHITE background. Logo shows a simple lock and key icon on the left in purple and gold, text "ENIGMA ESCAPE" on the right in elegant purple letters. Clean minimal vector design, no multiple versions, no shadows, entire background is solid white #FFFFFF, professional branding',
  },
];

async function fixLogos() {
  const outputDir = path.join(process.cwd(), 'public', 'generated', 'logos');

  for (const logo of logosToFix) {
    console.log(`\nRegenerating logo for ${logo.name}...`);
    
    try {
      const imageUrl = await generateImage({ 
        prompt: logo.prompt, 
        size: '1792x1024',
        quality: 'hd',
        style: 'natural'
      });
      
      if (imageUrl) {
        const filename = `logo_${logo.name.replace(/-/g, '_')}.png`;
        const outputPath = path.join(outputDir, filename);
        
        await downloadImage(imageUrl, outputPath);
        console.log(`✓ Saved ${filename}`);
      } else {
        console.error(`✗ Failed to generate logo for ${logo.name}`);
      }
    } catch (error) {
      console.error(`✗ Error generating ${logo.name}:`, error);
    }
  }

  console.log('\n✓ Logo regeneration complete!');
}

fixLogos();


