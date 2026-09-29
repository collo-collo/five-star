const WHATSAPP_NUMBER = '';

const links = {
    home: 'index.html', operations: 'operations.html', about: 'about.html', crops: 'crops.html',
    canola: 'canola.html', barley: 'barley.html', maize: 'maize.html', potatoes: 'potatoes.html', beans: 'beans.html',
    seeds: 'seed-supply.html', potatoSeed: 'potato-seed.html', beanSeed: 'bean-seed.html',
    equipment: 'equipment-hire.html', tractors: 'tractors.html', silage: 'silage-equipment.html', harvesting: 'harvesting-equipment.html',
    contact: 'contact.html'
};

const crops = [
    {
        key: 'canola', name: 'Canola', type: 'Oilseed',
        storyTitle: 'Canola: flowering, pod fill, and harvest',
        storyIntro: 'Canola is an oilseed crop whose field cycle includes establishment, flowering, pod development, seed fill, and harvest. Season and local field conditions influence timing.',
        summary: 'Canola moves through crop establishment, flowering, pod fill, and harvest. Field timing and handling depend on season and crop condition.',
        image: 'photo-1464226184884-fa280b87c399',
        details: 'Canola is grown for its oil-rich seed. An operation plan can consider establishment, crop monitoring, maturity, harvest timing, and post-harvest handling. Actual practices and crop availability vary by season.',
        pageSections: [
            ['Establishment', 'Seedbed condition, sowing date, and emergence set the starting point for the crop. Field conditions and season influence early development.'],
            ['Flowering and pod fill', 'Flowering is followed by pod formation and seed fill. Crop monitoring helps plan a suitable harvest window.'],
            ['Harvest and movement', 'Harvest timing considers mature seed, weather, field access, machinery scheduling, and the delivery or storage destination.'],
            ['What to ask', 'For crop or purchasing enquiries, share location, timing, estimated quantity, and any quality or delivery requirements.']
        ]
    },
    {
        key: 'barley', name: 'Barley', type: 'Cereal grain',
        storyTitle: 'Barley: establishment through grain harvest',
        storyIntro: 'Barley develops from early crop establishment through stem growth, heading, grain fill, and harvest. Maturity and field conditions guide practical timing.',
        summary: 'Barley progresses from establishment through grain development and harvest, with timing guided by maturity and field conditions.',
        image: 'photo-1470252649378-9c29740c9fa8',
        details: 'Barley is a cereal crop harvested for its grain. Crop development, harvest moisture, field access, and intended market can affect timing and handling. Ask the farm about current production and commercial availability.',
        pageSections: [
            ['Early development', 'Establishment and tillering help build the crop canopy. Planting conditions and moisture affect the pace of this stage.'],
            ['Heading and grain fill', 'As heads emerge and grain fills, crop maturity and weather become increasingly important to harvest planning.'],
            ['Harvest and storage', 'Harvest moisture, field access, grain handling, and storage conditions shape post-harvest decisions.'],
            ['What to ask', 'Provide the delivery area, approximate volume, timing, and intended use or quality specification if known.']
        ]
    },
    {
        key: 'maize', name: 'Maize', type: 'Cereal crop',
        storyTitle: 'Maize: from planting to crop movement',
        storyIntro: 'Maize develops through emergence, stalk and ear growth, kernel fill, and harvest. The plan depends partly on whether the crop is intended for grain or forage.',
        summary: 'Maize develops through emergence, stalk and ear growth, kernel fill, and harvest. End use affects the harvest plan.',
        image: 'photo-1706164161497-ef2e3e58c7ad',
        details: 'Production planning can include planting conditions, stand development, crop monitoring, and harvest timing. Grain or forage use changes equipment and handling needs; confirm current farm plans and availability.',
        pageSections: [
            ['Planting and emergence', 'Planting conditions and uniform emergence influence early stand development. The appropriate planting window depends on local conditions.'],
            ['Stalk, ear, and kernel development', 'Crop monitoring follows growth through ear formation and kernel fill. Maturity helps guide harvest decisions.'],
            ['Grain or forage', 'Grain and forage uses have different harvest timing, machinery, and post-harvest handling considerations. Confirm the intended use.'],
            ['What to ask', 'Share crop use, acreage or volume, timing, location, and transport or handling requirements.']
        ]
    },
    {
        key: 'potatoes', name: 'Potatoes', type: 'Root crop',
        storyTitle: 'Potatoes: planting, tuber growth, and lifting',
        storyIntro: 'Potato production moves from seed-tuber planting through canopy and tuber development to lifting, grading, and storage. Soil and crop condition affect handling.',
        summary: 'Potato production follows planting, canopy growth, tuber development, lifting, and careful post-harvest handling.',
        image: 'photo-1573196444577-af471298e034',
        details: 'Potatoes are established from seed tubers, then managed through canopy and tuber development before lifting. Soil condition, crop maturity, grading, storage, and destination can influence handling. The farm also fields separate potato-seed enquiries.',
        pageSections: [
            ['Seed tubers and planting', 'Planting plans consider seed lot, sizing, soil condition, spacing, and the target window. Ask the farm for available seed information.'],
            ['Canopy and tuber development', 'Crop development and field conditions guide in-season monitoring and later lifting decisions.'],
            ['Lifting, grading, and storage', 'Careful lifting and movement help limit bruising. Grading and storage depend on crop condition and destination.'],
            ['What to ask', 'Share variety if known, planting or harvest timing, acreage or quantity, and storage or delivery requirements.']
        ]
    },
    {
        key: 'beans', name: 'Common beans', storyName: 'Common bean (Phaseolus vulgaris)',
        productionTitle: 'Common bean (Phaseolus vulgaris) production', type: 'Pulse crop',
        storyTitle: 'Common bean: pods, harvest, and threshing',
        storyIntro: 'The bean crop described here is the common bean, Phaseolus vulgaris. Its dry-bean journey runs from flowering and pod development to harvest, threshing, cleaning, grading, and storage.',
        summary: 'Common bean (Phaseolus vulgaris) develops from flowering to pods, then harvest, threshing, cleaning, and storage. Timing varies by variety and season.',
        image: 'photo-1630095829654-b734f5cb2b25',
        details: 'Common bean (Phaseolus vulgaris) progresses from establishment through flowering and pod development to harvest. Dry beans are then separated from pods, cleaned, graded, and stored according to quality and market requirements. Confirm varieties and crop availability directly.',
        pageSections: [
            ['Species and establishment', 'This page covers common bean (Phaseolus vulgaris). Cultivar, seed source, planting conditions, and intended market should be confirmed for the specific operation.'],
            ['Flowering and pod set', 'The plant flowers and forms pods, with timing affected by variety, weather, and local growing conditions.'],
            ['Harvest, threshing, and cleaning', 'Dry pods are harvested and threshed to release the beans. Cleaning, grading, moisture management, and storage follow according to quality and market requirements.'],
            ['What to ask', 'Share variety if known, acreage or quantity, harvest or planting window, and any cleaning, grading, or delivery requirements.']
        ]
    }
];

window.farmFaqSlider = () => ({
    current: 0,
    questions: [
        ['What crops does the farm grow?', 'Canola, barley, maize, potatoes, and common bean (Phaseolus vulgaris) are included in the commercial farming program.'],
        ['What seed is available?', 'Potato seed and common-bean (Phaseolus vulgaris) seed are the primary lines. Varieties, quantities, lot details, and documentation should be confirmed with the farm.'],
        ['What equipment can I hire?', 'The farm receives enquiries for tractors, harvesting machinery, and silage or feed-making equipment. Availability and specifications are confirmed per job.'],
        ['Can you confirm machinery rates and technical specifications?', 'Yes, the team can confirm current machine models, capabilities, hire conditions, and rates for a specific job. This preview does not include unverified numbers.'],
        ['Where is the farm located?', 'Location and service coverage have not been provided for this website preview. Use the enquiry form to share your location and ask about service availability.']
    ],
    next() { this.current = (this.current + 1) % this.questions.length; },
    previous() { this.current = (this.current - 1 + this.questions.length) % this.questions.length; }
});

