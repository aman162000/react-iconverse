
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M240.1 415.1l.0167 38.36c0 6.297 1.89 12.43 5.359 17.68l17.09 25.69c5.25 7.875 17.18 14.28 26.65 14.28h61.72c9.438 0 21.38-6.394 26.63-14.27l17.09-25.69C397.6 467.6 400 459.7 400 454.4l.1562-70.35l-159.9 .002L240.1 415.1zM112 192c0-13.25-10.75-24-24-24h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C101.3 216 112 205.3 112 192zM616 168h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64c13.25 0 24-10.75 24-24S629.3 168 616 168zM131.1 55.25l-55.5-32C68.25 18.75 59 18.63 51.38 22.88c-7.5 4.375-12.13 12.37-12.13 21c.125 8.75 4.875 16.75 12.38 20.88L107.1 96.75C114.5 101.3 123.8 101.4 131.4 97.13c7.5-4.375 12.12-12.37 12.12-21C143.4 67.38 138.6 59.38 131.1 55.25zM588.4 319.3l-55.5-32c-7.375-4.5-16.62-4.625-24.25-.375c-7.5 4.375-12.12 12.37-12.12 21c.125 8.75 4.875 16.75 12.38 20.88l55.5 32c11.38 6.375 25.88 2.375 32.38-9C603.3 340.5 599.5 326 588.4 319.3zM107.1 287.3L51.62 319.3c-7.5 4.125-12.25 12.12-12.38 20.88c0 8.625 4.625 16.63 12.13 21c7.625 4.25 16.87 4.125 24.25-.375l55.5-32c11.12-6.75 14.87-21.25 8.375-32.5C133 284.9 118.5 280.9 107.1 287.3zM521 100c4.125 0 8.25-1.125 12-3.25l55.38-32c11.25-6.75 14.88-21.25 8.375-32.5c-6.5-11.38-21-15.38-32.38-9L509 55.25c-9.5 5.375-14 16.5-11.25 27C500.6 92.75 510.1 100 521 100z"/><path className="fa-secondary" d="M319.5 .0154C217.5 .2654 144 82.1 144 175.1c0 42.63 15.4 83.76 43.52 115.8c16.62 18.88 42.36 58.23 52.24 91.48c0 .25 .1146 .5105 .1146 .7604l160.3 .0007c0-.25 .0833-.5111 .0833-.7611c9.875-33.25 35.61-72.61 52.24-91.48C480.6 259.8 496 218.6 496 175.1C496 78.62 416.8-.2346 319.5 .0154zM320 96.01c-44.13 0-80 35.87-80 79.1c0 8.875-7.125 16-16 16s-16-7.125-16-16C208.1 114.1 258.1 64.14 320 64.01c8.875 0 16 7.126 16 16S328.9 96.01 320 96.01z"/>
</>],
['light',<>
	<path d="M119.1 33.74l-64-31.1c-7.875-3.1-17.5-.875-21.38 7.125c-4 7.875-.875 17.5 7.125 21.37l64 31.1C107.1 63.36 109.5 63.99 112 63.99c7.375 0 13.88-5.125 15.62-12.37C129.3 44.49 125.8 36.99 119.1 33.74zM112 287.1c-2.5 0-4.875 .625-7.125 1.75l-64 31.1c-8 3.875-11.12 13.5-7.25 21.37c4 7.1 13.62 11.12 21.5 7.25l64-31.1c6.625-3.375 10.12-10.87 8.5-17.1C125.9 293.1 119.4 287.1 112 287.1zM528 63.99c2.5 0 4.875-.625 7.125-1.75l64-31.1c8-3.875 11.12-13.5 7.125-21.37c-3.875-7.1-13.5-11.12-21.38-7.125l-64 31.1c-6.625 3.25-10.12 10.75-8.5 17.87C514.1 58.86 520.6 63.99 528 63.99zM96 175.1C96 167.1 88.88 159.1 80 159.1h-64c-8.875 0-16 7.125-16 15.1S7.125 191.1 16 191.1h64C88.88 191.1 96 184.9 96 175.1zM624 159.1h-64c-8.875 0-16 7.125-16 15.1s7.125 15.1 16 15.1h64c8.875 0 16-7.125 16-15.1S632.9 159.1 624 159.1zM599.1 321.7l-64-31.1c-7.875-3.1-17.5-.75-21.5 7.125c-3.875 7.875-.75 17.5 7.25 21.5l64 31.1c7.875 3.875 17.5 .75 21.5-7.25C610.3 335.2 607.1 325.6 599.1 321.7zM319.5 .0154C222.7 .2967 144 79.89 144 177.4c0 42.91 15.47 84.34 43.55 116.6c13.33 15.31 35.84 49.59 43.73 76.02c1.078 8.687 8.844 14.62 17.64 13.71c8.703-.9687 14.98-8.965 14.11-17.65l-.6094-3.312c-10.31-34.97-36-72.84-50.73-89.77C188.7 246.5 176 212.6 176 177.4c0-81.24 63.05-145.1 143.5-145.3H320c38.13 0 74.05 14.87 101.2 41.94C448.8 101.5 464 138.2 464 177.4c0 35.19-12.67 69.15-35.67 95.62c-14.75 16.94-40.44 54.8-50.75 89.77l-.625 3.344c-1.047 8.75 4.938 17.59 13.67 18.68c.7813 .0938 1.531 .1562 2.281 .1562c7.797 0 14.36-5.121 15.36-13.12c8.344-28.25 30.86-62.53 44.2-77.84C480.5 261.7 496 220.3 496 177.4c0-47.71-18.55-92.49-52.22-126.1C410.5 18.08 365.6-1.172 319.5 .0154zM383.1 415.1H256c-8.846 0-16.01 7.18-16 16.03l.0746 22.34c.0098 6.27 1.884 12.46 5.359 17.68l17.09 25.69c5.225 7.855 17.22 14.28 26.65 14.28h61.72c9.418 0 21.41-6.43 26.63-14.27l17.09-25.69c2.953-4.441 5.351-12.36 5.359-17.68l-.0254-22.34C399.1 423.2 392.8 415.1 383.1 415.1zM367.9 454.4l-16.11 24.45c-.4766 .4375-1.686 1.086-.8672 1.117l-60.29 .1172c-.4238-.1016-1.138-.2773-1.423-.2773c-.1406 0-.1348-.2266 0 0l-17.1-25.48l-.0098-6.367h95.94l.0039 5.18C367.9 453.6 367.7 454.4 367.9 454.4C367.9 454.4 367.8 454.5 367.9 454.4zM336 80.02c0-8.84-7.156-16-16-16c-61.75 0-112 50.24-112 111.1c0 8.844 7.156 16 16 16s16-7.159 16-16c0-44.1 35.88-79.1 80-79.1C328.8 96.01 336 88.86 336 80.02z"/>
</>],
['regular',<>
	<path d="M107.1 287.3L51.62 319.3c-7.5 4.125-12.25 12.13-12.38 20.88c0 8.625 4.625 16.63 12.13 21c7.625 4.25 16.87 4.125 24.25-.375l55.5-32c11.12-6.75 14.87-21.25 8.375-32.5C133 284.9 118.5 280.9 107.1 287.3zM131.1 55.25l-55.5-32c-7.375-4.5-16.62-4.625-24.25-.375c-7.5 4.375-12.13 12.38-12.13 21C39.37 52.63 44.12 60.63 51.62 64.75L107.1 96.75C114.5 101.3 123.8 101.4 131.4 97.13C138.9 92.75 143.5 84.75 143.5 76.13C143.4 67.38 138.6 59.38 131.1 55.25zM112 192c0-13.25-10.75-24-24-24h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C101.3 216 112 205.3 112 192zM521 100c4.125 0 8.25-1.125 12-3.25l55.38-32c11.25-6.75 14.88-21.25 8.375-32.5c-6.5-11.38-21-15.38-32.38-9L509 55.25c-9.5 5.375-14 16.5-11.25 27C500.6 92.75 510.1 100 521 100zM616 168h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64c13.25 0 24-10.75 24-24S629.3 168 616 168zM588.4 319.3l-55.5-32c-7.375-4.5-16.62-4.625-24.25-.375c-7.5 4.375-12.12 12.38-12.12 21c.125 8.75 4.875 16.75 12.38 20.88l55.5 32c11.38 6.375 25.88 2.375 32.38-9C603.3 340.5 599.5 326 588.4 319.3zM320 .0036C218 .3239 144 82.98 144 175.1c0 44.38 16.4 84.82 43.52 115.8c16.53 18.84 42.36 58.26 52.24 91.48c.0313 .25 .0833 .4948 .1146 .7604l160.3 .0007c.0313-.2656 .0521-.4955 .0833-.7611c9.875-33.22 35.71-72.64 52.24-91.48C479.6 260.8 496 220.4 496 175.1C496 78.8 417.2 .0075 320 .0036zM416.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C203.2 236.8 192 206.1 192 175.1C192 113.3 240.1 48.25 319.1 48C390.6 48 448 105.4 448 175.1C448 206.1 436.8 236.8 416.4 260.1zM240.1 454.4c0 6.297 1.89 12.43 5.359 17.68l17.09 25.69c5.25 7.875 17.18 14.28 26.65 14.28h61.72c9.438 0 21.38-6.395 26.63-14.27l17.09-25.69C397.6 467.6 400 459.7 400 454.4v-38.36l-159.9 .0048L240.1 454.4zM304 80C259.9 80 224 115.9 224 160c0 8.844 7.156 16.01 16 16.01S256 168.8 256 160c0-26.47 21.53-48 48-48c8.844 0 16-7.145 16-15.99S312.8 80 304 80z"/>
</>],
['solid',<>
	<path d="M240.1 454.4c.125 6.25 1.983 12.43 5.359 17.68l17.09 25.69c5.25 7.875 17.27 14.28 26.65 14.28h61.72c9.5 0 21.38-6.395 26.63-14.27l17.09-25.69c3.25-5.375 5.109-11.43 5.359-17.68v-38.36l-159.9 .0048L240.1 454.4zM319.5 .0154C217.5 .2654 144 82.1 144 175.1c0 42.62 15.4 83.76 43.52 115.8c16.62 18.87 42.36 58.23 52.24 91.48c0 .25 .1146 .5105 .1146 .7604l160.3 .0007c0-.25 .0833-.5111 .0833-.7611c9.875-33.25 35.61-72.61 52.24-91.48c28.12-32 43.52-73.14 43.52-115.8C496 78.62 416.8-.2346 319.5 .0154zM320 96.01c-44.13 0-80 35.87-80 79.1c0 8.875-7.125 16-16 16s-16-7.125-16-16C208.1 114.1 258.1 64.14 320 64.01c8.875 0 16 7.126 16 16S328.9 96.01 320 96.01zM112 192c0-13.25-10.75-24-24-24h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C101.2 216 112 205.3 112 192zM616 168h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64c13.25 0 24-10.75 24-24S629.3 168 616 168zM131.1 55.25l-55.5-32c-7.375-4.5-16.63-4.625-24.25-.375c-7.5 4.375-12.13 12.38-12.13 21c.125 8.75 4.875 16.75 12.38 20.88L107.1 96.75c7.375 4.5 16.63 4.625 24.25 .375c7.5-4.375 12.12-12.38 12.12-21C143.4 67.38 138.6 59.38 131.1 55.25zM588.4 319.3l-55.5-32c-7.375-4.5-16.62-4.625-24.25-.375c-7.5 4.375-12.12 12.38-12.12 21c.125 8.75 4.875 16.75 12.38 20.88l55.5 32c11.38 6.375 25.88 2.375 32.38-9C603.3 340.5 599.5 326 588.4 319.3zM107.1 287.3L51.62 319.3c-7.5 4.125-12.25 12.13-12.38 20.88c0 8.625 4.625 16.63 12.13 21c7.625 4.25 16.87 4.125 24.25-.375l55.5-32c11.12-6.75 14.87-21.25 8.375-32.5C133 284.9 118.5 280.9 107.1 287.3zM521 100c4.125 0 8.25-1.125 12-3.25l55.38-32c11.25-6.75 14.88-21.25 8.375-32.5c-6.5-11.37-21-15.38-32.38-9L509 55.25c-9.5 5.375-14 16.5-11.25 27C500.6 92.75 510.1 100 521 100z"/>
</>],
['thin',<>
	<path d="M328 72.01c0-4.422-3.594-7.993-8-7.993c-66.16 0-120 53.82-120 119.1c0 4.422 3.594 8 8 8s8-3.578 8-8c0-57.34 46.66-104 104-104C324.4 80.01 328 76.43 328 72.01zM383.1 415.1H256c-8.846 0-16.01 7.18-16 16.03l.0746 22.34c.0098 6.324 1.855 12.42 5.359 17.68l17.09 25.69c5.227 7.855 17.22 14.28 26.65 14.28h61.72c9.436 0 21.4-6.418 26.63-14.27l17.09-25.69c2.93-4.406 5.351-12.4 5.359-17.68l-.0254-22.34C399.1 423.2 392.8 415.1 383.1 415.1zM383.9 454.4c-.0039 2.148-1.473 6.992-2.664 8.785l-17.09 25.68c-2.266 3.406-9.246 7.148-13.34 7.148H289.2c-4.09 0-11.07-3.738-13.34-7.141l-17.05-25.62c-1.768-2.656-2.703-5.742-2.709-8.934l-.0371-22.32h127.9L383.9 454.4zM320 .0036L319.5 .0154C222.4 .3123 143.3 79.55 143.3 176.7c0 42.78 15.53 84.06 43.75 116.2c13.56 15.45 38.69 52.09 48.19 84.05c.5 4.375 4.438 7.5 8.875 7c4.375-.5156 7.531-4.484 7-8.875l-.375-2.094c-10.41-34.98-37.22-74.17-51.69-90.64C173.5 253.1 159.3 215.6 159.3 176.7c0-89.81 70.34-160.4 160.2-160.7h.5313c42.81 0 83.06 16.62 113.4 46.86c30.47 30.37 47.25 70.78 47.25 113.8c0 38.91-14.12 76.44-39.75 105.7c-14.47 16.47-41.28 55.66-52 92.16c0 .0313-.0625 .5625-.0625 .5781c-.5313 4.391 2.531 8.672 6.906 9.188c.3438 .0313 .6875 .0469 1.031 .0469c3.938 0 7.281-2.719 7.75-6.766c9.688-32.55 34.81-69.19 48.38-84.64c28.22-32.17 43.75-73.45 43.75-116.2c0-47.3-18.44-91.73-51.94-125.1C411.4 18.29 367.1 .0036 320 .0036zM43.58 .8509C39.66-1.102 34.84 .4915 32.84 4.429C30.88 8.382 32.47 13.18 36.42 15.16l80 40C117.6 55.74 118.8 56.01 120 56.01c2.922 0 5.75-1.625 7.156-4.422C129.1 47.63 127.5 42.84 123.6 40.85L43.58 .8509zM112 152c0-4.422-3.578-8-8-8h-96c-4.422 0-8 3.578-8 8s3.578 8 8 8h96C108.4 160 112 156.4 112 152zM520 56.01c1.203 0 2.422-.2656 3.578-.8438l80-40c3.953-1.984 5.547-6.781 3.578-10.73c-1.984-3.953-6.75-5.562-10.73-3.578l-80 40c-3.953 1.984-5.547 6.781-3.578 10.73C514.3 54.38 517.1 56.01 520 56.01zM632 144h-96c-4.422 0-8 3.578-8 8s3.578 8 8 8h96c4.422 0 8-3.578 8-8S636.4 144 632 144zM523.6 248.8C522.4 248.3 521.2 247.1 520 247.1c-2.922 0-5.75 1.625-7.156 4.422c-1.969 3.953-.375 8.75 3.578 10.73l80 40c3.922 1.953 8.734 .3594 10.73-3.578c1.969-3.953 .375-8.75-3.578-10.73L523.6 248.8zM120 247.1c-1.203 0-2.422 .2656-3.578 .8438l-80 40C32.47 290.8 30.88 295.6 32.84 299.6c1.984 3.953 6.75 5.562 10.73 3.578l80-40c3.953-1.984 5.547-6.781 3.578-10.73C125.8 249.6 122.9 247.1 120 247.1z"/>
</>],

]);

const LightbulbOn: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LightbulbOn.displayName = "LightbulbOn";

export default LightbulbOn;
