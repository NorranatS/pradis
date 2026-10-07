// One place for everything that will change when the brand is finalised.
export const site = {
  name: { th: 'แม่ประดิษฐ์', en: 'Mae Pradit' },
  wordmark: 'MAE PRADIT',
  tagline: {
    th: 'งานถักและงานคราฟท์ทำมือโดยแม่ จากไหมพรม เชือกฟอกนิ่ม และผ้าพื้นเมือง',
    en: 'Hand-crocheted and handcrafted pieces by Mom, in yarn, soft rope and local Thai cloth',
  },
  year: 2026,
  contact: {
    // PLACEHOLDERS: replace with Mom's real accounts. Personal LINE ID for now (no pre-filled messages).
    lineId: 'maepradit',
    instagram: 'maepradit',
    facebookPage: 'maepradit',
    phone: '08X-XXX-XXXX',
    phoneHref: 'tel:0000000000',
    email: 'hello@example.com',
  },
} as const;

export const links = {
  line: `https://line.me/ti/p/~${site.contact.lineId}`,
  instagram: `https://ig.me/m/${site.contact.instagram}`,
  instagramProfile: `https://instagram.com/${site.contact.instagram}`,
  messenger: `https://m.me/${site.contact.facebookPage}`,
  facebook: `https://facebook.com/${site.contact.facebookPage}`,
};
