# ZiHan Penang Property Discovery

A conversion-first Penang property discovery frontend built with Next.js, React and Tailwind CSS.

## Sitemap
- `/` Homepage
- `/properties` Property directory
- `/properties/[slug]` Reusable property detail pages
- `/find` Property Finder
- `/compare` Up-to-3 property comparison
- `/calculator` Affordability calculator
- `/insights` ZiHan Explains index
- `/insights/[slug]` SEO article template
- `/about` Short personal brand page
- `/contact` Lead + WhatsApp contact page
- `/ads/lighthauz` Navigation-free Google Ads landing page template
- `/sitemap.xml` Generated sitemap
- `/robots.txt` Robots config

## Homepage wireframe
1. Full-bleed Penang hero + 2 CTAs
2. Four-step Property Finder
3. Featured properties
4. Discover by Lifestyle
5. Quick comparison preview
6. Affordability calculator
7. ZiHan Explains / SEO content
8. Short personal positioning + WhatsApp CTA
9. Footer / disclaimers

## Reusable components
- Header / responsive nav
- Footer / disclaimer
- Floating WhatsApp CTA
- PropertyFinder
- PropertyCard
- AffordabilityCalculator
- LeadForm
- SectionHeading

## Property data structure
All listing content lives in `data/properties.ts`. Each object includes:
- Identity: slug, name, location, area
- Commercial: priceFrom, priceLabel, instalment
- Product: builtUp, bedrooms, tenure, carParks, furnishing
- Access: lrt, georgetown, bayanLepas
- Decision attributes: waterfront, rentalPotential, tags, purposes
- Marketing: image, gallery, highlights, overview
- Detail-page modules: layouts, facilities, nearby, suitableFor

This makes cards, filters, comparison and detail pages use one source of truth.

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Production notes
- Replace placeholder property imagery before launch.
- Replace demo property content with verified developer/project information.
- Connect LeadForm to your preferred CRM / webhook / server action.
- Add GA4 + Google Ads conversion event on form success and WhatsApp click.
- Add Meta Pixel / CAPI if required.
- Add consent/cookie handling based on your tracking setup.
- Add JSON-LD Property/Article/Person schema based on final content.
- Consider a headless CMS (Sanity, Contentful, Payload) once listings/articles grow.
