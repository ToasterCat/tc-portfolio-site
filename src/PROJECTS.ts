import { Project, ProjectCategory, ProjectDetails, ProjectOrigin, Testimonial } from './types/project.model';

const PROJECTS: Record<string, Project> = {


  blackoutPunk: {
    projectDetails: {
      alias: 'blackout-punk',
      category: 'game',
      order: 10,
      name: 'BLACK0UT.PUNK',
      kind: `PC Game`,
      origin: 'in-house',
      status: 'in-development',
      roles: ['Development', 'Publishing'],
      credits: [
        { name: 'Dirk Hortensius', role: 'Gameplay Engineering'},
        { name: 'Travis Morgan', role: 'Music & Sound' },
        { name: 'Sabine Aliev', role: 'UI/UX Design' },
        { name: 'Sean Rothenbuhler', role: 'Level Design' },
        { name: 'Peter Hortensius', role: 'Gameplay Design' },
      ],
      year: '2024–Present',
      outcome: '',
      brief: `A rave-flavored tactical shooter: command your squad, then jump into any unit and fight the battle yourself.`,
      body: [
        `Blackout Punk is a tactical third-person shooter where you don’t play one soldier: you run the chain of command. Give orders to your fireteams, jump into any unit under your command, and fight the battle yourself.`,
        `Most shooters treat a squad as backup that follows you around. Ours is made of fireteams that take orders and work objectives as a unit, set to loud club music and a lot of flashing lights. Think Tron meets John Wick on club night: laser tag on steroids.`,
        '- **Command:** issue orders to every unit under your command.\n' +
          '- **Control:** jump into any unit on the battlefield and see the fight from its eyes.\n' +
          '- **Kill:** when all else fails, pull the trigger yourself.',
        `**What we’re proving first:** that multi-unit, possession-driven combat is viable, scalable, and fun. The current build is a deliberately minimal testbed: a nightclub hub where you order your match at the bar, a ready room for picking your squad, and Elimination matches where the last squad standing wins.`,
        `**Under the hood:** Unreal Engine 5, with AWS GameLift running the dedicated servers. Our performance bar is four full squads (48 characters) on screen on a Steam Deck at 30–60 FPS, with co-op sessions hosted peer-to-peer on the player’s own machine.`,
        `**Where it stands:** the prototype was finished in late 2025, and playtests run from December through March. A team of dedicated contractors covers level and gameplay design, music and sound, UI/UX, user-study proctoring, narrative, and character design. Sign up for the playtest at [blackout-punk.com](https://blackout-punk.com).`,
      ],
      skills: [
        "Unreal",
        "AWS-GameLift",
        "Blender",
        "Photoshop"
      ],
      heroLink: {
        label: 'Join the Playtest',
        target: 'https://blackout-punk.com',
        icon: 'blackout-punk-icon'
      },
      links: [
        {
          label: 'Official Website',
          target: 'https://blackout-punk.com',
          icon: 'blackout-punk-icon'
        },
        {
          label: 'Discord',
          target: 'https://discord.gg/VENmWr635t',
          icon: 'logo-discord'
        },
        {
          label: 'Patreon',
          target: 'https://www.patreon.com/cw/ToasterCatStudios',
          icon: 'logo-patreon'
        }
      ],
      thumbnailImage: {
        source: 'blackout-punk-icon',
        alt: 'BLACK0UT.PUNK Icon'
      },
      backgroundImage: {
        source: 'blackout-punk-background',
        alt: 'BLACK0UT.PUNK Background Grid'
      },
      media: {
        featured: {
          type: 'embed',
          provider: 'youtube',
          id: 'xMeRWH3r48A',
          title: 'Caliban Gameplay Sample — Bot Arena',
          poster: 'blackout-punk-detail',
        },
        gallery: [
          { type: 'image', src: 'blackout-punk-hallway', alt: 'A red-team soldier holding a corner while the squad advances' },
          { type: 'image', src: 'blackout-punk-guns-up', alt: 'Over-the-shoulder view of a soldier aiming a rifle' },
          { type: 'image', src: 'blackout-punk-background', alt: 'The emissive grid environment' },
        ],
      },
    }
  },

  
  clickTune: {
    projectDetails: {
      alias: 'clicktune',
      category: 'consult',
      order: 100,
      featured: true,
      name: '“MusikMoji” — ClickTune LLC',
      initials: 'CT',
      kind: `Client Consultation`,
      origin: 'client',
      status: 'delivered',
      roles: ['Back-End Architecture', 'Research', 'Technical Advisory'],
      year: '2025',
      outcome: 'Patent granted: US 12,671,666 includes our engineering flow diagrams for the back-end service ClickTune chose to build.',
      brief: `Technical research and back-end design for shareable musical “GIFs”, now part of a granted US patent.`,
      body: [
        `ClickTune came to us with an idea for shareable musical “GIFs”: short audio clips attached to text messages.`,
        `The research came first: could a song clip ride along in a text at all? We measured MP3s against GIFs, mapped what data and payloads SMS, MMS, and RCS protocols can support, and tested how existing platforms actually process audio files and content-rich links.`,
        `From there we designed a shared foundation (clip ingestion, lookup, and streaming) and three distinct approaches built on top of it, each with its own back-end design. Alongside them came rough development timelines, team requirements, and infrastructure costs modeled from a million to four billion requests a day.`,
        `ClickTune pursued Option A, and our engineering diagrams for its back-end service became part of the granted patent.`,
      ],
      testimonials: [
        {
          // PLACEHOLDER: waiting on the client's real quote. Dev builds only.
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'Lorem Ipsum',
          title: 'Founder',
          org: 'ClickTune LLC',
          placeholder: true,
        }
      ],
      skills: [
        "AWS-S3",
        "AWS-DynamoDB",
        "AWS-CloudFormation",
        "AWS-CloudFront",
        "Android",
        "iOS"
      ],
      links: [
        {
          label: 'US Patent 12,671,666',
          target: 'https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12671666',
          icon: 'logo-website'
        }
      ],
      cardImage: {
        source: 'clicktune-fig2-800',
        alt: 'Back-end architecture diagram from US Patent 12,671,666'
      },
      backgroundImage: {
        source: 'clicktune-fig2',
        alt: 'Back-end architecture diagram from US Patent 12,671,666'
      },
      media: {
        featured: {
          type: 'image',
          src: 'clicktune-fig2',
          alt: 'Architecture diagram: sender and recipient apps, search and content portals, and a control system and data system split by control and data planes',
          caption: 'Fig. 2 of US Patent 12,671,666, drawn from the Option A architecture we delivered.',
        },
        gallery: [
          // Our delivered diagrams first (the patent story), then research as an appendix.
          // The research pages are generic: public AWS pricing math and public messaging-app behaviour,
          // nothing from ClickTune's business, so showing them stays within the handoff terms.
          { type: 'image', src: 'clicktune-foundation', alt: 'Architecture diagram: clip ingestion workflow, clip database, streaming service with caching CDN, and lookup service between sender and receiver', caption: 'The foundation every option shared: clip ingestion, lookup, and streaming.' },
          { type: 'image', src: 'clicktune-option-a', alt: 'Architecture diagram: the foundation plus user registration, identity, and preference services, an ad network, and mobile web pages for recipients', caption: 'Option A, the approach ClickTune built: the foundation plus registration, identity, preferences, and a mobile web fallback.' },
          { type: 'image', src: 'clicktune-cost-model', alt: 'Cost tables for S3 and DynamoDB throughput at one million to four billion requests a day', caption: 'Research: AWS storage costs modeled from a million to four billion requests a day; generic scaling math, not client data (circa Feb 2025).' },
          { type: 'image', src: 'clicktune-file-size', alt: 'Research notes comparing MP3 and GIF file sizes, with sample file listings and a flaming Elmo GIF', caption: 'Research: how big is a song clip next to a GIF? About the same.' },
          { type: 'image', src: 'clicktune-messaging-test', alt: 'Three phone screenshots comparing how Android Messages, WhatsApp, and Signal display audio files and music links', caption: 'Research: how Android Messages, WhatsApp, and Signal actually show an audio file or link.' },
        ],
      },
    }
  },


  jukeDec: {
    projectDetails: {
      alias: 'jukedec',
      category: 'consult',
      order: 110,
      name: '“JukeDec” — FrigginGlorio.us',
      initials: 'JD',
      kind: `Research & Development`,
      origin: 'client',
      status: 'delivered',
      roles: ['Research', 'Technical Product Design', 'Back-End and App Integration'],
      year: '2021',
      outcome: 'Delivered the full technical scope and build estimate. The findings showed the product was far larger than the client’s runway, and they chose not to build before spending on development.',
      brief: `A multi-faceted content distribution and networking platform for musicians, producers, and digital artists.`,
      body: [
        "An aspirational platform that aimed to unify music creators with their audience through continuous iteration and collaborative feedback throughout the entire production process. Artists would upload work in various states of completion that would be distributed to and evaluated by their audience, enabling peers to submit draft remixes and additional layers to the work.",
        `The design split the platform in two: a control plane where artists and labels upload through their own portal into an ingestion workflow that checks, reformats, and accepts or rejects each release, and a data plane where fans browse a shared catalog of artists, collections, and tracks, buy through an order workflow that grants entitlements, then stream or download through signed links.`,
        `We delivered a context diagram, a data model, and the technical scope and build estimate behind the outcome below.`,
      ],
      testimonials: [
        {
          quote: "Dirk from ToasterCat Studios is professional and pragmatic. His systems approach in framing large-scale projects into actionable pathways is truly valuable.",
          name: "Daniel Kraft",
          title: "Founder, Developer",
          org: "frigginglorio.us"
        }
      ],
      skills: [
        "AWS-S3",
        "AWS-StepFunctions",
        "AWS-DynamoDB",
        "AWS-CloudFormation",
        "AWS-CloudFront",
        "Android",
        "iOS"
      ],
      cardImage: {
        source: 'jukedec-context',
        alt: 'JukeDec context diagram'
      },
      backgroundImage: {
        source: 'jukedec-context',
        alt: 'JukeDec context diagram'
      },
      media: {
        featured: {
          type: 'image',
          src: 'jukedec-context',
          alt: 'Context diagram: artist portal and upload ingestion workflow on one side, the fan-facing Juke Portal, library, and order purchase workflow on the other, sharing auth, a catalog, and a source bucket',
          caption: 'The context diagram we delivered (recoloured for this site).',
        },
        // The deliverables first; one sketch at the back as a nod to how it started.
        gallery: [
          { type: 'image', src: 'jukedec-entities', alt: 'Entity diagram: artist, collection, track, offer, transaction, entitlement, library, and user', caption: 'The data model.' },
          { type: 'image', src: 'jukedec-sketch-context', alt: 'Hand-drawn sketch of the whole system, split into control plane and data plane', caption: 'Where it started: the first pass on a legal pad.' },
        ],
      },
      links: [ ],
    }
  },


  une: {
    projectDetails: {
      alias: 'une',
      category: 'consult',
      order: 112,
      // No media on purpose: the wireframes and business case are the client's
      // material (handed over without terms), and the founders stay unnamed.
      name: 'Ultimate Nightlife App',
      initials: 'UNE',
      kind: `Client Consultation`,
      origin: 'client',
      status: 'delivered',
      roles: ['Feasibility Review', 'MVP Scoping', 'Technical Advisory'],
      year: '2015',
      outcome: 'Delivered the review and a recommended first release. After weighing the scope and the legal risk of sharing users’ live locations, the founders chose not to build.',
      brief: `A feasibility and scoping review for a live nightlife app: real-time bar rankings, automatic check-ins, and social feeds.`,
      body: [
        `Two Indiana University founders brought us UNE, the “Ultimate Nightlife Experience”: an app showing which bars nearby are busiest right now, with automatic check-ins, live photo and video feeds for each venue, and leaderboards that rewarded posting.`,
        `We broke the pitch down into the engineering it would take: native iOS and Android apps, a custom camera and media pipeline, always-on location tracking and its cost in battery and privacy, map integrations, a friends graph with linked social accounts, area-wide leaderboards, venue data intake, and the back end and support operations to run it all.`,
        `The review recommended a much smaller first release: sign-in and friends through Facebook only, no custom camera, links out to existing map apps instead of an in-app map, and venue data entered by hand. It also flagged the risk at the heart of the idea: broadcasting where people are in real time invites harassment and liability, and if users switch automatic check-in off, it becomes just another check-in app.`,
        `We presented the findings over email and video.`,
      ],
      skills: [
        "Android",
        "iOS"
      ],
    }
  },


  liveShows: {
    projectDetails: {
      alias: 'live-shows',
      category: 'media',
      order: 115,
      name: 'Live Shows and Events',
      initials: "LIVE",
      kind: `Show Promotion`,
      origin: 'in-house',
      status: 'live',
      roles: ['Booking', 'Promotion', 'Flyer Design', 'Production'],
      year: '2019–Present',
      outcome: 'Shows produced since 2019, including a sold-out TOOL release party and a benefit for Point of Pride and the Washington Immigrant Solidarity Network.',
      brief: `Flyers, banners, and promotion for our own live shows in Seattle, plus the booking and production behind them.`,
      body: [
        `We book, promote, and produce live shows for our own bands, [Octopus Attacks Shark!!](https://www.octopus-attacks-shark.com/) and [Ugliest Man Alive](https://ugliest-man-alive.com/): building the lineup, designing the flyers and banners, selling the tickets, and running the night itself.`,
        `Since 2019 that’s meant shows across Seattle-area venues, from TOOL tribute nights at Lucky Liquor to a sold-out release party at The Funhouse and a charity benefit at the Central Saloon.`,
        '- **Jun 18, 2019 — “The Gaping Lotus Experience”:** TOOL covers at Lucky Liquor, Tukwila, with Triple 6 and [Kerr Ring](https://kerrring.bandcamp.com/).\n' +
          '- **Jul 27, 2019 — “10,000 Days of Opiate”:** TOOL covers at Lucky Liquor, with Grand Moff and Ugliest Man Alive.\n' +
          '- **Aug 30, 2019 — “Fear Inoculum” Unofficial Release Party:** TOOL covers at The Funhouse, Seattle, with Version 7.0 and [NAMEA](https://namea.bandcamp.com/). **Sold out.**\n' +
          '- **Jul 6, 2022 — Octopus Attacks Shark!!:** The Funhouse, with [Anthrocene](https://anthrocene.bandcamp.com/), [Telomyras](https://telomyras.bandcamp.com/), and [Psionic Haze](https://psionichaze.bandcamp.com/).\n' +
          '- **Apr 23, 2024 — “Outside Agitators” Album Release:** Central Saloon, with [Shards of Narsil](https://shardsofnarsil.bandcamp.com/), [Communal 40](https://communal40.bandcamp.com/), and [The Mourning Watch](https://themourningwatch.bandcamp.com/).\n' +
          '- **Oct 8, 2024 — “Cats with Bowties”:** Tim’s Tavern, White Center, with Ugliest Man Alive and [Whisperite](https://whisperite.bandcamp.com/).\n' +
          '- **Jun 6, 2025 — “Songs for Solidarity” Benefit:** Central Saloon, with [Dying Off](https://dyingoff.bandcamp.com/), [Telomyras](https://telomyras.bandcamp.com/), and [The Mourning Watch](https://themourningwatch.bandcamp.com/). **$1,894 raised** for [Point of Pride](https://www.pointofpride.org/) and the [Washington Immigrant Solidarity Network](https://waisn.org/).',
        `**Also on stage:** Octopus Attacks Shark!! won “This is 2020: Columbia City”, a battle of the bands at the Columbia City Theater, in January 2020, and competed in the Wacken Open Air Metal Battle in 2020 and 2022. When we play someone else’s bill, we still help promote it; a few of those nights are in the gallery too.`,
      ],
      skills: [
        "Photoshop",
        "Premiere"
      ],
      cardImage: {
        source: 'oas-2024-crowd-800',
        alt: 'A packed crowd at the Central Saloon'
      },
      backgroundImage: {
        source: 'oas-2024-central',
        alt: 'Octopus Attacks Shark!! on stage at the Central Saloon'
      },
      media: {
        featured: {
          type: 'image',
          src: 'oas-2024-crowd',
          alt: 'A packed crowd throwing horns toward the stage at the Central Saloon',
          caption: 'The “Outside Agitators” album release crowd, Central Saloon, April 2024.',
        },
        gallery: [
          { type: 'image', src: 'show-fear-inoculum-flyer', alt: 'Flyer for the unofficial “Fear Inoculum” release party, with The Gaping Lotus Experience, Version 7.0, and NAMEA', caption: 'Flyer, “Fear Inoculum” Unofficial Release Party, The Funhouse, August 2019. Sold out.' },
          { type: 'image', src: 'show-funhouse-flyer', alt: 'Flyer for Octopus Attacks Shark!!, Anthrocene, and Telomyras at The Funhouse', caption: 'Flyer, The Funhouse, July 2022.' },
          { type: 'image', src: 'show-gaping-lotus-flyer', alt: 'Flyer for a TOOL tribute night at Lucky Liquor with Grand Moff and Ugliest Man Alive', caption: 'Flyer, Lucky Liquor, 2019.' },
          { type: 'image', src: 'show-solidarity-flyer', alt: 'Flyer for Songs for Solidarity, a benefit for Point of Pride and the Washington Immigrant Solidarity Network', caption: 'Flyer, Songs for Solidarity benefit, Central Saloon, 2025.' },
          // Shows we played and helped promote, on other promoters' bills.
          { type: 'image', src: 'show-rumours-marquee', alt: 'Roadside marquee listing The Maxwells, Tremor Cats, and Ugliest Man Alive', caption: 'Marquee, Rumours, Spanaway, August 2021.' },
          { type: 'image', src: 'show-wacken-2022', alt: 'Octopus Attacks Shark!! on stage at The Funhouse', caption: 'Wacken Open Air Metal Battle, The Funhouse, February 2022.' },
          { type: 'image', src: 'show-i90-fiasco-flyer', alt: 'Flyer for I-90 Fiasco with Panic Grass and Octopus Attacks Shark!! at Jules Maes Saloon', caption: 'Flyer, “I-90 Fiasco”, Jules Maes Saloon, August 2025.' },
        ],
      },
    }
  },


  outsideAgitators: {
    projectDetails: {
      alias: 'outside-agitators',
      category: 'media',
      order: 120,
      name: '“Outside Agitators” — Octopus Attacks Shark!!',
      kind: `Album`,
      origin: 'in-house',
      status: 'shipped',
      roles: ['Additional Recording', 'Mixing'],
      year: '2024',
      outcome: 'Released to all major streaming platforms, and launched with a [release show](/portfolio/live-shows) at the Central Saloon.',
      brief: `Debut LP from Seattle punk act Octopus Attacks Shark!!`,
      body: [
        `Recording and mixing in full collaboration with Soundhouse and veteran studio engineers Mike Sebring and Jack Endino.`,
        '- Recorded additional guitars, vocals, and samples, including sessions we tracked in the University of Washington’s Odegaard Library\n- Mixed the sample tracks “Submerged”, “47degrees”, and “Hawking Radiation” end to end',
      ],
      skills: [
        "Reaper"
      ],
      links: [
        {
          label: 'Official Website',
          target: 'https://www.octopus-attacks-shark.com/pages/music.html',
          icon: 'oas-logo'
        },
        {
          label: 'Spotify',
          target: 'https://open.spotify.com/album/2vzvr74t2aGSgBoR3Twlwf',
          icon: 'logo-spotify'
        },
        {
          label: 'iTunes',
          target: 'https://music.apple.com/us/album/killing-floor/1743129721?i=1743129725',
          icon: 'logo-iTunes'
        }
      ],
      thumbnailImage: {
        source: 'oas-logo',
        alt: 'OAS Band Logo'
      },
      backgroundImage: {
        source: 'oas-outside-agitators',
        alt: 'Outside Agitators Album Art'
      },
      media: {
        featured: {
          type: 'embed',
          provider: 'bandcamp',
          id: '2915178295',
          title: 'Outside Agitators',
          tracks: 8,
          poster: 'oas-outside-agitators',
        },
        gallery: [
          { type: 'image', src: 'studio-mics', alt: 'A vocal microphone with a pop filter in our studio' },
          { type: 'image', src: 'studio-cab-mic', alt: 'A microphone on a guitar cabinet in our studio' },
          { type: 'image', src: 'studio-mixer', alt: 'The mixing desk in our studio' },
        ],
      },
    }
  },


  fossArmory: {
    projectDetails: {
      alias: 'foss-armory',
      category: 'game',
      order: 20,
      name: 'FOSS Armory',
      initials: 'FOSS',
      kind: `PC Game`,
      origin: 'client',
      status: 'delivered',
      roles: ['Research', 'Asset Pipeline', 'Animation', 'Gameplay Engineering'],
      year: '2022',
      outcome: 'Proof of concept delivered and its milestones met; the client chose not to take the pipeline further.',
      brief: `A showroom and firing range built for a client to promote the open-source designs of the PY2A community, with CAD files converted into game-ready, animated, configurable weapons.`,
      body: [
        `A client set out to build a “Free and Open-Source Armory”: a game to promote and share the designs of the growing PY2A community, the makers who publish 3D-printable firearm designs for anyone to build. Those designs ship as printable parts, one STEP or STL file per piece, made for a slicer rather than a game engine. So the first milestone was a proof of concept: take the files as released and bring them into Unity as weapons you can inspect, configure, and fire.`,
        `**Under the hood:** every printed part became its own game mesh, so each model assembles the way the real build does and moves the way it does: the action cycles on every shot, and the FGC-9 Mk II runs its own arming animation. On top of the geometry sits one shared weapon framework, with fire-mode settings, mount points for optics, underbarrel gear, and lasers, and loadout slots for a primary, a secondary, and a rifle slung on the back. Rounds are physical projectiles that carry their impact energy into destructible targets and barricades, so the range tests what a design does, not just how it looks.`,
        `We dog-fooded the pipeline on our own home turf first: NERF-style blasters like Ehdrien’s Gecko are CAD-built designs too, often with more moving parts than most printed firearms, which made them a tougher first test. The flagships were the FGC-9 (by JStark1809) and the FGC-9 Mk II (by JStark1809 and IvanTTroll), modeled in full for their popularity with the community. Both are released under Creative Commons.`,
        `The client asked for a vaporwave look, so the showroom and range are dark rooms lit by neon teal and amber light panels, and you play as a glossy chrome mannequin. The designs belong to their makers; our work was the pipeline and the game around them.`,
        `The milestones were met, and the client chose to stop there. With the tools of the time, getting from CAD to a shippable asset still meant hand-built levels of detail from an artist, and that cost more than the thesis (CAD in, game-ready FBX out, with little hand work) set out to spend.`,
      ],
      skills: [
        "Unity",
        "Fusion360",
        "Blender"
      ],
      links: [
        {
          label: 'GitHub',
          target: 'https://github.com/Dirker27/FossArmory',
          icon: 'logo-github'
        }
      ],
      backgroundImage: {
        source: 'foss-background',
        alt: 'FOSS Armory'
      },
      media: {
        featured: {
          type: 'clip',
          src: 'foss-armory',
          poster: 'foss-armory-poster',
          alt: 'In a dark room lit by a glowing yellow wall panel, a floating display spins a pistol; at each cut the display swaps in another design (the FGC-9 rifle, the WSPR, the FGC-9 Mk II) without breaking the turn',
          caption: 'Open-source designs, modeled part for part and put on display.',
        },
        gallery: [
          { type: 'clip', src: 'foss-range', poster: 'foss-range-poster', alt: 'Over the shoulder of a glossy mannequin, the player fires down a hazy, neon-lit indoor range; red targets burst into tumbling debris, seen up close from beside the lane against teal and amber light', caption: 'Test-fire any build on a live range: physics-driven rounds, destructible targets.' },
          { type: 'image', src: 'foss-mannequins', alt: 'Three glossy mannequins holding rifles stand in a dark room, their armor catching amber and mint reflections from a glowing yellow wall panel' },
          { type: 'image', src: 'foss-range-lanes', alt: 'Looking down the hazy indoor range: teal and amber light strips glow through the fog and converge toward red targets on dark lanes' },
        ],
      },
    }
  },


  crudeMirror: {
    projectDetails: {
      alias: 'crude-mirror',
      category: 'web',
      order: 60,
      name: 'Crude Mirror Media',
      kind: `Media Blog`,
      origin: 'in-house',
      status: 'live',
      roles: ['Cloud Hosting', 'Front-End Design', 'Analytics', 'Ad Monetization'],
      credits: [
        { name: 'Peter Hortensius', role: 'Head Writer' },
      ],
      year: '2021–Present',
      brief: `“A Poorly Edited Editorial”: a pop-culture publication we launched, host, and tune, paid for by its own ad revenue.`,
      body: [
        `ToasterCat launched “Crude Mirror Media” in April 2021: a pop-culture publication of reviews, editorials, and “Dreamcasts”, casting and pitch proposals for the films and shows that should exist.`,
        `The site is WordPress on AWS Lightsail, chosen for low, predictable hosting costs over the long haul. Google Analytics tracks readership, and AdSense placements are managed through the Advanced Ads plugin, so the revenue side can be tuned without touching the content.`,
        `We tuned the design for the audience it writes for: a magazine layout with a trending ticker, a feature mosaic, big stills, and bold category tags under a shattered-screen masthead. Custom CSS keeps headlines, tags, and cards consistent across every column, from the front page to the sidebars.`,
      ],
      outcome: 'Steady reader growth across multiple countries since launch, with particular success in Latin and South America. AdSense revenue keeping the site in the black.',
      skills: [
        "WordPress",
        "AdSense",
        "GSuite",
        "AWS-Lightsail"
      ],
      links: [
        {
          label: 'Live Site',
          target: 'https://www.crude-mirror.com',
          icon: 'logo-website'
        },
      ],
      cardImage: {
        source: 'cm-2022-home-800',
        alt: 'The Crude Mirror Media homepage in 2022'
      },
      thumbnailImage: {
        source: 'crude-mirror-logo',
        alt: 'Crude-Mirror Logo'
      },
      backgroundImage: {
        source: 'crude-mirror-background',
        alt: 'Crude-Mirror Banner'
      },
      media: {
        featured: {
          type: 'image',
          src: 'cm-2022-home',
          alt: 'The Crude Mirror Media homepage: masthead, menu, trending ticker, and a mosaic of featured Star Wars articles',
          caption: 'The homepage in mid-2022: trending ticker, feature mosaic, and category tags.',
        },
        gallery: [
          { type: 'image', src: 'cm-2023-review', alt: 'A Rings of Power review with breadcrumbs, category tags, a byline, a pull quote, and the Dreamcast and Review sidebars', caption: 'A review page, 2023: breadcrumbs, byline, and a styled pull quote.' },
          { type: 'image', src: 'cm-2023-category', alt: 'The Star Wars category page with a featured Bad Batch review and the Dreamcast and Review sidebars', caption: 'A category page, 2023.' },
          { type: 'image', src: 'cm-2026-article', alt: 'A Crude Mirror Media article listing with the review sidebar' },
        ],
      },
    }
  },


  strongarm: {
    projectDetails: {
      alias: 'strongarm',
      category: 'web',
      order: 70,
      name: 'Strongarm Digital Marketing',
      kind: `Client Lead Site`,
      origin: 'client',
      status: 'live',
      roles: ['Website Design', 'Development'],
      year: '2022',
      outcome: 'Site launched for client, attracting new leads through direct contact forms and indirect search analytics.',
      brief: `Business portfolio and web presence for a local digital marketing provider specializing in SEO and market segment presence.`,
      body: [
        `A simple responsive website launched with custom CSS and JS elements using minimal-cost architecture ($0.12/mo) matching strict client specifications for layout, copy, and look-and-feel.`,
      ],
      skills: [
        "HTML",
        "CSS",
        "AWS-S3",
        "AWS-Route53",
        "AWS-CloudFront"
      ],
      links: [
        {
          label: 'Live Site',
          target: 'https://www.strongarmdigitalmarketing.com',
          icon: 'logo-website'
        }
      ],
      thumbnailImage: {
        source: 'strongarm-logo',
        alt: 'Strongarm Logo'
      },
      backgroundImage: {
        source: 'strongarm-background',
        alt: 'Strongarm Site'
      },
      media: {
        featured: {
          type: 'image',
          src: 'strongarm-site-screenshot',
          alt: 'Strongarm Site',
        },
        gallery: [
          { type: 'image', src: 'strongarm-background', alt: 'Strongarm site hero image' },
        ],
      },
    }
  },


  oasWebsite: {
    projectDetails: {
      alias: 'oas-website',
      category: 'web',
      order: 80,
      name: 'Octopus Attacks Shark!!',
      kind: `Band Site`,
      origin: 'in-house',
      status: 'live',
      roles: ['Front-End Design', 'Hosting'],
      year: '2022',
      outcome: 'Site shipped and maintained to promote ticket sales and album release.',
      brief: `E-commerce front-end and music portfolio for local punk act “Octopus Attacks Shark!!”.`,
      body: [
        `Simple static website designed and developed from the ground-up by ToasterCat Studios. Portfolio website launched using minimal-cost architecture ($0.12/mo) and integrated with 3rd party e-commerce with custom CSS to provide a fluent look-and-feel across both sites.`,
      ],
      skills: [
        "HTML",
        "CSS",
        "AWS-S3",
        "AWS-Route53",
        "AWS-CloudFront",
        "Shopify"
      ],
      heroLink: {
          label: 'Band Site',
          target: 'https://www.octopus-attacks-shark.com',
          icon: 'oas-logo'
        },
      links: [
        {
          label: 'Portfolio Site',
          target: 'https://www.octopus-attacks-shark.com',
          icon: 'oas-logo'
        },
        {
          label: 'Merch Store',
          target: 'https://merch.octopus-attacks-shark.com',
          icon: 'oas-logo'
        }
      ],
      cardImage: {
        source: 'oas-2026-home-800',
        alt: 'Homepage of the live site'
      },
      thumbnailImage: {
        source: 'oas-site-title',
        alt: 'OAS Logo'
      },
      backgroundImage: {
        source: 'oas-background',
        alt: 'OAS Band'
      },
      media: {
        featured: {
          type: 'image',
          src: 'oas-2026-home',
          alt: 'The Octopus Attacks Shark!! homepage: band crest over a live photo, with links to stream and see the band live',
        },
        gallery: [
          { type: 'image', src: 'oas-2026-music', alt: 'The music page: an embedded album player beside the album notes and credits' },
          { type: 'image', src: 'oas-2026-shows', alt: 'The shows page: past shows as cards with dates, venues, and flyers' },
          { type: 'image', src: 'oas-2026-mobile', alt: 'The Octopus Attacks Shark!! homepage on a phone' },
          { type: 'image', src: 'oas-background', alt: 'Octopus Attacks Shark!! on stage' },
        ],
      },
    }
  },


  umaWebsite: {
    projectDetails: {
      alias: 'uma-website',
      category: 'web',
      order: 90,
      name: 'Ugliest Man Alive [U.M.A]',
      kind: `Band Site`,
      origin: 'in-house',
      status: 'live',
      roles: ['Front-End Design', 'Hosting'],
      year: '2021',
      outcome: 'Site shipped and maintained to promote live events and merchandising sales.',
      brief: `Custom portfolio site and brand press pack for local post-metal act “Ugliest Man Alive” [U.M.A].`,
      body: [
        `Web presence and branding designed exclusively by ToasterCat Studios. Relaunched using an existing third-party platform to facilitate dynamic content management and e-commerce integration. All brand and multimedia assets created in-house.`,
      ],
      skills: [
        "Squarespace",
        "Photoshop",
        "Premiere"
      ],
      links: [
        {
          label: 'UMA Portfolio',
          target: 'https://ugliest-man-alive.com/',
          icon: 'logo-website'
        }
      ],
      cardImage: {
        source: 'uma-2026-home-800',
        alt: 'Homepage of the live site'
      },
      thumbnailImage: {
        source: 'uma-logo',
        alt: 'UMA Logo'
      },
      backgroundImage: {
        source: 'uma-background',
        alt: 'UMA Band'
      },
      media: {
        featured: {
          type: 'image',
          src: 'uma-2026-home',
          alt: 'The Ugliest Man Alive homepage: the [U]gliest [M]an [A]live wordmark in monospace over a dark photo',
        },
        gallery: [
          { type: 'image', src: 'uma-2026-player', alt: 'An embedded SoundCloud player over a full-screen band image' },
          { type: 'image', src: 'uma-2026-mobile', alt: 'The Ugliest Man Alive homepage on a phone' },
          { type: 'clip', src: 'uma-machine-god', poster: 'uma-machine-god-poster', alt: 'UMA MachineGod//Suicide' },
          { type: 'clip', src: 'uma-redacted', poster: 'uma-redacted-poster', alt: 'UMA [redacted]' },
        ],
      },
    }
  },


  pixHell: {
    projectDetails: {
      alias: 'pixhell',
      category: 'game',
      order: 30,
      name: 'PixHell',
      kind: `Mobile Game`,
      origin: 'contributor',
      status: 'live',
      roles: ['Custom Graphics', 'Haptics Engine', 'Audio and Soundtrack'],
      year: '2013',
      outcome: 'Project shipped and available for purchase on Amazon AppStore.',
      brief: `A rogue-like bullet hell game for Android using custom motion controls and procedural enemy generation.`,
      body: [
        `PixHell is a bullet hell you play by tilting. Lean the tablet and the ship slides across the starfield while it fires on its own, so the whole game is reading the incoming fire and finding the gap. Every wave sends more enemies, faster and tougher than the last, and each one flies its own randomly generated path: a straight dive, a drunken wander, or a zigzag across the screen. Downed enemies either explode for points or drop coins to chase.`,
        `**Under the hood:** native Android with no engine. A fixed-rate game thread steps the simulation every 16 milliseconds, and the view draws every sprite straight onto the screen canvas. Tilt comes from the raw accelerometer, sorted into speed bands with a dead zone and an adjustable sensitivity, so a steady hand holds the ship still and a hard lean sends it across the screen. Weapons are modular launchers with their own cooldowns and shot patterns (bullets, missiles, and a three-way tri-blaster), swappable mid-run from the pause menu. The in-game store and A/B tests ran on Amazon’s SDKs; one test started players on the tri-blaster to see how it changed their play.`,
        `All of the art, sound effects, and soundtrack were made in-house. A featured finalist at Irvine Mobile Game Jam 2013, and later released on the Amazon Appstore.`,
      ],
      skills: [
        "Android",
        "AmazonCoins",
        "Reaper"
      ],
      links: [
        {
          label: 'Appstore',
          target: 'https://www.amazon.com/dp/B00DPLJIOU',
          icon: 'logo-amazon'
        },
        {
          label: 'GitHub',
          target: 'https://github.com/bmaxwell921/PixelHellProd/tree/master',
          icon: 'logo-github'
        }
      ],
      thumbnailImage: {
        source: 'pixhell-logo',
        alt: 'PixHell Logo'
      },
      backgroundImage: {
        source: 'pixhell-background',
        alt: 'PixHell'
      },
      media: {
        featured: {
          type: 'clip',
          src: 'ph-gameplay',
          poster: 'ph-gameplay-poster',
          alt: 'PixHell gameplay in portrait: waves of pixel-art enemy ships fly down a starfield firing pink shots while the green player ship weaves between them, firing missiles that blow enemies apart and leave gold coins falling',
          caption: 'Tilt to steer, auto-fire to survive, and every wave hits harder than the last.',
        },
        gallery: [
          { type: 'image', src: 'pixhell-flyer', alt: 'PixHell' },
          { type: 'clip', src: 'ph-triblaster', poster: 'ph-triblaster-poster', alt: 'The player ship fires three-way shots up at waves of enemy ships, dodging their pink fire as destroyed enemies drop gold coins', caption: 'Swap weapons mid-run, from missiles to the three-way tri-blaster.' },
          { type: 'image', src: 'pixhell-screenshot', alt: 'PixHell gameplay on a phone' },
          { type: 'clip', src: 'ph-dodge', poster: 'ph-dodge-poster', alt: 'A close, wide view of the player ship weaving side to side through streams of pink enemy shots as enemy ships pass by', caption: 'Precision motion controls: hold steady to hover, lean hard to dodge.' },
        ],
      },
    }
  },


  wraithSquadron: {
    projectDetails: {
      alias: 'wraith-squadron',
      category: 'game',
      order: 40,
      listed: false,
      name: 'Wraith Squadron',
      kind: `Fan Project`,
      origin: 'in-house',
      status: 'archived',
      roles: ['Solo Developer'],
      year: '2014',
      outcome: `Shelved at a playable demo, and still archived and maintained.`,
      brief: `A non-commercial fan remake of the classic “Star Wars: Rogue Squadron” flight experience, built in Unity with Creative Commons assets.`,
      body: [
        `A solo, non-commercial fan project in Unity, built to recapture the flight of Rogue Squadron II and III. It reached a playable demo: you pilot a starfighter and dogfight simple enemy ships, with controls that mirror the originals exactly.`,
        `**Under the hood:** every craft is assembled from the same interchangeable parts. A ship has a primary and a secondary weapon slot, and any weapon fits either one: a single laser cannon, or a linked system that chains any number of cannons and fires them in turn at a set rate, the way an X-Wing alternates its guns. Controls sit apart from the ship itself, so the player’s fighter and every other craft in the fleet share one flight model. That model runs in MGLT, the speed unit from Star Wars ship specs, with acceleration, braking, and a throttle that settles back to cruise, and turn assist banks the ship into its turns the way the originals did. When a hull gives out, the ship doesn’t just vanish: it loses control and tumbles out of the sky on its own momentum.`,
        `It was shelved in 2014 when other work took over, and when Disney’s purchase of Lucasfilm made the future of fan projects uncertain.`,
      ],
      skills: [
        "Unity",
        "Maya",
        "Fusion360"
      ],
      media: {
        featured: {
          type: 'clip',
          src: 'wraith-montage',
          poster: 'wraith-montage-poster',
          alt: 'One run through a rebel fleet, cut between four fighters and four skies: a Y-Wing in red and blue starlight, an X-Wing at midday, an A-Wing firing between frigates under an orange nebula, and a TIE Interceptor at dusk; each accelerates on the straights and brakes into the turns',
          caption: 'Classic starfighters, all flying on one shared flight model.',
        },
        gallery: [
          { type: 'clip', src: 'wraith-flight', poster: 'wraith-flight-poster', alt: 'Third-person view of a starfighter banking over jagged mountains under an orange nebula, firing red lasers as it flies toward a fleet of capital ships and transports and passes beneath a frigate', caption: 'Rogue Squadron’s controls, mirrored exactly.' },
          { type: 'clip', src: 'wraith-dogfight', poster: 'wraith-dogfight-poster', alt: 'An A-Wing closes on two TIE Interceptors over blue mountains, fires red lasers, and each Interceptor tumbles away after the hits', caption: 'Downed fighters don’t vanish: they lose control and tumble out of the sky.' },
          { type: 'clip', src: 'wraith-wingmen', poster: 'wraith-wingmen-poster', alt: 'An A-Wing and its wingmen fly in formation over orange-lit mountains, firing as they pass the transports and frigates of a rebel fleet', caption: 'Squadron-scale battles over a full rebel fleet.' },
          { type: 'image', src: 'wraith-glamour-awing', alt: 'An A-Wing banks hard over jagged orange-lit mountains, a rebel frigate in the distance', caption: 'Rogue Squadron flight, rebuilt from scratch in Unity.' },
          { type: 'image', src: 'wraith-glamour-xwing', alt: 'An X-Wing in profile against an orange nebula, a rebel frigate beyond', caption: 'Every craft built from the same interchangeable parts.' },
          { type: 'image', src: 'wraith-glamour-ywing', alt: 'A Y-Wing seen from above and behind, running at a Nebulon-B frigate over the mountains', caption: 'Primary and secondary weapon slots, and any weapon fits either one.' },
          { type: 'image', src: 'wraith-glamour-interceptor', alt: 'A TIE Interceptor nearly head-on against a blue sky and grey-blue mountains', caption: 'Enemies fly by the same rules you do.' },
          { type: 'image', src: 'wraith-glamour-squadron', alt: 'Three A-Wings in a V formation over the mountains, heading toward frigates and transports', caption: 'Speeds tuned in MGLT, straight from the Star Wars ship specs.' },
          { type: 'image', src: 'wraith-glamour-frigate', alt: 'Looking up at a Nebulon-B frigate against an orange nebula as an A-Wing sweeps past its hull', caption: 'Capital ships that set the scale of the fight.' },
          { type: 'image', src: 'wraith-glamour-dogfight', alt: 'An A-Wing on a TIE Interceptor’s tail over blue mountains, a red laser bolt between them', caption: 'Close-quarters dogfighting, throttle and all.' },
        ],
      },
      links: [
        {
          label: 'GitHub',
          target: 'https://github.com/Dirker27/WraithSquadron',
          icon: 'logo-github'
        }
      ],
      // The in-universe insignia, as the badge of a declared, non-commercial fan project.
      thumbnailImage: {
        source: 'wraith-logo',
        alt: 'Wraith Squadron insignia'
      },
      backgroundImage: {
        source: 'wraith-glamour-frigate',
        alt: 'Wraith Squadron'
      }
    }
  },


  chickMagnet: {
    projectDetails: {
      alias: 'chick-magnet',
      category: 'game',
      order: 50,
      name: 'Chick Magnet',
      kind: `PC Game`,
      origin: 'contributor',
      status: 'shipped',
      roles: ['Level Design', 'Gameplay Engineering', 'Team Management'],
      year: '2014',
      outcome: 'Project shipped and reviewed as a featured finalist at VT Game Expo 2014',
      brief: `2.5-D Action-platformer starring a lost little toy chick trying to escape a dilapidated toy factory using physics, magnetism, and wit.`,
      body: [
        `Chick Magnet is a 2.5-D platformer about a lost toy chick with a magnet in each hand. Each magnet aims on its own stick and flips between push and pull, and physics decides who moves: anything lighter than the chick gets shoved or dragged, while anything heavier, or bolted down, moves the chick instead. That one rule makes the magnets do everything. They clear blocks, haul the chick toward anchored objects, and launch it off a parked fire truck. Pull something small up close and it locks to the magnet, ready to carry and throw.`,
        `**Our part:** level design and gameplay engineering, including the Lego level and its destruction system. Every Lego wall knows its size in studs and how rigid that makes it. When a boulder, a toy, or the chick hits it hard enough, it breaks at the point of impact into loose bricks, and the sections on either side come away as tumbling debris. The level is built around it: an opening boulder smashes the first wall, the chick rams boulders through caution walls with its magnets, and a glass floor gives way under a bridge of minifigs to drop the chick down a shaft.`,
        `**Under the hood:** Unity, with every magnetic object deciding for itself how it answers a magnet, so a fire-truck ladder, a nail that sets off an avalanche, and an ordinary crate all share one system. Trigger zones retune the camera and the chick’s movement from area to area, so each set piece frames itself. Built by a student team over a four-month cycle, and a featured finalist at VT Game Expo 2014.`,
      ],
      media: {
        featured: {
          type: 'clip',
          src: 'cm-lego',
          poster: 'cm-lego-poster',
          alt: 'Chick Magnet’s Lego level: a boulder smashes through a red brick wall, boulders burst green walls into yellow bricks, a blue Lego structure shatters, the chick crashes through a green wall into a blue room, then a glass floor lined with minifigs collapses and the chick falls down a shaft through the bricks',
          caption: 'Fully destructible Lego that comes apart brick by brick, right down to the floor beneath you.',
        },
        gallery: [
          { type: 'clip', src: 'cm-magnets', poster: 'cm-magnets-poster', alt: 'The chick’s magnet beams push a metal trunk away, then turn red and pull it back; in a dark room, the chick lifts a dice cube overhead with its magnet and throws it up and out of the shot', caption: 'Two magnets. Push it, pull it, grab it, throw it.' },
          { type: 'clip', src: 'cm-launch', poster: 'cm-launch-poster', alt: 'The chick pushes against a fire truck with its magnets and slides backward, pulls itself back to the truck, then pushes down on it and launches into the air', caption: 'Can’t move it? Push off it and fly.' },
          { type: 'clip', src: 'cm-furby', poster: 'cm-furby-poster', alt: 'In a dark room, the chick walks up to a green Furby, which lights up with wide eyes; the chick turns, runs off the end of the shelf, and drops into the dark, leaving the Furby staring', caption: 'Some toys are better left in the dark.' },
          { type: 'clip', src: 'cm-troll', poster: 'cm-troll-poster', alt: 'A troll doll with cyan hair creeps toward the camera; the chick runs from it along a ledge and jumps a lava pit; the troll walks into the lava and climbs out the other side', caption: 'Lava won’t stop it. Run.' },
          { type: 'image', src: 'cm-still-minifigs', alt: 'The chick on a studded Lego floor with minifigs ahead', caption: 'A whole toy factory to escape, one playset at a time.' },
          { type: 'image', src: 'chick-magnet-flyer', alt: 'Chick Magnet flyer' },
        ],
      },
      skills: [
        "Unity",
        "Fusion360",
        "Maya",
        "Photoshop",
        "Reaper"
      ],
      links: [
        {
          label: 'GitHub',
          target: 'https://github.com/edeesis/Chick-Magnet',
          icon: 'logo-github'
        }
      ],
      thumbnailImage: {
        source: 'chick-magnet-logo',
        alt: 'Chick Magnet Logo'
      },
      backgroundImage: {
        source: 'chick-magnet-flyer',
        alt: 'Chick Magnet Flyer'
      }
    }
  },


  earlyGames: {
    projectDetails: {
      alias: 'early-games',
      category: 'game',
      order: 55,
      listed: false,
      name: 'Early Games and Custom Engines',
      initials: 'EG',
      kind: `Game Collection`,
      origin: 'in-house',
      status: 'archived',
      roles: ['Engine Programming', 'Game Design', 'Gameplay Engineering', 'Team Management'],
      year: '2010–2017',
      brief: `College and post-college games, most running on engines built from scratch in Python, Java, C++, and C#.`,
      body: [
        `Before the studio, the games came first. Most of these skip the off-the-shelf engine entirely: physics, game loops, input, rendering, and networking written by hand, in whatever language the platform called for.`,
        '- **Compound Chemistry** (2010, Pygame): a chemical-equation balancing game for students. Lead programmer in a team of three.',
        '- **Ground War** (2010, Pygame): four-player Stratego inside a home-built games browser (classic Stratego and checkers) with player accounts and a networking prototype.',
        '- **Nyan Cat Attack** (2011, Native Android): a custom Android game loop, with unit tests. Its tagline, “Nyan Cat’s demise, and the rise of Toaster Cat!”, is where the studio’s mascot began. Art and programming lead in a team of 3. In 2026 we ported it to modern Android and paid off that tagline with a bonus speed-run level, where Toaster Cat finally gives chase.',
        '- **Icarus** (2013, Python): steer a ship through 2D gravitational fields, on a custom physics and vector-math engine.',
        '- **Chess++** (2015, C and C++): networked chess in the terminal, planned in milestones from single-player to peer-to-peer.',
        '- **Xander’s Quest** (2016, Native Android): an Android game on a hand-rolled engine, with its own game model, actors, and input layer.',
        `None of these shipped commercially. They’re kept here as honest history: the habit of building the engine, not just the game, started here.`,
      ],
      skills: [
        "Python",
        "Java",
        "Android",
        "CPlusPlus",
        "CSharp",
        "Unity"
      ],
      media: {
        featured: { type: 'clip', src: 'eg-montage', poster: 'eg-montage-poster', alt: 'A montage of the early games: a four-player Ground War move on its cross-shaped board, a classic Stratego piece dragged onto a highlighted square, a Checkers move on a red and black board, Compound Chemistry balancing hydrogen and chlorine into “You win!”, and Icarus’s toaster-cat ship skimming the gravity wells of three planets', caption: 'Board games, a chemistry puzzle, and a gravity sim, every one on an engine we built ourselves.' },
        gallery: [
          { type: 'clip', src: 'eg-groundwar-midgame', poster: 'eg-groundwar-midgame-poster', alt: 'Ground War mid-game: all four armies have pushed into the center of the board, pieces revealed by earlier fights; over two rounds each player drags a piece forward, its legal moves shaded, and the board switches to the next player’s view', caption: 'Pass-and-play on one screen, with every legal move highlighted.' },
          { type: 'clip', src: 'eg-checkers', poster: 'eg-checkers-poster', alt: 'Checkers in the Games Browser: blue and red pieces trade diagonal moves across a red and black board, the highlighted piece moving each turn', caption: 'Classic checkers, a second game on the same home-built board engine.' },
          { type: 'clip', src: 'eg-chemistry-hcl', poster: 'eg-chemistry-hcl-poster', alt: 'Compound Chemistry: the player drags hydrogen and chlorine atom tiles into place to balance H₂ + Cl₂ into hydrogen chloride, and a “You win!” banner appears', caption: 'Balance the equation, atom by atom.' },
          { type: 'clip', src: 'eg-nyancat-toaster', poster: 'eg-nyancat-toaster-poster', alt: 'Nyan Cat Attack’s 2026 bonus level, a strip that follows the cat: Nyan Cat trails a rainbow up a staircase of platforms, down an island chain, and along upper and lower lanes as comets streak past, with Toaster Cat right behind it trailing a dark, glitching rainbow', caption: 'The rise of Toaster Cat: run, Nyan, run.' },
        ],
      },
      links: [
        {
          label: 'Compound Chemistry',
          target: 'https://github.com/Dirker27/CompoundChemistry',
          icon: 'logo-github'
        },
        {
          label: 'Ground War (Games Browser)',
          target: 'https://github.com/Dirker27/GamesBrowser',
          icon: 'logo-github'
        },
        {
          label: 'Icarus',
          target: 'https://github.com/Dirker27/Icarus',
          icon: 'logo-github'
        },
        {
          label: 'Nyan Cat Attack',
          target: 'https://github.com/Dirker27/NyanCatAttack',
          icon: 'logo-github'
        },
        {
          label: 'Xander’s Quest',
          target: 'https://github.com/Dirker27/XandersQuest',
          icon: 'logo-github'
        },
      ],
    }
  },


  npcUniverse: {
    projectDetails: {
      alias: 'npc-universe',
      category: 'game',
      order: 57,
      listed: false,
      name: 'NPC Universe',
      initials: 'NPC',
      kind: `PC Game`,
      origin: 'in-house',
      status: 'archived',
      roles: ['Architecture', 'RTS Controls', 'Level Design'],
      year: '2016–2017',
      outcome: `Mothballed in 2017, when both developers moved on to new jobs - AWS Game Technologies and Red Storm Entertainment, respectively..`,
      brief: `A two-developer passion project: a large-scale world and economic simulation where towns build themselves and every NPC works a job, with RTS controls on top.`,
      body: [
        `NPC Universe was a passion project between two developers: a world and economic simulation meant to run whole regions, where every NPC has a job, a home town, and a place in the supply chain. Towns raise their own buildings and fill them with workers. Farmers, miners, millers, and smiths turn raw goods into finished ones, and traders run between towns chasing the best margin each market will pay.`,
        `**Under the hood:** the simulation runs on “oracles”, one per job, that decide each worker’s next move from the state of its town: what’s in stock, which recipes its buildings support, and which positions are open. Characters and buildings could persist to a PostgreSQL database. The architecture we were building toward was a hybrid stack: the Universe in C++, running as an independent process, with Unity as its 3D front end over an interop layer. The prototype shown here runs the simulation in C# inside Unity.`,
        `On top of the simulation sat the player: RTS controls on Elchea, a hand-sculpted map, with an edge-scrolling camera, click-to-select, and right-click orders that send soldiers across the terrain on navigation meshes. The long game was a strategy title where the economy *is* the game: an “oops, all economy” take on Civilization.`,
      ],
      skills: [
        "Unity",
        "CSharp"
      ],
      links: [
        {
          label: 'GitHub',
          target: 'https://github.com/Dirker27/NPCUniverse',
          icon: 'logo-github'
        }
      ],
      media: {
        featured: { type: 'clip', src: 'npcu-ledger', poster: 'npcu-ledger-poster', alt: 'A time-lapse from above of NPC Universe’s region: five towns of white cylinder buildings appear one after another and fill with capsule-shaped workers, tinted by job for the capture, while a ledger panel counts towns, buildings, and NPCs, tabulates each town’s population and goods, lists goods in store by type, and breaks down the job mix', caption: 'Every town keeps its books: people, jobs, and goods, live.' },
        gallery: [
          { type: 'clip', src: 'npcu-rts', poster: 'npcu-rts-poster', alt: 'NPC Universe’s RTS controls: from a top-down camera over a walled fort, a cursor clicks one grunt at a time and right-clicks a spot to the north; a green marker drops, each grunt walks to it, and the camera scrolls north after them as the HUD lists the selected unit and its objective', caption: 'Click to select, right-click to deploy, and push the screen’s edge to scroll.' },
          { type: 'image', src: 'npcu-grunt', alt: 'A camouflaged grunt stands in its cyan selection ring on a tiled plain, two more soldiers behind it and jagged peaks beyond the fort wall' },
          { type: 'clip', src: 'npcu-town', poster: 'npcu-town-poster', alt: 'A slow pass through one NPC Universe town: dozens of capsule-shaped workers, tinted by job for the capture, commute between white cylinder buildings around the town center', caption: 'Every worker has a job, a workplace, and somewhere to be.' },
        ],
      },
    }
  },


  umaAlbum: {
    projectDetails: {
      alias: 'uma-album',
      category: 'media',
      order: 130,
      name: '“Of Man and Nature” — Ugliest Man Alive',
      kind: `Album`,
      origin: 'in-house',
      status: 'live',
      roles: ['Recording', 'Mixing'],
      year: '2017',
      outcome: 'Released to streaming platforms.',
      brief: `Debut LP from Seattle post-metal act Ugliest Man Alive [U.M.A].`,
      body: [
        `Recorded and mixed end to end across four locations, using experimental recording techniques and dense layered overdubs over an iterative creative process.`,
      ],
      skills: [
        "Reaper"
      ],
      links: [
        {
          label: 'Official Website',
          target: 'https://ugliest-man-alive.com',
          icon: 'uma-logo'
        },
        {
          label: 'Bandcamp',
          target: 'https://ugliest-man-alive.bandcamp.com/',
          icon: 'logo-bandcamp'
        },
        {
          label: 'Soundcloud',
          target: 'https://soundcloud.com/ugliest-man-alive/sets/of-man-and-nature',
          icon: 'logo-soundcloud'
        }
      ],
      thumbnailImage: {
        source: 'uma-logo',
        alt: 'UMA Logo'
      },
      backgroundImage: {
        source: 'tcstudio-background',
        alt: 'UMA Band'
      },
      media: {
        featured: {
          type: 'embed',
          provider: 'bandcamp',
          id: '270867931',
          title: 'Of Man and Nature',
          tracks: 7,
          poster: 'uma-logo',
        },
        gallery: [
          { type: 'image', src: 'studio-drum-room', alt: 'The drum room in our studio' },
          { type: 'image', src: 'studio-drum-mics', alt: 'A mic’d drum kit in our studio' },
          { type: 'image', src: 'studio-keys', alt: 'Keyboards and the control desk in our studio' },
        ],
      },
    }
  },


  moxel: {
    projectDetails: {
      alias: 'moxel',
      category: 'proto',
      order: 140,
      name: 'Moxel Hooks',
      kind: 'Prototype',
      origin: 'client',
      status: 'shipped',
      roles: ['3D Modeling', 'Manufacturing'],
      year: '2022',
      outcome: 'Prototypes and manufacturing files delivered, plus a 100-unit trial run for the client’s friends and family.',
      brief: `Ergonomic, custom-shaped crochet hooks for avid fiber artists, comfortable through long sessions.`,
      body: [
        `Our client, and the people the hooks were for, are avid fiber artists who spend hours at a time with a hook in hand. We designed a custom shape that stays comfortable through those long sessions, then finished it with a light Plasti Dip coating for grip, so the hand doesn’t have to clench to hold on.`,
        `We modeled, sliced, and printed the prototypes, and delivered the manufacturing files with them. The client didn’t move on to large-scale manufacturing, but we produced a 100-unit trial run for their friends and family.`,
      ],
      skills: [
        "FDM",
        "Cura",
        "Fusion360"
      ],
      links: [
      ],
      thumbnailImage: {
        source: 'moxel-logo',
        alt: 'Moxel Logo'
      },
      backgroundImage: {
        source: 'moxel-background',
        alt: 'Moxel Hook Slicing Render'
      },
      media: {
        featured: {
          type: 'image',
          src: 'moxel-detail',
          alt: 'Two green custom crochet hooks embossed “Gloria” on a stand',
        },
        gallery: [
          { type: 'image', src: 'moxel-background', alt: 'Moxel hook slicing render' },
        ],
      },
    }
  },


  lizzie: {
    projectDetails: {
      alias: 'lizzie',
      category: 'proto',
      order: 150,
      featured: true,
      name: '“The Lizzie”',
      initials: "2077",
      kind: `Prototype`,
      origin: 'client',
      status: 'shipped',
      roles: ['Custom Modeling', 'Manufacturing', 'Assembly'],
      year: '2021',
      outcome: 'Delivered the cosplay build plus a half-dozen custom variants, each compatible with Worker™ magazines and darts.',
      brief: `A commissioned, fully working Nerf™ blaster for a Cyberpunk 2077 cosplay, compatible with Worker™ magazines and darts.`,
      body: [
        `A client assembling a Cyberpunk 2077 cosplay wanted Lizzie’s pistol, and wanted it to actually fire. We built it from [Ehdrien’s Gecko](https://github.com/Ehdrien/Gecko-blaster-instructions), a 3D-printable design that only works with real hardware: springs, aluminum, brass, and steel tubing, machine screws, heat-set inserts, rubber seals, and the right lubrication.`,
        `Alongside the main build, we delivered a half-dozen variants with our own custom 3D modeling: Picatinny rails and M-LOK slots for real-world attachments, plus custom colors and personal touches.`,
        `The design is Ehdrien’s, and the review video in the gallery is Out of Darts’, not ours: it puts the Gecko through its paces.`,
      ],
      skills: [
        "FDM",
        "Cura",
        "Fusion360"
      ],
      backgroundImage: {
        source: 'lizzie-profile',
        alt: 'Lizzie Assembly'
      },
      media: {
        featured: {
          type: 'image',
          src: 'lizzie-tinker-1600',
          alt: 'Lizzie Model',
        },
        gallery: [
          { type: 'image', src: 'lizzie-variants', alt: 'Custom blaster variants in teal, black, and pink, side by side', caption: 'A few of the custom variants.' },
          { type: 'image', src: 'lizzie-variant-black', alt: 'A black-and-white variant with a red-dot optic' },
          { type: 'image', src: 'lizzie-alt', alt: 'Fitting the blaster’s magazine on the workbench' },
          { type: 'image', src: 'lizzie-profile', alt: 'Lizzie assembly' },
          {
            type: 'embed',
            provider: 'youtube',
            id: 'keaaMZi7fcs',
            title: 'REVIEW: Gecko by Ehdrien',
            poster: 'lizzie-tinker-1600',
            caption: 'Review by Out of Darts, not ToasterCat media. The Gecko design is by Ehdrien.',
          },
        ],
      },
    }
  },


  tcPrints: {
    projectDetails: {
      alias: 'rail-bridges',
      category: 'proto',
      order: 160,
      name: 'Custom-Fit Rail Bridges',
      kind: `Product`,
      origin: 'in-house',
      status: 'shipped',
      roles: ['Product Design', 'Manufacturing', 'Sales'],
      year: '2022',
      outcome: '400 units sold in the first year, with 98% positive customer reviews.',
      brief: `3D-printed rail bridges that add a red-dot optic mount to handguns built without one, including a made-to-measure option.`,
      body: [
        `Plenty of popular handguns, especially older and classic models, have no way to mount a red-dot optic or other attachments. Our rail bridges add a Picatinny rail to them, so a standard optic can be fitted.`,
        `We released two fixed designs, for the Sig Sauer P226/P320 family and the classic M1911, each registered with its own retail GTIN. Behind them sat a parametric model: customers sent in a few measurements, and we produced a bridge fitted to their handgun, covering nearly any standard semi-automatic pistol.`,
        `A third design, for Glock models with M-LOK slots, was ready for production when we stopped selling. The product line was taking time away from our other projects, so we retired it while its reviews were still strong.`,
      ],
      skills: [
        "FDM",
        "Cura",
        "Fusion360",
        "Shopify",
        "Ebay",
        "Amazon"
      ],
      thumbnailImage: {
        source: 'tc-logo',
        alt: 'TC Logo'
      },
      cardImage: {
        source: 'rail-bridges-colors-800',
        alt: 'Rail bridges in black, olive drab, and grey'
      },
      backgroundImage: {
        source: 'tcprint-background',
        alt: 'TC Print Shop'
      },
      media: {
        featured: {
          type: 'clip',
          src: 'tcprint-product',
          poster: 'tcprint-product-poster',
          alt: 'Rail bridge, rotating product view',
        },
        gallery: [
          { type: 'clip', src: 'rail-bridges-printing', poster: 'rail-bridges-printing-poster', alt: 'A rail bridge printing on the bed of a Creality printer' },
          { type: 'image', src: 'rail-bridges-fresh-print', alt: 'An olive-drab rail bridge fresh off the print bed' },
          { type: 'image', src: 'rail-bridges-mounted-od', alt: 'An olive-drab rail bridge carrying a red-dot optic on a pistol' },
          { type: 'image', src: 'rail-bridges-mounted-grey', alt: 'A grey rail bridge carrying a red-dot optic on an airsoft pistol' },
          { type: 'image', src: 'rail-bridges-lineup', alt: 'Rail bridges in grey and black, lined up' },
        ],
      },
    }
  }
};

