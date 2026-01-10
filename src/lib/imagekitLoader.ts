export default function imageKitLoader({
  src,
  width,
  quality,
  fit = "at_max",
}: {
  src: string;
  width?: number;
  quality?: number;
  fit?: "at_max" | "pad";
}) {
  const params = [];

  if (width) params.push(`w-${width}`);
  if (quality) params.push(`q-${quality}`);

  if (fit === "at_max") params.push("c-at_max");
  if (fit === "pad") params.push("c-pad");

  return `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_ID}${src}?tr=${params.join(",")}`;
}
