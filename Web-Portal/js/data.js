/**
 * VedaGarden - Plant Data
 * Curated with care
 */

const plantsData = [
    {
        id: "ashwagandha",
        name: "Ashwagandha",
        sanskritName: "अश्वगन्धा",
        scientificName: "Withania somnifera",
        commonNames: ["Indian Ginseng", "Winter Cherry"],
        family: "Solanaceae",
        emoji: "🫚",
        description: "Perhaps the most celebrated adaptogen in Ayurveda. The name means 'smell of horse' — both for its distinctive odor and the vitality it's said to impart. Used for over 3,000 years to build ojas (vital essence), support the nervous system, and restore balance after periods of stress.",
        
        ayurvedicProperties: {
            rasa: ["tikta", "kashaya"],
            rasaNames: ["Bitter", "Astringent"],
            virya: "ushna",
            viryaName: "Warming",
            vipaka: "madhura",
            vipakaName: "Sweet",
            doshaEffect: {
                vata: "decreases",
                pitta: "neutral",
                kapha: "decreases"
            },
            guna: ["Laghu (light)", "Snigdha (slightly oily)"]
        },
        
        targetAilments: ["stress", "immunity", "inflammation"],
        ailmentNames: ["Stress & Sleep", "Immunity", "Joint health"],
        
        traditionalUses: [
            "Building strength and stamina (Balya)",
            "Supporting healthy sleep patterns",
            "Calming the mind without sedation",
            "Nourishing the reproductive system",
            "Recovery after illness or depletion"
        ],
        
        phytochemicals: [
            { name: "Withanolides", description: "The primary active group — steroidal lactones with anti-inflammatory and adaptogenic properties" },
            { name: "Withaferin A", description: "Shows promise in research for cellular health and immune modulation" },
            { name: "Sitoindosides", description: "Contribute to the anti-stress effects documented in studies" }
        ],
        
        partUsed: ["Root (primary)", "Leaves (secondary)"],
        dosage: "300–600mg of standardized root extract, typically taken with warm milk in the evening",
        
        precautions: [
            "Avoid during pregnancy",
            "May affect thyroid hormone levels — monitor if on thyroid medication",
            "Start low and observe; some people find it stimulating rather than calming"
        ],
        
        references: [
            { title: "An Overview on Ashwagandha: A Rasayana (Rejuvenator) of Ayurveda", url: "https://pubmed.ncbi.nlm.nih.gov/21407960/" },
            { title: "A Prospective, Randomized Double-Blind, Placebo-Controlled Study of Safety and Efficacy of Ashwagandha Root Extract", url: "https://pubmed.ncbi.nlm.nih.gov/23439798/" }
        ],
        
        habitat: "Native to dry regions of India, the Middle East, and northern Africa",
        cultivation: "Prefers well-drained, sandy soil. Drought-tolerant once established."
    },
    
    {
        id: "tulsi",
        name: "Tulsi",
        sanskritName: "तुलसी",
        scientificName: "Ocimum tenuiflorum",
        commonNames: ["Holy Basil", "Sacred Basil"],
        family: "Lamiaceae",
        emoji: "🌿",
        description: "Tulsi holds a unique place in Indian culture — found in courtyards and home shrines, offered in prayers, and used daily as medicine. It's called 'the incomparable one' (tulasi) for good reason. Modern research is beginning to validate its traditional role as an adaptogen and respiratory support.",
        
        ayurvedicProperties: {
            rasa: ["katu", "tikta"],
            rasaNames: ["Pungent", "Bitter"],
            virya: "ushna",
            viryaName: "Warming",
            vipaka: "katu",
            vipakaName: "Pungent",
            doshaEffect: {
                vata: "decreases",
                pitta: "increases",
                kapha: "decreases"
            },
            guna: ["Laghu (light)", "Ruksha (dry)"]
        },
        
        targetAilments: ["respiratory", "immunity", "stress"],
        ailmentNames: ["Respiratory health", "Immunity", "Stress"],
        
        traditionalUses: [
            "Supporting healthy respiratory function",
            "Building immunity and resistance",
            "Clearing excess kapha (congestion)",
            "Calming the mind and lifting mood",
            "Supporting digestion and metabolism"
        ],
        
        phytochemicals: [
            { name: "Eugenol", description: "The primary aromatic compound — antimicrobial, anti-inflammatory" },
            { name: "Ursolic acid", description: "Shows anti-inflammatory and antioxidant properties in research" },
            { name: "Rosmarinic acid", description: "A powerful antioxidant also found in rosemary" },
            { name: "Ocimumosides", description: "Contribute to tulsi's adaptogenic effects" }
        ],
        
        partUsed: ["Leaves (fresh or dried)", "Seeds"],
        dosage: "1–2 cups of tulsi tea daily, or 300–500mg of extract",
        
        precautions: [
            "May slow blood clotting — discontinue before surgery",
            "Its warming nature may aggravate pitta constitutions",
            "Some varieties are more pungent than others — adjust accordingly"
        ],
        
        references: [
            { title: "Tulsi - Ocimum sanctum: A herb for all reasons", url: "https://pubmed.ncbi.nlm.nih.gov/24497737/" },
            { title: "The Clinical Efficacy and Safety of Tulsi in Humans", url: "https://pubmed.ncbi.nlm.nih.gov/28969442/" }
        ],
        
        habitat: "Native to the Indian subcontinent, now cultivated throughout Southeast Asia",
        cultivation: "Grows readily from seed. Prefers warm weather and regular watering."
    },
    
    {
        id: "neem",
        name: "Neem",
        sanskritName: "निम्ब",
        scientificName: "Azadirachta indica",
        commonNames: ["Indian Lilac", "Margosa"],
        family: "Meliaceae",
        emoji: "🌳",
        description: "In Indian villages, the neem tree is called 'the village pharmacy.' Every part is used — leaves for skin and blood, bark for teeth, oil for wound care, twigs as natural toothbrushes. Its intensely bitter taste reflects its powerful cleansing properties.",
        
        ayurvedicProperties: {
            rasa: ["tikta", "kashaya"],
            rasaNames: ["Bitter", "Astringent"],
            virya: "sheeta",
            viryaName: "Cooling",
            vipaka: "katu",
            vipakaName: "Pungent",
            doshaEffect: {
                vata: "increases",
                pitta: "decreases",
                kapha: "decreases"
            },
            guna: ["Laghu (light)", "Ruksha (dry)"]
        },
        
        targetAilments: ["skin", "immunity", "digestion"],
        ailmentNames: ["Skin health", "Immunity", "Detoxification"],
        
        traditionalUses: [
            "Skin conditions of all kinds",
            "Blood purification (Rakta shodhana)",
            "Oral health — chewing neem twigs",
            "Support for healthy liver function",
            "Anti-parasitic applications (internal and external)"
        ],
        
        phytochemicals: [
            { name: "Azadirachtin", description: "The most studied compound — potent insecticidal and antimicrobial properties" },
            { name: "Nimbin and nimbidin", description: "Contribute to anti-inflammatory effects" },
            { name: "Quercetin", description: "A common flavonoid with antioxidant activity" }
        ],
        
        partUsed: ["Leaves", "Bark", "Seed oil", "Twigs"],
        dosage: "Varies widely by preparation. Leaf tea: 1 cup daily. External: neem oil diluted with carrier oil.",
        
        precautions: [
            "Very cooling and drying — can aggravate vata",
            "Not for internal use during pregnancy",
            "Neem oil should never be ingested",
            "May lower blood sugar — monitor if diabetic"
        ],
        
        references: [
            { title: "Pharmacological and Phytochemical Properties of Neem", url: "https://pubmed.ncbi.nlm.nih.gov/23963715/" },
            { title: "Neem (Azadirachta indica): Prehistory to contemporary medicinal uses", url: "https://pubmed.ncbi.nlm.nih.gov/25473926/" }
        ],
        
        habitat: "Native to the Indian subcontinent, grows throughout tropical regions",
        cultivation: "Extremely hardy. Thrives in poor soil and drought conditions."
    },
    
    {
        id: "brahmi",
        name: "Brahmi",
        sanskritName: "ब्राह्मी",
        scientificName: "Bacopa monnieri",
        commonNames: ["Water Hyssop", "Herb of Grace"],
        family: "Plantaginaceae",
        emoji: "🧠",
        description: "Named after Brahman (the universal consciousness), Brahmi is Ayurveda's foremost brain tonic. It has a long history of use by Vedic scholars to support memory and learning. Clinical research has begun validating these traditional cognitive benefits.",
        
        ayurvedicProperties: {
            rasa: ["tikta", "kashaya"],
            rasaNames: ["Bitter", "Astringent"],
            virya: "sheeta",
            viryaName: "Cooling",
            vipaka: "madhura",
            vipakaName: "Sweet",
            doshaEffect: {
                vata: "decreases",
                pitta: "decreases",
                kapha: "decreases"
            },
            guna: ["Laghu (light)"]
        },
        
        targetAilments: ["stress", "inflammation"],
        ailmentNames: ["Cognitive support", "Stress & Anxiety"],
        
        traditionalUses: [
            "Enhancing memory and concentration",
            "Supporting meditation practice",
            "Calming anxiety without sedation",
            "Promoting healthy sleep",
            "Nourishing the nervous system"
        ],
        
        phytochemicals: [
            { name: "Bacosides A & B", description: "The primary active compounds — improve signal transmission between neurons" },
            { name: "Brahmine", description: "An alkaloid that contributes to calming effects" },
            { name: "Bacopasides", description: "Support the antioxidant effects in brain tissue" }
        ],
        
        partUsed: ["Whole plant", "Leaves"],
        dosage: "300–450mg of standardized extract (containing 55% bacosides). Best taken consistently for 8–12 weeks.",
        
        precautions: [
            "Can cause digestive upset in some — take with food",
            "May have mild sedative effects initially",
            "Can increase thyroid hormones — caution with hyperthyroidism"
        ],
        
        references: [
            { title: "Meta-analysis of Bacopa monnieri Effects on Cognition", url: "https://pubmed.ncbi.nlm.nih.gov/24252493/" },
            { title: "Neuropharmacological Review of Bacopa monnieri", url: "https://pubmed.ncbi.nlm.nih.gov/27473605/" }
        ],
        
        habitat: "Grows wild in wetlands across India, Australia, and the Americas",
        cultivation: "An aquatic plant. Needs consistently moist soil or shallow water."
    },
    
    {
        id: "turmeric",
        name: "Turmeric",
        sanskritName: "हरिद्रा",
        scientificName: "Curcuma longa",
        commonNames: ["Haldi", "Indian Saffron"],
        family: "Zingiberaceae",
        emoji: "💛",
        description: "Turmeric is so central to Indian life that it's hard to oversimplify — it's food, medicine, and sacred ritual substance. The golden rhizome contains curcumin, one of the most-researched natural compounds, yet Ayurveda has used the whole root for millennia.",
        
        ayurvedicProperties: {
            rasa: ["tikta", "katu"],
            rasaNames: ["Bitter", "Pungent"],
            virya: "ushna",
            viryaName: "Warming",
            vipaka: "katu",
            vipakaName: "Pungent",
            doshaEffect: {
                vata: "decreases",
                pitta: "neutral",
                kapha: "decreases"
            },
            guna: ["Ruksha (dry)", "Laghu (light)"]
        },
        
        targetAilments: ["inflammation", "digestion", "skin"],
        ailmentNames: ["Inflammation", "Digestion", "Skin health"],
        
        traditionalUses: [
            "Supporting healthy inflammatory response",
            "Aiding digestion of heavy foods",
            "Wound healing (paste application)",
            "Supporting liver function",
            "Promoting clear, healthy skin"
        ],
        
        phytochemicals: [
            { name: "Curcumin", description: "The star compound — powerful anti-inflammatory and antioxidant, but poorly absorbed alone" },
            { name: "Turmerones", description: "Essential oil compounds with their own therapeutic benefits" },
            { name: "Curcuminoids", description: "A family of related compounds that work synergistically" }
        ],
        
        partUsed: ["Rhizome (fresh or dried/powdered)"],
        dosage: "In cooking: liberally. As supplement: 500–2000mg with black pepper and fat for absorption.",
        
        precautions: [
            "High supplemental doses may affect blood clotting",
            "Can aggravate pitta in excess",
            "Isolated curcumin requires piperine (black pepper) or fat for absorption"
        ],
        
        references: [
            { title: "Curcumin: A Review of Its Effects on Human Health", url: "https://pubmed.ncbi.nlm.nih.gov/29065496/" },
            { title: "Safety and Efficacy of Curcumin in Major Inflammatory Diseases", url: "https://pubmed.ncbi.nlm.nih.gov/30716389/" }
        ],
        
        habitat: "Native to South Asia — requires tropical warmth and moisture",
        cultivation: "Grown from rhizome cuttings. Harvest after leaves yellow, 8–10 months after planting."
    },
    
    {
        id: "amla",
        name: "Amla",
        sanskritName: "आमलकी",
        scientificName: "Phyllanthus emblica",
        commonNames: ["Indian Gooseberry", "Amalaki"],
        family: "Phyllanthaceae",
        emoji: "🟢",
        description: "Amla is among the highest known natural sources of vitamin C, but that's just the beginning. It's one of the three fruits in Triphala, revered as a Rasayana (rejuvenative), and uniquely balances all three doshas — a rare quality in Ayurvedic herbalism.",
        
        ayurvedicProperties: {
            rasa: ["amla", "madhura", "tikta", "katu", "kashaya"],
            rasaNames: ["Sour", "Sweet", "Bitter", "Pungent", "Astringent"],
            virya: "sheeta",
            viryaName: "Cooling",
            vipaka: "madhura",
            vipakaName: "Sweet",
            doshaEffect: {
                vata: "decreases",
                pitta: "decreases",
                kapha: "decreases"
            },
            guna: ["Guru (heavy)", "Ruksha (dry)", "Sheeta (cold)"]
        },
        
        targetAilments: ["immunity", "digestion", "skin"],
        ailmentNames: ["Immunity", "Digestion", "Hair & Skin"],
        
        traditionalUses: [
            "Building ojas (vital essence)",
            "Supporting healthy hair growth",
            "Nourishing the eyes",
            "Gentle digestive support",
            "Rejuvenation and longevity"
        ],
        
        phytochemicals: [
            { name: "Vitamin C", description: "Extremely high and heat-stable — doesn't degrade in cooking like other sources" },
            { name: "Emblicanin A & B", description: "Unique antioxidants found only in amla" },
            { name: "Ellagic acid", description: "A polyphenol with protective properties" },
            { name: "Gallic acid", description: "Contributes to the astringent taste and therapeutic effects" }
        ],
        
        partUsed: ["Fruit (fresh, dried, or as juice)"],
        dosage: "1 fresh fruit daily, or 500–1000mg of powder in water or honey",
        
        precautions: [
            "Very sour taste may need adjustment",
            "May enhance effects of blood sugar-lowering medications",
            "Excess can aggravate vata"
        ],
        
        references: [
            { title: "Emblica officinalis: A Unique Functional Food", url: "https://pubmed.ncbi.nlm.nih.gov/21317655/" },
            { title: "Protective Effects of Emblica officinalis", url: "https://pubmed.ncbi.nlm.nih.gov/25149823/" }
        ],
        
        habitat: "Native to India — grows as a deciduous tree in forest areas",
        cultivation: "Fruits ripen November–February. Highly productive once mature."
    },
    
    {
        id: "shatavari",
        name: "Shatavari",
        sanskritName: "शतावरी",
        scientificName: "Asparagus racemosus",
        commonNames: ["Wild Asparagus", "Hundred Roots"],
        family: "Asparagaceae",
        emoji: "🌾",
        description: "The name means 'she who possesses a hundred husbands' — a poetic reference to its nourishing effects on the female reproductive system. But Shatavari is not only for women; its cooling, building properties benefit anyone who tends toward dryness or depletion.",
        
        ayurvedicProperties: {
            rasa: ["madhura", "tikta"],
            rasaNames: ["Sweet", "Bitter"],
            virya: "sheeta",
            viryaName: "Cooling",
            vipaka: "madhura",
            vipakaName: "Sweet",
            doshaEffect: {
                vata: "decreases",
                pitta: "decreases",
                kapha: "increases"
            },
            guna: ["Guru (heavy)", "Snigdha (oily)"]
        },
        
        targetAilments: ["immunity", "digestion", "stress"],
        ailmentNames: ["Reproductive health", "Digestive comfort", "Stress"],
        
        traditionalUses: [
            "Nourishing the female reproductive system",
            "Supporting lactation",
            "Soothing digestive membranes",
            "Building strength and immunity",
            "Balancing hormonal transitions"
        ],
        
        phytochemicals: [
            { name: "Shatavarin I–IV", description: "Steroidal saponins with adaptogenic and immune-supporting properties" },
            { name: "Racemofuran", description: "Shows antioxidant activity in studies" },
            { name: "Asparagamine A", description: "An alkaloid with various effects" },
            { name: "Isoflavones", description: "Phytoestrogens that may support hormonal balance" }
        ],
        
        partUsed: ["Root (fresh or dried)"],
        dosage: "500–1000mg of root powder twice daily, often in warm milk or ghee",
        
        precautions: [
            "Its heavy, building nature can increase kapha",
            "Avoid with estrogen-sensitive conditions unless guided",
            "May interact with diuretic medications"
        ],
        
        references: [
            { title: "A Review on Asparagus racemosus", url: "https://pubmed.ncbi.nlm.nih.gov/21170205/" },
            { title: "Phytopharmacology of Shatavari", url: "https://pubmed.ncbi.nlm.nih.gov/20043074/" }
        ],
        
        habitat: "Found throughout India, from the Himalayas to Sri Lanka",
        cultivation: "A climbing vine — grows in forests and is now cultivated."
    },
    
    {
        id: "ginger",
        name: "Ginger",
        sanskritName: "शुण्ठी / आर्द्रक",
        scientificName: "Zingiber officinale",
        commonNames: ["Adrak (fresh)", "Sonth (dry)"],
        family: "Zingiberaceae",
        emoji: "🫚",
        description: "In Ayurveda, ginger is called vishwabhesaj — 'the universal medicine.' Fresh ginger (Ardraka) and dried ginger (Shunthi) have slightly different properties, but both are considered essential for kindling digestive fire (agni) and clearing cold congestion.",
        
        ayurvedicProperties: {
            rasa: ["katu"],
            rasaNames: ["Pungent"],
            virya: "ushna",
            viryaName: "Warming",
            vipaka: "madhura",
            vipakaName: "Sweet",
            doshaEffect: {
                vata: "decreases",
                pitta: "increases",
                kapha: "decreases"
            },
            guna: ["Laghu (light)", "Snigdha (slightly oily)"]
        },
        
        targetAilments: ["digestion", "respiratory", "inflammation"],
        ailmentNames: ["Digestion", "Respiratory", "Circulation"],
        
        traditionalUses: [
            "Kindling digestive fire (Deepana)",
            "Relieving nausea and motion sickness",
            "Clearing cold congestion",
            "Promoting healthy circulation",
            "Supporting joint comfort"
        ],
        
        phytochemicals: [
            { name: "Gingerols", description: "The primary pungent compounds in fresh ginger — convert to shogaols when dried" },
            { name: "Shogaols", description: "More concentrated in dried ginger — more potent warming effect" },
            { name: "Zingerone", description: "Develops in cooking — contributes to the sweet undertone" }
        ],
        
        partUsed: ["Rhizome (fresh or dried)"],
        dosage: "Fresh: 1–2 inches daily in tea or cooking. Dry powder: 250–500mg",
        
        precautions: [
            "Can aggravate pitta and acid reflux in excess",
            "May interact with blood thinners",
            "Fresh and dried have different intensities — adjust accordingly"
        ],
        
        references: [
            { title: "Ginger in Gastrointestinal Disorders", url: "https://pubmed.ncbi.nlm.nih.gov/30680163/" },
            { title: "Ginger and Pain: A Systemic Review", url: "https://pubmed.ncbi.nlm.nih.gov/23612703/" }
        ],
        
        habitat: "Originated in Southeast Asia — now cultivated globally",
        cultivation: "Plant rhizome pieces in warm, humid conditions. Harvest 8–10 months."
    },
    
    {
        id: "licorice",
        name: "Licorice",
        sanskritName: "यष्टिमधु",
        scientificName: "Glycyrrhiza glabra",
        commonNames: ["Mulethi", "Sweetwood"],
        family: "Fabaceae",
        emoji: "🪵",
        description: "The Sanskrit name means 'sweet stick,' and indeed licorice is naturally 50 times sweeter than sugar. This sweetness carries therapeutic information — it soothes, moistens, and builds. It's the harmonizer in many traditional formulas.",
        
        ayurvedicProperties: {
            rasa: ["madhura"],
            rasaNames: ["Sweet"],
            virya: "sheeta",
            viryaName: "Cooling",
            vipaka: "madhura",
            vipakaName: "Sweet",
            doshaEffect: {
                vata: "decreases",
                pitta: "decreases",
                kapha: "increases"
            },
            guna: ["Guru (heavy)", "Snigdha (oily)"]
        },
        
        targetAilments: ["respiratory", "digestion", "inflammation"],
        ailmentNames: ["Throat & Respiratory", "Digestive comfort", "Adrenal support"],
        
        traditionalUses: [
            "Soothing the throat and voice",
            "Supporting the respiratory tract",
            "Calming digestive inflammation",
            "Balancing other herbs in formulas",
            "Nourishing the adrenals"
        ],
        
        phytochemicals: [
            { name: "Glycyrrhizin", description: "The compound responsible for sweetness — also anti-inflammatory, but affects cortisol" },
            { name: "Glabridin", description: "Shows antioxidant and skin-lightening properties" },
            { name: "Liquiritin", description: "A flavonoid with multiple therapeutic effects" }
        ],
        
        partUsed: ["Root (dried, often as powder or in formulas)"],
        dosage: "250–500mg root powder daily, or small piece chewed. Not for long-term use alone.",
        
        precautions: [
            "Long-term use can raise blood pressure and lower potassium",
            "Avoid with hypertension, heart conditions, or pregnancy",
            "DGL (deglycyrrhizinated licorice) removes the problematic compound for digestive use"
        ],
        
        references: [
            { title: "Glycyrrhiza glabra: Medicine from the Roots", url: "https://pubmed.ncbi.nlm.nih.gov/22529473/" },
            { title: "Licorice and Its Bioactive Compounds", url: "https://pubmed.ncbi.nlm.nih.gov/25629927/" }
        ],
        
        habitat: "Native to southern Europe and Asia — grows in river valleys",
        cultivation: "Perennial — roots harvested after 3–4 years of growth."
    },
    
    {
        id: "guduchi",
        name: "Guduchi",
        sanskritName: "गुडूची",
        scientificName: "Tinospora cordifolia",
        commonNames: ["Giloy", "Heart-Leaved Moonseed", "Amrita"],
        family: "Menispermaceae",
        emoji: "💚",
        description: "Guduchi means 'one that protects the body' — and its other name, Amrita (nectar of immortality), speaks to its revered status. It's considered one of the best herbs for building deep immunity and purifying the blood.",
        
        ayurvedicProperties: {
            rasa: ["tikta", "kashaya"],
            rasaNames: ["Bitter", "Astringent"],
            virya: "ushna",
            viryaName: "Warming",
            vipaka: "madhura",
            vipakaName: "Sweet",
            doshaEffect: {
                vata: "decreases",
                pitta: "decreases",
                kapha: "decreases"
            },
            guna: ["Laghu (light)", "Snigdha (slightly oily)"]
        },
        
        targetAilments: ["immunity", "inflammation", "digestion"],
        ailmentNames: ["Deep Immunity", "Inflammation", "Fever"],
        
        traditionalUses: [
            "Building deep, lasting immunity (Ojas)",
            "Managing fevers of all kinds",
            "Purifying the blood",
            "Supporting liver function",
            "Recovery from illness"
        ],
        
        phytochemicals: [
            { name: "Tinosporin", description: "The bitter principle — immunomodulating properties" },
            { name: "Berberine", description: "An alkaloid shared with goldenseal — antimicrobial" },
            { name: "Tinosporaside", description: "Contributes to the immune-supporting effects" },
            { name: "Giloin", description: "A glycoside with various therapeutic activities" }
        ],
        
        partUsed: ["Stem (primary)", "Leaves"],
        dosage: "500–1000mg stem powder twice daily, or as traditional decoction (kashaya)",
        
        precautions: [
            "May lower blood sugar — monitor if diabetic",
            "Best used with guidance for autoimmune conditions",
            "Quality varies — source from reliable suppliers"
        ],
        
        references: [
            { title: "Immunomodulatory Activity of Tinospora cordifolia", url: "https://pubmed.ncbi.nlm.nih.gov/22431524/" },
            { title: "A Review on Guduchi: A Medicinal Plant", url: "https://pubmed.ncbi.nlm.nih.gov/28934166/" }
        ],
        
        habitat: "Found throughout tropical India, climbing on other trees",
        cultivation: "Propagated from stem cuttings. Grows rapidly in warm climates."
    },
    
    {
        id: "triphala",
        name: "Triphala",
        sanskritName: "त्रिफला",
        scientificName: "Three fruits: Amalaki, Bibhitaki, Haritaki",
        commonNames: ["Three Fruits"],
        family: "Various",
        emoji: "🍃",
        description: "Triphala is not a single plant but a classical formula — perhaps the most famous in Ayurveda. The three fruits balance each other perfectly: Amalaki for pitta, Haritaki for vata, Bibhitaki for kapha. Together, they gently cleanse while nourishing.",
        
        ayurvedicProperties: {
            rasa: ["madhura", "amla", "tikta", "katu", "kashaya"],
            rasaNames: ["Sweet", "Sour", "Bitter", "Pungent", "Astringent"],
            virya: "sheeta",
            viryaName: "Neutral-Cooling",
            vipaka: "madhura",
            vipakaName: "Sweet",
            doshaEffect: {
                vata: "decreases",
                pitta: "decreases",
                kapha: "decreases"
            },
            guna: ["Laghu (light)", "Ruksha (dry)"]
        },
        
        targetAilments: ["digestion", "immunity", "skin"],
        ailmentNames: ["Digestion", "Detox", "Eye health"],
        
        traditionalUses: [
            "Gentle, non-habit-forming digestive regulation",
            "Supporting healthy elimination",
            "Rejuvenating the GI tract",
            "Eye wash (diluted decoction)",
            "General detoxification"
        ],
        
        phytochemicals: [
            { name: "Gallic acid", description: "Powerful antioxidant present in all three fruits" },
            { name: "Chebulagic acid", description: "From Haritaki — shows anti-cancer properties in research" },
            { name: "Chebulinic acid", description: "From Haritaki — antibacterial" },
            { name: "Emblicanin A & B", description: "From Amalaki — potent antioxidants" }
        ],
        
        partUsed: ["Dried fruit powder of all three in equal parts"],
        dosage: "1–3g in warm water, typically before bed or on rising. Start low.",
        
        precautions: [
            "Can cause loose stools initially — start with small doses",
            "Not recommended during pregnancy",
            "Reduce or pause during acute diarrhea"
        ],
        
        references: [
            { title: "Therapeutic Uses of Triphala in Ayurvedic Medicine", url: "https://pubmed.ncbi.nlm.nih.gov/28696777/" },
            { title: "Triphala: A Comprehensive Review", url: "https://pubmed.ncbi.nlm.nih.gov/28107821/" }
        ],
        
        habitat: "Each component grows in different regions of India",
        cultivation: "Traditionally wild-harvested; now increasingly cultivated."
    },
    
    {
        id: "bhringraj",
        name: "Bhringraj",
        sanskritName: "भृङ्गराज",
        scientificName: "Eclipta prostrata",
        commonNames: ["False Daisy", "King of Hair"],
        family: "Asteraceae",
        emoji: "🌻",
        description: "The name means 'ruler of the bees' — bees are said to be attracted to its flowers, and the plant is said to give hair the black sheen of a bee's wing. Beyond hair, it's one of Ayurveda's most important liver herbs.",
        
        ayurvedicProperties: {
            rasa: ["tikta", "katu"],
            rasaNames: ["Bitter", "Pungent"],
            virya: "ushna",
            viryaName: "Warming",
            vipaka: "katu",
            vipakaName: "Pungent",
            doshaEffect: {
                vata: "decreases",
                pitta: "neutral",
                kapha: "decreases"
            },
            guna: ["Laghu (light)", "Ruksha (dry)"]
        },
        
        targetAilments: ["skin", "digestion", "stress"],
        ailmentNames: ["Hair health", "Liver support", "Memory"],
        
        traditionalUses: [
            "Supporting healthy hair growth",
            "Preventing premature graying",
            "Protecting liver function",
            "Enhancing memory (Medhya)",
            "Skin health (internal and external)"
        ],
        
        phytochemicals: [
            { name: "Wedelolactone", description: "The primary compound — hepatoprotective and hair-supporting" },
            { name: "Ecliptine", description: "An alkaloid contributing to therapeutic effects" },
            { name: "Coumestans", description: "Flavonoid-like compounds with antioxidant activity" }
        ],
        
        partUsed: ["Whole plant", "Leaves", "Oil extract"],
        dosage: "Internally: 250–500mg powder daily. Externally: bhringraj oil applied to scalp regularly",
        
        precautions: [
            "May cause allergic reactions in sensitive individuals",
            "Use cautiously with biliary obstruction",
            "Internal and external uses have different effects"
        ],
        
        references: [
            { title: "Hepatoprotective Activity of Eclipta alba", url: "https://pubmed.ncbi.nlm.nih.gov/18831356/" },
            { title: "Review on Hair Growth Activity of Bhringraj", url: "https://pubmed.ncbi.nlm.nih.gov/19393020/" }
        ],
        
        habitat: "Grows wild in marshy areas throughout India",
        cultivation: "Annual herb — grows readily in moist soil."
    }
];

// Utility functions
function getAllAilments() {
    const ailments = new Set();
    plantsData.forEach(plant => {
        plant.targetAilments.forEach(ailment => ailments.add(ailment));
    });
    return Array.from(ailments);
}

function getPlantById(id) {
    return plantsData.find(p => p.id === id);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { plantsData, getAllAilments, getPlantById };
}
