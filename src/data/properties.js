// Centralized property data — structured for easy migration to a real database/API.
// To connect a backend later, replace this array with a fetch() call returning the same shape.

const img = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

// Verified Unsplash photo IDs
const exteriors = [
  '1580587771525-78b9dba3b914', // white/brown concrete building
  '1706808849780-7a04fbac83ef', // modern house with pool
  '1600596542815-ffad4c1539a9', // white concrete building
  '1613977257363-707ba9348227', // modern white villa with pool
  '1613490493576-7fde63acd811', // white/brown concrete building
  '1670589953882-b94c9cb380f5', // building with pool
  '1748063578185-3d68121b11ff', // modern house exterior with lights
  '1628012209120-d9db7abf7eab', // white concrete building
]

const interiors = [
  '1682184805271-11671b7ecf4c', // living room with large window
  '1663811397207-418a92396ad5', // bedroom with large mirror
  '1757924461488-ef9ad0670978', // modern living room with large windows
  '1644057501622-dfa7dd26dbfb', // bedroom with large bed
  '1758448755952-42b404bc6f39', // modern living room with elegant furniture
  '1697947656193-a87d460b5fb5', // living room with furniture and large window
  '1593987314040-8e0ac84ae724', // living room with white sofa
  '1758448755778-90ebf4d0f1e7', // luxurious modern living room
]

const portraits = {
  daniel: '1560250097-0b93528c311a',
  olivia: '1494790108377-be9c29b29330',
  james: '1590086782957-93c06ef21604',
  sophia: '1581065178047-8ee15951ede6',
}

function gallery(extId, ...intIndices) {
  return [
    img(extId, 1600),
    ...intIndices.map((i) => img(interiors[i], 1200)),
  ]
}

