
const database = [
    {
        id: 1,
        price: 10380.80,
        title: "Bsn - Syntha-6", 
        paragraph: "Syntha 6 Isolate BSN es para reestructurar las fibras que se dañan durante el entrenamiento. Es una mezcla de proteína de rápida y lenta absorción. Mezcla 50/50 de proteína de suero y aislado de proteínas lácteas (una fuente de caseína de alta calidad de lenta digestión), con la matriz de proteínas única Isolast™ ofrece una mezcla de proteínas de rápida y lenta liberación que promueve un ritmo moderado de liberación de aminoácidos para alimentar los músculos activos",
        stock:10,
        image: 'https://content.gobsn.com/i/bodyandfit/bsn-C100701_Image_01?layer0=$PDP_003$&fmt=auto&img404=no-product-image&v=1&locale=en-us,en-gb,*',
        imgAlt: "Bsn - Syntha-6",
        category: "protein"
    },
    {
        id: 2,
        price: 15080.50,
        title: "Bsn - Syntha-6 10lbs", 
        paragraph: "Syntha 6 10lbs Isolate BSN es para reestructurar las fibras que se dañan durante el entrenamiento. Es una mezcla de proteína de rápida y lenta absorción. Mezcla 50/50 de proteína de suero y aislado de proteínas lácteas (una fuente de caseína de alta calidad de lenta digestión), con la matriz de proteínas única Isolast™ ofrece una mezcla de proteínas de rápida y lenta liberación que promueve un ritmo moderado de liberación de aminoácidos para alimentar los músculos activos",
        stock:10,
        image: 'https://content.gobsn.com/i/bodyandfit/bsn-C100701_Image_02?layer0=$PDP_003$&fmt=auto&img404=no-product-image&v=1&locale=en-us,en-gb,*',
        imgAlt: "Bsn - Syntha-6 10lbs",
        category: "protein"
    },
    {
        id: 3,
        price: 780.50,
        title: "Bsn - Amino X", 
        paragraph: "La primera fórmula del mundo de aminoácidos efervescentes.10g de aminoácidos micronizados anti-catabólicos por servicio.0g de azúcar.500 IU de vitamina D anabólica por servicio.Sin cafeína – puede usarse en cualquier momento, día y noche",
        stock:6,
        image: 'https://content.gobsn.com/i/bodyandfit/bsn-amino-x_Image_01?layer0=$PDP_003$&fmt=auto&img404=no-product-image&v=1&locale=en-us,en-gb,*',
        imgAlt: "Bsn - Amino X",
        category: "aminoacid"
    },
    {
        id: 4,
        price: 880.50,
        title: "Bsn - CellMass", 
        paragraph: "Train hard, recover harder and let your muscles do the talking. CELLMASS 2.0 is a concentrated post-workout recovery agent that helps promote recovery, endurance, strength and overall performance.* The results will be hard to miss.",
        stock:4,
        image: 'https://content.gobsn.com/i/bodyandfit/bsn-cellmass-20_Image_01?layer0=$PDP_003$&fmt=auto&img404=no-product-image&v=1&locale=en-us,en-gb,*',
        imgAlt: "Bsn - CellMass",
        category: "pre workout",
    },
    {
        id: 5,
        price: 420.50,
        title: "Bsn - Creatine", 
        paragraph: "BSN Creatine provides 5 grams of pure, micronized Creatine Monohydrate, which supports strength, power, and muscle building lean body mass without any fillers or additives. Micronized Creatine Monohydrate can help replenish your creatine stores which can help support muscle ATP recycling during high-intensity exercise.",
        stock:22,
        image: 'https://content.gobsn.com/i/bodyandfit/bsn-creatine_Image_01?layer0=$PDP_003$&fmt=auto&img404=no-product-image&v=1&locale=en-us,en-gb,*',
        imgAlt: "Bsn - Creatine",
        category: "creatine"
    },
    {
        id: 6,
        price: 80.99,
        title: "Bsn - Protein Crisp", 
        paragraph: "Busting your butt in the weight room doesn't have to mean punishing your taste buds during recovery. Reward yourself with BSN's Protein Crisp Bar, a serious combination of incredible taste and unique texture without compromising your macros. At just 230 calories, each Protein Crisp Bar is loaded with 20g of premium proteins and 4g of sugar or less. And with a light and crispy texture filled with the decadent flavor in each crunch, every day will taste like cheat day. Tear into multiple delicious flavors for an ultra-convenient, protein-packed snack between meals, after your workout or whenever you crave a bite on the go. You've earned it.",
        stock:50,
        image: 'https://content.gobsn.com/i/bodyandfit/bsn-protein-crisp_Image_01?layer0=$PDP_003$&fmt=auto&img404=no-product-image&v=1&locale=en-us,en-gb,*',
        imgAlt: "Bsn - Protein Crisp",
        category: "protein"
    }
]

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve (database)
    }, 1500)
})
