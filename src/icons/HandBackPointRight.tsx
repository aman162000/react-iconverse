
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M224 464H144c-76.09 0-137.9-59.49-143-134.3C.3379 326.6 0 323.3 0 320V208c0-45.09 21.53-88.16 57.61-115.2l25.59-19.19C91.52 67.38 101.6 64 112 64H160c14.58 0 28.38 6.625 37.48 18l23.99 29.99H176c-8.836 0-16 7.162-16 16c0 8.836 7.161 16.01 15.1 16.01L472 144C494.1 144 512 161.9 512 184S494.1 224 472 224h-164.5C315.2 232.5 320 243.7 320 256c0 23.48-16.88 42.96-39.17 47.11C294.7 311.5 304 326.6 304 344c0 23.47-16.87 42.94-39.14 47.11C269.3 398.4 272 406.9 272 416C272 442.5 250.5 464 224 464z"/>
</>],
['light',<>
	<path d="M226.1 480H135.1c-74.98 0-136-60.19-136-134.2V228.2c0-22.31 5.703-44.47 16.52-64.09l33.58-60.88C63.41 79 88.98 64 116.8 64h50.33c23.16 0 44.75 10.22 59.42 28.28L254.6 128H213.1L201.6 112.3C193.2 101.9 180.7 96 167.2 96H116.8C100.6 96 85.81 104.7 78.12 118.6L44.55 179.5C36.34 194.4 31.1 211.2 31.1 228.2v117.7C31.1 402.2 78.66 448 135.1 448h90.1c15.98 0 29-12.69 29-28.31c0 0-.2559-16.87-.2559-17c0-20.64 32.26-13.24 32.26-42.06v-14.78c0-10.99-5.012-13.6-5.012-21.72c0-16.65 21.01-13.5 21.01-37.35V269.5c0-16.82-11.69-17.63-11.69-29.56C292.3 231.3 299.4 224 308.3 224h147.7c13.25 0 24-10.74 24-24c0-13.25-10.75-24-24-24L175.1 175.1c-8.836 0-16-7.164-16-16s7.167-16.01 16-16.01L455.1 144c34.72 0 62.16 31.76 54.8 67.76C505.4 237.9 481.1 256 454.4 256h-119.1c1.047 4.406 1.594 8.938 1.594 13.53v17.25c0 16.03-6.375 31.06-17.53 42.19c1.688 5.5 1.531 11.12 1.531 16.88v14.78c0 21.47-13.67 41.03-32 51.72v7.344C287.1 452.9 260.6 480 226.1 480z"/>
</>],
['regular',<>
	<path d="M173.1 63.1H126.1c-32.1 0-61.65 17.1-77.12 44.63L17.65 164.5C6.103 185.1 0 208.4 0 231.8v107.9c0 77.37 64.6 140.3 144 140.3H236c39.92 0 72.56-31.19 73.95-70.04c17.5-13.63 28.05-34.63 28.05-56.74v-13.53c0-3.557-.273-7.102-.814-10.61C346.8 316.6 352 301.4 352 285.5V271.1h87.1C479.7 271.1 512 239.7 512 199.1s-32.3-72-72-72h-169.7L241 95.43C224.5 75.46 199.8 63.1 173.1 63.1zM173.1 111.1c12.31 0 23.77 5.281 31.39 14.5L220.2 143.1L176 143.1c-8.844 0-16 7.162-16 16.01s7.156 16 16 16L439.1 175.1c13.23 0 24 10.78 24 24s-10.77 24-24 24h-142c-9.578 0-16.04 7.941-16.04 16.15c0 6.433 4.017 12.31 10.17 14.73C293.2 255.3 304 260.3 304 271.1v13.53c0 20.97-19.58 17.92-19.58 34.27c0 8.211 5.583 9.847 5.583 19.88v13.53c0 25.55-28.23 18.27-28.23 38.66c0 .1566 .0027 .3126 .0081 .4679l.2183 15.03c0 13.59-11.66 24.62-25.1 24.62H143.1c-52.94 0-95.1-41.41-95.1-92.31V231.8c0-15.25 3.984-30.41 11.52-43.88l31.34-55.78c6.984-12.44 20.5-20.16 35.27-20.16H173.1z"/>
</>],
['solid',<>
	<path d="M224 464H144c-76.09 0-137.9-59.49-143-134.3C.3379 326.6 0 323.3 0 320V208c0-45.09 21.53-88.16 57.61-115.2l25.59-19.19C91.52 67.38 101.6 64 112 64H160c14.58 0 28.38 6.625 37.48 18l23.99 29.99H176c-8.836 0-16 7.162-16 16c0 8.836 7.161 16.01 15.1 16.01L472 144C494.1 144 512 161.9 512 184S494.1 224 472 224h-164.5C315.2 232.5 320 243.7 320 256c0 23.48-16.88 42.96-39.17 47.11C294.7 311.5 304 326.6 304 344c0 23.47-16.87 42.94-39.14 47.11C269.3 398.4 272 406.9 272 416C272 442.5 250.5 464 224 464z"/>
</>],
['thin',<>
	<path d="M0 348.9V226.3c0-21.75 5.5-43.38 15.88-62.53l34.44-63.41C62.47 77.94 85.88 64 111.4 64h77.44c21.22 0 41.03 9.5 54.31 26.09l11.06 13.84c1.19 1.471 1.768 3.233 1.768 4.987c0 4.256-3.424 8.008-8.018 8.008c-2.35 0-4.674-1.026-6.249-2.995L230.7 100.1C220.5 87.31 205.2 80 188.9 80H111.4c-19.66 0-37.72 10.72-47.06 28L29.94 171.4C20.81 188.2 16 207.2 16 226.3v122.6C16 412.4 67.63 464 131.1 464h102.8C254.9 464 272 446.9 272 425.8v-15.28c0-.0313-.25-2.312-.25-2.312c-.049-.3202-.0728-.64-.0728-.9579c0-3.126 2.296-6.058 5.417-7.136C292.9 394.7 304 379.9 304 364.3v-15.38c0-14.78-5.526-17.63-5.526-22.65c0-2.65 1.305-5.213 3.713-6.729C313.3 312.5 320 300.4 320 287.4V278.8c0-19.47-11.99-23.64-11.99-30.78C308 244.5 310.7 240 316 240H456c22.06 0 40-17.94 40-40S478.1 160 456 160h-288C163.6 160 160 156.4 160 152S163.6 144 168 144h287.1C486.9 144 512 169.1 512 199.1S486.9 256 456 256h-125.1C334.2 263.1 336 270.9 336 278.8v8.594c0 16.22-7.188 31.28-19.5 41.5C318.8 335 320 341.7 320 348.9v15.38c0 20.69-12.62 39.56-32 48.66v12.88C288 455.7 263.7 480 233.8 480H131.1C58.78 480 0 421.2 0 348.9z"/>
</>],

]);

const HandBackPointRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HandBackPointRight.displayName = "HandBackPointRight";

export default HandBackPointRight;