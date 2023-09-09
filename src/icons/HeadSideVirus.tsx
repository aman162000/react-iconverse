
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M368 207.1L355.9 208c-28.51 0-42.79-34.47-22.63-54.63l8.576-8.576c6.25-6.25 6.25-16.38 0-22.62c-6.25-6.25-16.38-6.25-22.63 0l-8.576 8.576c-20.16 20.16-54.63 5.881-54.63-22.63V96c0-8.844-7.156-16-15.1-16S224 87.16 224 96v12.12c0 28.51-34.47 42.79-54.63 22.63L160.8 122.2c-6.25-6.25-16.38-6.25-22.63 0s-6.25 16.38 0 22.62l8.577 8.576C166.9 173.5 152.6 208 124.1 208L112 207.1C103.2 207.1 96 215.2 96 224s7.156 16 16 16h12.12c28.51 0 42.79 34.47 22.63 54.63L138.2 303.2c-6.25 6.25-6.25 16.38 0 22.62c3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.562 11.31-4.688L169.4 317.3c20.16-20.16 54.63-5.881 54.63 22.63V352c0 8.844 7.156 16 16 16s16-7.156 16-16v-12.12c0-28.51 34.47-42.79 54.63-22.63l8.576 8.576c3.125 3.125 7.219 4.688 11.31 4.688c4.094 0 8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L333.3 294.6C313.1 274.5 327.4 240 355.9 240h12.12c8.844 0 16-7.156 16-16S376.8 207.1 368 207.1zM208 207.1c-8.836 0-15.1-7.164-15.1-15.1c0-8.838 7.164-16 16-16s15.1 7.162 15.1 15.1C224 200.8 216.8 207.1 208 207.1zM272 272c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 15.1-16S288 247.2 288 256C288 264.8 280.8 272 272 272z"/><path className="fa-secondary" d="M509.2 275c-20.94-47.13-48.46-151.7-73.1-186.8C397.7 33.59 334.6 0 266.1 0H192C85.95 0 0 85.95 0 192c0 56.8 24.8 107.7 64 142.8L64 512h256l-.0044-64h63.99c35.34 0 63.1-28.65 63.1-63.1V320h31.98C503.1 320 518.6 296.2 509.2 275zM368 240h-12.12c-28.51 0-42.79 34.47-22.63 54.63l8.576 8.576c6.25 6.25 6.25 16.38 0 22.62c-3.125 3.125-7.219 4.688-11.31 4.688c-4.094 0-8.188-1.562-11.31-4.688l-8.576-8.576c-20.16-20.16-54.63-5.881-54.63 22.63V352c0 8.844-7.156 16-16 16s-16-7.156-16-16v-12.12c0-28.51-34.47-42.79-54.63-22.63l-8.576 8.576c-3.125 3.125-7.219 4.688-11.31 4.688s-8.188-1.562-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.62l8.577-8.576C166.9 274.5 152.6 240 124.1 240H112c-8.844 0-16-7.156-16-16s7.157-16 16-16L124.1 208c28.51 0 42.79-34.47 22.63-54.63L138.2 144.8c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.63 0L169.4 130.7c20.16 20.16 54.63 5.881 54.63-22.63V96c0-8.844 7.156-16 16-16S256 87.16 256 96v12.12c0 28.51 34.47 42.79 54.63 22.63l8.576-8.576c6.25-6.25 16.38-6.25 22.63 0c6.25 6.25 6.25 16.38 0 22.62L333.3 153.4C313.1 173.5 327.4 208 355.9 208l12.12-.0004c8.844 0 15.1 7.157 15.1 16S376.8 240 368 240z"/>
</>],
['light',<>
	<path d="M224 191.1c-8.836 0-16 7.162-16 16C208 216.8 215.2 223.1 224 223.1s16-7.164 16-16C240 199.2 232.8 191.1 224 191.1zM256 223.1C247.2 223.1 240 231.2 240 240C240 248.8 247.2 256 256 256s15.1-7.164 15.1-16C272 231.2 264.8 223.1 256 223.1zM310.6 317.3l8.576 8.576c3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L333.3 294.6C313.1 274.5 327.4 240 355.9 240h12.12c8.844 0 16-7.156 16-16s-7.156-16-15.1-16L355.9 208c-28.51 0-42.79-34.47-22.63-54.63l8.576-8.576c6.25-6.25 6.25-16.38 0-22.62c-3.125-3.125-7.22-4.688-11.31-4.688s-8.186 1.562-11.31 4.688l-8.576 8.576c-6.52 6.52-14.53 9.436-22.4 9.436c-16.45 0-32.23-12.78-32.23-32.06V96c0-8.844-7.156-16-15.1-16S224 87.16 224 96v12.12c0 19.29-15.78 32.06-32.23 32.06c-7.863 0-15.88-2.918-22.4-9.436L160.8 122.2C157.7 119 153.6 117.5 149.5 117.5S141.3 119 138.2 122.2c-6.25 6.25-6.25 16.38 0 22.62l8.577 8.576C166.9 173.5 152.6 208 124.1 208L112 207.1C103.2 207.1 96 215.2 96 224s7.156 16 16 16h12.12c28.51 0 42.79 34.47 22.63 54.63L138.2 303.2c-6.25 6.25-6.25 16.38 0 22.62c3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.562 11.31-4.688L169.4 317.3c6.52-6.52 14.53-9.438 22.4-9.436c16.45 .002 32.23 12.78 32.23 32.06V352c0 8.844 7.156 16 16 16s16-7.156 16-16v-12.12c0-19.29 15.78-32.06 32.23-32.06C296.1 307.8 304.1 310.7 310.6 317.3zM244.1 293.2C242.6 294.6 241.2 296 239.9 297.5C228.1 284.2 210.9 275.8 191.8 275.8c-1.252 0-2.498 .0352-3.738 .1094C188.6 266.4 187.1 256.7 183.2 247.5C179.4 238.3 173.6 230.3 166.5 224c7.143-6.316 12.92-14.29 16.74-23.51C187.1 191.3 188.6 181.6 188 172.1c1.238 .0723 2.484 .1074 3.734 .1074c19.2 0 36.45-8.441 48.23-21.8c11.78 13.36 29.04 21.8 48.23 21.8c1.248 0 2.494-.0352 3.732-.1074c-.5762 9.502 .9727 19.21 4.787 28.42C300.6 209.7 306.4 217.7 313.5 224c-7.143 6.316-12.92 14.29-16.74 23.51c-3.814 9.209-5.363 18.91-4.787 28.42c-1.238-.0723-2.482-.1074-3.732-.1074C271.8 275.8 256.1 281.1 244.1 293.2zM509.2 275c-21-47.13-48.48-151.8-73.1-186.8C397.6 33.63 334.5 0 266.1 0H200.1C95.58 0 4.139 80.13 .1387 184.5c-2.25 59.88 22.99 113.6 63.87 150.3L63.1 496c0 8.844 7.156 16 16 16c8.842 0 15.1-7.156 15.1-16l.0098-175.5L85.38 311c-35.62-32-55.12-77.63-53.24-125.3C35.39 101 110.6 32 199.1 32h66.12c57.12 0 110.9 27.88 143.9 74.63c12.5 17.88 28.1 66.75 42.37 106.1C462.1 241.5 471.3 268.5 479.1 288h-47.1c-8.837 0-16 7.163-16 16V384c0 17.6-14.4 32-32 32h-79.99c-8.836 0-15.1 7.119-16 15.95L287.1 496c0 8.844 7.156 16 15.1 16c8.844 0 16-7.156 16-16l.0186-48h63.99c35.34 0 63.1-28.65 63.1-63.1V320h31.98C503.1 320 518.6 296.1 509.2 275z"/>
</>],
['regular',<>
	<path d="M320.5 302.7c3.639 0 7.277-1.389 10.05-4.166c5.557-5.557 5.557-14.56 0-20.11L322.9 270.8c-17.92-17.92-5.227-48.56 20.11-48.56h10.77c7.861 0 14.22-6.36 14.22-14.22S361.6 193.8 353.8 193.8h-10.77c-25.34 0-38.03-30.64-20.11-48.56l7.623-7.623c5.557-5.557 5.557-14.56 0-20.11c-5.555-5.557-14.55-5.557-20.11 0l-7.623 7.623C284.9 143 254.2 130.3 254.2 104.1V94.22c0-7.861-6.362-14.22-14.22-14.22S225.8 86.36 225.8 94.22v10.77c0 25.34-30.64 38.03-48.56 20.12L169.6 117.5c-5.557-5.557-14.56-5.557-20.11 0c-5.557 5.555-5.555 14.55 .002 20.11L157.1 145.2c17.92 17.92 5.227 48.56-20.11 48.56H126.2c-7.861 0-14.22 6.363-14.22 14.22S118.4 222.2 126.2 222.2H136.1c25.34 0 38.03 30.64 20.11 48.56L149.5 278.4c-5.557 5.555-5.557 14.55 0 20.11c2.777 2.777 6.416 4.166 10.05 4.166s7.279-1.389 10.06-4.166L177.2 290.9c17.92-17.92 48.56-5.229 48.56 20.11v10.77c0 7.861 6.361 14.22 14.22 14.22s14.22-6.361 14.22-14.22V311c0-25.34 30.64-38.03 48.56-20.11l7.623 7.623C313.2 301.3 316.8 302.7 320.5 302.7zM208 207.1c-8.836 0-15.1-7.164-15.1-15.1c0-8.838 7.164-16 16-16s15.1 7.162 15.1 15.1C224 200.8 216.8 207.1 208 207.1zM272 239.1c-8.836 0-16-7.165-16-16c0-8.838 7.165-16 16-16s16 7.162 16 16C288 232.8 280.8 239.1 272 239.1zM509.2 275c-21-47.13-48.48-151.8-73.1-186.8C397.6 33.63 334.5 0 266.1 0H200.1C95.58 0 4.139 80.13 .1387 184.5c-2.25 59.88 22.99 113.6 63.87 150.3L64.01 488c0 13.26 10.75 24 24 24c13.25 0 23.1-10.74 23.1-23.1V313.4l-15.1-14.25C49.13 257 33.01 187.4 63.88 126.6C89.26 76.75 143.1 48 198.1 48h67.12c51.1 0 100.9 25.38 130.7 67.88c11.25 15.88 27.1 65.63 40.37 102C443.7 237.3 450.1 255.8 456.2 272h-56.25V384c0 8.836-7.164 16-16 16h-79.99v88c0 13.26 10.74 24 24 24c13.25 0 23.1-10.74 23.1-23.1V448h32.01c35.34 0 63.1-28.65 63.1-63.1V320h31.98C503.1 320 518.6 296.1 509.2 275z"/>
</>],
['solid',<>
	<path d="M208 175.1c-8.836 0-16 7.162-16 16c0 8.836 7.163 15.1 15.1 15.1s16-7.164 16-16C224 183.2 216.8 175.1 208 175.1zM272 239.1c-8.836 0-15.1 7.163-15.1 16c0 8.836 7.165 16 16 16s16-7.164 16-16C288 247.2 280.8 239.1 272 239.1zM509.2 275c-20.94-47.13-48.46-151.7-73.1-186.8C397.7 33.59 334.6 0 266.1 0H192C85.95 0 0 85.95 0 192c0 56.8 24.8 107.7 64 142.8L64 512h256l-.0044-64h63.99c35.34 0 63.1-28.65 63.1-63.1V320h31.98C503.1 320 518.6 296.2 509.2 275zM368 240h-12.12c-28.51 0-42.79 34.47-22.63 54.63l8.576 8.576c6.25 6.25 6.25 16.38 0 22.62c-3.125 3.125-7.219 4.688-11.31 4.688s-8.188-1.562-11.31-4.688l-8.576-8.576c-20.16-20.16-54.63-5.881-54.63 22.63V352c0 8.844-7.156 16-16 16s-16-7.156-16-16v-12.12c0-28.51-34.47-42.79-54.63-22.63l-8.576 8.576c-3.125 3.125-7.219 4.688-11.31 4.688c-4.096 0-8.188-1.562-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.62l8.577-8.576C166.9 274.5 152.6 240 124.1 240H112c-8.844 0-16-7.156-16-16s7.157-16 16-16L124.1 208c28.51 0 42.79-34.47 22.63-54.63L138.2 144.8c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.63 0L169.4 130.7c20.16 20.16 54.63 5.881 54.63-22.63V96c0-8.844 7.156-16 16-16S256 87.16 256 96v12.12c0 28.51 34.47 42.79 54.63 22.63l8.576-8.576c6.25-6.25 16.38-6.25 22.63 0s6.25 16.38 0 22.62L333.3 153.4C313.1 173.5 327.4 208 355.9 208l12.12-.0004c8.844 0 15.1 7.157 15.1 16S376.8 240 368 240z"/>
</>],
['thin',<>
	<path d="M508.5 271.1c-7.641-17.12-16.17-41-25.22-66.25c-16.02-44.72-32.56-90.97-48.77-114C394.1 34.28 328 0 257.8 0h-57.78C89.67 0 0 89.81 0 200.2c0 55.44 23.28 108.6 64 146.6V504c0 4.406 3.578 8 8 8s8-3.594 8-8v-164.3l-2.656-2.375c-38.99-35.06-61.35-85-61.35-137.1C16 98.63 98.64 16 200.2 16h57.64c64.96 0 126.1 31.75 163.6 84.94c14.94 21.25 31.86 68.5 46.78 110.2c9.141 25.53 17.78 49.69 25.66 67.34c3.359 7.562 2.688 15.91-1.844 22.88c-4.516 6.938-11.86 10.94-20.13 10.94h-39.88v64c0 30.91-25.16 56.06-56.06 56.06h-72V504c0 4.406 3.578 8 8 8s8-3.594 8-8v-55.66h56c39.74 0 72.06-32.31 72.06-72.06v-48h23.88c13.58 0 26.13-6.812 33.55-18.22C512.9 298.6 514.1 284.4 508.5 271.1zM208 175.1c-8.836 0-16 7.162-16 16c0 8.836 7.163 15.1 15.1 15.1s16-7.164 16-16C224 183.2 216.8 175.1 208 175.1zM272 239.1c-8.836 0-15.1 7.163-15.1 16c0 8.836 7.165 16 16 16s16-7.164 16-16C288 247.2 280.8 239.1 272 239.1zM313.6 331.5c9.062 9.062 24.88 9.062 33.94 0c9.344-9.344 9.344-24.59 0-33.94l-8.594-8.562c-8.344-8.344-8.156-19-5.188-26.16S344.1 248 355.9 248h12.12c13.22 0 24-10.78 24-24s-10.78-24-24-24h-12.12c-11.81 0-19.19-7.656-22.16-14.81s-3.156-17.81 5.188-26.16l8.594-8.562c9.344-9.344 9.344-24.59 0-33.94c-9.375-9.375-24.56-9.375-33.94 0l-8.594 8.562c-8.281 8.312-18.88 8.25-26.16 5.188c-7.156-2.969-14.81-10.34-14.81-22.16V96c0-13.22-10.78-24-24-24s-24 10.78-24 24v12.12c0 11.81-7.656 19.19-14.81 22.16c-7.25 3-17.87 3.094-26.16-5.188L166.5 116.5c-9.375-9.375-24.56-9.375-33.94 0c-9.344 9.344-9.344 24.59 0 33.94l8.562 8.562c8.344 8.344 8.156 19 5.188 26.16S135.9 200 124.1 200H112c-13.22 0-24 10.78-24 24s10.78 24 24 24h12.12c11.81 0 19.19 7.656 22.16 14.81s3.156 17.81-5.188 26.16L132.5 297.5c-9.344 9.344-9.344 24.59 0 33.94c9.062 9.062 24.88 9.062 33.94 0l8.562-8.562c8.312-8.312 18.94-8.219 26.16-5.188c7.156 2.969 14.81 10.34 14.81 22.16V352c0 13.22 10.78 24 24 24s24-10.78 24-24v-12.12c0-11.81 7.656-19.19 14.81-22.16c7.219-3.062 17.84-3.156 26.16 5.188L313.6 331.5zM272.7 302.9c-15.22 6.281-24.69 20.47-24.69 36.94V352c0 4.406-3.594 8-8 8s-8-3.594-8-8v-12.12c0-16.47-9.469-30.66-24.69-36.94C202.2 300.8 196.9 299.8 191.8 299.8c-10.31 0-20.28 4.062-28.03 11.81l-8.562 8.562c-3 3-8.312 3-11.31 0c-3.125-3.125-3.125-8.188 0-11.31l8.562-8.562c11.66-11.66 14.97-28.34 8.656-43.59C154.8 241.5 140.6 232 124.1 232H112c-4.406 0-8-3.594-8-8s3.594-8 8-8h12.12c16.47 0 30.66-9.469 36.94-24.69c6.312-15.25 3-31.94-8.656-43.59L143.9 139.2c-3.125-3.125-3.125-8.188 0-11.31s8.188-3.125 11.31 0l8.562 8.562c11.66 11.62 28.34 15 43.59 8.656c15.22-6.281 24.69-20.47 24.69-36.94V96c0-4.406 3.594-8 8-8s8 3.594 8 8v12.12c0 16.47 9.469 30.66 24.69 36.94c15.28 6.344 31.94 2.969 43.59-8.656l8.594-8.562c3.125-3.125 8.188-3.125 11.31 0s3.125 8.188 0 11.31l-8.594 8.562c-11.66 11.66-14.97 28.34-8.656 43.59C325.2 206.5 339.4 216 355.9 216h12.12c4.406 0 8 3.594 8 8s-3.594 8-8 8h-12.12c-16.47 0-30.66 9.469-36.94 24.69c-6.312 15.25-3 31.94 8.656 43.59l8.594 8.562c3.125 3.125 3.125 8.188 0 11.31c-3 3-8.312 3-11.31 0l-8.594-8.562C304.6 299.9 287.9 296.6 272.7 302.9z"/>
</>],

]);

const HeadSideVirus: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HeadSideVirus.displayName = "HeadSideVirus";

export default HeadSideVirus;