const pages = {
    operations: {
        type: 'editorial', eyebrow: 'Our operations', title: 'Commercial production, coordinated from field to harvest.',
        summary: 'Large-scale crop production, quality seed supply, and agricultural equipment hire brought together through practical farm operations.',
        image: 'photo-1500076656116-558758c991c1', cta: 'Discuss an operation', back: 'Home', backHref: links.home,
        sections: [
            ['Commercial production & scale', 'Five crops bring different planting windows, growth patterns, harvest requirements, and market considerations. Field plans are shaped around each crop and season.'],
            ['Quality seed supply', 'Potato and common-bean (Phaseolus vulgaris) seed are key enquiry areas. Ask about variety, seed class, lot, quantity, source, and available documents.'],
            ['Modern fleet & operations', 'Equipment enquiries cover field work, harvesting, and silage or feed-making needs. Machines, attachments, operators, rates, and dates must be confirmed for each job.'],
            ['From planting to post-harvest', 'Work can span land preparation, planting, crop monitoring, harvest, transport, and storage. The relevant sequence depends on crop, use, weather, and field conditions.']
        ]
    },
    about: {
        type: 'editorial', eyebrow: 'About the farm', title: 'Agriculture built around scale, quality, and consistent operations.',
        summary: 'Five Star Farms brings commercial crop production, quality potato and common-bean seed, and agricultural equipment enquiries together in one operation.',
        image: 'photo-1500595046743-cd271d694d30', cta: 'Contact the farm', back: 'Home', backHref: links.home,
        sections: [
            ['A multi-crop operation', 'Five Star Farms grows canola, barley, maize, potatoes, and common beans (Phaseolus vulgaris). Each crop brings a different production cycle and post-harvest requirement.'],
            ['Seed supply', 'Potato and common-bean (Phaseolus vulgaris) seed are the primary seed enquiries. Check current stock, variety, lot details, provenance, and quality records directly with the team.'],
            ['Equipment hire', 'Heavy agricultural machinery can support field preparation, crop work, harvesting, and silage or feed production. Hire availability and terms depend on the specific machine and job.'],
            ['A practical partnership', 'Useful enquiry details include crop, acreage or quantity, location, timing, field access, intended use, and any machinery or handling requirements.']
        ]
    },
    crops: {
        type: 'crop-index', eyebrow: 'What we grow', title: 'Five crops. One coordinated farming operation.',
        summary: 'Explore the crops produced across the farm and start a conversation about production, availability, or commercial purchasing.',
        image: 'photo-1530268729831-4b0b9e170218', cta: 'Discuss crop enquiries', back: 'Home', backHref: links.home
    },
    'seed-supply': {
        type: 'seed-index', eyebrow: 'Quality seed supply', title: 'Seed selected for productive commercial growing.',
        summary: 'Potato and common-bean (Phaseolus vulgaris) seed are the main seed lines. Request current variety, availability, provenance, and quality or certification documents for the specific lot.',
        image: 'photo-1574323347407-f5e1ad6d020b', cta: 'Enquire about seed', back: 'Home', backHref: links.home,
        sections: [
            ['Potato seed', 'Seed tuber selection is part of planning a potato crop. Ask about the available variety, class, sizing, quantity, delivery window, and lot-specific documents.'],
            ['Common-bean seed', 'The bean page refers to common bean (Phaseolus vulgaris). Confirm the offered variety, intended use, quantity, and planting window with the farm.'],
            ['Quality information', 'Seed class, source, testing, treatment, and certification vary by lot and destination. Review the documentation for the actual lot before purchase.']
        ]
    },
    'potato-seed': {
        type: 'detail', eyebrow: 'Potato seed', title: 'Potato seed supply for commercial growers.',
        summary: 'Request information on available potato seed, varieties, seed class, sizing, provenance, and supporting documentation.',
        image: 'photo-1518977676601-b53f82aba655', cta: 'Enquire about potato seed', back: 'Seed supply', backHref: links.seeds,
        sections: [
            ['Variety and seed class', 'Variety choice and seed class can shape crop planning. Ask which options are currently available and how the lot is identified.'],
            ['Sizing and handling', 'Sizing, packaging, treatment, transport, and storage instructions should be confirmed for the specific lot and destination.'],
            ['Plan your order', 'Share your location, planting window, acreage, required quantity, and any grading or documentation requirements.']
        ]
    },
    'bean-seed': {
        type: 'detail', eyebrow: 'Common-bean seed | Phaseolus vulgaris', title: 'Common-bean seed for commercial production.',
        summary: 'Discuss seed varieties for common bean (Phaseolus vulgaris), availability, intended growing conditions, and lot documentation.',
        image: 'photo-1515543904379-3d757afe72e4', cta: 'Enquire about bean seed', back: 'Seed supply', backHref: links.seeds,
        sections: [
            ['Species and variety', 'The crop page describes common bean (Phaseolus vulgaris). Cultivar, seed class, and intended market should be confirmed for each order.'],
            ['Lot information', 'Ask about seed source, size, treatment, lot identification, quality testing, and any documentation available for the specific batch.'],
            ['Order planning', 'Share location, planting window, acreage, target quantity, and intended use so the team can check suitability and availability.']
        ]
    },
    'equipment-hire': {
        type: 'equipment-index', eyebrow: 'Modern fleet & operations', title: 'Agricultural equipment hire for demanding field work.',
        summary: 'Heavy machinery and farm equipment for commercial operations. Tell us about your work, location, timing, and operating requirements so availability can be checked.',
        image: 'photo-1500937386664-56d1dfef3854', cta: 'Request equipment availability', back: 'Home', backHref: links.home
    },
    tractors: {
        type: 'detail', eyebrow: 'Tractors', title: 'Tractor hire for agricultural operations.',
        summary: 'Enquire about tractor availability for your field work, acreage, location, and operating dates.',
        image: 'photo-1665436700135-3c1e0b902e91', cta: 'Enquire about tractors', back: 'Equipment hire', backHref: links.equipment,
        sections: [
            ['Match the tractor to the task', 'Describe the work, acreage, terrain, soil conditions, and any implement or power-take-off requirements. The farm can then check which available machine is appropriate.'],
            ['Operator and attachments', 'Confirm whether an operator is required, which implements are needed, and who is responsible for hookup, transport, fuel, and field access.'],
            ['Plan the schedule', 'Provide location, access constraints, preferred dates, and expected working hours. Availability, machine specifications, and hire rates are confirmed before booking.']
        ]
    },
    'silage-equipment': {
        type: 'detail', eyebrow: 'Silage & feed equipment', title: 'Machinery for silage and feed-making work.',
        summary: 'Discuss equipment availability for silage, forage, and feed production requirements.',
        image: 'photo-1625246333195-78d9c38ad449', cta: 'Enquire about silage equipment', back: 'Equipment hire', backHref: links.equipment,
        sections: [
            ['Describe the forage job', 'Include the crop or material, acreage, moisture or maturity context if known, expected volume, and which stages of the work are required.'],
            ['Coordinate the operation', 'Cutting, chopping, hauling, and packing can require different machinery and people. Confirm which equipment and operator arrangements are actually available.'],
            ['Timing and site access', 'Share location, field entry details, storage or clamp location, and the harvest window. Seasonal scheduling, transport, capacity, and rates are agreed per job.']
        ]
    },
    'harvesting-equipment': {
        type: 'detail', eyebrow: 'Harvesting equipment', title: 'Harvest machinery for seasonal field operations.',
        summary: 'Enquire about harvesting equipment for your crop, field conditions, acreage, and preferred dates.',
        image: 'photo-1507662228758-08d030c4820b', cta: 'Enquire about harvesting equipment', back: 'Equipment hire', backHref: links.equipment,
        sections: [
            ['Crop and harvest method', 'Identify the crop, acreage, maturity or harvest stage, field access, terrain, and whether grain, tubers, or forage handling is needed.'],
            ['Specifications and rates', 'Machine model, capacity, header or attachments, operator, transport, fuel, and hire rates are confirmed for each enquiry.'],
            ['Seasonal scheduling', 'Weather and crop maturity can shift harvest dates. Provide a date range, location, and backup window so the team can discuss scheduling.']
        ]
    }
};

