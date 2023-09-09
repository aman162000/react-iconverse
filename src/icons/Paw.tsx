
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224z"/><path className="fa-secondary" d="M108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z"/>
</>],
['light',<>
	<path d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.87 71.74-55.75C447.1 346.8 335.4 224 256 224zM376.2 448c-20.25 0-37.75-5.75-56.37-11.88C300.2 429.6 279.9 422.9 256 422.9c-23.62 0-43.87 6.75-63.37 13.12C174 442.2 156.4 448 135.8 448C96.01 448 96.01 430.1 96.01 424.2C96.01 361.4 196.3 256 256 256s159.1 105.4 159.1 168.2C415.1 430.1 415.1 448 376.2 448zM474.9 161.3c-3.625-.875-7.24-1.26-10.86-1.26c-25.87 0-51.63 21.01-60.75 51.38c-10.37 34.63 4.75 68.37 33.87 75.37c3.625 .875 7.238 1.259 10.86 1.259c25.87 0 51.63-21.01 60.76-51.38C519.1 202 503.1 168.3 474.9 161.3zM478.1 227.4C472.7 245.2 458.5 256 447.1 256c-1.125 0-2.25-.125-3.375-.375c-3.75-.875-6.749-3.375-8.999-7.25c-4.125-7.25-4.75-17.62-1.75-27.75C439.2 202.8 453.5 192 463.1 192c1.25 0 2.375 .125 3.375 .375c3.75 .875 6.75 3.375 8.999 7.25C480.5 206.9 481.1 217.2 478.1 227.4zM318.5 190.6C322.1 191.5 325.7 192 329.3 192c27.75 0 56.16-26.88 66.66-65.25c11.87-43.38-3.625-85.25-34.5-93.37C357.9 32.5 354.3 32 350.7 32c-27.75 0-56.16 26.75-66.66 65.25C272.1 140.6 287.6 182.5 318.5 190.6zM314.9 105.6C322.2 78.5 340.4 64 350.6 64c.9999 0 1.875 .125 2.625 .375c4.125 1 7.124 5 8.999 8c4.1 8.875 8.499 25.5 2.875 46C357.7 145.5 339.6 160 329.2 160c-.8749 0-1.75-.125-2.5-.375c-4.125-1-7.124-5-8.999-8C312.7 142.8 309.2 126.1 314.9 105.6zM182.7 192c3.625 0 7.207-.5006 10.83-1.376C224.4 182.5 239.9 140.6 228 97.25C217.5 58.88 189.1 32 161.3 32C157.7 32 154.1 32.5 150.5 33.38c-30.87 8.125-46.37 49.1-34.5 93.37C126.5 165.1 154.9 192 182.7 192zM149.8 72.38c1.875-3 4.875-7 8.999-8C159.5 64.12 160.4 64 161.3 64c10.37 0 28.5 14.5 35.87 41.62c5.625 20.5 2.125 37.13-2.875 45.1c-1.875 3-4.875 7-8.999 8C184.5 159.9 183.6 160 182.6 160C172.4 160 154.3 145.5 146.9 118.4C141.3 97.88 144.8 81.25 149.8 72.38zM74.89 286.8c29.12-7 44.25-40.75 33.87-75.37C99.64 181 73.88 159.1 48.01 159.1c-3.625 0-7.24 .3849-10.86 1.26c-29.12 7-44.25 40.75-33.87 75.37c9.124 30.38 34.88 51.38 60.76 51.38C67.65 288 71.26 287.6 74.89 286.8zM33.89 227.4C30.89 217.2 31.52 206.8 35.64 199.6C37.89 195.8 40.89 193.2 44.64 192.4C45.77 192.1 46.89 192 48.02 192c10.5 0 24.75 10.75 30.12 28.62c2.1 10.13 2.375 20.5-1.75 27.75C74.14 252.2 71.14 254.8 67.39 255.6C66.26 255.9 65.26 256 64.02 256C53.52 256 39.27 245.2 33.89 227.4z"/>
</>],
['regular',<>
	<path d="M74.89 286.8c29.12-7 44.25-40.75 33.87-75.37C99.64 181 73.88 159.1 48.01 159.1c-3.625 0-7.24 .3849-10.86 1.26c-29.12 7-44.25 40.75-33.87 75.37c9.124 30.38 34.88 51.38 60.76 51.38C67.65 288 71.26 287.6 74.89 286.8zM318.5 190.6C322.1 191.5 325.7 192 329.3 192c27.75 0 56.16-26.88 66.66-65.25c11.87-43.38-3.625-85.25-34.5-93.37C357.9 32.5 354.3 32 350.7 32c-27.75 0-56.16 26.75-66.66 65.25C272.1 140.6 287.6 182.5 318.5 190.6zM474.9 161.3c-3.625-.875-7.24-1.26-10.86-1.26c-25.87 0-51.63 21.01-60.75 51.38c-10.37 34.63 4.75 68.37 33.87 75.37c3.625 .875 7.238 1.259 10.86 1.259c25.87 0 51.63-21.01 60.76-51.38C519.1 202 503.1 168.3 474.9 161.3zM182.7 192c3.625 0 7.207-.5006 10.83-1.376C224.4 182.5 239.9 140.6 228 97.25C217.5 58.88 189.1 32 161.3 32C157.7 32 154.1 32.5 150.5 33.38c-30.87 8.125-46.37 49.1-34.5 93.37C126.5 165.1 154.9 192 182.7 192zM256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.87 71.74-55.75C447.1 346.8 335.4 224 256 224zM399.7 427.1C398.9 428.1 392.1 432 376.2 432c-17.75 0-33.25-5.125-51.37-11.12c-19.87-6.5-42.37-14-68.87-14c-26.25 0-48.62 7.5-68.37 14C169.5 426.9 153.8 432 135.8 432c-15.87 0-22.62-3.875-23.37-4.625c-.125-.25-.375-1.25-.375-3.125C112 370.1 204.9 272 256 272s143.1 98.13 143.1 152.2C399.1 426.1 399.7 427.1 399.7 427.1z"/>
</>],
['solid',<>
	<path d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224zM108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z"/>
</>],
['thin',<>
	<path d="M318.5 190.6c3.547 .9297 7.23 1.376 10.83 1.376c27.88 0 56.15-26.84 66.66-65.25c11.87-43.37-3.624-85.25-34.5-93.37C357.9 32.45 354.3 32 350.7 32c-27.88 0-56.15 26.84-66.66 65.25C272.1 140.6 287.6 182.5 318.5 190.6zM299.4 101.5C307.8 70.99 329.8 48 350.7 48c2.275 0 4.525 .2891 6.676 .8516c9.412 2.477 15.32 9.816 18.62 15.54c8.678 15.04 10.37 36.78 4.518 58.14c-8.346 30.49-30.41 53.48-51.31 53.48c-2.275 0-4.525-.2891-6.676-.8516c-9.412-2.477-15.32-9.816-18.62-15.54C295.3 144.6 293.6 122.8 299.4 101.5zM474.9 161.3c-3.582-.8613-7.236-1.26-10.86-1.26c-25.86 0-51.66 21.02-60.75 51.38c-10.37 34.63 4.749 68.37 33.87 75.37c3.584 .8613 7.238 1.259 10.86 1.259c25.84 0 51.55-21.02 60.76-51.38C519.1 202 503.1 168.3 474.9 161.3zM493.4 231.1c-6.922 22.83-26.47 40.04-45.47 40.04c-2.41 0-4.801-.2813-7.102-.834c-10.15-2.439-15.1-9.42-19.12-14.85c-6.379-11.09-7.533-25.81-3.168-40.38c6.832-22.8 26.37-39.99 45.45-39.99c2.416 0 4.807 .2813 7.107 .834c10.15 2.439 15.1 9.42 19.12 14.85C496.6 202.7 497.8 217.5 493.4 231.1zM182.7 192c3.605 0 7.281-.446 10.83-1.376C224.4 182.5 239.9 140.6 228 97.25C217.5 58.84 189.2 32 161.3 32c-3.604 0-7.281 .4475-10.83 1.377c-30.87 8.125-46.37 50-34.5 93.37C126.5 165.2 154.8 192 182.7 192zM135.1 64.39C139.3 58.67 145.2 51.33 154.6 48.86C156.7 48.29 158.1 48 161.3 48c20.91 0 42.97 22.99 51.31 53.48c5.848 21.36 4.158 43.09-4.518 58.14c-3.299 5.721-9.207 13.06-18.6 15.53c-2.168 .5664-4.418 .8555-6.691 .8555c-20.91 0-42.97-22.99-51.31-53.48C125.6 101.2 127.3 79.43 135.1 64.39zM74.89 286.8c29.12-7 44.25-40.75 33.87-75.37C99.67 181 73.86 159.1 48.01 159.1c-3.629 0-7.279 .3985-10.86 1.26c-29.12 7-44.25 40.75-33.87 75.37c9.098 30.36 34.9 51.38 60.76 51.38C67.65 288 71.3 287.6 74.89 286.8zM18.6 232c-4.367-14.57-3.213-29.29 3.166-40.38c3.121-5.428 8.971-12.41 19.12-14.85c2.301-.5527 4.691-.834 7.105-.834c19.08 0 38.62 17.2 45.45 39.99c4.365 14.57 3.211 29.29-3.166 40.38C87.15 261.8 81.3 268.8 71.15 271.2c-2.301 .5527-4.691 .834-7.105 .834C44.97 272 25.43 254.8 18.6 232zM256 224c-79.37 0-191.1 122.8-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.87 71.74-55.75C447.1 346.8 335.4 224 256 224zM376.2 464c-22.84 0-42.4-6.461-61.32-12.71C296.4 445.2 277.3 438.9 256 438.9c-21.05 0-39.1 6.266-58.32 12.33C178.7 457.5 158.1 464 135.8 464c-20.82 0-55.74-5.164-55.74-39.75c0-70.6 108.6-184.2 175.1-184.2s175.1 113.6 175.1 184.2C431.1 458.8 397.1 464 376.2 464z"/>
</>],

]);

const Paw: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Paw.displayName = "Paw";

export default Paw;
