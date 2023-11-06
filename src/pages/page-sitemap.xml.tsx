import type { NextApiResponse } from "next";

function generateSiteMap() {
  return `<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://alfredojdominguez.com/</loc>
		<lastmod>2023-06-16T04:25:05+00:00</lastmod>
	</url>
	<url>
		<loc>https://alfredojdominguez.com/project/1</loc>
		<lastmod>2023-06-04T02:34:10+00:00</lastmod>
	</url>
	<url>
		<loc>https://alfredojdominguez.com/project/2</loc>
		<lastmod>2023-06-04T02:37:50+00:00</lastmod>
	</url>
	<url>
		<loc>https://alfredojdominguez.com/project/3</loc>
		<lastmod>2023-06-16T16:13:51+00:00</lastmod>
	</url>
	<url>
		<loc>https://alfredojdominguez.com/project/4</loc>
		<lastmod>2023-06-20T14:47:29+00:00</lastmod>
	</url>
	<url>
		<loc>https://alfredojdominguez.com/project/5</loc>
		<lastmod>2023-06-11T22:07:14+00:00</lastmod>
	</url>
	<url>
		<loc>https://alfredojdominguez.com/project/6</loc>
		<lastmod>2023-06-16T02:29:31+00:00</lastmod>
	</url>
</urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
