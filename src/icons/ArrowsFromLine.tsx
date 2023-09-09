
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 127.1c8.188 0 16.38-3.125 22.62-9.375L192 109.2v50.75c0 17.69 14.31 32.01 32 32.01s32-14.32 32-32.01V109.2l9.375 9.375C271.6 124.8 279.8 127.1 288 127.1c18.28 0 32-14.93 32-31.99c0-8.188-3.125-16.39-9.375-22.64L246.7 9.374C238.6 1.302 228.9 0 223.1 0C219.1 0 209.4 1.277 201.3 9.374L137.4 73.34C131.1 79.59 128 87.79 128 95.98C128 113 141.7 127.1 160 127.1zM288 383.1c-8.188 0-16.38 3.127-22.62 9.377L256 402.7v-50.76c0-17.69-14.31-31.1-32-31.1s-32 14.31-32 31.1v50.76l-9.375-9.375C176.4 387.1 168.2 383.1 160 383.1c-18.28 0-32 14.95-32 32.01c0 8.188 3.125 16.37 9.375 22.62l63.96 63.97C209.3 510.6 219.1 512 224 512c4.847 0 14.65-1.37 22.67-9.414l63.96-63.97C316.9 432.4 320 424.2 320 415.1C320 398.9 306.3 383.1 288 383.1z"/><path className="fa-secondary" d="M32 287.1h384c17.69 0 32-14.3 32-31.99s-14.31-32.01-32-32.01H32c-17.69 0-32 14.33-32 32.01S14.31 287.1 32 287.1z"/>
</>],
['light',<>
	<path d="M144 111.1c4.094 0 8.188-1.562 11.31-4.688L208 54.61v121.4c0 8.844 7.156 15.1 16 15.1s16-7.152 16-15.1V54.61l52.69 52.69C295.8 110.4 299.9 111.1 304 111.1c9.139 0 16-7.478 16-16.01c0-4.094-1.562-8.182-4.688-11.31L235.3 4.688C231.3 .6445 226.5 0 223.1 0S216.7 .6445 212.7 4.688L132.7 84.67C129.6 87.8 128 91.89 128 95.98C128 104.5 134.9 111.1 144 111.1zM304 399.1c-4.094 0-8.188 1.562-11.31 4.688L240 457.4v-121.4c0-8.844-7.156-16-16-16s-16 7.159-16 16v121.4l-52.69-52.69C152.2 401.6 148.1 399.1 144 399.1c-9.139 0-16 7.471-16 15.1c0 4.094 1.562 8.189 4.688 11.31l79.98 79.98C214.4 509 218.3 512 224 512s9.609-2.98 11.33-4.707l79.98-79.98C318.4 424.2 320 420.1 320 415.1C320 407.5 313.1 399.1 304 399.1zM432 240h-416C7.156 240 0 247.1 0 255.1S7.156 272 16 272h416c8.844 0 16-7.165 16-16.01S440.8 240 432 240z"/>
</>],
['regular',<>
	<path d="M296 391.1c-6.141 0-12.28 2.344-16.97 7.031L248 430.1v-86.06c0-13.25-10.75-24-24-24s-24 10.75-24 24v86.06l-31.03-31.03C164.3 394.3 158.1 391.1 152 391.1c-12.82 0-24 10.33-24 24c0 6.141 2.344 12.28 7.031 16.97l72 72.01C209.6 507.5 215.5 512 224 512s14.4-4.461 16.97-7.031l72-72.01C317.7 428.3 320 422.1 320 415.1C320 402.3 308.8 391.1 296 391.1zM152 119.1c6.141 0 12.28-2.344 16.97-7.031L200 81.91v86.07c0 13.25 10.75 24 24 24s24-10.75 24-24V81.91l31.03 31.03C283.7 117.6 289.8 119.1 296 119.1c18.79 0 24-17.2 24-23.1c0-6.141-2.344-12.28-7.031-16.97l-72-72.01C234.9 .9766 227.7 0 223.1 0C220.3 0 213.1 .9687 207 7l-72 72.01C130.3 83.7 128 89.84 128 95.98C128 109.7 139.2 119.1 152 119.1zM424 232H24C10.75 232 0 242.7 0 255.1S10.75 280 24 280h400c13.25 0 24-10.76 24-24.01S437.3 232 424 232z"/>
</>],
['solid',<>
	<path d="M160 127.1c8.188 0 16.38-3.125 22.62-9.375L192 109.2v50.75c0 17.69 14.31 32.01 32 32.01s32-14.32 32-32.01V109.2l9.375 9.375C271.6 124.8 279.8 127.1 288 127.1c18.28 0 32-14.94 32-31.99c0-8.191-3.125-16.39-9.375-22.64L246.7 9.374C238.6 1.3 228.9 0 223.1 0c-4.898 0-14.6 1.273-22.67 9.374L137.4 73.34C131.1 79.59 128 87.79 128 95.98C128 113 141.7 127.1 160 127.1zM288 383.1c-8.188 0-16.38 3.127-22.62 9.377L256 402.7v-50.76c0-17.69-14.31-31.1-32-31.1s-32 14.31-32 31.1v50.76l-9.375-9.375C176.4 387.1 168.2 383.1 160 383.1c-18.28 0-32 14.95-32 32.01c0 8.188 3.125 16.37 9.375 22.62l63.96 63.97C209.3 510.6 219.1 512 224 512c4.848 0 14.65-1.371 22.67-9.414l63.96-63.97C316.9 432.4 320 424.2 320 415.1C320 398.9 306.3 383.1 288 383.1zM416 223.1H32c-17.69 0-32 14.33-32 32.01s14.31 31.99 32 31.99h384c17.69 0 32-14.3 32-31.99S433.7 223.1 416 223.1z"/>
</>],
['thin',<>
	<path d="M136 104c2.047 0 4.094-.7813 5.656-2.344L216 27.31V184c0 4.406 3.594 7.984 8 7.984S232 188.4 232 184V27.31l74.34 74.34C307.9 103.2 309.9 104 312 104c5.719 0 8-5.114 8-8.021c0-2.047-.7813-4.073-2.344-5.636l-88-88C228.1 .7813 226 0 223.1 0s-4.094 .7813-5.656 2.344l-88 88C128.8 91.91 128 93.93 128 95.98C128 100.5 131.7 104 136 104zM312 408c-2.047 0-4.094 .7813-5.656 2.344L232 484.7V328c0-4.406-3.594-8.01-8-8.01S216 323.6 216 328v156.7l-74.34-74.34C140.1 408.8 138 408 136 408C131.7 408 128 411.4 128 415.1c0 2.047 .7813 4.099 2.344 5.662l88 88C219.9 511.2 221.9 512 224 512s4.094-.7813 5.656-2.344l88-88C319.2 420.1 320 418 320 415.1C320 411.4 316.3 408 312 408zM440 248H8C3.582 248 0 251.6 0 255.1S3.582 264 8 264h432c4.418 0 8-3.591 8-8.009S444.4 248 440 248z"/>
</>],

]);

const ArrowsFromLine: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowsFromLine.displayName = "ArrowsFromLine";

export default ArrowsFromLine;
