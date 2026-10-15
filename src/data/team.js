const portrait = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`

export const teamMembers = [
  {
    id: 'daniel-morgan',
    name: 'دانیل مورگان',
    role: 'مدیرعامل',
    bio: 'دانیل با بیش از ۲۰ سال تجربه در املاک لوکس، املاک هورایزن را با نگاهی مبتنی بر معماری برتر و خدمت در اولویت مشتری رهبری می‌کند.',
    photo: portrait('1560250097-0b93528c311a'),
    email: 'daniel@horizonproperties.com',
    phone: '(555) 246-7890',
  },
  {
    id: 'olivia-carter',
    name: 'الیویا کارتر',
    role: 'مشاور املاک لوکس',
    bio: 'الیویا در املاک ساحلی و خانه‌های با معماری شاخص تخصص دارد و نگاهی طراحی‌پسند و دانشی عمیق از بازار را به هر معامله می‌آورد.',
    photo: portrait('1494790108377-be9c29b29330'),
    email: 'olivia@horizonproperties.com',
    phone: '(555) 246-7891',
  },
  {
    id: 'james-wilson',
    name: 'جیمز ویلسون',
    role: 'مشاور سرمایه‌گذاری',
    bio: 'جیمز به مشتریان در ساخت و مدیریت پرتفوی املاک کمک می‌کند و هوشمندی مالی را با علاقه به سرمایه‌گذاری درست در املاک می‌آمیزد.',
    photo: portrait('1590086782957-93c06ef21604'),
    email: 'james@horizonproperties.com',
    phone: '(555) 246-7892',
  },
  {
    id: 'sophia-bennett',
    name: 'سوفیا بنت',
    role: 'کارشناس ارشد املاک',
    bio: 'دقت سوفیا در جزئیات و مهارت او در مذاکره، او را به یکی از معتبرترین مشاوران بازار املاک ممتاز تبدیل کرده است.',
    photo: portrait('1581065178047-8ee15951ede6'),
    email: 'sophia@horizonproperties.com',
    phone: '(555) 246-7893',
  },
]
