
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M480 306.8v77.25c0 17.67-14.33 31.1-32 31.1L120.7 416c-18.02 0-32.01-14.71-32.01-31.93c0-2.13 .2139-4.298 .6606-6.481l29.02-141.9c65.2-20.73 117.9-72.23 138.4-140.3L275.8 32h88.98l4.146-14.56c3.005-10.55 12.63-17.44 23.11-17.44c17.95 0 23.1 16.12 23.1 23.99c0 2.17-.2972 4.377-.9204 6.569L385.7 128H336C327.2 128 320 135.2 320 144C320 152.8 327.2 160 336 160h40.1l-14.46 48H320C311.2 208 304 215.2 304 224c0 8.836 7.164 16 16 16h32l107.9 37.04C472 281.9 480 293.7 480 306.8z"/><path className="fa-secondary" d="M256.8 95.35L275.8 32L186.2 32.01c-15.2 0-28.3 10.69-31.35 25.59L118.4 235.7C183.6 214.1 236.3 163.5 256.8 95.35zM616 384c-13.25 0-24 10.75-24 24c0 30.88-25.12 56-56 56h-512C10.75 464 0 474.8 0 488S10.75 512 24 512h512c57.34 0 104-46.66 104-104C640 394.8 629.3 384 616 384z"/>
</>],
['light',<>
	<path d="M624 400c-8.844 0-16 7.156-16 16c0 35.28-28.72 64-64 64H16C7.156 480 0 487.2 0 496S7.156 512 16 512H544c52.94 0 96-43.06 96-96C640 407.2 632.8 400 624 400zM140.3 416L432 416c17.67 0 32-14.32 32-31.1V312.6c0-17.02-9.014-32.77-23.69-41.39L362.3 225.3l53.23-205.3c2.219-8.531-2.938-17.28-11.5-19.5C402.6 .1641 401.3 0 399.9 0c-7.184 0-13.57 4.799-15.44 12l-5.186 20L186.2 32.01c-15.2 0-28.3 10.69-31.35 25.59l-61.53 300.8C87.22 388.1 109.1 416 140.3 416zM186.2 64h58.51L240.5 77.91C226.9 123.4 198.3 162.8 160.3 190.5L186.2 64zM151.5 233.8C208.9 202.6 252.3 149.8 271.2 87.1L278.1 64h92.96l-24.89 96L304 160c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16l33.85 .001l-8.297 32L288 224c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16l63.29 .001l72.81 42.77C428.1 301.6 432 306.9 432 312.6V384H140.3c-6.607 0-10.6-3.686-12.39-5.883s-4.604-6.85-3.279-13.32L151.5 233.8z"/>
</>],
['regular',<>
	<path d="M92.32 368.1c0 25.83 20.98 47.9 48.02 47.9L448 416c17.67 0 32-14.33 32-31.1V312.6c0-17.02-9.014-32.77-23.69-41.39L376 224l55.09-193.4c.6232-2.192 .9204-4.399 .9204-6.569C432 16.29 425.1 0 408 0c-10.49 0-20.11 6.895-23.11 17.44L380.8 32L186.2 32.01c-15.2 0-28.3 10.69-31.35 25.59l-61.53 300.8C92.64 361.7 92.32 364.9 92.32 368.1zM199.2 80h45.45L241.5 90.75c-11.28 37.6-33.85 70.66-63.88 95.15L199.2 80zM168.4 230.9c49.63-28.85 87.14-75.69 103.7-130.1L278.1 80h89.03L344.3 160L304 160c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16L335.2 192l-9.113 32L288 224c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16L335.7 256L432 312.6V368H140.3L168.4 230.9zM616 384c-13.25 0-24 10.75-24 24c0 30.88-25.12 56-56 56h-512C10.75 464 0 474.8 0 488S10.75 512 24 512h512c57.34 0 104-46.66 104-104C640 394.8 629.3 384 616 384z"/>
</>],
['solid',<>
	<path d="M241.5 90.75L259.1 32L186.2 32.01c-15.2 0-28.3 10.69-31.35 25.59L122.1 217.6C178.5 196.9 223.3 151.2 241.5 90.75zM616 384c-13.25 0-24 10.75-24 24c0 30.88-25.12 56-56 56h-512C10.75 464 0 474.8 0 488S10.75 512 24 512h512c57.34 0 104-46.66 104-104C640 394.8 629.3 384 616 384zM88.72 384.1C88.72 401.3 102.7 416 120.7 416L448 416c17.67 0 32-14.33 32-31.1V306.8c0-13.09-7.967-24.85-20.12-29.71L367.3 240H320C311.2 240 304 232.8 304 224c0-8.838 7.164-16 16-16h44.57l13.67-48H336C327.2 160 320 152.8 320 144C320 135.2 327.2 128 336 128h51.35l27.74-97.44c.6232-2.192 .9204-4.399 .9204-6.569c0-7.708-6.03-23.99-23.1-23.99c-10.49 0-20.11 6.893-23.11 17.44L364.8 32H292.5L272.1 99.94C249 176.7 189 232.9 114.8 253.1l-25.46 124.4C88.94 379.8 88.72 381.9 88.72 384.1z"/>
</>],
['thin',<>
	<path d="M140.3 416L448 416c17.67 0 32-14.33 32-31.1V309.6c0-19.62-11.95-37.28-30.17-44.56l-100.7-40.29l16.54-66.85l42.05-147.7c1.219-4.248-1.25-8.654-5.5-9.873C401.4 .1113 400.7 0 399.9 0c-3.443 0-6.628 2.334-7.628 5.848l-7.457 26.19L186.2 32.01c-15.2 0-28.3 10.69-31.35 25.59l-61.53 300.8C87.23 388.1 109.1 416 140.3 416zM170.5 60.82c1.516-7.414 8.107-12.79 15.67-12.79h76.45L249.1 93.06C231.7 151.1 190.4 195.7 138.1 219.2L170.5 60.82zM134.2 238.5c61.52-23.81 110.3-74.3 130.3-140.8L279.3 48.03h100.1l-31.66 111.1H296c-4.406 0-8 3.594-8 8s3.594 8 8 8h48.67l-11.88 47.1H280c-4.406 0-8 3.594-8 8c0 4.404 3.594 7.998 8 7.998l64.05-.0195c.0371 0-.0371 0 0 0l99.84 39.89C456.1 284.8 464 296.4 464 309.6v74.4c0 8.822-7.178 16-16 16H140.3c-9.652 0-18.69-4.289-24.79-11.77c-6.104-7.479-8.494-17.19-6.561-26.64L134.2 238.5zM632 416c-4.406 0-8 3.594-8 8C624 463.7 591.7 496 552 496h-544C3.594 496 0 499.6 0 504S3.594 512 8 512h544c48.53 0 88-39.47 88-87.99C640 419.6 636.4 416 632 416z"/>
</>],

]);

const SkiBootSki: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SkiBootSki.displayName = "SkiBootSki";

export default SkiBootSki;