/* --------------------------------------------------------------------------
 * Lookups. Pages should ask these rather than hard-code project keys, so
 * adding a project is a data change only.
 * ------------------------------------------------------------------------*/

/**
 * A service we sell, and the /portfolio section that proves it. Reads like a
 * resume entry: the pitch, the best piece of work (flagship), the rest of
 * the evidence, then the ask (cta).
 */
export interface CategoryInfo {
  key: ProjectCategory;
  /** Plain-language name: section title, jump-bar label and the #tag. */
  label: string;
  /** Section id on /portfolio (/portfolio#websites). */
  anchor: string;
  /** One line: what you'd hire us for. */
  pitch: string;
  /** Alias of the project shown large as this service's best proof. */
  flagship: string;
  /** Primary call-to-action label closing the section (goes to /contact). */
  cta: string;
  /** Optional nod to NDA / unshipped work, so quiet periods read as
   *  discretion rather than gaps. */
  confidentialNote?: string;
}

/**
 * Services in display order: games lead, as our most active line of work.
 */
export const PROJECT_CATEGORIES: CategoryInfo[] = [
  {
    key: 'game',
    label: 'Games',
    anchor: 'games',
    pitch: 'Whole titles, or the pieces your team needs: systems, tools, levels, and art.',
    flagship: 'blackout-punk',
    cta: 'Bring us your game',
    confidentialNote: 'Most of our game experience lives inside other studios’ titles, or behind an NDA. Ask us what we can share.',
  },
  {
    key: 'web',
    label: 'Websites',
    anchor: 'websites',
    pitch: 'Fast, custom sites built lean and cheaper than Squarespace.',
    flagship: 'crude-mirror',
    cta: 'Build a website',
    confidentialNote: 'We’ve built far more sites than we can show here; most are under NDA. Ask us about them.',
  },
  {
    key: 'media',
    label: 'Digital Media',
    anchor: 'media',
    pitch: 'Recording and mixing, plus the flyers, banners, and artwork that fill a room, proven at our own shows.',
    flagship: 'outside-agitators',
    cta: 'Start a media project',
  },
  {
    key: 'proto',
    label: 'Prototyping',
    anchor: 'prototyping',
    pitch: 'From napkin sketch to a part in your hand: modeling, printing, and iterating.',
    flagship: 'moxel',
    cta: 'Start a prototype',
    confidentialNote: 'More parts and products made under NDA. Ask us about them.',
  },
  {
    key: 'consult',
    label: 'Consulting',
    anchor: 'consulting',
    pitch: 'Technical research and architecture before you commit to building. Sometimes the most valuable outcome is a confident “not yet”.',
    flagship: 'clicktune',
    cta: 'Book a consultation',
    confidentialNote: 'More engagements we can’t name publicly. Ask us about them.',
  },
];

