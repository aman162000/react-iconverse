
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 163V144h24c4.418 0 8-3.578 8-7.1V120c0-4.418-3.582-7.1-8-7.1H224V96h24.63c16.41 0 24.62-19.84 13.02-31.44l-60.97-60.97c-4.795-4.793-12.57-4.793-17.36 0L122.3 64.56c-11.6 11.6-3.383 31.44 13.02 31.44H160v15.1H136c-4.418 0-8 3.582-8 7.1v15.1c0 4.422 3.582 7.1 8 7.1H160v19.05c-84.9 15.62-148.5 92.01-143.7 182.5c4.783 90.69 82.34 165.1 173.2 166.5C287.8 513.4 368 434.1 368 336C368 249.7 305.9 178.1 224 163zM192 431.1c-52.94 0-96-43.06-96-95.1s43.06-95.1 96-95.1c52.93 0 96 43.06 96 95.1S244.9 431.1 192 431.1z"/><path className="fa-secondary" d="M256 335.1c0 35.35-28.65 63.1-64 63.1s-64-28.65-64-63.1s28.65-63.1 64-63.1S256 300.7 256 335.1z"/>
</>],
['light',<>
	<path d="M316.5 211.6c-30.29-30.29-68.88-47.19-108.5-50.78v-16.76h48c8.844 0 15.1-7.156 15.1-15.1s-7.156-15.1-15.1-15.1h-48V49.31l54 43.2c2.953 2.344 6.484 3.5 9.984 3.5c4.703 0 9.344-2.062 12.52-5.1c5.516-6.906 4.391-16.97-2.5-22.5L202 3.516c-5.844-4.687-14.16-4.687-20 0L101.1 67.51c-6.891 5.531-8.016 15.59-2.5 22.5c5.531 6.875 15.58 7.1 22.5 2.5l54-43.2v62.7H127.1c-8.844 0-15.1 7.156-15.1 15.1s7.156 15.1 15.1 15.1h48v16.76C136.4 164.4 97.84 181.3 67.55 211.6c-68.73 68.73-68.73 180.2 0 248.9c68.73 68.73 180.2 68.73 248.9 0C385.2 391.7 385.2 280.3 316.5 211.6zM293.8 437.8c-56.15 56.14-147.5 56.14-203.6 0c-56.14-56.14-56.14-147.5 0-203.6c56.15-56.14 147.5-56.14 203.6 0C349.1 290.3 349.1 381.7 293.8 437.8z"/>
</>],
['regular',<>
	<path d="M216 161.8V152h32c13.25 0 24-10.75 24-23.1S261.3 104 248 104h-32V72.01l25.59 19.19c4.328 3.25 9.375 4.812 14.39 4.812c7.297 0 14.5-3.312 19.22-9.593c7.953-10.62 5.797-25.66-4.797-33.59l-64-47.1c-8.531-6.437-20.28-6.437-28.81 0l-64 47.1C103 60.76 100.8 75.79 108.8 86.42c7.969 10.62 23.02 12.78 33.61 4.781L168 72.01v32h-32c-13.25 0-24 10.75-24 23.1S122.8 152 136 152h32v9.824C82.18 173.6 16 246.1 16 336C16 433.2 94.8 512 192 512c97.2 0 176-78.8 176-175.1C368 246.1 301.8 173.6 216 161.8zM192 464c-70.58 0-128-57.42-128-127.1s57.42-127.1 128-127.1s128 57.42 128 127.1S262.6 464 192 464z"/>
</>],
['solid',<>
	<path d="M224 163V144h24c4.418 0 8-3.578 8-7.1V120c0-4.418-3.582-7.1-8-7.1H224V96h24.63c16.41 0 24.62-19.84 13.02-31.44l-60.97-60.97c-4.795-4.793-12.57-4.793-17.36 0L122.3 64.56c-11.6 11.6-3.383 31.44 13.02 31.44H160v15.1H136c-4.418 0-8 3.582-8 7.1v15.1c0 4.422 3.582 7.1 8 7.1H160v19.05c-84.9 15.62-148.5 92.01-143.7 182.5c4.783 90.69 82.34 165.1 173.2 166.5C287.8 513.4 368 434.1 368 336C368 249.7 305.9 178.1 224 163zM192 431.1c-52.94 0-96-43.06-96-95.1s43.06-95.1 96-95.1c52.93 0 96 43.06 96 95.1S244.9 431.1 192 431.1z"/>
</>],
['thin',<>
	<path d="M316.5 211.6C284.1 179.2 242.3 162.3 200 160.4V136h59.88c2.211 0 4.211-.8945 5.656-2.344C266.1 132.2 267.9 130.2 267.9 128c0-4.422-3.582-8-8-8H200V27.31l74.34 66.34c3.129 3.125 8.188 3.125 11.32 0s3.129-8.188 0-11.31l-87.1-80c-3.125-3.125-8.188-3.125-11.31 0l-87.1 80c-3.129 3.125-3.129 8.188 0 11.31s8.188 3.125 11.32 0L184 27.31V120H124.1c-4.418 0-8 3.578-8 8s3.582 8 8 8H184v24.38C141.7 162.3 99.88 179.2 67.55 211.6c-68.73 68.73-68.73 180.2 0 248.9c68.73 68.73 180.2 68.73 248.9 0C385.2 391.7 385.2 280.3 316.5 211.6zM305.1 449.1c-62.39 62.39-163.9 62.38-226.3 0s-62.39-163.9 0-226.3c62.39-62.39 163.9-62.38 226.3 0S367.5 386.8 305.1 449.1z"/>
</>],

]);

const MarsStrokeUp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MarsStrokeUp.displayName = "MarsStrokeUp";

export default MarsStrokeUp;