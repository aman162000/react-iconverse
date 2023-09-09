
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"/>
</>],
['light',<>
	<path d="M192 383.1v-255.1c0-28.37-34.5-42.74-54.63-22.62l-128 127.1c-12.5 12.5-12.5 32.75 0 45.25l128 127.1C157.5 426.7 192 412.5 192 383.1zM32 255.1l128-127.1v255.9L32 255.1z"/>
</>],
['regular',<>
	<path d="M208 368V144c0-42.63-51.76-64.13-82.01-33.88l-112 111.9c-18.63 18.75-18.63 49.25 0 68l112 111.9C156.2 432 208 410.7 208 368zM47.98 256l112-112v224L47.98 256z"/>
</>],
['solid',<>
	<path d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"/>
</>],
['thin',<>
	<path d="M168 96c-6.012 0-11.94 2.26-16.48 6.551l-144 136C2.721 243.1 0 249.4 0 255.1s2.721 12.91 7.52 17.45l144 136C156.1 413.7 161.1 416 168 416C181.2 416 192 405.3 192 392v-272C192 106.7 181.2 96 168 96zM176 392c0 4.41-3.588 8-7.996 8c-2.053 0-4.008-.7773-5.498-2.184l-143.1-136C16.91 260.3 16 258.2 16 256s.9141-4.312 2.506-5.816l143.1-135.1C163.1 112.8 165.1 112 168 112C172.4 112 176 115.6 176 120V392z"/>
</>],

]);

const CaretLeft: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={256} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CaretLeft.displayName = "CaretLeft";

export default CaretLeft;