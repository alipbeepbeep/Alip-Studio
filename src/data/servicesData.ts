import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-film-production',
    number: '01',
    title: 'Film Production',
    tagline: 'From script development to theatrical master delivery',
    description: 'Produksi film dari tahap pengembangan konsep hingga final production. Kami menangani seluruh siklus produksi naratif dengan standar sinematik internasional.',
    details: [
      'Pre-production: Script breakdown, casting, budgeting, location scouting & permits',
      'Principal Photography: High-end camera packages (ARRI / RED / Sony Cine), complete lighting & sound crew',
      'Post-Production: Offline editing, ACES/Dolby Vision color grading, 5.1/7.1 Dolby Atmos sound mix',
      'DCI-compliant DCP packaging for theatrical and global OTT release (Netflix, Prime Video, etc.)'
    ],
    deliverables: ['Theatrical Master (DCP)', 'ProRes 4444 XQ Masters', 'OTT Deliverable Packages', 'Full Production Ledger & Releases'],
    iconName: 'Clapperboard'
  },
  {
    id: 'srv-commercial-production',
    number: '02',
    title: 'Commercial Production',
    tagline: 'High-impact brand storytelling for broadcast and digital media',
    description: 'Produksi video iklan dan commercial untuk brand dan perusahaan. Kami menggabungkan strategi pemasaran visual yang kuat dengan kualitas sinematik memukau.',
    details: [
      'Creative strategy, storyboard generation, visual treatment & pitch decks',
      'High-speed motion capture, robotic arm table-top, and luxury lifestyle sets',
      'Multi-aspect ratio masters: 16:9 TVC, 9:16 TikTok/Reels, and 1:1 Socials',
      'Rapid turnaround post-production with fast executive review loops'
    ],
    deliverables: ['Broadcast 30s/15s Cuts', 'Vertical Social Formats', 'Key Visual Still Extracts', 'Clear Commercial Licensing'],
    iconName: 'Tv'
  },
  {
    id: 'srv-short-film-production',
    number: '03',
    title: 'Short Film Production',
    tagline: 'Empowering independent directors and festival contenders',
    description: 'Membantu filmmaker dan creator menghasilkan film pendek berkualitas tinggi untuk festival nasional maupun internasional.',
    details: [
      'Creative mentorship on pacing, visual tone, and festival curation strategies',
      'Flexible indie-friendly production packaging with top-tier cinema gear',
      'Subtitling, international delivery packaging, and EPK (Electronic Press Kit) design',
      'Festival submission roadmap (Cannes, Busan, Jogja-NETPAC, JAFF, FFI)'
    ],
    deliverables: ['Festival Screening Copies', 'Trailer & Teasers', 'Official Movie Poster & EPK', 'Bilingual Subtitle Tracks'],
    iconName: 'Film'
  },
  {
    id: 'srv-music-video',
    number: '04',
    title: 'Music Video',
    tagline: 'Distinctive visual identities and rhythmic cinematic universes',
    description: 'Produksi video musik dengan pendekatan visual sinematik, pencahayaan eksperimental, dan ritme visual yang berkesinambungan dengan audio.',
    details: [
      'Concept treatment crafted around song melody, BPM, and artist persona',
      'Custom art direction, neon/atmospheric lighting, and dynamic camera choreography',
      'Special effects, 3D camera tracking, analog film emulation, and stylized grading',
      'Sync playback on set with precision timecode audio monitoring'
    ],
    deliverables: ['4K Final Master Video', 'Vertical Teaser Clips for Reels/TikTok', 'Behind-the-Scenes Reel', 'Still Photography Stills'],
    iconName: 'Music'
  },
  {
    id: 'srv-production-crew',
    number: '05',
    title: 'Production Crew',
    tagline: 'Vetted, battle-tested heads of departments and technicians',
    description: 'Menyediakan tenaga profesional berpengalaman untuk kebutuhan produksi film mulai dari Director, DoP, Gaffer, Sound Recordist, hingga Post Team.',
    details: [
      'Access to curated industry professionals with verified festival and commercial credits',
      'Seamless on-set communication and adherence to strict production timelines',
      'Equipped with their own calibrated pro gear kits upon request',
      'Full administrative coverage including crew release forms and work insurance'
    ],
    deliverables: ['Certified Department Heads', 'Reliable Technical Crews', 'Direct On-Set Coordination', 'Daily Production Reports'],
    iconName: 'Users'
  },
  {
    id: 'srv-production-consultation',
    number: '06',
    title: 'Production Consultation',
    tagline: 'Strategic technical guidance, budgeting, and gear feasibility',
    description: 'Konsultasi mengenai kebutuhan teknis, estimasi anggaran, pemilihan equipment, dan alur kerja produksi film agar efisien tanpa mengorbankan kualitas.',
    details: [
      'Script technical feasibility analysis and equipment package tailoring',
      'Line production budget optimization and shooting schedule roadmapping',
      'Location hazard inspection, power distribution calculation, and safety briefing',
      'Post-production workflow design (color management, ACES pipeline, backup protocol)'
    ],
    deliverables: ['Technical Camera & Lighting List', 'Optimized Production Schedule', 'Feasibility Assessment Report', 'Workflow Technical Bible'],
    iconName: 'Compass'
  }
];
