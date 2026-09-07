export type Property = {
  slug: string;
  name: string;
  location: string;
  area: string;
  priceFrom: number;
  priceLabel: string;
  builtUp: string;
  bedrooms: string;
  tenure: 'Freehold' | 'Leasehold';
  carParks: string;
  furnishing: string;
  lrt: string;
  georgetown: string;
  bayanLepas: string;
  waterfront: boolean;
  rentalPotential: 'High' | 'Medium' | 'Lifestyle-led';
  instalment: string;
  image: string;
  gallery: string[];
  tags: string[];
  purposes: string[];
  highlights: string[];
  overview: string;
  layouts: { name: string; size: string; beds: string; baths: string }[];
  facilities: string[];
  nearby: string[];
  suitableFor: string[];
};

export const properties: Property[] = [
  {
    slug:'the-lighthauz', name:'The Lighthauz', location:'Gelugor, Penang', area:'Gelugor',
    priceFrom:760000, priceLabel:'From RM7XXK', builtUp:'732 – 1,001 sqft', bedrooms:'2–3', tenure:'Freehold', carParks:'1–2', furnishing:'Selected package', lrt:'Future station nearby', georgetown:'~12 min', bayanLepas:'~15 min', waterfront:true, rentalPotential:'High', instalment:'From ~RM3,300/mo*',
    image:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    gallery:[
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85'
    ],
    tags:['Waterfront','Near LRT','Holiday Home','Rental Potential'], purposes:['Own Stay','Investment','Holiday Home','Rental Income'],
    highlights:['Waterfront lifestyle','Near future LRT connection','Close to Penang Waterfront Mall'],
    overview:'A compact waterfront-oriented residence in Gelugor for buyers who want island convenience, lifestyle access and flexible own-stay or rental use.',
    layouts:[{name:'Type A',size:'732 sqft',beds:'2',baths:'2'},{name:'Type B',size:'1,001 sqft',beds:'3',baths:'2'}],
    facilities:['Sky pool','Gym','Residents lounge','Landscape deck','Security'],
    nearby:['Penang Waterfront Mall','Penang Bridge','George Town','Bayan Lepas employment belt'],
    suitableFor:['Young couples buying for own stay','Buyers who value waterfront lifestyle','Investors looking for island rental demand']
  },
  {
    slug:'Keeperz Suites', name:'Keeperz Suites', location:'Gelugor, Penang', area:'Gelugor',
    priceFrom:RM8xxk, priceLabel:'From RM8XXK', builtUp:'484 – 581 sqft', bedrooms:'Studio & Dual Keys', tenure:'Freehold', furnishing:'Partial', lrt:'~5 min', georgetown:'~25 min', bayanLepas:'~5 min', waterfront:false, rentalPotential:'High', instalment:'From ~RM2,650/mo*',
    image:'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85',
    gallery:['https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85'],
    tags:['Penang Waterfront Mall','Penang Bridge','George Town','Bayan Lepas employment belt','Near Luxury Mall','Near LRT','Loan from RM700K','Holiday Homes'], purposes:['Investment','Rental Income'],
    highlights:['Near Penang Bridge','Studio / Dual Keys practical layout','Lower entry price'], overview:'A practical three-bedroom option for households and buyers prioritising access to the Bayan Lepas employment corridor.',
    facilities:['Pool','Gym','Jacuzzi','Green deck','Play area'], nearby:['Bayan Lepas FIZ','INTI International College','Penang Bridge','Future LRT'], suitableFor:['Short-term Rental','Rental Income','Investment']
  },
 
];

export const lifestyles = ['Waterfront','Near LRT','Near Bayan Lepas FIZ','City Living','Family Homes','Investment Properties','Holiday Homes','Loan from RM700K'];

export const getProperty = (slug:string) => properties.find(p=>p.slug===slug);
