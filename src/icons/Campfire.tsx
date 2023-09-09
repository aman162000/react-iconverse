
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M510.1 490.8C505.5 503.8 493.2 512 480 512c-3.562 0-7.219-.5938-10.75-1.875L256 433.1l-213.3 76.16C39.22 511.4 35.56 512 32 512c-13.16 0-25.47-8.156-30.12-21.25c-5.969-16.62 2.719-34.94 19.38-40.88L160.9 400l-139.7-49.88c-16.66-5.938-25.34-24.25-19.38-40.88c5.906-16.66 24.25-25.44 40.88-19.38L256 366l213.3-76.16c16.53-6.031 34.97 2.719 40.88 19.38c5.969 16.62-2.719 34.94-19.38 40.88L351.1 400l139.7 49.88C507.4 455.8 516.1 474.1 510.1 490.8z"/><path className="fa-secondary" d="M320 32c-13.38 12-25.5 24.75-36.13 37.5C266.4 45.1 244.6 22.25 220 0c-63.13 57-108 131.2-108 176c0 79.5 64.5 144 144 144s144-64.5 144-144C400 142.8 366.6 74 320 32zM294.3 228.5c-10.84 7.873-24.23 12.58-38.65 12.58c-36.1 0-65.44-24.95-65.44-65.44c0-20.14 12.17-37.94 36.4-68.3c3.477 4.193 49.39 65.44 49.39 65.44l29.35-34.87c2.045 3.578 3.988 7.055 5.625 10.43C324.7 175.6 318.9 210.5 294.3 228.5z"/>
</>],
['light',<>
	<path d="M256 320c79.5 0 144-64.5 144-144c0-33.25-33.38-102-80-144c-13.38 12-25.5 24.75-36.13 37.5C266.4 46 244.6 22.25 220 0c-63.13 57-108 131.3-108 176C112 255.5 176.5 320 256 320zM220.2 44.38c14.12 14.38 27 29.38 38.13 44.25L282.4 121l26-31c3.5-4.25 7.25-8.375 11-12.38C350 114.5 368 159.3 368 176c0 61.75-50.25 112-112 112s-112-50.25-112-112C144 148.3 172 94.38 220.2 44.38zM501.5 480.1L302.5 408l199-72.97c8.281-3.062 12.55-12.25 9.5-20.53c-3.047-8.312-12.17-12.53-20.53-9.531L256 390.9L21.52 304.1c-8.297-3-17.48 1.219-20.53 9.531c-3.047 8.281 1.219 17.47 9.5 20.53L209.5 408l-199 72.97c-8.281 3.062-12.55 12.25-9.5 20.53C3.359 508 9.484 512 16 512c1.828 0 3.688-.3125 5.516-.9687L256 425.1l234.5 85.98C492.3 511.7 494.2 512 496 512c6.516 0 12.64-4 15.02-10.5C514.1 493.2 509.8 484 501.5 480.1z"/>
</>],
['regular',<>
	<path d="M256 320c79.5 0 144-64.5 144-144c0-33.25-33.38-102-80-144c-13.38 12-25.5 24.75-36.13 37.5C266.4 46 244.6 22.25 220 0c-63.12 57-108 131.3-108 176C112 255.5 176.5 320 256 320zM220.2 67.88c9.125 10 17.62 20.25 25.12 30.38l36.25 48.5l36.87-43.88C339.9 133.3 351.1 165.1 351.1 176c0 52.88-42.1 96-95.1 96c-52.87 0-95.1-43.13-95.1-96C159.1 156.6 180.7 112.6 220.2 67.88zM496.1 465.4L326.5 404l169.7-61.44c12.47-4.5 18.94-18.28 14.41-30.72c-4.5-12.5-18.28-18.88-30.72-14.41L256 378.5L32.16 297.4C19.76 292.1 5.947 299.3 1.447 311.8c-4.531 12.44 1.938 26.22 14.41 30.72L185.5 404l-169.7 61.44c-12.47 4.5-18.94 18.28-14.41 30.72C4.979 505.9 14.2 512 24.01 512c2.719 0 5.469-.4687 8.156-1.438L256 429.5l223.8 81.05C482.5 511.5 485.3 512 487.1 512c9.811 0 19.03-6.062 22.56-15.84C515.1 483.7 508.6 469.9 496.1 465.4z"/>
</>],
['solid',<>
	<path d="M256 320c79.5 0 144-64.5 144-144c0-33.25-33.37-102-80-144c-13.38 12-25.5 24.75-36.13 37.5C266.4 46 244.6 22.25 220 0c-63.13 57-108 131.3-108 176C112 255.5 176.5 320 256 320zM226.6 107.4c3.477 4.193 49.39 65.44 49.39 65.44l29.35-34.87c2.045 3.578 3.988 7.055 5.625 10.43c13.7 27.2 7.873 62.17-16.67 80.16c-10.84 7.873-24.23 12.58-38.65 12.58c-36.1 0-65.44-24.95-65.44-65.44C190.2 155.5 202.4 137.7 226.6 107.4zM490.8 449.9L351.1 400l139.7-49.88c16.66-5.938 25.34-24.25 19.38-40.88c-5.906-16.66-24.34-25.41-40.88-19.38L256 366L42.75 289.9C26.13 283.8 7.781 292.6 1.875 309.3c-5.969 16.62 2.719 34.94 19.38 40.88L160.9 400l-139.7 49.88c-16.66 5.938-25.34 24.25-19.38 40.88C6.531 503.8 18.84 512 32 512c3.562 0 7.219-.5938 10.75-1.875L256 433.1l213.3 76.16C472.8 511.4 476.4 512 480 512c13.16 0 25.47-8.156 30.12-21.25C516.1 474.1 507.4 455.8 490.8 449.9z"/>
</>],
['thin',<>
	<path d="M256 320c79.4 0 143.1-64.95 143.1-144.8c0-34.02-32.11-100.1-78.19-142.7c-3.062-2.75-7.703-2.75-10.73 0c-9.953 8.984-19.47 18.64-28.39 28.81C266.9 41.1 247.1 20.79 227.4 2.086c-3.031-2.781-7.719-2.781-10.75 0C156 57.15 112 129.1 112 175.2C112 255.1 176.6 320 256 320zM299.3 290.5c-40.82 29.66-111.8 9.847-111.8-56.76c0-19.39 10.55-36.95 35.48-68.73c12.56 16.53 40.61 53.89 52.75 70.09c1.469 1.953 3.734 3.125 6.187 3.203c1.594-.3125 4.75-.1 6.344-2.844l27.58-32.78c.3438 .6719 .6719 1.328 1 1.984C332.1 235.1 324.5 271.1 299.3 290.5zM222 18.9c20.41 19.11 38.95 39.7 53.91 59.91c1.453 1.969 3.75 3.172 6.203 3.234c2.453-.1094 4.812-.1 6.375-2.906c8.687-10.48 18.05-20.48 27.89-29.78c38.48 37.67 67.62 97.19 67.62 125.9c0 43.74-21.88 82.33-55.1 105.6c14.31-24.15 15.97-55.94 2.199-83.29c-2.047-4.172-4.437-8.484-6.984-12.94c-1.297-2.266-3.625-3.75-6.219-3.984c-2.609-.2031-5.156 .8125-6.844 2.812l-28.62 34.02c-14.47-19.3-49.84-66.41-53.28-70.55c-1.516-1.828-3.781-2.891-6.156-2.891C220.6 144.5 218.3 145.1 216.7 147c-27.37 34.28-45.31 58.84-45.31 86.7c0 18.71 5.289 35.31 14.31 48.94C151 259.6 128 220.1 128 175.2C128 136 168 69.77 222 18.9zM276.7 400l230.4-96.62c4.078-1.703 5.1-6.391 4.281-10.47c-1.703-4.078-6.359-5.969-10.47-4.281L256 391.3L11.1 288.6C6.989 286.9 2.333 288.8 .6296 292.9c-1.719 4.078 .2031 8.765 4.281 10.47l230.4 96.62l-230.4 96.62c-4.078 1.703-5.1 6.391-4.281 10.47C1.911 510.2 4.88 512 8.005 512c1.031 0 2.078-.2031 3.094-.625L256 408.7l244.9 102.7C501.9 511.8 502.1 512 503.1 512c3.125 0 6.094-1.844 7.375-4.906c1.719-4.078-.2031-8.765-4.281-10.47L276.7 400z"/>
</>],

]);

const Campfire: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Campfire.displayName = "Campfire";

export default Campfire;