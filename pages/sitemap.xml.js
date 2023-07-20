

export async function getServerSideProps(context) {
  const projectsRaw = require("../data/projects.json")

  // Define custom [slug] routes here & spread them in customPaths array
  const basePaths = ["/"];
  const projectPaths = projectsRaw.map(({slug}) => `/${slug}`);

  const allPaths = [
    ...basePaths,
    ...projectPaths
  ];
  // Stop editing

  context.res.setHeader('Content-Type', 'text/xml');
  context.res.setHeader('Cache-Control', 'public, max-age=604800');
  context.res.write(createSitemap(allPaths));
  context.res.end();

  return {
    props: {},
  };
}

const createSitemap = (paths) => {
  const baseUrl = `https://brishanking.me`;

  return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${paths
            .map((slug) => {
              return `
                  <url>
                      <loc>${baseUrl}${slug}</loc>
                      <lastmod>2023-07-20</lastmod>
                  </url>
              `;
            })
            .join('')}
      </urlset>
      `;
};

export default function Test() {
  return null;
}