/** Every project, sorted by `order`. */
export const PROJECT_LIST: Project[] = Object.values(PROJECTS).sort(
  (a, b) => a.projectDetails.order - b.projectDetails.order
);

/** Listed unless explicitly `listed: false` (see ProjectDetails.listed). */
export const isListed = (p: Project) => p.projectDetails.listed !== false;

/** The year the studio became an LLC; work that ended before it is "early work". */
export const STUDIO_FOUNDED = 2020;

/** Finished before the studio existed: no "Present", and every year before 2020. */
export function isEarlyWork(p: Project): boolean {
  const year = p.projectDetails.year ?? '';
  const years = (year.match(/\d{4}/g) ?? []).map(Number);
  return !/present/i.test(year) && years.length > 0 && Math.max(...years) < STUDIO_FOUNDED;
}

export function projectsInCategory(category: ProjectCategory): Project[] {
  return PROJECT_LIST.filter((p) => p.projectDetails.category === category && isListed(p));
}

/**
 * A service section's evidence: its flagship, the rest of the current work,
 * then early work (pre-studio), each in order. Unlisted projects never appear.
 */
export function sectionProjects(category: CategoryInfo): { flagship?: Project; rest: Project[]; early: Project[] } {
  const all = projectsInCategory(category.key);
  const flagship = all.find((p) => p.projectDetails.alias === category.flagship);
  const others = all.filter((p) => p !== flagship);
  return { flagship, rest: others.filter((p) => !isEarlyWork(p)), early: others.filter(isEarlyWork) };
}

