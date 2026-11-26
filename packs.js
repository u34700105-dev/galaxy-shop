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
  },
  dungeon: {
    intro: "เลือกไอดีที่ต้องการ แล้วกดซื้อสินค้า ระบบจะส่งชื่อผู้ใช้และรหัสผ่านให้ทันที ดูย้อนหลังได้ในหน้าประวัติ",
    empty: "ตอนนี้ยังไม่มีรายการ กลับมาดูใหม่เร็วๆ นี้",
    groups: [
      // price: 0 = ยังไม่ตั้งราคา (สีเทา กดไม่ได้) | จำนวนสต๊อกตั้งในหน้าแอดมิน (ปุ่ม 🆔 ไอดี)
      { title: "ไอดี Blox Fruits", items: [
        { id: "acc-01", name: "ไก่ตัน 3-5หมัด", img: "a32", det: ["3-5 หมัด", "สุ่มผลแดง", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-02", name: "ไก่ตัน 6หมัด", img: "a31", det: ["หมัดก็อด", "สุ่มผลแดง", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-03", name: "ไก่ตันดาบคู่", img: "a30", det: ["ทรันดี ดาบคู่", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-04", name: "ไก่ตันผลพระ", img: "a29", det: ["ผลพระ", "สุ่มดาบคู่ 70%", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-05", name: "ไก่ตันผลช้าง", img: "a28", det: ["ผลช้าง", "สุ่มดาบคู่ 70%", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-06", name: "ไก่ตันผลไดโนเสาร์", img: "a27", det: ["ผลไดโนเสาร์", "6 หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-07", name: "ไก่ตันผลแรงโน้มถ่วง", img: "a26", det: ["ผลแรงโน้มถ่วง", "สุ่มดาบคู่ 70%", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-08", name: "ไก่ตันผลแก๊ส", img: "a25", det: ["ผลแก๊ส", "สุ่มดาบ 70%", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-09", name: "ไก่ตันผลประตู", img: "a24", det: ["ผลประตู", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-10", name: "ไก่ตันผลเยติ", img: "a23", det: ["ผลเยติ", "สุ่มดาบคู่ 70%", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-11", name: "ไก่ตันผลเสือ", img: "a22", det: ["ผลเสือ", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-12", name: "ไก่ตันผลจิ้งจอก", img: "a21", det: ["ผลจิ้งจอก", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-13", name: "ไก่ตันผลคอนโทล", img: "a20", det: ["ผลควบคุม", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-14", name: "ไก่ตัน 2ผลแดง", img: "a19", det: ["2ผลแดง", "หมัดก็อด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-15", name: "7หมัด เผ่ากูลV4 ขั้น10", img: "a18", det: ["ทรันดี เผ่ากูล + 7หมัด", "ดาบคู่โอเด้ง + สมอเรือ", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-16", name: "7หมัด เผ่าไซบอร์กV4 ขั้น10", img: "a17", det: ["ทรันดี เผ่าไซบอร์ก + 7หมัด", "ดาบคู่โอเด้ง + สมอเรือ", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-17", name: "7หมัด เผ่าเงือกV4 ขั้น10", img: "a16", det: ["ทรันดี เผ่าเงือก + 7หมัด", "ดาบคู่โอเด้ง + สมอเรือ", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-18", name: "7หมัด เผ่าสกายV4 ขั้น10", img: "a15", det: ["ทรันดี เผ่าสกาย + 7หมัด", "สุ่มดาบคู่โอเด้ง + สมอเรือ", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-19", name: "7หมัด เผ่ามิ้งค์V4 ขั้น10", img: "a14", det: ["ทรันดี เผ่ามิ้งค์ + 7หมัด", "ดาบคู่โอเด้ง + สมอเรือ", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-20", name: "ไก่ตัน เผ่ากูลV4 ขั้น10", img: "a18", det: ["เผ่ากูลV4 ขั้น10", "ดาบคู่โอเด้ง", "สุ่มสมอเรือ", "หมัดก็อด (6หมัด)", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-21", name: "ไก่ตัน เผ่าเงือกV4 ขั้น10", img: "a16", det: ["เผ่าเงือกV4 ขั้น10", "ดาบคู่โอเด้ง", "หมัดก็อด (6หมัด)", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-22", name: "ไก่ตัน เผ่าสกายV4 ขั้น10", img: "a15", det: ["เผ่าสกายV4 ขั้น10", "ดาบคู่โอเด้ง", "หมัดก็อด (6หมัด)", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-23", name: "ไก่ตัน เผ่ามนุษย์V4 ขั้น10", img: "a13", det: ["เผ่ามนุษย์V4 ขั้น10", "ดาบคู่โอเด้ง", "หมัดก็อด (6หมัด)", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-24", name: "ไก่ตัน เผ่ามิ้งค์V4 ขั้น10", img: "a14", det: ["เผ่ามิ้งค์V4 ขั้น10", "ดาบคู่โอเด้ง", "หมัดก็อด (6หมัด)", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-25", name: "เทพตันเผ่ามังกร", img: "a11", det: ["ทรันดี เผ่ามังกรV4 T10", "7หมัด + ดาบคู่", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-26", name: "ไก่ตันเผ่ามังกร สุ่มดาบคู่โอเด้ง", img: "a10", det: ["เผ่ามังกรV4 T10", "สุ่มดาบคู่โอเด้ง", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-27", name: "ไก่ตันเผ่ามังกรT10 + โมจิตื่น", img: "a03", det: ["เผ่ามังกรV4 T10", "โมจิตื่น", "สุ่มดาบคู่", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-28", name: "ไก่ตันผลโมจิ", img: "a09", det: ["ผลโมจิ", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-29", name: "ไก่ตันผลตื่น", img: "a08", det: ["สุ่มผลตื่น", "หมัดก็อด", "สุ่มดาบคู่โอเด้ง", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-30", name: "ไก่ตัน 7หมัด", img: "a07", det: ["7หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-31", name: "7หมัด ดาบคู่", img: "a06", det: ["ทรันดี 7หมัด", "ทรันดี ดาบคู่", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-32", name: "ไก่ตันโมจิตื่น", img: "a05", det: ["โมจิตื่น ทุกสกิล", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-33", name: "ไก่ตันโมจิตื่น + ดาบคู่", img: "a04", det: ["ทรันดี โมจิตื่น + ดาบคู่", "6หมัด", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-34", name: "ไก่ตัน โมจิตื่น ดาบคู่ + เผ่าV4T10", img: "a03", det: ["โมจิตื่น + เผ่าV4 ขั้น10", "6หมัด + ดาบคู่", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-35", name: "ไก่ตัน โมจิตื่น ดาบคู่ + เผ่าพิเศษT10", img: "a03", det: ["โมจิตื่น + ไซบอร์กกูลV4 ขั้น10", "6หมัด + ดาบคู่", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-36", name: "7หมัด เผ่ามนุษย์V4 ขั้น10", img: "a13", det: ["ทรันดี เผ่ามนุษย์V4 + 7หมัด", "สุ่มดาบคู่โอเด้ง + สมอเรือ", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-37", name: "7หมัด เผ่าV4 ขั้น10", img: "a02", det: ["เผ่าV4 ขั้น10 + 7หมัด", "ดาบคู่โอเด้ง + สุ่มสมอเรือ", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-38", name: "ไก่ตัน เผ่าไซบอร์กV4 ขั้น10", img: "a01", det: ["เผ่าไซบอร์กV4 ขั้น10", "ดาบคู่โอเด้ง", "หมัดก็อด (6หมัด)", "LV.2800(MAX)"], price: 0, stock: 0 },
        { id: "acc-39", name: "ไก่ตันเผ่าV4 ขั้น10", img: "a12", det: ["ทรันดี เผ่าV4 ขั้น10 (สุ่มเผ่า)", "ดาบคู่", "6หมัด", "LV.2650(MAX)"], price: 0, stock: 0 }
      ]}
    ]
  },
  fruits: {
    idLabel: "ชื่อผู้ใช้ Roblox (Username)",
    intro: "กรอกชื่อผู้ใช้ Roblox เลือกผลที่ต้องการ แล้วกดสั่งซื้อ ทางร้านจะส่งผลให้ในเกม ห้ามกรอกรหัสผ่านเกม",
    warn: "⚠️ กรุณาตรวจสอบในเกมว่าถึงเลเวล 700 และไปถึงทะเลที่ 2 แล้ว และมีผลที่สามารถเทรดได้\nก่อนสั่งซื้อ ต้องมีผลราคาถูก (ผลกาก) ไว้ 1 ลูก สำหรับใช้เทรดรับผลที่สั่ง",
    introOut: "",
    groups: [
      { title: "ผลปีศาจ", items: [
        // stock: 0 = ไม่มีสต๊อก (แสดงเป็นสีเทา กดไม่ได้) | stock: 0 = มีของ
        { id: "fruit-dragon", name: "Dragon", img: "f01", price: 500000, stock: 0, tag: "พิเศษ", variants: [
          { id: "fruit-dragon-cn", name: "Dragon (มังกรจีน)", price: 500000 },
          { id: "fruit-dragon-jp", name: "Dragon (มังกรญี่ปุ่น)", price: 500000 }
        ] },
        { id: "fruit-pamigil", name: "PAMIGIL", img: "f02", price: 20000, stock: 0 },
        { id: "fruit-kitsune", name: "Kitsune", img: "f03", price: 65000, stock: 0 },
        { id: "fruit-magnet", name: "Magnet", img: "f04", price: 50000, stock: 0 },
        { id: "fruit-tiger", name: "Tiger", img: "f05", price: 25000, stock: 0 },
        { id: "fruit-yeti", name: "Yeti", img: "f06", price: 20000, stock: 0 },
        { id: "fruit-spirit", name: "Spirit", img: "f07", price: 20000, stock: 0 },
        { id: "fruit-gas", name: "Gas", img: "f08", price: 15000, stock: 0 },
        { id: "fruit-kamandag", name: "Kamandag", img: "f09", price: 20000, stock: 0 },
        { id: "fruit-lilim", name: "Lilim", img: "f10", price: 15000, stock: 0 },
        { id: "fruit-tinapay", name: "Tinapay", img: "f11", price: 15000, stock: 0 },
        { id: "fruit-mimmoth", name: "Mammoth", img: "f12", price: 15000, stock: 0 },
        { id: "fruit-trex", name: "T-Rex", img: "f13", price: 15000, stock: 0 },
        { id: "fruit-gravidad", name: "Gravedad", img: "f14", price: 15000, stock: 0 }
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
  for (const k in PACKS) for (const g of PACKS[k].groups) for (const p of g.items) {
    if (p.id === id) return p;
    if (p.variants) for (const v of p.variants) if (v.id === id) return v;
  }
  for (const p of LEGACY) if (p.id === id) return p;
  return null;
}
