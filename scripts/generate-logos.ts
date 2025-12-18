import { generateImage, downloadImage } from '../lib/generate-image';
import * as fs from 'fs';
import * as path from 'path';

const logos = [
  {
    name: 'splash-bay',
    prompt: 'Wide horizontal logo design for "SPLASH BAY" aqua park. Left side: stylized wave icon in teal and blue. Right side: bold modern text "SPLASH BAY". Pure white background #FFFFFF, clean flat vector style, professional branding, horizontal layout 3:1 aspect ratio, no shadows, no gradients on background, centered composition',
  },
  {
    name: 'airzone',
    prompt: 'Wide horizontal logo design for "AIRZONE" trampoline park. Left side: jumping person silhouette icon in orange and purple. Right side: bold modern text "AIRZONE". Pure white background #FFFFFF, clean flat vector style, professional branding, horizontal layout 3:1 aspect ratio, no shadows, no gradients on background, centered composition',
  },
  {
    name: 'funzone-kids',
    prompt: 'Wide horizontal logo design for "FUNZONE KIDS" indoor playground. Left side: colorful ball pit and slide icon. Right side: playful text "FUNZONE KIDS" in rainbow colors. Pure white background #FFFFFF, clean flat vector style, child-friendly, horizontal layout 3:1 aspect ratio, no shadows, centered composition',
  },
  {
    name: 'enigma-escape',
    prompt: 'Wide horizontal logo design for "ENIGMA ESCAPE" escape room. Left side: elegant lock and key icon in purple and gold. Right side: sophisticated text "ENIGMA ESCAPE". Pure white background #FFFFFF, clean flat vector style, mysterious theme, horizontal layout 3:1 aspect ratio, no shadows, centered composition',
  },
  {
    name: 'summit-climbing',
    prompt: 'Wide horizontal logo design for "SUMMIT CLIMBING" gym. Left side: mountain peak with climbing holds icon in orange and charcoal. Right side: bold athletic text "SUMMIT CLIMBING". Pure white background #FFFFFF, clean flat vector style, sports branding, horizontal layout 3:1 aspect ratio, no shadows, centered composition',
  },
];

async function generateLogos() {
  const outputDir = path.join(process.cwd(), 'public', 'generated', 'logos');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const logo of logos) {
    console.log(`\nGenerating logo for ${logo.name}...`);
    
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

  console.log('\n✓ Logo generation complete!');
  console.log(`\nLogos saved to: ${outputDir}`);
  console.log('\nCopy to bigwave with:');
  console.log(`cp ${outputDir}/*.png /Users/chilbo/Sites/wakesys/bigwave/public/logo/`);
}

generateLogos();

