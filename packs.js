// ราคาสินค้าหน้าร้าน | auto:true = เติมอัตโนมัติ, ไม่มี = ร้านเติมเอง | price = ราคาขาย (กีบ)
export const PACKS = {
  freefire: {
    groups: [
      { title: "เพชร (Diamond)", items: [
        { id: "ff-33", name: "33 💎", price: 8000, auto: true },
        { id: "ff-68", name: "68 💎", price: 15500, auto: true },
        { id: "ff-172", name: "172 💎", price: 37000, auto: true },
        { id: "ff-310", name: "310 💎", price: 67000, auto: true },
        { id: "ff-517", name: "517 💎", price: 111000, auto: true },
        { id: "ff-690", name: "690 💎", price: 148000, auto: true },
        { id: "ff-1052", name: "1,052 💎", price: 222000, auto: true },
        { id: "ff-1801", name: "1,801 💎", price: 368000, auto: true },
        { id: "ff-3698", name: "3,698 💎", price: 733000, auto: true }
      ]},
      { title: "สมาชิกรายสัปดาห์ / รายเดือน", items: [
        { id: "ff-w200", name: "Weekly Membership Lite", price: 25000, auto: true, note: "รับเพชรรวม 200 เม็ด (60 เม็ดทันที + วันละ 20 เม็ด เป็นเวลา 7 วัน)" },
        { id: "ff-w450", name: "Weekly Membership", price: 50000, auto: true, note: "รับเพชรรวม 450 เม็ด (100 เม็ดทันที + วันละ 50 เม็ด เป็นเวลา 7 วัน) พร้อมสิทธิ์ส่วนลดในร้านค้าประจำวันและสิทธิพิเศษอื่นๆ" },
        { id: "ff-m2600", name: "Monthly Membership", price: 221000, auto: true, note: "รับเพชรรวม 2,600 เม็ด (500 เม็ดทันที + วันละ 70 เม็ด เป็นเวลา 30 วัน) กล่องสุ่มเครื่องประดับนำโชค 15 กล่อง สิทธิ์ร้านค้ายานพาหนะราคาพิเศษ และสิทธิพิเศษอื่นๆ" }
      ]},
      { title: "Booyah Pass", items: [
        { id: "ff-bp", name: "อัปเกรด Booyah Pass", price: 67000, auto: true, note: "ถ้าเปิดสิทธิ์ซีซันนี้แล้ว ซื้อซ้ำจะได้ FF Token 10 เหรียญแทน (ไม่แนะนำให้ซื้อซ้ำในเดือนนี้) รับรางวัลทางกล่องจดหมายในเกม" }
      ]},
      { title: "การเติบโต (แลกรับได้ 1 ครั้งต่อไอดี ตรวจสอบในเกมก่อนซื้อว่าแพ็กนี้ยังวางจำหน่าย)", items: [
        { id: "ff-lv6", name: "การเติบโตระดับ 6", price: 7000, auto: true },
        { id: "ff-lv10", name: "การเติบโตระดับ 10", price: 13000, auto: true },
        { id: "ff-lv15", name: "การเติบโตระดับ 15", price: 13000, auto: true },
        { id: "ff-lv20", name: "การเติบโตระดับ 20", price: 13000, auto: true },
        { id: "ff-lv25", name: "การเติบโตระดับ 25", price: 13000, auto: true },
        { id: "ff-lv30", name: "การเติบโตระดับ 30", price: 21000, auto: true }
      ]},
      { title: "โปรบัญชีใหม่", items: [
        { id: "ff-new", name: "โปรบัญชีใหม่", price: 7000, note: "รับได้ครั้งเดียวต่อบัญชีที่สร้างใหม่เท่านั้น ตรวจสอบในเกมก่อนซื้อ ถ้าไม่พบแพ็ก ระบบจะเปลี่ยนเป็นเพชร 33 เม็ดให้อัตโนมัติ" }
      ]}
    ]
  },
  mlbb: {
    idLabel: "UID (เลขไอดีผู้เล่น)",
    digits: true,
    warn: "⚠️ เกมนี้ตรวจสอบชื่อในเกมไม่ได้ หากกรอก UID ผิด เครดิตจะเข้าบัญชีอื่นและอาจขอคืนเงินไม่ได้ กรุณาตรวจสอบให้แน่ใจก่อนชำระ",
    groups: [
      { title: "เพชร (Diamond)", items: [
        { id: "mlb-86", name: "86 💎 (78 Diamonds +8 Bonus)", price: 31000 },
        { id: "mlb-172", name: "172 💎 (156 Diamonds +16 Bonus)", price: 61000 },
        { id: "mlb-257", name: "257 💎 (234 Diamonds +23 Bonus)", price: 88000 },
        { id: "mlb-343", name: "343 💎 (312 Diamonds +31 Bonus)", price: 118000 },
        { id: "mlb-429", name: "429 💎 (390 Diamonds +39 Bonus)", price: 147000 },
        { id: "mlb-600", name: "600 💎 (546 Diamonds +54 Bonus)", price: 205000 },
        { id: "mlb-706", name: "706 💎 (625 Diamonds +81 Bonus)", price: 235000 },
        { id: "mlb-792", name: "792 💎 (703 Diamonds +89 Bonus)", price: 264000 },
        { id: "mlb-1049", name: "1049 💎 (937 Diamonds +112 Bonus)", price: 341000 },
        { id: "mlb-1135", name: "1135 💎 (1015 Diamonds +120 Bonus)", price: 380000 },
        { id: "mlb-2195", name: "2195 💎 (1860 Diamonds +335 Bonus)", price: 707000 },
        { id: "mlb-3688", name: "3688 💎 (3099 Diamonds +589 Bonus)", price: 1177000 },
        { id: "mlb-5532", name: "5532 💎 (4649 Diamonds +883 Bonus)", price: 1775000 },
        { id: "mlb-9288", name: "9288 💎 (7740 Diamonds +1548 Bonus)", price: 2948000 }
      ]},
      { title: "เติมครั้งแรก (โบนัส x2)", items: [
        { id: "mlb-f55", name: "50+5 💎 (เติมครั้งแรกรับโบนัส 50 ตามในเกม)", price: 20000 },
        { id: "mlb-f165", name: "150+15 💎 (เติมครั้งแรกรับโบนัส 150 ตามในเกม)", price: 58000 },
        { id: "mlb-f275", name: "250+25 💎 (เติมครั้งแรกรับโบนัส 250 ตามในเกม)", price: 93000 },
        { id: "mlb-f565", name: "500+65 💎 (เติมครั้งแรกรับโบนัส 500 ตามในเกม)", price: 189000 }
      ]},
      { title: "แพ็กพิเศษ / รายสัปดาห์", items: [
        { id: "mlb-elite", name: "Weekly Elite Bundle", price: 20000 },
        { id: "mlb-wp1", name: "Diamond Weekly Pass", price: 38000 },
        { id: "mlb-wp2", name: "Diamond Weekly Pass x2", price: 75000 },
        { id: "mlb-wp3", name: "Diamond Weekly Pass x3", price: 112000 },
        { id: "mlb-epic", name: "Monthly Epic Bundle", price: 96000 },
        { id: "mlb-miya", name: "Twilight Miya Pass", price: 199000 }
      ]}
    ]
  }
};

