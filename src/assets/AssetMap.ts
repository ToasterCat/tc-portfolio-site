import chess3D from './chess.jpg';

import toasterCatCropped from './toastercat-cropped.png';
import toasterCatLegacyLogo from './ToasterCat-2011.png';
import toasterCatLogo from './tc-3d-medium.png';

import adSenseLogo from './logos/external/adsenseLogo-small.png';
import androidLogo from './logos/external/androidLogo-small.png';
import gSuiteLogo from './logos/external/gSuiteLogo.png';
import reaperLogo from './logos/external/reaperLogo.png';
import unityLogo from './logos/external/unityLogo.png';
import unrealLogo from './logos/external/unrealLogo-small.png';
import wordpressLogo from './logos/external/wordpressLogo-small.png';
import githubLogo from './logos/external/githubLogo-small.png';
import soundcloudLogo from './logos/external/soundcloudLogo-small.png';
import spotifyLogo from './logos/external/spotify-logo-small.png';
import iTunesLogo from './logos/external/itunes-logo.png';
import amazonMusicLogo from './logos/external/amazon-music-logo-small.png';
import bandcampLogo from './logos/external/bandcampLogo-small.png';
import genericWebsiteLogo from './logos/external/www-logo-small.png';
import mayaLogo from './logos/external/maya-logo-medium.png';
import fusionLogo from './logos/external/fusion360-logo-small.png';
import curaLogo from './logos/external/cura-logo-small.png';
import gameliftLogo from './logos/external/gamelift-logo-small.png';
import s3Logo from './logos/external/s3-logo-small.png';
import route53Logo from './logos/external/route-53-logo-small.png';
import html5Logo from './logos/external/html5-logo-small.png';
import css3Logo from './logos/external/css3-logo-small.png';
import cloudfrontLogo from './logos/external/cloudfront-logo-small.png';
import lightsailLogo from './logos/external/lightsail-logo-small.png';
import shopifyLogo from './logos/external/shopify-logo-small.png';
import photoshopLogo from './logos/external/photoshop-logo-small.png';
import premiereLogo from './logos/external/premiere-logo-small.png';
import squarespaceLogo from './logos/external/squarespace-logo-small.png'
import fdmLogo from './logos/external/fdm-printing-logo-small.png';
import amazonLogo from './logos/external/amazon-logo-small.png';
import amazonCoinsLogo from './logos/external/amazon-coins-logo.png';
import ebayLogo from './logos/external/ebay-logo-small.png';
import nerfLogo from './logos/external/nerf-logo-medium.png';
import defenseDistributedLogo from './logos/external/defense-distributed-logo-small.png';
import itchioLogo from './logos/external/itch-io-logo-small.png';

import crudeMirrorLogo from './gallery/CrudeMirror/cm-logo-medium.png';
import crudeMirrorBackground from './gallery/CrudeMirror/CM-Background.jpg';
import crudeMirrorFull from './gallery/CrudeMirror/CMM-Glass.png';
import crudeMirrorSiteScreenshot from './gallery/CrudeMirror/cm-site-screenshot-home-medium.png';

import strongarmLogo from './gallery/StrongArm/logo-strongarm.png';
import strongarmBackground from './gallery/StrongArm/hero_scaled.png';
import strongarmSiteScreenshot from './gallery/StrongArm/site-screenshot-medium.png';

import pixhellLogo from './gallery/PixHell/Player.png';
import pixhellBackground from './gallery/PixHell/Background.png';
import pixhellPromotional from './gallery/PixHell/Promotional.png';
import pixhellScreenshot from './gallery/PixHell/Screenshot_Game0.png';

import oasLogo from './gallery/OAS/OAS-logo.png';
import oasSiteTitle from './gallery/OAS/OAS-title-art-medium.png';
import oasBackground from './background/oas-fullband-red_scaled.png';
import oasOutsideAgitators from './gallery/OAS/OAS-OutsideAgitators.png';
import oasSiteScreenshot from './gallery/OAS/oas-site-screenshot-medium.png';

import umaBand from './gallery/UMA/uma-logo-medium.png';
import umaBackground from './gallery/UMA/Baby-reverse_scaled.png';
import umaMachineGod from './gallery/UMA/MGS1.gif';
import umaRedacted from './gallery/UMA/redacted.gif';
import umaSiteScreenshot from './gallery/UMA/uma-site-screenshot.png';

import wraithSquadronLogo from './gallery/WraithSquadron/WraithLogo.png';
import wraithSquadronBackground from './gallery/WraithSquadron/TestFlight.png';

import tcPrintBackground from './gallery/TC-Print/PrinterAngle_scaled.jpg';
import tcProductDetail from './gallery/TC-Print/TC-Product-Rotation.gif';

