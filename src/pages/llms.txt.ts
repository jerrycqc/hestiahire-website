import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { site, services } from '../data/site';

export const GET: APIRoute = async () => {
  const stories = (await getCollection('clientStories')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const storyLines = stories
    .map((story) => `- [${story.data.title}](${site.url}/client-stories/${story.id}/): ${story.data.description}`)
    .join('\n');

  const roleLines = services.map((svc) => `- ${svc.title}: ${svc.desc}`).join('\n');

  const body = `# ${site.name}

> ${site.description}

${site.name} places dedicated, full-time remote assistants with SMBs and small agencies. Every placement includes a dedicated success manager and a 90-day replacement guarantee.

## Roles We Place

${roleLines}

## Pages

- [Home](${site.url}/): Overview, fit criteria, roles we place, how it works, and the inquiry form.
- [Pricing](${site.url}/pricing/): Monthly subscription tiers by hours and seniority.
- [Client Stories](${site.url}/client-stories/): Real placements with the outcomes clients got back.

## Client Stories

${storyLines}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
