
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/><path className="fa-secondary" d="M136 352c-6.156 0-12.28 2.344-16.97 7.031l-48 48c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0l48-48c9.375-9.375 9.375-24.56 0-33.94C148.3 354.3 142.2 352 136 352zM376 160c6.156 0 12.28-2.344 16.97-7.031l48-48c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-48 48c-9.375 9.375-9.375 24.56 0 33.94C363.7 157.7 369.8 160 376 160zM104.1 71.03c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l48 48C123.7 157.7 129.8 160 136 160s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L104.1 71.03zM392.1 359C388.3 354.3 382.2 352 376 352s-12.28 2.344-16.97 7.031c-9.375 9.375-9.375 24.56 0 33.94l48 48c9.375 9.375 24.56 9.375 33.94 0s9.375-24.56 0-33.94L392.1 359z"/>
</>],
['light',<>
	<path d="M493.6 232.4l-171.2-42.78l-42.78-171.2C276.8 7.406 267.3 0 256 0s-20.84 7.406-23.62 18.47L189.6 189.6L18.44 232.4C7.406 235.2 0 244.6 0 255.1c0 11.34 7.406 20.86 18.47 23.64l171.1 42.78l42.66 171.2C235 504.6 244.5 512 255.9 512s20.84-7.406 23.62-18.47l42.78-171.1l171.3-42.78C504.6 276.8 512 267.3 512 255.1C512 244.6 504.6 235.2 493.6 232.4zM314.5 291.4l-18.63 4.654l-40.01 160l-39.89-160L55.89 255.1l160.1-40.01l40.02-160.1l40.01 160.1l160.1 40.02L314.5 291.4zM132.7 155.3C135.8 158.4 139.9 160 144 160s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-64-64c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L132.7 155.3zM368 160c4.094 0 8.188-1.562 11.31-4.688l64-64c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-64 64c-6.25 6.25-6.25 16.38 0 22.62C359.8 158.4 363.9 160 368 160zM132.7 356.7l-64 64c-6.25 6.25-6.25 16.38 0 22.62C71.81 446.4 75.91 448 80 448s8.188-1.562 11.31-4.688l64-64c6.25-6.25 6.25-16.38 0-22.62S138.9 350.4 132.7 356.7zM379.3 356.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l64 64C423.8 446.4 427.9 448 432 448s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L379.3 356.7z"/>
</>],
['regular',<>
	<path d="M487.8 224.8l-121.9-30.49l60.75-75.36c7.75-9.748 7.125-23.24-1.75-31.99c-8.75-8.748-22.12-9.373-32-1.75l-75.5 60.49l-30.25-121.5C283.5 9.998 270.8 0 256 0s-27.62 9.998-31.12 24.24l-30.5 121.1L119 85.48c-9.75-7.748-23.25-7.123-32 1.75C78.25 95.98 77.5 109.3 85.25 119.2l60.5 75.48L24.25 224.8C9.999 228.4 0 241.2 0 255.1C0 270.7 9.999 283.4 24.25 287.1l121.9 30.49l-60.75 75.36c-7.75 9.748-7.125 23.24 1.75 31.99c4.625 4.749 10.75 7.123 16.75 7.123c5.375 0 10.62-1.875 15.12-5.374l75.5-60.49l30.38 121.5C228.4 502 241.2 512 255.9 512c14.75 0 27.62-9.997 31.25-24.37l30.5-121.7l75.38 60.73c4.5 3.499 9.75 5.374 15.12 5.374c6.125 0 12.12-2.374 16.75-7.123c8.875-8.748 9.5-22.24 1.75-31.99l-60.38-75.48l121.5-30.37C501.1 283.4 512 270.7 512 255.1C512 241.2 501.1 228.4 487.8 224.8zM287.6 287.6L256 414L224.4 287.6l-126.5-31.62l126.5-31.62L256 97.85l31.62 126.5l126.5 31.62L287.6 287.6z"/>
</>],
['solid',<>
	<path d="M119 152.1C123.7 157.7 129.8 160 136 160s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-48-48c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L119 152.1zM376 160c6.156 0 12.28-2.344 16.97-7.031l48-48c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-48 48c-9.375 9.375-9.375 24.56 0 33.94C363.7 157.7 369.8 160 376 160zM392.1 359C388.3 354.3 382.2 352 376 352s-12.28 2.344-16.97 7.031c-9.375 9.375-9.375 24.56 0 33.94l48 48c9.375 9.375 24.56 9.375 33.94 0s9.375-24.56 0-33.94L392.1 359zM136 352c-6.156 0-12.28 2.344-16.97 7.031l-48 48c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0l48-48c9.375-9.375 9.375-24.56 0-33.94C148.3 354.3 142.2 352 136 352zM493.6 232.4l-171.2-42.78l-42.78-171.2C276.8 7.406 267.3 0 256 0s-20.84 7.406-23.62 18.47L189.6 189.6L18.44 232.4C7.406 235.2 0 244.6 0 255.1c0 11.34 7.406 20.86 18.47 23.64l171.1 42.78l42.66 171.2C235 504.6 244.5 512 255.9 512s20.84-7.406 23.62-18.47l42.78-171.1l171.3-42.78C504.6 276.8 512 267.3 512 255.1C512 244.6 504.6 235.2 493.6 232.4z"/>
</>],
['thin',<>
	<path d="M493.6 232.4l-171.2-42.78l-42.78-171.2C276.8 7.406 267.3 0 256 0s-20.84 7.406-23.62 18.47L189.6 189.6L18.44 232.4C7.406 235.2 0 244.6 0 255.1c0 11.34 7.406 20.86 18.47 23.64l171.1 42.78l42.66 171.2C235 504.6 244.5 512 255.9 512s20.84-7.406 23.62-18.47l42.78-171.1l171.3-42.78C504.6 276.8 512 267.3 512 255.1C512 244.6 504.6 235.2 493.6 232.4zM489.7 264.1l-180.6 45.11l-45.1 180.4C262.1 493.6 259.9 496 255.9 496c-4.016 0-7.123-2.434-8.1-6.307L202.8 309.2L22.37 264.1C18.44 263.1 16 260 16 256c0-4.016 2.434-7.123 6.318-8.102l180.5-45.11l45.11-180.4C248.9 18.44 251.1 16 256 16c4.016 0 7.123 2.432 8.104 6.316l45.11 180.5l180.4 45.1C493.6 248.9 496 251.1 496 256S493.6 263.1 489.7 264.1zM146.3 157.7C147.9 159.2 149.9 160 152 160s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31l-80-80c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L146.3 157.7zM360 160c2.062 0 4.094-.7813 5.656-2.344l80-80c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0l-80 80c-3.125 3.125-3.125 8.188 0 11.31C355.9 159.2 357.9 160 360 160zM365.7 354.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l80 80C435.9 447.2 437.9 448 440 448s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L365.7 354.3zM146.3 354.3l-80 80c-3.125 3.125-3.125 8.188 0 11.31C67.91 447.2 69.94 448 72 448s4.094-.7813 5.656-2.344l80-80c3.125-3.125 3.125-8.188 0-11.31S149.5 351.2 146.3 354.3z"/>
</>],

]);

const StarChristmas: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

StarChristmas.displayName = "StarChristmas";

export default StarChristmas;
