/**
 * MerC APPERALS AND ACCESSORIES - Corporate Gifting Catalogue Engine
 * WhatsApp: +91 99200 71358 | Location: Navi Mumbai
 */

const WHATSAPP_NUMBER = "919920071358";

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
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 3.01.42 PM.jpeg",
    description: "Corporate pique polo shirts, performance athletic jerseys, fleeced sweatshirts, hoodies, and event staff tees.",
    customizationNote: "Computerized embroidery, high-density screen printing, digital sublimation, custom inner neck labels."
  },
  {
    id: "mugs",
    name: "Custom Mugs & Drinkware",
    shortName: "Mugs & Drinkware",
    icon: "coffee",
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 2.49.37 PM (1).jpeg",
    description: "Ceramic office coffee mugs, enamel campfire cups, automatic self-stirring mugs, and insulated thermal desk tumblers.",
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
    name: "Handcrafted Luxury Candles",
    shortName: "Luxury Candles",
    icon: "flame",
    representativeImage: "assets/WhatsApp Image 2026-09-02 at 3.01.47 PM (2).jpeg",
    description: "Geometric concrete tealight holders, ceramic lotus urli candles, and botanical ocean gel seashell glass candles.",
    customizationNote: "Pure soy wax, custom essential oil aromatherapy scents, branded tags and festive gift packaging."
  }
];

