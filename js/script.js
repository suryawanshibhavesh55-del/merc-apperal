/**
 * MerC APPERALS AND ACCESSORIES - Corporate Gifting Catalogue Engine
 * WhatsApp: +91 70454 93582 | Location: Navi Mumbai
 */

const WHATSAPP_NUMBER = "917045493582";

// 10 Authentic Corporate Categories mapped from catalog assets
const CATEGORIES = [
  {
    id: "gift-sets",
    name: "Corporate Gift Sets & Combos",
    shortName: "Corporate Gifts",
    icon: "gift",
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 3.01.46 PM (2).jpeg",
    description: "Curated premium gift hampers, milestone celebration boxes, and executive onboarding kits tailored for your brand.",
    customizationNote: "Custom branded rigid boxes, bespoke inserts, ribbon detailing, engraved contents."
  },
  {
    id: "apparel",
    name: "Custom Apparel & Sportswear",
    shortName: "Apparel & Sportswear",
    icon: "shirt",
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 3.01.43 PM.jpeg",
    description: "Corporate pique polo shirts, performance athletic jerseys, fleeced sweatshirts, hoodies, and event staff tees.",
    customizationNote: "Computerized embroidery, high-density screen printing, digital sublimation, custom inner neck labels."
  },
  {
    id: "mugs",
    name: "Custom Mugs & Drinkware",
    shortName: "Mugs & Drinkware",
    icon: "coffee",
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 2.49.37 PM (1).jpeg",
    description: "Ceramic office coffee mugs, enamel campfire cups, automatic self-stirring mugs, and executive thermal desk mugs.",
    customizationNote: "Full-color sublimation wrap, metallic spot prints, laser etching, dual-tone glazes."
  },
  {
    id: "bottles",
    name: "Bottles & Flasks",
    shortName: "Bottles & Flasks",
    icon: "droplet",
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 2.49.39 PM (2).jpeg",
    description: "Double-wall insulated stainless steel cola flasks, matte sports water bottles with carabiners, and thermal tumblers.",
    customizationNote: "Precision 360-degree UV printing, laser engraving, matte powder coat finishes."
  },
  {
    id: "diaries",
    name: "Diaries & Executive Notebooks",
    shortName: "Diaries & Notebooks",
    icon: "book-open",
    representativeImage: "assets/WhatsApp Image 2026-09-09 at 11.45.42 PM.jpeg",
    description: "Executive leatherette organizers, magnetic clasp journals, premium suede planners, and corporate conference notebooks.",
    customizationNote: "Blind debossing, gold & silver foil stamping, custom insert pages, branded metallic clasps."
  },
  {
    id: "pens",
    name: "Executive Metal Pens",
    shortName: "Executive Pens",
    icon: "pen-tool",
    representativeImage: "assets/WhatsApp Image 2026-09-09 at 11.57.05 PM (1).jpeg",
    description: "Heavyweight brass rollerballs, gold and rose gold metal pens, sleek matte black ballpoints, and gift boxed pen sets.",
    customizationNote: "Fine fiber laser engraving, individual recipient name personalization, custom presentation boxes."
  },
  {
    id: "desk-accessories",
    name: "Desk Accessories & Organizers",
    shortName: "Desk Accessories",
    icon: "briefcase",
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 3.09.53 PM (2).jpeg",
    description: "Executive perpetual metal desk calendars, extended stitched desk mats, ergonomic mouse pads, and hard-shell tech pouches.",
    customizationNote: "Heat transfer printing, laser etching on metal, custom logo embossing."
  },
  {
    id: "bags",
    name: "Executive Bags & Laptop Sleeves",
    shortName: "Bags & Sleeves",
    icon: "briefcase",
    representativeImage: "assets/WhatsApp Image 2026-09-10 at 10.28.14 AM.jpeg",
    description: "Premium vegan leather laptop briefcases, conference document folios, and executive travel bags crafted for corporate professionals.",
    customizationNote: "Blind debossing, metallic foil stamping, custom metal zipper pulls, engraved nameplates."
  },
  {
    id: "keychains-resin",
    name: "Handcrafted Keychains & Resin Art",
    shortName: "Keychains & Resin Art",
    icon: "sparkles",
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 3.06.52 PM.jpeg",
    description: "Signature gold leaf resin corporate keychains, monogram charms, artisan seashell vanity mirrors, and luxury trinket dishes.",
    customizationNote: "Hand-poured artisan epoxy resin, real 24k-style gold leaf flake embedding, bespoke client logos."
  },
  {
    id: "candles",
    name: "Handcrafted Candle Holders & Décor",
    shortName: "Candle Holders & Décor",
    icon: "flame",
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 3.01.47 PM (2).jpeg",
    description: "Artisan jesmonite candle holders, geometric concrete tealight vessels, and handcrafted botanical gel candles.",
    customizationNote: "Artisan jesmonite/concrete pigments, metallic gold detailing, custom festive gift packaging."
  }
];

