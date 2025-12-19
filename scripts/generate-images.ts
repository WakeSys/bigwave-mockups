import { generateAndSaveImage, verticalPrompts } from '../lib/generate-image';
import * as path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'generated');

async function generateAllImages() {
  console.log('Starting image generation...\n');
  
  const verticals = Object.keys(verticalPrompts) as (keyof typeof verticalPrompts)[];
  
  for (const vertical of verticals) {
    console.log(`\n=== Generating images for ${vertical} ===\n`);
    
    const prompts = verticalPrompts[vertical];
    const verticalDir = path.join(OUTPUT_DIR, vertical);
    
    // Generate hero image
    try {
      await generateAndSaveImage(
        prompts.hero,
        path.join(verticalDir, 'hero.png'),
        { size: '1792x1024', quality: 'hd' }
      );
    } catch (error) {
      console.error(`Error generating hero for ${vertical}:`, error);
    }
    
    // Generate gallery images
    for (let i = 0; i < prompts.gallery.length; i++) {
      try {
        await generateAndSaveImage(
          prompts.gallery[i],
          path.join(verticalDir, `gallery-${i + 1}.png`),
          { size: '1024x1024', quality: 'standard' }
        );
      } catch (error) {
        console.error(`Error generating gallery ${i + 1} for ${vertical}:`, error);
      }
      
      // Small delay between requests to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(`\nCompleted ${vertical}\n`);
  }
  
  console.log('\n=== All images generated! ===\n');
}

// Run the script
generateAllImages().catch(console.error);


