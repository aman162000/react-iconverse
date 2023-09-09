
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128z"/><path className="fa-secondary" d="M368 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S368 437.5 368 464zM48 464C48 490.5 69.49 512 96 512s48-21.49 48-48s-48.01-95.1-48.01-95.1S48 437.5 48 464zM208 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S208 437.5 208 464z"/>
</>],
['light',<>
	<path d="M414.7 112.2C407.2 66.75 367.6 32 320 32c-18.97 0-37.09 5.469-52.59 15.69C246.7 18.22 212.6 0 176 0C114.3 0 64 50.25 64 112c0 2.719 .0938 5.438 .3125 8.188C25.84 136.1 0 173.7 0 216C0 273.3 46.66 320 104 320h304C465.3 320 512 273.3 512 216C512 160.9 468.9 115.7 414.7 112.2zM408 288h-304C64.31 288 32 255.7 32 216c0-32.59 22.19-61.13 53.97-69.38c8.219-2.156 13.34-10.34 11.66-18.66C96.56 122.8 96 117.5 96 112C96 67.88 131.9 32 176 32c30.97 0 59.41 18.31 72.47 46.63c2.188 4.781 6.594 8.188 11.78 9.062c5.188 1.094 10.47-.75 14.16-4.531C286.6 70.81 302.8 64 320 64c35.28 0 64 28.72 64 64c0 8.844 7.156 16 16 16h8C447.7 144 480 176.3 480 216S447.7 288 408 288zM242.8 358.9c-10.69 15.47-45.5 67.94-45.5 94.44C197.3 485.7 223.7 512 256 512s58.66-26.31 58.66-58.66c0-26.5-34.81-78.97-45.5-94.44C263.2 350.3 248.8 350.3 242.8 358.9zM256 480c-14.69 0-26.66-11.97-26.66-26.66c0-8.562 12.25-32.69 26.66-56.06c14.41 23.38 26.66 47.5 26.66 56.06C282.7 468 270.7 480 256 480zM82.84 358.9c-10.69 15.47-45.5 67.94-45.5 94.44C37.34 485.7 63.66 512 96 512s58.66-26.31 58.66-58.66c0-26.5-34.81-78.97-45.5-94.44C103.2 350.3 88.78 350.3 82.84 358.9zM96 480c-14.69 0-26.66-11.97-26.66-26.66c0-8.562 12.25-32.69 26.66-56.06c14.41 23.38 26.66 47.5 26.66 56.06C122.7 468 110.7 480 96 480zM402.8 358.9c-10.69 15.47-45.5 67.94-45.5 94.44C357.3 485.7 383.7 512 416 512s58.66-26.31 58.66-58.66c0-26.5-34.81-78.97-45.5-94.44C423.2 350.3 408.8 350.3 402.8 358.9zM416 480c-14.69 0-26.66-11.97-26.66-26.66c0-8.562 12.25-32.69 26.66-56.06c14.41 23.38 26.66 47.5 26.66 56.06C442.7 468 430.7 480 416 480z"/>
</>],
['regular',<>
	<path d="M410.8 104.3C397.3 61.75 357.1 32 312 32c-13.5 0-26.75 2.625-39.25 7.75C250.3 14.5 218.4 0 184 0c-64 0-116.4 50.25-119.8 113.4C25.63 130.4 0 168.5 0 212C0 271.5 48.38 320 108 320h296C463.6 320 512 271.5 512 212C512 154.8 467.1 107.8 410.8 104.3zM404 272h-296C74.88 272 48 245.1 48 212C48 184 67.13 160 94.38 153.8l20.88-4.875L112.4 124C112.3 122.8 112 121.4 112 120c0-39.75 32.25-72 72-72c25.25 0 48.25 13.12 61.38 35.13l13.38 22.12l21-15C289.4 83.63 300.5 80 312 80c28.62 0 52.38 21.75 55.25 50.38L369.5 152H404c33.13 0 60 26.88 60 60S437.1 272 404 272zM368 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S368 437.5 368 464zM48 464C48 490.5 69.49 512 96 512s48-21.49 48-48s-48.01-95.1-48.01-95.1S48 437.5 48 464zM208 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S208 437.5 208 464z"/>
</>],
['solid',<>
	<path d="M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128zM368 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S368 437.5 368 464zM48 464C48 490.5 69.49 512 96 512s48-21.49 48-48s-48.01-95.1-48.01-95.1S48 437.5 48 464zM208 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S208 437.5 208 464z"/>
</>],
['thin',<>
	<path d="M95.99 368c-3.369 0-6.758 2.043-7.995 6.247c-12.75 44.38-40 56.38-40 87.63C48 489.6 69.5 512 96 512s48-22.38 48-50.13c0-31.38-27.25-43.13-40-87.63C102.9 370.1 99.44 368 95.99 368zM128 461.9C128 480.7 113.6 496 96 496s-32-15.31-32-34.13c0-10.99 4.715-18.47 13.75-31.82c5.738-8.477 12.43-18.37 18.24-31.23c5.83 12.93 12.54 22.81 18.28 31.28C123.3 443.4 128 450.8 128 461.9zM415.1 368c-3.369 0-6.758 2.043-7.995 6.247c-12.75 44.38-40 56.38-40 87.63C368 489.6 389.5 512 416 512s48-22.38 48-50.13c0-31.38-27.25-43.13-40-87.63C422.9 370.1 419.4 368 415.1 368zM448 461.9C448 480.7 433.6 496 416 496s-32-15.31-32-34.13c0-10.99 4.715-18.47 13.75-31.82c5.738-8.477 12.43-18.37 18.24-31.23c5.83 12.93 12.54 22.81 18.28 31.28C443.3 443.4 448 450.8 448 461.9zM255.1 368c-3.369 0-6.758 2.043-7.995 6.247c-12.75 44.38-40 56.38-40 87.63C208 489.6 229.5 512 256 512s48-22.38 48-50.13c0-31.38-27.25-43.13-40-87.63C262.9 370.1 259.4 368 255.1 368zM288 461.9C288 480.7 273.6 496 256 496s-32-15.31-32-34.13c0-10.99 4.715-18.47 13.75-31.82c5.738-8.477 12.43-18.37 18.24-31.23c5.83 12.93 12.54 22.81 18.28 31.28C283.3 443.4 288 450.8 288 461.9zM416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128zM416 304H96C51.89 304 16 268.1 16 224c0-34.45 22.13-64.81 55.08-75.54l13.48-4.391L81.82 130.2C80.6 123.9 80 117.1 80 112c0-52.94 43.06-96 96-96c35.67 0 68.16 19.96 84.79 52.1l11.01 21.28l15.44-18.32C299.8 56.19 317.1 48 336 48c35.29 0 64 28.71 64 64c0 4.691-.416 8.91-1.27 12.9l-4.148 19.35h19.79c1.104 0 2.068-.1035 2.902-.2402C460.8 144.7 496 180.3 496 224C496 268.1 460.1 304 416 304z"/>
</>],

]);

const CloudRain: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CloudRain.displayName = "CloudRain";

export default CloudRain;