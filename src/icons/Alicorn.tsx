
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M543.9 76.6c.0176-8.098-3.049-15.89-8.59-21.8c-3.779-4-8.581-9.119-13.69-14.5c11.06-6.84 19.52-17.5 22.2-30.67c.8555-4.385-2.037-8.626-6.422-9.483C536.9 .0508 536.5 0 535.1 0h-120c-69.23 0-127.1 64-127.1 128c-63.92 0-104.3-36.77-127.7-90.26C156.9 30.2 146.7 30.01 143.2 37.46C133.2 58.6 127.1 81.73 128 105.1c0 67 51 136.2 128 150.9C159.1 256 117.3 182.7 102.6 147C60.11 178.7 51.35 238.8 83.05 281.3C86.46 285.9 90.3 290.1 94.48 293.1l-25.66 68.49c-4.555 12.16-5.325 25.42-2.177 38.01l21.77 87.28C91.97 502 104.8 512 119.5 512h32.98c20.81 0 36.08-19.55 31.05-39.74l-21.26-85.39l23.78-63.61l102.1 22.34L288.1 480c0 17.67 14.33 32 32 32h32c17.6 0 32-14.4 32-32V318.2C404.6 297.4 416.1 269.3 416.1 240c0-.2207-.0952-.4121-.105-.6328V136.9L431.1 144l18.89 37.72c7.449 14.86 25.08 21.53 40.52 15.36l32.53-13.07c12.17-4.861 20.11-16.63 20.1-29.74L543.9 76.6zM480 96c-8.836 0-16-7.164-16-16c0-8.838 7.125-16 15.96-16s16 7.162 16 16C495.1 88.84 488.8 96 480 96z"/><path className="fa-secondary" d="M64.36 215.7C54.07 223.3 47.1 235.3 48 248L48 304c0 8.837-7.164 16-16 16l-16 .0001C7.163 320 0 312.8 0 304V248C0 199.4 39.4 160 88 160H88.46C74.58 175.5 66.12 195 64.36 215.7zM632 32L531.9 32c-3.064 3.188-6.437 5.976-10.2 8.299c5.11 5.38 9.91 10.47 13.69 14.5c5.534 5.908 8.613 13.71 8.59 21.8l.0394 6.695l92.44-36.66c3.673-2.456 4.684-7.412 2.228-11.08C637.2 33.34 634.7 32.01 632 32z"/>
</>],
['light',<>
	<path d="M632 64h-97c5.721-10.11 8.626-22.03 8.212-34.2C542.7 13.03 528 0 511.3 0l-111.3 .0003c-69.13 0-125.4 55.25-127.6 123.9C236.8 114.8 209.3 89.25 190.9 47.25c-4-9.125-13-15.12-23-15.25c-10.5 .25-18.88 5.375-23.13 14.38C133.6 70 128 95.13 128 121.1c0 75.38 56.5 143.6 132.9 161.9c4.377 1 8.877-2 9.752-6.5l2.875-15.62c.875-4.25-1.875-8.125-6-9.25c-61.75-15.12-107.5-70-107.5-130.5c0-16.38 2.75-32.25 8-47.38c29.38 56.5 76.13 86.25 136 86.25v-32c0-53.02 42.98-96 96-96h111.3c0 13.25-8.125 24.62-19.63 29.5l20.38 24.75v93.88c0 6.875-4.375 13-10.88 15.12l-25.5 8.75c-9.25 3.25-16.12-2.75-18.5-6.25l-25.13-37.75l-48-16v100.3c0 26.62-12.63 50.12-32 65.5v154.3c0 8.837-7.163 16-16 16h-32c-8.837 0-16-7.163-16-16V318.8L183.6 295.5l-32.13 89.5l18.97 75.08c2.554 10.11-5.087 19.92-15.51 19.92H130.6c-7.396 0-13.83-5.069-15.56-12.26l-18.18-75.61c-1.29-5.366-1.146-10.98 .4179-16.27l27.58-93.35c-17.38-12.12-28.88-32.25-28.88-55.12c0-15.88 5.625-30.12 14.88-41.63c-5-10.88-9-22.12-11.5-33.75c-8 6.875-15.13 15-20.75 24.12C35.13 176.9 0 212.3 0 256v47.1c0 8.801 7.2 16 16 16S32 312.8 32 304v-48c0-21.5 14.25-39.5 33.75-45.62c-1 5.625-1.75 11.12-1.75 17c0 24.25 8.875 47.37 24.5 65.25l-21.93 74.42c-3.123 10.6-3.408 21.83-.8246 32.58l18.17 75.59c5.186 21.57 24.48 36.78 46.67 36.78h24.35c31.28 0 54.21-29.44 46.53-59.77l-16.59-65.6l19.25-53.75l51.88 11.5v119.6c0 26.4 21.6 48 47.1 48l32.01-.0002c26.4 0 48.03-21.6 48.03-48l-.0277-140.2c20.5-21.5 32-49.75 32-79.5v-50.5l14.5 21.75c19.13 28.62 50 20.62 55.5 18.75l25.5-8.625c19.43-6.57 32.5-24.79 32.5-45.3V115.4l92.38-36.75C643 74.25 639.9 64 632 64zM464 96c0-8.875-7.125-16-16-16s-16 7.125-16 16s7.127 16 16 16S464 104.9 464 96z"/>
</>],
['regular',<>
	<path d="M480 96c0-8.875-7.124-16-16-16c-8.877 0-15.92 7.125-15.92 16s7.125 16 16 16S480 104.9 480 96zM632 48h-86.41l-2.258-2.75c15.99-5.371 29.11-18.73 32.62-35.59C577 4.688 573.1 0 567.1 0h-135.9c-68.39 0-125.9 48-140.4 112H265.8c-39.02 0-78.06-13.54-104.8-41.95C157.1 65.87 152.1 64 147.2 64C137.4 64 128 71.63 128 83c0 86.13 59.76 162.8 140 183.3c10.13 2.625 20-5.125 20-15.62V234.3c0-6.91-4.403-13.24-11.06-15.11C239.6 208.7 207.9 181.4 190.5 145.8C213.9 155.1 239.4 160 265.8 160h70.26V144c0-53.02 42.99-96 96.02-96h51.39l44.63 54.25v65.38c0 4.744-3.014 8.961-7.502 10.5l-31.01 10.62c-1.5 .5-9.75 3-16.5-3.75L448.1 160h-32.01l-.0049 80c0 26.12-12.62 49-32 63.63l-.0277 160.4L336.1 464V320L196.2 288.9L167.5 369L191.5 464H150l-21.13-87.88C127.6 370.8 127.8 365.3 129.3 360l22.75-76.75C128.5 273.8 112 250.9 112 224c0-15 5.124-28.62 13.75-39.5c-8.877-14.25-15.63-29.75-20.63-46.13C97.27 144.9 89.89 152 84.01 160.4C37.38 162.5 0 200.9 0 248v48C0 309.3 10.75 320 24 320s24-10.75 24-24l-.0037-48c0-13.25 6.876-24.37 16.75-31.62c-.125 2.5-.7524 5-.7524 7.625c0 30.12 11.88 58.12 32.14 78.62l-12.88 43.75c-3.999 13.25-4.374 27.38-1.125 40.88L106.3 487.5C109.8 501.9 122.6 512 137.4 512h74.76c20.85 0 36.13-19.62 31.02-39.84l-25.52-100.8L227 345l61.01 13.5L288.1 480c0 17.6 14.4 32 32 32h80.01c17.6 0 32.01-14.4 32.01-32v-155.6c20-22.5 31.26-51.13 32.01-81.63V234.4c21 7 38.38 .75 41.01-.125l30.1-10.62c23.94-8.203 40.01-30.71 40.01-56V102.5c0-5.104-1.03-10.08-2.579-14.86l62.87-25C643 58.25 639.9 48 632 48z"/>
</>],
['solid',<>
	<path d="M632 32L531.9 32c5.875-6.125 10.25-13.62 11.1-22.37C544.9 4.632 540.1 0 535.1 0h-120c-70.75 0-127.1 57.25-127.1 128c-63.88 0-104.2-36.76-127.7-90.26C156.1 30.22 146.7 30.03 143.2 37.46C133.5 58.03 128 80.81 128 105.1c0 66.1 51 133.1 128 147.8L256 256c-76.88 0-133.8-49.62-152.6-109C97.75 151.2 92.63 155.9 88 161.1L88 160C39.5 160 0 199.5 0 248v56c0 8.875 7.125 16 16 16L32 320c8.875 0 16-7.125 16-16l.0018-56c0-13.25 6.878-24.38 16.75-31.62c-.125 2.5-.7524 5-.7524 7.625c0 27.62 11.85 52.48 30.47 69.98l-25.74 68.89c-4.496 12.04-5.216 25.15-2.095 37.62l21.77 87.28C91.97 502 104.8 512 119.5 512h32.98c20.81 0 36.09-19.55 31.05-39.74l-21.26-85.39l23.78-63.61l102.1 22.34L288.1 480c0 17.67 14.33 32 32 32h32c17.6 0 32-14.4 32-32V318.2C403.7 297.1 416.1 270.5 416.1 240c0-.25-.105-.3828-.105-.6328V136.9L431.1 144l18.89 37.72c7.455 14.91 25.07 21.6 40.52 15.36l32.53-13.07c12.12-4.893 20.1-16.67 20.1-29.74l-.0246-70.98l92.44-36.66C643 42.26 639.9 32 632 32zM480 96c-8.875 0-16-7.125-16-16S471.1 64 479.1 64c8.875 0 16 7.125 16 16S488.9 96 480 96z"/>
</>],
['thin',<>
	<path d="M464 64.69c-8.836 0-16 7.164-16 16s7.164 16 16 16s16-7.164 16-16S472.8 64.69 464 64.69zM632 32l-93.39 .0005c2.158-4.162 4.121-8.436 5.061-13.08c.9375-4.625-.25-9.406-3.281-13.09c-3.031-3.703-7.5-5.828-12.25-5.828h-124.4c-68.88 0-127.5 57.73-131.7 127.8C183.2 125.9 164.8 42.04 164.1 38.41C163.4 35.05 160.6 32.49 157.2 32.06C153.9 31.78 150.5 33.47 149 36.55C147.8 39.14 126.9 84.06 128.1 134.1c-15.09 5.418-28.56 14.22-39.12 25.93H72c-39.69 0-72 32.3-72 72v80c0 4.422 3.594 8 8 8s8-3.578 8-8v-80c0-30.88 25.12-56 56-56h5.312C69.07 190.2 64 206.4 64 224c0 29.42 13.52 55.43 34.36 73.04L87.25 318.8C67.56 357.2 64 364.2 64 380.9c0 4.906 .9062 12.38 2.094 16.98l23.97 95.95c2.562 10.17 12.81 18.16 23.28 18.16H176c7.438 0 14.34-3.359 18.91-9.234c4.562-5.859 6.156-13.36 4.219-21.05l-30.53-97.03l27.69-55.38L280 358.3v129.8c0 13.23 10.79 23.1 24 23.1L360 512c13.22 0 24-10.77 24-24v-160.9c19.51-17.57 31.1-42.82 31.1-71.14c0-.0352 0 .0352 0 0L416 151.9l5.688 2.031l16.88 33.61c6.797 13.51 20.69 21.52 35.07 21.52c4.801 0 9.648-.8906 14.31-2.766l31.53-12.61c13.75-5.484 24.5-21.41 24.5-36.23l-.0605-72.11l91.15-37.98c3.531-1.469 5.531-5.219 4.781-8.953C639.1 34.69 635.8 32 632 32zM513.5 178.9l-31.57 12.62c-11.07 4.461-23.87-.6836-29.1-11.09l-16.88-33.61c-3.328-6.625-18.72-15.31-29.2-7.93C402.5 141.9 400 146.7 400 151.9c0 0-.0078 104.3 0 104.5c-.1172 22.5-9.59 43.37-26.71 58.79C369.9 318.2 368 322.6 368 327.1v160.9c0 4.41-3.59 8-8 8H304c-4.414 0-8-3.59-8-8v-129.8c0-7.344-4.996-13.74-12.12-15.52L200.2 313.8c-6.375-1.594-14.45 .8672-18.2 8.367l-27.69 55.38c-1.852 3.711-2.195 8-.9492 11.96l30.28 96.14C185.2 491.8 180.7 496 176 496H113.3c-3.148 0-6.992-3.004-7.758-6.035l-24-96.07C80.74 390.6 80 384.5 80 380.9c0-12.5 1.816-16.4 21.5-54.82l11.12-21.77c3.379-6.625 1.75-14.7-3.926-19.5C90.46 269.4 80 247.2 80 224c0-33.2 20.46-61.46 49.34-73.5C131.2 164.8 135.1 179.2 142.2 192.8c19.56 37.59 58.47 61.52 115.7 71.11c.4375 .0781 .875 .1094 1.312 .1094c3.844 0 7.219-2.766 7.875-6.672c.75-4.359-2.188-8.484-6.562-9.219C208.5 239.4 173.5 218.3 156.4 185.5C134.6 143.6 146.4 91.47 155.8 63.47C168.4 93.12 200.3 142.3 272 143.7L288 144l.0032-16c4.164-61.83 55.91-111.1 115.7-111.1h124.2c-1.602 7.621-5.773 14.54-12.07 20.02c-7.695 6.688-6.594 17.27-1.152 23.05c7.094 7.531 13.18 12.34 13.18 23.16l.0625 75.27C527.1 165.8 521.2 175.8 513.5 178.9zM541.4 69.07c-1.768-4.934-4.336-9.555-7.988-13.48l-7.023-7.547c.0313-.0273-.0313 .0273 0 0L592 48L541.4 69.07z"/>
</>],

]);

const Alicorn: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Alicorn.displayName = "Alicorn";

export default Alicorn;