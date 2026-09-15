import { Equipment } from '../types';

export const EQUIPMENT_DATA: Equipment[] = [
  {
    id: 'eq-sony-fx6',
    name: 'SONY FX6 Cinema Line',
    category: 'CAMERA',
    subCategory: 'Cinema Camera',
    brand: 'Sony',
    description: 'Professional full-frame cinema camera suitable for commercial, documentary, and narrative filmmaking.',
    longDescription: 'The Sony FX6 Cinema Line Camera brings revolutionary compactness and performance to full-frame image capture. With 4K 120p full-frame recording, S-Cinetone color science, and dynamic range of 15+ stops, the FX6 bridges the gap between high-end cinema and fast-paced agile production.',
    pricePerDay: 750000,
    deposit: 1500000,
    image: 'https://images.unsplash.com/photo-1589872307379-0ffdf9829123?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Sensor': '10.2MP Full-Frame Back-Illuminated Exmor R CMOS',
      'Mount': 'Sony E-Mount',
      'Resolution': '4K DCI up to 60fps, 4K UHD up to 120fps, FHD 240fps',
      'Dynamic Range': '15+ Stops (S-Log3)',
      'Base ISO': 'Dual Base ISO 800 / 12,800',
      'Internal ND': 'Electronic Variable ND Filter (1/4ND to 1/128ND)',
      'Recording Media': 'Dual CFexpress Type A / SDXC Slots'
    },
    includedAccessories: [
      'Top Handle with Dual XLR Audio Inputs',
      '3.5" LCD Viewfinder with Loupe & Mount',
      '2x Sony BP-U60 Rechargeable Batteries & Dual Charger',
      '1x 160GB CFexpress Type A Card & Card Reader',
      'AC Power Adapter & Heavy-duty Pelican Flight Case'
    ],
    available: true,
    featured: true
  },
  {
    id: 'eq-red-komodo',
    name: 'RED Digital Cinema Komodo 6K',
    category: 'CAMERA',
    subCategory: 'Cinema Camera',
    brand: 'RED Digital Cinema',
    description: 'Ultra-compact cinema camera featuring a 6K Super35 global shutter sensor for zero motion distortion.',
    longDescription: 'RED Komodo 6K brings RED legendary color science and raw fidelity into an extraordinarily light 2.1-pound cube form factor. The groundbreaking global shutter eliminates jello effect during whip pans, aerial drones, and fast action camera movement.',
    pricePerDay: 1200000,
    deposit: 2500000,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Sensor': '19.9 MP Super35 Global Shutter CMOS',
      'Mount': 'Canon RF Mount (Adapters available for EF & PL)',
      'Resolution': '6K 40fps, 5K 48fps, 4K 60fps, 2K 120fps',
      'Dynamic Range': '16+ Stops',
      'Raw Codec': 'REDCODE RAW (HQ, MQ, LQ) & Apple ProRes 422 HQ',
      'Form Factor': '4x4x4-inch Magnesium Cube (2.1 lbs)'
    },
    includedAccessories: [
      'Wooden Camera Complete Rigging Cage & Top Handle',
      'Canon RF to EF Mount Adapter with Drop-In Polarizer',
      'SmallHD Focus Pro 5" OLED SDI Monitor',
      '4x Canon BP-975 Batteries & Quad Charger',
      '2x 512GB CFast 2.0 Cards & High-Speed Reader',
      'D-Tap Power Cable & Custom Hard Case'
    ],
    available: true,
    featured: true
  },
  {
    id: 'eq-sony-a7siii',
    name: 'SONY Alpha 7S III',
    category: 'CAMERA',
    subCategory: 'Mirrorless Camera',
    brand: 'Sony',
    description: 'The benchmark low-light full-frame hybrid mirrorless camera with 4K 120p 10-bit 4:2:2 internal recording.',
    longDescription: 'Sony Alpha 7S III redefines what mirrorless filmmaking can achieve. Equipped with dual base ISO, class-leading phase detection real-time eye tracking autofocus, and unlimited recording without overheating.',
    pricePerDay: 450000,
    deposit: 1000000,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Sensor': '12.1MP Full-Frame Exmor R BSI CMOS',
      'Video Format': '4K UHD up to 120fps, 10-bit 4:2:2 All-Intra',
      'Stabilization': '5-Axis In-Body Image Stabilization (IBIS)',
      'ISO Sensitivity': '80 to 409,600 (Dual Native 640 / 12,800 S-Log3)',
      'Screen': '3.0" Vari-Angle Articulating Touchscreen LCD'
    },
    includedAccessories: [
      'SmallRig Full Cage with HDMI Cable Clamp',
      '3x Sony NP-FZ100 Batteries & Dual USB-C Charger',
      '1x 128GB V90 UHS-II SD Card',
      'Full-size HDMI cable & padded camera bag'
    ],
    available: true
  },
  {
    id: 'eq-bmpcc-6k-pro',
    name: 'Blackmagic Pocket Cinema Camera 6K Pro',
    category: 'CAMERA',
    subCategory: 'Cinema Camera',
    brand: 'Blackmagic Design',
    description: 'Super35 handheld HDR cinema camera with motorized internal ND filters and dual native ISO.',
    longDescription: 'BMPCC 6K Pro offers cinematic Hollywood color grading right out of the box with Blackmagic RAW (BRAW) 12-bit capture, built-in optical 2, 4, and 6-stop IR ND filters, and dual mini XLR inputs with phantom power.',
    pricePerDay: 550000,
    deposit: 1200000,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Sensor': 'Super35 HDR Sensor (23.10mm x 12.99mm)',
      'Lens Mount': 'Active Canon EF Mount',
      'Resolution': '6144 x 3456 (6K) up to 50fps, 4K DCI up to 60fps',
      'Color Science': 'Generation 5 Color Science',
      'Built-in ND': 'Clear, 2, 4, and 6 Stops ND Filters'
    },
    includedAccessories: [
      'Tilta Full Camera Cage with Top Handle & SSD Holder',
      'Samsung T7 Shield 1TB High-Speed USB-C SSD',
      '4x Sony NP-F550 Compatible Batteries & Charger',
      'AC Power Supply with International Adapters'
    ],
    available: true
  },
  {
    id: 'eq-sigma-24-70',
    name: 'Sigma 24-70mm f/2.8 DG DN Art (E-Mount)',
    category: 'LENS',
    subCategory: 'Zoom Lens',
    brand: 'Sigma',
    description: 'Flagship standard zoom lens delivering stunning edge-to-edge sharpness and constant f/2.8 aperture.',
    longDescription: 'The workhorse lens of choice for directors of photography and commercial filmmakers. Delivers creamy bokeh, minimal chromatic aberration, and reliable autofocus tracking across all focal lengths.',
    pricePerDay: 300000,
    deposit: 600000,
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Focal Length': '24-70mm',
      'Aperture': 'f/2.8 constant to f/22',
      'Mount': 'Sony E-Mount (Full Frame)',
      'Filter Thread': '82mm',
      'Blades': '11-Blade Rounded Diaphragm'
    },
    includedAccessories: [
      'Front & Rear Lens Caps',
      'Flower-shaped petal lens hood',
      'B+W 82mm MRC Nano UV Filter',
      'Padded Protective Lens Pouch'
    ],
    available: true,
    featured: true
  },
  {
    id: 'eq-sony-50mm-gm',
    name: 'Sony FE 50mm f/1.2 GM Master',
    category: 'LENS',
    subCategory: 'Prime Lens',
    brand: 'Sony',
    description: 'Premier G Master prime lens delivering sublime resolution, extraordinary shallow depth of field, and lightning AF.',
    longDescription: 'Engineered for breathtaking cinematic portraits, emotional narrative close-ups, and low-light beauty shots. Four XD Linear motors ensure silent, accurate focus pulls.',
    pricePerDay: 350000,
    deposit: 800000,
    image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Focal Length': '50mm',
      'Maximum Aperture': 'f/1.2',
      'Minimum Aperture': 'f/16',
      'Filter Diameter': '72mm',
      'Focus Drive': 'Four Extreme Dynamic (XD) Linear Motors'
    },
    includedAccessories: [
      'Front and Rear Caps',
      'ALC-SH163 Round Lens Hood',
      'Protective Soft Case with Shoulder Strap'
    ],
    available: true
  },
  {
    id: 'eq-sirui-anamorphic',
    name: 'Sirui 35mm f/1.8 1.33x Anamorphic Lens',
    category: 'LENS',
    subCategory: 'Anamorphic Lens',
    brand: 'Sirui',
    description: 'Produces true widescreen 2.4:1 cinematic aspect ratio with iconic sci-fi blue horizontal flares and oval bokeh.',
    longDescription: 'Turn any indie production into an epic theatrical experience. Precision optical coating delivers organic flares, stretched oval bokeh, and cinematic character without breaking production budgets.',
    pricePerDay: 400000,
    deposit: 900000,
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Focal Length': '35mm (Equivalent to 26.3mm horizontal FOV)',
      'Aperture': 'f/1.8 to f/16',
      'Squeeze Ratio': '1.33x Anamorphic',
      'Mount': 'E-Mount / MFT with EF options',
      'Iris Blades': '10 Blades for smooth oval bokeh'
    },
    includedAccessories: [
      'Front & Rear Lens Caps',
      'Focus Follow Ring Gears',
      'Hard Protective Storage Box'
    ],
    available: true
  },
  {
    id: 'eq-aputure-600d',
    name: 'Aputure Light Storm LS 600d Pro',
    category: 'LIGHTING',
    subCategory: 'LED Light',
    brand: 'Aputure',
    description: 'Industry-standard 600W daylight-balanced COB LED light equivalent to 1200W HMI or Joker 800.',
    longDescription: 'Weather-resistant IP54 certified point-source LED light capable of outputting up to 98,500 lux at 1 meter with the Hyper Reflector. Features wireless Sidus Link app control, Art-net, and DMX512 compatibility.',
    pricePerDay: 650000,
    deposit: 1500000,
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Color Temperature': '5600K Daylight Balanced',
      'Power Output': '600W Draw (Equiv. ~1200W Tungsten / HMI)',
      'CRI / TLCI': '96+ / 98+',
      'Weather Resistance': 'IP54 Dust and Rain Resistant',
      'Mount': 'Standard Bowens Mount'
    },
    includedAccessories: [
      'LS 600d Pro Lamp Head & Lightning Clamp',
      'Control Box with Dual V-Mount Battery Plates',
      'Hyper Reflector Dish (55°)',
      'Head Cable (3m) & Neutrik PowerCON Cable (6m)',
      'Heavy-duty Rolling Hard Case'
    ],
    available: true,
    featured: true
  },
  {
    id: 'eq-nanlite-forza',
    name: 'Nanlite Forza 300B II Bi-Color LED',
    category: 'LIGHTING',
    subCategory: 'LED Light',
    brand: 'Nanlite',
    description: 'Compact and versatile 300W Bi-color LED light with variable CCT from 2700K to 6500K.',
    longDescription: 'Provides maximum lighting flexibility for intimate dialogue scenes, interviews, and interior film sets. Features green-to-magenta tint shifting for exact matching with ambient location lights.',
    pricePerDay: 400000,
    deposit: 800000,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Color Temp Range': '2700K - 6500K (Bi-color with +/- 80 G/M tint)',
      'Power Draw': '350W Maximum',
      'CRI / TLCI': '96 / 97',
      'Cooling': 'Whisper-quiet fan (silent mode available)',
      'Mount': 'Bowens S-Mount'
    },
    includedAccessories: [
      'Reflector 55°',
      'Control Box with V-Mount Bracket',
      'Quick Release Stand Clamp',
      'Padded Carry Case'
    ],
    available: true
  },
  {
    id: 'eq-light-dome-150',
    name: 'Aputure Light Dome 150 (5-Foot Softbox)',
    category: 'LIGHTING',
    subCategory: 'Softbox',
    brand: 'Aputure',
    description: 'Enormous 150cm 32-sided parabolic softbox creating ultra-soft, wrap-around cinematic key light.',
    longDescription: 'The ultimate key-light modifier for high-end commercials and feature interviews. The deep 32-sided parabolic design produces perfectly round organic catchlights in actor eyes.',
    pricePerDay: 150000,
    deposit: 300000,
    image: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Diameter': '150cm (59 inches) unfolded',
      'Depth': '80cm (31.5 inches)',
      'Shape': '32-Sided Hexadecagon',
      'Mount': 'Universal Bowens Speed Ring'
    },
    includedAccessories: [
      '1.5-Stop Inner Diffusion Baffle',
      '2.5-Stop Front Outer Diffuser',
      '45° Fabric Honeycomb Grid Eggcrate',
      'Heavy-duty Zippered Carrying Bag'
    ],
    available: true
  },
  {
    id: 'eq-sennheiser-mkh416',
    name: 'Sennheiser MKH 416-P48 Shotgun Mic',
    category: 'AUDIO',
    subCategory: 'Shotgun Microphone',
    brand: 'Sennheiser',
    description: 'Legendary interference tube shotgun microphone renowned for crisp dialogue clarity and high feedback rejection.',
    longDescription: 'The undisputed film industry standard for location recording, narrative sound recording, and voiceovers. Its supercardioid/lobar pick-up pattern cuts cleanly through background ambient noise.',
    pricePerDay: 300000,
    deposit: 600000,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Transducer Principle': 'RF Condenser Microphone',
      'Pick-up Pattern': 'Supercardioid / Lobar',
      'Frequency Response': '40 Hz - 20,000 Hz',
      'Sensitivity': '25 mV/Pa +- 1 dB',
      'Phantom Power': '48V +- 12V Phantom Required'
    },
    includedAccessories: [
      'Rycote Softie Windshield & Deadcat Fur',
      'Rycote InVision Pistol Grip Shockmount',
      'MZA 14 Quick Release Mount',
      '10-meter Mogami XLR Audio Cable'
    ],
    available: true,
    featured: true
  },
  {
    id: 'eq-dji-mic-2',
    name: 'DJI Mic 2 (2 TX + 1 RX + Charging Case)',
    category: 'AUDIO',
    subCategory: 'Wireless Microphone',
    brand: 'DJI',
    description: 'Compact wireless dual microphone kit with 32-bit float internal backup recording and intelligent noise cancellation.',
    longDescription: 'Never clip an actor audio track again with 32-bit float internal recording. Dual channel transmitter kit with up to 250m wireless transmission range, perfect for dynamic movement and multi-talent setups.',
    pricePerDay: 250000,
    deposit: 500000,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Recording Format': '32-bit Float Internal Recording (8GB per TX)',
      'Range': 'Up to 250 meters Line of Sight (LOS)',
      'Battery Life': '6 hours per unit (18 hours with Charging Case)',
      'Outputs': '3.5mm TRS Analog, USB-C, Lightning Adapter'
    },
    includedAccessories: [
      '2x Wireless Transmitters with clip & magnetic backings',
      '1x Camera Shoe Mount Receiver with OLED display',
      '2x Wind Muff Deadcats & 2x Lavalier Mics',
      'Smart Charging Storage Case & Carrying Pouch'
    ],
    available: true
  },
  {
    id: 'eq-mixpre6-ii',
    name: 'Sound Devices MixPre-6 II Audio Recorder',
    category: 'AUDIO',
    subCategory: 'Audio Recorder',
    brand: 'Sound Devices',
    description: 'World-class 8-track field audio recorder with Kashmir preamps and 32-bit float recording capability.',
    longDescription: 'Engineered for dedicated sound recordists and boom operators who require pristine low-noise preamps, ultra-accurate internal timecode generator, and flexible multi-track routing.',
    pricePerDay: 450000,
    deposit: 1000000,
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Preamps': '4x Ultra-Low-Noise Kashmir Microphone Preamps',
      'Recording Tracks': '8 Tracks (6 Inputs + Stereo Mix)',
      'Sample Rate': 'Up to 192 kHz / 32-bit Float',
      'Timecode': 'Precision Internal Ambient Timecode Generator & Reader'
    },
    includedAccessories: [
      'Orca Audio Production Bag with Clear Rain Shield',
      'Sony L-Mount Battery Sled & 2x NP-F970 Batteries',
      'Hirose Power Adapter & AC Power Supply',
      '64GB SanDisk Extreme PRO SD Card'
    ],
    available: true
  },
  {
    id: 'eq-dji-rs3-pro',
    name: 'DJI RS 3 Pro Gimbal Stabilizer Combo',
    category: 'GRIP & SUPPORT',
    subCategory: 'Gimbal',
    brand: 'DJI',
    description: 'Flagship carbon-fiber 3-axis motorized gimbal with 4.5kg payload capacity and automated axis locks.',
    longDescription: 'Extended carbon fiber axis arms accommodate cinema cameras like Sony FX6, RED Komodo, and BMPCC 6K with heavy cinema prime lenses. Features LiDAR focusing support and automated balance calibration.',
    pricePerDay: 350000,
    deposit: 800000,
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Tested Payload': '4.5 kg (10 lbs) Maximum Capacity',
      'Material': 'Layered Carbon Fiber Axis Arms',
      'Battery Runtime': '12 hours with BG30 Grip',
      'Connectivity': 'Bluetooth 5.0, NATO Accessory Ports, Dual Cold Shoe'
    },
    includedAccessories: [
      'Focus Motor (2022) with Gear Strips',
      'RavenEye Wireless Image Transmitter System',
      'Briefcase Sling Handle & Extended Grip Tripod',
      'Quick-Release Arca-Swiss Plates & Screws',
      'Custom Form-fitted Carrying Case'
    ],
    available: true,
    featured: true
  },
  {
    id: 'eq-c-stand-kit',
    name: 'Matthews Heavy-Duty 40" C-Stand Kit (Pair of 2)',
    category: 'GRIP & SUPPORT',
    subCategory: 'C-Stand',
    brand: 'Matthews Grip',
    description: 'Indestructible chrome steel 40-inch century stands with turtle base, grip head, and 40-inch extension arm.',
    longDescription: 'The bedrock of professional film sets. Supports heavy light fixtures, diffusers, flags, reflectors, and boom arms with zero wobbling. Includes turtle removable base for compact transport.',
    pricePerDay: 120000,
    deposit: 300000,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Maximum Height': '3.2 meters (10.5 feet)',
      'Payload Capacity': '10 kg (22 lbs) on boom arm',
      'Base Type': 'Detachable Turtle Base',
      'Construction': 'Solid Chrome Plated Steel'
    },
    includedAccessories: [
      '2x Matthews 40" C-Stands with Turtle Bases',
      '2x 2.5" Grip Heads (Gobo Heads)',
      '2x 40" Extension Grip Arms',
      '4x 10kg Heavy Sandbags for Base Weight'
    ],
    available: true
  },
  {
    id: 'eq-carbon-tripod',
    name: 'Sachtler Video 18 S2 Carbon Fiber Tripod System',
    category: 'GRIP & SUPPORT',
    subCategory: 'Tripod',
    brand: 'Sachtler',
    description: 'Broadcast and cinema fluid head with 16-step counterbalance and carbon fiber dual-stage legs.',
    longDescription: 'Experience silky pan-and-tilt movements with frictionless damping even under extreme weather temperatures. Features Speedbalance technology for quick payload rebalancing.',
    pricePerDay: 350000,
    deposit: 800000,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1000&auto=format&fit=crop',
    specifications: {
      'Payload Capacity': '2 to 22 kg (4.4 to 48.5 lbs)',
      'Bowl Diameter': '100mm Half Bowl',
      'Leg Material': 'Carbon Fiber Multi-Stage Speed Lock',
      'Counterbalance': '16-Step Dynamic Balance'
    },
    includedAccessories: [
      'Touch & Go 16 Quick Release Camera Plate',
      'Mid-Level Spreader & Rubber Feet',
      'Heavy-duty Padded Sachtler Tripod Bag'
    ],
    available: true
  }
];
