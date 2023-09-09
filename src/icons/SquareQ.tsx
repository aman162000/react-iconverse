
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 128C153.4 128 96 185.4 96 256s57.41 128 128 128c26.64 0 51.37-8.209 71.88-22.18l15.15 15.15C315.7 381.7 321.8 384 328 384s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-15.15-15.15C343.8 307.4 352 282.6 352 256C352 185.4 294.6 128 224 128zM294.7 292.7l-29.69-29.69c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l29.69 29.69C249.7 332.4 237.3 336 224 336c-44.13 0-80-35.89-80-80S179.9 176 224 176s80 35.89 80 80C304 269.3 300.4 281.7 294.7 292.7z"/><path className="fa-secondary" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM344.1 343c9.375 9.375 9.375 24.56 0 33.94C340.3 381.7 334.2 384 328 384s-12.28-2.344-16.97-7.031l-15.15-15.15C275.4 375.8 250.6 384 224 384c-70.59 0-128-57.42-128-128s57.41-128 128-128s128 57.42 128 128c0 26.63-8.211 51.37-22.19 71.88L344.1 343zM224 176C179.9 176 144 211.9 144 256s35.88 80 80 80c13.31 0 25.67-3.576 36.72-9.344l-29.69-29.69c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l29.69 29.69C300.4 281.7 304 269.3 304 256C304 211.9 268.1 176 224 176z"/>
</>],
['light',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416zM224 128C153.4 128 96 185.4 96 256s57.41 128 128 128c29.52 0 56.4-10.45 78.08-27.3l22.61 22.61C327.8 382.4 331.9 384 336 384s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-22.61-22.61C341.6 312.4 352 285.5 352 256C352 185.4 294.6 128 224 128zM302.1 311.5l-34.77-34.77c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l34.77 34.77C263.8 345.3 244.7 352 224 352c-52.94 0-96-43.06-96-96s43.06-96 96-96s96 43.06 96 96C320 276.7 313.3 295.8 302.1 311.5z"/>
</>],
['regular',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V416zM224 128C153.4 128 96 185.4 96 256s57.41 128 128 128c26.64 0 51.37-8.209 71.88-22.18l15.15 15.15C315.7 381.7 321.8 384 328 384s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-15.15-15.15C343.8 307.4 352 282.6 352 256C352 185.4 294.6 128 224 128zM294.7 292.7l-29.69-29.69c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l29.69 29.69C249.7 332.4 237.3 336 224 336c-44.13 0-80-35.89-80-80S179.9 176 224 176s80 35.89 80 80C304 269.3 300.4 281.7 294.7 292.7z"/>
</>],
['solid',<>
	<path d="M224 176C179.9 176 144 211.9 144 256s35.88 80 80 80c13.31 0 25.67-3.576 36.72-9.344l-29.69-29.69c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l29.69 29.69C300.4 281.7 304 269.3 304 256C304 211.9 268.1 176 224 176zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM344.1 343c9.375 9.375 9.375 24.56 0 33.94C340.3 381.7 334.2 384 328 384s-12.28-2.344-16.97-7.031l-15.15-15.15C275.4 375.8 250.6 384 224 384c-70.59 0-128-57.42-128-128s57.41-128 128-128s128 57.42 128 128c0 26.63-8.211 51.37-22.19 71.88L344.1 343z"/>
</>],
['thin',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416zM224 128C153.4 128 96 185.4 96 256s57.41 128 128 128c32.41 0 61.7-12.49 84.27-32.41l30.07 30.07C339.9 383.2 341.9 384 344 384s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31l-30.07-30.07C339.5 317.7 352 288.4 352 256C352 185.4 294.6 128 224 128zM308.3 328.1l-38.62-38.62c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l38.62 38.62C277.3 357.3 251.1 368 224 368c-61.75 0-112-50.25-112-112S162.3 144 224 144s112 50.25 112 112C336 283.1 325.3 309.3 308.3 328.1z"/>
</>],

]);

const SquareQ: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareQ.displayName = "SquareQ";

export default SquareQ;