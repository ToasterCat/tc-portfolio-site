import { Project, ProjectCategory, ProjectDetails, ProjectOrigin } from './types/project.model';

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
      role: 'Developer & Publishing',
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
        `**Where it stands:** the prototype was finished in late 2025, and playtests run from December through March. A small team of dedicated contractors covers level design, audio design, UI/UX, user-study proctoring, narrative, and character design. Sign up for the playtest at [blackout-punk.com](https://blackout-punk.com).`,
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
          { type: 'image', src: 'blackout-punk-hallway', alt: 'A red-team soldier holding a corner while the squad advances', width: 1920, height: 799 },
          { type: 'image', src: 'blackout-punk-guns-up', alt: 'Over-the-shoulder view of a soldier aiming a rifle', width: 2335, height: 1136 },
          { type: 'image', src: 'blackout-punk-background', alt: 'The emissive grid environment', width: 2887, height: 1176 },
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
      kind: `Client Consultation`,
      origin: 'client',
      status: 'delivered',
      role: 'Back-End Architecture Design, Research, and Technical Advisory',
      year: '2025',
      outcome: 'Patent granted: US 12,671,666 includes our engineering flow diagrams for the back-end service ClickTune chose to build.',
      brief: `Technical research and back-end design for shareable musical “GIFs”, now part of a granted US patent.`,
      body: [
        `ClickTune came to us with an idea for shareable musical “GIFs”: short audio clips attached to text messages.`,
        `The research came first: could a song clip ride along in a text at all? We measured MP3s against GIFs, mapped what data and payloads SMS, MMS, and RCS protocols can support, and tested how existing platforms actually process audio files and content-rich links.`,
        `From there we designed a shared foundation (clip ingestion, lookup, and streaming) and three distinct approaches built on top of it, each with its own back-end design. Alongside them came rough development timelines, team requirements, and infrastructure costs modeled from a million to four billion requests a day.`,
        `ClickTune pursued Option A, and our engineering diagrams for its back-end service became part of the granted patent.`,
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
          width: 1600,
          height: 1148,
        },
        gallery: [
          // Our delivered diagrams first (the patent story), then research as an appendix.
          // The research pages are generic: public AWS pricing math and public messaging-app behaviour,
          // nothing from ClickTune's business, so showing them stays within the handoff terms.
          { type: 'image', src: 'clicktune-foundation', alt: 'Architecture diagram: clip ingestion workflow, clip database, streaming service with caching CDN, and lookup service between sender and receiver', caption: 'The foundation every option shared: clip ingestion, lookup, and streaming.', width: 1600, height: 1187 },
          { type: 'image', src: 'clicktune-option-a', alt: 'Architecture diagram: the foundation plus user registration, identity, and preference services, an ad network, and mobile web pages for recipients', caption: 'Option A, the approach ClickTune built: the foundation plus registration, identity, preferences, and a mobile web fallback.', width: 1600, height: 1250 },
          { type: 'image', src: 'clicktune-cost-model', alt: 'Cost tables for S3 and DynamoDB throughput at one million to four billion requests a day', caption: 'Research: AWS storage costs modeled from a million to four billion requests a day; generic scaling math, not client data (circa Feb 2025).', width: 1331, height: 990 },
          { type: 'image', src: 'clicktune-file-size', alt: 'Research notes comparing MP3 and GIF file sizes, with sample file listings and a flaming Elmo GIF', caption: 'Research: how big is a song clip next to a GIF? About the same.', width: 1331, height: 1491 },
          { type: 'image', src: 'clicktune-messaging-test', alt: 'Three phone screenshots comparing how Android Messages, WhatsApp, and Signal display audio files and music links', caption: 'Research: how Android Messages, WhatsApp, and Signal actually show an audio file or link.', width: 1331, height: 1177 },
        ],
      },
    }
  },


  jukeDec: {
    projectDetails: {
      alias: 'jukedec',
      category: 'consult',
      order: 110,
      name: '“JukeDec” — Frigging Glorious LLC',
      kind: `Research & Development`,
      origin: 'client',
      status: 'delivered',
      role: 'Research and Technical Product Design: Back-End and App Integration',
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
          title: "Web Developer, Open Sourcerer",
          org: "friggingglorio.us"
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
          width: 1185,
          height: 701,
        },
        // The deliverables first; one sketch at the back as a nod to how it started.
        gallery: [
          { type: 'image', src: 'jukedec-entities', alt: 'Entity diagram: artist, collection, track, offer, transaction, entitlement, library, and user', caption: 'The data model.', width: 862, height: 522 },
          { type: 'image', src: 'jukedec-sketch-context', alt: 'Hand-drawn sketch of the whole system, split into control plane and data plane', caption: 'Where it started: the first pass on a legal pad.', width: 1400, height: 1735 },
        ],
      },
      links: [ ],
    }
  },


  liveShows: {
    projectDetails: {
      alias: 'live-shows',
      category: 'media',
      order: 115,
      name: 'Live Shows and Events',
      kind: `Show Promotion`,
      origin: 'in-house',
      status: 'live',
      role: 'Booking, Promotion, Flyer Design, and Production',
      year: '2019–Present',
      outcome: 'Seven shows produced since 2019, including a sold-out TOOL release party and a benefit that raised $1,894 for Point of Pride and the Washington Immigrant Solidarity Network.',
      brief: `Flyers, banners, and promotion for our own live shows in Seattle, plus the booking and production behind them.`,
      body: [
        `We book, promote, and produce live shows for our own bands, [Octopus Attacks Shark!!](https://www.octopus-attacks-shark.com/) and [Ugliest Man Alive](https://ugliest-man-alive.com/): building the lineup, designing the flyers and banners, selling the tickets, and running the night itself.`,
        `Since 2019 that’s meant seven shows across four venues, from TOOL tribute nights at Lucky Liquor to a sold-out release party at The Funhouse and a charity benefit at the Central Saloon.`,
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
      links: [
        {
          label: 'Full Show History',
          target: 'https://www.octopus-attacks-shark.com/pages/shows.html',
          icon: 'oas-logo'
        }
      ],
      cardImage: {
        source: 'show-fear-inoculum-800',
        alt: 'Octopus Attacks Shark!! on a red-lit stage at The Funhouse'
      },
      thumbnailImage: {
        source: 'oas-logo',
        alt: 'OAS Band Logo'
      },
      backgroundImage: {
        source: 'show-fear-inoculum',
        alt: 'Octopus Attacks Shark!! on a red-lit stage at The Funhouse'
      },
      media: {
        featured: {
          type: 'image',
          src: 'show-fear-inoculum',
          alt: 'Octopus Attacks Shark!! on a red-lit stage at The Funhouse',
          caption: '“Fear Inoculum” Unofficial Release Party, The Funhouse, 2019. Sold out.',
          width: 1600,
          height: 1200,
        },
        gallery: [
          { type: 'image', src: 'show-funhouse-flyer', alt: 'Flyer for Octopus Attacks Shark!!, Anthrocene, and Telomyras at The Funhouse', caption: 'Flyer, The Funhouse, July 2022.', width: 1280, height: 720 },
          { type: 'image', src: 'show-gaping-lotus-flyer', alt: 'Flyer for a TOOL tribute night at Lucky Liquor with Grand Moff and Ugliest Man Alive', caption: 'Flyer, Lucky Liquor, 2019.', width: 1600, height: 2635 },
          { type: 'image', src: 'show-solidarity-flyer', alt: 'Flyer for Songs for Solidarity, a benefit for Point of Pride and the Washington Immigrant Solidarity Network', caption: 'Flyer, Songs for Solidarity benefit, Central Saloon, 2025.', width: 1600, height: 2000 },
          // Shows we played and helped promote, on other promoters' bills.
          { type: 'image', src: 'show-rumours-marquee', alt: 'Roadside marquee listing The Maxwells, Tremor Cats, and Ugliest Man Alive', caption: 'Marquee, Rumours, Spanaway, August 2021.', width: 1440, height: 810 },
          { type: 'image', src: 'show-wacken-2022', alt: 'Octopus Attacks Shark!! on stage at The Funhouse', caption: 'Wacken Open Air Metal Battle, The Funhouse, February 2022.', width: 1600, height: 900 },
          { type: 'image', src: 'show-model-snake', alt: 'Octopus Attacks Shark!! on stage at Jules Maes Saloon', caption: '“Model Snake”, Jules Maes Saloon, October 2022.', width: 1600, height: 900 },
          { type: 'image', src: 'show-i90-fiasco-flyer', alt: 'Flyer for I-90 Fiasco with Panic Grass and Octopus Attacks Shark!! at Jules Maes Saloon', caption: 'Flyer, “I-90 Fiasco”, Jules Maes Saloon, August 2025.', width: 1294, height: 2000 },
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
      role: 'Additional Recording and Mixing',
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
          { type: 'image', src: 'studio-mics', alt: 'A vocal microphone with a pop filter in our studio', width: 1600, height: 1067 },
          { type: 'image', src: 'studio-guitar-amp', alt: 'Miked guitar amplifiers in our studio', width: 1600, height: 1067 },
          { type: 'image', src: 'oas-site-title', alt: 'Octopus Attacks Shark!! title art', width: 417, height: 500 },
        ],
      },
    }
  },


  fossArmory: {
    projectDetails: {
      alias: 'foss-armory',
      category: 'game',
      order: 20,
      listed: false,
      name: 'FOSS Armory',
      kind: `PC Game`,
      origin: 'contributor',
      status: 'archived',
      role: 'Research, 3D Modeling, and Gameplay Integration',
      year: '2022',
      outcome: 'Project shelved by client pending additional legal review.',
      brief: `Third-person shooter and showcase for the open-source works of the PY2A community.`,
      body: [
        `Inspired by the Defense Distributed movement, the “Free and Open-Source Armory” serves as an interactive showroom for the creative works of DIY armorers JStark1809, IvanTTroll, AreWeCoolYet?, Booligan Airsoft, and the ever-growing list of open-source PY2A contributors. It provides a safe and free environment for their works to be compared, analyzed, and tested without navigating the hassles of local restrictions and extensive expensive builds. Developed and tested in-house at ToasterCat Studios and released under the Creative Commons license for all to consume and re-distribute.`,
      ],
      skills: [
        "Unity",
        "Fusion360"
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
          type: 'image',
          src: 'foss-background',
          alt: 'FOSS Armory',
          width: 1471,
          height: 983,
        },
        gallery: [
          { type: 'image', src: 'foss-showcase', alt: 'A blaster on display in the FOSS Armory showroom', width: 1600, height: 970 },
          { type: 'image', src: 'foss-target-range', alt: 'The FOSS Armory target range', width: 1471, height: 983 },
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
      role: 'Cloud Services and Business Infrastructure',
      year: '2021',
      outcome: 'Site launched in 2021 to produce annual user growth and consistent AdSense impression revenue.',
      brief: `“A Poorly Edited Editorial”: a multimedia pop-culture blog powered by an SEO-driven ad revenue model.`,
      body: [
        `“Crude Mirror Media” was launched by ToasterCat Studios in April 2021 alongside a complete suite of analytics and revenue tracking tools.`,
      ],
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
          src: 'crude-mirror-site-screenshot',
          alt: 'Crude-Mirror Site',
          width: 761,
          height: 505,
        },
        gallery: [
          { type: 'image', src: 'crude-mirror-full', alt: 'Crude Mirror Media shattered-glass banner', width: 874, height: 437 },
          { type: 'image', src: 'crude-mirror-background', alt: 'Crude Mirror Media banner', width: 1024, height: 640 },
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
      role: 'End-to-End Website Design and Development',
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
          width: 851,
          height: 512,
        },
        gallery: [
          { type: 'image', src: 'strongarm-background', alt: 'Strongarm site hero image', width: 1891, height: 900 },
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
      role: 'Front-End Design and Hosting',
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
          src: 'oas-site-screenshot',
          alt: 'OAS Site',
          width: 755,
          height: 512,
        },
        gallery: [
          { type: 'image', src: 'oas-background', alt: 'Octopus Attacks Shark!! on stage', width: 1600, height: 900 },
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
      role: 'Front-End Design and Hosting',
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
          type: 'clip',
          src: 'uma-machine-god',
          poster: 'uma-machine-god-poster',
          alt: 'UMA MachineGod//Suicide',
          width: 720,
          height: 405,
        },
        gallery: [
          { type: 'image', src: 'uma-site-screenshot', alt: 'The Ugliest Man Alive website', width: 1041, height: 1035 },
          { type: 'image', src: 'uma-baby-reverse', alt: 'Ugliest Man Alive press art', width: 1600, height: 754 },
          { type: 'image', src: 'uma-nine-star', alt: 'The Ugliest Man Alive nine-pointed star mark', width: 1600, height: 1574 },
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
      role: 'Custom Graphics and User Haptics Engine. Additional custom audio and soundtrack recording.',
      year: '2013',
      outcome: 'Project shipped and available for purchase on Amazon AppStore.',
      brief: `A rogue-like bullet hell game for Android using custom motion controls and procedural enemy generation.`,
      body: [
        `A mobile game developed entirely in native Android, using custom rendering and peripheral interpolation. All audio and multimedia assets generated in-house. Featured finalist at Irvine Mobile Game Jam 2013.`,
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
          type: 'image',
          src: 'pixhell-flyer',
          alt: 'PixHell',
          width: 1024,
          height: 500,
        },
        gallery: [
          { type: 'image', src: 'pixhell-screenshot', alt: 'PixHell gameplay on a phone', width: 1198, height: 1704 },
          { type: 'image', src: 'pixhell-screenshot-2', alt: 'PixHell gameplay with enemies attacking', width: 1200, height: 1920 },
        ],
      },
    }
  },


  wraithSquadron: {
    projectDetails: {
      alias: 'wraith-squadron',
      category: 'game',
      order: 40,
      name: 'Wraith Squadron',
      kind: `Fan Project`,
      origin: 'in-house',
      status: 'archived',
      role: 'Solo Developer',
      year: '2014',
      outcome: `Shelved at a playable demo. Still archived and maintained, with a partial port to Unreal Engine as a back-burner project.`,
      brief: `A non-commercial fan remake of the classic “Star Wars: Rogue Squadron” flight experience, built with modern engines and Creative Commons assets.`,
      body: [
        `A solo, non-commercial fan project in Unity, built to recapture the flight of Rogue Squadron II and III. It reached a playable demo: you pilot a starfighter and dogfight simple enemy ships, with controls that mirror the originals exactly.`,
        `It was shelved in 2014 when other work took over, and when Disney’s purchase of Lucasfilm made the future of fan projects uncertain.`,
      ],
      skills: [
        "Unity",
        "Unreal",
        "Maya",
        "Fusion360"
      ],
      media: {
        gallery: [
          { type: 'image', src: 'wraith-background', alt: 'Third-person view of a starfighter flying low over a canyon toward enemy ships', caption: 'Test flight in the playable demo.', width: 1684, height: 1040 },
          { type: 'image', src: 'wraith-flight-alt', alt: 'A starfighter lining up its targeting reticle on a squadron of enemy ships', caption: 'Lining up a pass on enemy fighters.', width: 1571, height: 1054 },
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
        source: 'wraith-background',
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
      role: 'Level Design and Gameplay Engineering',
      year: '2014',
      outcome: 'Project shipped and reviewed as a featured finalist at VT Game Expo 2014',
      brief: `2.5-D Action-platformer starring a lost little toy chick trying to escape a dilapidated toy factory using physics, magnetism, and wit.`,
      body: [
        `Developed by a team of 9 over a rapid development cycle of 4 months. Implemented using custom physics, rigging deformations, and destructible environment assets. Featured finalist at VT Game Expo 2014.`,
      ],
      media: {
        gallery: [
          { type: 'image', src: 'chick-magnet-flyer', alt: 'Chick Magnet flyer', width: 450, height: 600 },
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


  umaAlbum: {
    projectDetails: {
      alias: 'uma-album',
      category: 'media',
      order: 130,
      name: '“Of Man and Nature” — Ugliest Man Alive',
      kind: `Album`,
      origin: 'in-house',
      status: 'live',
      role: 'Recording and Mixing',
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
          { type: 'clip', src: 'uma-redacted', poster: 'uma-redacted-poster', alt: 'UMA [redacted]', width: 1080, height: 608 },
          { type: 'image', src: 'studio-drum-mics', alt: 'A miked drum kit in our studio', width: 1600, height: 1067 },
          { type: 'image', src: 'studio-keys', alt: 'Keyboards and the control desk in our studio', width: 1600, height: 1067 },
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
      role: '3D Modeling and Industrial Manufacturing',
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
          width: 1600,
          height: 1200,
        },
        gallery: [
          { type: 'image', src: 'moxel-background', alt: 'Moxel hook slicing render', width: 1200, height: 900 },
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
      kind: `Prototype`,
      origin: 'client',
      status: 'shipped',
      role: 'Custom Modeling and Industrial Manufacturing and Assembly',
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
          width: 1600,
          height: 1067,
        },
        gallery: [
          { type: 'image', src: 'lizzie-alt', alt: 'Fitting the blaster’s magazine on the workbench', width: 1600, height: 1067 },
          { type: 'image', src: 'lizzie-profile', alt: 'Lizzie assembly', width: 1350, height: 900 },
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
      role: 'End-to-End Product Design, Manufacturing, and Sales',
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
          width: 1600,
          height: 1066,
        },
        gallery: [
          { type: 'image', src: 'tcprint-printer-angle', alt: 'A rail bridge fresh off the print bed', width: 1600, height: 1067 },
          { type: 'image', src: 'tcprint-printer', alt: 'A rail bridge printing', width: 1600, height: 1067 },
          { type: 'image', src: 'tcprint-shop', alt: 'The print shop workbench', width: 1600, height: 1067 },
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
 * Old project aliases -> current ones. Renamed projects keep their old
 * /portfolio/<alias> links working through a redirect (see App).
 */
export const RENAMED_ALIASES: Record<string, string> = {
  'tc-print-pistol': 'rail-bridges',
};

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
  /** Old anchors (/projects#proj-*, renamed sections), redirected to `anchor`. */
  legacyAnchors: string[];
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
    legacyAnchors: ['proj-game'],
    pitch: 'Whole titles, or the pieces your team needs: systems, tools, levels, and art.',
    flagship: 'blackout-punk',
    cta: 'Bring us your game',
    confidentialNote: 'Most of our game experience lives inside other studios’ titles, or behind an NDA. Ask us what we can share.',
  },
  {
    key: 'web',
    label: 'Websites',
    anchor: 'websites',
    legacyAnchors: ['proj-web'],
    pitch: 'Fast, custom sites built lean and cheaper than Squarespace.',
    flagship: 'oas-website',
    cta: 'Build a website',
    confidentialNote: 'We’ve built far more sites than we can show here; most are under NDA. Ask us about them.',
  },
  {
    key: 'media',
    label: 'Digital Media',
    anchor: 'media',
    // This section was "Audio" until 2026-10.
    legacyAnchors: ['proj-audio', 'audio'],
    pitch: 'Recording and mixing, plus the flyers, banners, and artwork that fill a room, proven at our own shows.',
    flagship: 'outside-agitators',
    cta: 'Start a media project',
  },
  {
    key: 'proto',
    label: 'Prototyping',
    anchor: 'prototyping',
    legacyAnchors: ['proj-proto'],
    pitch: 'From napkin sketch to a part in your hand: modeling, printing, and iterating.',
    flagship: 'moxel',
    cta: 'Start a prototype',
    confidentialNote: 'More parts and products made under NDA. Ask us about them.',
  },
  {
    key: 'consult',
    label: 'Consulting',
    anchor: 'consulting',
    legacyAnchors: ['proj-consult'],
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
