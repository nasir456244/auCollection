const title =
  'AU Collections – AU Collections is a website where you can submit to us what you would like to get rid off and we will review your collections and come pick it up for Free.';
const description = 'We collect machinery items, car parts, car bodies, exhausts and many more. come sign up today and have us collect what you dont need.';

const SEO = {
  title,
  description,
  canonical: 'https://collection-coral.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://collection-coral.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://collection-coral.vercel.app/icon.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;