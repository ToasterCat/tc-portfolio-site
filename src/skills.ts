import { ASSET_MANIFEST } from './assets/AssetMap';

/**
 * Display data for a project's `skills` entries: icon + human label.
 * Unknown skills fall back to the "ToasterCat" placeholder (the data tests
 * flag those; the project page shows the raw name instead).
 */
export function skillIconMap(skillName: string) {
  switch (skillName) {
    case "AdSense":
      return {
        icon: ASSET_MANIFEST.get('logo-adsense'),
        label: "Google AdSense"
      };
    case "Amazon":
      return {
        icon: ASSET_MANIFEST.get('logo-amazon'),
        label: "Amazon Seller"
      };
    case "AmazonCoins":
      return {
        icon: ASSET_MANIFEST.get('logo-amazon-coins'),
        label: "Amazon Coins"
      };
    case "Android":
      return {
        icon: ASSET_MANIFEST.get('logo-android'),
        label: "Android"
      };

    case "AWS-CloudFront":
      return {
        icon: ASSET_MANIFEST.get('logo-cloudfront'),
        label: "AWS CloudFront"
      };
    case "AWS-GameLift":
      return {
        icon: ASSET_MANIFEST.get('logo-gamelift'),
        label: "AWS GameLift"
      };
    case "AWS-Lightsail":
      return {
        icon: ASSET_MANIFEST.get('logo-lightsail'),
        label: "AWS Lightsail"
      };
    case "AWS-S3":
      return {
        icon: ASSET_MANIFEST.get('logo-s3'),
        label: "AWS S3"
      };
    case "AWS-Route53":
      return {
        icon: ASSET_MANIFEST.get('logo-route53'),
        label: "AWS Route 53"
      };

    case "CSS":
      return {
        icon: ASSET_MANIFEST.get('logo-css'),
        label: "CSS 3"
      };
    case "Cura":
      return {
        icon: ASSET_MANIFEST.get('logo-cura'),
        label: "Cura Slicer"
      };
    case "Ebay":
      return {
        icon: ASSET_MANIFEST.get('logo-ebay'),
        label: "Ebay Seller"
      };
    case "Fusion360":
      return {
        icon: ASSET_MANIFEST.get('logo-fusion'),
        label: "Fusion 360"
      };
    case "FDM":
      return {
        icon: ASSET_MANIFEST.get('logo-fdm'),
        label: "FDM 3D Printing"
      };
    case "GSuite":
      return {
        icon: ASSET_MANIFEST.get('logo-gsuite'),
        label: "Google GSuite"
      };
    case "HTML":
      return {
        icon: ASSET_MANIFEST.get('logo-html'),
        label: "HTML 5"
      };
    case "Maya":
      return {
        icon: ASSET_MANIFEST.get('logo-maya'),
        label: "Maya"
      };
    case "Photoshop":
      return {
        icon: ASSET_MANIFEST.get('logo-photoshop'),
        label: "Adobe Photoshop"
      };
    case "Premiere":
      return {
        icon: ASSET_MANIFEST.get('logo-premiere'),
        label: "Adobe Premiere"
      };
    case "Reaper":
      return {
        icon: ASSET_MANIFEST.get('logo-reaper'),
        label: "Reaper"
      };
    case "Shopify":
      return {
        icon: ASSET_MANIFEST.get('logo-shopify'),
        label: "Shopify"
      };
    case "Squarespace":
      return {
        icon: ASSET_MANIFEST.get('logo-squarespace'),
        label: "Squarespace"
      };
    case "Unity":
      return {
        icon: ASSET_MANIFEST.get('logo-unity'),
        label: "Unity Engine"
      };
    case "Unreal":
      return {
        icon: ASSET_MANIFEST.get('logo-unreal'),
        label: "Unreal Engine"
      };
    case "WordPress":
      return {
        icon: ASSET_MANIFEST.get('logo-wordpress'),
        label: "WordPress"
      };
    default:
      return {
        icon: ASSET_MANIFEST.get('default'),
        label: "ToasterCat"
      };
  }
}
