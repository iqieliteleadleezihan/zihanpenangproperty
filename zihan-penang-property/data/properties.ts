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
    slug:'harbour-one', name:'Harbour One', location:'Bayan Lepas, Penang', area:'Bayan Lepas',
    priceFrom:590000, priceLabel:'From RM5XXK', builtUp:'925 – 950 sqft', bedrooms:'3', tenure:'Leasehold', carParks:'2 side-by-side', furnishing:'Partial', lrt:'~5 min', georgetown:'~25 min', bayanLepas:'~5 min', waterfront:false, rentalPotential:'High', instalment:'From ~RM2,650/mo*',
    image:'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85',
    gallery:['https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85'],
    tags:['Near Bayan Lepas FIZ','Near LRT','Below RM700K','Family Homes'], purposes:['Own Stay','Investment','Rental Income'],
    highlights:['Near Bayan Lepas FIZ','3-bedroom practical layout','Lower entry price'], overview:'A practical three-bedroom option for households and buyers prioritising access to the Bayan Lepas employment corridor.',
    layouts:[{name:'Type A',size:'925 sqft',beds:'3',baths:'2'},{name:'Type B',size:'950 sqft',beds:'3',baths:'2'}], facilities:['Pool','Gym','Jacuzzi','Green deck','Play area'], nearby:['Bayan Lepas FIZ','INTI International College','Penang Bridge','Future LRT'], suitableFor:['First-time family buyers','FIZ workers','Long-term rental investors']
  },
  {
    slug:'gurney-reserve', name:'Gurney Reserve', location:'Tanjung Tokong, Penang', area:'Tanjung Tokong',
    priceFrom:1180000, priceLabel:'From RM1.18M', builtUp:'1,050 – 1,420 sqft', bedrooms:'2–4', tenure:'Freehold', carParks:'2', furnishing:'Partial', lrt:'~12 min', georgetown:'~10 min', bayanLepas:'~30 min', waterfront:true, rentalPotential:'Lifestyle-led', instalment:'From ~RM5,300/mo*',
    image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    gallery:['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'],
    tags:['Waterfront','City Living','Family Homes'], purposes:['Own Stay','Holiday Home'], highlights:['North-east island lifestyle','Near Gurney amenities','Larger family layouts'], overview:'A premium north-east island address focused on lifestyle, convenience and larger layouts.', layouts:[{name:'Type A',size:'1,050 sqft',beds:'2',baths:'2'},{name:'Type C',size:'1,420 sqft',beds:'4',baths:'3'}], facilities:['Infinity pool','Private lounge','Gym','Garden terrace'], nearby:['Gurney Bay','Straits Quay','George Town','Hospitals'], suitableFor:['Upgraders','Families wanting larger layouts','Lifestyle-led second-home buyers']
  },
  {
    slug:'heritage-central', name:'Heritage Central', location:'George Town, Penang', area:'Georgetown',
    priceFrom:880000, priceLabel:'From RM8XXK', builtUp:'680 – 980 sqft', bedrooms:'1–3', tenure:'Freehold', carParks:'1', furnishing:'Fully furnished option', lrt:'~8 min', georgetown:'In city', bayanLepas:'~25 min', waterfront:false, rentalPotential:'High', instalment:'From ~RM3,950/mo*',
    image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    gallery:['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'],
    tags:['City Living','Investment Properties','Holiday Homes'], purposes:['Investment','Holiday Home','Rental Income'], highlights:['Central George Town address','Tourism and business catchment','Compact furnished layouts'], overview:'An urban option for buyers prioritising George Town access and flexible rental-oriented use.', layouts:[{name:'Studio+',size:'680 sqft',beds:'1',baths:'1'},{name:'Type B',size:'980 sqft',beds:'3',baths:'2'}], facilities:['Rooftop pool','Co-working lounge','Gym','Concierge lobby'], nearby:['George Town heritage zone','Komtar','Hospitals','Food streets'], suitableFor:['Urban investors','Second-home buyers','Buyers who want walkable city access']
  },
  {
    slug:'vertu-batu-kawan', name:'Vertu Batu Kawan', location:'Batu Kawan, Penang', area:'Batu Kawan',
    priceFrom:650000, priceLabel:'From RM6XXK', builtUp:'850 – 1,150 sqft', bedrooms:'2–4', tenure:'Freehold', carParks:'2', furnishing:'Partial', lrt:'Future connectivity', georgetown:'~35 min', bayanLepas:'~30 min', waterfront:false, rentalPotential:'Medium', instalment:'From ~RM2,950/mo*',
    image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85',
    gallery:['https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=85'],
    tags:['Family Homes','Below RM700K','Investment Properties'], purposes:['Own Stay','Investment'], highlights:['Growing Batu Kawan hub','Family-sized layouts','Accessible entry point'], overview:'A mainland growth-corridor option for buyers who prioritise newer infrastructure and family space.', layouts:[{name:'Type A',size:'850 sqft',beds:'2',baths:'2'},{name:'Type D',size:'1,150 sqft',beds:'4',baths:'2'}], facilities:['Pool','Gym','Kids zone','BBQ deck','Multipurpose hall'], nearby:['Design Village','IKEA Batu Kawan','Second Penang Bridge','Industrial parks'], suitableFor:['Mainland families','Long-hold investors','Buyers wanting larger space at lower entry cost']
  },
  {
    slug:'quayside-north', name:'Quayside North', location:'Tanjung Tokong, Penang', area:'Tanjung Tokong',
    priceFrom:1450000, priceLabel:'From RM1.45M', builtUp:'1,200 – 1,800 sqft', bedrooms:'3–4', tenure:'Freehold', carParks:'2', furnishing:'Partial', lrt:'~12 min', georgetown:'~12 min', bayanLepas:'~32 min', waterfront:true, rentalPotential:'Lifestyle-led', instalment:'From ~RM6,500/mo*',
    image:'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85',
    gallery:['https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=85'],
    tags:['Waterfront','Family Homes','Holiday Homes'], purposes:['Own Stay','Holiday Home'], highlights:['Seafront-oriented living','Low-density premium feel','Large layouts'], overview:'A premium waterfront choice designed around space, privacy and north-east island lifestyle.', layouts:[{name:'Type A',size:'1,200 sqft',beds:'3',baths:'2'},{name:'Type E',size:'1,800 sqft',beds:'4',baths:'3'}], facilities:['Seafront pool','Residents club','Gym','Garden deck','Function room'], nearby:['Straits Quay','Gurney Bay','International schools','Hospitals'], suitableFor:['Families upgrading','Retirees','Premium holiday-home buyers']
  }
];

export const lifestyles = ['Waterfront','Near LRT','Near Bayan Lepas FIZ','City Living','Family Homes','Investment Properties','Holiday Homes','Below RM700K'];

export const getProperty = (slug:string) => properties.find(p=>p.slug===slug);
