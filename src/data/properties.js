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
    name: 'ویلای مدرن کنار دریاچه',
    location: 'آستین، تگزاس، آمریکا',
    price: 2350000,
    priceLabel: '۲٫۳۵ میلیون دلار',
    type: 'ویلا',
    beds: 5, baths: 4, sqft: 6200,
    featured: true,
    image: img(exteriors[0]),
    gallery: gallery(exteriors[0], 0, 1, 2, 3),
    description: 'ویلایی مدرن و چشم‌نواز در ساحل دریاچه آستین. دیوارهای شیشه‌ای از کف تا سقف، چشم‌انداز پانوراما از آب را در قاب می‌گیرند و فضای داخلی با چوب بلوط گرم و سنگ طبیعی، پناهگاهی آرام و دلنشین ساخته است. استخر بی‌نهایت در امتداد دریاچه امتداد می‌یابد.',
    features: ['استخر بی‌نهایت', 'سیستم هوشمند خانه', 'انبار شراب', 'اسکله اختصاصی', 'سینمای خانگی', 'پارکینگ سه‌خودرو'],
    amenities: ['دسترسی به دریاچه', 'باغ‌های طراحی‌شده', 'آشپزخانه فضای باز', 'نشیمن کنار آتش', 'سالن ورزشی', 'سونا'],
    agent: { name: 'دانیل مورگان', role: 'مدیرعامل', phone: '(555) 246-7890', email: 'daniel@horizonproperties.com', photo: img(portraits.daniel, 400) },
  },
  {
    id: 'pacific-glass-house',
    name: 'خانه شیشه‌ای پاسیفیک',
    location: 'مالیبو، کالیفرنیا، آمریکا',
    price: 4800000,
    priceLabel: '۴٫۸ میلیون دلار',
    type: 'خانه مدرن',
    beds: 6, baths: 5, sqft: 8400,
    featured: true,
    image: img(exteriors[1]),
    gallery: gallery(exteriors[1], 4, 5, 6, 7),
    description: 'این شاهکار معماری بر فراز اقیانوس آرام، مرز میان فضای داخلی و دریا را برداشته است. دیوارهای شیشه‌ای به تراس‌های وسیع باز می‌شوند و طراحی داخلی مینیمال با نور طبیعی و نسیم دریا، فضایی خیره‌کننده ساخته است.',
    features: ['تراس با چشم‌انداز اقیانوس', 'نشیمن شیشه‌ای', 'آشپزخانه حرفه‌ای', 'روف‌گاردن', 'پنل‌های خورشیدی', 'شارژر خودرو برقی'],
    amenities: ['دسترسی به ساحل خصوصی', 'استخر بی‌نهایت', 'دوش فضای باز', 'اتاق شراب', 'سالن رسانه', 'خانه مهمان'],
    agent: { name: 'الیویا کارتر', role: 'مشاور املاک لوکس', phone: '(555) 246-7891', email: 'olivia@horizonproperties.com', photo: img(portraits.olivia, 400) },
  },
  {
    id: 'desert-horizon-estate',
    name: 'عمارت افق کویر',
    location: 'اسکاتسدیل، آریزونا، آمریکا',
    price: 3150000,
    priceLabel: '۳٫۱۵ میلیون دلار',
    type: 'عمارت',
    beds: 4, baths: 4, sqft: 5100,
    featured: true,
    image: img(exteriors[2]),
    gallery: gallery(exteriors[2], 0, 3, 2, 1),
    description: 'شاهکاری از مدرنیسم کویری در دامنه کوه‌های مک‌داول. دیوارهای خاکی و فولاد زنگ‌خورده با طبیعت اطراف یکی شده‌اند و سایه‌بان‌های عمیق، زندگی درون و بیرون را به هم پیوند می‌دهند.',
    features: ['چشم‌انداز کوهستان', 'استخر در سبک ریزورت', 'سوئیت مهمان', 'شومینه فضای باز', 'زمین گلف کوچک', 'آبیاری هوشمند'],
    amenities: ['محوطه‌سازی کویری', 'استخر و جکوزی', 'نشیمن فضای باز', 'اتاق شراب', 'استودیو ورزش', 'پارکینگ چهارخودرو'],
    agent: { name: 'جیمز ویلسون', role: 'مشاور سرمایه‌گذاری', phone: '(555) 246-7892', email: 'james@horizonproperties.com', photo: img(portraits.james, 400) },
  },
  {
    id: 'oceanfront-residence',
    name: 'اقامتگاه ساحلی اقیانوس',
    location: 'میامی، فلوریدا، آمریکا',
    price: 5200000,
    priceLabel: '۵٫۲ میلیون دلار',
    type: 'ساحلی',
    beds: 6, baths: 6, sqft: 7800,
    featured: true,
    image: img(exteriors[3]),
    gallery: gallery(exteriors[3], 5, 4, 6, 7),
    description: 'اقامتگاهی مجسمه‌وار در نوار خصوصی ساحل میامی. بتن صیقلی و چوب تیک در امتداد تراسی وسیع جریان می‌یابند و استخر بی‌نهایت تا افق اقیانوس اطلس امتداد دارد.',
    features: ['دسترسی مستقیم به اقیانوس', 'استخر بی‌نهایت', 'آشپزخانه تابستانی', 'آسانسور', 'پنجره‌های مقاوم به طوفان', 'سیستم امنیتی هوشمند'],
    amenities: ['ساحل خصوصی', 'استخر و جکوزی', 'ناهارخوری فضای باز', 'انبار شراب', 'سالن ورزشی', 'اتاق کارکنان'],
    agent: { name: 'سوفیا بنت', role: 'کارشناس ارشد املاک', phone: '(555) 246-7893', email: 'sophia@horizonproperties.com', photo: img(portraits.sophia, 400) },
  },
  {
    id: 'modern-hillside-retreat',
    name: 'ویلای مدرن دامنه تپه',
    location: 'لس‌آنجلس، کالیفرنیا، آمریکا',
    price: 3750000,
    priceLabel: '۳٫۷۵ میلیون دلار',
    type: 'خانه مدرن',
    beds: 4, baths: 3, sqft: 4500,
    featured: false,
    image: img(exteriors[4]),
    gallery: gallery(exteriors[4], 1, 0, 2, 3),
    description: 'پناهگاهی در تپه‌های هالیوود که چشم‌انداز وسیع شهر را از میان دیوارهای شیشه‌ای به تصویر می‌کشد. خطوط ساده، چوب گرم و بتن صیقلی، فضایی آرام و شکیل بالاتر از چراغ‌های شهر ساخته‌اند.',
    features: ['چشم‌انداز شبانه شهر', 'نشیمن شیشه‌ای', 'آشپزخانه حرفه‌ای', 'استخر بی‌نهایت', 'دفتر کار خانگی', 'پارکینگ دوخودرو'],
    amenities: ['عرصه استخر', 'نشیمن فضای باز', 'محوطه آتش', 'انبار شراب', 'خانه هوشمند', 'انرژی خورشیدی'],
    agent: { name: 'الیویا کارتر', role: 'مشاور املاک لوکس', phone: '(555) 246-7891', email: 'olivia@horizonproperties.com', photo: img(portraits.olivia, 400) },
  },
  {
    id: 'palm-garden-residence',
    name: 'اقامتگاه باغ نخل',
    location: 'بورلی هیلز، کالیفرنیا، آمریکا',
    price: 6400000,
    priceLabel: '۶٫۴ میلیون دلار',
    type: 'عمارت',
    beds: 7, baths: 8, sqft: 11200,
    featured: false,
    image: img(exteriors[5]),
    gallery: gallery(exteriors[5], 7, 5, 4, 6),
    description: 'عمارتی باشکوه در قلب بورلی هیلز، میان نخل‌های کهن و باغ‌های آراسته. معماری اصیل مدیترانه‌ای در کنار تجمل مدرن، با استخر در سبک ریزورت، زمین تنیس و خانه‌ای مستقل برای مهمان.',
    features: ['زمین تنیس', 'استخر و جکوزی ریزورتی', 'خانه مهمان', 'باغ‌های رسمی', 'انبار شراب', 'پارکینگ شش‌خودرو'],
    amenities: ['خانه استخری', 'آشپزخانه فضای باز', 'زمین گلف کوچک', 'سینمای خانگی', 'کتابخانه', 'بخش کارکنان'],
    agent: { name: 'دانیل مورگان', role: 'مدیرعامل', phone: '(555) 246-7890', email: 'daniel@horizonproperties.com', photo: img(portraits.daniel, 400) },
  },
  {
    id: 'contemporary-lake-house',
    name: 'خانه مدرن کنار دریاچه',
    location: 'دریاچه تاهو، نوادا، آمریکا',
    price: 2950000,
    priceLabel: '۲٫۹۵ میلیون دلار',
    type: 'خانه مدرن',
    beds: 4, baths: 3, sqft: 3800,
    featured: false,
    image: img(exteriors[6]),
    gallery: gallery(exteriors[6], 6, 1, 0, 3),
    description: 'خانه‌ای مدرن کنار دریاچه با پوشش سدر و سنگ، طراحی‌شده برای زندگی چهارفصل در کوهستان. دیوارهای شیشه‌ای دریاچه و درختان کاج را قاب می‌گیرند و شومینه گرم و ایوان گرم‌شده، فصل‌ها را طولانی‌تر می‌کنند.',
    features: ['چشم‌انداز دریاچه', 'شومینه سنگی', 'ایوان گرم‌شده', 'اسکله اختصاصی', 'جکوزی', 'انبار تجهیزات اسکی'],
    amenities: ['تراس کنار دریاچه', 'محوطه آتش', 'جایگاه قایق', 'اتاق شراب', 'اتاق ورودی', 'پارکینگ دوخودرو'],
    agent: { name: 'جیمز ویلسون', role: 'مشاور سرمایه‌گذاری', phone: '(555) 246-7892', email: 'james@horizonproperties.com', photo: img(portraits.james, 400) },
  },
  {
    id: 'architectural-downtown-penthouse',
    name: 'پنت‌هاوس معماری مرکز شهر',
    location: 'آستین، تگزاس، آمریکا',
    price: 1850000,
    priceLabel: '۱٫۸۵ میلیون دلار',
    type: 'پنت‌هاوس',
    beds: 3, baths: 3, sqft: 3200,
    featured: false,
    image: img(exteriors[7]),
    gallery: gallery(exteriors[7], 4, 2, 5, 7),
    description: 'پنت‌هاوسی با مالکیت کامل یک طبقه، بر فراز برج شاخص مرکز شهر. فضاهای دوطبقه، تراسی دورتادور و باغ اختصاصی پشت‌بام، تجربه‌ای بی‌نظیر از زندگی شهری با چشم‌انداز پانوراما از شهر فراهم می‌کند.',
    features: ['چشم‌انداز ۳۶۰ درجه شهر', 'تراس دورتادور', 'باغ پشت‌بام', 'سقف‌های بلند دوطبقه', 'آشپزخانه حرفه‌ای', 'خدمات کانسیرژ'],
    amenities: ['آسانسور اختصاصی', 'دسترسی به استخر پشت‌بام', 'مرکز تناسب اندام', 'انبار شراب', 'امنیت شبانه‌روزی', 'پارکینگ با خدمات ویژه'],
    agent: { name: 'سوفیا بنت', role: 'کارشناس ارشد املاک', phone: '(555) 246-7893', email: 'sophia@horizonproperties.com', photo: img(portraits.sophia, 400) },
  },
]

export const propertyTypes = ['ویلا', 'خانه مدرن', 'عمارت', 'ساحلی', 'پنت‌هاوس']
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
