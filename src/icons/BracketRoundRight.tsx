
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M37.53 465.8c-9.844-14.59-5.969-34.47 8.594-44.37c3.344-2.281 81.87-57.09 81.87-165.5c0-108.2-78.37-163.1-81.87-165.5C31.53 80.73 27.6 60.92 37.38 46.26C47.19 31.54 67.03 27.57 81.75 37.39C86.25 40.39 192 112.5 192 256s-105.7 215.6-110.2 218.6C76.31 478.3 70.16 480 64.1 480C53.82 480 43.72 475 37.53 465.8z"/>
</>],
['light',<>
	<path d="M159.1 255.1c0-128.3-85.76-192.4-89.42-195.1C63.46 55.75 61.86 45.75 67.05 38.62c5.219-7.219 15.19-8.719 22.31-3.594C93.55 38.06 192 110.8 192 256s-98.45 217.9-102.6 220.1C86.52 479 83.27 480 80.02 480c-4.938 0-9.813-2.313-12.97-6.625c-5.188-7.125-3.594-17.13 3.532-22.31C74.24 448.4 159.1 384.3 159.1 255.1z"/>
</>],
['regular',<>
	<path d="M43.66 435.4c4.094-2.469 100.3-61.91 100.3-179.4c0-117.1-95.65-176.6-100.3-179.4C32.35 69.81 28.6 55.09 35.38 43.72C42.16 32.37 56.85 28.59 68.28 35.37C73.32 38.37 192 110.7 192 256s-118.7 217.6-123.7 220.6c-3.844 2.281-8.062 3.375-12.22 3.375c-8.156 0-16.12-4.188-20.62-11.69C28.66 456.1 32.35 442.2 43.66 435.4z"/>
</>],
['solid',<>
	<path d="M37.53 465.8c-9.844-14.59-5.969-34.47 8.594-44.37c3.344-2.281 81.87-57.09 81.87-165.5c0-108.2-78.37-163.1-81.87-165.5C31.53 80.73 27.6 60.92 37.38 46.26C47.19 31.54 67.03 27.57 81.75 37.39C86.25 40.39 192 112.5 192 256s-105.7 215.6-110.2 218.6C76.31 478.3 70.16 480 64.1 480C53.82 480 43.72 475 37.53 465.8z"/>
</>],
['thin',<>
	<path d="M143.1 255.1c0-132.7-91.79-200.8-92.7-201.5C47.74 51.87 46.93 46.87 49.52 43.3C52.11 39.71 57.15 38.96 60.68 41.49c4.063 2.938 99.32 73.38 99.32 214.5s-95.26 211.6-99.32 214.5c-1.406 1-3.063 1.5-4.688 1.5c-2.469 0-4.907-1.156-6.469-3.313c-2.594-3.563-1.781-8.563 1.781-11.16C52.21 456.8 143.1 388.7 143.1 255.1z"/>
</>],

]);

const BracketRoundRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={192} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BracketRoundRight.displayName = "BracketRoundRight";

export default BracketRoundRight;