function navigation() {
    const cropLinks = crops.map(crop => `<a href="${crop.key}.html" class="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-cyan-700">${crop.name}</a>`).join('');
    const menu = (label, state, items, width = 'w-64') => `<div class="relative" @mouseenter="${state} = true" @mouseleave="${state} = false"><button type="button" class="flex items-center gap-1 py-2 transition hover:text-cyan-700" @click="${state} = !${state}" :aria-expanded="${state}.toString()">${label} <span class="text-xs">&#9662;</span></button><div x-show="${state}" x-cloak class="absolute left-0 top-full ${width} border-t-2 border-cyan-600 bg-white py-2 shadow-xl">${items}</div></div>`;
    const cropMenu = menu('Crops', 'cropsOpen', `<a href="${links.crops}" class="block px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 hover:text-cyan-700">All crops</a>${cropLinks}`);
    const farmMenu = menu('Our farm', 'farmOpen', `<a href="${links.operations}" class="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-cyan-700">Our operations</a><a href="${links.about}" class="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-cyan-700">About the farm</a>`);
    const seedMenu = menu('Seeds', 'seedOpen', `<a href="${links.seeds}" class="block px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 hover:text-cyan-700">Seed supply</a><a href="${links.potatoSeed}" class="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-cyan-700">Potato seed</a><a href="${links.beanSeed}" class="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-cyan-700">Common-bean seed</a>`);
    const equipmentMenu = menu('Equipment hire', 'equipmentOpen', `<a href="${links.equipment}" class="block px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 hover:text-cyan-700">All equipment</a><a href="${links.tractors}" class="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-cyan-700">Tractors</a><a href="${links.silage}" class="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-cyan-700">Silage &amp; feed equipment</a><a href="${links.harvesting}" class="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-cyan-700">Harvesting equipment</a>`);
    const mobileGroup = (label, state, entries) => `<div><button type="button" class="flex w-full items-center justify-between py-2 text-left" @click="${state} = !${state}" :aria-expanded="${state}.toString()">${label}<span class="text-xs transition" :class="{'rotate-180':${state}}">&#9662;</span></button><div x-show="${state}" x-cloak class="border-l border-slate-200 pl-4">${entries}</div></div>`;
    const mobileLinks = (entries) => entries.map(([name, href]) => `<a @click="mobileOpen = false" href="${href}" class="block py-2 text-slate-600">${name}</a>`).join('');
    return `<div class="bg-[#164b3f] px-5 py-2 text-xs text-slate-200 sm:px-8"><div class="mx-auto flex max-w-7xl items-center justify-between gap-4"><p>Commercial crop production, quality seed, and equipment hire.</p><a href="${links.contact}" class="hidden font-semibold text-cyan-300 transition hover:text-white sm:block">Quick enquiry <span aria-hidden="true">&rarr;</span></a></div></div>
    <header class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur"><div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"><a href="${links.home}" class="flex items-center gap-3" aria-label="Five Star Farms home"><span class="flex h-10 w-10 items-center justify-center bg-[#164b3f] text-lg font-bold tracking-tight text-white">FS</span><span><span class="block text-sm font-bold tracking-[0.18em] text-[#164b3f]">FIVE STAR FARMS</span><span class="block text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">Crops · seed · equipment</span></span></a><button type="button" class="rounded-md p-2 text-slate-700 lg:hidden" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen.toString()" aria-label="Toggle navigation"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" /></svg></button><nav class="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex" aria-label="Primary navigation"><a href="${links.home}#top" class="transition hover:text-cyan-700">Home</a>${farmMenu}${cropMenu}${seedMenu}${equipmentMenu}<a href="${links.about}" class="transition hover:text-cyan-700">About us</a></nav><a href="${links.contact}" class="hidden bg-cyan-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-800 lg:inline-block">Enquire now</a></div>
    <nav x-show="mobileOpen" x-cloak class="border-t border-slate-200 bg-white px-5 py-4 lg:hidden" aria-label="Mobile navigation"><div class="space-y-1 text-sm font-semibold"><a @click="mobileOpen = false" href="${links.home}#top" class="block py-2">Home</a>${mobileGroup('Our farm', 'farmOpen', mobileLinks([['Our operations', links.operations], ['About the farm', links.about]]))}${mobileGroup('Crops', 'cropsOpen', mobileLinks([['All crops', links.crops], ...crops.map(crop => [crop.name, `${crop.key}.html`])]))}${mobileGroup('Seeds', 'seedOpen', mobileLinks([['Seed supply', links.seeds], ['Potato seed', links.potatoSeed], ['Common-bean seed', links.beanSeed]]))}${mobileGroup('Equipment hire', 'equipmentOpen', mobileLinks([['All equipment', links.equipment], ['Tractors', links.tractors], ['Silage & feed equipment', links.silage], ['Harvesting equipment', links.harvesting]]))}<a @click="mobileOpen = false" href="${links.about}" class="block py-2">About us</a><a @click="mobileOpen = false" href="${links.contact}" class="mt-3 block bg-cyan-700 px-4 py-3 text-center text-white">Enquire now</a></div></nav></header>`;
}

function footer() {
    const cropFooter = crops.map(crop => `<a href="${crop.key}.html" class="block hover:text-cyan-300">${crop.name}</a>`).join('');
    return `<footer class="border-t-4 border-amber-600 bg-[#164b3f] px-5 py-14 text-slate-100 sm:px-8"><div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12"><div><div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center bg-cyan-500 text-lg font-bold text-[#164b3f]">FS</span><h2 class="text-xs font-bold uppercase tracking-[0.16em] text-white">Five Star Farms</h2></div><p class="mt-4 max-w-sm text-sm leading-6 text-slate-200">Commercial crop production, quality potato and common-bean seed, and agricultural equipment hire.</p><a href="${links.contact}" class="mt-6 inline-flex bg-cyan-500 px-4 py-2.5 text-sm font-bold text-[#164b3f] transition hover:bg-cyan-300">Schedule a consultation <span class="ml-2" aria-hidden="true">&rarr;</span></a></div><div><h2 class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Crops</h2><nav class="mt-4 space-y-2 text-sm text-slate-200" aria-label="Crop footer links">${cropFooter}</nav></div><div><h2 class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Products &amp; services</h2><nav class="mt-4 space-y-2 text-sm text-slate-200" aria-label="Services footer links"><a href="${links.seeds}" class="block hover:text-cyan-300">Seed supply</a><a href="${links.potatoSeed}" class="block hover:text-cyan-300">Potato seed</a><a href="${links.beanSeed}" class="block hover:text-cyan-300">Common-bean seed</a><a href="${links.equipment}" class="block hover:text-cyan-300">Equipment hire</a><a href="${links.operations}" class="block hover:text-cyan-300">Farm operations</a></nav></div><div><h2 class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Enquiries</h2><div class="mt-4 space-y-3 text-sm leading-6 text-slate-200"><p>Have a crop, seed, or equipment requirement? Share the details and the team can check what is available.</p><a href="${links.contact}" class="block font-semibold text-cyan-300 hover:text-white">Contact the farm</a></div></div></div><div class="mx-auto mt-10 max-w-7xl border-t border-cyan-300/30 pt-5 text-center text-xs text-slate-300">Five Star Farms</div></footer>`;
}

function assistant() {
    const quickContactUrl = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I have an agricultural enquiry.')}` : links.contact;
    const quickContactLabel = WHATSAPP_NUMBER ? 'WhatsApp quick enquiry' : 'Quick enquiry';
    return `<div class="fixed bottom-5 right-5 z-50 flex items-center gap-2" x-data="{ assistantOpen:false, answer:'' }"><a href="${quickContactUrl}" ${WHATSAPP_NUMBER ? 'target="_blank" rel="noopener noreferrer"' : ''} class="bg-cyan-700 px-4 py-3 text-sm font-bold text-white shadow-xl transition hover:bg-cyan-800">${quickContactLabel}</a><section x-show="assistantOpen" x-cloak x-transition class="absolute bottom-16 right-0 mb-3 w-[min(22rem,calc(100vw-2.5rem))] border border-slate-700 bg-[#102e29] text-slate-100 shadow-2xl" role="dialog" aria-label="Farm information assistant"><div class="flex items-center justify-between border-b border-slate-700 px-4 py-3"><div><p class="font-semibold">Farm information</p><p class="text-xs text-slate-400">Quick enquiry assistant</p></div><button type="button" @click="assistantOpen=false" class="px-2 text-xl" aria-label="Close assistant">&times;</button></div><div class="space-y-3 p-4 text-sm"><p class="max-w-[90%] bg-[#1b493d] px-3 py-2.5 leading-5">Hello. What can we help you with?</p><template x-if="answer"><p class="ml-auto max-w-[90%] bg-[#1b493d] px-3 py-2.5 leading-5" x-text="answer"></p></template><button type="button" @click="answer='The farm grows canola, barley, maize, potatoes, and common bean (Phaseolus vulgaris). Visit What we grow for crop information.'" class="block w-full border border-slate-600 px-3 py-2.5 text-left hover:border-cyan-400 hover:bg-[#1b493d]">What crops do you grow?</button><button type="button" @click="answer='Potato seed and common-bean (Phaseolus vulgaris) seed are the main seed lines. Use the seed enquiry form to ask about current varieties and availability.'" class="block w-full border border-slate-600 px-3 py-2.5 text-left hover:border-cyan-400 hover:bg-[#1b493d]">I need seed</button><button type="button" @click="answer='Tractors, harvesting, and silage/feed equipment enquiries are welcome. Availability and specifications are confirmed for each job.'" class="block w-full border border-slate-600 px-3 py-2.5 text-left hover:border-cyan-400 hover:bg-[#1b493d]">I need to hire machinery</button><a href="${links.contact}" class="block w-full border border-slate-600 px-3 py-2.5 text-left hover:border-cyan-400 hover:bg-[#1b493d]">Contact the farm</a></div></section><button type="button" @click="assistantOpen=!assistantOpen" :aria-expanded="assistantOpen.toString()" aria-label="Open farm information assistant" title="Farm information assistant" class="relative flex h-14 w-14 items-center justify-center bg-[#164b3f] text-white shadow-xl transition hover:bg-cyan-800"><span class="text-lg font-bold" x-text="assistantOpen ? '&times;' : 'FS'"></span><span class="absolute -right-1 -top-1 h-3 w-3 border-2 border-white bg-emerald-400"></span></button></div>`;
}