export const properties = [
  {
    id: 'lakeside-modern-villa',
    name: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    price: 2350000,
    priceLabel: '$2.35 Million',
    type: 'Villa',
    beds: 5, baths: 4, sqft: 6200,
    featured: true,
    image: img(exteriors[0]),
    gallery: gallery(exteriors[0], 0, 1, 2, 3),
    description: 'A stunning modern villa set on the shores of Lake Austin. Floor-to-ceiling glass walls frame panoramic water views, while warm oak interiors and natural stone create a serene, livable sanctuary. The infinity-edge pool blends seamlessly with the lake beyond.',
    features: ['Infinity pool', 'Smart home automation', 'Wine cellar', 'Private dock', 'Home theater', '3-car garage'],
    amenities: ['Lakefront access', 'Landscaped gardens', 'Outdoor kitchen', 'Fire pit lounge', 'Gym', 'Sauna'],
    agent: { name: 'Daniel Morgan', role: 'Managing Director', phone: '(555) 246-7890', email: 'daniel@horizonproperties.com', photo: img(portraits.daniel, 400) },
  },
  {
    id: 'pacific-glass-house',
    name: 'Pacific Glass House',
    location: 'Malibu, California, USA',
    price: 4800000,
    priceLabel: '$4.8 Million',
    type: 'Modern House',
    beds: 6, baths: 5, sqft: 8400,
    featured: true,
    image: img(exteriors[1]),
    gallery: gallery(exteriors[1], 4, 5, 6, 7),
    description: 'Perched above the Pacific, this architectural marvel dissolves the boundary between interior and ocean. Walls of glass open to expansive terraces, while minimalist interiors by a renowned designer emphasize natural light and ocean breezes.',
    features: ['Ocean-view terrace', 'Glass-walled living room', "Chef's kitchen", 'Rooftop deck', 'Solar panels', 'EV charging'],
    amenities: ['Private beach access', 'Infinity pool', 'Outdoor shower', 'Wine room', 'Media lounge', 'Guest house'],
    agent: { name: 'Olivia Carter', role: 'Luxury Property Advisor', phone: '(555) 246-7891', email: 'olivia@horizonproperties.com', photo: img(portraits.olivia, 400) },
  },
  {
    id: 'desert-horizon-estate',
    name: 'Desert Horizon Estate',
    location: 'Scottsdale, Arizona, USA',
    price: 3150000,
    priceLabel: '$3.15 Million',
    type: 'Estate',
    beds: 4, baths: 4, sqft: 5100,
    featured: true,
    image: img(exteriors[2]),
    gallery: gallery(exteriors[2], 0, 3, 2, 1),
    description: 'A desert modernist masterpiece set against the McDowell Mountains. Rammed-earth walls and weathered steel blend with the landscape, while deep overhangs provide shade and seamless indoor-outdoor living.',
    features: ['Mountain views', 'Resort-style pool', 'Casita guest suite', 'Outdoor fireplace', 'Putting green', 'Smart irrigation'],
    amenities: ['Desert landscaping', 'Pool & spa', 'Outdoor lounge', 'Wine room', 'Exercise studio', '4-car garage'],
    agent: { name: 'James Wilson', role: 'Investment Consultant', phone: '(555) 246-7892', email: 'james@horizonproperties.com', photo: img(portraits.james, 400) },
  },
  {
    id: 'oceanfront-residence',
    name: 'Oceanfront Residence',
    location: 'Miami, Florida, USA',
    price: 5200000,
    priceLabel: '$5.2 Million',
    type: 'Waterfront',
    beds: 6, baths: 6, sqft: 7800,
    featured: true,
    image: img(exteriors[3]),
    gallery: gallery(exteriors[3], 5, 4, 6, 7),
    description: 'A sculptural oceanfront residence on a private stretch of Miami coastline. Polished concrete and teak interiors flow to a sprawling terrace with a vanishing-edge pool that meets the Atlantic horizon.',
    features: ['Direct ocean access', 'Vanishing-edge pool', 'Summer kitchen', 'Elevator', 'Hurricane windows', 'Smart security'],
    amenities: ['Private beach', 'Pool & spa', 'Outdoor dining', 'Wine cellar', 'Home gym', 'Staff quarters'],
    agent: { name: 'Sophia Bennett', role: 'Senior Property Specialist', phone: '(555) 246-7893', email: 'sophia@horizonproperties.com', photo: img(portraits.sophia, 400) },
  },
  {
    id: 'modern-hillside-retreat',
    name: 'Modern Hillside Retreat',
    location: 'Los Angeles, California, USA',
    price: 3750000,
    priceLabel: '$3.75 Million',
    type: 'Modern House',
    beds: 4, baths: 3, sqft: 4500,
    featured: false,
    image: img(exteriors[4]),
    gallery: gallery(exteriors[4], 1, 0, 2, 3),
    description: 'Nestled in the Hollywood Hills, this retreat captures sweeping city views through walls of glass. Clean lines, warm wood, and polished concrete create a calm, sophisticated atmosphere above the city lights.',
    features: ['City light views', 'Glass-walled living', "Chef's kitchen", 'Infinity pool', 'Home office', '2-car garage'],
    amenities: ['Pool deck', 'Outdoor lounge', 'Fire pit', 'Wine storage', 'Smart home', 'Solar power'],
    agent: { name: 'Olivia Carter', role: 'Luxury Property Advisor', phone: '(555) 246-7891', email: 'olivia@horizonproperties.com', photo: img(portraits.olivia, 400) },
  },
  {
    id: 'palm-garden-residence',
    name: 'Palm Garden Residence',
    location: 'Beverly Hills, California, USA',
    price: 6400000,
    priceLabel: '$6.4 Million',
    type: 'Estate',
    beds: 7, baths: 8, sqft: 11200,
    featured: false,
    image: img(exteriors[5]),
    gallery: gallery(exteriors[5], 7, 5, 4, 6),
    description: 'A grand estate in the heart of Beverly Hills, surrounded by mature palms and manicured gardens. Timeless Mediterranean architecture meets contemporary luxury with a resort-style pool, tennis court, and separate guesthouse.',
    features: ['Tennis court', 'Resort pool & spa', 'Guesthouse', 'Formal gardens', 'Wine cellar', '6-car gallery garage'],
    amenities: ['Pool house', 'Outdoor kitchen', 'Putting green', 'Home theater', 'Library', 'Staff wing'],
    agent: { name: 'Daniel Morgan', role: 'Managing Director', phone: '(555) 246-7890', email: 'daniel@horizonproperties.com', photo: img(portraits.daniel, 400) },
  },
  {
    id: 'contemporary-lake-house',
    name: 'Contemporary Lake House',
    location: 'Lake Tahoe, Nevada, USA',
    price: 2950000,
    priceLabel: '$2.95 Million',
    type: 'Modern House',
    beds: 4, baths: 3, sqft: 3800,
    featured: false,
    image: img(exteriors[6]),
    gallery: gallery(exteriors[6], 6, 1, 0, 3),
    description: 'A contemporary lake house wrapped in cedar and stone, designed for year-round mountain living. Walls of glass capture the lake and pines, while a cozy fireplace and heated patio extend the seasons.',
    features: ['Lake views', 'Stone fireplace', 'Heated patio', 'Private dock', 'Hot tub', 'Ski storage'],
    amenities: ['Lakeside deck', 'Fire pit', 'Boat slip', 'Wine room', 'Mudroom', '2-car garage'],
    agent: { name: 'James Wilson', role: 'Investment Consultant', phone: '(555) 246-7892', email: 'james@horizonproperties.com', photo: img(portraits.james, 400) },
  },
  {
    id: 'architectural-downtown-penthouse',
    name: 'Architectural Downtown Penthouse',
    location: 'Austin, Texas, USA',
    price: 1850000,
    priceLabel: '$1.85 Million',
    type: 'Penthouse',
    beds: 3, baths: 3, sqft: 3200,
    featured: false,
    image: img(exteriors[7]),
    gallery: gallery(exteriors[7], 4, 2, 5, 7),
    description: 'A full-floor penthouse atop a landmark downtown tower. Double-height living spaces, a wraparound terrace, and a private rooftop garden deliver the ultimate urban luxury experience with panoramic city views.',
    features: ['360° city views', 'Wraparound terrace', 'Rooftop garden', 'Double-height ceilings', "Chef's kitchen", 'Concierge'],
    amenities: ['Private elevator', 'Rooftop pool access', 'Fitness center', 'Wine storage', '24/7 security', 'Valet parking'],
    agent: { name: 'Sophia Bennett', role: 'Senior Property Specialist', phone: '(555) 246-7893', email: 'sophia@horizonproperties.com', photo: img(portraits.sophia, 400) },
  },
]

export const propertyTypes = ['Villa', 'Modern House', 'Estate', 'Waterfront', 'Penthouse']
export const locations = [...new Set(properties.map((p) => p.location))]

export function getPropertyById(id) {
  return properties.find((p) => p.id === id)
}

export function getSimilarProperties(id, limit = 3) {
  const current = getPropertyById(id)
  if (!current) return []
  return properties
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aScore = (a.location === current.location ? 2 : 0) + (a.type === current.type ? 1 : 0)
      const bScore = (b.location === current.location ? 2 : 0) + (b.type === current.type ? 1 : 0)
      return bScore - aScore
    })
    .slice(0, limit)
}