// Complete Catalog: Exactly 64 assets from the project
const PRODUCTS = [
  // 1. Corporate Gift Sets & Combos
  {
    id: "prod-001",
    categoryId: "gift-sets",
    name: "Executive Conference Portfolio Organizer Set",
    image: "assets/WhatsApp Image 2026-09-10 at 12.13.33 AM.jpeg",
    subtitle: "Complete Desk Conference Gift Suite",
    description: "A comprehensive executive portfolio kit featuring a refillable ruled notepad, dual wooden ballpoints, eco wooden ruler, eraser, sticky note flags, and business card slots neatly encased in a foldable faux leather folio.",
    customization: "Laser debossed logo on folio exterior, custom printed notepad headers, branded pen engraving."
  },
  {
    id: "prod-002",
    categoryId: "gift-sets",
    name: "Tri-Product Corporate Sports Welcome Kit",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.40 PM.jpeg",
    subtitle: "Insulated Bottle, Ceramic Mug & Coasters",
    description: "High-impact new hire onboarding or athletic event kit including a stainless steel sports water bottle, dual ceramic team mugs, and matching high-density printed round coasters.",
    customization: "Unified organizational emblem printing across all three complementary products."
  },
  {
    id: "prod-003",
    categoryId: "gift-sets",
    name: "Employee Appreciation Mug & Gift Hamper Set",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.46 PM (2).jpeg",
    subtitle: "Custom Mug with Designer Gold Pattern Box & Keepsake",
    description: "Signature corporate appreciation hamper featuring customized ceramic coffee mugs paired with luxury gold damask patterned gift boxes and personalized wooden keepsake cards.",
    customization: "Client logo & employee appreciation graphics, custom gift wrap pattern, laser-engraved wooden message tag."
  },

  // 2. Custom Apparel & Sportswear
  {
    id: "prod-006",
    categoryId: "apparel",
    name: "Executive Corporate Polo T-Shirt (Contrast Collar)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.42 PM.jpeg",
    subtitle: "White Pique Knit with Vibrant Accent Trim",
    description: "Premium combed cotton pique corporate polo featuring bright accent collar and sleeve tipping, vertical company typography on the placket line, and embroidered chest crest.",
    customization: "Screen printing, high-density embroidery, custom dyed collar tipping to match brand hex codes."
  },
  {
    id: "prod-007",
    categoryId: "apparel",
    name: "Premium Solid Pique Polo T-Shirt (Forest Olive)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.43 PM.jpeg",
    subtitle: "100% Cotton Breathable Classic Fit",
    description: "Minimalist executive everyday corporate polo crafted from pre-shrunk combed cotton pique fabric with ribbed collar, reinforced 3-button placket, and side vents.",
    customization: "Subtle tone-on-tone chest embroidery or contrast direct-to-garment corporate logo."
  },
  {
    id: "prod-008",
    categoryId: "apparel",
    name: "Corporate Colorblock Hooded Sweatshirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.44 PM (1).jpeg",
    subtitle: "Tricolor Paneled Heavyweight Fleece Hoodie",
    description: "Contemporary tri-panel fleece hoodie with kangaroo pocket, adjustable drawstring hood, ribbed cuffs and hem, tailored for team offsites and corporate retreats.",
    customization: "Embroidered chest logo patch, screen printed back graphics, custom woven drawstring pullers."
  },
  {
    id: "prod-009",
    categoryId: "apparel",
    name: "Dual-Tone Raglan Corporate Event T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.44 PM (2).jpeg",
    subtitle: "Sky Blue & Navy Athletic Raglan Tee",
    description: "Sporty raglan cut t-shirt featuring contrast sky blue sleeves and navy torso, engineered for company sports days, annual hackathons, and wellness retreats.",
    customization: "Multicolor front screen printing, sponsor sleeve badges, individual participant names."
  },
  {
    id: "prod-010",
    categoryId: "apparel",
    name: "Milestone Commemorative Graphic Crewneck T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.44 PM.jpeg",
    subtitle: "Premium Bio-Washed Cotton Graphic Tee",
    description: "Soft bio-washed 180 GSM cotton crewneck t-shirt celebrating organizational milestones, anniversaries, and company achievements with lasting graphic prints.",
    customization: "Direct-to-film (DTF) high-definition multi-color printing, custom neck label printing."
  },
  {
    id: "prod-011",
    categoryId: "apparel",
    name: "Sublimated Athletic Performance Jersey",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.45 PM (1).jpeg",
    subtitle: "All-Over Sublimation Quick-Dry Sports Tee",
    description: "High-performance moisture-wicking honeycomb poly-mesh jersey with dynamic geometric wave graphics, contrast neck ribbing, and athletic raglan sleeves.",
    customization: "Full 360-degree dye-sublimation, seamless team logo integration, numbered printing."
  },
  {
    id: "prod-012",
    categoryId: "apparel",
    name: "Executive Performance Corporate Tracksuit Set",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.45 PM (2).jpeg",
    subtitle: "Full-Zip Track Jacket & Matching Joggers",
    description: "Two-piece active corporate uniform featuring a mock-neck full-zip jacket with diagonal chevron blocking and tapered athletic track pants with elasticized ankle cuffs.",
    customization: "Heat-seal silicone logo transfers, embroidered club crests, custom zipper pullers."
  },
  {
    id: "prod-013",
    categoryId: "apparel",
    name: "Tricolor Performance Polo T-Shirt (National Series)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.45 PM.jpeg",
    subtitle: "Engineered Dry-Fit Polo with Accent Arc",
    description: "Professional dry-fit polo designed for delegations, tournament contingents, and institutional teams, featuring crisp white base fabric with sweeping athletic arc prints.",
    customization: "Embroidered team crest, sponsor printing, moisture-wicking quick-dry fabric treatment."
  },
  {
    id: "prod-014",
    categoryId: "apparel",
    name: "Custom Graphic Crewneck T-Shirt (Royal Blue)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.54 PM (1).jpeg",
    subtitle: "100% Ring-Spun Cotton Vibrant Daily Tee",
    description: "Durable ring-spun cotton corporate casual t-shirt with seamless double-needle collar, taped neck and shoulders, and fade-resistant pigment dye.",
    customization: "High-density plastisol screen print, metallic foil accents, personalized internal size labels."
  },
  {
    id: "prod-015",
    categoryId: "apparel",
    name: "Dual-Tone Colorblocked Corporate Polo",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.54 PM (2).jpeg",
    subtitle: "Yellow & Navy Premium Pique Uniform Polo",
    description: "Modern split color-block corporate uniform polo with sunshine yellow upper yoke and deep navy lower body, designed for high-visibility professional staff.",
    customization: "Chest embroidery, company badge appliquÃ©, branded buttons."
  },
  {
    id: "prod-016",
    categoryId: "apparel",
    name: "Tricolor Vertical Stripe Corporate Staff Polo",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.54 PM (3).jpeg",
    subtitle: "Navy Pique Polo with Engineered Vertical Ribbon",
    description: "Dignified corporate polo shirt in rich midnight navy with vertical tricolor chest ribbon, crisp white collar, and embroidered institutional insignia.",
    customization: "Direct institutional embroidery, bespoke color stripes matching brand identity."
  },
  {
    id: "prod-017",
    categoryId: "apparel",
    name: "Corporate Event Back-Print Crewneck T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.55 PM (1).jpeg",
    subtitle: "Royal Blue Crewneck with Bold Typography",
    description: "High-impact crewneck event t-shirt designed for volunteer squads, corporate expeditions, and brand activations with prominent rear shoulder branding.",
    customization: "Oversized back screen print, front pocket-area logo embroidery or DTF transfer."
  },
  {
    id: "prod-018",
    categoryId: "apparel",
    name: "Heather Indigo Event Commemorative T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.55 PM (2).jpeg",
    subtitle: "Poly-Cotton Heather Blend Casual Event Tee",
    description: "Vintage-inspired athletic event t-shirt crafted from an ultra-soft heather poly-cotton blend, offering a soft drape and high breathability for day-long conferences.",
    customization: "Screen printed trophy artwork, conference date stamping, custom sponsor logos."
  },
  {
    id: "prod-019",
    categoryId: "apparel",
    name: "Heritage Landmark Graphic Dry-Fit T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.55 PM.jpeg",
    subtitle: "Architectural Skyline Sublimation Tee",
    description: "Special edition athletic t-shirt highlighting fine architectural line art of national monuments against an azure blue gradient with tricolor stripe detail.",
    customization: "Full sublimation with client's preferred city skyline or corporate campus architecture."
  },
  {
    id: "prod-020",
    categoryId: "apparel",
    name: "Heavyweight Crewneck Fleece Sweatshirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.56 PM (1).jpeg",
    subtitle: "320 GSM Brushed Fleece Winter Uniform",
    description: "Cozy brushed fleece corporate crewneck sweatshirt with ribbed collar, hem, and storm cuffs. Ideal for winter corporate gifting and chilly office workspaces.",
    customization: "Diagonal slash typography print, chenille embroidery patch, laser-engraved leather hem tag."
  },
  {
    id: "prod-021",
    categoryId: "apparel",
    name: "Striped Sleeve Athletic Corporate T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.56 PM (2).jpeg",
    subtitle: "Navy Crewneck with Sporty Sleeve Bands",
    description: "Sporty corporate casual crewneck t-shirt featuring stitched contrast sleeve stripes and centered typographic branding, tailored for offsite team building.",
    customization: "Front chest badge printing, contrast sleeve banding in customized pantone colors."
  },
  {
    id: "prod-022",
    categoryId: "apparel",
    name: "Classic Pique Corporate Staff Polo (DW Badge)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.56 PM.jpeg",
    subtitle: "Pristine White Pique Knit Everyday Uniform",
    description: "Standard executive staff polo t-shirt in crisp optic white, featuring reinforced collar points, 3-button front placket, and embroidered corporate chest emblem.",
    customization: "Precision chest badge embroidery, corporate logo printing, collar trim customization."
  },
  {
    id: "prod-023",
    categoryId: "apparel",
    name: "Women's Engineered Dry-Fit Polo T-Shirt",
    image: "assets/WhatsApp Image 2026-09-02 at 3.09.53 PM.jpeg",
    subtitle: "Contoured Fit Quick-Dry Athletic Polo",
    description: "Tailored athletic polo t-shirt for women, cut from quick-drying poly-spandex mesh with open V-placket, side venting panels, and vibrant vertical racing stripes.",
    customization: "Sublimated side panels, heat transfer team logos, custom collar color combinations."
  },

  // 3. Custom Mugs & Drinkware
  {
    id: "prod-024",
    categoryId: "mugs",
    name: "Inspirational Team Ceramic Coffee Mug",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.37 PM (1).jpeg",
    subtitle: "330ml Ceramic Mug with Sky Blue Rim & Handle",
    description: "Glossy white ceramic coffee mug with vibrant sky blue interior and matching ergonomic C-handle, printed with motivational team values for daily desk inspiration.",
    customization: "Full 360-degree sublimation printing, custom team slogans, company logo placement."
  },
  {
    id: "prod-025",
    categoryId: "mugs",
    name: "Corporate Appreciation Ceramic Mug (Piramal Edition)",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.37 PM (2).jpeg",
    subtitle: "Employee Recognition High-Gloss Mug",
    description: "Premium ceramic corporate award mug featuring vibrant watercolor typography and company brandmark, recognizing high-performing departments and team milestones.",
    customization: "Custom typography, corporate logo print, individual team member name personalization."
  },
  {
    id: "prod-026",
    categoryId: "mugs",
    name: "Employee Recognition Ceramic Mug (Spotify Edition)",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.37 PM.jpeg",
    subtitle: "Creative Corporate Culture Coffee Mug",
    description: "Crisp white ceramic mug celebrating workplace culture with musical note typography and clean client logo imprint. Designed for high employee retention and gifting.",
    customization: "Full-color sublimation print, company branding, custom personalized messaging."
  },
  {
    id: "prod-027",
    categoryId: "mugs",
    name: "Vintage White Enamel Campfire Mug (Mer C Signature)",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.38 PM (1).jpeg",
    subtitle: "Durable Steel Campfire Mug with Stainless Rim",
    description: "Timeless rustic steel campfire mug finished with durable glossy white enamel glaze and stainless steel protective rim, branded with the signature Mer C emblem.",
    customization: "Permanent screen printed or baked ceramic decal logo on one or both sides."
  },
  {
    id: "prod-028",
    categoryId: "mugs",
    name: "Personalized Heart-Handle Monogram Mug",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.38 PM.jpeg",
    subtitle: "Ceramic Mug with Blue Rim & Sculpted Handle",
    description: "Artistic ceramic mug with cobalt blue interior and heart-shaped handle, adorned with delicate floral wreath artwork and individual employee monogram initials.",
    customization: "Custom floral alphabet monogramming, individual employee names, branded gift box."
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
    description: "Next-generation smart office mug crafted from high borosilicate glass with volumetric measurement markings, natural wood handle, matching wooden lid with touch stir button, and engraved coaster.",
    customization: "Laser engraved logo on wooden lid and coaster, glass surface screen printing."
  },
  {
    id: "prod-031",
    categoryId: "mugs",
    name: "Insulated Matte Desk Tumbler with Flip-Lock Sip Lid",
    image: "assets/WhatsApp Image 2026-09-10 at 12.51.47 AM.jpeg",
    subtitle: "Double-Wall Stainless Steel Compact Tumbler",
    description: "Compact 300ml modern desk coffee tumbler with eggshell matte white powder coating, transparent splash-proof lid with ergonomic flip clip, and thermal heat retention.",
    customization: "Laser engraving through powder coat, spot UV logo, bespoke color packaging."
  },
  {
    id: "prod-032",
    categoryId: "bottles",
    name: "Executive Thermal Desk Mug with Handle & Seal Lid",
    image: "assets/WhatsApp Image 2026-09-10 at 12.55.30 AM.jpeg",
    subtitle: "Modern Minimalist Insulated Office Mug",
    description: "Sleek white insulated stainless steel office travel mug featuring an architectural ergonomic open handle, polished stainless rim, and snap-tight sealing lid.",
    customization: "Precision laser etching, screen printed logo, custom gift box with ribbon."
  },

  // 4. Bottles & Vacuum Flasks
  {
    id: "prod-033",
    categoryId: "bottles",
    name: "Floral Monogram Skinny Vacuum Tumbler",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.39 PM (1).jpeg",
    subtitle: "Double-Wall Stainless Steel Slim Tumbler",
    description: "Elegant slim profile stainless steel vacuum flask with clear push-in lid, keeping beverages iced or hot for 12+ hours. Styled with custom floral initial monogramming.",
    customization: "360-degree seamless print, custom client colorway, personalized name stamping."
  },
  {
    id: "prod-034",
    categoryId: "bottles",
    name: "Insulated Stainless Steel Cola Flask (Mer C Signature)",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.39 PM (2).jpeg",
    subtitle: "750ml Ergonomic Vacuum Insulated Flask",
    description: "Ergonomic cola-shaped stainless steel vacuum flask with threaded steel leak-proof cap. Vacuum insulation keeps water chilled for 24 hours or piping hot for 12 hours.",
    customization: "Vertical laser engraving, screen printed corporate logo, matte or metallic finish."
  },
  {
    id: "prod-035",
    categoryId: "bottles",
    name: "Active Sports Water Bottle with Carabiner Loop",
    image: "assets/WhatsApp Image 2026-09-02 at 2.49.39 PM.jpeg",
    subtitle: "Single-Wall Lightweight Aluminum Sports Bottle",
    description: "Durable, lightweight single-wall aluminum bottle with leak-proof screw cap and quick-release metal carabiner clip. Ideal for marathon kits, cycling events, and gym perks.",
    customization: "Rotary screen printing, UV printing, branded carabiner attachment."
  },
  {
    id: "prod-036",
    categoryId: "bottles",
    name: "Matte Black Sports Vacuum Flask (Neeraj Chopra Edition)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.45 PM (3).jpeg",
    subtitle: "Premium Matte Powder-Coated Thermal Bottle",
    description: "Sleek stealth black vacuum insulated steel flask featuring a textured powder coat grip, commemorative event graphics, and double-wall temperature lock technology.",
    customization: "Precision fiber laser marking revealing stainless steel underneath, custom graphics."
  },

  // 5. Diaries & Executive Notebooks
  {
    id: "prod-037",
    categoryId: "diaries",
    name: "Premium Tan Leatherette Magnetic Clasp Notebook",
    image: "assets/WhatsApp Image 2026-09-09 at 11.45.42 PM.jpeg",
    subtitle: "A5 Hardbound Executive Ruled Journal",
    description: "Refined saddle-brown PU leatherette journal with perimeter saddle-stitching, metallic azure blue magnetic closure clasp, ribbon bookmark, and 192 bleed-resistant ivory pages.",
    customization: "Blind debossing on leather cover, laser engraved logo on magnetic metal tab, custom tip-in company profile pages."
  },
  {
    id: "prod-038",
    categoryId: "diaries",
    name: "Executive Black Suede Organizer Diary with Loop Closure",
    image: "assets/WhatsApp Image 2026-09-09 at 11.48.25 PM.jpeg",
    subtitle: "Soft-Touch Suede Matte Black Corporate Planner",
    description: "Ultra-luxurious soft-touch suede finish corporate organizer diary with integrated wrap-around loop strap closure, pen holder slot, and undated daily productivity planning layout.",
    customization: "Foil stamping in silver, gold or rose gold, metallic deboss, custom branded packaging."
  },

  // 6. Executive Metal Pens
  {
    id: "prod-039",
    categoryId: "pens",
    name: "Luxury Brushed Gold Metal Ballpoint Pen",
    image: "assets/WhatsApp Image 2026-09-09 at 11.57.05 PM (1).jpeg",
    subtitle: "Satin Gold Finish with High-Precision German Refill",
    description: "Statement corporate pen featuring solid brass body finished in satin brushed gold with polished mirror-gold accents, smooth twist mechanism, and German document-proof ink.",
    customization: "Tone-on-tone laser engraving, individual recipient name engraving, luxury velvet pen pouch."
  },
  {
    id: "prod-040",
    categoryId: "pens",
    name: "Matte Stealth Black Metal Ballpoint Pen",
    image: "assets/WhatsApp Image 2026-09-09 at 11.57.05 PM (2).jpeg",
    subtitle: "Full Matte Black Monochromatic Executive Pen",
    description: "Contemporary minimalist metal ballpoint pen engineered in full matte black anodized aluminum with matching contoured pocket clip and weighted balanced feel.",
    customization: "Silver or brass fiber laser etching revealing metallic core, pad printing."
  },
  {
    id: "prod-041",
    categoryId: "pens",
    name: "Classic Black Lacquer & Gold Trim Rollerball Pen",
    image: "assets/WhatsApp Image 2026-09-09 at 11.57.05 PM.jpeg",
    subtitle: "High-Gloss Piano Lacquer Executive Rollerball",
    description: "Distinguished executive writing instrument with high-gloss multi-layer black lacquer barrel, 24K-gold electroplated center ring and pocket clip, with ceramic ball refill.",
    customization: "Gold foil filled laser engraving, custom corporate logo on clip or barrel."
  },
  {
    id: "prod-042",
    categoryId: "pens",
    name: "Matte Black & Brushed Brass Executive Pen",
    image: "assets/WhatsApp Image 2026-09-10 at 12.02.20 AM (1).jpeg",
    subtitle: "Two-Tone Architectural Executive Writing Pen",
    description: "Sleek tapered silhouette combining matte velvet black barrel coating with brushed champagne brass central band and clip. Smooth twist mechanism for daily executive use.",
    customization: "Fine laser marking on clip or upper cap, custom single or dual gift box."
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
    description: "Durable round drink coasters with heat-resistant laminated top surface, vibrant edge-to-edge printing, and non-slip cork base. Protects conference tables and work desks.",
    customization: "Full-color custom corporate branding, set of 4 or 6 with branded holder."
  },
  {
    id: "prod-047",
    categoryId: "desk-accessories",
    name: "Signature Branded Ergonomic Mouse Pad (Mer C)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.09.53 PM (1).jpeg",
    subtitle: "Micro-Weave Cloth Surface with Anti-Slip Base",
    description: "Professional workplace mouse pad engineered with silky micro-weave cloth for pinpoint mouse tracking, anti-fray stitched borders, and non-slip natural rubber base.",
    customization: "Metallic gold foil print or vibrant full-color sublimation with custom client artwork."
  },
  {
    id: "prod-048",
    categoryId: "desk-accessories",
    name: "Premium Extended Office Desk Mat (Mer C Setup)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.09.53 PM (2).jpeg",
    subtitle: "Extra-Large Desk Blotter for Keyboard & Mouse",
    description: "Spacious executive desk pad covering keyboard, mouse, and workspace area. Features water-resistant surface coating, precision stitched borders, and modern executive aesthetics.",
    customization: "Large format high-definition graphic printing, corporate corner branding."
  },
  {
    id: "prod-049",
    categoryId: "desk-accessories",
    name: "Executive Metal Perpetual Desk Calendar",
    image: "assets/WhatsApp Image 2026-09-10 at 12.36.10 AM.jpeg",
    subtitle: "Matte Black Easel with Sliding Gold Date Selector",
    description: "Perpetual lifetime calendar crafted from solid matte black coated steel with magnetic sliding polished gold grid selector and month tracker. A perpetual desk centerpiece.",
    customization: "Laser engraved company name on bottom plinth, custom gift packaging."
  },
  {
    id: "prod-050",
    categoryId: "desk-accessories",
    name: "Compact Hard-Shell Tech & Travel Organizer Case",
    image: "assets/WhatsApp Image 2026-09-10 at 12.23.49 AM.jpeg",
    subtitle: "Shockproof EVA Case for Cables, Chargers & Gear",
    description: "Rugged ribbed hardshell organizer case with dual-zipper closure, elastic cable retaining loops, mesh zipper pocket, and wrist lanyard. Keeps travel tech essentials organized.",
    customization: "Silicone emblem badge, custom zipper pullers, screen printed corporate logo."
  },

  // 8. Handcrafted Keychains & Resin Art
  {
    id: "prod-051",
    categoryId: "keychains-resin",
    name: "Custom Resin Gold Leaf Corporate Keychain (Accenture / TIAA)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.52 PM.jpeg",
    subtitle: "Hand-Poured Epoxy Resin with 24K Style Gold Flakes",
    description: "Artisan handcrafted circular resin keychain with crystal-clear resin, suspended gold foil flakes, durable gold hardware ring, and high-resolution corporate logo embedment.",
    customization: "Full custom logo embedding, client color tints, personalized team names."
  },
  {
    id: "prod-052",
    categoryId: "keychains-resin",
    name: "Artisan Monogram Glitter Resin Charm Keychains",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.46 PM.jpeg",
    subtitle: "Two-Tone Resin Charms with Gold Flake Drift",
    description: "Handcrafted resin initial charms featuring gradient pastel resin colors (sky blue, dusty rose, slate grey) merged with rich gold foil flakes and metallic hardware.",
    customization: "Custom alphabet letters, company pantone color matching, presentation pouch."
  },
  {
    id: "prod-053",
    categoryId: "keychains-resin",
    name: "Handcrafted Resin Seashell Trinket Dish",
    image: "assets/WhatsApp Image 2026-09-02 at 3.06.53 PM.jpeg",
    subtitle: "Aqua Teal & Gold Rim Artisan Conch Dish",
    description: "Sculpted resin conch shell bowl featuring translucent ocean teal resin and hand-gilded golden scalloped edges. Functions as a luxury desk paperclip tray or jewelry catchall.",
    customization: "Bespoke resin pigment blends, custom gift box with personalized note."
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

  // 9. Handcrafted Luxury Candles
  {
    id: "prod-056",
    categoryId: "candles",
    name: "Geometric Concrete Tealight Candle Holder (Blush Pink)",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.47 PM (2).jpeg",
    subtitle: "Hand-Cast Faceted Concrete Candle Vessel",
    description: "Architectural geometric faceted concrete tealight holder cast in soft blush pink with smooth matte sealer. Comes with a scented natural soy wax tealight.",
    customization: "Custom pastel concrete tinting, debossed corporate initials, scented soy refills."
  },
  {
    id: "prod-057",
    categoryId: "candles",
    name: "Handcrafted Ceramic Lotus Blossom Urli Candle",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.47 PM (3).jpeg",
    subtitle: "Marigold Yellow Glazed Lotus Tealight Urli",
    description: "Traditional sculpted ceramic lotus petal candle holder finished with warm sunny yellow crackle glaze. Celebrated for festive Diwali corporate gifting and wellness events.",
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
    id: "prod-059",
    categoryId: "gift-sets",
    name: "Bulk Resin Keychain & Presentation Gift Hamper",
    image: "assets/WhatsApp Image 2026-09-02 at 3.01.46 PM (1).jpeg",
    subtitle: "Corporate Event Golden Hamper & Favor Bags",
    description: "Turnkey corporate giveaway presentation comprising dozens of individual organza gift bags containing customized gold leaf resin keychains with branded kraft gift boxes.",
    customization: "Complete branding package, bespoke organza bag colors, custom greeting cards."
  },
  {
    id: "prod-060",
    categoryId: "bottles",
    name: "Executive Quencher Travel Tumbler with Ergonomic Handle",
    image: "assets/WhatsApp Image 2026-09-10 at 10.15.59 AM.jpeg",
    subtitle: "1200ml Vacuum Insulated All-Day Desk Tumbler",
    description: "High-capacity 1200ml stainless steel double-wall vacuum insulated quencher mug with heavy-duty ergonomic handle, splash-resistant lid with reusable straw, and tapered base designed to fit standard vehicle cup holders. Ideal for busy professionals on the move.",
    customization: "Laser engraving, 360-degree UV rotary printing, custom pantone powder coating, company logo placement."
  },
  {
    id: "prod-061",
    categoryId: "bottles",
    name: "Luxury Gold Stainless Steel Pocket Flask Gift Set",
    image: "assets/WhatsApp Image 2026-09-10 at 10.20.31 AM.jpeg",
    subtitle: "Mirror-Polished Metallic Flask in Presentation Box",
    description: "Distinguished curved pocket hip flask forged from premium food-grade stainless steel with an electroplated mirror-gold finish and leak-proof captive screw top. Presented in an elegant satin-lined gift box, perfect for VIP executive gifting.",
    customization: "Precision fiber laser etching, custom monogramming, bespoke foil-stamped presentation packaging."
  },
  {
    id: "prod-062",
    categoryId: "bags",
    name: "Executive Dual-Tone Vegan Leather Laptop Briefcase",
    image: "assets/WhatsApp Image 2026-09-10 at 10.28.14 AM.jpeg",
    subtitle: "Onyx Black with Tan Leather Accents & Trolley Sleeve",
    description: "Crafted from premium water-resistant vegan leather, this executive laptop bag features padded storage for up to 15.6-inch laptops, reinforced dual-tone tan handles, front zippered slip pocket, and a dedicated luggage trolley pass-through strap for business travel.",
    customization: "Blind debossing, metallic foil stamping, custom engraved metal zipper pulls, branded inner fabric lining."
  },
  {
    id: "prod-063",
    categoryId: "bags",
    name: "Heritage Mocha Brown Vegan Leather Laptop Bag",
    image: "assets/WhatsApp Image 2026-09-10 at 10.29.52 AM.jpeg",
    subtitle: "Multi-Compartment Executive Work & Travel Briefcase",
    description: "Sleek mocha brown structured laptop briefcase with fine contrast stitching, cushioned protective sleeve for 15.6-inch devices, spacious front organizer compartment for chargers and stationery, and heavy-duty antique brass-finish hardware.",
    customization: "Subtle heat debossing, laser engraved metal nameplates, custom zipper pulls, bespoke corporate gift tags."
  },
  {
    id: "prod-064",
    categoryId: "bottles",
    name: "Minimalist White Vacuum Tumbler with Pivot Carry Handle",
    image: "assets/WhatsApp Image 2026-09-10 at 10.39.46 AM.jpeg",
    subtitle: "Matte Finish Thermal Travel Flask with Integrated Loop",
    description: "Contemporary double-wall vacuum insulated thermal travel tumbler finished in pure matte white with a fold-flat ergonomic pivot carry handle. Keeps hot drinks warm for 12 hours and chilled beverages cold for 24 hours.",
    customization: "360-degree UV color printing, precision laser engraving, custom brand messaging, pantone matching."
  }
];

// App State
let currentCategory = "all";
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
            <span class="prompt-sub">Get bulk pricing, custom branding & direct consultation:</span>
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
  renderCategoryPills();
  renderCategoryHeader();
  renderProductGrid();
}

// Render everything in catalog
function renderAllCatalogViews() {
  renderCategoryPills();
  renderCategoryHeader();
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
  const modalWhatsAppBtn = document.getElementById("modalCategoryWhatsAppBtn");
  const modalCategoryPrompt = document.getElementById("modalCategoryPrompt");

  if (modalImg) modalImg.src = product.image;
  if (modalCatBadge && cat) modalCatBadge.textContent = cat.name;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalSubtitle) modalSubtitle.textContent = product.subtitle;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalCustomization) modalCustomization.textContent = product.customization;

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

  // Check URL query parameters for category filter
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("category");
  if (catParam && CATEGORIES.some(c => c.id === catParam)) {
    selectCategory(catParam);
  }

  // Update year in footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

