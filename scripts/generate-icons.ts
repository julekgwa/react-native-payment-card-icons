import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { transform } from '@svgr/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface IconEntry {
  name: string;
  flat: string;
  flat_rounded: string;
  logo: string;
  logo_border: string;
  mono: string;
  mono_outline: string;
}

const manifestPath = path.resolve(
  __dirname,
  '../node_modules/@aaronfagan/ccicons/credit-card-payment-icons.json'
);
const svgBasePath = path.resolve(
  __dirname,
  '../node_modules/@aaronfagan/ccicons'
);
const outputDir = path.resolve(__dirname, '../src/icons');

function toPascalCase(str: string): string {
  return str
    .replace(/[-_ ](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase());
}

async function generateIcons(): Promise<void> {
  const raw = fs.readFileSync(manifestPath, 'utf8');
  const icons: IconEntry[] = JSON.parse(raw);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const icon of icons) {
    const baseName = toPascalCase(icon.name);

    for (const style of Object.keys(icon).filter((k) => k !== 'name')) {
      const relPath = icon[style as keyof IconEntry];
      const absPath = path.join(svgBasePath, relPath);

      if (!fs.existsSync(absPath)) {
        console.warn(`Missing SVG: ${absPath}`);
        continue;
      }

      const svgCode = fs.readFileSync(absPath, 'utf8');
      const componentName = `${baseName}${toPascalCase(style)}`;

      const tsxCode = await transform(
        svgCode,
        {
          typescript: true,
          native: true,
          icon: true,
          jsxRuntime: 'automatic',
          plugins: [
            '@svgr/plugin-svgo',
            '@svgr/plugin-jsx',
            '@svgr/plugin-prettier',
          ],
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
              {
                name: 'removeXMLNS',
              },
              {
                name: 'removeAttrs',
                params: {
                  attrs: '(xml.*)',
                },
              },
            ],
          },
        },
        { componentName }
      );

      const outFile = path.join(outputDir, `${componentName}.tsx`);
      fs.writeFileSync(outFile, tsxCode, 'utf8');
      console.log(`✔ Generated: ${componentName}.tsx`);
    }
  }
}

function generateIndexFile() {
  const files = fs.readdirSync(outputDir).filter((f) => f.endsWith('.tsx'));
  const exportLines = files
    .map((f) => {
      const name = path.basename(f, '.tsx');
      return `export { default as ${name} } from './${name}';`;
    })
    .join('\n');

  const indexPath = path.join(outputDir, 'index.ts');
  fs.writeFileSync(indexPath, exportLines, 'utf8');
  console.log(`✔ Generated index.ts with ${files.length} exports`);
}

generateIcons()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(() => {
    generateIndexFile();
  });
