
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M448 144v120.4C448 314.2 422.6 358.1 384 384v128H128v-128l-53.19-38.67C48 325.8 32 294.3 32 261.2V192c0-14.58 6.625-28.38 17.1-37.48L80 130.5V176C80 184.8 87.16 192 96 192s16-7.164 16-16v-128C112 21.48 133.5 0 160 0c25.38 0 45.96 19.77 47.67 44.73C216.2 36.9 227.5 32 240 32C266.5 32 288 53.48 288 80v5.531C296.6 72.57 311.3 64 328 64c23.47 0 42.94 16.87 47.11 39.14C382.4 98.7 390.9 96 400 96C426.5 96 448 117.5 448 144z"/>
</>],
['light',<>
	<path d="M388.6 86.86c-4.469 0-8.906 .5313-13.25 1.547c-10.28-18.39-29.88-30.5-51.88-30.5c-9 0-17.69 2.031-25.56 5.781c-9.406-20.48-30.09-34.73-54.06-34.73c-6.781 0-13.41 1.172-19.69 3.406C214.2 13.11 194.2 0 171.4 0C138.7 0 112 26.66 112 59.42v115.8c0 8.844 7.156 16 16 16s16-7.156 16-16V59.42C144 44.3 156.3 32 171.4 32c14.25 0 26.16 11.23 27.16 25.58c.5893 8.251 7.414 14.89 15.98 14.89c11.85 0 12.58-11.51 29.24-11.51c15.12 0 27.44 12.3 27.44 27.42V93.39c0 5.138 3.986 16.01 15.99 16.01c15.99 0 13.5-19.49 36.2-19.49c13.16 0 24.47 9.406 26.91 22.36c1.07 5.713 6.31 13.04 15.75 13.04c8.638 0 10.03-6.205 21.91-6.205C402.5 119.1 416 131 416 146.3v108.9c0 41.84-29.41 76.48-56.91 94.94C354.7 353.1 352 358.1 352 363.4V496c0 8.844 7.156 16 16 16s16-7.156 16-16v-124.3c32.13-24.09 64-65.77 64-116.5V146.3C448 113.5 421.3 86.86 388.6 86.86zM96.97 321.2C76.31 306.2 64 281.1 64 256.5V192.6c0-8.641 3.875-16.7 10.62-22.11l15.37-12.31C93.95 155 95.1 150.4 95.1 145.7c0-8.427-6.726-15.99-15.99-15.99c-3.528 0-7.077 1.155-10.02 3.516l-15.37 12.31C40.25 157 32 174.2 32 192.6v63.89c0 35.66 17.22 69.52 47.31 91.38L128 377.1V496C128 504.8 135.2 512 144 512S160 504.8 160 496v-128c0-5.625-2.938-10.83-7.781-13.72L96.97 321.2z"/>
</>],
['regular',<>
	<path d="M377.1 68.05C364.4 50.65 343.7 40 321.2 40h-13.53c-3.518 0-7.039 .2754-10.53 .8184C284.8 31.33 269.6 26 253.5 26H240c-3.977 0-7.904 .3691-11.75 1.084C216.7 10.71 197.6 0 176 0H160C124.7 0 96 28.65 96 64v49.71L63.04 143.3C43.3 160 32 184.6 32 210.9v78.97c0 32.1 17.11 61.65 44.65 77.12L112 386.9v101.1C112 501.3 122.7 512 135.1 512S160 501.3 160 488v-129.9c-1.316-.6543-2.775-.9199-4.062-1.639l-55.78-31.34C87.72 318.2 80 304.6 80 289.9V210.9c0-12.31 5.281-23.77 14.5-31.39L112 163.8V208C112 216.8 119.2 224 128 224s16-7.156 16-16V64c0-8.828 7.188-16 16-16h16C184.8 48 192 55.17 192 64v16c0 9.578 7.942 16.04 16.15 16.04c6.432 0 12.31-4.018 14.73-10.17C223.3 84.84 228.3 74 240 74h13.53c20.97 0 17.92 19.58 34.27 19.58c8.177 0 9.9-5.584 19.88-5.584h13.53c25.54 0 18.27 28.23 38.66 28.23c.1562 0 .3125-.002 .4668-.0078L375.4 116C388.1 116 400 127.7 400 142V272c0 36.15-19.54 67.32-48 83.69v132.3C352 501.3 362.7 512 375.1 512S400 501.3 400 488v-108.1C430.1 352.8 448 313.6 448 272V142C448 102.1 416.8 69.44 377.1 68.05z"/>
</>],
['solid',<>
	<path d="M448 144v120.4C448 314.2 422.6 358.1 384 384v128H128v-128l-53.19-38.67C48 325.8 32 294.3 32 261.2V192c0-14.58 6.625-28.38 17.1-37.48L80 130.5V176C80 184.8 87.16 192 96 192s16-7.164 16-16v-128C112 21.48 133.5 0 160 0c25.38 0 45.96 19.77 47.67 44.73C216.2 36.9 227.5 32 240 32C266.5 32 288 53.48 288 80v5.531C296.6 72.57 311.3 64 328 64c23.47 0 42.94 16.87 47.11 39.14C382.4 98.7 390.9 96 400 96C426.5 96 448 117.5 448 144z"/>
</>],
['thin',<>
	<path d="M394.3 91.42c-6.344 0-12.66 1.188-18.66 3.469c-7.969-20.16-27.59-33.94-49.91-33.94c-11.56 0-22.59 3.703-31.66 10.34c-5.781-23.42-26.97-40.83-52.16-40.83c-8.906 0-17.59 2.25-25.34 6.484C209.5 15.44 189.2 0 165.7 0C136.1 0 112 24.09 112 53.72v121.9c0 4.422 3.594 8 8 8S128 180 128 175.6V53.72C128 32.92 144.9 16 165.7 16c19.62 0 36.06 15.44 37.44 35.14c.2576 4.207 3.815 7.457 7.996 7.457c7.131 0 11.17-12.13 30.75-12.13c20.81 0 37.72 16.92 37.72 37.72v5.266c0 2.467 1.887 7.985 7.995 7.985c2.634 0 5.135-1.275 6.661-3.564c7.031-10.59 18.78-16.92 31.44-16.92c18.12 0 33.69 12.94 37 30.75c.5461 2.833 3.13 6.524 7.885 6.524c5.092 0 9.658-6.806 23.68-6.806C415.1 107.4 432 124.3 432 145.1v114.6c0 68.57-72 104.6-72 113.9v129.9c0 4.422 3.594 8 8 8s8-3.578 8-8v-125.7C396.8 363.2 448 320.8 448 259.8V145.1C448 115.5 423.9 91.42 394.3 91.42zM85.88 333.6C62.16 316.3 48 288.5 48 259.2V192.6c0-11.66 5.219-22.52 13.78-29.39l30.69-20.58C94.76 141.1 95.1 138.6 95.1 135.1c0-4.512-3.682-8.005-8.019-8.005c-1.535 0-3.084 .444-4.449 1.372L52.31 150.3C39.41 160.7 32 176.1 32 192.6v66.55c0 34.39 16.62 67.05 44.66 87.52L128 381.5V504C128 508.4 131.6 512 135.1 512S144 508.4 144 504v-126.8c0-2.656-1.312-5.125-3.5-6.625L85.88 333.6z"/>
</>],

]);

const HandBackFist: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HandBackFist.displayName = "HandBackFist";

export default HandBackFist;
