
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M360 240c0 13.26-10.74 23.1-23.1 23.1h-56v56C279.1 333.3 269.3 344 256 344c-13.27 0-23.1-10.74-23.1-23.1V263.1H175.1C162.7 263.1 152 253.3 152 240c0-13.26 10.74-23.1 23.1-23.1h56V159.1C232 146.7 242.7 136 256 136s23.1 10.74 23.1 23.1V216h56C349.3 216 360 226.7 360 240z"/><path className="fa-secondary" d="M256 32C114.6 32 .0281 125.1 .0281 240c0 49.63 21.35 94.98 56.97 130.7C44.5 421.1 2.729 466 2.229 466.5c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM336 263.1h-56v56C279.1 333.3 269.3 344 256 344c-13.27 0-23.1-10.74-23.1-23.1V263.1H175.1C162.7 263.1 152 253.3 152 240c0-13.26 10.74-23.1 23.1-23.1h56V159.1C232 146.7 242.7 136 256 136s23.1 10.74 23.1 23.1V216h56C349.3 216 360 226.7 360 240S349.3 263.1 336 263.1z"/>
</>],
['light',<>
	<path d="M256 32C114.7 32 .0281 125.1 .0281 240c0 47.63 19.92 91.25 52.91 126.3c-14.88 39.5-45.87 72.88-46.37 73.25c-6.621 7-8.373 17.25-4.623 26C5.816 474.3 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25C192.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256 416c-28.24 0-56.24-4.25-83.23-12.75c-9.516-3.068-19.92-1.461-28.07 4.338c-22.99 16.25-58.55 35.29-102.7 39.66c12-15.12 29.75-40.5 40.74-69.63l.1328-.3398c4.281-11.27 1.789-23.1-6.43-32.82C47.51 313.1 32.06 277.6 32.06 240c0-97 100.5-176 223.1-176c123.5 0 223.1 79 223.1 176S379.5 416 256 416zM336 224h-64V159.1C272 151.2 264.8 144 256 144S240 151.2 240 159.1V224h-64C167.2 224 160 231.2 160 240c0 8.834 7.156 15.1 16 15.1h64v64C240 328.8 247.2 336 256 336c8.836 0 16-7.16 16-15.1V255.1h64c8.84 0 16-7.16 16-15.1S344.8 224 336 224z"/>
</>],
['regular',<>
	<path d="M256 32C114.6 32 .0281 125.1 .0281 240c0 47.63 19.91 91.25 52.91 126.3c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.373 17.25-4.623 26C5.82 474.3 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.13-4.125-78.38-12.12L154.9 380.8L135.4 394.5c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.38-25.75 19.88-40.25l10.62-28l-20.62-21.88C69.82 314.1 48.07 282.3 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400zM336 216h-56V159.1C279.1 146.7 269.3 136 256 136S232 146.7 232 159.1V216H175.1C162.7 216 152 226.7 152 240c0 13.26 10.73 23.1 23.1 23.1h56v56C232 333.3 242.7 344 256 344c13.26 0 23.1-10.74 23.1-23.1V263.1h56C349.3 263.1 360 253.3 360 240S349.3 216 336 216z"/>
</>],
['solid',<>
	<path d="M256 32C114.6 32 .0281 125.1 .0281 240c0 49.63 21.35 94.98 56.97 130.7C44.5 421.1 2.729 466 2.229 466.5c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM336 263.1h-56v56C279.1 333.3 269.3 344 256 344c-13.27 0-23.1-10.74-23.1-23.1V263.1H175.1C162.7 263.1 152 253.3 152 240c0-13.26 10.74-23.1 23.1-23.1h56V159.1C232 146.7 242.7 136 256 136s23.1 10.74 23.1 23.1V216h56C349.3 216 360 226.7 360 240S349.3 263.1 336 263.1z"/>
</>],
['thin',<>
	<path d="M256 32C114.6 32 .0281 125.1 .0281 240c0 49.59 21.38 95.03 56.97 130.7C44.5 421.1 2.729 466 2.229 466.5c-2.188 2.297-2.781 5.734-1.5 8.734C2.042 478.2 4.813 480 8 480c66.31 0 116-31.78 140.6-51.39C181.3 440.9 217.6 448 256 448c141.4 0 255.1-93.09 255.1-208S397.4 32 256 32zM256 432c-35.12 0-69.36-6.184-101.8-18.38L145.7 410.4l-7.105 5.666c-20.2 16.11-60.14 42.04-112.7 47.06c14.44-18.29 37.42-51.68 46.57-88.59l2.172-8.758l-6.371-6.391C34.1 325.1 16 283.8 16 240c0-105.9 107.7-192 240-192s240 86.13 240 192S388.3 432 256 432zM344 232h-80v-80c0-4.42-3.578-8-8-8S248 147.6 248 152v80h-80C163.6 232 160 235.6 160 240c0 4.422 3.578 8 8 8h80v80c0 4.422 3.578 8 8 8s8-3.58 8-8v-80h80C348.4 248 352 244.4 352 240S348.4 232 344 232z"/>
</>],

]);

const CommentPlus: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CommentPlus.displayName = "CommentPlus";

export default CommentPlus;
