const canonicalUrl = "https://neoartd.my.id";
const metaImage =
  "https://gapura.uisi.ac.id/assets/upload/user/300x300/3d2825956bd72cdbd02668d0028665ee.JPG";
const metaDescription =
  "Muhammad Muqoffin Nuha - Personal Website. A place where I share my thoughts, projects, and experiences.";

const defaultSEOConfig = {
  defaultTitle: "Muhammad Muqoffin Nuha - Personal Website",
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: "Muhammad Muqoffin Nuha - Personal Website",
    description: metaDescription,
    type: "website",
    images: [
      {
        url: metaImage,
        alt: "neoartd.my.id og-image",
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: "neoartd.my.id og-image",
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: "neoartd.my.id og-image",
        width: 1600,
        height: 900,
      },
    ],
    site_name: "neoartd.my.id",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
