import { Project, ProjectCategory } from './types/project.model';

const PROJECTS: Record<string, Project> = {


  blackoutPunk: {
    projectDetails: {
      alias: 'blackout-punk',
      category: 'game',
      order: 10,
      name: 'BLACK0UT.PUNK',
      showcase: 'Game Development',
      kind: `PC Game`,
      origin: 'in-house',
      status: 'in-development',
      role: 'Developer & Publishing',
      year: '2024 - Present',
      outcome: '',
      brief: `A "rave-flavored" tactical shooter/strategy experience.`,
      body: [
        'BLACKOUT.PUNK is a tactical third-person shooter where you give orders to your squad, jump into any unit under your command, and fight the battle yourself.',
      ],
      skills: [
        "Unreal",
        "AWS-GameLift",
        "Blender",
        "Photoshop"
      ],
      heroLink: {
        label: 'Official Website',
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
          type: 'image',
          src: 'blackout-punk-detail',
          alt: 'BLACK0UT.PUNK Gameplay',
          width: 2343,
          height: 958,
        },
        gallery: [
          { type: 'image', src: 'blackout-punk-detail', alt: 'BLACK0UT.PUNK Gameplay', width: 2343, height: 958 },
          { type: 'image', src: 'blackout-punk-background', alt: 'BLACK0UT.PUNK Background Grid', width: 2887, height: 1176 },
          { type: 'image', src: 'blackout-punk-icon', alt: 'BLACK0UT.PUNK Icon', width: 587, height: 587 },
        ],
      },
    }
  },

  
  clickTune: {
    projectDetails: {
      alias: 'clicktune',
      category: 'consult',
      order: 100,
      name: '"MusiMojii" - ClickTune LLC',
      showcase: 'App Design',
      kind: `Client Consultation`,
      origin: 'client',
      status: 'shipped',
      role: 'Back-End Architecture Design, Research, and Technical Advisory',
      year: 'Q1 2025',
      outcome: 'shipped',
      brief: `Research, Development, and Back-End System Design for ClickTune LLC.`,
      body: [
        'ClickTune LLC is building an aspiring social media experience where users can share audio clips attached to text messages [US Patent # 12,671,666]. Provided preliminary technical research, rapid prototyping, and back-end design required for patent acceptance.',
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
          label: 'US Patent Office',
          target: 'https://ppubs.uspto.gov/',
          icon: 'logo-website'
        }
      ],
      thumbnailImage: {
        source: 'tc-logo',
        alt: 'ToasterCat Icon'
      },
      media: {
        featured: {
          type: 'image',
          src: 'tc-logo',
          alt: 'ToasterCat Icon',
          width: 501,
          height: 500,
        },
        gallery: [
          { type: 'image', src: 'tc-logo', alt: 'ToasterCat Icon', width: 501, height: 500 },
        ],
      },
    }
  },


  jukeDec: {
    projectDetails: {
      alias: 'jukedec',
      category: 'consult',
      order: 110,
      name: '"JukeDec" - Frigging Glorious LLC',
      showcase: 'App Design',
      kind: `Research & Development`,
      origin: 'client',
      status: 'shipped',
      role: 'Research and Technical Product Design - Back-End and App Integration.',
      year: '2021',
      outcome: 'Abandoned by client after provided total technical scope.',
      brief: `A multi-faceted content distribution and networking platform for musicians, producers, and digital artists.`,
      body: [
        "An aspirational platform that aimed to unify music creators with their audience through continuous iteration and collaborative feedback throughout the entire production process. Artists would upload work in various states of completion that would be distributed to and evaluated by their audience, enabling peers to submit draft remixes and additional layers to the work.",
      ],
      media: {
        gallery: [
          { type: 'image', src: 'tc-logo', alt: 'ToasterCat Icon', width: 501, height: 500 },
        ],
      },
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
        "AWS-SWF",
        "AWS-DynamoDB",
        "AWS-CloudFormation",
        "AWS-CloudFront",
        "Android",
        "iOS"
      ],
      links: [ ],
      thumbnailImage: {
        source: 'tc-logo',
        alt: 'ToasterCat Icon'
      }
    }
  },


  outsideAgitators: {
    projectDetails: {
      alias: 'outside-agitators',
      category: 'audio',
      order: 120,
      name: '"Outside Agitators" - Octopus Attacks Shark!!',
      showcase: 'Audio',
      kind: `Album`,
      origin: 'contributor',
      status: 'shipped',
      role: 'Additional recordings and samples - guitar, vocals, and percussion.',
      year: '2023',
      outcome: 'Album released to all major streaming platforms.',
      brief: `Debut LP by local Seattle act "Octopus Attacks Shark!!"`,
      body: [
        'Recording and editing services provided in partnership with Soundhouse studios and veteran studio professionals Mike Sebring and Jack Endino.',
        '- Tracked guitars, vocals, and additional overlays\n- Mixed band-provided samples for interludes and layered vocals',
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
          type: 'image',
          src: 'oas-site-title',
          alt: 'OAS Band Title',
          width: 417,
          height: 500,
        },
        gallery: [
          { type: 'image', src: 'oas-site-title', alt: 'OAS Band Title', width: 417, height: 500 },
          { type: 'image', src: 'oas-outside-agitators', alt: 'Outside Agitators Album Art', width: 1400, height: 1400 },
          { type: 'image', src: 'oas-logo', alt: 'OAS Band Logo', width: 900, height: 900 },
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
      showcase: 'Game Development',
      kind: `PC Game`,
      origin: 'contributor',
      status: 'archived',
      role: 'Research, 3D Modeling, and Gameplay Integration',
      year: '2022',
      outcome: 'Project shelved by client pending additional legal review.',
      brief: `Third-person shooter and showcase for the open-source works of the PY2A community.`,
      body: [
        `Inspired by the Defense Distributed movement, the "Free and Open-Source Armory" serves as an interactive showroom for the creative works of DIY armourers JStark1809, IvanTTroll, AreWeCoolYet?, Booligan Airsoft, and the ever-growing list of open-source PY2A contributors. It provides a safe and free environment for their works to be compared, analyzed, and tested without navigating the hassles of local restrictions and extensive expensive builds. Developed and tested in-house at ToasterCat Studios and released under the Creative Commons license for all to consume and re-distribute.`,
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
      thumbnailImage: {
        source: 'logo-defense-distributed',
        alt: 'Defense Distributed Logo'
      },
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
          { type: 'image', src: 'foss-background', alt: 'FOSS Armory', width: 1471, height: 983 },
          { type: 'image', src: 'logo-defense-distributed', alt: 'Defense Distributed Logo', width: 340, height: 340 },
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
      showcase: 'Business Development',
      kind: `Media Blog`,
      origin: 'in-house',
      status: 'live',
      role: 'Cloud Services and Business Infrastructure',
      year: '2021',
      outcome: 'Site launched in 2021 to produce annual user growth and consistent AdSense impression revenue.',
      brief: `"A Poorly Edited Editorial" - Multimedia pop culture blog powered by an SEO Ad Revenue model.`,
      body: [
        `"Crude Mirror Media" was launched by ToasterCat Studios in April 2021 alongside a complete suite of analytics and revenue tracking tools.`,
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
          { type: 'image', src: 'crude-mirror-site-screenshot', alt: 'Crude-Mirror Site', width: 761, height: 505 },
          { type: 'image', src: 'crude-mirror-background', alt: 'Crude-Mirror Banner', width: 1024, height: 640 },
          { type: 'image', src: 'crude-mirror-logo', alt: 'Crude-Mirror Logo', width: 500, height: 500 },
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
      showcase: 'Web Development',
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
          { type: 'image', src: 'strongarm-site-screenshot', alt: 'Strongarm Site', width: 851, height: 512 },
          { type: 'image', src: 'strongarm-background', alt: 'Strongarm Site', width: 1891, height: 900 },
          { type: 'image', src: 'strongarm-logo', alt: 'Strongarm Logo', width: 483, height: 162 },
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
      showcase: 'Web Development',
      kind: `Band Site`,
      origin: 'client',
      status: 'live',
      role: 'Front-End Design and Hosting',
      year: '2022',
      outcome: 'Site shipped and maintained to promote ticket sales and album release.',
      brief: `E-Commerce font-end and music portfolio for local punk act - "Octopus Attacks Shark!!".`,
      body: [
        `Simple static website designed and developed from the ground-up by ToasterCat Studios. Portfolio website launched using minimal-cost architecture ($0.12/mo) and integrated with 3rd party e-commerce with custom CSS to provide a fluent look-and-feel across both sites.`,
      ],
      testimonials: [
        { 
          quote: "Dirk's a rockstar!",
          name: "Coyote",
          title: "Vocals",
          org: "OAS"
        },
        { 
          quote: "Nice, man",
          name: "Shiva Shrivastava",
          title: "Drums",
          org: "OAS"
        },
        { 
          quote: "Groovy",
          name: "Scott",
          title: "Bass",
          org: "OAS"
        },
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
          { type: 'image', src: 'oas-site-screenshot', alt: 'OAS Site', width: 755, height: 512 },
          { type: 'image', src: 'oas-background', alt: 'OAS Band', width: 1600, height: 900 },
          { type: 'image', src: 'oas-site-title', alt: 'OAS Logo', width: 417, height: 500 },
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
      showcase: 'Web Development',
      kind: `Band Site`,
      origin: 'client',
      status: 'live',
      role: 'Front-End Design and Hosting',
      year: '2021',
      outcome: 'Site shipped and maintained to promote live events and merchandizing sales.',
      brief: `Custom portfolio site and brand press pack for local post-metal act - "Ugliest Man Alive" [U.M.A]`,
      body: [
        `Web prescence and branding designed exclusively by ToasterCat Studios. Re-launched using existing 3rd party platform to facilitate dynamic content management and e-commerce integration. All brand and multimedia assets created in-house to satisfy client's desired look-and-feel.`,
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
          type: 'image',
          src: 'uma-machine-god',
          alt: 'UMA MachineGod//Suicide',
          width: 720,
          height: 405,
        },
        gallery: [
          { type: 'image', src: 'uma-machine-god', alt: 'UMA MachineGod//Suicide', width: 720, height: 405 },
          { type: 'image', src: 'uma-background', alt: 'UMA Band', width: 1910, height: 900 },
          { type: 'image', src: 'uma-logo', alt: 'UMA Logo', width: 508, height: 500 },
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
      showcase: 'Game Development',
      kind: `Mobile Game`,
      origin: 'contributor',
      status: 'live',
      role: 'Custom Graphics and User Haptics Engine. Additional custom audio and soundtrack recording.',
      year: '2013',
      outcome: 'Project shipped and available for purchase on Amazon AppStore.',
      brief: `A rogue-like bullet hell game for Android using custom motion controlls and procedural enemy generation.`,
      body: [
        `ToasterCat Studios' mobile debut. Developed entirely in native Android using custom rendering and peripheral interpolation. All audio and multimedia assets generated in-house. Featured finalist at Irvine Mobile Game Jam 2013.`,
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
          { type: 'image', src: 'pixhell-flyer', alt: 'PixHell', width: 1024, height: 500 },
          { type: 'image', src: 'pixhell-background', alt: 'PixHell', width: 1200, height: 1920 },
          { type: 'image', src: 'pixhell-logo', alt: 'PixHell Logo', width: 100, height: 100 },
        ],
      },
    }
  },


  wraithSquadron: {
    projectDetails: {
      alias: 'wraith-squadron',
      category: 'game',
      order: 40,
      name: 'Star Wars: Wraith Squadron',
      showcase: 'Game Development',
      kind: `PC Game`,
      origin: 'in-house',
      status: 'archived',
      role: 'Lead Developer and Producer',
      year: '2014',
      outcome: `Fan project halted after Disney's acquisition of Lucasfilm.`,
      brief: `A fan remake of the classic "Star Wars: Rogue Squadron" flight system using modern engines and creative commons assets.`,
      body: [],
      skills: [
        "Unity",
        "Maya",
        "Fusion360"
      ],
      media: {
        gallery: [
          { type: 'image', src: 'wraith-background', alt: 'Wraith Squadron', width: 1684, height: 1040 },
          { type: 'image', src: 'wraith-logo', alt: 'Wraith Squadron Logo', width: 593, height: 602 },
        ],
      },
      links: [
        {
          label: 'GitHub',
          target: 'https://github.com/Dirker27/WraithSquadron',
          icon: 'logo-github'
        }
      ],
      thumbnailImage: {
        source: 'wraith-logo',
        alt: 'Wraith Squadron Logo'
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
      showcase: 'Game Development',
      kind: `PC Game`,
      origin: 'contributor',
      status: 'shipped',
      role: 'Level Design and Gameplay Engineering',
      year: '2014',
      outcome: 'Project shipped and reviewed as a featured finalist at VT Game Expo 2014',
      brief: `2.5-D Action-platformer starring a lost little toy chick trying to escape a delapidated toy factory using physics, magnetism, and wit.`,
      body: [
        `Developed by a team of 9 over a rapid development cycle of 4 months. Implemented using custom physics, rigging deformations, and destructable environment assets. Featured finalist at VT Game Expo 2014.`,
      ],
      media: {
        gallery: [
          { type: 'image', src: 'chick-magnet-flyer', alt: 'Chick Magnet Flyer', width: 450, height: 600 },
          { type: 'image', src: 'chick-magnet-logo', alt: 'Chick Magnet Logo', width: 512, height: 512 },
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
      category: 'audio',
      order: 130,
      name: '"Of Man and Nature" - Ugliest Man Alive',
      showcase: 'Audio',
      kind: `Album`,
      origin: 'client',
      status: 'live',
      role: 'Audio Engineering, Recording, and Production',
      year: '2017',
      outcome: 'Album released to streaming platforms',
      brief: `Debut LP for local Seattle post-metal act "Ugliest Man Alive [U.M.A]".`,
      body: [
        `End-to-end production, recording, mixing, and mastering provided to client requiring experimental recording techniques and extensive overlays. Recorded in 4 different locations over an iterative creative process.`,
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
          type: 'image',
          src: 'uma-redacted',
          alt: 'UMA [redacted]',
          width: 1080,
          height: 608,
        },
        gallery: [
          { type: 'image', src: 'uma-redacted', alt: 'UMA [redacted]', width: 1080, height: 608 },
          { type: 'image', src: 'tcstudio-background', alt: 'UMA Band', width: 1350, height: 900 },
          { type: 'image', src: 'uma-logo', alt: 'UMA Logo', width: 508, height: 500 },
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
      showcase: '3D Printing',
      kind: 'Prototype',
      origin: 'client',
      status: 'shipped',
      role: '3D Modeling and Industrial Manufacturing',
      year: '2022',
      outcome: 'Prototype models and manufacturing files delivered to client for sale on their private sales platform.',
      brief: `Custom client commission: 3D Modelling, Slicing, and Printing ergonomic croquet hooks for long-term use.`,
      body: [],
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
          src: 'moxel-logo-text',
          alt: 'Moxel LLC',
          width: 738,
          height: 176,
        },
        gallery: [
          { type: 'image', src: 'moxel-logo-text', alt: 'Moxel LLC', width: 738, height: 176 },
          { type: 'image', src: 'moxel-background', alt: 'Moxel Hook Slicing Render', width: 1200, height: 900 },
          { type: 'image', src: 'moxel-logo', alt: 'Moxel Logo', width: 183, height: 158 },
        ],
      },
    }
  },


  lizzie: {
    projectDetails: {
      alias: 'lizzie',
      category: 'proto',
      order: 150,
      name: 'Product Prototype: "The Lizzie"',
      showcase: '3D Printing',
      kind: `Prototype`,
      origin: 'client',
      status: 'shipped',
      role: 'Custom Modeling and Industrial Manufacturing and Assembly',
      year: '2021',
      outcome: '',
      brief: `Custom operational Nerf(TM) blaster comissioned compatible with Worker(TM) magazines and darts.`,
      body: [],
      skills: [
        "FDM",
        "Cura",
        "Fusion360"
      ],
      thumbnailImage: {
        source: 'logo-nerf',
        alt: 'TC Logo'
      },
      backgroundImage: {
        source: 'lizzie-profile',
        alt: 'Lizzie Assembly'
      },
      media: {
        featured: {
          type: 'image',
          src: 'lizzie-tinker',
          alt: 'Lizzie Model',
          width: 5000,
          height: 3333,
        },
        gallery: [
          { type: 'image', src: 'lizzie-tinker', alt: 'Lizzie Model', width: 5000, height: 3333 },
          { type: 'image', src: 'lizzie-profile', alt: 'Lizzie Assembly', width: 1350, height: 900 },
          { type: 'image', src: 'logo-nerf', alt: 'TC Logo', width: 570, height: 291 },
        ],
      },
    }
  },


  tcPrints: {
    projectDetails: {
      alias: 'tc-print-pistol',
      category: 'proto',
      order: 160,
      name: 'Custom Pistol Sight Adapters',
      showcase: '3D Printing',
      kind: `Product`,
      origin: 'in-house',
      status: 'live',
      role: 'End-to-End Product Design, Manufacturing, and Sales',
      year: '2022',
      outcome: '400 units sold in first year to 98% positive customer reviews.',
      brief: `Custom sight adapters printed for common pistol models.`,
      body: [
        `TODO: Bar Code #`,
      ],
      skills: [
        "FDM",
        "Cura",
        "Fusion360",
        "Shopify",
        "Ebay",
        "Amazon"
      ],
      links: [
        {
          label: 'Store',
          target: '#',
          icon: 'logo-website'
        },
        {
          label: 'Ebay',
          target: '#',
          icon: 'logo-ebay'
        }
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
          type: 'image',
          src: 'tcprint-product',
          alt: 'TC Print Product Rotation',
          width: 5000,
          height: 3333,
        },
        gallery: [
          { type: 'image', src: 'tcprint-product', alt: 'TC Print Product Rotation', width: 5000, height: 3333 },
          { type: 'image', src: 'tcprint-background', alt: 'TC Print Shop', width: 1350, height: 900 },
          { type: 'image', src: 'tc-logo', alt: 'TC Logo', width: 501, height: 500 },
        ],
      },
    }
  }
};

/* --------------------------------------------------------------------------
 * Lookups. Pages should ask these rather than hard-code project keys, so
 * adding a project is a data change only.
 * ------------------------------------------------------------------------*/

export interface CategoryInfo {
  key: ProjectCategory;
  label: string;
  /** Section anchor id on /portfolio (old /projects#anchor links redirect here). */
  anchor: string;
}

/** Categories in display order. */
export const PROJECT_CATEGORIES: CategoryInfo[] = [
  { key: 'game', label: 'Game Development', anchor: 'proj-game' },
  { key: 'web', label: 'Web Development', anchor: 'proj-web' },
  { key: 'consult', label: 'Client Consultation', anchor: 'proj-consult' },
  { key: 'audio', label: 'Audio Production', anchor: 'proj-audio' },
  { key: 'proto', label: 'Rapid Prototyping', anchor: 'proj-proto' },
];

/** Every project, sorted by `order`. */
export const PROJECT_LIST: Project[] = Object.values(PROJECTS).sort(
  (a, b) => a.projectDetails.order - b.projectDetails.order
);

export function projectsInCategory(category: ProjectCategory): Project[] {
  return PROJECT_LIST.filter((p) => p.projectDetails.category === category);
}

export function getProjectByAlias(alias: string): Project | undefined {
  return PROJECT_LIST.find((p) => p.projectDetails.alias === alias);
}

export default PROJECTS;