// Complete Catalog: Exactly 61 verified products from the project
const PRODUCTS = [
  // 1. Corporate Gift Sets & Combos
  {
    id: "prod-002",
    categoryId: "gift-sets",
    name: "Sports Welcome Kit",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.40 PM.jpeg",
    subtitle: "Branded Sports Water Bottle, Ceramic Coffee Mug & Set of Coasters",
    description: "A stylish and practical Sports Welcome Kit designed to create a memorable welcome experience. Featuring a branded bottle, ceramic mug, and matching coasters, this set combines everyday utility with a sporty, professional look—ideal for sports events, tournaments, corporate teams, clubs, and welcome hampers.\n\nIncludes:\n• Branded Sports Water Bottle\n• Ceramic Coffee Mug\n• Set of Branded Coasters\n\nPerfect for:\nSports Events • Team Welcome Kits • Corporate Gifting • Tournaments • Promotional Merchandise",
    customization: "Logo & Branding: Add your company, team, event, or sponsor logo.\nBottle Customization: Personalized colours, names, numbers, slogans, and branding.\nCeramic Mug: Customize with logos, team colours, names, player numbers, or event artwork.\nCoasters: Fully branded with your logo, team identity, event theme, colours, or custom designs.\nComplete Set: Coordinate the bottle, mug, and coasters for a consistent branded look.\nBulk & Corporate Orders: Suitable for tournaments, sports clubs, corporate events, and welcome kits."
  },

  // 2. Custom Apparel & Sportswear — Ordered: Round Neck -> Polo Neck -> Hoodies & Sweatshirts
  // A. Round Neck T-Shirts
  {
    id: "prod-009",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Dual-Tone Raglan Corporate Event T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.44 PM (2).jpeg",
    subtitle: "Sky Blue & Navy Athletic Raglan Tee",
    description: "A stylish 180 GSM 100% cotton round-neck T-shirt featuring contrasting raglan sleeves for a sporty, modern look. Finished with durable screen printing, it is perfect for sports teams, corporate events, promotional campaigns, employee merchandise, and casual wear.\n\nKey Features:\n• 180 GSM premium cotton fabric\n• 100% cotton fabric\n• Contrast raglan sleeves\n• High-quality screen printing\n• Comfortable, breathable & durable",
    customization: "Multicolor front screen printing, sponsor sleeve badges, individual participant names."
  },
  {
    id: "prod-010",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Milestone Commemorative Graphic Crewneck T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.44 PM.jpeg",
    subtitle: "Premium Bio-Washed Cotton Graphic Tee",
    description: "A premium 180 GSM 100% cotton round-neck T-shirt featuring vibrant, detailed DTF (Direct-to-Film) printing. The smooth cotton fabric offers excellent comfort and breathability, while DTF printing delivers sharp, long-lasting designs—perfect for corporate merchandise, promotional apparel, events, team wear, and customized T-shirts.\n\nKey Features:\n• 180 GSM premium cotton\n• 100% cotton fabric\n• Classic round-neck design\n• High-definition DTF printing\n• Vibrant & detailed prints\n• Comfortable, breathable & durable",
    customization: "Direct-to-film (DTF) high-definition multi-color printing, custom neck label printing."
  },
  {
    id: "prod-011",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Sublimated Athletic Performance Jersey",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.45 PM (1).jpeg",
    subtitle: "All-Over Sublimation Quick-Dry Sports Tee",
    description: "Lightweight and comfortable Dry-Fit Round Neck T-Shirt designed for activewear, sports teams, events and customized corporate apparel.\n\nKey Features:\n• 100% Polyester Dry-Fit Fabric\n• Round neck with raglan sleeves\n• Quick-dry & breathable\n• Comfortable & lightweight\n• High-quality digital printing\n• Custom branding & designs available\n• Ideal for sports teams, events, staff uniforms & promotions",
    customization: "Full 360-degree dye-sublimation, seamless team logo integration, numbered printing."
  },
  {
    id: "prod-014",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Custom Graphic Crewneck T-Shirt (Royal Blue)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.54 PM (1).jpeg",
    subtitle: "100% Ring-Spun Cotton Vibrant Daily Tee",
    description: "A premium 180 GSM 100% cotton round-neck T-shirt designed for comfort, durability, and vibrant branding. Finished with high-quality screen printing, it is ideal for corporate events, promotional campaigns, sports teams, employee uniforms, and customized merchandise.\n\nKey Features:\n• 180 GSM premium cotton fabric\n• 100% cotton\n• Classic round-neck style\n• Durable screen printing\n• Soft, breathable & comfortable",
    customization: "High-density plastisol screen print, metallic foil accents, personalized internal size labels."
  },
  {
    id: "prod-017",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Corporate Event Back-Print Crewneck T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.55 PM (1).jpeg",
    subtitle: "Royal Blue Crewneck with Bold Typography",
    description: "High-impact crewneck event t-shirt designed for volunteer squads, corporate expeditions, and brand activations with prominent rear shoulder branding.",
    customization: "Oversized back screen print, front pocket-area logo embroidery or DTF transfer."
  },
  {
    id: "prod-018",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Heather Indigo Event Commemorative T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.55 PM (2).jpeg",
    subtitle: "Poly-Cotton Heather Blend Casual Event Tee",
    description: "Vintage-inspired athletic event t-shirt crafted from an ultra-soft heather poly-cotton blend, offering a soft drape and high breathability for day-long conferences.",
    customization: "Screen printed trophy artwork, conference date stamping, custom sponsor logos."
  },
  {
    id: "prod-019",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Heritage Landmark Graphic Dry-Fit T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.55 PM.jpeg",
    subtitle: "Architectural Skyline Sublimation Tee",
    description: "Premium 100% Polyester Piqué Round-Neck T-Shirt with Raglan Sleeves, combining a sporty look with comfort and durability.\n\nKey Features:\n• 100% Polyester Piqué Fabric\n• Round-neck design\n• Stylish Raglan Sleeves\n• Comfortable & breathable\n• High-quality digital printing\n• Custom logos, colours & designs\n• Ideal for corporate uniforms, teams, events & promotional wear",
    customization: "Full sublimation with client's preferred city skyline or corporate campus architecture."
  },
  {
    id: "prod-021",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Striped Sleeve Athletic Corporate T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.56 PM (2).jpeg",
    subtitle: "Navy Crewneck with Sporty Sleeve Bands",
    description: "A comfortable and stylish 180 GSM 100% Cotton Round Neck T-Shirt, enhanced with high-quality DTF printing and reflective detailing on the sleeves. Ideal for corporate uniforms, promotional merchandise, events and casual teamwear.\n\nKey Features:\n• 180 GSM 100% cotton\n• Reflective strips on sleeves\n• Durable DTF print\n• Breathable and easy to maintain\n• Suitable for corporate, promotional and event wear",
    customization: "Front chest badge printing, contrast sleeve banding in customized pantone colors."
  },
  {
    id: "prod-067",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Premium Cotton Screen Print Round Neck T-Shirt",
    image: "assets/apparel-screen-print-tshirt-black-g.png",
    subtitle: "180 GSM | 100% Cotton | Round Neck | Screen Printing",
    description: "A premium 180 GSM 100% cotton round-neck T-shirt designed for comfort, durability, and vibrant branding. Finished with high-quality screen printing, it is ideal for corporate events, promotional campaigns, sports teams, employee uniforms, and customized merchandise.\n\nKey Features:\n• 180 GSM premium cotton fabric\n• 100% cotton\n• Classic round-neck style\n• Durable screen printing\n• Soft, breathable & comfortable",
    customization: "Durable multi-color screen printing, client logo integration, custom corporate sleeve branding."
  },
  {
    id: "prod-069",
    categoryId: "apparel",
    apparelType: "round-neck",
    name: "Premium Custom Polyester Jersey",
    image: "assets/apparel-custom-polyester-jersey-cavallibet.png",
    subtitle: "100% Polyester | Digital Printing | Vinyl Logo",
    description: "A premium 100% polyester jersey featuring vibrant all-over digital printing for detailed, eye-catching designs. Finished with a custom vinyl logo, this jersey is ideal for sports teams, corporate events, promotional campaigns, employee merchandise, and customized team apparel.\n\nKey Features:\n• 100% polyester fabric\n• Full digital printing\n• Custom vinyl logo application\n• Lightweight & comfortable\n• Vibrant, detailed graphics\n• Sporty and professional finish",
    customization: "All-over digital printing, heat-pressed vinyl team crest, individual player names & numbers."
  },

  // B. Polo Neck T-Shirts
  {
    id: "prod-007",
    categoryId: "apparel",
    apparelType: "polo",
    name: "Premium Solid Pique Polo T-Shirt (Forest Olive)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.43 PM.jpeg",
    subtitle: "100% Cotton Breathable Classic Fit",
    description: "A premium 220 GSM cotton-piqué polo T-shirt crafted with Lycra for added stretch, comfort, and shape retention. Designed with a smart polo collar and clean finish, it offers a polished look suitable for corporate uniforms, hospitality teams, promotional wear, events, and everyday professional styling.\n\nKey Features:\n• 220 GSM premium fabric\n• Cotton-piqué construction\n• Lycra for stretch and flexibility\n• Classic polo collar with button placket\n• Comfortable, breathable & durable\n• Smart, structured appearance",
    customization: "Subtle tone-on-tone chest embroidery or contrast direct-to-garment corporate logo."
  },
  {
    id: "prod-013",
    categoryId: "apparel",
    apparelType: "polo",
    name: "Tricolor Performance Polo T-Shirt (National Series)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.45 PM.jpeg",
    subtitle: "Engineered Dry-Fit Polo with Accent Arc",
    description: "Professional dry-fit polo designed for delegations, tournament contingents, and institutional teams, featuring crisp white base fabric with sweeping athletic arc prints.",
    customization: "Embroidered team crest, sponsor printing, moisture-wicking quick-dry fabric treatment."
  },
  {
    id: "prod-015",
    categoryId: "apparel",
    apparelType: "polo",
    name: "Dual-Tone Colorblocked Corporate Polo",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.54 PM (2).jpeg",
    subtitle: "Yellow & Navy Premium Pique Uniform Polo",
    description: "A premium 220 GSM 100% cotton piqué polo T-shirt designed for a smart and professional appearance. Its textured piqué fabric offers durability, breathability, and all-day comfort, making it an excellent choice for corporate uniforms, team wear, promotional apparel, events, and customized branding.\n\nKey Features:\n• 220 GSM premium fabric\n• 100% cotton piqué\n• Classic polo collar with button placket\n• Comfortable, breathable & durable\n• Durable and structured finish\n• Ideal for corporate and promotional wear",
    customization: "Chest embroidery, company badge appliquée, branded buttons."
  },
  {
    id: "prod-016",
    categoryId: "apparel",
    apparelType: "polo",
    name: "Tricolor Vertical Stripe Corporate Staff Polo",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.54 PM (3).jpeg",
    subtitle: "Navy Pique Polo with Engineered Vertical Ribbon",
    description: "A premium 220 GSM 100% cotton piqué polo T-shirt designed for a smart, professional look. Featuring a classic polo collar and custom embroidery detailing, it combines durability, comfort, and refined branding—ideal for corporate uniforms, hospitality teams, events, sports clubs, and promotional apparel.\n\nKey Features:\n• 220 GSM premium fabric\n• 100% cotton piqué fabric\n• Classic polo collar with button placket\n• High-quality custom embroidery\n• Comfortable, breathable & durable\n• Premium professional appearance",
    customization: "Direct institutional embroidery, bespoke color stripes matching brand identity."
  },
  {
    id: "prod-022",
    categoryId: "apparel",
    apparelType: "polo",
    name: "Classic Pique Corporate Staff Polo (DW Badge)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.56 PM.jpeg",
    subtitle: "Pristine White Pique Knit Everyday Uniform",
    description: "A smart and durable 220 GSM cotton-blend piqué polo T-shirt, crafted with 60% cotton and 40% polyester for a comfortable feel, strength, and easy maintenance. Finished with high-quality screen printing, it is ideal for corporate uniforms, promotional apparel, events, team wear, and customized branding.\n\nKey Features:\n• 220 GSM premium fabric\n• 60% cotton + 40% polyester\n• Textured piqué weave\n• Classic polo collar with button placket\n• Durable screen printing\n• Comfortable, breathable & durable\n• Smart professional appearance",
    customization: "Precision chest badge embroidery, corporate logo printing, collar trim customization."
  },
  {
    id: "prod-023",
    categoryId: "apparel",
    apparelType: "polo",
    name: "Women's Engineered Dry-Fit Polo T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.09.53 PM.jpeg",
    subtitle: "Contoured Fit Quick-Dry Athletic Polo",
    description: "Premium 100% Polyester Piqué Polo T-Shirts with high-quality digital printing, combining a smart professional look with comfort and durability.\n\nKey Features:\n• 100% Polyester Piqué Fabric\n• Durable and easy to maintain\n• High-quality digital printing\n• Custom logos, designs & branding\n• Ideal for corporate uniforms, events & team wear",
    customization: "Sublimated side panels, heat transfer team logos, custom collar color combinations."
  },
  {
    id: "prod-006",
    categoryId: "apparel",
    apparelType: "polo",
    name: "Executive Corporate Polo T-Shirt (Contrast Collar)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.42 PM.jpeg",
    subtitle: "White Pique Knit with Vibrant Accent Trim",
    description: "Premium 100% Polyester Piqué Polo T-Shirt featuring contrast collar and sleeve detailing with customized digital printing.\n\nKey Features:\n• 100% Polyester Piqué Fabric\n• Classic polo collar\n• Contrast collar, cuffs & hem\n• High-quality digital printing\n• Custom front & back branding\n• Smart, sporty & professional look\n• Ideal for corporate uniforms, teams, events & promotional wear",
    customization: "Screen printing, high-density embroidery, custom dyed collar tipping to match brand hex codes."
  },

  // C. Hoodies & Sweatshirts
  {
    id: "prod-008",
    categoryId: "apparel",
    apparelType: "hoodies",
    name: "Corporate Colorblock Hooded Sweatshirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.44 PM (1).jpeg",
    subtitle: "Tricolor Paneled Heavyweight Fleece Hoodie",
    description: "A premium 320 GSM 100% cotton fleece hoodie designed for warmth, comfort, and everyday style. Crafted from soft, heavyweight fleece and finished with custom embroidery, it offers a premium look and feel—perfect for corporate merchandise, team wear, promotional campaigns, events, and customized apparel.\n\nKey Features:\n• 320 GSM heavyweight fabric\n• 100% cotton fleece\n• Comfortable hood with drawstrings\n• Kangaroo front pocket\n• Premium embroidery detailing\n• Warm, soft & comfortable",
    customization: "Embroidered chest logo patch, screen printed back graphics, custom woven drawstring pullers."
  },
  {
    id: "prod-020",
    categoryId: "apparel",
    apparelType: "hoodies",
    name: "Heavyweight Crewneck Fleece Sweatshirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.56 PM (1).jpeg",
    subtitle: "320 GSM Brushed Fleece Winter Uniform",
    description: "A premium 320 GSM 100% cotton brushed fleece sweatshirt designed for superior warmth, softness, and comfort. Featuring a classic round-neck silhouette and premium vinyl printing, it delivers a clean, bold finish—perfect for corporate merchandise, team apparel, promotional campaigns, events, and customized clothing.\n\nKey Features:\n• 320 GSM heavyweight fabric\n• 100% cotton brushed fleece\n• Soft & warm inner finish\n• Classic round-neck sweatshirt\n• High-grade vinyl print\n• Durable and premium print finish\n• Ribbed cuffs and hem",
    customization: "Diagonal slash typography print, chenille embroidery patch, laser-engraved leather hem tag."
  },
  {
    id: "prod-012",
    categoryId: "apparel",
    apparelType: "hoodies",
    name: "Executive Performance Corporate Tracksuit Set",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.45 PM (2).jpeg",
    subtitle: "Full-Zip Track Jacket & Matching Joggers",
    description: "A stylish and comfortable 100% Polyester Tracksuit designed for sports, training, team uniforms and activewear.\n\nKey Features:\n• 100% Polyester Fabric\n• Lightweight & comfortable\n• Full-sleeve zip-up jacket\n• Matching track pant\n• Breathable and easy to maintain\n• Custom colours, logos & digital printing available\n• Ideal for sports teams, schools, corporate events & promotional wear",
    customization: "Heat-seal silicone logo transfers, embroidered club crests, custom zipper pullers."
  },
  {
    id: "prod-065",
    categoryId: "apparel",
    apparelType: "hoodies",
    name: "Premium Cotton Fleece DTF Printed Hoodie",
    image: "assets/apparel-fleece-dtf-hoodie-mountain.png",
    subtitle: "340 GSM | 100% Cotton | Fleece Fabric | DTF Printing | Front & Back Print",
    description: "A premium 340 GSM 100% cotton fleece hoodie designed for warmth, comfort, and standout branding. Featuring vibrant DTF printing on both the front and back, it delivers sharp, detailed designs with a premium finish. Perfect for corporate merchandise, team apparel, promotional campaigns, events, college wear, and customized fashion collections.\n\nKey Features:\n• 340 GSM heavyweight fabric\n• 100% cotton fleece\n• Soft, warm & comfortable\n• Front & back DTF printing\n• Vibrant and detailed prints\n• Hood with adjustable drawstrings\n• Kangaroo front pocket\n• Ribbed cuffs and hem",
    customization: "Front & back DTF printing, custom logos, team branding, vibrant pantone color matching."
  },
  {
    id: "prod-066",
    categoryId: "apparel",
    apparelType: "hoodies",
    name: "Premium Brushed Fleece Vinyl Print Sweatshirt",
    image: "assets/apparel-brushed-fleece-sweatshirt-rifle.png",
    subtitle: "320 GSM | 100% Cotton | Brushed Fleece | Round Neck | Vinyl Printing",
    description: "A premium 320 GSM 100% cotton brushed fleece sweatshirt designed for superior warmth, softness, and comfort. Featuring a classic round-neck silhouette and premium vinyl printing, it delivers a clean, bold finish—perfect for corporate merchandise, team apparel, promotional campaigns, events, and customized clothing.\n\nKey Features:\n• 320 GSM heavyweight fabric\n• 100% cotton brushed fleece\n• Soft & warm inner finish\n• Classic round-neck sweatshirt\n• High-quality vinyl printing\n• Durable and premium print finish\n• Ribbed cuffs and hem",
    customization: "High-quality vinyl printing, personalized graphics, corporate team logos, custom sizing."
  },
  {
    id: "prod-068",
    categoryId: "apparel",
    apparelType: "hoodies",
    name: "Premium Cotton Brushed Fleece DTF Hoodie",
    image: "assets/apparel-brushed-fleece-dtf-hoodie-5000.png",
    subtitle: "340 GSM | 100% Cotton | Brushed Fleece | Hooded | DTF Printing",
    description: "A premium 340 GSM 100% cotton brushed fleece hoodie designed for superior warmth, comfort, and durability. The soft brushed fleece construction provides a cozy feel, while high-quality DTF printing delivers vibrant, sharp, and detailed designs. Ideal for corporate merchandise, team wear, promotional campaigns, events, college wear, and customized apparel.\n\nKey Features:\n• 340 GSM heavyweight fabric\n• 100% cotton brushed fleece\n• Soft & warm inner finish\n• Premium DTF printing\n• Vibrant and detailed prints\n• Adjustable hood with drawstrings\n• Kangaroo front pocket\n• Ribbed cuffs and hem",
    customization: "High-definition DTF printing, custom chest & back artwork, custom drawstring tips."
  },

  // 3. Custom Mugs & Drinkware
  {
    id: "prod-024",
    categoryId: "mugs",
    name: "Ceramic Coffee Mug",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.37 PM (1).jpeg",
    subtitle: "330ml Ceramic Mug with Sky Blue Rim & Handle",
    description: "A classic and versatile Ceramic Coffee Mug designed for everyday office and home use. Its smooth finish and comfortable handle make it ideal for enjoying coffee, tea, and other beverages.",
    customization: "Personalize with your company logo, brand colours, employee names, messages, or custom artwork—perfect for corporate gifting, employee appreciation, welcome kits, events, and promotional merchandise."
  },
  {
    id: "prod-025",
    categoryId: "mugs",
    name: "Corporate Appreciation Ceramic Mug (Piramal Edition)",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.37 PM (2).jpeg",
    subtitle: "Employee Recognition High-Gloss Mug",
    description: "A classic and versatile Ceramic Coffee Mug designed for everyday office and home use. Its smooth finish and comfortable handle make it ideal for enjoying coffee, tea, and other beverages.",
    customization: "Personalize with your company logo, brand colours, employee names, messages, or custom artwork—perfect for corporate gifting, employee appreciation, welcome kits, events, and promotional merchandise."
  },
  {
    id: "prod-026",
    categoryId: "mugs",
    name: "Employee Recognition Ceramic Mug (Spotify Edition)",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.37 PM.jpeg",
    subtitle: "Creative Corporate Culture Coffee Mug",
    description: "A classic and versatile Ceramic Coffee Mug designed for everyday office and home use. Its smooth finish and comfortable handle make it ideal for enjoying coffee, tea, and other beverages.",
    customization: "Personalize with your company logo, brand colours, employee names, messages, or custom artwork—perfect for corporate gifting, employee appreciation, welcome kits, events, and promotional merchandise."
  },
  {
    id: "prod-027",
    categoryId: "mugs",
    name: "Durable Finish Ceramic Coffee Mug",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.38 PM (1).jpeg",
    subtitle: "Smooth Durable Finish Office & Everyday Mug",
    description: "A stylish and lightweight Enamel Mug with a classic, durable design, perfect for everyday use at home, in the office, or outdoors. Its timeless look makes it a versatile choice for both personal and corporate gifting.",
    customization: "Personalize with your company logo, brand name, team identity, names, messages, or custom artwork—ideal for corporate gifting, events, promotional merchandise, and welcome kits."
  },
  {
    id: "prod-028",
    categoryId: "mugs",
    name: "Personalized Heart-Handle Ceramic Mug",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.38 PM.jpeg",
    subtitle: "Ceramic Mug with Blue Rim & Sculpted Handle",
    description: "A charming heart-handle ceramic mug designed to add a personal touch to every coffee or tea break. Featuring an elegant floral design and customizable name or initials, it makes a thoughtful and stylish gift.",
    customization: "Personalize with names, initials, messages, logos, photos, or custom artwork—perfect for birthdays, anniversaries, employee gifts, corporate gifting, and special occasions."
  },
  {
    id: "prod-029",
    categoryId: "mugs",
    name: "Corporate Milestone Ceramic Mug (Accenture / TIAA)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.53 PM (1).jpeg",
    subtitle: "Dual-Branded Enterprise Celebration Mug",
    description: "High-grade 11oz ceramic mug produced for large corporate partnerships and project completions, celebrating team excellence with crisp dual-brand vector printing.",
    customization: "Dual corporate logo layout, custom celebration date, glossy or matte finish."
  },
  {
    id: "prod-030",
    categoryId: "mugs",
    name: "Automatic Self-Stirring Glass Mug with Wooden Lid",
    image: "assets/WhatsApp Image 2026-09-10 at 12.41.05 AM.jpeg",
    subtitle: "400ml Borosilicate Glass with Wooden Handle",
    description: "Experience effortless mixing with our Smart Self-Stirring Coffee Mug. Designed with an automatic stirring mechanism, this innovative mug blends coffee, tea, milk, chocolate, and other beverages with just a touch of a button.\n\nThe 400ml glass mug features a stylish wooden-look lid and handle, making it a practical and elegant addition to any office desk or home.\n\nKey Features:\n• 400ml capacity\n• Automatic self-stirring function\n• Rechargeable design\n• Transparent glass body\n• Secure lid to help prevent spills\n• Ideal for coffee, tea, milk & hot beverages\n• Stylish and modern design",
    customization: "Add your company logo, brand identity, name, or custom artwork for a premium corporate gifting or promotional experience."
  },
  {
    id: "prod-031",
    categoryId: "mugs",
    name: "Insulated Matte Desk Tumbler with Flip-Lock Sip Lid",
    image: "assets/WhatsApp Image 2026-09-10 at 12.51.47 AM.jpeg",
    subtitle: "Double-Wall Stainless Steel Compact Tumbler",
    description: "A sleek and practical insulated coffee tumbler designed for everyday use at the office, home, or on the go. Its double-wall insulation helps maintain beverage temperature, while the transparent lid with a convenient straw opening offers added ease of use.",
    customization: "Personalize with your company logo, brand colours, names, messages, or custom artwork—perfect for corporate gifting, employee welcome kits, events, and promotional merchandise."
  },
  {
    id: "prod-032",
    categoryId: "mugs",
    name: "Executive Thermal Desk Mug with Handle & Seal Lid",
    image: "assets/WhatsApp Image 2026-09-10 at 12.55.30 AM.jpeg",
    subtitle: "Modern Minimalist Insulated Office Mug",
    description: "A sleek and practical insulated travel mug designed to keep your beverages at the right temperature while you work, travel, or relax. With a comfortable ergonomic handle, secure lid, and modern finish, it’s perfect for everyday use.",
    customization: "Personalize with your company logo, brand colours, name, employee details, or custom artwork—an excellent choice for corporate gifting, employee welcome kits, events, and promotional merchandise."
  },
  {
    id: "prod-003",
    categoryId: "mugs",
    name: "Employee Appreciation Mug & Gift Hamper Set",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.46 PM (2).jpeg",
    subtitle: "Custom Mug with Designer Gold Pattern Box & Keepsake",
    description: "Signature corporate appreciation hamper featuring customized ceramic coffee mugs paired with luxury gold damask patterned gift boxes and personalized wooden keepsake cards.",
    customization: "Client logo & employee appreciation graphics, custom gift wrap pattern, laser-engraved wooden message tag."
  },

  // 4. Bottles & Vacuum Flasks
  {
    id: "prod-033",
    categoryId: "bottles",
    name: "Floral Monogram Skinny Vacuum Tumbler",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.39 PM (1).jpeg",
    subtitle: "Double-Wall Stainless Steel Slim Tumbler",
    description: "A sleek and elegant slim stainless steel bottle designed for everyday hydration with a stylish, modern look. Its streamlined shape makes it easy to carry, while the personalized floral and name design adds a unique touch.",
    customization: "Personalize with names, initials, logos, brand colours, messages, or custom artwork—perfect for corporate gifting, employee welcome kits, celebrations, and promotional merchandise."
  },
  {
    id: "prod-034",
    categoryId: "bottles",
    name: "Insulated Stainless Steel Cola Flask (Mer C Signature)",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.39 PM (2).jpeg",
    subtitle: "750ml Ergonomic Vacuum Insulated Flask",
    description: "A sleek and durable stainless steel vacuum bottle designed to keep beverages hot or cold for longer. Its elegant shape, secure screw lid, and premium finish make it ideal for everyday use at the office, while travelling, or on the go.",
    customization: "Personalize with your company logo, brand name, employee names, team identity, or custom artwork for corporate gifting, employee welcome kits, sports events, conferences, and promotional merchandise."
  },
  {
    id: "prod-035",
    categoryId: "bottles",
    name: "Active Sports Water Bottle with Carabiner Loop",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.39 PM.jpeg",
    subtitle: "Single-Wall Lightweight Aluminum Sports Bottle",
    description: "A sleek and lightweight sports water bottle designed for everyday hydration at the gym, office, sports events, or while travelling. Featuring a convenient carry loop and secure cap, it is easy to carry and ideal for an active lifestyle.",
    customization: "Personalize with your company logo, team branding, names, numbers, colours, or custom artwork—perfect for sports events, tournaments, corporate gifting, employee welcome kits, and promotional merchandise."
  },
  {
    id: "prod-036",
    categoryId: "bottles",
    name: "Matte Black Sports Vacuum Flask (Neeraj Chopra Edition)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.45 PM (3).jpeg",
    subtitle: "Premium Matte Powder-Coated Thermal Bottle",
    description: "A sleek and durable sports insulated bottle designed for athletes, fitness enthusiasts, and active lifestyles. Its premium matte finish and convenient screw-top design make it ideal for the gym, training sessions, sports events, travel, and everyday hydration.",
    customization: "Personalize with team logos, player names, numbers, event branding, sponsor logos, or custom artwork—perfect for sports tournaments, corporate events, fitness clubs, team welcome kits, and promotional merchandise."
  },

  // 5. Diaries & Executive Notebooks
  {
    id: "prod-001",
    categoryId: "diaries",
    name: "Executive Conference Portfolio Organizer Set",
    image: "assets/WhatsApp Image 2026-09-10 at 12.13.33 AM.jpeg",
    subtitle: "Complete Desk Conference Gift Suite",
    description: "A sophisticated all-in-one executive writing kit designed to keep your everyday essentials organized. Featuring a sleek organizer with a writing pad, ruler, pens, pencils, eraser, sharpener, sticky notes, and page markers, it is ideal for meetings, planning, note-taking, and office use.",
    customization: "Personalize the kit with your company logo, brand name, colours, employee names, or custom artwork—perfect for corporate gifting, employee welcome kits, conferences, seminars, training programs, and promotional events."
  },
  {
    id: "prod-037",
    categoryId: "diaries",
    name: "Premium Tan Leatherette Magnetic Clasp Notebook",
    image: "assets/WhatsApp Image 2026-09-09 at 11.45.42 PM.jpeg",
    subtitle: "A5 Hardbound Executive Ruled Journal",
    description: "A sophisticated leatherette executive diary designed for professionals, meetings, planning, and everyday note-taking. Featuring a smooth finish, elegant stitching, a secure strap closure, and a convenient metal branding plate, it combines functionality with a premium executive look.",
    customization: "Personalize with your company logo, brand name, employee names, initials, or custom engraving—ideal for corporate gifting, conferences, business events, and promotional merchandise."
  },
  {
    id: "prod-038",
    categoryId: "diaries",
    name: "Executive Black Suede Organizer Diary with Loop Closure",
    image: "assets/WhatsApp Image 2026-09-09 at 11.48.25 PM.jpeg",
    subtitle: "Soft-Touch Suede Matte Black Corporate Planner",
    description: "A sophisticated suede-finish executive diary designed for professionals who value style and functionality. Its soft-touch cover, clean design, and secure strap closure give it a refined look, making it ideal for meetings, planning, note-taking, and everyday office use.",
    customization: "Personalize with your company logo, brand name, employee names, initials, or custom artwork—perfect for corporate gifting, employee welcome kits, conferences, and business events."
  },

  // 6. Executive Metal Pens
  {
    id: "prod-039",
    categoryId: "pens",
    name: "Luxury Brushed Gold Metal Ballpoint Pen",
    image: "assets/WhatsApp Image 2026-09-09 at 11.57.05 PM (1).jpeg",
    subtitle: "Satin Gold Finish with High-Precision German Refill",
    description: "A sleek and elegant metal ball pen designed for smooth writing and everyday professional use. With its refined finish, stylish detailing, and comfortable grip, it makes a practical addition to any desk or stationery collection.",
    customization: "Personalize with your company logo, brand name, perfect for corporate gifting, conferences, employee welcome kits, promotional merchandise, and business events."
  },
  {
    id: "prod-040",
    categoryId: "pens",
    name: "Matte Stealth Black Metal Ballpoint Pen",
    image: "assets/WhatsApp Image 2026-09-09 at 11.57.05 PM (2).jpeg",
    subtitle: "Full Matte Black Monochromatic Executive Pen",
    description: "A sleek and reliable Executive Click Ball Pen designed for smooth writing and everyday professional use. Its minimalist black finish, comfortable grip, and convenient click mechanism make it a practical addition to any office or stationery collection.",
    customization: "Personalize with your company logo, brand name ideal for corporate gifting, conferences, employee welcome kits, promotional merchandise, and business events."
  },
  {
    id: "prod-041",
    categoryId: "pens",
    name: "Classic Black Lacquer & Gold Trim Rollerball Pen",
    image: "assets/WhatsApp Image 2026-09-09 at 11.57.05 PM.jpeg",
    subtitle: "High-Gloss Piano Lacquer Executive Rollerball",
    description: "A sophisticated premium executive pen featuring a glossy black finish with elegant gold-tone accents. Designed to make a statement, it offers a refined writing experience and a luxurious look—perfect for professionals, executives, and premium gifting.",
    customization: "Personalize with your company logo, brand name, ideal for corporate gifting, executive gifts, conferences, VIP events, and premium welcome kits."
  },
  {
    id: "prod-042",
    categoryId: "pens",
    name: "Matte Black & Brushed Brass Executive Pen",
    image: "assets/WhatsApp Image 2026-09-10 at 12.02.20 AM (1).jpeg",
    subtitle: "Two-Tone Architectural Executive Writing Pen",
    description: "A sophisticated 2-in-1 Stylus Metal Pen that combines smooth writing with effortless touchscreen navigation. Featuring a premium matte finish, elegant metal accents, and a responsive stylus tip, it is perfect for modern professionals who work across both paper and digital devices.\n\nKey Features:\n• Smooth ballpoint writing experience\n• Built-in touchscreen stylus tip\n• Premium metal construction\n• Comfortable grip and balanced design\n• Compatible with smartphones, tablets, and touchscreens\n• Elegant executive look",
    customization: "Personalize with your company logo, brand name, ideal for corporate gifting, conferences, employee welcome kits, promotional merchandise, and business events."
  },
  {
    id: "prod-043",
    categoryId: "pens",
    name: "Sleek Rose Gold Executive Metal Pen",
    image: "assets/WhatsApp Image 2026-09-10 at 12.02.20 AM.jpeg",
    subtitle: "Modern Metallic Rose Gold Ballpoint Pen",
    description: "Chic luxury pen with soft blush metallic body and polished rose gold appointments. Highly popular for executive women's day gifting, board conferences, and premium kits.",
    customization: "Precision laser engraving, white silk screen printing, luxury presentation box."
  },
  {
    id: "prod-044",
    categoryId: "pens",
    name: "Polished Onyx & Gold Accent Ballpoint Pen",
    image: "assets/WhatsApp Image 2026-09-10 at 12.02.21 AM (1).jpeg",
    subtitle: "High-Gloss Jet Black with Golden Trim",
    description: "Traditional corporate gifting favorite with deep gloss black finish, mirror-polished gold clip, cone, and crown. Delivers silky smooth line glide on corporate documents.",
    customization: "Crisp laser engraving, individual personalization, branded inner box insert."
  },
  {
    id: "prod-045",
    categoryId: "pens",
    name: "Metallic Azure Blue Signature Ballpoint Pen",
    image: "assets/WhatsApp Image 2026-09-10 at 12.02.21 AM.jpeg",
    subtitle: "Vibrant Anodized Light Blue Executive Pen",
    description: "Dynamic metallic royal-to-azure blue ballpoint pen perfectly aligned with light-blue corporate branding. Features all-metal construction and high-yield blue ballpoint cartridge.",
    customization: "Silver laser engraving, pad print, custom company slogan packaging."
  },

  // 7. Desk Accessories & Organizers
  {
    id: "prod-046",
    categoryId: "desk-accessories",
    name: "Custom Printed Corporate Round Coaster Set",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.40 PM (1).jpeg",
    subtitle: "High-Density Non-Slip Cork/MDF Desk Coasters",
    description: "Stylish and practical MDF coasters designed to protect surfaces while adding a personalized touch to any desk, table, or workspace. With a smooth, printable surface, they are ideal for vibrant branding and creative designs.",
    customization: "Personalize with company logos, event branding, team colours, names, messages, or custom artwork—perfect for corporate gifting, welcome kits, sports events, conferences, cafés, and promotional merchandise."
  },
  {
    id: "prod-047",
    categoryId: "desk-accessories",
    name: "Signature Branded Ergonomic Mouse Pad (Mer C)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.09.53 PM (1).jpeg",
    subtitle: "Micro-Weave Cloth Surface with Anti-Slip Base",
    description: "A sleek and durable custom mouse pad designed for smooth mouse movement and comfortable everyday use. Its compact desk-friendly size and premium finish make it ideal for both professional workspaces and gaming setups.",
    customization: "Personalize with your company logo, brand name, team identity, colours, graphics, names, or custom artwork—perfect for corporate gifting, gaming merchandise, promotional merchandise, and branded workspaces."
  },
  {
    id: "prod-048",
    categoryId: "desk-accessories",
    name: "Premium Extended Office Desk Mat (Mer C Setup)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.09.53 PM (2).jpeg",
    subtitle: "Extra-Large Desk Blotter for Keyboard & Mouse",
    description: "A stylish and durable gaming mouse pad designed for smooth, precise mouse movement and an enhanced gaming experience. Its large surface provides ample room for your mouse and keyboard, while the sleek design adds a modern touch to any gaming or work setup.",
    customization: "Personalize with gaming graphics, team logos, company branding, names, or custom artwork—perfect for gaming communities, esports events, corporate gifting, promotional merchandise, and branded setups."
  },
  {
    id: "prod-049",
    categoryId: "desk-accessories",
    name: "Executive Metal Perpetual Desk Calendar",
    image: "assets/WhatsApp Image 2026-09-10 at 12.36.10 AM.jpeg",
    subtitle: "Matte Black Easel with Sliding Gold Date Selector",
    description: "A stylish and practical perpetual desktop calendar designed to help organize your schedule year after year. Its reusable design eliminates the need for replacing the calendar annually, making it a smart addition to any office desk or workspace.",
    customization: "Personalize with your company logo, brand name, colours, messages, or custom branding—perfect for corporate gifting, employee welcome kits, office desks, conferences, and promotional merchandise."
  },
  {
    id: "prod-050",
    categoryId: "desk-accessories",
    name: "Compact Hard-Shell Tech & Travel Organizer Case",
    image: "assets/WhatsApp Image 2026-09-10 at 12.23.49 AM.jpeg",
    subtitle: "Shockproof EVA Case for Cables, Chargers & Gear",
    description: "A stylish and durable hard shell travel organizer designed to keep your essentials neatly arranged while travelling. Its compact design features multiple compartments, elastic holders, mesh pockets, and secure zip closures—perfect for organizing cables, chargers, accessories, toiletries, and other travel essentials.",
    customization: "Personalize with your company logo, brand name, ideal for corporate travel kits, employee welcome kits, business travellers, conferences, and promotional gifting."
  },

  // 8. Handcrafted Keychains & Resin Art
  {
    id: "prod-051",
    categoryId: "keychains-resin",
    name: "Custom Resin Gold Leaf Corporate Keychain (Accenture / TIAA)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.52 PM.jpeg",
    subtitle: "Hand-Poured Epoxy Resin with 24K Style Gold Flakes",
    description: "A premium customized resin keychain featuring elegant gold foil detailing and personalized corporate branding. A thoughtful choice for employee appreciation, corporate events, team gifts, and bulk gifting.\n\nCustomizable:\n• Company Logo\n• Names\n• Initials\n• Colors\n• Messages\n\nBulk Orders Available | Custom Designs Welcome",
    customization: "Full custom logo embedding, client color tints, personalized team names, and metallic gold foil suspended flakes."
  },
  {
    id: "prod-059",
    categoryId: "keychains-resin",
    name: "Bulk Resin Keychain & Presentation Gift Hamper",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.46 PM (1).jpeg",
    subtitle: "Corporate Event Golden Hamper & Favor Bags",
    description: "Handcrafted Resin Art Keychains made especially for bulk gifting and corporate orders. Customize them with company logos, names, initials, colors, and themes.\n\n✨ Ideal for Corporate Gifting • Events • Employee Gifts • Return Gifts • Promotional Merchandise\n\nBulk orders welcome | Custom designs available",
    customization: "Complete branding package, bespoke organza bag colors, custom greeting cards, logo embedding."
  },
  {
    id: "prod-053",
    categoryId: "keychains-resin",
    name: "Handcrafted Resin Seashell Trinket Dish",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.53 PM.jpeg",
    subtitle: "Aqua Teal & Gold Rim Artisan Conch Dish",
    description: "A beautifully handcrafted Resin Art Candle Holder featuring a unique ocean-inspired design with rich aqua tones and elegant gold detailing.\n\n✨ Handcrafted • Unique Design • Premium Finish\n\nPerfect for home décor, gifting, festive hampers, return gifts, and customized corporate gifts.\n\nCustom colors & designs available | Bulk orders welcome",
    customization: "Bespoke resin pigment blends, custom gold leaf accents, bulk corporate gift packaging with personalized note."
  },
  {
    id: "prod-054",
    categoryId: "keychains-resin",
    name: "Artisan Seashell & Pearl Resin Framed Mirror",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.48 PM.jpeg",
    subtitle: "Handmade Coastal Resin Wall Mirror",
    description: "Statement artisanal wall mirror framed with hand-placed natural sea shells, river pebbles, lustrous faux pearls, and translucent ocean-blue epoxy resin.",
    customization: "Custom frame dimensions, curated beach pebbles and shells, bespoke luxury packaging."
  },
  {
    id: "prod-055",
    categoryId: "keychains-resin",
    name: "Handcrafted Pearl Mosaic Decorative Vanity Mirror",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.47 PM (1).jpeg",
    subtitle: "Circular Resin Floral Pearl Accent Mirror",
    description: "Exquisite circular vanity mirror bordered with handcrafted violet resin florets, iridescent pearl beadwork, and crystal resin fill. A memorable executive gift.",
    customization: "Bespoke corporate color border, custom engraved commemorative brass plaque."
  },

  // 9. Candle Holders & Handcrafted Décor
  {
    id: "prod-056",
    categoryId: "candles",
    name: "Geometric Jesmonite Tealight Candle Holder (Blush Pink)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.47 PM (2).jpeg",
    subtitle: "Hand-Cast Jesmonite / Architectural Vessel",
    description: "Architectural geometric faceted Jesmonite & concrete tealight holder cast in soft blush pink with smooth matte sealer. Functions as an artisanal candle vessel or standalone geometric desk décor. Comes with a scented natural soy wax tealight.",
    customization: "Custom pastel pigment tinting, debossed corporate initials, scented soy refills, matching gift packaging."
  },
  {
    id: "prod-057",
    categoryId: "candles",
    name: "Handcrafted Ceramic Lotus Blossom Urli Vessel",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.47 PM (3).jpeg",
    subtitle: "Ceramic Candle Holder & Festive Décor Urli",
    description: "Traditional sculpted ceramic lotus petal candle vessel finished with warm sunny yellow crackle glaze. Functions as a floating candle holder, potpourri basin, or festive Diwali décor centerpiece.",
    customization: "Custom glaze colors, festive gift hamper pairing, branded gift sleeves."
  },
  {
    id: "prod-058",
    categoryId: "candles",
    name: "Dual-Layer Ocean Gel & Soy Wax Seashell Glass Candle",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.54 PM.jpeg",
    subtitle: "Transparent Ocean Gel with Seashells & Soy Wax",
    description: "Aromatherapy glassware candle featuring a transparent sea-green mineral gel bottom embedded with real miniature seashells and topped with frosted scented soy wax.",
    customization: "Custom aromatherapy fragrances (Ocean Breeze, Sandalwood, Lavender), custom branded glass print."
  },
  {
    id: "prod-060",
    categoryId: "bottles",
    name: "Executive Quencher Travel Tumbler with Ergonomic Handle",
    image: "assets/WhatsApp Image 2026-09-10 at 10.15.59 AM.jpeg",
    subtitle: "1200ml Vacuum Insulated All-Day Desk Tumbler",
    description: "A stylish and durable insulated travel tumbler designed for convenient everyday hydration. Featuring a large ergonomic handle, secure transparent lid, and sleek matte finish, it is ideal for keeping your beverage hot or cold while at work, travelling, or on the go.",
    customization: "Personalize with your company logo, brand name, colours, employee names, initials, or custom artwork—perfect for corporate gifting, employee welcome kits, events, sports merchandise, and promotional giveaways."
  },
  {
    id: "prod-061",
    categoryId: "bottles",
    name: "Luxury Gold Stainless Steel Pocket Flask Gift Set",
    image: "assets/WhatsApp Image 2026-09-10 at 10.20.31 AM.jpeg",
    subtitle: "Mirror-Polished Metallic Flask in Presentation Box",
    description: "A sophisticated stainless steel hip flask with a sleek, polished finish and compact design. Perfect for elegant gifting and special occasions, it combines classic style with convenient portability.",
    customization: "Personalize with your company logo, initials, name, message, or custom engraving for a distinctive touch—ideal for premium corporate gifting, executive gifts, celebrations, and special events."
  },
  {
    id: "prod-062",
    categoryId: "bags",
    name: "Executive Dual-Tone Vegan Leather Laptop Briefcase",
    image: "assets/WhatsApp Image 2026-09-10 at 10.28.14 AM.jpeg",
    subtitle: "Onyx Black with Tan Leather Accents & Trolley Sleeve",
    description: "A stylish and professional laptop bag designed for modern work and business needs. Its spacious structure, secure zip closure, sturdy handles, and premium finish make it ideal for carrying laptops, documents, and everyday essentials.\n\nPerfect for:\n• Corporate gifting\n• Employee welcome kits\n• Business professionals\n• Conferences\n• Promotional merchandise",
    customization: "Add your company logo, employee name, or branding for a personalized corporate gift."
  },
  {
    id: "prod-063",
    categoryId: "bags",
    name: "Heritage Mocha Brown Vegan Leather Laptop Bag",
    image: "assets/WhatsApp Image 2026-09-10 at 10.29.52 AM.jpeg",
    subtitle: "Multi-Compartment Executive Work & Travel Briefcase",
    description: "A sophisticated brown laptop bag with a spacious design, front utility pocket, sturdy top handles, and premium finish—perfect for professionals and corporate gifting.\n\nPerfect for:\n• Corporate gifts\n• Employee kits\n• Business professionals\n• Conferences\n• Promotional merchandise",
    customization: "Add your company logo, employee name, or branding for a personalized corporate gift."
  },
  {
    id: "prod-064",
    categoryId: "bottles",
    name: "Minimalist White Vacuum Tumbler with Pivot Carry Handle",
    image: "assets/WhatsApp Image 2026-09-10 at 10.39.46 AM.jpeg",
    subtitle: "Matte Finish Thermal Travel Flask with Integrated Loop",
    description: "A sleek and versatile insulated travel tumbler designed for convenient everyday use. Featuring a comfortable carry handle, secure flip-top lid, and modern stainless-steel construction, it is ideal for keeping beverages hot or cold at work, while travelling, or on the go.",
    customization: "Personalize with your company logo, brand name, colours, employee names, initials, or custom artwork—perfect for corporate gifting, employee welcome kits, events, sports merchandise, and promotional giveaways."
  }
];

