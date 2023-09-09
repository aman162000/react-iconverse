
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M639.4 140.3c-7.152 45.32-51.3 51.79-83.76 35.38c-20.1-10.96-40.86-2.188-55.21 8.041c-12.11 8.623-24.38 21.21-36.5 37.4c-23.44 31.3-38.42 65.63-42.01 77.35c-29.52 96.37-146.2 111.4-202.8 44.45C172.7 288.8 184.4 193.3 266.2 163.4c44.7-16.61 61.14-.0449 129-21.75c31.16-9.971 55.5-23.91 68.54-39.26c10.19-12.03 13.65-24.81 10.47-39.11c-7.316-33.55 20.14-64.83 54.73-63.21c42.39 1.957 66.34 48.1 41.49 82.3C607.8 70.59 645.4 101.5 639.4 140.3z"/><path className="fa-secondary" d="M488.7 193.9c53.78 58.14 87.32 131.6 87.32 190.1C576 498.9 447.1 512 288 512S0 498.9 0 383.1c0-114.9 128.9-288 287.1-288c45.93 .002 89.2 14.74 127.7 38.05c-6.441 2.711-13.21 5.283-20.45 7.598C327.4 163.3 310.9 146.8 266.2 163.4c-81.84 29.89-93.58 125.4-47.2 179.6c56.68 66.91 173.3 51.92 202.8-44.45c3.586-11.72 18.57-46.05 42.01-77.35C472.1 210.2 480.4 201.5 488.7 193.9z"/>
</>],
['light',<>
	<path d="M579.7 75.53c5.5-33.12-19.75-70.87-58.87-75.12c-46.12-5.125-83.25 38.1-71.12 83.87c2.875 10.1 .4999 20.1-6.5 26.75c-11.87 9.749-14.1 12.75-29.5 21.62C375.9 110.2 333.5 96.03 288.5 96.03C129.7 96.03 0 269.1 0 383.1s129.7 128 288.5 128c158.9 0 287.5-13.13 287.5-128c0-52.75-27.28-117.6-72.03-172.5c3.1-3.625 1.625-2.25 9.1-9.249c10.75-8.874 24.38-2.625 28.38-.4999c7.5 4.125 15.75 6.75 24.25 7.625c35.1 4.125 69.12-22.37 72.1-59.75C643.4 114.3 618.1 79.9 579.7 75.53zM544.1 384c0 70.87-66.87 95.99-255.5 95.99c-188.7 0-256.6-25.12-256.6-95.99c0-98.74 117.1-255.1 256.6-255.1c31.12 0 61.12 8.249 88.1 21.75c-23.12 7.874-38.87 9.499-58.87 10.12c-56.87 1.875-106.7 39.1-121.2 92.62c-11.1 43.62-1.25 89.24 28.62 122.2c23.1 26.37 57.1 41.37 93.62 41.25c77.87 0 113.2-63.5 122.6-101.1c7.125-28.1 20.1-55.87 39.37-78.87C520.4 283.5 544.1 339.6 544.1 384zM557.6 173.8c-76.1-42.12-138.1 99.74-146.6 134.1c-9.625 39.12-38.62 68.37-73.1 74.5c-33.25 5.1-65.12-4.75-87.25-29.12c-22.5-24.87-30.5-59.25-21.37-92.12c3.1-14.5 23.37-66.1 98.87-69.5c47.25-1.625 173.2-40.12 153.4-115.6c-3.5-13.37 1.125-27.62 11.87-36.37c23.12-18.75 58.1-.625 55.62 31.37c-.625 5.375-2.375 10.5-5.375 14.1c-3.625 5.875-3.125 13.25 1.25 18.62c4.25 5.25 11.5 7.25 17.87 4.875c4.875-1.875 10.12-2.625 15.37-2.125c18.87 1.1 32.62 19.5 30.62 38.87C605.2 171.6 578.2 185 557.6 173.8z"/>
</>],
['regular',<>
	<path d="M497.4 242.5c-4.795 7.451-9.084 15.05-12.86 22.38C511.8 305 528 348.5 528 384c0 50.63-39.25 80-240 80c-.002 0 .002 0 0 0c-200.7 0-240-29.38-240-80c0-89.81 103.4-230.7 228.3-239.2c15.42-4.74 28.58-6.27 41.32-7.611c17.66-1.859 35.92-3.781 66.97-16.2c1.266-.5059 2.35-1.094 3.588-1.615c-31.24-14.51-64.88-23.39-100.2-23.39c-.002 0 .002 0 0 0C129 95.99 0 269.1 0 383.1S129 512 288 512c.002 0-.002 0 0 0c158.1 0 288-13.13 288-128c0-49.29-23.89-109.2-63.56-161.7C507.5 228.1 502.5 234.7 497.4 242.5zM567 79.17c22.36-35.88-4.801-80.21-47.22-79.15c-34.61 .832-59.78 33.98-50.11 66.93c4.186 14.03 1.635 27.03-7.676 39.75c-11.92 16.24-35.21 31.87-65.59 44.02c-66.18 26.47-83.76 11.11-127.2 30.85c-79.51 35.62-84.45 131.8-34.34 182.5c61.28 62.72 176.6 39.49 199.2-58.72c2.746-11.95 15.26-47.25 36.42-80.14c10.94-17.01 22.29-30.44 33.75-39.9c13.58-11.22 32.77-21.38 54.5-11.94c33.53 14.06 77.12 4.482 81.04-41.23C643.1 92.95 603.4 64.79 567 79.17z"/>
</>],
['solid',<>
	<path d="M636.4 155.6c-7.375 19.5-26.62 33.38-47.5 33.88c-10.75 .375-21.25-2.5-30.25-8.251c-15.12-9.626-33.87-11.63-48.63-1.375c-27.62 19.25-69.87 57.25-90.62 120.5c-14.37 44-51.87 78.51-97.75 83.01c-4.25 .3751-8.5 .6251-12.62 .6251c-57.37 0-101.7-39.5-113.6-89.76c-.875-3.625-3.1-6.25-7.75-6.25H171.2c-2.5 0-4.75 1-6.25 2.875C163.5 292.6 162.9 295.1 163.2 297.4c3.1 20 12.12 39 23.87 55.63c28.12 40 72.62 63 121.9 63c5.25 0 10.37-.25 15.75-.7501c56.87-5.625 105.1-46.88 124.1-105c11.25-35.25 32.5-66.5 60.1-90.13c40.75 52.88 65.28 113.9 65.28 163.9C576 498.9 447 512 288 512S0 498.9 0 383.1s129-288 287.1-288c45.87 0 88.1 14.61 127.4 37.86c23.87-10.38 32.62-17.25 48.12-28c13.25-9.126 18.12-25.5 14.5-41.13c-1.5-6.875-1.625-14-.3746-20.88c2.75-15.25 11.87-28.5 25.12-36.38c13.25-7.876 29.25-9.626 43.87-4.75c19.87 6.5 34.12 25.13 36.12 46c1.25 12.88-2.375 25.88-10.25 36.25c7.75-2.25 15.87-2.75 23.87-1.375C628.5 89.47 648.6 123.2 636.4 155.6z"/>
</>],
['thin',<>
	<path d="M507.3 226.7c-3.578 2.594-4.391 7.594-1.797 11.16c34.63 47.85 54.48 99.98 54.48 143.1c0 96.26-99.74 115.1-272 115.1C115.7 495.1 16 477.2 16 380.9c0-106.2 121.9-268.1 272-268.1c20.42 0 41.19 3.125 61.7 9.314c4.266 1.375 8.719-1.094 9.969-5.346c1.281-4.25-1.125-8.688-5.344-9.969c-94.94-28.53-193.7 5.938-270.2 89.66C32.23 252.4 0 323.4 0 380.9C0 501.9 142.3 512 288 512c145.7 0 288-10.13 288-131.1c0-46.38-20.97-101.9-57.52-152.4C515.9 224.9 510.9 224.1 507.3 226.7zM619.8 91.06c-11.44-9.846-26.16-15.66-40.33-14.56c4.922-13.91 4.219-29.1-2.391-42.88c-9.438-19.69-29.27-32.56-51.75-33.6c-18.64-.5-36.55 6.844-48.64 21.19c-11.64 13.81-16.14 31.69-12.31 49.13c2.5 11.19-.1562 20.91-8.375 30.53c-11.62 13.59-33.8 26.1-62.44 35.22c-33.72 10.69-53.89 11.38-71.69 11.97C305.6 148.6 290.2 149.1 268.9 157C231.4 170.6 205.5 198.4 195.8 235.3c-9.719 37.16-.4375 78.01 24.17 106.6c23.08 27.06 56.96 42.16 92.35 42.16c8.391 0 16.88-.8438 25.31-2.594c43.78-9.033 78.05-40.79 91.67-85.01c3.312-10.78 17.27-42.5 39.27-71.69c11.17-14.85 22.42-26.31 33.42-34.13c16.67-11.78 31.38-14.16 45.02-7.062c21.31 10.66 45.67 11.56 63.72 2.312c10.86-5.562 24.62-17.41 28.55-42.13C642.4 123.9 635.1 104.3 619.8 91.06zM623.5 141.2c-2.297 14.53-9.047 24.75-20.05 30.41c-13.58 6.938-32.42 6.031-49.13-2.344c-19.12-9.939-39.78-7.158-61.55 8.25c-12.36 8.781-24.78 21.41-36.96 37.56c-23.27 30.88-38.19 64.97-41.77 76.63c-12.06 39.1-41.08 66.07-79.61 74.04c-38.33 7.781-77.49-5.25-102.3-34.31C210.9 306.8 202.9 271.5 211.3 239.4c8.266-31.63 30.66-55.54 63.08-67.29c18.98-7.033 32.47-7.471 48.08-8.002c18.83-.625 40.17-1.344 75.99-12.72c31.45-10 56.22-24.25 69.75-40.1c11.46-13.38 15.42-28.31 11.85-44.38c-2.736-12.5 .5156-25.38 8.922-35.35c8.406-9.969 20.53-15.56 33.53-15.56c.7031 0 1.422 .0313 2.141 .0625c16.84 .75 31.08 9.938 38.06 24.5c6.516 13.62 4.969 29.19-4.141 41.66c-2.047 2.781-2.062 6.562-.0469 9.377c2.016 2.781 5.625 4.062 8.891 2.969c14.73-4.564 30.39-1.344 41.99 8.656C620.6 112.9 625.8 126.8 623.5 141.2z"/>
</>],

]);

const Turkey: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Turkey.displayName = "Turkey";

export default Turkey;