import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY environment variable is not set. Image generation will fail.');
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export interface ImageGenerationOptions {
  prompt: string;
  size?: '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
  style?: 'vivid' | 'natural';
}

export async function generateImage(options: ImageGenerationOptions): Promise<string> {
  const { prompt, size = '1792x1024', quality = 'hd', style = 'vivid' } = options;

  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt,
    n: 1,
    size,
    quality,
    style,
  });

  return response.data?.[0]?.url ?? '';
}

export async function downloadImage(url: string, outputPath: string): Promise<void> {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {}); // Delete partial file
      reject(err);
    });
  });
}

export async function generateAndSaveImage(
  prompt: string,
  outputPath: string,
  options?: Partial<ImageGenerationOptions>
): Promise<string> {
  console.log(`Generating image: ${outputPath}`);
  console.log(`Prompt: ${prompt.substring(0, 100)}...`);
  
  const url = await generateImage({ prompt, ...options });
  await downloadImage(url, outputPath);
  
  console.log(`Saved: ${outputPath}`);
  return outputPath;
}

// Vertical-specific prompts
export const verticalPrompts = {
  'aqua-park': {
    hero: 'Aerial drone photograph of a colorful inflatable water park on a crystal clear lake, sunny summer day with bright blue sky, families and children playing on floating obstacles, water splashing, vibrant colors, photorealistic, professional photography',
    gallery: [
      'Happy family splashing on inflatable water obstacles at an aqua park, summer day, clear blue lake water, joy and excitement, lifestyle photography',
      'Group of teenagers racing across inflatable water park obstacles, action shot, water droplets in air, fun summer activity, professional sports photography',
      'Beautiful sunset over an inflatable water park on a lake, silhouettes of people on obstacles, golden hour lighting, scenic landscape photography',
    ],
  },
  'trampoline-park': {
    hero: 'Modern indoor trampoline park with neon lighting, multiple connected trampolines with foam pits, young people jumping and doing flips, urban sports facility, dynamic action photography, wide angle lens',
    gallery: [
      'Athlete doing a backflip on professional trampoline with neon pink and blue lighting, motion blur, indoor sports facility, action photography',
      'Kids birthday party at trampoline park, children jumping together, colorful decorations, fun atmosphere, lifestyle photography',
      'Foam pit at trampoline park with person jumping in, dramatic lighting, indoor entertainment center, professional photography',
    ],
  },
  'ropes-course': {
    hero: 'Aerial adventure ropes course through tall pine forest, person traversing wooden platforms and rope bridges at height, dappled sunlight through trees, outdoor adventure, professional photography',
    gallery: [
      'Person climbing rope ladder on high ropes course in forest, harness and helmet, adventure activity, natural lighting, action photography',
      'Family on beginner ropes course, parents helping children, safety equipment, forest background, lifestyle photography',
      'Zipline rider flying through forest canopy at adventure park, motion blur, exhilarating outdoor activity, professional action photography',
    ],
  },
  'indoor-playground': {
    hero: 'Colorful multi-level indoor playground with slides, ball pits, climbing structures, and play areas, bright primary colors, children playing happily, modern family entertainment center, professional photography',
    gallery: [
      'Children sliding down colorful tube slides in indoor playground, joy and laughter, primary colors, lifestyle photography',
      'Toddler play area with soft foam blocks and safe equipment, warm lighting, family-friendly environment, professional photography',
      'Birthday party room at indoor playground with decorations, happy children, celebration atmosphere, event photography',
    ],
  },
  'escape-room': {
    hero: 'Mysterious escape room interior with ancient Egyptian theme, hieroglyphics on walls, golden artifacts, dramatic spotlight lighting, puzzle elements visible, atmospheric photography, cinematic style',
    gallery: [
      'Steampunk themed escape room with brass gears, mechanical puzzles, vintage scientific equipment, moody lighting, production design photography',
      'Team solving puzzles in escape room, dramatic lighting, focused expressions, mystery atmosphere, documentary photography',
      'Horror themed escape room corridor with creepy props, dim lighting, fog effects, theatrical set design photography',
    ],
  },
  'climbing-gym': {
    hero: 'Modern indoor climbing gym with tall colorful climbing walls, variety of routes marked with holds, climbers scaling walls, industrial architecture, natural light from skylights, professional sports photography',
    gallery: [
      'Rock climber on overhanging boulder problem, chalk on hands, athletic physique, dramatic side lighting, action sports photography',
      'Children learning to climb with instructor, indoor climbing wall, safety harnesses, supportive environment, lifestyle photography',
      'Lead climber reaching for distant hold on tall indoor wall, rope trailing below, determination, professional sports photography',
    ],
  },
};