/**
 * The origin #tag to show, if any. `in-house` is hidden on current work (it
 * "deflates our exhibition") but kept on early work, which really was made
 * for ourselves. `client` and `contributor` always show.
 */
export function shownOrigin(d: ProjectDetails): ProjectOrigin | undefined {
  return d.origin === 'in-house' && !isEarlyWork({ projectDetails: d }) ? undefined : d.origin;
}

/** A project's testimonials as the site should show them: placeholders only in dev builds. */
export function visibleTestimonials(d: ProjectDetails, dev: boolean = import.meta.env.DEV): Testimonial[] {
  return (d.testimonials ?? []).filter((t) => dev || !t.placeholder);
}

/** The homepage band: every visible testimonial from a listed project, in project order. */
export function homepageTestimonials(dev: boolean = import.meta.env.DEV): { testimonial: Testimonial; project: Project }[] {
  return PROJECT_LIST.filter(isListed).flatMap((project) =>
    visibleTestimonials(project.projectDetails, dev).map((testimonial) => ({ testimonial, project }))
  );
}

/** Homepage selection: listed projects flagged `featured`, in `order`. */
export const FEATURED_PROJECTS: Project[] = PROJECT_LIST.filter((p) => p.projectDetails.featured && isListed(p));

/** The /portfolio Archive: unlisted projects, whose pages still load. */
export const ARCHIVED_PROJECTS: Project[] = PROJECT_LIST.filter((p) => !isListed(p));

/** Display label for a category key (also drives the #tag). */
export function categoryLabel(category: ProjectCategory): string {
  return PROJECT_CATEGORIES.find((c) => c.key === category)?.label ?? category;
}

export function getProjectByAlias(alias: string): Project | undefined {
  return PROJECT_LIST.find((p) => p.projectDetails.alias === alias);
}

export default PROJECTS;
