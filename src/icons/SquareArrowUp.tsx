
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M350.6 254.6c-12.5 12.5-32.75 12.5-45.25 0L256 205.3V384c0 17.69-14.33 32-32 32s-32-14.31-32-32V205.3L142.6 254.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l103.1-103.1C209.3 97.4 219.1 96 224 96c4.881 0 14.65 1.391 22.65 9.398l103.1 103.1C363.1 221.9 363.1 242.1 350.6 254.6z"/><path className="fa-secondary" d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM350.6 254.6c-12.5 12.5-32.75 12.5-45.25 0L256 205.3V384c0 17.69-14.33 32-32 32s-32-14.31-32-32V205.3L142.6 254.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l103.1-103.1C209.3 97.4 219.1 96 224 96c4.881 0 14.65 1.391 22.65 9.398l103.1 103.1C363.1 221.9 363.1 242.1 350.6 254.6z"/>
</>],
['light',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416zM235.3 132.7C232.2 129.6 228.1 128 223.1 128S215.8 129.6 212.7 132.7l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L208 182.6V368c0 8.844 7.154 16 15.1 16S240 376.8 240 368V182.6l68.69 68.69c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L235.3 132.7z"/>
</>],
['regular',<>
	<path d="M241.6 135.7C237 130.8 230.7 128 223.1 128S210.1 130.8 206.4 135.7l-104 112c-9 9.719-8.438 24.91 1.25 33.94c9.719 9 24.88 8.469 33.94-1.25l62.41-67.21V360c0 13.25 10.76 24 24.01 24s23.99-10.75 23.99-24V213.1l62.41 67.21c9.062 9.719 24.22 10.25 33.94 1.25c9.688-9.031 10.25-24.22 1.25-33.94L241.6 135.7zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16V416z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM350.6 254.6c-12.5 12.5-32.75 12.5-45.25 0L256 205.3V384c0 17.69-14.33 32-32 32s-32-14.31-32-32V205.3L142.6 254.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l103.1-103.1C209.3 97.4 219.1 96 224 96c4.881 0 14.65 1.391 22.65 9.398l103.1 103.1C363.1 221.9 363.1 242.1 350.6 254.6z"/>
</>],
['thin',<>
	<path d="M229.7 130.3c-3.125-3.125-8.188-3.125-11.31 0l-120 120C96.78 251.9 96 253.9 96 256s.7813 4.094 2.344 5.656c3.125 3.125 8.188 3.125 11.31 0L216 155.3V376c0 4.406 3.576 8 7.997 8S232 380.4 232 376V155.3l106.3 106.3c3.125 3.125 8.188 3.125 11.31 0s3.125-8.188 0-11.31L229.7 130.3zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416z"/>
</>],

]);

const SquareArrowUp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareArrowUp.displayName = "SquareArrowUp";

export default SquareArrowUp;