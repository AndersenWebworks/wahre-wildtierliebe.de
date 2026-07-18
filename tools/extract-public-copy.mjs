import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import { publicPages } from '../src/site-source.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function normalize(value = '') {
  if (value === null || value === undefined) return '';
  let output = '';
  let pendingSpace = false;
  for (const character of String(value)) {
    const whitespace = character.charCodeAt(0) <= 32;
    if (whitespace) {
      pendingSpace = output.length > 0;
      continue;
    }
    if (pendingSpace) output += ' ';
    output += character;
    pendingSpace = false;
  }
  return output.trim();
}

function collectElements(rootNode, output) {
  const selector = 'h1,h2,h3,p,a,button,label,legend,li,figcaption,option';
  for (const element of rootNode.querySelectorAll(selector)) {
    const value = normalize(element.textContent);
    if (value) output.add(value);
  }
}

const surface = { version: 1, project: 'wahre-wildtierliebe', pages: [] };

for (const page of publicPages) {
  const file = page.slug ? path.join(root, page.slug, 'index.html') : path.join(root, 'index.html');
  const html = await fs.readFile(file, 'utf8');
  const { document } = parseHTML(html);
  const content = new Set();
  collectElements(document.body, content);
  for (const template of document.querySelectorAll('template[data-public-state]')) collectElements(template.content, content);
  for (const element of document.querySelectorAll('[aria-label],[placeholder],img[alt]')) {
    for (const attribute of ['aria-label', 'placeholder', 'alt']) {
      const value = normalize(element.getAttribute(attribute));
      if (value) content.add(value);
    }
  }
  surface.pages.push({
    route: page.slug ? `/${page.slug}/` : '/',
    title: normalize(document.title),
    content: [...content],
  });
}

await fs.mkdir(path.join(root, '.clautz'), { recursive: true });
await fs.writeFile(path.join(root, '.clautz', 'public-copy-surface.json'), `${JSON.stringify(surface, null, 2)}\n`, 'utf8');
