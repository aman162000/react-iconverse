
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352.1 304.1C348.3 309.7 342.2 312 336 312s-12.28-2.344-16.97-7.031L280 265.9V376c0 13.25-10.75 24-24 24s-24-10.75-24-24V265.9L192.1 304.1c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.375-9.375 24.56-9.375 33.94 0l80 80C362.3 280.4 362.3 295.6 352.1 304.1z"/><path className="fa-secondary" d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM352.1 304.1C348.3 309.7 342.2 312 336 312s-12.28-2.344-16.97-7.031L280 265.9V376c0 13.25-10.75 24-24 24s-24-10.75-24-24V265.9L192.1 304.1c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.375-9.375 24.56-9.375 33.94 0l80 80C362.3 280.4 362.3 295.6 352.1 304.1z"/>
</>],
['light',<>
	<path d="M448 96h-176L226.7 50.75C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L258.7 128H448c17.64 0 32 14.36 32 32V416zM267.3 196.7c-6.25-6.25-16.38-6.25-22.62 0l-80 80c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L240 246.6V368c0 8.844 7.156 16 16 16s16-7.156 16-16V246.6l52.69 52.69C327.8 302.4 331.9 304 336 304s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L267.3 196.7z"/>
</>],
['regular',<>
	<path d="M272.1 191c-9.375-9.375-24.56-9.375-33.94 0l-80 80c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0L232 265.9V368c0 13.25 10.75 24 24 24s24-10.75 24-24V265.9l39.03 39.03C323.7 309.7 329.8 312 336 312s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L272.1 191zM448 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C512 124.7 483.3 96 448 96zM464 416c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L256 144h192c8.822 0 16 7.176 16 16V416z"/>
</>],
['solid',<>
	<path d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM352.1 304.1C348.3 309.7 342.2 312 336 312s-12.28-2.344-16.97-7.031L280 265.9V376c0 13.25-10.75 24-24 24s-24-10.75-24-24V265.9L192.1 304.1c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.375-9.375 24.56-9.375 33.94 0l80 80C362.3 280.4 362.3 295.6 352.1 304.1z"/>
</>],
['thin',<>
	<path d="M464 96h-192L217.4 41.38C211.4 35.37 203.2 32 194.7 32H48C21.49 32 0 53.49 0 80v352C0 458.5 21.49 480 48 480h416c26.51 0 48-21.49 48-48v-288C512 117.5 490.5 96 464 96zM496 432c0 17.67-14.33 32-32 32h-416c-17.67 0-32-14.33-32-32v-352c0-17.67 14.33-32 32-32h140.1c8.486 0 16.62 3.371 22.63 9.371L265.4 112H464c17.67 0 32 14.33 32 32V432zM261.7 186.3C260.2 184.9 258.2 184 256 184S251.8 184.9 250.3 186.3L154.3 282.3c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0L248 211.3V384c0 4.422 3.578 8 8 8s8-3.578 8-8V211.3l82.34 82.34C347.9 295.2 349.1 296 352 296s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L261.7 186.3z"/>
</>],

]);

const FolderArrowUp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FolderArrowUp.displayName = "FolderArrowUp";

export default FolderArrowUp;