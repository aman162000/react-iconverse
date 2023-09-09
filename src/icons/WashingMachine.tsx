
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 .0002H63.98C28.63 .0002 0 28.63 0 64v416c0 17.62 14.31 32 31.98 32h384c17.67 0 31.98-14.38 31.98-32V64C448 28.63 419.4 .0002 384 .0002zM184 64C197.3 64 208 74.75 208 88s-10.74 24-23.96 24C170.7 112 160 101.3 160 88S170.7 64 184 64zM64 88c0-13.25 10.82-24 24-24c13.31 0 24 10.75 24 24s-10.69 24-24 24C74.82 112 64 101.3 64 88zM224 448c-79.52 0-143.1-64.5-143.1-144S144.5 160 224 160s143.1 64.5 143.1 144S303.5 448 224 448z"/><path className="fa-secondary" d="M334.1 285.3c-20.53 20-53.26 19.62-73.3-1C251.3 294.3 237.9 300 224 300S196.7 294.4 187.2 284.4c-20.04 20.5-52.76 20.88-73.3 1C112.7 291.5 112.1 297.8 112 304c0 61.88 50.15 112 112 112s112-50.13 112-112C335.9 297.8 335.3 291.5 334.1 285.3zM184 112C197.3 112 208 101.3 208 88c0-13.26-10.7-24-23.96-24S160 74.74 160 88C160 101.3 170.8 112 184 112z"/>
</>],
['light',<>
	<path d="M352 0H96C42.98 0 0 42.98 0 96v352c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 42.98 405 0 352 0zM416 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-35.29 28.71-64 64-64h256c35.29 0 64 28.71 64 64V448zM192.1 120C205.3 120 216 109.3 216 96S205.3 72 192.1 72C178.7 72 168 82.75 168 96S178.7 120 192.1 120zM120 96c0-13.25-10.69-24-24-24C82.82 72 72 82.75 72 96S82.82 120 96 120C109.3 120 120 109.3 120 96zM224 160c-79.52 0-143.1 64.5-143.1 144s64.46 144 143.1 144s143.1-64.5 143.1-144S303.5 160 224 160zM224 416c-56.97 0-103.6-42.93-110.6-98.06c22.45 7.602 47.68 4.746 67.71-8.938C193.6 317.6 208.6 322.3 224 322.3c15.41 0 30.44-4.75 42.92-13.38c12.3 8.469 26.78 13.12 42 13.34c8.893-.1797 17.49-1.855 25.68-4.609C327.8 372.9 281.1 416 224 416zM309.4 290.3c-11.78-.1562-22.81-4.938-31.06-13.44c-4.531-4.625-11.42-6.094-17.5-3.594c-2.422 1-4.516 2.531-6.141 4.469c-16.25 16.19-46.02 15.97-61.92-.625c-3-3.125-7.141-4.906-11.47-4.938c-4.438 .6562-8.5 1.719-11.52 4.812c-14.98 15.38-38.17 16.66-55.54 5.383C124.3 230.9 169.7 192 224 192c54.58 0 100 39.3 109.9 91.06C326.6 287.5 318.1 289.6 309.4 290.3z"/>
</>],
['regular',<>
	<path d="M368 0h-288C35.82 0 0 35.82 0 80V448c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V80C448 35.82 412.2 0 368 0zM400 448c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V80c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32V448zM128.1 104c0-13.25-10.83-24-24.02-24c-13.31 0-24.02 10.75-24.02 24S90.72 128 104 128C117.2 128 128.1 117.3 128.1 104zM184.1 128c13.19 0 23.89-10.75 23.89-24S197.2 80 184.1 80c-13.31 0-24.02 10.75-24.02 24S170.7 128 184.1 128zM224 160c-75.16 0-136 60.87-136 135.1S148.8 432 224 432s136-60.88 136-136S299.2 160 224 160zM224 386.6c-50.03 0-90.6-40.63-90.72-90.63c0-2.875 .623-5.625 .8711-8.5c6.223 3.125 13.07 4.75 19.91 4.75c13.32 0 25.88-5.375 35.09-14.88C198.2 286.9 210.8 292.3 224 292.3s25.76-5.375 34.85-14.88c9.207 9.5 21.78 14.88 35.09 14.88c6.846 0 13.69-1.625 19.91-4.75C314.1 290.4 314.7 293.1 314.7 296C314.6 346 274 386.6 224 386.6z"/>
</>],
['solid',<>
	<path d="M260.8 284.3C251.3 294.3 237.9 300 224 300S196.7 294.4 187.2 284.4c-20.04 20.5-52.76 20.88-73.3 1C112.7 291.5 112.1 297.8 112 304c0 61.88 50.15 112 112 112s112-50.13 112-112c-.123-6.25-.7461-12.5-1.867-18.75C313.6 305.3 280.9 304.9 260.8 284.3zM384 .0002H63.98C28.63 .0002 0 28.63 0 64v416c0 17.62 14.31 32 31.98 32h384c17.67 0 31.98-14.38 31.98-32V64C448 28.63 419.4 .0002 384 .0002zM184 64C197.3 64 208 74.75 208 88s-10.74 24-23.96 24C170.7 112 160 101.3 160 88S170.7 64 184 64zM64 88c0-13.25 10.82-24 24-24c13.31 0 24 10.75 24 24s-10.69 24-24 24C74.82 112 64 101.3 64 88zM224 448c-79.52 0-143.1-64.5-143.1-144S144.5 160 224 160s143.1 64.5 143.1 144S303.5 448 224 448z"/>
</>],
['thin',<>
	<path d="M160 112c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16S144 87.16 144 96C144 104.8 151.2 112 160 112zM112 96c0-8.838-7.164-16-16-16S80 87.16 80 96c0 8.836 7.164 16 16 16S112 104.8 112 96zM384 .0002H63.98C28.63 .0002 0 28.65 0 64V448c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64C448 28.65 419.4 .0002 384 .0002zM432 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V448zM224 168c-75.11 0-136 60.89-136 136s60.89 136 136 136s136-60.89 136-136S299.1 168 224 168zM224 424c-60.36 0-109.1-44.95-118.3-103c24.07 7.219 49.85 1.031 69.15-17.3c27.16 26 71.11 26 98.3 0c14.08 13.38 31.66 20.38 49.48 20.38c6.588 0 13.16-1.271 19.66-3.221C334 378.1 284.4 424 224 424zM279.2 286.8C277.7 285 275.5 284 273.1 284c-1.719 .125-4.625 1.031-6.156 2.875C255.8 300.3 240.2 307.1 224 307.1c-16.14 0-31.8-7.688-42.97-21.09C179.5 285.1 177.3 284 174.9 284c0 0 .0156 0 0 0c-2.344 0-4.594 1.031-6.109 2.812C151.8 306.9 126.4 312.6 104.1 302.9C104.7 237.2 158.2 184 224 184c65.79 0 119.3 53.25 119.9 118.9C321.6 312.6 296.2 306.8 279.2 286.8z"/>
</>],

]);

const WashingMachine: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WashingMachine.displayName = "WashingMachine";

export default WashingMachine;