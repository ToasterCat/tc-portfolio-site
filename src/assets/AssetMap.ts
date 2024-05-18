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
import wordpressLogo from './logos/external/wordpressLogo.png';
import githubLogo from './logos/external/githubLogo-small.png';
import soundcloudLogo from './logos/external/soundcloudLogo-small.png';
import spotifyLogo from './logos/external/spotify-logo-small.png';
import iTunesLogo from './logos/external/itunes-logo.png';
import amazonMusicLogo from './logos/external/amazon-music-logo-small.png';
import bandcampLogo from './logos/external/bandcampLogo-small.png';
import genericWebsiteLogo from './logos/external/www-logo-small.png';

import crudeMirrorLogo from './gallery/CrudeMirror/cm-logo-medium.png';
import crudeMirrorBackground from './gallery/CrudeMirror/CM-Background.jpg';
import crudeMirrorFull from './gallery/CrudeMirror/CMM-Glass.png';

import strongarmLogo from './gallery/StrongArm/logo-strongarm.png';
import strongarmBackground from './gallery/StrongArm/hero_scaled.png';

import pixhellLogo from './gallery/PixHell/Player.png';
import pixhellBackground from './gallery/PixHell/Background.png';
import pixhellPromotional from './gallery/PixHell/Promotional.png';
import pixhellScreenshot from './gallery/PixHell/Screenshot_Game0.png';

import oasLogo from './gallery/OAS/OAS-logo.png';
import oasSiteTitle from './gallery/OAS/OAS-title-art-medium.png';
import oasBackground from './background/oas-fullband-red_scaled.png';
import oasOutsideAgitators from './gallery/OAS/OAS-OutsideAgitators.png';

import umaBand from './gallery/UMA/uma-logo-medium.png';
import umaBackground from './gallery/UMA/Baby-reverse_scaled.png';
import umaMachineGod from './gallery/UMA/MGS1.gif';

import wraithSquadronLogo from './gallery/WraithSquadron/WraithLogo.png';
import wraithSquadronBackground from './gallery/WraithSquadron/TestFlight.png';

import tcPrintBackground from './gallery/TC-Print/PrinterAngle_scaled.jpg';
import tcProductDetail from './gallery/TC-Print/TC-Product-Rotation.gif';

import chickMagnetFlyer from './gallery/ChickMagnet/flyer_scaled.jpeg';
import lizzieProfile from './gallery/Lizzie/LizzieHand_scaled.jpg';
import fossArmoryBackground from './gallery/FOSS/TargetRange.png';
import tcStudioBackground from './gallery/TC-Recording/StudioGuitars_scaled.jpg';
import moxelBackground from './gallery/Moxel/moxel-gloria_scaled.jpg';

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

    //- project-specific
    ["crude-mirror-logo", crudeMirrorLogo],
    ["crude-mirror-background", crudeMirrorBackground],
    ["crude-mirror-full", crudeMirrorFull],

    ["pixhell-logo", pixhellLogo],
    ["pixhell-background", pixhellPromotional],
    ["pixhell-screenshot", pixhellScreenshot],

    ["strongarm-logo", strongarmLogo],
    ["strongarm-background", strongarmBackground],
    
    ["oas-logo", oasLogo],
    ["oas-site-title", oasSiteTitle],
    ["oas-background", oasBackground],
    ["oas-outside-agitators", oasOutsideAgitators],

    ["uma-logo", umaBand],
    ["uma-background", umaBackground],
    ["uma-machine-god", umaMachineGod],

    ["tcprint-product", tcProductDetail],

    ["chick-magnet-flyer", chickMagnetFlyer],
    ["lizzie-profile", lizzieProfile],
    ["foss-background", fossArmoryBackground],
    ["wraith-logo", wraithSquadronLogo],
    ["wraith-background", wraithSquadronBackground],
    ["tcprint-background", tcPrintBackground],
    ["tcstudio-background", tcStudioBackground],
    ["moxel-background", moxelBackground],
    ["chess-3d", chess3D],
]);


export {ASSET_MANIFEST};