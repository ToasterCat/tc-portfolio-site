import chess3D from './chess.jpg';

import toasterCatCropped from './toastercat-cropped.png';
import toasterCatLegacyLogo from './ToasterCat-2011.png';
import toasterCatLogo from './tc-3d.png';

import adSenseLogo from './logos/external/adsenseLogo.png';
import androidLogo from './logos/external/androidLogo.png';
import gSuiteLogo from './logos/external/gSuiteLogo.png';
import reaperLogo from './logos/external/reaperLogo.png';
import unityLogo from './logos/external/unityLogo.png';
import unrealLogo from './logos/external/unrealLogo.png';
import wordpressLogo from './logos/external/wordpressLogo.png';

import crudeMirrorLogo from './gallery/CrudeMirror/SiteLogo.png';
import crudeMirrorBackground from './gallery/CrudeMirror/CM-Background.jpg';
import crudeMirrorFull from './gallery/CrudeMirror/CMM-Glass.png';

import strongarmLogo from './gallery/StrongArm/logo-strongarm.png';
import strongarmBackground from './gallery/StrongArm/hero.png';

import pixhellLogo from './gallery/PixHell/Player.png';
import pixhellBackground from './gallery/PixHell/Background.png';

import oasLogo from './gallery/OAS/oas-logo.gif';
import oasSiteTitle from './gallery/OAS/OAS-Title_1000.png';
import oasBackground from './background/oas-fullband-red.png';
import oasOutsideAgitators from './gallery/OAS/OAS-OutsideAgitators.png';

import umaBand from './gallery/UMA/9starFilledUMA.png';
import umaBackground from './gallery/UMA/Baby-reverse.png';
import umaMachineGod from './gallery/UMA/MGS1.gif';

import chickMagnetFlyer from './gallery/ChickMagnet/flyer.jpeg';
import lizzieProfile from './gallery/Lizzie/LizzieHand.jpg';
import fossArmoryBackground from './gallery/FOSS/TargetRange.png';
import wraithSquadronBackground from './gallery/WraithSquadron/TestFlight.png';
import tcPrintBackground from './gallery/TC-Print/PrinterAngle.jpg';
import tcStudioBackground from './gallery/TC-Recording/StudioGuitarBodies.jpg';
import moxelBackground from './gallery/Moxel/moxel-gloria.jpg';

let ASSET_MANIFEST = new Map<string, string> ([
    ['default', toasterCatCropped],

    //- TC brand
    ["site-logo", toasterCatCropped],
    ["tc-logo", toasterCatLogo],
    ["tc-legacy-logo", toasterCatLegacyLogo],

    //- external logos
    ["logo-adsense", adSenseLogo],
    ["logo-android", androidLogo],
    ["logo-gsuite", gSuiteLogo],
    ["logo-reaper", reaperLogo],
    ["logo-unity", unityLogo],
    ["logo-unreal", unrealLogo],
    ["logo-wordpress", wordpressLogo],

    //- project-specific
    ["crude-mirror-logo", crudeMirrorLogo],
    ["crude-mirror-background", crudeMirrorBackground],
    ["crude-mirror-full", crudeMirrorFull],

    ["pixhell-logo", pixhellLogo],
    ["pixhell-background", pixhellBackground],

    ["strongarm-logo", strongarmLogo],
    ["strongarm-background", strongarmBackground],
    
    ["oas-logo", oasLogo],
    ["oas-site-title", oasSiteTitle],
    ["oas-background", oasBackground],
    ["oas-outside-agitators", oasOutsideAgitators],

    ["uma-logo", umaBand],
    ["uma-background", umaBackground],
    ["uma-machine-god", umaMachineGod],

    ["chick-magnet-flyer", chickMagnetFlyer],
    ["lizzie-profile", lizzieProfile],
    ["foss-background", fossArmoryBackground],
    ["wraith-background", wraithSquadronBackground],
    ["tcprint-background", tcPrintBackground],
    ["tcstudio-background", tcStudioBackground],
    ["moxel-background", moxelBackground],
    ["chess-3d", chess3D],
]);


export {ASSET_MANIFEST};