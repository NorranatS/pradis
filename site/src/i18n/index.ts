export type Lang = 'th' | 'en';
export const langs: Lang[] = ['th', 'en'];

type Dict = Record<string, { th: string; en: string }>;

export const ui = {
  'nav.featured': { th: 'ชิ้นเด่น', en: 'Featured' },
  'nav.collection': { th: 'ผลงานทั้งหมด', en: 'Collection' },
  'nav.story': { th: 'เรื่องของแม่', en: 'Our story' },
  'nav.order': { th: 'วิธีสั่งทำ', en: 'How to order' },
  'cta.contact': { th: 'ทักหาแม่', en: 'Contact Mom' },
  'cta.order': { th: 'สั่งทำใบนี้', en: 'Order this one' },
  'cta.orderShort': { th: 'สั่งทำ', en: 'Order' },
  'cta.seeAll': { th: 'ดูผลงานทั้งหมด', en: 'See the collection' },
  'cta.details': { th: 'ดูรายละเอียด', en: 'View details' },
  'price.from': { th: 'เริ่มต้น', en: 'From' },
  'unit.hours': { th: 'ชม.', en: 'hrs' },
  'unit.hoursLong': { th: 'ชั่วโมงในการทำ', en: 'hours to make' },
  'label.material': { th: 'วัสดุ', en: 'Material' },
  'label.technique': { th: 'เทคนิค', en: 'Technique' },
  'label.size': { th: 'ขนาด', en: 'Size' },
  'label.colours': { th: 'สี', en: 'Colour' },
  'label.time': { th: 'เวลาทำ', en: 'Making time' },
  'label.anyColour': { th: 'สั่งทำได้ทุกสี', en: 'Any colour to order' },
  'label.anyCloth': { th: 'สั่งทำได้ตามผ้าที่มี', en: 'Made to order in the cloths available' },
  'label.no': { th: 'ชิ้นที่', en: 'No.' },
  'order.title': { th: 'สั่งทำกับแม่', en: 'Order from Mom' },
  'order.lead': { th: 'เลือกช่องทางที่สะดวก ข้อความด้านล่างจะถูกคัดลอกให้ วางในแชทได้เลย', en: 'Pick a channel. We’ll copy the message below for you; just paste it in the chat.' },
  'order.copy': { th: 'คัดลอกข้อความ', en: 'Copy message' },
  'order.copied': { th: 'คัดลอกข้อความแล้ว วางในแชทได้เลย', en: 'Message copied. Just paste it in the chat.' },
  'order.close': { th: 'ปิด', en: 'Close' },
  'order.general': { th: 'สวัสดีค่ะ สนใจสั่งทำผลงานของแม่ประดิษฐ์ค่ะ', en: 'Hello! I’m interested in ordering from Mae Pradit.' },
  'order.piece': { th: 'สวัสดีค่ะ สนใจ', en: 'Hello! I’m interested in' },
  'order.pieceEnd': { th: ' ค่ะ', en: '.' },
  'filter.all': { th: 'ทั้งหมด', en: 'All' },
  'filter.search': { th: 'ค้นหาในสมุด… ชื่อ สี หรือวัสดุ', en: 'Search the notebook… name, colour or material' },
  'filter.colour': { th: 'สี', en: 'Colour' },
  'filter.type': { th: 'ประเภท', en: 'Type' },
  'filter.material': { th: 'วัสดุ', en: 'Material' },
  'filter.status': { th: 'สถานะ', en: 'Availability' },
  'filter.sort': { th: 'เรียง', en: 'Sort' },
  'filter.newest': { th: 'ใหม่ล่าสุด', en: 'Newest' },
  'filter.priceLow': { th: 'ราคาน้อยไปมาก', en: 'Price: low to high' },
  'filter.priceHigh': { th: 'ราคามากไปน้อย', en: 'Price: high to low' },
  'filter.count': { th: 'ชิ้น', en: 'pieces' },
  'filter.empty': { th: 'ไม่พบชิ้นงานที่ตรงกัน ลองล้างตัวกรองดูนะ', en: 'Nothing matches. Try clearing the filters.' },
  'filter.clear': { th: 'ล้างตัวกรอง', en: 'Clear filters' },
  'related': { th: 'ชิ้นอื่นที่น่าจะชอบ', en: 'You may also like' },
  'mobile.contact': { th: 'ชอบชิ้นไหน ทักหาแม่ได้เลย', en: 'Love a piece? Message Mom' },
  'footer.made': { th: 'ทำด้วยมือ ในประเทศไทย', en: 'Made by hand in Thailand' },
  'footer.dummy': { th: 'รูปและข้อมูลสินค้าเป็นตัวอย่างชั่วคราว', en: 'Product photos and details are temporary placeholders' },
} satisfies Dict;