import chickMagnetFlyer from './gallery/ChickMagnet/flyer_scaled.jpeg';
import chickMagnetLogo from './gallery/ChickMagnet/logo-clipart-medium.png';

import lizzieProfile from './gallery/Lizzie/LizzieHand_scaled.jpg';
import lizzieTinker from './gallery/Lizzie/LizzieTinker.jpg';

import fossArmoryBackground from './gallery/FOSS/TargetRange.png';
import tcStudioBackground from './gallery/TC-Recording/StudioGuitars_scaled.jpg';

import moxelBackground from './gallery/Moxel/moxel-gloria_scaled.jpg';
import moxelLogo from './gallery/Moxel/moxel-logo-small.png';
import moxelLogoText from './gallery/Moxel/moxel-logo-medium.png';

let ASSET_MANIFEST = new Map<string, string> ([
    ['default', toasterCatCropped],

    //- TC brand
    ["site-logo", toasterCatCropped],
    ["tc-logo", toasterCatLogo],
    ["tc-legacy-logo", toasterCatLegacyLogo],

    //- external logos
    ["logo-website", genericWebsiteLogo],
    ["logo-adsense", adSenseLogo],
    ["logo-android", androidLogo],
    ["logo-gsuite", gSuiteLogo],
    ["logo-reaper", reaperLogo],
    ["logo-unity", unityLogo],
    ["logo-unreal", unrealLogo],
    ["logo-wordpress", wordpressLogo],
    ["logo-github", githubLogo],
    ["logo-soundcloud", soundcloudLogo],
    ["logo-amazon-music", amazonMusicLogo],
    ["logo-spotify", spotifyLogo],
    ["logo-bandcamp", bandcampLogo],
    ["logo-iTunes", iTunesLogo],
    ["logo-maya", mayaLogo],
    ["logo-fusion", fusionLogo],
    ["logo-cura", curaLogo],
    ["logo-gamelift", gameliftLogo],
    ["logo-s3", s3Logo],
    ["logo-route53", route53Logo],
    ["logo-html", html5Logo],
    ["logo-css", css3Logo],
    ["logo-cloudfront", cloudfrontLogo],
    ["logo-lightsail", lightsailLogo],
    ["logo-shopify", shopifyLogo],
    ["logo-photoshop", photoshopLogo],
    ["logo-premiere", premiereLogo],
    ["logo-squarespace", squarespaceLogo],
    ["logo-fdm", fdmLogo],
    ["logo-amazon", amazonLogo],
    ["logo-amazon-coins", amazonCoinsLogo],
    ["logo-ebay", ebayLogo],
    ["logo-nerf", nerfLogo],
    ["logo-defense-distributed", defenseDistributedLogo],
    ["logo-itch-io", itchioLogo],

    //- project-specific
    ["crude-mirror-logo", crudeMirrorLogo],
    ["crude-mirror-background", crudeMirrorBackground],
    ["crude-mirror-full", crudeMirrorFull],
    ["crude-mirror-site-screenshot", crudeMirrorSiteScreenshot],

    ["pixhell-logo", pixhellLogo],
    ["pixhell-background", pixhellBackground],
    ["pixhell-flyer", pixhellPromotional],
    ["pixhell-screenshot", pixhellScreenshot],

    ["strongarm-logo", strongarmLogo],
    ["strongarm-background", strongarmBackground],
    ["strongarm-site-screenshot", strongarmSiteScreenshot],
    
    ["oas-logo", oasLogo],
    ["oas-site-title", oasSiteTitle],
    ["oas-background", oasBackground],
    ["oas-outside-agitators", oasOutsideAgitators],
    ["oas-site-screenshot", oasSiteScreenshot],

    ["uma-logo", umaBand],
    ["uma-background", umaBackground],
    ["uma-machine-god", umaMachineGod],
    ["uma-redacted", umaRedacted],
    ["uma-site-screenshot", umaSiteScreenshot],

    ["tcprint-product", tcProductDetail],

    ["chick-magnet-flyer", chickMagnetFlyer],
    ["chick-magnet-logo", chickMagnetLogo],

    ["lizzie-profile", lizzieProfile],
    ["lizzie-tinker", lizzieTinker],

    ["moxel-background", moxelBackground],
    ["moxel-logo", moxelLogo],
    ["moxel-logo-text", moxelLogoText],

    ["foss-background", fossArmoryBackground],
    ["wraith-logo", wraithSquadronLogo],
    ["wraith-background", wraithSquadronBackground],
    ["tcprint-background", tcPrintBackground],
    ["tcstudio-background", tcStudioBackground],
    ["chess-3d", chess3D],
]);


export {ASSET_MANIFEST};