const portrait = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`

export const teamMembers = [
  {
    id: 'daniel-morgan',
    name: 'Daniel Morgan',
    role: 'Managing Director',
    bio: 'With over 20 years in luxury real estate, Daniel leads Horizon Properties with a vision for architectural excellence and client-first service.',
    photo: portrait('1560250097-0b93528c311a'),
    email: 'daniel@horizonproperties.com',
    phone: '(555) 246-7890',
  },
  {
    id: 'olivia-carter',
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    bio: 'Olivia specializes in waterfront and architectural properties, bringing an eye for design and a deep market knowledge to every transaction.',
    photo: portrait('1494790108377-be9c29b29330'),
    email: 'olivia@horizonproperties.com',
    phone: '(555) 246-7891',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Investment Consultant',
    bio: 'James helps clients build and manage real estate portfolios, combining financial acumen with a passion for smart property investments.',
    photo: portrait('1590086782957-93c06ef21604'),
    email: 'james@horizonproperties.com',
    phone: '(555) 246-7892',
  },
  {
    id: 'sophia-bennett',
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    bio: "Sophia's attention to detail and negotiation expertise have made her one of the most trusted advisors in the premium property market.",
    photo: portrait('1581065178047-8ee15951ede6'),
    email: 'sophia@horizonproperties.com',
    phone: '(555) 246-7893',
  },
]
