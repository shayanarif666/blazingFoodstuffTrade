// Fake Data
const products = [
    {
        id: 1,
        title: "Classic Lays",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/chipsoman-thub.png",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 2,
        title: "Masala Lays",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/chipsoman-3-1.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 3,
        title: "BBQ Wavy",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/sohar-chips_3.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 4,
        title: "BBQ Wavy Party",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/salad_6.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 5,
        title: "Sky Chips",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/sky.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 6,
        title: "Tasty Chips",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/tasty_3.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 7,
        title: "Nano Mix Chips",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/nano_3.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 8,
        title: "Pofak Oman",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/pofak-oman_10.jpg",
        category: "corns",
        brand: "Pofak Oman"
    },
    {
        id: 9,
        title: "Majid Crispy",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/majid-crisoy_3.jpg",
        category: "corns",
        brand: "Majid Crispy"
    },
    {
        id: 10,
        title: "Majid Oman",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/majidoman_5.jpg",
        category: "corns",
        brand: "Majid Oman"
    },
    {
        id: 11,
        title: "Pofak Khaligee",
        description: "https://www.alishaihani.net/storage/files/pofak-khaligee_8.jpg",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/pofak-khaligee_8.jpg",
        category: "corns",
        brand: "Pofak Khaligee"
    },
    {
        id: 12,
        title: "Cheesar",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/cheeser_8.jpg",
        category: "corns",
        brand: "Cheesar"
    },
    {
        id: 13,
        title: "Shami Strawberry",
        description: "Fresh Flavours strawberry milk etc",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/shami-strwberry_2.jpg",
        category: "soft drinks",
        brand: "Shami Strawberry"
    },
    {
        id: 14,
        title: "Fizzi Tango",
        description: "Fresh Flavours orange",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/fizi-tango_2.jpg",
        category: "soft drinks",
        brand: "Fizzi Tango"
    },
    {
        id: 15,
        title: "Shami Mix Fruit",
        description: "Fresh Flavours orange, apple, pineapples etc",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/shami-mixe-fruti_2.jpg",
        category: "soft drinks",
        brand: "Shami Mix Fruit"
    },
    {
        id: 16,
        title: "Shami Lemon",
        description: "Fresh Flavours lemon etc",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/shami-limin_2.jpg",
        category: "soft drinks",
        brand: "Shami Lemon"
    },
    {
        id: 17,
        title: "Ringo Snacks",
        description: "Fresh Flavours lemon etc",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/ringo_6.jpg",
        category: "snacks",
        brand: "Ringo Snacks"
    },
    {
        id: 18,
        title: "Sara Snacks",
        description: "Fresh Flavours lemon etc",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/sara-snacks_1.jpg",
        category: "snacks",
        brand: "Sara Snacks"
    },
    {
        id: 18,
        title: "Sara Snacks",
        description: "Fresh Flavours lemon etc",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/sara-snacks_1.jpg",
        category: "snacks",
        brand: "Sara Snacks"
    }
]

// List Categories
const categories = [
    { category: "Chips", slug: "chips" },
    { category: "Corns", slug: "corns" },
    { category: "Snacks", slug: "snacks" },
    { category: "Soft Drinks", slug: "soft-drinks" },
    { category: "Papers", slug: "papers" },
]