import sharp from "sharp";
import fs from "fs";
import path from "path";

async function optimizeAll() {
  const images = [
    {
      file: "public/assets/images/shield-insignia-hero.webp",
      maxW: 1200,
      maxH: 1200,
      quality: 85,
      fmt: "webp",
    },
    {
      file: "public/assets/images/shield-insignia-core.webp",
      maxW: 512,
      maxH: 512,
      quality: 85,
      fmt: "webp",
    },
    {
      file: "public/assets/images/hero-bg.webp",
      maxW: 1920,
      maxH: 1080,
      quality: 82,
      fmt: "webp",
    },
    {
      file: "public/assets/images/sentinel-vault-img.webp",
      maxW: 1280,
      maxH: 720,
      quality: 82,
      fmt: "webp",
    },
    {
      file: "public/assets/images/sentinel-env-injector-img.webp",
      maxW: 1280,
      maxH: 720,
      quality: 82,
      fmt: "webp",
    },
    {
      file: "public/assets/images/hero-1.webp",
      maxW: 1280,
      maxH: 720,
      quality: 82,
      fmt: "webp",
    },
    {
      file: "public/assets/images/hero-3.webp",
      maxW: 1280,
      maxH: 720,
      quality: 82,
      fmt: "webp",
    },
    {
      file: "public/android-chrome-512x512.png",
      maxW: 512,
      maxH: 512,
      quality: 85,
      fmt: "png",
    },
    {
      file: "public/android-chrome-192x192.png",
      maxW: 192,
      maxH: 192,
      quality: 85,
      fmt: "png",
    },
    {
      file: "public/apple-touch-icon.png",
      maxW: 180,
      maxH: 180,
      quality: 85,
      fmt: "png",
    },
  ];

  let totalBefore = 0;
  let totalAfter = 0;

  console.log("Optimizing assets for DR4CO.DEVSEC Portfolio...");

  for (const item of images) {
    if (!fs.existsSync(item.file)) continue;

    const inputBuf = fs.readFileSync(item.file);
    const origSize = inputBuf.length;
    totalBefore += origSize;

    let pipeline = sharp(inputBuf).resize({
      width: item.maxW,
      height: item.maxH,
      fit: "inside",
      withoutEnlargement: true,
    });

    if (item.fmt === "webp") {
      pipeline = pipeline.webp({ quality: item.quality, effort: 6, smartSubsample: true });
    } else if (item.fmt === "png") {
      pipeline = pipeline.png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        quality: item.quality,
      });
    }

    const outputBuf = await pipeline.toBuffer();
    fs.writeFileSync(item.file, outputBuf);
    const newSize = outputBuf.length;
    totalAfter += newSize;

    const saved = Math.round((1 - newSize / origSize) * 100);
    console.log(
      path.basename(item.file).padEnd(30),
      (Math.round(origSize / 1024) + " KB").padStart(8),
      "->",
      (Math.round(newSize / 1024) + " KB").padStart(8),
      `(${saved}% saved)`
    );
  }

  console.log("---");
  console.log(
    "TOTAL:".padEnd(30),
    (Math.round(totalBefore / 1024) + " KB").padStart(8),
    "->",
    (Math.round(totalAfter / 1024) + " KB").padStart(8),
    `(${Math.round((1 - totalAfter / totalBefore) * 100)}% reduction)`
  );
}

optimizeAll();
