
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128z"/><path className="fa-secondary" d="M352 424c-13.25 0-24 10.75-24 24v40c0 13.25 10.75 24 24 24s24-10.75 24-24V448C376 434.8 365.3 424 352 424zM448 352c-13.25 0-24 10.75-24 24V416c0 13.25 10.75 24 24 24s24-10.75 24-24v-40C472 362.8 461.3 352 448 352zM160 424c-13.25 0-24 10.75-24 24v40C136 501.3 146.8 512 160 512s24-10.75 24-24V448C184 434.8 173.3 424 160 424zM64 352c-13.25 0-24 10.75-24 24V416c0 13.25 10.75 24 24 24S88 429.3 88 416v-40C88 362.8 77.25 352 64 352zM256 352c-13.25 0-24 10.75-24 24V416c0 13.25 10.75 24 24 24s24-10.75 24-24v-40C280 362.8 269.3 352 256 352z"/>
</>],
['light',<>
	<path d="M48 360c-8.75 0-16 7.25-16 16V416c0 8.75 7.25 16 16 16S64 424.8 64 416v-40C64 367.3 56.75 360 48 360zM240 360c-8.75 0-16 7.25-16 16V416c0 8.75 7.25 16 16 16S256 424.8 256 416v-40C256 367.3 248.8 360 240 360zM144 440c-8.75 0-16 7.25-16 16v40C128 504.8 135.3 512 144 512S160 504.8 160 496v-40C160 447.3 152.8 440 144 440zM432 360c-8.75 0-16 7.25-16 16V416c0 8.75 7.25 16 16 16S448 424.8 448 416v-40C448 367.3 440.8 360 432 360zM336 440c-8.75 0-16 7.25-16 16v40c0 8.75 7.25 16 16 16s16-7.25 16-16v-40C352 447.3 344.8 440 336 440zM414.7 112.2C407.2 66.75 367.6 32 320 32c-18.97 0-37.09 5.469-52.59 15.69C246.7 18.22 212.6 0 176 0C114.3 0 64 50.25 64 112c0 2.719 .0938 5.438 .3125 8.188C25.84 136.1 0 173.7 0 216C0 273.3 46.66 320 104 320h304C465.3 320 512 273.3 512 216C512 160.9 468.9 115.7 414.7 112.2zM408 288h-304C64.31 288 32 255.7 32 216c0-32.59 22.19-61.13 53.97-69.38c8.219-2.156 13.34-10.34 11.66-18.66C96.56 122.8 96 117.5 96 112C96 67.88 131.9 32 176 32c30.97 0 59.41 18.31 72.47 46.63c2.188 4.781 6.594 8.188 11.78 9.062c5.188 1.094 10.47-.75 14.16-4.531C286.6 70.81 302.8 64 320 64c35.28 0 64 28.72 64 64c0 8.844 7.156 16 16 16h8C447.7 144 480 176.3 480 216S447.7 288 408 288z"/>
</>],
['regular',<>
	<path d="M410.8 104.3C397.3 61.75 357.1 32 312 32c-13.5 0-26.75 2.625-39.25 7.75C250.3 14.5 218.4 0 184 0c-64 0-116.4 50.25-119.8 113.4C25.63 130.4 0 168.5 0 212C0 271.5 48.38 320 108 320h296C463.6 320 512 271.5 512 212C512 154.8 467.1 107.8 410.8 104.3zM404 272h-296C74.88 272 48 245.1 48 212C48 184 67.13 160 94.38 153.8l20.88-4.875L112.4 124C112.3 122.8 112 121.4 112 120c0-39.75 32.25-72 72-72c25.25 0 48.25 13.12 61.38 35.13l13.38 22.12l21-15C289.4 83.63 300.5 80 312 80c28.62 0 52.38 21.75 55.25 50.38L369.5 152H404c33.13 0 60 26.88 60 60S437.1 272 404 272zM352 424c-13.25 0-24 10.75-24 24v40c0 13.25 10.75 24 24 24s24-10.75 24-24V448C376 434.8 365.3 424 352 424zM448 352c-13.25 0-24 10.75-24 24V416c0 13.25 10.75 24 24 24s24-10.75 24-24v-40C472 362.8 461.3 352 448 352zM160 424c-13.25 0-24 10.75-24 24v40C136 501.3 146.8 512 160 512s24-10.75 24-24V448C184 434.8 173.3 424 160 424zM64 352c-13.25 0-24 10.75-24 24V416c0 13.25 10.75 24 24 24S88 429.3 88 416v-40C88 362.8 77.25 352 64 352zM256 352c-13.25 0-24 10.75-24 24V416c0 13.25 10.75 24 24 24s24-10.75 24-24v-40C280 362.8 269.3 352 256 352z"/>
</>],
['solid',<>
	<path d="M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128zM352 424c-13.25 0-24 10.75-24 24v40c0 13.25 10.75 24 24 24s24-10.75 24-24V448C376 434.8 365.3 424 352 424zM448 352c-13.25 0-24 10.75-24 24V416c0 13.25 10.75 24 24 24s24-10.75 24-24v-40C472 362.8 461.3 352 448 352zM160 424c-13.25 0-24 10.75-24 24v40C136 501.3 146.8 512 160 512s24-10.75 24-24V448C184 434.8 173.3 424 160 424zM64 352c-13.25 0-24 10.75-24 24V416c0 13.25 10.75 24 24 24S88 429.3 88 416v-40C88 362.8 77.25 352 64 352zM256 352c-13.25 0-24 10.75-24 24V416c0 13.25 10.75 24 24 24s24-10.75 24-24v-40C280 362.8 269.3 352 256 352z"/>
</>],
['thin',<>
	<path d="M56 360c-4.422 0-8 3.578-8 8v56c0 4.422 3.578 8 8 8S64 428.4 64 424V368C64 363.6 60.42 360 56 360zM248 360c-4.422 0-8 3.578-8 8v56c0 4.422 3.578 8 8 8S256 428.4 256 424V368C256 363.6 252.4 360 248 360zM152 440c-4.422 0-8 3.578-8 8v56C144 508.4 147.6 512 152 512S160 508.4 160 504V448C160 443.6 156.4 440 152 440zM440 360c-4.422 0-8 3.578-8 8v56c0 4.422 3.578 8 8 8S448 428.4 448 424V368C448 363.6 444.4 360 440 360zM344 440c-4.422 0-8 3.578-8 8v56c0 4.422 3.578 8 8 8S352 508.4 352 504V448C352 443.6 348.4 440 344 440zM416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128zM416 304H96C51.89 304 16 268.1 16 224c0-34.45 22.13-64.81 55.08-75.54l13.48-4.391L81.82 130.2C80.6 123.9 80 117.1 80 112c0-52.94 43.06-96 96-96c35.67 0 68.16 19.96 84.79 52.1l11.01 21.28l15.44-18.32C299.8 56.19 317.1 48 336 48c35.29 0 64 28.71 64 64c0 4.691-.416 8.91-1.27 12.9l-4.148 19.35h19.79c1.104 0 2.068-.1035 2.902-.2402C460.8 144.7 496 180.3 496 224C496 268.1 460.1 304 416 304z"/>
</>],

]);

const CloudDrizzle: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CloudDrizzle.displayName = "CloudDrizzle";

export default CloudDrizzle;