// App State
let currentCategory = "all";
let currentApparelSubfilter = "all";
let searchQuery = "";
let modalActiveProductId = null;

// Helpers
function getCategoryById(catId) {
  return CATEGORIES.find(c => c.id === catId);
}

function getCategoryWhatsAppUrl(cat) {
  const message = `Hello MerC APPERALS AND ACCESSORIES Team, I am interested in your Corporate "${cat.name}" collection. I would like to know about pricing, customization options, and bulk order availability for my organization.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getGeneralWhatsAppUrl() {
  const message = "Hello MerC APPERALS AND ACCESSORIES Team, I am browsing your corporate gifting catalogue and would like to discuss custom branded products and bulk order solutions for our company.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getProductWhatsAppUrl(product) {
  const cat = getCategoryById(product.categoryId);
  const catName = cat ? cat.name : "Corporate Gifting";
  const message = `Hello MerC APPERALS AND ACCESSORIES Team, I was browsing your catalogue and I am interested in the "${product.name}" under your ${catName} collection. Please share bulk pricing, branding options, and minimum order quantities.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Render Category Showcase Cards in the Hero/Overview section
function renderCategoryCards() {
  const container = document.getElementById("categoryShowcaseGrid");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    const count = PRODUCTS.filter(p => p.categoryId === cat.id).length;
    return `
      <article class="category-card-modern" data-category="${cat.id}">
        <div class="category-card-media-wrap">
          <img src="${cat.representativeImage}" alt="${cat.name}" loading="lazy" />
          <span class="category-card-chip">${count} Items</span>
        </div>
        <div class="category-card-details">
          <h3 class="category-card-name">${cat.name}</h3>
          <p class="category-card-text">${cat.description}</p>
          <div class="category-card-link-row">
            <span class="category-explore-link">
              <span>Explore Collection</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach click events to cards
  container.querySelectorAll(".category-card-modern").forEach(el => {
    el.addEventListener("click", () => {
      const catId = el.getAttribute("data-category");
      if (catId) {
        selectCategory(catId);
        const catalogSection = document.getElementById("catalog");
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

// Render Filter Pills in Catalog section
function renderCategoryPills() {
  const container = document.getElementById("categoryPillsContainer");
  if (!container) return;

  const totalCount = PRODUCTS.length;
  let html = `
    <button class="filter-pill-modern ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
      All Products (${totalCount})
    </button>
  `;

  html += CATEGORIES.map(cat => {
    const count = PRODUCTS.filter(p => p.categoryId === cat.id).length;
    const isActive = currentCategory === cat.id ? "active" : "";
    return `
      <button class="filter-pill-modern ${isActive}" data-category="${cat.id}">
        ${cat.shortName} (${count})
      </button>
    `;
  }).join("");

  container.innerHTML = html;

  container.querySelectorAll(".filter-pill-modern").forEach(btn => {
    btn.addEventListener("click", () => {
      const catId = btn.getAttribute("data-category");
      selectCategory(catId);
    });
  });
}

// Render Apparel Subcategory Navigation (Active when Apparel is selected)
function renderApparelSubfilters() {
  const container = document.getElementById("apparelSubfilterContainer");
  if (!container) return;

  if (currentCategory !== "apparel") {
    container.style.display = "none";
    container.innerHTML = "";
    currentApparelSubfilter = "all";
    return;
  }

  container.style.display = "flex";
  const apparelProducts = PRODUCTS.filter(p => p.categoryId === "apparel");
  const roundNeckCount = apparelProducts.filter(p => p.apparelType === "round-neck").length;
  const poloCount = apparelProducts.filter(p => p.apparelType === "polo").length;
  const hoodiesCount = apparelProducts.filter(p => p.apparelType === "hoodies").length;

  const subfilters = [
    { id: "all", label: "All Apparel", count: apparelProducts.length },
    { id: "round-neck", label: "Round Neck T-Shirts", count: roundNeckCount },
    { id: "polo", label: "Polo Neck T-Shirts", count: poloCount },
    { id: "hoodies", label: "Hoodies & Sweatshirts", count: hoodiesCount }
  ];

  container.innerHTML = subfilters.map(sub => `
    <button class="apparel-subpill ${currentApparelSubfilter === sub.id ? 'active' : ''}" data-sub="${sub.id}">
      <span>${sub.label}</span>
      <span class="subpill-count">(${sub.count})</span>
    </button>
  `).join("");

  container.querySelectorAll(".apparel-subpill").forEach(btn => {
    btn.addEventListener("click", () => {
      currentApparelSubfilter = btn.getAttribute("data-sub") || "all";
      renderApparelSubfilters();
      renderProductGrid();
    });
  });
}

// Render Dynamic Category Header and the Category-Level WhatsApp CTA Bar
function renderCategoryHeader() {
  const bannerContainer = document.getElementById("catalogCategoryBanner");
  if (!bannerContainer) return;

  if (currentCategory === "all") {
    bannerContainer.innerHTML = `
      <div class="category-banner-modern all-view">
        <div class="category-banner-content">
          <span class="category-eyebrow-pill">COMPLETE SHOWCASE</span>
          <h2 class="category-banner-title">All Corporate Gifting Collections</h2>
          <p class="category-banner-desc">
            Explore our complete portfolio of ${PRODUCTS.length} customizable products across apparel, drinkware, stationery, executive tech, and artisanal creations.
          </p>
        </div>
        <div class="category-banner-action">
          <a href="${getGeneralWhatsAppUrl()}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            <svg class="whatsapp-icon-mini" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.983.54 1.776.818 2.796.818 3.182 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.24L2 22l1.504-5.485C2.65 15.066 2.2 13.57 2.2 11.938c0-5.518 4.482-10 10-10s9.8 4.482 9.8 10z"/></svg>
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    `;
  } else {
    const cat = getCategoryById(currentCategory);
    if (!cat) return;
    const catProducts = PRODUCTS.filter(p => p.categoryId === cat.id);

    bannerContainer.innerHTML = `
      <div class="category-banner-modern dedicated-view">
        <div class="category-banner-content">
          <span class="category-eyebrow-pill">Active Collection &bull; ${catProducts.length} Items</span>
          <h2 class="category-banner-title">${cat.name}</h2>
          <p class="category-banner-desc">${cat.description}</p>
          <div class="category-custom-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span><strong>Branding Options:</strong> ${cat.customizationNote}</span>
          </div>
        </div>
        <div class="category-banner-action">
          <div class="category-prompt-text">
            <span class="prompt-main">Interested in custom ${cat.shortName}?</span>
            <span class="prompt-sub">Enquire for custom pricing, branding & direct consultation:</span>
          </div>
          <a href="${getCategoryWhatsAppUrl(cat)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            <svg class="whatsapp-icon-mini" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.983.54 1.776.818 2.796.818 3.182 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.24L2 22l1.504-5.485C2.65 15.066 2.2 13.57 2.2 11.938c0-5.518 4.482-10 10-10s9.8 4.482 9.8 10z"/></svg>
            <span>Order ${cat.shortName} on WhatsApp</span>
          </a>
        </div>
      </div>
    `;
  }
}

// Render Products Grid
function renderProductGrid() {
  const container = document.getElementById("productGridContainer");
  const countLabel = document.getElementById("catalogFilteredCount");
  if (!container) return;

  let list = PRODUCTS;

  // Filter by category
  if (currentCategory !== "all") {
    list = list.filter(p => p.categoryId === currentCategory);
  }

  // Filter by apparel subfilter if apparel is selected
  if (currentCategory === "apparel" && currentApparelSubfilter !== "all") {
    list = list.filter(p => p.apparelType === currentApparelSubfilter);
  }

  // Filter by search query
  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(p => {
      const cat = getCategoryById(p.categoryId);
      const catName = cat ? cat.name.toLowerCase() : "";
      return (
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        catName.includes(q)
      );
    });
  }

  if (countLabel) {
    countLabel.textContent = `${list.length} item${list.length === 1 ? '' : 's'} displayed`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 64px 20px; background: #ffffff; border-radius: 20px; border: 1px solid var(--border-subtle);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--sky-400)" stroke-width="1.5" style="margin-bottom: 16px;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 8px;">No matching products found</h3>
        <p style="font-size: 0.95rem; color: var(--slate-500); margin-bottom: 20px;">Try searching for "mug", "bottle", "polo", "pen", or choose another category.</p>
        <button class="btn btn-primary btn-sm" id="resetCatalogFiltersBtn">Reset Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById("resetCatalogFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        currentCategory = "all";
        currentApparelSubfilter = "all";
        searchQuery = "";
        const searchInput = document.getElementById("catalogSearchInput");
        if (searchInput) searchInput.value = "";
        renderAllCatalogViews();
      });
    }
    return;
  }

  container.innerHTML = list.map(product => {
    const cat = getCategoryById(product.categoryId);
    const catShort = cat ? cat.shortName : "Corporate Gift";

    return `
      <article class="product-card-modern" data-id="${product.id}" onclick="openProductModal('${product.id}')">
        <div class="product-media-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-category-chip">${catShort}</span>
          <div class="product-hover-overlay">
            <span class="quick-details-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              Quick Details
            </span>
          </div>
        </div>
        <div class="product-content-box">
          <h3 class="product-item-title">${product.name}</h3>
          <p class="product-item-subtitle">${product.subtitle}</p>
          <div class="product-card-bottom-row">
            <span class="product-view-btn">
              <span>View Details</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Select a Category
function selectCategory(catId) {
  currentCategory = catId;
  currentApparelSubfilter = "all";
  renderCategoryPills();
  renderCategoryHeader();
  renderApparelSubfilters();
  renderProductGrid();
}

// Render everything in catalog
function renderAllCatalogViews() {
  renderCategoryPills();
  renderCategoryHeader();
  renderApparelSubfilters();
  renderProductGrid();
}

// Modal Quick View
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  modalActiveProductId = productId;

  const cat = getCategoryById(product.categoryId);
  const modal = document.getElementById("productModal");
  if (!modal) return;

  const modalImg = document.getElementById("modalProductImage");
  const modalCatBadge = document.getElementById("modalProductCategory");
  const modalTitle = document.getElementById("modalProductTitle");
  const modalSubtitle = document.getElementById("modalProductSubtitle");
  const modalDesc = document.getElementById("modalProductDescription");
  const modalCustomization = document.getElementById("modalProductCustomization");
  const modalBulkPricing = document.getElementById("modalProductBulkPricing");
  const modalWhatsAppBtn = document.getElementById("modalCategoryWhatsAppBtn");
  const modalCategoryPrompt = document.getElementById("modalCategoryPrompt");

  if (modalImg) {
    modalImg.src = product.image;
    modalImg.alt = product.name;
  }
  if (modalCatBadge && cat) modalCatBadge.textContent = cat.name;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalSubtitle) modalSubtitle.textContent = product.subtitle;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalCustomization) modalCustomization.textContent = product.customization;

  // Clear any bulk volume pricing
  if (modalBulkPricing) {
    modalBulkPricing.style.display = "none";
    modalBulkPricing.innerHTML = "";
  }

  if (modalCategoryPrompt && cat) {
    modalCategoryPrompt.textContent = `Enquire about custom ${cat.shortName} and bulk corporate volume for your brand:`;
  }

  if (modalWhatsAppBtn) {
    modalWhatsAppBtn.href = getProductWhatsAppUrl(product);
    modalWhatsAppBtn.querySelector("span").textContent = `Enquire on WhatsApp`;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
  modalActiveProductId = null;
}

