// ราคาสินค้าทั้งหมดแก้ที่ไฟล์นี้ไฟล์เดียว (ใช้ร่วมกันทั้งหน้าร้านและหน้า admin)
// price = ราคาขาย (กีบ)
export const PACKS = {
  freefire: {
    groups: [
      { title: 'เพชร (Diamond)', items: [
        { id: 'ff-33',    name: '33 💎',     price: 8000 },
        { id: 'ff-172',   name: '172 💎',    price: 36000 },
        { id: 'ff-310',   name: '310 💎',    price: 64000 },
        { id: 'ff-517',   name: '517 💎',    price: 120000 },
        { id: 'ff-690',   name: '690 💎',    price: 141000 },
        { id: 'ff-1052',  name: '1,052 💎',  price: 212000 },
        { id: 'ff-1801',  name: '1,801 💎',  price: 351000 },
        { id: 'ff-3698',  name: '3,698 💎',  price: 699999 },
        { id: 'ff-7396',  name: '7,396 💎',  price: 1399999 },
        { id: 'ff-11094', name: '11,094 💎', price: 2099999 }
      ]},
      { title: 'สมาชิกรายสัปดาห์ / รายเดือน', items: [
        { id: 'ff-w200', name: 'Weekly Membership Lite', price: 25000,
          note: 'รับเพชรรวม 200 เม็ด (60 เม็ดทันที + วันละ 20 เม็ด เป็นเวลา 7 วัน)' },
        { id: 'ff-w450', name: 'Weekly Membership', price: 50000,
          note: 'รับเพชรรวม 450 เม็ด (100 เม็ดทันที + วันละ 50 เม็ด เป็นเวลา 7 วัน) พร้อมสิทธิ์ส่วนลดในร้านค้าประจำวัน' },
        { id: 'ff-m2600', name: 'Monthly Membership', price: 211000,
          note: 'รับเพชรรวม 2,600 เม็ด (500 เม็ดทันที + วันละ 70 เม็ด เป็นเวลา 30 วัน) กล่องสุ่มเครื่องประดับ 15 กล่อง และสิทธิพิเศษอื่นๆ' }
      ]},
      { title: 'Booyah Pass', items: [
        { id: 'ff-bp', name: 'Booyah Pass', price: 64000,
          note: 'ถ้าเปิดสิทธิ์ซีซันนี้แล้ว ซื้อซ้ำจะได้ FF Token 10 เหรียญแทน (ไม่แนะนำให้ซื้อซ้ำ) รับรางวัลทางกล่องจดหมายในเกม' }
      ]},
      { title: 'แพ็กเติบโต (แลกรับได้ 1 ครั้งต่อไอดี ตรวจสถานะในเกมก่อนสั่ง)', items: [
        { id: 'ff-lv6',  name: 'แพ็กเติบโต Lv6',  price: 6888 },
        { id: 'ff-lv10', name: 'แพ็กเติบโต Lv10', price: 13000 },
        { id: 'ff-lv15', name: 'แพ็กเติบโต Lv15', price: 13000 },
        { id: 'ff-lv20', name: 'แพ็กเติบโต Lv20', price: 13000 },
        { id: 'ff-lv25', name: 'แพ็กเติบโต Lv25', price: 13000 },
        { id: 'ff-lv30', name: 'แพ็กเติบโต Lv30', price: 16000 }
      ]}
    ]
  }
};

export function findPack(id) {
  for (const k in PACKS) for (const g of PACKS[k].groups) for (const p of g.items) if (p.id === id) return p;
  return null;
}
