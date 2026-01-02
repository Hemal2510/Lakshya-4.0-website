export default function imageKitLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_ID}${src}?tr=w-${width},q-${quality || 75}`;
}