// แพ็กเก่าที่เลิกขายแล้ว เก็บไว้ให้หน้า admin ยังคิดราคาออเดอร์เก่าที่ค้างอยู่ได้ (ไม่แสดงในหน้าร้าน)
const LEGACY = [
  { id: "ml-55", name: "55 💎", price: 19000 },
  { id: "ml-86", name: "86 💎 (78+8)", price: 29000 },
  { id: "ml-172", name: "172 💎", price: 52000 },
  { id: "ml-257", name: "257 💎 (234+23)", price: 86000 },
  { id: "ml-275", name: "275 💎", price: 84000 },
  { id: "ml-320", name: "320 💎", price: 97000 },
  { id: "ml-344", name: "344 💎", price: 106000 },
  { id: "ml-422", name: "422 💎", price: 136000 },
  { id: "ml-565", name: "565 💎", price: 170000 },
  { id: "ml-706", name: "706 💎 (625+81)", price: 216000 },
  { id: "ml-1130", name: "1,130 💎", price: 356000 },
  { id: "ml-1412", name: "1,412 💎", price: 436000 },
  { id: "ml-2195", name: "2,195 💎", price: 666000 },
  { id: "ml-3698", name: "3,698 💎 (3099+589)", price: 1095000 },
  { id: "ml-4000", name: "4,000 💎", price: 1189000 },
  { id: "ml-5532", name: "5,532 💎 (4649+883)", price: 1630000 },
  { id: "ml-6044", name: "6,044 💎", price: 1790000 },
  { id: "ml-7030", name: "7,030 💎", price: 2100000 },
  { id: "ml-9288", name: "9,288 💎 (7740+1548)", price: 2700000 },
  { id: "ml-10080", name: "10,080 💎", price: 2755000 },
  { id: "ml-f50", name: "50 💎 + 50 💎", price: 18000 },
  { id: "ml-f165", name: "165 💎 (150+15)", price: 52000 },
  { id: "ml-f250", name: "250 💎 + 250 💎 (250+25)", price: 86000 },
  { id: "ml-f500", name: "500 💎 + 500 💎 (500+55)", price: 172000 },
  { id: "ml-elite", name: "Weekly Elite Bundle", price: 18000 },
  { id: "ml-wk2", name: "การ์ดรายสัปดาห์ x2", price: 69000 },
  { id: "ml-wk3", name: "การ์ดรายสัปดาห์ x3", price: 104000 },
  { id: "ml-daily220", name: "แพ็กรับเพชรรายวัน", price: 35000 },
  { id: "ml-epic275", name: "แพ็ก Epic 275 💎 (จำกัดเดือนละ 1 ครั้ง)", price: 90000 },
  { id: "ml-thavay", name: "Thavay Lai", price: 176000 }
];

export function findPack(id) {
  for (const k in PACKS) for (const g of PACKS[k].groups) for (const p of g.items) if (p.id === id) return p;
  for (const p of LEGACY) if (p.id === id) return p;
  return null;
}
