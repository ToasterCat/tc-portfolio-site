import { ImgHTMLAttributes } from 'react';
import { previewProps } from '../../../assets/assetMeta';
import { useElementReady } from '../../../hooks/useImageReady';

/**
 * An <img> that fades in over its blurred preview and sharpens as the real
 * file arrives (styles: .progressive in index.scss). Images without a preview
 * (transparent logos) simply fade in once loaded. Same props as <img>.
 */
export default function ProgressiveImg({ className, style, onLoad, onError, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const preview = previewProps(props.src);
  const { ref, ready, onReady } = useElementReady<HTMLImageElement>(props.src);

  return (
    <img
      {...props}
      ref={ref}
      className={[className, preview.className, 'progressive', ready ? '' : 'is-pending'].filter(Boolean).join(' ')}
      style={{ ...preview.style, ...style }}
      onLoad={(e) => {
        onReady();
        onLoad?.(e);
      }}
      onError={(e) => {
        onReady();
        onError?.(e);
      }}
    />
  );
}
