
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M200 488C200 501.3 210.8 512 224 512s24-10.75 24-24V448h-48V488zM328 448v40c0 13.25 10.75 24 24 24s24-10.75 24-24v-40.04L328 448zM136 488C136 501.3 146.8 512 160 512s24-10.75 24-24V448l-48-.0391V488zM264 488c0 13.25 10.75 24 24 24s24-10.75 24-24V448h-48V488z"/><path className="fa-secondary" d="M64 306.9c0-55.59 17.16-84.8 33.78-113c10.6-18.05 20.69-35.61 26.1-60.65L48.8 191.7C17.79 215.9 0 251.4 0 288.1c0 62.77 49.45 114.6 113.1 124.8C84.23 390 64 354.4 64 306.9zM299.7 211.4C279.2 183.6 256 152 256 92.64V0H208C181.5 0 160 19.99 160 44.57v48.07c0 58.48-18.41 89.78-34.66 117.4C110.3 235.7 96 259.1 96 306.9C96 381.8 158.2 416 215.1 416C273.8 416 336 381.8 336 306.9C336 260.9 319.2 237.1 299.7 211.4zM463.2 191.7l-85.23-66.48C361.5 112.4 352 93.53 352 73.52V44.57C352 19.99 330.5 0 304 0H288v92.64c0 48.88 18.19 73.63 37.44 99.83C345.4 219.6 368 250.4 368 306.9c0 49.17-21.83 85.49-53.34 109.1L376 415.9C451.1 415.5 512 358.8 512 288.1C512 251.4 494.2 215.9 463.2 191.7z"/>
</>],
['light',<>
	<path d="M463.2 206.5l-85.23-71.59C361.5 121 352 100.7 352 79.18V48C352 21.53 330.5 0 304 0h-96C181.5 0 160 21.53 160 48v31.18c0 21.55-9.465 41.86-25.97 55.72L48.8 206.5C17.79 232.5 0 270.7 0 311.2C0 386.6 61.36 448 136.8 448H144v48C144 504.8 151.2 512 160 512s16-7.156 16-16V448h32v48C208 504.8 215.2 512 224 512s16-7.156 16-16V448h32v48c0 8.844 7.156 16 16 16s16-7.156 16-16V448h32v48c0 8.844 7.156 16 16 16s16-7.156 16-16V448h7.225C450.6 448 512 386.6 512 311.2C512 270.7 494.2 232.5 463.2 206.5zM136.8 416C79 416 32 368.1 32 311.2c0-31.03 13.63-60.27 37.38-80.23l71.92-60.41c-.4062 .5098-.6934 1.098-1.111 1.6L114.6 202.8C92.3 229.7 80 263.6 80 298.5C80 346.4 103 388.6 138.2 416H136.8zM230.8 416H224c-62.28-2.92-112-54.47-112-117.5c0-27.48 9.635-54.09 27.23-75.2l25.55-30.66C182.4 171.6 192 144.1 192 117.5V48C192 39.18 199.2 32 208 32H256v89.17c0 28.73 8.844 56.3 25.53 79.72l34.88 48.81C329.2 267.7 336 288.8 336 310.8C336 368.8 288.8 416 230.8 416zM375.2 416h-57.4C348.2 390.8 368 353.3 368 310.8c0-28.73-8.844-56.3-25.53-79.72l-34.88-48.81C294.8 164.3 288 143.2 288 121.2V32h16C312.8 32 320 39.18 320 48v31.18c0 31.03 13.62 60.27 37.38 80.23l85.23 71.59C466.4 250.1 480 280.2 480 311.2C480 368.1 432.1 416 375.2 416z"/>
</>],
['regular',<>
	<path d="M463.2 206.5l-85.23-71.59C361.5 121 352 100.7 352 79.18V48C352 21.53 330.5 0 304 0h-96C181.5 0 160 21.53 160 48v31.18c0 21.55-9.465 41.86-25.97 55.72L48.8 206.5C17.79 232.5 0 270.7 0 311.2c0 75.15 60.95 136.3 136 136.7V488C136 501.3 146.8 512 160 512s24-10.75 24-24V448h16v40C200 501.3 210.8 512 224 512s24-10.75 24-24V448h16v40c0 13.25 10.75 24 24 24s24-10.75 24-24V448h16v40c0 13.25 10.75 24 24 24s24-10.75 24-24v-40.08C451.1 447.5 512 386.4 512 311.2C512 270.7 494.2 232.5 463.2 206.5zM136.8 400C87.82 400 48 360.2 48 311.2c0-26.29 11.54-51.07 31.68-67.98L139.8 192.7L121.1 218.9C104.7 241.9 96 268.1 96 297.3C96 338.6 115.2 375.3 144.6 400H136.8zM128 297.3c0-21.56 6.625-42.2 19.16-59.72l34.16-47.83C198.8 165.2 208 138.2 208 111.4V48h32v63.39c0 26.77 9.219 53.84 26.69 78.31l34.19 47.84C313.4 255 320 275.7 320 297.3C320 429.3 128 430.4 128 297.3zM375.2 400h-71.83C332.8 375.3 352 338.6 352 297.3c0-28.27-8.688-55.36-25.09-78.31L292.8 171.1C279.4 152.4 272 131.2 272 111.4V48h32v31.18c0 35.77 15.71 69.47 43.09 92.48l85.23 71.59C452.5 260.2 464 284.9 464 311.2C464 360.2 424.2 400 375.2 400z"/>
</>],
['solid',<>
	<path d="M200 488C200 501.3 210.8 512 224 512s24-10.75 24-24V448h-48V488zM264 488c0 13.25 10.75 24 24 24s24-10.75 24-24V448h-48V488zM64 306.9c0-55.59 17.16-84.8 33.78-113c10.6-18.05 20.69-35.61 26.1-60.65L48.8 191.7C17.79 215.9 0 251.4 0 288.1c0 62.77 49.45 114.6 113.1 124.8C84.23 390 64 354.4 64 306.9zM136 488C136 501.3 146.8 512 160 512s24-10.75 24-24V448l-48-.0391V488zM463.2 191.7l-85.23-66.48C361.5 112.4 352 93.53 352 73.52V44.57C352 19.99 330.5 0 304 0H288v92.64c0 48.88 18.19 73.63 37.44 99.83C345.4 219.6 368 250.4 368 306.9c0 49.17-21.83 85.49-53.34 109.1L376 415.9C451.1 415.5 512 358.8 512 288.1C512 251.4 494.2 215.9 463.2 191.7zM328 488c0 13.25 10.75 24 24 24s24-10.75 24-24v-40.04L328 448V488zM299.7 211.4C279.2 183.6 256 152 256 92.64V0H208C181.5 0 160 19.99 160 44.57v48.07c0 58.48-18.41 89.78-34.66 117.4C110.3 235.7 96 259.1 96 306.9C96 381.8 158.2 416 215.1 416C273.8 416 336 381.8 336 306.9C336 260.9 319.2 237.1 299.7 211.4z"/>
</>],
['thin',<>
	<path d="M463.2 206.5l-85.23-71.59C361.5 121 352 100.7 352 79.18V48C352 21.53 330.5 0 304 0h-96C181.5 0 160 21.53 160 48v31.18c0 21.55-9.465 41.86-25.97 55.72L48.8 206.5C17.79 232.5 0 270.7 0 311.2c0 69.67 52.57 126.6 120 134.1V504C120 508.4 123.6 512 128 512s8-3.578 8-8v-56.04L184 448v56C184 508.4 187.6 512 192 512s8-3.578 8-8V448h48v56C248 508.4 251.6 512 256 512s8-3.578 8-8V448h48v56c0 4.422 3.594 8 8 8s8-3.578 8-8V448l48-.0391V504c0 4.422 3.594 8 8 8s8-3.578 8-8v-57.78C459.4 437.8 512 380.9 512 311.2C512 270.7 494.2 232.5 463.2 206.5zM136.1 431.9C69.87 431.5 16 377.4 16 311.2c0-35.77 15.71-69.47 43.09-92.48l85.23-71.59c6.152-5.168 11.19-11.26 15.65-17.71c-.0547 23.61-7.312 46.26-21.04 65.5L104.1 243.8C88.31 265.8 80 291.8 80 318.8c0 49.02 27.76 91.23 68.09 113.1L136.1 431.9zM222.8 432H209.2C146.8 432 96 381.2 96 318.8c0-23.7 7.281-46.45 21.06-65.77l34.88-48.83C167.7 182.2 176 156.2 176 129.2V48c0-17.64 14.36-32 32-32H256v113.2c0 27.05 8.312 53.02 24.06 75.08l34.88 48.8C328.7 272.4 336 295.1 336 318.8C336 381.2 285.3 432 222.8 432zM375.1 431.9L283.8 432C324.2 410.1 352 367.9 352 318.8c0-27.05-8.312-53.02-24.06-75.08l-34.88-48.8C279.3 175.6 272 152.9 272 129.2V16h32c17.64 0 32 14.36 32 32v31.18c0 26.29 11.54 51.06 31.68 67.97l85.23 71.59C480.3 241.8 496 275.5 496 311.2C496 377.4 442.1 431.5 375.1 431.9z"/>
</>],

]);

const Garlic: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Garlic.displayName = "Garlic";

export default Garlic;
