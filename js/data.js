/*
 * Area 7 — all business info, hours, menus and prices.
 * This is the single source of truth: edit prices and hours here only.
 * Later this file will feed the booking / ordering system, so keep ids stable.
 *
 * Prices: numbers in AUD. Hours: "HH:MM" 24h; a close time at or before the
 * open time means the business closes after midnight. null = closed that day.
 * Tags vocabulary: vegetarian, popular, new, best-value, halal.
 */
var SITE_URL = "https://area7.com.au";

window.AREA7 = {
  site: {
    name: "Area 7",
    tagline: "Your Local Pit Stop",
    url: SITE_URL,
    address: {
      street: "218/220 Ballarat Road",
      locality: "Maidstone",
      region: "VIC",
      postcode: "3012",
      country: "AU",
      display: "218/220 Ballarat Rd, Maidstone VIC 3012"
    },
    geo: { lat: -37.7821105, lng: 144.867583 },
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ-TlL6wBf1moRfT8b9kxpl-E",
    mapsEmbedUrl: "https://maps.google.com/maps?q=218%2F220%20Ballarat%20Rd%2C%20Maidstone%20VIC%203012&z=17&output=embed",
    social: {
      facebook: "https://www.facebook.com/p/Area-7-Maidstone-61569224305466/",
      instagram: "https://www.instagram.com/area7maidstone/"
    }
  },

  businesses: [
    /* ------------------------------------------------------------------ */
    {
      id: "carwash",
      name: "Area 7 Premium Hand Carwash & Detailing",
      shortName: "Car Wash & Detailing",
      tagline: "We Don't Just Clean, We Care!",
      subTagline: "Formerly Maidstone Car Wash & Coffee Shop, now proudly part of Area 7.",
      phone: "0451 818 517",
      phoneHref: "tel:+61451818517",
      page: "carwash.html",
      heroImage: "assets/carwash-hero.jpg",
      icon: "carwash",
      schemaType: "AutoWash",
      servesCuisine: null,
      priceFormat: "auto",
      geo: { lat: -37.7821105, lng: 144.867583 },
      mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ-TlL6wBf1moRfT8b9kxpl-E",
      mapsEmbedUrl: "https://maps.google.com/maps?q=Area%207%20Car%20Wash%20and%20Detailing%2C%20218%2F220%20Ballarat%20Rd%2C%20Maidstone%20VIC%203012&z=17&output=embed",
      reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ-TlL6wBf1moRfT8b9kxpl-E",
      reviewPrompt: "Leave us a review",
      rating: { value: 4.7, count: 57, source: "Google" },
      social: { facebook: "", instagram: "" },
      hours: {
        mon: ["08:00", "17:00"],
        tue: ["08:30", "17:00"],
        wed: ["08:00", "17:00"],
        thu: ["08:00", "17:00"],
        fri: ["08:00", "17:00"],
        sat: ["08:00", "17:00"],
        sun: ["10:00", "17:00"]
      },
      preview: ["Hand wash from $29 · Full detail $299", "100% hand wash · Premium products"],
      badges: ["100% Hand Wash", "Premium Products", "Attention to Detail", "Satisfaction Guaranteed"],
      features: [
        { type: "booking", label: "Book online", status: "coming-soon" }
      ],
      crossPromo: "While your car's getting washed… grab a kebab, a crepe or a pizza.",
      layout: "packages",
      categories: [
        {
          id: "carwash-packages",
          name: "Packages",
          note: "",
          items: [
            {
              id: "carwash-car-wash",
              name: "Car Wash",
              description: "Clean. Shine. Protect.",
              price: 29,
              priceLabel: "Starts from $29",
              includes: ["Exterior hand wash", "Wheel & tyre clean", "Door jambs", "Exterior window clean"],
              tags: [],
              available: true
            },
            {
              id: "carwash-external-internal-wash",
              name: "External & Internal Wash",
              description: "Fresh inside. Spotless out.",
              price: 60,
              priceLabel: "Starts from $60",
              includes: ["Everything in Car Wash", "Interior vacuum", "Dashboard & console wipe", "Interior windows", "Tyre shine", "Air freshener"],
              tags: [],
              available: true
            },
            {
              id: "carwash-mini-detail",
              name: "Mini Detail",
              description: "Details that matter.",
              price: 120,
              priceLabel: "Starts from $120",
              includes: ["Everything in External & Internal Wash", "Interior deep clean", "Leather/vinyl clean", "Dashboard & console detail", "Tyre shine", "Air freshener"],
              tags: [],
              available: true
            },
            {
              id: "carwash-full-detail",
              name: "Full Detail",
              description: "Total care. Showroom finish.",
              price: 299,
              priceLabel: "Starts from $299",
              includes: ["Everything in Mini Detail", "Shampoo seats & mats", "Steam clean", "Exterior paint protection", "Engine bay clean", "Wax/paint sealant"],
              tags: ["best-value"],
              available: true
            }
          ]
        }
      ],
      combos: [],
      extras: []
    },

    /* ------------------------------------------------------------------ */
    {
      id: "kebab",
      name: "Area 7 Kababjii · On Charcoal",
      shortName: "Kababjii on Charcoal",
      tagline: "Real Flame. Real Taste.",
      subTagline: "Fresh & Delicious",
      phone: "0424 676 322",
      phoneHref: "tel:+61424676322",
      page: "kebab.html",
      heroImage: "assets/kebab-hero.jpg",
      icon: "kebab",
      schemaType: "Restaurant",
      servesCuisine: ["Middle Eastern", "Lebanese", "Halal"],
      priceFormat: "auto",
      geo: { lat: -37.7821203, lng: 144.8676068 },
      mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJMSF0hf1f1moRZcPWutOegCQ",
      mapsEmbedUrl: "https://maps.google.com/maps?q=Kababjii%2C%20218%2F220%20Ballarat%20Rd%2C%20Maidstone%20VIC%203012&z=17&output=embed",
      reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJMSF0hf1f1moRZcPWutOegCQ",
      reviewPrompt: "Loved it? Leave us a review",
      rating: null,
      social: { facebook: "", instagram: "" },
      hours: {
        mon: ["16:30", "02:00"],
        tue: null,
        wed: ["16:30", "02:00"],
        thu: ["16:30", "02:00"],
        fri: ["16:30", "01:00"],
        sat: ["16:30", "03:00"],
        sun: ["16:30", "02:00"]
      },
      preview: ["Shawarma wraps from $15 · Mixed grill $26", "Halal · Charcoal grilled · Open late"],
      badges: ["Halal", "Charcoal Grilled", "Fresh & Delicious", "Late Night"],
      features: [
        {
          type: "ordering",
          label: "Order on DoorDash",
          status: "live",
          url: "https://www.doordash.com/en-AU/store/kababjii-maidstone-24493192/18206645/"
        }
      ],
      crossPromo: "Still hungry? Dessert is right next door, and your car could use a wash.",
      layout: "menu",
      categories: [
        {
          id: "kebab-wraps",
          name: "Wraps",
          note: "",
          items: [
            { id: "kebab-lamb-shawarma-wrap", name: "Lamb Shawarma", description: "Parsley, onion, tomato & tahini sauce", price: 17, tags: [], available: true },
            { id: "kebab-chicken-shawarma-wrap", name: "Chicken Shawarma", description: "Garlic, pickles & chips", price: 16, tags: [], available: true },
            { id: "kebab-mix-shawarma-wrap", name: "Mix Shawarma", description: "Lamb, chicken, garlic & salad", price: 17, tags: [], available: true },
            { id: "kebab-special-chicken-shawarma-wrap", name: "Special Chicken Shawarma", description: "Chicken with our chef's special house-made coleslaw in place of lettuce", price: 16, label: "Chef's special", tags: ["popular"], available: true },
            { id: "kebab-wrap", name: "Wrap", description: "Lamb mince, homus, salad & pickles", price: 16, tags: [], available: true },
            { id: "kebab-lamb-skewer-wrap", name: "Lamb Skewer Wrap", description: "Lamb, homus, salad & pickles", price: 17, tags: [], available: true },
            { id: "kebab-chicken-skewer-wrap", name: "Chicken Skewer Wrap", description: "Chicken, garlic, pickles & chips", price: 16, tags: [], available: true },
            { id: "kebab-falafel-wrap", name: "Falafel Wrap", description: "With salad & tahini sauce", price: 15, tags: [], available: true }
          ]
        },
        {
          id: "kebab-snack-packs",
          name: "Snack Packs & Sides",
          note: "",
          items: [
            { id: "kebab-hot-chips", name: "Hot Chips", description: "", price: 6, tags: [], available: true },
            { id: "kebab-hsp-snack-pack", name: "HSP Snack Pack", description: "Chips, cheese, your choice of meat & sauce", price: 20, tags: [], available: true },
            { id: "kebab-rice-hsp", name: "Rice HSP", description: "Cheese, your choice of sauce", price: 20, tags: [], available: true },
            { id: "kebab-falafel-hsp", name: "Falafel HSP", description: "Cheese, your choice of sauce", price: 20, tags: [], available: true }
          ]
        },
        {
          id: "kebab-plates",
          name: "Plates",
          note: "",
          items: [
            { id: "kebab-lamb-shawarma-plate", name: "Lamb Shawarma Plate", description: "With homus, pickles & chips or rice", price: 22, tags: [], available: true },
            { id: "kebab-chicken-shawarma-plate", name: "Chicken Shawarma Plate", description: "With garlic, pickles & chips or rice", price: 21, tags: [], available: true },
            { id: "kebab-mixed-shawarma-plate", name: "Mixed Shawarma Plate", description: "With your choice of sauce, chips or rice", price: 23, tags: [], available: true },
            { id: "kebab-mixed-grill-plate", name: "Mixed Grill Plate", description: "3 skewers of kafta, chicken & lamb with your choice of sauce & salad", price: 26, tags: [], available: true },
            { id: "kebab-kafta-plate", name: "Kafta Plate", description: "3 skewers of kafta with your choice of sauce & salad", price: 25, tags: [], available: true },
            { id: "kebab-lamb-plate", name: "Lamb Plate", description: "3 skewers of lamb with your choice of sauce & salad", price: 26, tags: [], available: true },
            { id: "kebab-chicken-plate", name: "Chicken Plate", description: "3 skewers of chicken with your choice of sauce & salad", price: 25, tags: [], available: true },
            { id: "kebab-single-skewer", name: "Single Skewer", description: "Choice of kafta, chicken or lamb", price: 8, tags: [], available: true },
            { id: "kebab-falafel-plate", name: "Falafel Plate", description: "", price: 18, tags: [], available: true },
            { id: "kebab-nuggets-chips", name: "Nuggets & Chips", description: "", price: 16, tags: [], available: true }
          ]
        }
      ],
      combos: [
        { id: "kebab-combo", name: "Make it a combo", description: "Add chips & a can of drink", price: 8, priceLabel: "+$8", tags: [], available: true }
      ],
      extras: []
    },

    /* ------------------------------------------------------------------ */
    {
      id: "dessert",
      name: "Area 7 Dessert House",
      alternateName: "Crepe and Waffles Hub",
      shortName: "Dessert House",
      tagline: "Sweet moments, made just for you",
      subTagline: "Your Dessert Place",
      phone: "0424 676 322",
      phoneHref: "tel:+61424676322",
      page: "dessert.html",
      heroImage: "assets/dessert-hero.jpg",
      icon: "dessert",
      schemaType: "Restaurant",
      servesCuisine: ["Desserts", "Crepes", "Waffles"],
      priceFormat: "fixed2",
      geo: { lat: -37.7820424, lng: 144.8677481 },
      mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ--ptYspf1moRSRVygk-ivws",
      mapsEmbedUrl: "https://maps.google.com/maps?q=Crepe%20and%20Waffles%20Hub%2C%20218%20Ballarat%20Rd%2C%20Maidstone%20VIC%203012&z=17&output=embed",
      reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ--ptYspf1moRSRVygk-ivws",
      reviewPrompt: "Loved it? Leave us a review",
      rating: null,
      social: { facebook: "", instagram: "https://www.instagram.com/crepeandwaffles/" },
      hours: {
        mon: null,
        tue: null,
        wed: ["18:00", "01:00"],
        thu: ["18:00", "01:00"],
        fri: ["18:00", "01:00"],
        sat: ["18:00", "01:00"],
        sun: ["18:00", "00:00"]
      },
      preview: ["Crepes from $15 · Milkshakes $9", "Waffles · Dutch pancakes · Sizzling brownie"],
      badges: ["Freshly made with love", "Premium ingredients", "Made to indulge", "Late-night desserts", "Thank you for supporting local"],
      features: [
        { type: "ordering", label: "Order online", status: "coming-soon" }
      ],
      crossPromo: "Sweet tooth sorted? Grab a pizza or a shawarma, or get the car sparkling.",
      layout: "menu",
      categories: [
        {
          id: "dessert-crepes",
          name: "Crepes",
          note: "",
          items: [
            { id: "dessert-crepe-nutella-strawberry", name: "Nutella Strawberry", description: "", price: 15, tags: [], available: true },
            { id: "dessert-crepe-nutella-banana", name: "Nutella Banana", description: "", price: 15, tags: [], available: true },
            { id: "dessert-crepe-nutella-white-chocolate", name: "Nutella White Chocolate", description: "", price: 15, tags: [], available: true },
            { id: "dessert-crepe-oreo", name: "Oreo", description: "", price: 15, tags: [], available: true },
            { id: "dessert-crepe-biscoff-special", name: "Biscoff Special", description: "", price: 16, tags: [], available: true },
            { id: "dessert-crepe-mm-special", name: "M&M Special", description: "", price: 16, tags: [], available: true },
            { id: "dessert-crepe-timtam-special", name: "TimTam Special", description: "", price: 16, tags: [], available: true },
            { id: "dessert-crepe-nutella-pistachio", name: "Nutella Pistachio", description: "", price: 16, tags: [], available: true },
            { id: "dessert-crepe-white-chocolate-maltesers", name: "White Chocolate Maltesers", description: "", price: 16, tags: [], available: true },
            { id: "dessert-crepe-kinder-bueno", name: "Kinder Bueno", description: "", price: 16, tags: [], available: true }
          ]
        },
        {
          id: "dessert-waffles",
          name: "Waffles",
          note: "Add ice cream (vanilla/chocolate) +$2.50",
          items: [
            { id: "dessert-waffle-nutella-strawberry", name: "Nutella Strawberry", description: "", price: 16, tags: [], available: true },
            { id: "dessert-waffle-nutella-white", name: "Nutella White", description: "", price: 16, tags: [], available: true },
            { id: "dessert-waffle-chocolate", name: "Chocolate", description: "", price: 16, tags: [], available: true },
            { id: "dessert-waffle-biscoff-smash", name: "Biscoff Smash", description: "", price: 16, tags: [], available: true },
            { id: "dessert-waffle-mm-wonders", name: "M&M Wonders", description: "", price: 16, tags: [], available: true },
            { id: "dessert-waffle-oreo", name: "Oreo", description: "", price: 16, tags: [], available: true }
          ]
        },
        {
          id: "dessert-dutch-pancakes",
          name: "Dutch Pancakes",
          note: "",
          items: [
            { id: "dessert-pancake-biscoff", name: "Biscoff", description: "", price: 16, tags: [], available: true },
            { id: "dessert-pancake-cookies-cream", name: "Cookies & Cream", description: "", price: 16, tags: [], available: true },
            { id: "dessert-pancake-nutella-strawberry", name: "Nutella Strawberry", description: "", price: 16, tags: [], available: true },
            { id: "dessert-pancake-nutella-banana", name: "Nutella Banana", description: "", price: 16, tags: [], available: true }
          ]
        },
        {
          id: "dessert-brownies",
          name: "Brownie Specials",
          note: "",
          items: [
            { id: "dessert-brownie-chocolate-topping", name: "Brownie with chocolate topping", description: "", price: 7.9, tags: [], available: true },
            { id: "dessert-brownie-sundae", name: "Brownie Sundae", description: "", price: 10.9, tags: [], available: true },
            { id: "dessert-brownie-vanilla-ice-cream", name: "Brownie with vanilla ice cream", description: "", price: 10.9, tags: [], available: true },
            { id: "dessert-sizzling-brownie", name: "Sizzling Brownie", description: "", price: 13.9, tags: [], available: true }
          ]
        },
        {
          id: "milkshakes",
          name: "Milkshakes",
          note: "",
          items: [
            { id: "dessert-shake-vanilla", name: "Vanilla", description: "", price: 9, tags: [], available: true },
            { id: "dessert-shake-chocolate", name: "Chocolate", description: "", price: 9, tags: [], available: true },
            { id: "dessert-shake-blue-heaven", name: "Blue Heaven", description: "", price: 9, tags: [], available: true },
            { id: "dessert-shake-caramel", name: "Caramel", description: "", price: 9, tags: [], available: true },
            { id: "dessert-shake-cookies-cream", name: "Cookies & Cream", description: "", price: 9, tags: [], available: true },
            { id: "dessert-shake-mango", name: "Mango", description: "", price: 9, tags: [], available: true },
            { id: "dessert-shake-banana", name: "Banana", description: "", price: 9, tags: [], available: true },
            { id: "dessert-shake-coffee", name: "Coffee", description: "", price: 9, tags: [], available: true },
            { id: "dessert-shake-strawberry", name: "Strawberry", description: "", price: 9, tags: [], available: true },
            { id: "dessert-shake-brownie", name: "Brownie Milkshake", description: "", price: 9, tags: ["new"], available: true }
          ]
        }
      ],
      combos: [],
      extras: [
        { id: "dessert-extra-ice-cream", name: "Extra ice cream", price: 2.5, available: true },
        { id: "dessert-extra-chocolate-sauce", name: "Chocolate sauce", price: 1.5, available: true },
        { id: "dessert-extra-nutella", name: "Nutella", price: 2, available: true },
        { id: "dessert-extra-chopped-nuts", name: "Chopped nuts", price: 1.5, available: true },
        { id: "dessert-extra-whipped-cream", name: "Whipped cream", price: 1.5, available: true },
        { id: "dessert-extra-maraschino-cherry", name: "Maraschino cherry", price: 1, available: true }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "pizza",
      name: "Area 7 Cafe & Pizzeria",
      shortName: "Cafe & Pizzeria",
      tagline: "Pizza · Coffee · Good Food · Great Vibes",
      subTagline: "Fresh dough made daily. Dine in or takeaway.",
      phone: "0451 818 517",
      phoneHref: "tel:+61451818517",
      page: "pizza.html",
      heroImage: "assets/pizza-hero.jpg",
      icon: "pizza",
      schemaType: "Restaurant",
      servesCuisine: ["Pizza", "Cafe", "Coffee"],
      priceFormat: "auto",
      // No Google listing yet: uses the car wash pin until one exists.
      geo: { lat: -37.7821105, lng: 144.867583 },
      mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ-TlL6wBf1moRfT8b9kxpl-E",
      mapsEmbedUrl: "https://maps.google.com/maps?q=218%2F220%20Ballarat%20Rd%2C%20Maidstone%20VIC%203012&z=17&output=embed",
      reviewUrl: "", // PLACEHOLDER: add the Google review link once the listing exists
      reviewPrompt: "Love our pizza? Leave us a review",
      rating: null,
      social: { facebook: "", instagram: "" },
      hours: {
        mon: ["11:00", "23:30"],
        tue: ["11:00", "23:30"],
        wed: ["11:00", "23:30"],
        thu: ["11:00", "23:30"],
        fri: ["11:00", "23:30"],
        sat: ["11:00", "23:30"],
        sun: ["11:00", "23:30"]
      },
      preview: ["Pizzas from $12 · 2 pizzas meal deal $35", "Fresh dough daily · Coffee · Dine in"],
      badges: ["Fresh dough made daily", "Premium ingredients", "Dine in", "Takeaway"],
      features: [
        { type: "ordering", label: "Order online", status: "coming-soon" }
      ],
      crossPromo: "Make it a proper pit stop: wash the car, grab a kebab, finish with a crepe.",
      layout: "menu",
      categories: [
        {
          id: "pizza-pizzas",
          name: "Pizzas",
          note: "V = vegetarian · ★ = most popular",
          items: [
            { id: "pizza-margherita", number: 1, name: "Margherita", description: "Tomato sauce, cheese, fresh basil", price: 12, tags: ["vegetarian"], available: true },
            { id: "pizza-pepperoni", number: 2, name: "Pepperoni", description: "Tomato sauce, cheese, pepperoni", price: 14, tags: [], available: true },
            { id: "pizza-meat-lover", number: 3, name: "Meat Lover", description: "Tomato sauce, cheese, ham, salami, beef rashers, beef, pepperoni", price: 15, tags: ["popular"], available: true },
            { id: "pizza-bbq-chicken", number: 4, name: "BBQ Chicken", description: "BBQ sauce, cheese, chicken, red onion", price: 14, tags: [], available: true },
            { id: "pizza-bbq-meat-lovers", number: 5, name: "BBQ Meat Lovers", description: "BBQ sauce, cheese, chicken, beef rashers, beef, ham", price: 15, tags: ["popular"], available: true },
            { id: "pizza-potato", number: 6, name: "Potato Pizza", description: "White sauce, cheese, potato, rosemary", price: 13, tags: ["vegetarian"], available: true },
            { id: "pizza-mushroom-truffle", number: 7, name: "Mushroom & Truffle", description: "White sauce, cheese, mushroom, truffle oil, parmesan", price: 15, tags: ["vegetarian", "popular"], available: true },
            { id: "pizza-hawaiian", number: 8, name: "Hawaiian", description: "Tomato sauce, cheese, chicken, pineapple", price: 13, tags: [], available: true },
            { id: "pizza-peri-peri-chicken", number: 9, name: "Peri Peri Chicken", description: "Peri peri sauce, cheese, chicken, capsicum, onion", price: 14, tags: [], available: true },
            { id: "pizza-tandoori-chicken", number: 10, name: "Tandoori Chicken", description: "Tandoori sauce, cheese, chicken, red onion, capsicum", price: 14, tags: [], available: true },
            { id: "pizza-mexican", number: 11, name: "Mexican", description: "Tomato sauce, cheese, beef, capsicum, onion, jalapeños", price: 14, tags: [], available: true },
            { id: "pizza-marinara", number: 12, name: "Marinara", description: "Garlic, olive oil, oregano, olives", price: 13, tags: ["vegetarian"], available: true }
          ]
        },
        {
          id: "pizza-drinks",
          name: "Drinks",
          note: "",
          items: [
            { id: "pizza-soft-drinks", name: "Soft drinks", description: "Cans & 1.25L bottles", price: null, tags: [], available: true },
            { id: "pizza-water", name: "Water", description: "", price: null, tags: [], available: true },
            { id: "pizza-coffee", name: "Coffee", description: "Freshly made", price: null, tags: [], available: true },
            { id: "pizza-milkshakes", name: "Milkshakes", description: "10 flavours from our Dessert House", price: 9, link: "dessert.html#milkshakes", tags: [], available: true }
          ]
        }
      ],
      combos: [
        { id: "pizza-combo-pizza-drink", name: "Pizza + Drink", description: "Any pizza + can of soft drink", price: 3, priceLabel: "+$3", tags: [], available: true },
        { id: "pizza-combo-meal-deal", name: "Meal Deal", description: "Any 2 pizzas + garlic bread + 1.25L drink", price: 35, tags: [], available: true },
        { id: "pizza-combo-family-deal", name: "Family Deal", description: "Any 3 pizzas + garlic bread + 1.25L drink", price: 45, tags: ["best-value"], available: true }
      ],
      extras: [
        { id: "pizza-extra-cheese", name: "Extra cheese", price: 2, available: true },
        { id: "pizza-extra-olives", name: "Olives", price: 2, available: true },
        { id: "pizza-extra-jalapenos", name: "Jalapeños", price: 2, available: true },
        { id: "pizza-extra-sauce", name: "BBQ/White sauce", price: 1, available: true },
        { id: "pizza-extra-meat", name: "Meat", price: 2, available: true }
      ]
    }
  ]
};
