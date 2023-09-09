
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M358.6 230.6l-112 112C240.4 348.9 232.2 352 224 352s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 274.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S371.1 218.1 358.6 230.6z"/><path className="fa-secondary" d="M384 32H64C28.66 32 0 60.65 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM358.6 230.6l-112 112C240.4 348.9 232.2 352 224 352s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 274.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S371.1 218.1 358.6 230.6z"/>
</>],
['light',<>
	<path d="M324.7 212.7L224 313.4L123.3 212.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l112 112C215.8 350.4 219.9 352 224 352s8.188-1.562 11.31-4.688l112-112c6.25-6.25 6.25-16.38 0-22.62S330.9 206.4 324.7 212.7zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416z"/>
</>],
['regular',<>
	<path d="M319 207L224 302.1L128.1 207c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l112 112C211.7 357.7 217.8 360 224 360s12.28-2.344 16.97-7.031l112-112c9.375-9.375 9.375-24.56 0-33.94S328.4 197.7 319 207zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16V416z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.66 32 0 60.65 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM358.6 230.6l-112 112C240.4 348.9 232.2 352 224 352s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 274.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S371.1 218.1 358.6 230.6z"/>
</>],
['thin',<>
	<path d="M330.2 202.7L224 316.4L117.8 202.7C116.3 200.1 114.1 200.1 112 200.1c-1.969 0-3.906 .7187-5.469 2.156C103.3 205.3 103.1 210.3 106.2 213.6l112 120c3 3.25 8.688 3.25 11.69 0l112-120c3.031-3.219 2.844-8.281-.375-11.3C338.2 199.3 333.2 199.4 330.2 202.7zM384 32H64C28.66 32 0 60.65 0 96v320c0 35.35 28.66 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416z"/>
</>],

]);

const SquareChevronDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareChevronDown.displayName = "SquareChevronDown";

export default SquareChevronDown;
