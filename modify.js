const fs = require('fs');
const file = '/Users/ilyes/Desktop/portfoliodesign/app/projets/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'import { getProjectById } from "@/lib/projects";',
  'import { getProjectById } from "@/lib/projects";\nimport { EdukaDeployment } from "@/components/EdukaDeployment";'
);

const lines = content.split('\n');
const startIdx = lines.findIndex(l => l.includes('{/* Architecture Diagram */}'));
const endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('{/* 3 Cards: Vercel, Docker+AWS, Monitoring */}'));

if (startIdx !== -1 && endIdx !== -1) {
  lines.splice(startIdx + 1, endIdx - startIdx - 1, '                <div className="mb-8"><EdukaDeployment language={language} /></div>\n');
  fs.writeFileSync(file, lines.join('\n'));
  console.log("Successfully replaced block.");
} else {
  console.error("Failed to find boundaries.", startIdx, endIdx);
}