/** The two product lines of แม่ประดิษฐ์ */
export const lines = {
  knit: {
    th: 'ประดิษฐ์ถัก', en: 'Pradit Knit',
    motto: { th: 'ถักด้วยมือเท่านั้น เครื่องจักรเลียนแบบไม่ได้', en: 'Crocheted only by hand. No machine can copy it.' },
    about: { th: 'ทุกชิ้นถักด้วยมือทีละห่วง จากไหมพรมและเชือกฟอกนิ่ม', en: 'Every piece is crocheted loop by loop, by hand, in yarn and soft rope.' },
    materials: ['yarn', 'soft-rope'],
    types: ['hat', 'shoulder-bag', 'phone-bag', 'coaster', 'other'],
  },
  craft: {
    th: 'ประดิษฐ์คราฟท์', en: 'Pradit Craft',
    motto: { th: 'ทักษะเฉพาะตัว ผสานความคิดสร้างสรรค์และภูมิปัญญา', en: 'Personal skill, creativity and local wisdom, made into one piece.' },
    about: { th: 'ชิ้นงานทำมือจากผ้าพื้นเมือง มีเอกลักษณ์และมีคุณค่าทางจิตใจ', en: 'Handmade pieces in local Thai cloth, each one unique and full of meaning.' },
    materials: ['local-cloth'],
    types: ['tee', 'handbag', 'purse', 'other'],
  },
} as const;
export type Line = keyof typeof lines;

export const types = {
  hat: { th: 'หมวก', en: 'Hats' },
  'shoulder-bag': { th: 'กระเป๋าสะพาย', en: 'Shoulder bags' },
  'phone-bag': { th: 'กระเป๋าใส่โทรศัพท์', en: 'Phone bags' },
  coaster: { th: 'ที่รองแก้ว', en: 'Coasters' },
  tee: { th: 'เสื้อยืด', en: 'T-shirts' },
  handbag: { th: 'กระเป๋าถือ', en: 'Handbags' },
  purse: { th: 'กระเป๋าใส่เงิน', en: 'Purses' },
  other: { th: 'อื่น ๆ', en: 'Other' },
} satisfies Dict;

export const statuses = {
  ready: { th: 'พร้อมส่ง', en: 'Ready to ship' },
  'made-to-order': { th: 'สั่งทำ', en: 'Made to order' },
  'coming-soon': { th: 'เร็ว ๆ นี้', en: 'Coming soon' },
} satisfies Dict;

export const colours: Record<string, { th: string; en: string; hex: string }> = {
  sage: { th: 'เซจ', en: 'Sage', hex: '#9DB197' },
  rose: { th: 'กุหลาบ', en: 'Rose', hex: '#D9A0A3' },
  indigo: { th: 'คราม', en: 'Indigo', hex: '#2E4A86' },
  mustard: { th: 'มัสตาร์ด', en: 'Mustard', hex: '#C9A54A' },
  terracotta: { th: 'ดินเผา', en: 'Terracotta', hex: '#C26E50' },
  lilac: { th: 'ไลแลค', en: 'Lilac', hex: '#A79BC4' },
  cream: { th: 'ครีม', en: 'Cream', hex: '#EFE6D2' },
  sky: { th: 'ฟ้า', en: 'Sky', hex: '#8FB4D6' },
  blush: { th: 'ชมพูอ่อน', en: 'Blush', hex: '#E8B9B5' },
  apricot: { th: 'แอปริคอต', en: 'Apricot', hex: '#DD8D57' },
  olive: { th: 'มะกอก', en: 'Olive', hex: '#8C8A4E' },
  chocolate: { th: 'โกโก้', en: 'Cocoa', hex: '#7A5038' },
  navy: { th: 'กรมท่า', en: 'Navy', hex: '#2A3A62' },
  mint: { th: 'มิ้นต์', en: 'Mint', hex: '#9FD3BD' },
  sunflower: { th: 'ทานตะวัน', en: 'Sunflower', hex: '#EDCB55' },
  brick: { th: 'ส้มอิฐ', en: 'Brick', hex: '#D98B73' },
};

export const materials: Record<string, { th: string; en: string }> = {
  yarn: { th: 'ไหมพรม', en: 'Yarn' },
  'soft-rope': { th: 'เชือกฟอกนิ่ม', en: 'Soft rope yarn' },
  'local-cloth': { th: 'ผ้าพื้นเมือง', en: 'Local handwoven cloth' },
  'indigo-cloth': { th: 'ผ้าคราม', en: 'Indigo cloth' },
  'thai-silk': { th: 'ไหมไทย', en: 'Thai silk' },
  cotton: { th: 'ผ้าฝ้าย', en: 'Cotton' },
  denim: { th: 'ผ้ายีนส์', en: 'Denim' },
  'embroidery-thread': { th: 'ไหมปัก', en: 'Embroidery thread' },
};

export function t(lang: Lang, key: keyof typeof ui) {
  return ui[key][lang];
}

/** Site base path, e.g. "/pradis" on GitHub Pages, "" locally. */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Path for a page in a language. Thai lives at the root, English under /en. */
export function href(lang: Lang, path = '/') {
  const clean = path.startsWith('/') ? path : '/' + path;
  return base + (lang === 'en' ? (clean === '/' ? '/en/' : '/en' + clean) : clean);
}

/** The same page in the other language. */
export function switchHref(pathname: string, to: Lang) {
  const local = base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
  const bare = local.replace(/^\/en(\/|$)/, '/');
  return href(to, bare);
}

const THAI = '๐๑๒๓๔๕๖๗๘๙';
export function digits(lang: Lang, n: number | string, pad = 0) {
  const s = String(n).padStart(pad, '0');
  return lang === 'th' ? s.replace(/\d/g, (d) => THAI[+d]) : s;
}

export function price(lang: Lang, n: number) {
  return `${t(lang, 'price.from')} ฿${n.toLocaleString('en-US')}`;
}

export function localePaths() {
  return [
    { params: { locale: undefined }, props: { lang: 'th' as Lang } },
    { params: { locale: 'en' }, props: { lang: 'en' as Lang } },
  ];
}
