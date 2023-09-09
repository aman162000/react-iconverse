
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M496 0C416.4 0 352 64.38 352 144S416.4 288 496 288S640 223.6 640 144S575.6 0 496 0zM544 160h-54.25C484.4 160 480 155.6 480 150.3V80C480 71.16 487.2 64 496 64C504.8 64 512 71.16 512 80V128h32c8.838 0 16 7.164 16 16S552.8 160 544 160z"/><path className="fa-secondary" d="M496 320c-86.73 0-158.6-62.8-173.2-145.4C292 170.4 258.9 168.5 223.1 168.1V88.02c0-20.67-24.28-31.47-39.69-18.17l-176 152c-11.09 9.562-11.06 26.75 0 36.31l176 152c15.38 13.3 39.69 2.547 39.69-18.16V304.1c155.1 2.234 221.9 40.73 176.6 185.8c-5.031 16.09 14.41 28.56 28.06 18.62C472.4 476.6 512 415.8 512 354.3c0-12.56-1.17-24.02-2.852-34.99C504.8 319.7 500.4 320 496 320z"/>
</>],
['light',<>
	<path d="M544 128h-32V80C512 71.16 504.8 64 496 64S480 71.16 480 80v64C480 152.8 487.2 160 496 160H544c8.844 0 16-7.156 16-16S552.8 128 544 128zM496 0C416.5 0 352 64.47 352 144S416.5 288 496 288S640 223.5 640 144S575.5 0 496 0zM496 256C434.2 256 384 205.8 384 144S434.2 32 496 32S608 82.24 608 144S557.8 256 496 256zM482.5 320c-11.32 0-19.33 11.57-14.74 21.92C475.6 359.7 480 379.3 480 400v32c0 8.844 7.156 16 16 16s16-7.156 16-16v-32c0-25.23-5.445-49.19-15.08-70.89C494.4 323.5 488.6 320 482.5 320zM304 224H60.2l158.1-131.7c6.781-5.656 7.688-15.75 2.031-22.53C214.6 62.94 204.5 62.07 197.8 67.72l-192 159.1C2.094 230.8 0 235.3 0 240s2.094 9.25 5.75 12.28l192 160C200.8 414.8 204.4 416 208 416c4.562 0 9.125-1.969 12.28-5.75c5.656-6.781 4.75-16.88-2.031-22.53L60.2 256h243.8C312.9 256 320 248.9 320 240S312.9 224 304 224z"/>
</>],
['regular',<>
	<path d="M496 0C416.5 0 352 64.47 352 144S416.5 288 496 288S640 223.5 640 144S575.5 0 496 0zM544 160h-48C487.2 160 480 152.8 480 144v-64C480 71.16 487.2 64 496 64S512 71.16 512 80V128h32c8.844 0 16 7.156 16 16S552.8 160 544 160zM256 256H88.51l127.2-109.8C225.7 137.5 226.8 122.3 218.2 112.3C209.5 102.3 194.3 101.2 184.3 109.8l-176 152C3.031 266.4 0 273 0 280s3.031 13.59 8.312 18.16l176 152C188.8 454.1 194.4 456 200 456c6.719 0 13.41-2.812 18.16-8.312c8.656-10.03 7.562-25.19-2.469-33.84L88.51 304H256c101.5 0 184 82.53 184 184c0 13.25 10.75 24 24 24s24-10.75 24-24C488 360.1 383.9 256 256 256z"/>
</>],
['solid',<>
	<path d="M496 320c-86.73 0-158.6-62.8-173.2-145.4C292 170.4 258.9 168.5 223.1 168.1V88.02c0-20.67-24.28-31.47-39.69-18.17l-176 152c-11.09 9.562-11.06 26.75 0 36.31l176 152c15.38 13.3 39.69 2.547 39.69-18.16V304.1c155.1 2.234 221.9 40.73 176.6 185.8c-5.031 16.09 14.41 28.56 28.06 18.62C472.4 476.6 512 415.8 512 354.3c0-12.56-1.17-24.02-2.852-34.99C504.8 319.7 500.4 320 496 320zM496 0C416.4 0 352 64.38 352 144S416.4 288 496 288S640 223.6 640 144S575.6 0 496 0zM544 160h-54.25C484.4 160 480 155.6 480 150.3V80C480 71.16 487.2 64 496 64C504.8 64 512 71.16 512 80V128h32c8.838 0 16 7.162 16 16C560 152.8 552.8 160 544 160z"/>
</>],
['thin',<>
	<path d="M464 0C384.5 0 320 64.47 320 144S384.5 288 464 288S608 223.5 608 144S543.5 0 464 0zM464 272c-70.58 0-128-57.42-128-128s57.42-128 128-128s128 57.42 128 128S534.6 272 464 272zM520 144H464V72C464 67.59 460.4 64 456 64S448 67.59 448 72v80C448 156.4 451.6 160 456 160h64c4.406 0 8-3.594 8-8S524.4 144 520 144zM522.2 310C522.2 310 522.3 309.1 522.2 310c-4.256 1.5-6.39 6.398-4.558 10.52C524.1 335.1 528 351 528 368v72c0 4.406 3.578 8 8 8S544 444.4 544 440V368c0-19.29-4.41-37.42-11.77-54C530.6 310.2 526.1 308.6 522.2 310zM314.1 235.9c-1.438-2.336-3.986-3.875-6.73-3.875H61.3l175.1-153.1C240.6 75.12 240.9 70.05 238 66.71C235.1 63.4 230 63.09 226.7 65.96l-192 168C33 235.5 32 237.7 32 239.1s1 4.5 2.734 6.031l192 168C228.3 415.3 230.1 416 232 416c2.219 0 4.438-.9375 6.016-2.719c2.922-3.344 2.578-8.406-.75-11.31L61.3 247.1h246.1C313.6 247.1 317.3 241.2 314.1 235.9C314 235.8 314.1 235.9 314.1 235.9z"/>
</>],

]);

const ReplyClock: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ReplyClock.displayName = "ReplyClock";

export default ReplyClock;