function photo(id, width = 1000) {
    return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

function hero(data, side = true) {
    const backLink = data.back === false ? '' : `<a href="${data.backHref || links.home}" class="text-sm font-semibold text-cyan-300 hover:text-white">&larr; ${data.back || 'Home'}</a>`;
    const heroGrid = side ? 'lg:grid-cols-[1.1fr_0.9fr] lg:items-end' : '';

    return `<section class="relative overflow-hidden bg-[#164b3f] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image:linear-gradient(105deg,rgba(16,42,67,.95) 12%,rgba(16,42,67,.78) 58%,rgba(16,42,67,.48)),url('${photo(data.image, 1800)}')"></div>
        <div class="relative mx-auto grid max-w-7xl gap-12 ${heroGrid}">
            <div class="max-w-3xl">${backLink}<p class="${data.back === false ? '' : 'mt-10'} text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">${data.eyebrow}</p>
                <h1 class="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">${data.title}</h1>
                <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-200">${data.summary}</p>
                <a href="${data.href || links.contact}" class="mt-8 inline-block bg-cyan-500 px-6 py-3.5 text-sm font-bold text-[#164b3f] transition hover:bg-cyan-300">${data.cta || 'Make an enquiry'} <span aria-hidden="true">&rarr;</span></a>
            </div>
            ${side ? '<div class="border-l-2 border-cyan-400 pl-6 text-slate-200"><p class="text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">A practical starting point</p><p class="mt-4 text-2xl font-medium leading-snug text-white">Share the crop, acreage, location, timing, or equipment you need. We will help identify the right next step.</p></div>' : ''}
        </div>
    </section>`;
}

function cards(items, kind = 'plain') {
    return items.map((item, index) => {
        const [title, text, href, image] = item;
        if (kind === 'crop') {
            const crop = crops.find(entry => entry.name === title);
            return `<a href="${href}" class="group overflow-hidden border border-slate-200 bg-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"><div class="h-48 bg-cover bg-center" style="background-image:url('${photo(image || crop.image, 800)}')"></div><div class="p-6"><span class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">${crop.type}</span><h3 class="mt-3 text-xl font-semibold text-[#164b3f]">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${text}</p><span class="mt-5 inline-block text-sm font-bold text-cyan-700">Explore crop <span aria-hidden="true">&rarr;</span></span></div></a>`;
        }
        return `<a href="${href}" class="border-t-2 border-[#164b3f] bg-white p-7 shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"><span class="text-xs font-bold tracking-[0.18em] text-cyan-700">${String(index + 1).padStart(2, '0')}</span><h3 class="mt-10 text-xl font-semibold text-[#164b3f]">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${text}</p><span class="mt-6 inline-block text-sm font-bold text-cyan-700">Explore <span aria-hidden="true">&rarr;</span></span></a>`;
    }).join('');
}

function cropGridUnused() {
    return `<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${crops.map(crop => `<a href="${crop.key}.html" class="group overflow-hidden border border-slate-200 bg-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"><div class="h-52 bg-cover bg-center" :style="'background-image:url(' + crop.imageUrl + ')' "></div><div class="p-6"><span class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700" x-text="crop.type"></span><h2 class="mt-2 text-2xl font-semibold text-[#164b3f]" x-text="crop.name"></h2><p class="mt-3 text-sm leading-6 text-slate-600" x-text="crop.summary"></p><span class="mt-5 inline-block text-sm font-bold text-cyan-700">Explore crop <span aria-hidden="true">&rarr;</span></span></div></a>`).join('')}</div>`;
}

function cropGrid() {
    return `<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${crops.map(crop => `<a href="${crop.key}.html" class="group overflow-hidden border border-slate-200 bg-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"><div class="h-52 bg-cover bg-center transition duration-300 group-hover:scale-[1.02]" style="background-image:url('${photo(crop.image, 900)}')"></div><div class="p-6"><span class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">${crop.type}</span><h2 class="mt-2 text-2xl font-semibold text-[#164b3f]">${crop.name}</h2><p class="mt-3 text-sm leading-6 text-slate-600">${crop.summary}</p><span class="mt-5 inline-block text-sm font-bold text-cyan-700">Explore crop <span aria-hidden="true">&rarr;</span></span></div></a>`).join('')}</div>`;
}

window.cropPlanningGuide = () => ({
    filter: 'all',
    soil: '',
    rainfall: '',
    crops: crops.map(crop => ({
        ...crop,
        imageUrl: photo(crop.image, 900),
        href: `${crop.key}.html`
    })),
    get visibleCrops() {
        return this.filter === 'all' ? this.crops : this.crops.filter(crop => crop.type === this.filter);
    }
});

function cropPlanningFilter() {
    const types = [...new Set(crops.map(crop => crop.type))];

    return `<div x-data="cropPlanningGuide()" class="mt-8">
        <div class="grid gap-4 border border-slate-200 bg-white p-5 sm:grid-cols-3">
            <label class="text-sm font-semibold text-slate-700">Crop type<select x-model="filter" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"><option value="all">All crops</option>${types.map(type => `<option>${type}</option>`).join('')}</select></label>
            <label class="text-sm font-semibold text-slate-700">Soil context<select x-model="soil" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"><option value="">Select soil context</option><option>Light / sandy</option><option>Medium / loam</option><option>Heavy / clay</option><option>Not sure</option></select></label>
            <label class="text-sm font-semibold text-slate-700">Expected rainfall<select x-model="rainfall" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"><option value="">Select rainfall outlook</option><option>Below usual</option><option>Near usual</option><option>Above usual</option><option>Not sure</option></select></label>
        </div>
        <p class="mt-3 text-xs leading-5 text-slate-500">Use soil and rainfall selections as enquiry context only. Crop suitability and planting windows require local agronomic advice.</p>
        <a :href="'contact.html?interest=Crop%20information&scope=' + encodeURIComponent('Crop filter: ' + filter + '; soil: ' + (soil || 'not provided') + '; rainfall: ' + (rainfall || 'not provided'))" class="mt-4 inline-flex bg-[#164b3f] px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-800">Discuss a planting plan <span class="ml-2">&rarr;</span></a>
        <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <template x-for="crop in visibleCrops" :key="crop.key">
                <a :href="crop.href" class="group overflow-hidden border border-slate-200 bg-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                    <div class="h-52 bg-cover bg-center" :style="'background-image:url(' + crop.imageUrl + ')' "></div>
                    <div class="p-6"><span class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700" x-text="crop.type"></span><h2 class="mt-2 text-2xl font-semibold text-[#164b3f]" x-text="crop.name"></h2><p class="mt-3 text-sm leading-6 text-slate-600" x-text="crop.summary"></p><span class="mt-5 inline-block text-sm font-bold text-cyan-700">Explore crop <span aria-hidden="true">&rarr;</span></span></div>
                </a>
            </template>
        </div>
    </div>`;
}

function sectionCards(data) {
    return `<section class="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div class="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-${data.sections.length === 4 ? '2' : '3'}">${data.sections.map(([title, text], index) => `<article class="bg-white p-7"><span class="text-xs font-bold tracking-[0.18em] text-cyan-700">${String(index + 1).padStart(2, '0')}</span><h2 class="mt-10 text-xl font-semibold text-[#164b3f]">${title}</h2><p class="mt-3 text-sm leading-6 text-slate-600">${text}</p></article>`).join('')}</div></section>`;
}

const cropStories = {
    canola: [
        ['Establishment and flowering', 'Uniform establishment supports later crop development. Canola then flowers before pods form and seeds fill; actual dates depend on variety, planting date, and season.', 'photo-1500382017468-9049fed747ef'],
        ['Pod maturity and harvest', 'Crop maturity and changing field conditions help determine a harvest window. Machinery and transport are coordinated around the crop and available schedule.', 'photo-1665436700135-3c1e0b902e91'],
        ['Seed movement and storage', 'After harvest, seed handling, cleaning, storage, and movement are planned around crop quality and destination requirements.', 'photo-1499529112087-3cb3b73cec95']
    ],
    barley: [
        ['From shoots to grain fill', 'Barley development includes tillering, stem extension, heading, flowering, and grain fill. Field assessment helps track progress toward maturity.', 'photo-1500595046743-cd271d694d30'],
        ['Harvest readiness', 'Weather, grain moisture, crop maturity, and field access all affect when harvest work can proceed.', 'photo-1507662228758-08d030c4820b'],
        ['Grain quality and storage', 'Post-harvest handling considers moisture, cleanliness, storage conditions, and the quality requirements of the intended use.', 'photo-1625246333195-78d9c38ad449']
    ],
    maize: [
        ['Emergence and ear development', 'Stand establishment is followed by stalk and leaf growth, ear formation, and kernel development. The crop’s intended use shapes later decisions.', 'photo-1500382017468-9049fed747ef'],
        ['Grain or forage harvest', 'Harvest method and timing differ for grain and forage. Crop condition, field access, machinery, and transport need to be considered together.', 'photo-1500937386664-56d1dfef3854'],
        ['Handling after harvest', 'Grain may need drying and storage; forage follows a different preservation and feed-handling path. Confirm actual requirements for the crop and destination.', 'photo-1507662228758-08d030c4820b']
    ],
    potatoes: [
        ['Planting and tuber development', 'Seed tubers establish the crop. Canopy growth and tuber development continue through the season, with field conditions influencing the crop plan.', 'photo-1518977676601-b53f82aba655'],
        ['Lifting from the soil', 'Lifting requires attention to soil condition, tuber maturity, field traffic, and careful handling to reduce damage.', 'photo-1500937386664-56d1dfef3854'],
        ['Grading and storage', 'After lifting, potatoes can be sorted and stored according to condition, intended market, and storage requirements.', 'photo-1464226184884-fa280b87c399']
    ],
    beans: [
        ['Pods developing', 'Common bean (Phaseolus vulgaris) plants progress from flowering to pod set and seed fill. Variety, weather, and field conditions affect the length of each stage.', 'photo-1655929299728-93ee15ed7967'],
        ['Harvested from the field', 'Dry-bean harvest timing balances crop maturity and field conditions. The crop is gathered for threshing when it is ready for that handling process.', 'photo-1665436700135-3c1e0b902e91'],
        ['Beans separated from pods', 'Threshing releases the dry beans from their pods. Cleaning, grading, moisture management, and storage then help prepare the crop for its intended market.', 'photo-1515543904379-3d757afe72e4']
    ]
};

function imageStory(title, introduction, stages, note) {
    return `<section class="bg-white px-5 py-20 sm:px-8"><div class="mx-auto max-w-7xl"><div class="max-w-3xl"><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Field to harvest</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#164b3f] sm:text-4xl">${title}</h2><p class="mt-4 leading-7 text-slate-600">${introduction}</p></div><div class="mt-10 grid gap-5 md:grid-cols-3">${stages.map(([label, text, image]) => `<article class="overflow-hidden border border-slate-200 bg-white"><img src="${photo(image, 900)}" alt="${label} - illustrative agricultural photography" loading="lazy" decoding="async" class="h-56 w-full object-cover"><div class="p-6"><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">${label}</p><p class="mt-3 text-sm leading-6 text-slate-600">${text}</p></div></article>`).join('')}</div><p class="mt-4 text-xs leading-5 text-slate-500">${note}</p></div></section>`;
}

function cropStoryGallery(crop) {
    return imageStory(crop.storyTitle || `${crop.name}: from field to handling`, crop.storyIntro || `A closer look at common stages in ${crop.name.toLowerCase()} production. Specific methods and timing depend on the crop, season, field conditions, and buyer requirements.`, cropStories[crop.key], 'Illustrative stock photography; these images do not depict confirmed Five Star Farms fields, crop lots, or equipment.');
}

function equipmentStoryGallery(kind = 'fleet') {
    const stories = {
        fleet: [
            ['Tractors in the field', 'Tractors support field preparation, planting, transport, and other operations depending on the machine and attachments.', 'photo-1665436700135-3c1e0b902e91'],
            ['Harvest machinery', 'Harvest equipment is scheduled around crop maturity, field conditions, and seasonal demand.', 'photo-1507662228758-08d030c4820b'],
            ['Silage and feed work', 'Silage and feed-making machinery can be discussed by crop, acreage, location, and working dates.', 'photo-1464226184884-fa280b87c399']
        ],
        tractors: [
            ['Preparing and planting', 'Field preparation and planting can call for different tractor sizes and implements. Share soil, terrain, acreage, and the planned task.', 'photo-1500382017468-9049fed747ef'],
            ['Power and attachments', 'Hitch type, power take-off, hydraulic connections, tires, and implement requirements should be matched to the work before booking.', 'photo-1500076656116-558758c991c1'],
            ['Moving between fields', 'Transport route, field access, operator arrangements, working hours, and dates affect the hire plan.', 'photo-1499529112087-3cb3b73cec95']
        ],
        'silage-equipment': [
            ['Forage and timing', 'Silage planning starts with the crop, acreage, maturity, weather window, and the work stages needed at the site.', 'photo-1500382017468-9049fed747ef'],
            ['Cutting, chopping, and movement', 'Equipment and capacity requirements differ across cutting, chopping, hauling, and packing. Confirm what tasks the hire can cover.', 'photo-1500076656116-558758c991c1'],
            ['Storage and access', 'Share clamp or storage access, field entry, transport distance, location, and target dates so logistics can be discussed.', 'photo-1500937386664-56d1dfef3854']
        ],
        'harvesting-equipment': [
            ['Crop and field readiness', 'Crop maturity, ground conditions, slope, access, and field size inform the harvesting approach.', 'photo-1706164161497-ef2e3e58c7ad'],
            ['Machine and operator match', 'Crop type determines the required harvesting system and attachments. Confirm capacity, operator, transport, and hire conditions for each job.', 'photo-1499529112087-3cb3b73cec95'],
            ['From field to destination', 'Consider trailers, unloading, storage or delivery destination, and timing when planning the harvest sequence.', 'photo-1500937386664-56d1dfef3854']
        ]
    };
    const copy = {
        fleet: ['Machinery that supports field work', 'Explore common equipment-hire considerations across crop establishment, harvest, and feed operations. The fleet and availability must be confirmed for your enquiry.'],
        tractors: ['Tractors: power, implements, and the job', 'The right hire request starts with a clear description of the task and the equipment interface it requires. These examples are prompts for planning, not a claim about a specific Five Star Farms tractor.'],
        'silage-equipment': ['Silage work: crop, capacity, and timing', 'Silage operations link crop readiness with cutting, chopping, transport, and storage. The exact equipment sequence depends on the site and what is available.'],
        'harvesting-equipment': ['Harvesting: readiness through crop movement', 'Harvest work needs coordination between crop maturity, machine setup, field access, and where the crop goes next. Confirm the available equipment and terms directly.']
    };
    const [title, introduction] = copy[kind] || copy.fleet;
    return imageStory(title, introduction, stories[kind] || stories.fleet, 'Illustrative stock photography; images do not represent confirmed Five Star Farms equipment inventory or hire availability.');
}

function farmOperationsGallery(page = 'operations') {
    const about = page === 'about';
    const title = about ? 'The work behind a multi-crop farm' : 'Field work through the season';
    const intro = about
        ? 'A commercial farm joins crop planning, seed decisions, machinery, field teams, and post-harvest handling. The details differ across crops and seasons.'
        : 'Crop production brings together field preparation, planting, crop development, harvesting, and the movement of harvested crops.';
    const stages = about ? [
        ['A diverse crop plan', 'Canola, barley, maize, potatoes, and common beans have different requirements and progress through different seasonal cycles.', 'photo-1630095829654-b734f5cb2b25'],
        ['People and machinery', 'Field operations depend on equipment, timing, access, and coordination. Hire details and machinery available are confirmed directly.', 'photo-1500076656116-558758c991c1'],
        ['Handling what is grown', 'Harvest, transport, grading, and storage plans depend on crop quality and the intended destination.', 'photo-1499529112087-3cb3b73cec95']
    ] : [
        ['Growing crops', 'Canola, barley, maize, potatoes, and common beans each have their own crop cycle and field requirements.', 'photo-1500382017468-9049fed747ef'],
        ['Machinery in operation', 'Equipment requirements change with the crop, season, task, and field conditions.', 'photo-1665436700135-3c1e0b902e91'],
        ['Harvest and handling', 'Harvest planning includes timing, field access, transport, and the next step for the crop.', 'photo-1464226184884-fa280b87c399']
    ];
    return imageStory(title, intro, stages, 'Illustrative stock photography; images are examples and do not depict verified Five Star Farms operations.');
}

function seedSupplyGallery(kind = 'seed-supply') {
    const galleries = {
        'seed-supply': {
            title: 'Seed, crop, and lot handling',
            intro: 'Potato and common-bean seed enquiries are best matched with lot-specific details: variety, seed class, quantity, planting window, source, and documents.',
            stages: [['Potato seed', 'Ask about current varieties, seed class, sizing, quantities, and availability.', 'photo-1518977676601-b53f82aba655'], ['Common-bean seed', 'Confirm the offered variety and its intended use; bean seed enquiries refer to common bean (Phaseolus vulgaris).', 'photo-1515543904379-3d757afe72e4'], ['Lot documentation', 'Quality and certification records vary by lot and destination; review the documents for the specific order.', 'photo-1500076656116-558758c991c1']]
        },
        'potato-seed': {
            title: 'Potato seed: selection through planting',
            intro: 'Seed tuber orders are planned around variety, class, sizing, quantity, planting window, handling, and the destination.',
            stages: [['Seed tuber selection', 'Ask which varieties, classes, and sizes are currently offered and request lot-specific records.', 'photo-1574323347407-f5e1ad6d020b'], ['Planting plan', 'Share the planting window, acreage, soil context, and quantity so availability can be discussed.', 'photo-1500382017468-9049fed747ef'], ['Handling and storage', 'Follow the handling, storage, and destination instructions applicable to the seed lot.', 'photo-1464226184884-fa280b87c399']]
        },
        'bean-seed': {
            title: 'Common-bean seed: variety, lot, and planting plan',
            intro: 'Common bean (Phaseolus vulgaris) seed orders need cultivar and lot details, intended use, quantity, and a planting window matched to local conditions.',
            stages: [['Common bean seed', 'The bean seed line described here is common bean, Phaseolus vulgaris. Specific cultivar and seed class must be confirmed.', 'photo-1630095829654-b734f5cb2b25'], ['Plan the planting', 'Share location, acreage, timing, quantity, and intended crop use to help the team assess availability.', 'photo-1500382017468-9049fed747ef'], ['Lot documents', 'Ask for the source, treatment, quality testing, and certification documents that apply to the specific lot.', 'photo-1655929299728-93ee15ed7967']]
        }
    };
    const gallery = galleries[kind] || galleries['seed-supply'];
    return imageStory(gallery.title, gallery.intro, gallery.stages, 'Illustrative stock photography; seed varieties, stock, and documentation must be confirmed for the specific lot.');
}

function homeOperationsGallery() {
    return imageStory('A closer look at farm operations', 'From crop development through harvest, field decisions and machinery needs change over the season.', [
        ['Crops in the field', 'A diverse crop program includes canola, barley, maize, potatoes, and common beans (Phaseolus vulgaris).', 'photo-1630095829654-b734f5cb2b25'],
        ['Farm machinery', 'Tractors and agricultural machinery support field work and crop operations.', 'photo-1625246333195-78d9c38ad449'],
        ['Harvest activity', 'Harvest planning coordinates crop readiness, machinery, transport, and timing.', 'photo-1499529112087-3cb3b73cec95']
    ], 'Illustrative stock photography; images do not depict confirmed Five Star Farms operations or assets.');
}

function processStrip() {
    const steps = [['01', 'Prepare', 'Plan field work and prepare the land for the crop and season.'], ['02', 'Plant', 'Coordinate planting and the machinery required for the operation.'], ['03', 'Grow', 'Manage crop operations through the growing period.'], ['04', 'Harvest', 'Plan harvesting and post-harvest work around crop timing.']];
    return `<section class="bg-[#f5f6f0] px-5 py-20 sm:px-8"><div class="mx-auto max-w-7xl"><div class="max-w-2xl"><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">From planting to harvest</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#164b3f] sm:text-4xl">Coordinated work through every field stage.</h2></div><div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">${steps.map(([number, title, text]) => `<div class="border-t-2 border-[#164b3f] pt-4"><span class="text-xs font-bold text-cyan-700">${number}</span><h3 class="mt-5 font-semibold text-[#164b3f]">${title}</h3><p class="mt-2 text-sm leading-6 text-slate-600">${text}</p></div>`).join('')}</div></div></section>`;
}

function equipmentCards() {
    const options = [
        ['Tractors', 'Discuss tractor availability for field work, acreage, attachments, and location.', links.tractors, 'photo-1665436700135-3c1e0b902e91'],
        ['Silage & feed equipment', 'Enquire about machinery for silage, forage, and feed-making operations.', links.silage, 'photo-1500937386664-56d1dfef3854'],
        ['Harvesting equipment', 'Plan equipment hire around crop, field conditions, and seasonal dates.', links.harvesting, 'photo-1507662228758-08d030c4820b']
    ];
    return `<div class="mt-10 grid gap-5 md:grid-cols-3">${options.map(([title, text, href, image]) => `<button type="button" @click="$dispatch('equipment-open', {title:'${title}', text:'${text}'})" class="group overflow-hidden border border-slate-200 bg-white text-left transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"><div class="h-48 bg-cover bg-center" style="background-image:url('${photo(image, 800)}')"></div><div class="p-6"><h3 class="text-xl font-semibold text-[#164b3f]">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${text}</p><span class="mt-5 inline-block text-sm font-bold text-cyan-700">View hire details <span aria-hidden="true">&rarr;</span></span></div><span class="sr-only">${href}</span></button>`).join('')}</div>`;
}

function equipmentModal() {
    return `<div x-data="{ open:false, title:'', text:'' }" @equipment-open.window="title=$event.detail.title;text=$event.detail.text;open=true" @keydown.escape.window="open=false"><div x-show="open" x-cloak x-transition.opacity class="fixed inset-0 z-[60] flex items-center justify-center bg-[#164b3f]/70 p-5" @click.self="open=false"><section x-transition class="w-full max-w-xl border border-slate-200 bg-white p-7 shadow-2xl sm:p-9" role="dialog" aria-modal="true" :aria-label="title + ' hire details'"><div class="flex items-start justify-between gap-5"><div><p class="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Equipment hire</p><h2 class="mt-3 text-2xl font-semibold text-[#164b3f]" x-text="title"></h2></div><button type="button" @click="open=false" class="p-1 text-2xl text-slate-500 hover:text-slate-900" aria-label="Close equipment details">&times;</button></div><p class="mt-5 leading-7 text-slate-600" x-text="text"></p><div class="mt-6 border-l-2 border-cyan-600 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">Machine model, engine specifications, capacity, operator availability, and daily rates have not been supplied for this preview. Request current details for the equipment and job.</div><a href="contact.html?interest=Machinery%20hire" @click="open=false" class="mt-7 inline-flex bg-cyan-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-800">Ask about availability <span class="ml-2" aria-hidden="true">&rarr;</span></a></section></div></div>`;
}

function selectorAndForm() {
    return `<section class="bg-[#eff5e9] px-5 py-20 sm:px-8"><div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">A practical starting point</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#164b3f] sm:text-4xl">Find the right agricultural service.</h2><p class="mt-4 leading-7 text-slate-600">Choose what you need and share a little context. The farm team can confirm current availability, specifications, and next steps.</p><div class="mt-7 flex flex-wrap gap-2"><template x-for="option in enquiryTypes" :key="option"><button type="button" @click="selectedInterest=option" class="border px-3 py-2 text-sm font-semibold transition" :class="selectedInterest===option?'border-cyan-700 bg-cyan-700 text-white':'border-slate-300 bg-white text-slate-700 hover:border-cyan-700'" x-text="option"></button></template></div></div><div class="border border-slate-300 bg-white p-7 shadow-sm sm:p-10"><div x-data="{ sent:false }"><p class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Farm enquiry</p><h3 class="mt-2 text-2xl font-semibold text-[#164b3f]">Schedule an operational consultation.</h3><p class="mt-3 text-sm leading-6 text-slate-600">Tell us about your acreage, crop cycles, or machinery needs, and the field operations team can prepare a tailored response.</p><form class="mt-7 grid gap-5 sm:grid-cols-2" @submit.prevent="sent=true"><label class="text-sm font-semibold text-slate-700">Full name<input name="name" required autocomplete="name" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label><label class="text-sm font-semibold text-slate-700">Farm / business name<input name="business" autocomplete="organization" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label><label class="text-sm font-semibold text-slate-700">Email<input name="email" type="email" required autocomplete="email" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label><label class="text-sm font-semibold text-slate-700">Phone<input name="phone" type="tel" autocomplete="tel" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label><label class="text-sm font-semibold text-slate-700">Location / county<input name="location" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label><label class="text-sm font-semibold text-slate-700">Primary interest<select name="interest" x-model="selectedInterest" required class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"><option value="">Choose one</option><option>Bulk seed order</option><option>Machinery hire</option><option>Silage processing</option><option>Commercial purchasing</option><option>Crop information</option><option>General enquiry</option></select></label><label class="text-sm font-semibold text-slate-700 sm:col-span-2">Total acreage / scope<input name="scope" placeholder="Acreage, crop, quantity, equipment, or job details" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label><div class="sm:col-span-2"><button type="submit" class="bg-cyan-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-800">Prepare enquiry <span aria-hidden="true">&rarr;</span></button><p class="mt-3 text-xs leading-5 text-slate-500">Front-end preview only: this form does not send or store information until connected to an email or enquiry service.</p><p x-show="sent" x-cloak class="mt-4 border-l-4 border-cyan-600 bg-[#eff5e9] px-4 py-3 text-sm font-semibold text-[#164b3f]" role="status">Thank you. The form is ready to connect to the farm's enquiry channel.</p></div></form></div></div></div></section>`;
}

function homeContent() {
    const heroData = { eyebrow: 'Large-scale agriculture', title: 'Growing with purpose. Built for scale.', summary: 'Commercial crop production across canola, barley, maize, potatoes, and common bean (Phaseolus vulgaris), alongside quality potato and common-bean seed supply and agricultural equipment hire.', image: 'photo-1500382017468-9049fed747ef', cta: 'Explore our operations', href: links.operations, back: false };
    const operations = [
        ['Commercial production & scale', 'Canola, barley, maize, potatoes, and common beans (Phaseolus vulgaris) grown through coordinated commercial operations.', links.crops],
        ['Quality seed supply', 'Focused supply of potato and common-bean (Phaseolus vulgaris) seed. Request current variety and lot documentation.', links.seeds],
        ['Modern fleet & operations', 'Heavy tractors, harvesting machinery, and equipment for silage and feed-making work.', links.equipment],
        ['Farm operations', 'From land preparation and planting through crop management and harvest.', links.operations]
    ];
    const stats = [['05', 'Commercial crops'], ['02', 'Primary seed lines'], ['Field to harvest', 'Coordinated operations'], ['Hire', 'Heavy farm equipment']];
    const seedItems = [['Potato seed', 'Enquire about available varieties, lot details, and documentation.', links.potatoSeed], ['Common-bean seed', 'Ask about seed for common bean (Phaseolus vulgaris), including current variety, quantity, and lot details.', links.beanSeed]];
    const faqItems = [['What crops does the farm grow?', 'Canola, barley, maize, potatoes, and common bean (Phaseolus vulgaris) are included in the commercial farming program.'], ['What seed is available?', 'Potato seed and common-bean (Phaseolus vulgaris) seed are the primary lines. Varieties, quantities, lot details, and documentation should be confirmed with the farm.'], ['What equipment can I hire?', 'The farm receives enquiries for tractors, harvesting machinery, and silage or feed-making equipment. Availability and specifications are confirmed per job.'], ['Can you confirm machinery rates and technical specifications?', 'Yes, the team can confirm current machine models, capabilities, hire conditions, and rates for a specific job. This preview does not include unverified numbers.'], ['Where is the farm located?', 'Location and service coverage have not been provided for this website preview. Use the enquiry form to share your location and ask about service availability.']];
    return `${hero(heroData, true)}
    <section class="border-b border-slate-200 bg-white px-5 py-8 sm:px-8"><div class="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">${stats.map(([value, label]) => `<div class="border-l-2 border-cyan-600 pl-4"><p class="text-2xl font-semibold text-[#164b3f]">${value}</p><p class="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">${label}</p></div>`).join('')}</div></section>
    <section id="operations" class="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div class="max-w-2xl"><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">What we do</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#164b3f] sm:text-4xl">A connected agricultural enterprise.</h2><p class="mt-4 leading-7 text-slate-600">Commercial production, seed supply, and equipment hire, coordinated around the practical demands of large-scale farming.</p></div><div class="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">${cards(operations)}</div></section>
    <section id="crops" class="bg-white px-5 py-20 sm:px-8"><div class="mx-auto max-w-7xl"><div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">What we grow</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#164b3f] sm:text-4xl">Diverse crops. Commercial scale.</h2><p class="mt-4 max-w-2xl leading-7 text-slate-600">Explore the farm's crop production and get in touch about commercial availability.</p></div><a href="${links.crops}" class="shrink-0 text-sm font-bold text-cyan-700 hover:text-cyan-900">All crops <span aria-hidden="true">&rarr;</span></a></div>${cropGrid()}</div></section>
    <section class="bg-[#eff5e9] px-5 py-20 sm:px-8"><div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Quality seed supply</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#164b3f] sm:text-4xl">Seed information you can verify.</h2><p class="mt-4 leading-7 text-slate-600">Potato seed and common-bean (Phaseolus vulgaris) seed are the primary lines. Ask for the current variety, source, lot information, and any documents that apply.</p><a href="${links.seeds}" class="mt-7 inline-flex bg-[#164b3f] px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-800">Explore seed supply <span class="ml-2">&rarr;</span></a></div><div class="grid gap-4 sm:grid-cols-2">${cards(seedItems)}</div></div></section>
    <section id="equipment" class="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Modern fleet &amp; operations</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#164b3f] sm:text-4xl">The machinery to keep field work moving.</h2><p class="mt-4 leading-7 text-slate-600">Hire enquiries are welcome for tractors, harvesting equipment, and machinery for silage and feed-making. Equipment, operators, scheduling, and rates are confirmed for each job.</p><a href="${links.equipment}" class="mt-7 inline-flex bg-cyan-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-800">View equipment hire <span class="ml-2">&rarr;</span></a></div><div class="min-h-80 bg-cover bg-center" role="img" aria-label="Agricultural field operation" style="background-image:url('${photo('photo-1665436700135-3c1e0b902e91', 1200)}')"></div></div></section>
    ${homeOperationsGallery()}
    ${processStrip()}
    <section class="bg-[#164b3f] px-5 py-16 text-white sm:px-8"><div class="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div class="max-w-2xl"><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Seed quality &amp; documentation</p><h2 class="mt-3 text-3xl font-semibold">Ask for the records that apply to your order.</h2><p class="mt-4 leading-7 text-slate-300">Certification, source, and quality documentation depend on the seed lot and destination. We do not display certification marks or performance statistics until the relevant details are confirmed.</p></div><a href="${links.contact}?interest=Bulk%20seed%20order" class="shrink-0 border border-cyan-300 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#164b3f]">Request seed information <span aria-hidden="true">&rarr;</span></a></div></section>
    ${selectorAndForm()}
    <section class="mx-auto max-w-4xl px-5 py-20 sm:px-8" x-data="farmFaqSlider()"><div class="text-center"><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Useful context</p><h2 class="mt-3 text-3xl font-semibold text-[#164b3f]">Questions worth asking.</h2></div><div class="mt-10 border-y border-slate-200" aria-live="polite"><div class="flex items-start justify-between gap-6 py-5"><h3 class="text-lg font-semibold text-[#164b3f]" x-text="questions[current][0]"></h3><span class="shrink-0 text-sm font-bold text-cyan-700" x-text="String(current+1).padStart(2,'0')+' / '+String(questions.length).padStart(2,'0')"></span></div><p class="pb-6 pr-10 text-sm leading-6 text-slate-600" x-text="questions[current][1]"></p><div class="flex justify-end gap-2 border-t border-slate-200 py-4"><button type="button" class="border border-slate-300 px-3 py-2 text-sm font-bold text-[#164b3f] hover:border-cyan-700" @click="previous" aria-label="Previous question">&larr;</button><button type="button" class="border border-slate-300 px-3 py-2 text-sm font-bold text-[#164b3f] hover:border-cyan-700" @click="next" aria-label="Next question">&rarr;</button></div></div></section>${equipmentModal()}`;
}

function renderPage(kind, slug) {
    if (kind === 'home') return homeContent();
    if (kind === 'crop') {
        const crop = crops.find(item => item.key === slug);
        if (!crop) return '<section class="mx-auto max-w-7xl px-5 py-20"><h1 class="text-4xl font-semibold text-[#164b3f]">Page not found</h1></section>';
        return `${hero({ eyebrow:crop.key === 'beans' ? 'Pulse crop | Phaseolus vulgaris' : crop.type, title:crop.productionTitle || `${crop.name} production`, summary:crop.summary, image:crop.image, cta:'Discuss this crop', back:'All crops', backHref:links.crops }, true)}
            ${sectionCards({ sections:crop.pageSections })}
            ${cropStoryGallery(crop)}
            <section class="bg-[#eff5e9] px-5 py-16 sm:px-8"><div class="mx-auto max-w-7xl"><h2 class="text-3xl font-semibold text-[#164b3f]">Related crops</h2><div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${crops.filter(item => item.key !== crop.key).map(item => `<a class="border-t-2 border-[#164b3f] bg-white p-5 transition hover:-translate-y-1" href="${item.key}.html"><span class="text-sm font-bold text-cyan-700">${item.type}</span><h3 class="mt-2 text-lg font-semibold text-[#164b3f]">${item.name}</h3></a>`).join('')}</div></div></section>`;
    }
    const data = pages[slug];
    if (!data) return '<section class="mx-auto max-w-7xl px-5 py-20"><h1 class="text-4xl font-semibold text-[#164b3f]">Page not found</h1></section>';
    if (data.type === 'crop-index') return `${hero(data, false)}<section class="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div class="max-w-2xl"><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Crop production</p><h2 class="mt-3 text-3xl font-semibold text-[#164b3f]">Explore the crop portfolio.</h2><p class="mt-4 leading-7 text-slate-600">Filter crops and add your soil and rainfall context to an enquiry. Selections are not crop or planting recommendations.</p></div>${cropPlanningFilter()}</section>`;
    if (data.type === 'equipment-index') return `${hero(data, false)}<section class="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div class="max-w-3xl"><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Equipment categories</p><h2 class="mt-3 text-3xl font-semibold text-[#164b3f]">Hire by the work you need to get done.</h2><p class="mt-4 leading-7 text-slate-600">Specifications, operators, transport, rates, and dates are checked for each enquiry.</p></div>${equipmentCards()}</section>${equipmentStoryGallery('fleet')}${equipmentModal()}${sectionCards({ sections:[['Availability', 'All hire is subject to schedule, location, and machine availability.'], ['Specifications', 'Confirm model, capacity, attachments, and operator requirements for the equipment you need.'], ['Rates and logistics', 'Hire duration, transport, fuel, operating terms, and rates are agreed before booking.'] ]})}`;
    if (data.type === 'seed-index') return `${hero(data, false)}${sectionCards(data)}${seedSupplyGallery(slug)}<section class="bg-[#eff5e9] px-5 py-16 sm:px-8"><div class="mx-auto max-w-7xl"><h2 class="text-3xl font-semibold text-[#164b3f]">Seed enquiries</h2><p class="mt-4 max-w-3xl leading-7 text-slate-600">Ask for lot-specific variety, source, quantity, and quality or certification documentation. Do not rely on a general claim when the records for the specific lot are available.</p><div class="mt-7 flex flex-wrap gap-3"><a href="${links.potatoSeed}" class="bg-cyan-700 px-5 py-3 text-sm font-bold text-white">Potato seed <span aria-hidden="true">&rarr;</span></a><a href="${links.beanSeed}" class="bg-[#164b3f] px-5 py-3 text-sm font-bold text-white">Common-bean seed <span aria-hidden="true">&rarr;</span></a></div></div></section>`;
    const sections = data.sections || [];
    const cardMarkup = `<section class="mx-auto max-w-5xl px-5 py-20 sm:px-8"><div class="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">${sections.map(([title,text], index) => `<article class="bg-white p-7"><span class="text-xs font-bold tracking-[0.18em] text-cyan-700">${String(index+1).padStart(2,'0')}</span><h2 class="mt-10 text-xl font-semibold text-[#164b3f]">${title}</h2><p class="mt-3 text-sm leading-6 text-slate-600">${text}</p></article>`).join('')}</div></section>`;
    const gallery = data.type === 'editorial'
        ? farmOperationsGallery(slug)
        : ['tractors', 'silage-equipment', 'harvesting-equipment'].includes(slug)
            ? equipmentStoryGallery(slug)
            : ['potato-seed', 'bean-seed'].includes(slug)
                ? seedSupplyGallery(slug)
                : '';
    return `${hero(data, data.type !== 'detail')}${cardMarkup}${data.type === 'editorial' ? processStrip() : ''}${gallery}<section class="bg-[#eff5e9] px-5 py-16 sm:px-8"><div class="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div class="max-w-2xl"><p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Next step</p><h2 class="mt-3 text-3xl font-semibold text-[#164b3f]">Bring your requirements to the farm team.</h2><p class="mt-4 leading-7 text-slate-600">Share location, timing, quantity, acreage, crop, or equipment needs so the team can respond with relevant current details.</p></div><a href="${links.contact}" class="shrink-0 bg-[#164b3f] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-cyan-800">Make an enquiry <span aria-hidden="true">&rarr;</span></a></div></section>`;
}

function contactPage() {
    return `<div x-data="{ sent:false, interest:new URLSearchParams(location.search).get('interest') || '', scope:new URLSearchParams(location.search).get('scope') || '' }">
        <form class="mt-8 grid gap-5 sm:grid-cols-2" @submit.prevent="sent=true">
            <label class="text-sm font-semibold text-slate-700">Full name<input name="name" required autocomplete="name" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label>
            <label class="text-sm font-semibold text-slate-700">Farm / business name<input name="business" autocomplete="organization" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label>
            <label class="text-sm font-semibold text-slate-700">Email<input name="email" type="email" required autocomplete="email" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label>
            <label class="text-sm font-semibold text-slate-700">Phone<input name="phone" type="tel" autocomplete="tel" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label>
            <label class="text-sm font-semibold text-slate-700">Location / county<input name="location" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></label>
            <label class="text-sm font-semibold text-slate-700">Primary interest<select name="interest" x-model="interest" required class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"><option value="">Choose one</option><option>Bulk seed order</option><option>Machinery hire</option><option>Silage processing</option><option>Commercial purchasing</option><option>Crop information</option><option>General enquiry</option></select></label>
            <label class="text-sm font-semibold text-slate-700 sm:col-span-2">Total acreage / scope<textarea name="scope" x-model="scope" rows="3" placeholder="Acreage, crop, quantity, equipment, or job details" class="mt-2 block w-full border border-slate-300 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-cyan-600"></textarea></label>
            <div class="sm:col-span-2">
                <button type="submit" class="bg-cyan-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-800">Prepare enquiry <span aria-hidden="true">&rarr;</span></button>
                <p class="mt-3 text-xs leading-5 text-slate-500">This static preview does not send or store form details. Connect an enquiry service before publishing for live leads.</p>
                <p x-show="sent" x-cloak class="mt-4 border-l-4 border-cyan-600 bg-[#eff5e9] px-4 py-3 text-sm font-semibold text-[#164b3f]" role="status">Thank you. The enquiry preview is ready; connect the farm's contact channel to receive submissions.</p>
            </div>
        </form>
    </div>`;
}

function render() {
    const mount = document.getElementById('site-page');
    if (!mount) return;
    const kind = mount.dataset.kind || 'home';
    const slug = mount.dataset.slug || '';
    let content;

    if (kind === 'contact') {
        content = `${hero({
            eyebrow: 'Farm enquiries',
            title: 'Schedule an operational consultation.',
            summary: 'Tell us about your acreage, crop cycles, or machinery needs, and the field operations team can prepare a tailored response.',
            image: 'photo-1499529112087-3cb3b73cec95',
            cta: 'Complete an enquiry'
        }, false)}
        <section class="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
                <p class="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Start with the details</p>
                <h2 class="mt-3 text-3xl font-semibold text-[#164b3f]">What do you need help with?</h2>
                <p class="mt-4 leading-7 text-slate-600">Current availability, seed lot documentation, machine specifications, and rates can be confirmed by the team for your specific enquiry.</p>
                <div class="mt-8 space-y-3 text-sm text-slate-700">
                    <p>Bulk seed order</p>
                    <p>Machinery hire</p>
                    <p>Silage processing</p>
                    <p>Commercial purchasing</p>
                </div>
            </div>
            <div>${contactPage()}</div>
        </section>`;
        document.title = 'Farm enquiries | Five Star Farms';
    } else {
        content = renderPage(kind, slug);
        const crop = crops.find(item => item.key === slug);
        const title = kind === 'home' ? 'Five Star Farms | Crop Production, Seed & Equipment' : (pages[slug]?.eyebrow || crop?.productionTitle || crop?.name || 'Five Star Farms');
        document.title = kind === 'home' ? title : `${title} | Five Star Farms`;
    }

    mount.innerHTML = `${navigation()}<main>${content}</main>${footer()}${assistant()}`;
    const headerMark = mount.querySelector('a[aria-label="Five Star Farms home"] span.flex');
    if (headerMark) {
        headerMark.outerHTML = '<img src="assets/five-star-farms-logo.jpg" alt="Five Star Farms logo" class="h-12 w-[76px] shrink-0 object-contain">';
    }
    const footerMark = mount.querySelector('footer span.flex');
    if (footerMark) {
        footerMark.outerHTML = '<span class="flex h-14 w-20 shrink-0 items-center justify-center bg-white p-1"><img src="assets/five-star-farms-logo.jpg" alt="Five Star Farms logo" class="max-h-full max-w-full object-contain"></span>';
    }
    if (window.Alpine) window.Alpine.initTree(mount);
}

document.addEventListener('DOMContentLoaded', render);
