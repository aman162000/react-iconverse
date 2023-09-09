import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "duotone",
    <>
      <path
        className="fa-primary"
        d="M496 64c-44.13 0-79.1 35.89-79.1 80v224c0 44.11 35.87 80 79.1 80s79.1-35.89 79.1-80v-224C576 99.89 540.1 64 496 64zM512 368c0 8.828-7.188 16-16 16S480 376.8 480 368v-224C480 135.2 487.2 128 496 128S512 135.2 512 144V368zM304 192C298.8 192 293.8 192.6 288.8 193.5c2.127-29.43 18.77-55.55 45.48-68.91c15.81-7.906 22.22-27.12 14.31-42.94c-7.938-15.8-27.16-22.23-42.94-14.31C255.3 92.58 224 143.2 224 199.5L224 368c0 44.11 35.87 80 79.1 80s79.1-35.89 79.1-80l.0001-96C384 227.9 348.1 192 304 192zM320 368c0 8.828-7.188 16-16 16S288 376.8 288 368v-96C288 263.2 295.2 256 304 256S320 263.2 320 272V368zM118.2 197.6l52.91-84.67C177.3 103.1 177.6 90.66 172 80.48C166.3 70.31 155.6 64 144 64H32C14.31 64 0 78.33 0 96s14.31 32 32 32h54.25L36.88 207C30.69 216.9 30.38 229.3 36 239.5C41.66 249.7 52.38 256 64 256h19.78C108.2 256 128 275.8 128 300.2v39.56C128 364.2 108.2 384 83.78 384c-9.875 0-18.75-5.484-23.16-14.31c-7.938-15.81-27.12-22.28-42.94-14.3c-15.81 7.906-22.22 27.12-14.31 42.92C18.72 428.1 49.53 448 83.78 448C143.4 448 192 399.5 192 339.8V300.2C192 252.6 161.1 212 118.2 197.6z"
      />
      <path
        className="fa-secondary"
        d="M608 0c-17.67 0-31.1 14.33-31.1 32s14.33 32 31.1 32S640 49.67 640 32S625.7 0 608 0z"
      />
    </>,
  ],
  [
    "light",
    <>
      <path d="M496 64c-44.12 0-79.1 35.89-79.1 80v224c0 44.11 35.88 80 79.1 80s79.1-35.89 79.1-80v-224C576 99.89 540.1 64 496 64zM544 368c0 26.47-21.53 48-47.1 48c-26.47 0-47.1-21.53-47.1-48v-224c0-26.47 21.53-48 47.1-48c26.47 0 47.1 21.53 47.1 48V368zM304 192C285.9 192 269.4 198.3 256 208.4V204.6c0-46.78 29.53-89.05 73.44-105.2l12.06-4.422c8.312-3.031 12.56-12.22 9.531-20.52c-3.031-8.312-12.31-12.56-20.53-9.516L318.4 69.41C261.9 90.11 224 144.4 224 204.6L224 368c0 44.11 35.88 80 79.1 80s79.1-35.89 79.1-80l.0001-96C384 227.9 348.1 192 304 192zM352 368c0 26.47-21.53 48-47.1 48c-26.47 0-47.1-21.53-47.1-48v-96c0-26.47 21.53-48 47.1-48c26.47 0 48 21.53 48 48V368zM608 0c-17.67 0-31.1 14.33-31.1 32c0 17.67 14.33 32 31.1 32C625.7 64 640 49.67 640 32C640 14.33 625.7 0 608 0zM81.44 208l95.03-117.1C180.3 85.23 181.1 78.66 178.4 73.09C175.8 67.53 170.2 64 164 64H16C7.161 64 .0047 71.16 .0047 80S7.161 96 16 96h114.6L35.54 213.1c-3.844 4.797-4.625 11.38-1.969 16.94S41.85 240 48 240h32.72c43.72 0 79.28 35.56 79.28 79.28v17.44C160 380.4 124.4 416 80.72 416c-21.53 0-41.47-10.64-50.81-27.11c-4.375-7.703-14.16-10.38-21.81-6.016c-7.687 4.375-10.37 14.14-5.1 21.83C17.25 431.4 47.38 448 80.72 448c61.37 0 111.3-49.92 111.3-111.3V319.3C192 258.2 142.5 208.4 81.44 208z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M496 64c-44.13 0-79.1 35.89-79.1 80v224c0 44.11 35.87 80 79.1 80s79.1-35.89 79.1-80v-224C576 99.89 540.1 64 496 64zM528 368c0 17.64-14.34 32-32 32s-32-14.36-32-32v-224c0-17.64 14.34-32 32-32s32 14.36 32 32V368zM304 192C292.6 192 281.8 194.5 272 198.8V196.7c0-36.77 23.19-70.05 60.5-86.84c12.09-5.453 17.47-19.66 12.03-31.73c-5.438-12.09-19.75-17.44-31.72-12.05C258 90.77 224 140.8 224 196.7L224 368c0 44.11 35.87 80 79.1 80s79.1-35.89 79.1-80l.0001-96C384 227.9 348.1 192 304 192zM336 368c0 17.64-14.34 32-32 32s-32-14.36-32-32v-96c0-17.64 14.34-32 32-32s32 14.36 32 32V368zM608 0c-17.67 0-31.1 14.33-31.1 32s14.33 32 31.1 32S640 49.67 640 32S625.7 0 608 0zM98.75 208.1l65.72-107.6C169 93.11 169.2 83.83 164.9 76.27C160.7 68.69 152.7 64 144 64H24C10.75 64 0 74.75 0 88S10.75 112 24 112h77.22L35.53 219.5C31 226.9 30.81 236.2 35.06 243.7C39.31 251.3 47.31 256 56 256h39.03C122 256 144 277.1 144 304.1v46.09C144 378 122 400 95.03 400c-16.41 0-31.62-8.156-40.72-21.8l-10.34-15.52c-7.344-11.03-22.22-14.02-33.28-6.656c-11.03 7.359-14 22.25-6.656 33.28l10.34 15.52C32.41 431.9 62.56 448 95.03 448C148.5 448 192 404.5 192 351V304.1C192 252.7 150.5 210 98.75 208.1z" />
    </>,
  ],
  [
    "solid",
    <>
      <path d="M496 64c-44.13 0-79.1 35.89-79.1 80v224c0 44.11 35.87 80 79.1 80s79.1-35.89 79.1-80v-224C576 99.89 540.1 64 496 64zM512 368c0 8.828-7.188 16-16 16S480 376.8 480 368v-224C480 135.2 487.2 128 496 128S512 135.2 512 144V368zM304 192C298.8 192 293.8 192.6 288.8 193.5c2.127-29.43 18.77-55.55 45.48-68.91c15.81-7.906 22.22-27.12 14.31-42.94c-7.938-15.8-27.16-22.23-42.94-14.31C255.3 92.58 224 143.2 224 199.5L224 368c0 44.11 35.87 80 79.1 80s79.1-35.89 79.1-80l.0001-96C384 227.9 348.1 192 304 192zM320 368c0 8.828-7.188 16-16 16S288 376.8 288 368v-96C288 263.2 295.2 256 304 256S320 263.2 320 272V368zM608 0c-17.67 0-31.1 14.33-31.1 32s14.33 32 31.1 32S640 49.67 640 32S625.7 0 608 0zM118.2 197.6l52.91-84.67C177.3 103.1 177.6 90.66 172 80.48C166.3 70.31 155.6 64 144 64H32C14.31 64 0 78.33 0 96s14.31 32 32 32h54.25L36.88 207C30.69 216.9 30.38 229.3 36 239.5C41.66 249.7 52.38 256 64 256h19.78C108.2 256 128 275.8 128 300.2v39.56C128 364.2 108.2 384 83.78 384c-9.875 0-18.75-5.484-23.16-14.31c-7.938-15.81-27.12-22.28-42.94-14.3c-15.81 7.906-22.22 27.12-14.31 42.92C18.72 428.1 49.53 448 83.78 448C143.4 448 192 399.5 192 339.8V300.2C192 252.6 161.1 212 118.2 197.6z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M79.19 208H57.09l109.1-130.9c1.969-2.391 2.406-5.703 1.094-8.516S163.1 64 160 64H8C3.594 64 0 67.58 0 72S3.594 80 8 80h134.9L33.84 210.9C31.88 213.3 31.44 216.6 32.75 219.4S36.91 224 40 224h39.19C132.6 224 176 267.4 176 320.8v14.38C176 388.6 132.6 432 79.19 432c-27.12 0-52.38-12.91-64.31-32.91c-2.281-3.797-7.25-5.047-10.97-2.766c-3.812 2.266-5.031 7.188-2.781 10.98C16.12 432.4 46.03 448 79.19 448C141.4 448 192 397.4 192 335.2v-14.38C192 258.6 141.4 208 79.19 208zM496 64c-44.13 0-79.1 35.89-79.1 80v224c0 44.11 35.87 80 79.1 80s79.1-35.89 79.1-80v-224C576 99.89 540.1 64 496 64zM560 368c0 35.3-28.72 64-64 64s-64-28.7-64-64v-224c0-35.3 28.72-64 64-64s64 28.7 64 64V368zM304 208c-26.27 0-49.41 12.89-64 32.49V201.5c0-51.97 33.16-97.78 82.53-114l23.97-7.875c4.188-1.375 6.469-5.891 5.094-10.09c-1.344-4.172-5.75-6.5-10.09-5.094L317.5 72.28C261.6 90.64 224 142.6 224 201.5L224 368c0 44.11 35.87 80 79.1 80s79.1-35.89 79.1-80L384 288C384 243.9 348.1 208 304 208zM368 368c0 35.3-28.72 64-64 64s-64-28.7-64-64V288c0-35.3 28.72-64 64-64S368 252.7 368 288V368zM608 0c-17.67 0-31.1 14.33-31.1 32c0 17.67 14.33 32 31.1 32C625.7 64 640 49.67 640 32C640 14.33 625.7 0 608 0zM608 48c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16S616.8 48 608 48z" />
    </>,
  ],
]);

const ThreeSixtyDegree: Icon = forwardRef((props, ref) => (
  <BaseIcon
    viewBoxWidth={640}
    viewBoxHeight={512}
    ref={ref}
    {...props}
    weights={weights}
  />
));

ThreeSixtyDegree.displayName = "ThreeSixtyDegree";

export default ThreeSixtyDegree;