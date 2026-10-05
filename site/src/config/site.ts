// One place for everything that will change when the brand is finalised.
export const site = {
  name: { th: 'ประดิษฐ์', en: 'Pradis' },
  wordmark: 'PRADIS',
  tagline: {
    th: 'กระเป๋าถักมือ ผ้าคราม และไหมไทย ทำทีละใบโดยแม่',
    en: 'Hand-crocheted bags in indigo and Thai silk, made one at a time by Mom',
  },
  year: 2026,
  contact: {
    // Personal LINE ID for now (no pre-filled messages). Switch to an Official Account later.
    lineId: 'pradis.handmade',
    instagram: 'pradis.handmade',
    facebookPage: 'pradishandmade',
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