// Setup Event Handlers
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProductGrid();
    });
  }

  // Clear search button
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      renderProductGrid();
      searchInput.focus();
    });
  }

  // Modal close handlers
  const closeModalBtn = document.getElementById("closeModalBtn");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeProductModal);
  }

  const modalBackdrop = document.getElementById("modalBackdrop");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeProductModal);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalActiveProductId) {
      closeProductModal();
    }
  });

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const mobileDrawerClose = document.getElementById("mobileDrawerClose");
  const mobileDrawerBackdrop = document.getElementById("mobileDrawerBackdrop");

  function openMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.add("open");
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove("open");
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (mobileMenuToggle) mobileMenuToggle.addEventListener("click", openMobileMenu);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener("click", closeMobileMenu);
  if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener("click", closeMobileMenu);

  // Close mobile drawer when link clicked
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Smooth scroll for nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Initialization on DOM load
document.addEventListener("DOMContentLoaded", () => {
  // Dynamically update hero stat counts
  const heroProdEl = document.getElementById("heroProductsCount");
  if (heroProdEl) {
    heroProdEl.textContent = `${PRODUCTS.length}+`;
  }
  const heroCatEl = document.getElementById("heroCategoriesCount");
  if (heroCatEl) {
    heroCatEl.textContent = `${CATEGORIES.length}`;
  }

  renderCategoryCards();
  renderAllCatalogViews();
  setupEventListeners();

  // Check URL query parameters for category filter or direct product modal
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("category");
  if (catParam && CATEGORIES.some(c => c.id === catParam)) {
    selectCategory(catParam);
    const scrollToCatalog = () => {
      const catalogEl = document.getElementById("catalog");
      if (catalogEl) {
        window.scrollTo(0, catalogEl.offsetTop - 20);
      }
    };
    scrollToCatalog();
    window.addEventListener("load", scrollToCatalog);
    setTimeout(scrollToCatalog, 150);
  }

  const prodParam = urlParams.get("product");
  if (prodParam && PRODUCTS.some(p => p.id === prodParam)) {
    const modal = document.getElementById("productModal");
    if (modal) modal.style.transition = "none";
    openProductModal(prodParam);
    if (modal) {
      void modal.offsetHeight;
      modal.style.transition = "";
    }
  }

  // Update year in footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

