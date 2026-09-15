import { Professional } from '../types';

export const PROFESSIONALS_DATA: Professional[] = [
  {
    id: 'pro-andre',
    name: 'Andre Pratama',
    role: 'Director',
    displayRole: 'Director / Filmmaker',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    bio: 'Visionary narrative and commercial director with over 8 years of experience leading cross-functional creative sets across Southeast Asia. Specializes in emotionally resonant storytelling, sharp actor direction, and cinematic world-building.',
    experience: '8 Years Experience',
    skills: ['Narrative Directing', 'Script Development', 'Actor Coaching', 'Storyboarding', 'Visual Tone Design'],
    specialization: ['Narrative Feature Film', 'Brand Commercials', 'Music Video Storytelling'],
    rating: 4.9,
    reviewsCount: 38,
    available: true,
    dailyRate: 'Rp 4.500.000 / Day',
    previousProjects: [
      { title: 'The Echo of Silence', type: 'Short Film (Award-Winning)', year: '2024', role: 'Director & Co-Writer' },
      { title: 'Origins: Sustainable Heritage', type: 'Global Commercial', year: '2023', role: 'Director' },
      { title: 'Midnight City Beats', type: 'Official Music Video', year: '2023', role: 'Director' }
    ]
  },
  {
    id: 'pro-rian',
    name: 'Rian Ardianto',
    role: 'Director of Photography',
    displayRole: 'Director of Photography / Cinematographer',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: 'Master of light and movement with an extensive portfolio spanning feature cinema, music videos, and luxury automotive spots. Expert operator on ARRI Alexa LF, RED V-Raptor, and Sony Venice 2 systems.',
    experience: '9 Years Experience',
    skills: ['Cinematic Lighting Design', 'Anamorphic Framing', 'Steadicam Operating', 'DIT Workflow', 'Exposure Science'],
    specialization: ['Commercial Aesthetics', 'Dark Atmospheric Narrative', 'High-Speed Action'],
    rating: 5.0,
    reviewsCount: 46,
    available: true,
    dailyRate: 'Rp 4.000.000 / Day',
    previousProjects: [
      { title: 'Neon Shadows', type: 'Feature Film', year: '2024', role: 'Director of Photography' },
      { title: 'BMW M-Series: Ignite the Night', type: 'Brand Spot', year: '2023', role: 'Cinematographer' },
      { title: 'Jakarta Underground 02', type: 'Docu-Series', year: '2022', role: 'Lead DP' }
    ]
  },
  {
    id: 'pro-dian',
    name: 'Dian Kusuma',
    role: 'Camera Operator',
    displayRole: 'Senior Camera & Gimbal Operator',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    bio: 'Dynamic camera operator specialized in complicated one-shot tracking sequences, complex drone/car chase rigs, and flawless hand-held cinema fluidity. Certified for DJI Ronin 2 and Trinity operations.',
    experience: '6 Years Experience',
    skills: ['Gimbal Rigging', 'One-Take Choreography', 'Car Mount Tracking', 'Wireless Follow Focus Coordination'],
    specialization: ['Fast-Paced Action', 'Live Music Concerts', 'Documentary Run & Gun'],
    rating: 4.8,
    reviewsCount: 29,
    available: true,
    dailyRate: 'Rp 2.500.000 / Day',
    previousProjects: [
      { title: 'Velocity Rush', type: 'Commercial Series', year: '2024', role: 'A-Camera Operator' },
      { title: 'Rhythm in the Rain', type: 'Music Video', year: '2023', role: 'Steadicam Operator' }
    ]
  },
  {
    id: 'pro-budi',
    name: 'Budi Hartono',
    role: 'Gaffer',
    displayRole: 'Chief Lighting Technician / Gaffer',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    bio: 'Over a decade of experience designing and executing electrical setups for heavy cinema stages and challenging outdoor remote locations. Deep expertise in wireless CRMX Sidus / DMX consoles, HMI ballasts, and LED volumetric stage environments.',
    experience: '10 Years Experience',
    skills: ['Set Electrical Safety', 'DMX / CRMX Console Programming', 'Three-Point Cinematic Lighting', 'Generator Distribution'],
    specialization: ['Night Exteriors', 'Studio Volumetric Sets', 'High-Key Commercial Studio'],
    rating: 4.9,
    reviewsCount: 52,
    available: true,
    dailyRate: 'Rp 2.800.000 / Day',
    previousProjects: [
      { title: 'Cerita di Balik Tirai', type: 'Netflix Feature', year: '2024', role: 'Gaffer' },
      { title: 'BCA Prioritas Campaign', type: 'National Commercial', year: '2023', role: 'Chief Lighting Technician' }
    ]
  },
  {
    id: 'pro-maya',
    name: 'Maya Sari',
    role: 'Sound Engineer',
    displayRole: 'Location Sound Recordist & Boom Operator',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'Dedicated location sound mixer dedicated to capturing crystal-clear dialogue and subtle acoustic textures under the most demanding environmental noise conditions. Owns and operates premium Sound Devices & Wisycom wireless kits.',
    experience: '7 Years Experience',
    skills: ['Field Multi-Track Mixing', 'Timecode Sync Architecture', 'Acoustic Treatment on Set', 'Lavalier Concealment'],
    specialization: ['Documentary in Remote Areas', 'Dialogue-Heavy Drama', 'Commercial Studio Audio'],
    rating: 4.9,
    reviewsCount: 34,
    available: true,
    dailyRate: 'Rp 2.400.000 / Day',
    previousProjects: [
      { title: 'The Voice of Wallacea', type: 'Nature Documentary', year: '2024', role: 'Lead Sound Mixer' },
      { title: 'Ruang Rasa', type: 'Indie Feature', year: '2023', role: 'Location Sound Recordist' }
    ]
  },
  {
    id: 'pro-kevin',
    name: 'Kevin Wijaya',
    role: 'Editor',
    displayRole: 'Senior Film Editor & Colorist',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    bio: 'Post-production craftsman known for impeccable comedic and dramatic timing, rhythm-driven cuts, and Hollywood-grade DaVinci Resolve color pipelines in ACES and HDR Dolby Vision.',
    experience: '8 Years Experience',
    skills: ['DaVinci Resolve Color Studio', 'Premiere Pro & Avid Media Composer', 'ACES Color Pipeline', 'Sound Design Pass'],
    specialization: ['Mood-Enhancing Color Grading', 'Commercial 30s Pacing', 'Music Video Fast Cuts'],
    rating: 4.9,
    reviewsCount: 41,
    available: true,
    dailyRate: 'Rp 3.200.000 / Day',
    previousProjects: [
      { title: 'Spectrum of Life', type: 'Short Film', year: '2024', role: 'Editor & Senior Colorist' },
      { title: 'Uniqlo Spring Collection', type: 'Brand Reel', year: '2023', role: 'Colorist' }
    ]
  },
  {
    id: 'pro-sarah',
    name: 'Sarah Danubrata',
    role: 'Production Designer',
    displayRole: 'Production Designer & Art Director',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Transforming empty stages into living, breathing worlds through meticulous color palette coordination, architectural prop sourcing, and character-driven spatial detailing.',
    experience: '6 Years Experience',
    skills: ['Set Architecture & Construction', 'Prop Sourcing & Fabrication', 'Wardrobe Color Harmony', 'Concept Moodboards'],
    specialization: ['Period Pieces', 'Futuristic / Cyberpunk Sets', 'Stylized Commercial Living Spaces'],
    rating: 4.8,
    reviewsCount: 27,
    available: true,
    dailyRate: 'Rp 2.900.000 / Day',
    previousProjects: [
      { title: 'Jakarta 1982', type: 'Historical Short', year: '2024', role: 'Production Designer' },
      { title: 'Samsung Galaxy Lifestyle', type: 'TV Commercial', year: '2023', role: 'Art Director' }
    ]
  },
  {
    id: 'pro-aditya',
    name: 'Aditya Pratomo',
    role: 'Scriptwriter',
    displayRole: 'Screenwriter & Narrative Consultant',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    bio: 'Screenwriter with sharp dialogue instincts and multi-layered character arcs. Experienced in adapting real-life events into gripping screenplays, polishing commercial brand scripts, and punch-up consulting.',
    experience: '5 Years Experience',
    skills: ['Screenplay Formatting', 'Character Arc Architecture', 'Treatment & Pitch Deck Creation', 'Dialogue Punch-Up'],
    specialization: ['Psychological Thriller', 'Coming-of-Age Drama', 'Corporate Storytelling'],
    rating: 4.7,
    reviewsCount: 22,
    available: true,
    dailyRate: 'Rp 2.200.000 / Day',
    previousProjects: [
      { title: 'Dua Sisi Cermin', type: 'Web Series (6 Episodes)', year: '2024', role: 'Head Writer' },
      { title: 'Bintang Terakhir', type: 'Festival Short Film', year: '2023', role: 'Writer' }
    ]
  }
];
