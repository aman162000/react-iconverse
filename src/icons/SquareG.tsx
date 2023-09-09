
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M328 240h-80C234.8 240 224 250.8 224 264S234.8 288 248 288h50.47c-4.219 8.578-10.31 16.97-17.91 24.58c-30.19 30.22-82.94 30.22-113.1 0c-31.19-31.2-31.19-81.95 0-113.2C197.7 169.2 248.1 167.8 280 196.4c9.812 8.859 25 8.078 33.88-1.859c8.844-9.875 8-25.05-1.875-33.89c-50.53-45.3-130.6-43.06-178.5 4.875c-49.91 49.91-49.91 131.1 0 181C157.7 370.7 189.8 384 224 384s66.34-13.31 90.5-37.48c19.53-19.56 32.72-43.44 37.09-67.27C351.9 277.8 352 276.4 352 274.9V264C352 250.8 341.3 240 328 240z"/><path className="fa-secondary" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM352 274.9c0 1.453-.125 2.922-.4062 4.344c-4.375 23.83-17.56 47.7-37.09 67.27C290.3 370.7 258.2 384 224 384s-66.34-13.31-90.5-37.48c-49.91-49.91-49.91-131.1 0-181C181.4 117.5 261.5 115.3 312 160.6c9.875 8.844 10.72 24.02 1.875 33.89C305 204.4 289.8 205.2 280 196.4c-31.91-28.56-82.34-27.19-112.6 3.062c-31.19 31.2-31.19 81.95 0 113.2c30.19 30.22 82.94 30.22 113.1 0c7.594-7.609 13.69-16 17.91-24.58H248C234.8 288 224 277.3 224 264s10.75-24 24-24h80C341.3 240 352 250.8 352 264V274.9z"/>
</>],
['light',<>
	<path d="M336 256h-74.66c-8.844 0-16 7.156-16 16s7.156 16 16 16h53.59c-5.344 13.41-13.59 26.42-23.06 35.89c-36.25 36.25-99.5 36.25-135.8 0C137.1 305.8 128 281.6 128 256s9.1-49.75 28.12-67.89c36-36.05 94-37.64 131.8-3.672c6.594 5.891 16.72 5.375 22.59-1.25c5.906-6.578 5.344-16.69-1.219-22.59c-50.59-45.3-127.8-43.13-175.8 4.891c-49.91 49.91-49.91 131.1 0 181C157.7 370.7 189.8 384 224 384s66.34-13.31 90.5-37.48c18.28-18.28 32.56-45.39 37.25-70.78C351.9 274.8 352 272.1 352 272C352 263.2 344.8 256 336 256zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416z"/>
</>],
['regular',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V416zM328 240h-80C234.8 240 224 250.8 224 264S234.8 288 248 288h50.47c-4.219 8.578-10.31 16.97-17.91 24.58c-30.19 30.22-82.94 30.22-113.1 0c-31.19-31.2-31.19-81.95 0-113.2C197.7 169.2 248.1 167.8 280 196.4c9.812 8.859 25 8.078 33.88-1.859c8.844-9.875 8-25.05-1.875-33.89c-50.53-45.3-130.6-43.06-178.5 4.875c-49.91 49.91-49.91 131.1 0 181C157.7 370.7 189.8 384 224 384s66.34-13.31 90.5-37.48c19.53-19.56 32.72-43.44 37.09-67.27C351.9 277.8 352 276.4 352 274.9V264C352 250.8 341.3 240 328 240z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM352 274.9c0 1.453-.125 2.922-.4062 4.344c-4.375 23.83-17.56 47.7-37.09 67.27C290.3 370.7 258.2 384 224 384s-66.34-13.31-90.5-37.48c-49.91-49.91-49.91-131.1 0-181C181.4 117.5 261.5 115.3 312 160.6c9.875 8.844 10.72 24.02 1.875 33.89C305 204.4 289.8 205.2 280 196.4c-31.91-28.56-82.34-27.19-112.6 3.062c-31.19 31.2-31.19 81.95 0 113.2c30.19 30.22 82.94 30.22 113.1 0c7.594-7.609 13.69-16 17.91-24.58H248C234.8 288 224 277.3 224 264s10.75-24 24-24h80C341.3 240 352 250.8 352 264V274.9z"/>
</>],
['thin',<>
	<path d="M344 255.5H256c-4.406 0-8 3.578-8 8s3.594 8 8 8h79.69c-.8125 9.75-3.062 18.75-6.781 26.84C323.2 310.9 314.6 323.1 304 333.9c-41.13 41.67-108 44.89-152.4 7.078C127.4 320.3 113.3 291.6 112.1 260C110.8 228.8 122.8 198.3 144.8 176.3c42.06-42 109.6-43.92 153.8-4.297c3.312 2.984 8.375 2.703 11.31-.6094c2.938-3.297 2.656-8.359-.625-11.3c-50.59-45.3-127.8-43.13-175.8 4.891C108.3 190.2 94.69 225 96.09 260.6c1.469 36.09 17.5 68.95 45.16 92.52c23.75 20.22 53.13 30.2 82.5 30.2c33.34 0 66.69-12.88 91.63-38.25c11.88-12.05 21.59-25.92 28.09-40.11C349.1 292.7 352 278.7 352 263.5C352 259.1 348.4 255.5 344 255.5zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416z"/>
</>],

]);

const SquareG: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareG.displayName = "SquareG";

export default SquareG;