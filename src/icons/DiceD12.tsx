
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M113.1 328.5l55.01 172l-85.87-42.95c-10.53-5.281-23.38-18.09-28.62-28.62L6.75 333.5C2.313 324.6 0 314.8 0 304.9V214.6L113.1 328.5zM364.6 328.2L305.8 512H206.2l-58.81-183.8L256 273.9L364.6 328.2zM512 214.6V304.9c0 8.344-3.031 21.16-6.75 28.62l-47.73 95.38c-5.25 10.53-18.09 23.38-28.62 28.62l-85.87 42.95l55.01-172L512 214.6z"/><path className="fa-secondary" d="M7.531 176.9l123.6 123.6L240 246.1V139.3L58.97 74.06L7.531 176.9zM333.5 6.75C326.1 3.031 313.2 0 304.9 0H207.1C197.2 0 187.4 2.313 178.5 6.75L89.72 51.13L256 111l166.3-59.88L333.5 6.75zM453 74.06L272 139.3v106.9l108.8 54.41l123.6-123.6L453 74.06z"/>
</>],
['light',<>
	<path d="M505.3 178.5l-47.73-95.39c-6.125-12.37-16.25-22.5-28.62-28.62l-95.39-47.73C324.6 2.25 314.9 0 304.9 0H207.1c-10 0-19.75 2.25-28.62 6.75L83.11 54.48C70.73 60.61 60.61 70.73 54.48 83.11l-47.73 95.39C2.25 187.4 0 197.1 0 207.1v97.77c0 10 2.25 19.75 6.75 28.62l47.73 95.4c6.125 12.37 16.25 22.5 28.62 28.62l95.4 47.73C187.4 509.6 197.1 512 207.1 512h97.75c10 0 19.75-2.25 28.62-6.75l95.4-47.73c12.37-6.125 22.5-16.25 28.62-28.62l47.73-95.38C509.6 324.6 512 314.9 512 304.9V207.1C512 197.1 509.8 187.4 505.3 178.5zM475.8 190.9l-95.63 109.2L272 246.1V140.2l157-42.87L475.8 190.9zM308.8 480h-105.5l-55.37-152L256 273.9L364.1 328L308.8 480zM199.5 32h113l82.75 41.38L256 111.4l-139.2-38L199.5 32zM83 97.38L240 140.2v105.9l-108.1 54L36.25 190.9L83 97.38zM32 312.5V234.6l81.96 93.83l48.42 132.9l-74.5-37.25L32 312.5zM424.1 424.1l-74.5 37.25l48.42-132.9L480 234.6V312.5L424.1 424.1z"/>
</>],
['regular',<>
	<path d="M508.6 185.2l-55.87-111.7c-3.125-6.125-8.125-11.12-14.25-14.25l-111.7-55.87C322.4 1.125 317.4 0 312.5 0h-113C194.6 0 189.6 1.125 185.2 3.375L73.5 59.25C67.38 62.38 62.38 67.38 59.25 73.5L3.375 185.2C1.125 189.6 0 194.6 0 199.5v113c0 4.875 1.125 9.75 3.375 14.25l55.87 111.7c3.125 6.125 8.125 11.12 14.25 14.25l111.7 55.87C189.6 510.9 194.6 512 199.5 512h113c4.875 0 9.75-1.125 14.25-3.375l111.7-55.87c6.125-3.125 11.12-8.125 14.25-14.25l55.87-111.7C510.9 322.2 512 317.4 512 312.5v-113C512 194.6 510.9 189.8 508.6 185.2zM455 185.4l-78.13 104.2L280 241.1v-93.5l140.8-28.12l-1-4.625L455 185.4zM300.5 464h-89l-53-132.4L256 282.9l97.5 48.75L300.5 464zM203.4 48h105.3L373 80.12L256 103.5L139 80.12L203.4 48zM92.25 114.9l-1 4.625L232 147.6v93.5L135.1 289.6L57 185.4L92.25 114.9zM48 308.6v-55.25l58.88 78.5l42 104.9L99.75 412.2L48 308.6zM412.2 412.2l-49.12 24.5l42-104.9L464 253.4v55.25L412.2 412.2z"/>
</>],
['solid',<>
	<path d="M113.1 328.5l55.01 172l-85.87-42.95c-10.53-5.281-23.38-18.09-28.62-28.62L6.75 333.5C2.313 324.6 0 314.8 0 304.9V214.6L113.1 328.5zM131.2 300.5L7.531 176.9l51.44-102.8L240 139.3v106.9L131.2 300.5zM256 111L89.72 51.13l88.77-44.37C187.4 2.313 197.2 0 207.1 0h97.78c8.344 0 21.17 3.031 28.61 6.75l88.78 44.37L256 111zM364.6 328.2L305.8 512H206.2l-58.81-183.8L256 273.9L364.6 328.2zM272 139.3l181-65.19l51.44 102.8l-123.6 123.6L272 246.1V139.3zM512 214.6V304.9c0 8.344-3.031 21.16-6.75 28.62l-47.73 95.38c-5.25 10.53-18.09 23.38-28.62 28.62l-85.87 42.95l55.01-172L512 214.6z"/>
</>],
['thin',<>
	<path d="M505.3 178.5l-47.73-95.39c-5.25-10.53-18.09-23.38-28.62-28.62l-95.39-47.73C326.1 3.031 313.2 0 304.9 0H207.1C197.1 0 187.4 2.313 178.5 6.75L83.11 54.48C72.58 59.73 59.73 72.58 54.48 83.11l-47.73 95.39C3.031 185.9 0 198.8 0 207.1v97.77c0 9.969 2.313 19.75 6.75 28.62l47.73 95.4c5.25 10.53 18.09 23.38 28.62 28.62l95.4 47.73C185.9 508.1 198.8 512 207.1 512h97.75c9.969 0 19.75-2.312 28.62-6.75l95.4-47.73c10.53-5.25 23.38-18.09 28.62-28.62l47.73-95.38C508.1 326.1 512 313.2 512 304.9V207.1C512 197.2 509.7 187.4 505.3 178.5zM490.9 185.7c2.488 4.973 3.773 10.44 4.422 15.97l-112.8 124.1L264 251.6V149.6l176.8-63.14c.875 1.277 1.859 2.592 2.441 3.756L490.9 185.7zM90.25 68.78l95.41-47.72C192.3 17.75 199.7 16 207.1 16h97.78c5.816 0 16.23 2.459 21.44 5.061l95.43 47.73c2.207 1.1 4.676 2.906 7.168 4.955L256 135.5L83.07 73.74C85.56 71.69 88.04 69.88 90.25 68.78zM68.79 90.23c.5781-1.156 1.555-2.465 2.43-3.736L248 149.6v101.9l-118.6 74.13L16.52 201.5C17.38 195.1 19.17 189.4 21.06 185.7L68.79 90.23zM68.78 421.8l-47.71-95.41C17.75 319.7 16 312.3 16 304.9V224.7l105 115.5l50.76 143.8l-81.54-40.78C82.88 439.5 72.45 429.1 68.78 421.8zM207.1 496c-3.969 0-10.01-1.174-15.14-2.723L137.7 339.4L256 265.4l118.3 73.96l-54.3 153.8C315.1 494.9 310.1 496 304.9 496H207.1zM490.9 326.3l-47.73 95.43c-3.664 7.355-14.09 17.78-21.46 21.45l-81.52 40.77l50.76-143.8L496 224.7v80.2C496 310.7 493.5 321.1 490.9 326.3z"/>
</>],

]);

const DiceD12: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DiceD12.displayName = "DiceD12";

export default DiceD12;