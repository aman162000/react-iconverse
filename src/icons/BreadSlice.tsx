
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M144 384C135.2 384 128 391.2 128 400C128 408.8 135.2 416 144 416S160 408.8 160 400C160 391.2 152.8 384 144 384zM144 288C135.2 288 128 295.2 128 304C128 312.8 135.2 320 144 320S160 312.8 160 304C160 295.2 152.8 288 144 288zM240 384C231.2 384 224 391.2 224 400C224 408.8 231.2 416 240 416s16-7.164 16-16C256 391.2 248.8 384 240 384z"/><path className="fa-secondary" d="M256 32C96 32 0 112 0 176.1C0 203 21.56 224 56.89 224H64v224c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V224h7.111C490.4 224 512 203 512 176.1C512 112 416 32 256 32zM144 416C135.2 416 128 408.8 128 400C128 391.2 135.2 384 144 384S160 391.2 160 400C160 408.8 152.8 416 144 416zM144 320C135.2 320 128 312.8 128 304C128 295.2 135.2 288 144 288S160 295.2 160 304C160 312.8 152.8 320 144 320zM240 416C231.2 416 224 408.8 224 400C224 391.2 231.2 384 240 384s16 7.162 16 16C256 408.8 248.8 416 240 416z"/>
</>],
['light',<>
	<path d="M256 32C102.9 32 0 115.2 0 192.1c0 34.84 26.67 60.29 64 62.59v178.4C64 459.4 84.63 480 109.1 480h292C427.4 480 448 459.4 448 434V255.6c37.33-2.293 64-27.75 64-62.59C512 115.2 409.1 32 256 32zM442.7 224C427.9 224 416 235.9 416 250.7v183.3C416 441.7 409.7 448 401.1 448h-292C102.3 448 96 441.7 96 434v-183.3C96 235.9 84.07 224 69.34 224C47 224 32 211.5 32 192.1C32 140.3 111.8 64 256 64s224 76.25 224 128.1C480 211.5 465 224 442.7 224z"/>
</>],
['regular',<>
	<path d="M256 32C132.4 32 0 96.29 0 192c0 35.29 26.92 64 60 64H64v176C64 458.5 85.49 480 112 480h288c26.51 0 48-21.49 48-48V256h4C485.1 256 512 227.3 512 192C512 96.29 379.6 32 256 32zM452 208H400v224h-288v-224H60C54.25 208 48 201.6 48 192c0-59.63 105.8-112 208-112s208 52.38 208 112C464 201.6 457.8 208 452 208z"/>
</>],
['solid',<>
	<path d="M512 176.1C512 203 490.4 224 455.1 224H448v224c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V224H56.89C21.56 224 0 203 0 176.1C0 112 96 32 256 32S512 112 512 176.1z"/>
</>],
['thin',<>
	<path d="M256 32C96 32 0 112 0 176.1C0 203 21.56 224 56.89 224H64v224c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V224h7.111C490.4 224 512 203 512 176.1C512 112 416 32 256 32zM455.1 208H432V448c0 8.822-7.178 16-16 16H96c-8.822 0-16-7.178-16-16V208H56.89C32.43 208 16 195.5 16 176.1C16 124.3 101.5 48 256 48c154.5 0 240 76.25 240 128.1C496 195.5 479.6 208 455.1 208z"/>
</>],

]);

const BreadSlice: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BreadSlice.displayName = "BreadSlice";

export default BreadSlice;
