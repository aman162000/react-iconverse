
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M352 480H32c-12.94 0-24.62-7.781-29.56-19.75c-4.969-11.97-2.219-25.72 6.938-34.88l169.4-169.4L9.375 86.64C.2188 77.48-2.531 63.73 2.438 51.76C7.375 39.8 19.06 32.01 32 32.01h320c17.69 0 32 14.31 32 32v64c0 17.69-14.31 31.1-32 31.1S320 145.7 320 128v-32H109.3l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25l-137.4 137.4H320v-32c0-17.69 14.31-32 31.1-32S384 366.3 384 384v64C384 465.7 369.7 480 352 480z"/>
</>],
['light',<>
	<path d="M335.1 144l-.0005-64h-269.5l153.7 165.7c5.031 5.969 5.031 14.72 0 20.69L66.5 432h269.5l.0005-64c0-8.844 7.156-15.99 16-15.99C360.8 352 368 359.2 368 368V448c0 8.844-7.156 16-16 16H31.1c-6.219 0-11.91-3.625-14.5-9.281c-2.625-5.625-1.75-12.31 2.281-17.06L187 256L19.78 74.34c-4.031-4.75-4.906-11.44-2.281-17.06C20.09 51.63 25.78 48 31.1 48h320C360.8 48 368 55.16 368 64v80c0 8.844-7.156 16.01-16 16.01C343.2 160 335.1 152.8 335.1 144z"/>
</>],
['regular',<>
	<path d="M335.1 136l.0005-56H83.59l165 158.7C253.3 243.2 255.1 249.5 255.1 256s-2.656 12.78-7.375 17.31L83.59 432h252.4l-.0005-56c0-13.25 10.75-24 24-24C373.2 352 384 362.8 384 376v80c0 13.25-10.75 24-24 24H23.99c-9.782 0-18.59-5.938-22.25-15.03s-1.438-19.47 5.625-26.28L197.4 256L7.364 73.31C.3015 66.5-1.917 56.13 1.739 47.03S14.21 32 23.99 32h336C373.2 32 384 42.75 384 56v80C384 149.3 373.2 160 359.1 160C346.7 160 335.1 149.3 335.1 136z"/>
</>],
['solid',<>
	<path d="M352 480H32c-12.94 0-24.62-7.781-29.56-19.75c-4.969-11.97-2.219-25.72 6.938-34.88l169.4-169.4L9.375 86.64C.2188 77.48-2.531 63.73 2.438 51.76C7.375 39.8 19.06 32.01 32 32.01h320c17.69 0 32 14.31 32 32v64c0 17.69-14.31 31.1-32 31.1S320 145.7 320 128v-32H109.3l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25l-137.4 137.4H320v-32c0-17.69 14.31-32 31.1-32S384 366.3 384 384v64C384 465.7 369.7 480 352 480z"/>
</>],
['thin',<>
	<path d="M352 136V64H25.31l172.8 186.8c2.531 3 2.531 7.375 0 10.38L25.31 448H352v-72c0-4.406 3.594-8 8-8s8 3.594 8 8v80c0 4.406-3.594 8-8 8H7.996c-3.125 0-5.969-1.812-7.25-4.656c-1.312-2.812-.875-6.156 1.156-8.531L181.5 256L1.902 61.19C-.1289 58.81-.5664 55.47 .7461 52.66C2.027 49.81 4.871 48 7.996 48H360c4.406 0 8 3.594 8 8v80c0 4.406-3.594 8-8 8S352 140.4 352 136z"/>
</>],

]);

const Sigma: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Sigma.displayName = "Sigma";

export default Sigma;