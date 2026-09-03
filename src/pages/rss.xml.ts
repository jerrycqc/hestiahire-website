import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = async (context) => {
  const stories = await getCollection('clientStories');

  return rss({
    title: `${site.name} · Client Stories`,
    description: 'Real HestiaHire placements and the outcomes clients got back.',
    site: context.site ?? site.url,
    items: stories
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((story) => ({
        title: story.data.title,
        description: story.data.description,
        pubDate: story.data.pubDate,
        link: `/client-stories/${story.id}/`,
        categories: [story.data.role],
      })),
  });
};
