
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 128C185.4 128 128 185.4 128 256s57.41 128 128 128c26.64 0 51.37-8.209 71.88-22.18l15.15 15.15C347.7 381.7 353.8 384 360 384s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-15.15-15.15C375.8 307.4 384 282.6 384 256C384 185.4 326.6 128 256 128zM326.7 292.7l-29.69-29.69c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l29.69 29.69C281.7 332.4 269.3 336 256 336c-44.13 0-80-35.89-80-80S211.9 176 256 176s80 35.89 80 80C336 269.3 332.4 281.7 326.7 292.7z"/><path className="fa-secondary" d="M256 176C211.9 176 176 211.9 176 256s35.88 80 80 80c13.31 0 25.67-3.576 36.72-9.344l-29.69-29.69c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l29.69 29.69C332.4 281.7 336 269.3 336 256C336 211.9 300.1 176 256 176zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM376.1 343c9.375 9.375 9.375 24.56 0 33.94C372.3 381.7 366.2 384 360 384s-12.28-2.344-16.97-7.031l-15.15-15.15C307.4 375.8 282.6 384 256 384c-70.59 0-128-57.42-128-128s57.41-128 128-128s128 57.42 128 128c0 26.63-8.211 51.37-22.19 71.88L376.1 343z"/>
</>],
['light',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM256 128C185.4 128 128 185.4 128 256s57.41 128 128 128c29.52 0 56.4-10.45 78.08-27.3l22.61 22.61C359.8 382.4 363.9 384 368 384s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-22.61-22.61C373.6 312.4 384 285.5 384 256C384 185.4 326.6 128 256 128zM334.1 311.5l-34.77-34.77c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l34.77 34.77C295.8 345.3 276.7 352 256 352c-52.94 0-96-43.06-96-96s43.06-96 96-96s96 43.06 96 96C352 276.7 345.3 295.8 334.1 311.5z"/>
</>],
['regular',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 128C185.4 128 128 185.4 128 256s57.41 128 128 128c26.64 0 51.37-8.209 71.88-22.18l15.15 15.15C347.7 381.7 353.8 384 360 384s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-15.15-15.15C375.8 307.4 384 282.6 384 256C384 185.4 326.6 128 256 128zM326.7 292.7l-29.69-29.69c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l29.69 29.69C281.7 332.4 269.3 336 256 336c-44.13 0-80-35.89-80-80S211.9 176 256 176s80 35.89 80 80C336 269.3 332.4 281.7 326.7 292.7z"/>
</>],
['solid',<>
	<path d="M256 176C211.9 176 176 211.9 176 256s35.88 80 80 80c13.31 0 25.67-3.576 36.72-9.344l-29.69-29.69c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l29.69 29.69C332.4 281.7 336 269.3 336 256C336 211.9 300.1 176 256 176zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM376.1 343c9.375 9.375 9.375 24.56 0 33.94C372.3 381.7 366.2 384 360 384s-12.28-2.344-16.97-7.031l-15.15-15.15C307.4 375.8 282.6 384 256 384c-70.59 0-128-57.42-128-128s57.41-128 128-128s128 57.42 128 128c0 26.63-8.211 51.37-22.19 71.88L376.1 343z"/>
</>],
['thin',<>
	<path d="M256 128C185.4 128 128 185.4 128 256s57.41 128 128 128c32.41 0 61.7-12.49 84.27-32.41l30.07 30.07C371.9 383.2 373.9 384 376 384s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31l-30.07-30.07C371.5 317.7 384 288.4 384 256C384 185.4 326.6 128 256 128zM340.3 328.1l-38.62-38.62c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l38.62 38.62C309.3 357.3 283.1 368 256 368c-61.75 0-112-50.25-112-112S194.3 144 256 144s112 50.25 112 112C368 283.1 357.3 309.3 340.3 328.1zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleQ: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleQ.displayName = "CircleQ";

export default CircleQ;
