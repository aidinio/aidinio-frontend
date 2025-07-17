export default function FilterDefinitions({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="0"
      height="0"
      viewBox="0 0 700 700"
    >
      <defs>
        <mask id="rounded-rect-mask" mask-type="luminance">
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <rect
            id="wow"
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="20"
            ry="20"
            fill="white"
          />
        </mask>

        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 4 -0.21"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <filter
          id="nnnoise-filter"
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          colorInterpolationFilters="linearRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feTurbulence
            width="100vw"
            height="100vh"
            x="0%"
            y="0%"
            baseFrequency="3.859"
            numOctaves="1"
            result="turbulence"
            seed="19"
            stitchTiles="stitch"
          ></feTurbulence>
          <feSpecularLighting
            width="100vw"
            height="100vh"
            x="0%"
            y="0%"
            in="turbulence"
            lightingColor="#fff"
            result="specularLighting"
            specularConstant="5"
            specularExponent="15"
            surfaceScale="8"
          >
            <feDistantLight azimuth="3" elevation="100"></feDistantLight>
          </feSpecularLighting>
        </filter>
        <clipPath id="rounded-mask">
          <rect x="0" y="0" rx="3.5rem" width="100vw" height="100vh" color="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
