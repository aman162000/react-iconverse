
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 240v32c0 8.875-7.125 15.1-16 15.1h-124.2l-55.13 110.2c-5.875 11.87-18.63 18.75-31.75 17.62c-13.25-1.375-24.25-10.62-27.75-23.5L323.8 167.3L255.2 486.8C252.2 501 239.8 511.5 225.1 512H224c-14.25 0-26.88-9.5-30.75-23.25L135.9 288H16c-8.875 0-16-7.125-16-15.1V240c0-8.875 7.125-15.1 16-15.1H160c14.25 0 26.88 9.503 30.75 23.25l28.75 100.7L288.8 25.27c3-14.37 15.62-24.87 30.37-25.25c14.75-.5 27.88 9.375 31.75 23.62l74 271.1l26.5-52.1C456.8 230.9 467.9 224 480 224h144C632.9 224 640 231.1 640 240z"/>
</>],
['light',<>
	<path d="M640 240C640 248.8 632.8 256 624 256h-133.1l-60 150c-2.625 6.375-8.375 10.25-16 9.1C408 415.5 402.1 410.6 400.5 403.9l-78.75-315l-82 410.3C238.3 506.5 231.9 511.8 224.4 512H224c-7.25 0-13.75-5-15.5-12.12L147.5 256H16C7.201 256 0 248.8 0 240s7.201-15.1 16-15.1H160c7.375 0 13.75 4.993 15.5 12.12l46.75 187l82-410.3C305.8 5.5 312 .25 319.5 0c8.125 .125 14.25 4.875 16 12.12l84 336l45.63-114.1C467.5 228 473.5 224 480 224h144C632.8 224 640 231.2 640 240z"/>
</>],
['regular',<>
	<path d="M640 255.1C640 269.3 629.3 280 616 280h-120.8l-57.5 122.2c-4.375 9.125-13.5 14.75-24 13.63c-10-.875-18.5-8-21-17.87l-70-268.6L247.5 492.9C245.2 503.8 235.9 511.6 224.8 512H224c-10.75 0-20.25-7.25-23.12-17.62L141.8 280H23.1C10.75 280 0 269.3 0 256S10.75 232 23.1 232H160c10.79 0 20.25 7.206 23.12 17.61l37.5 136L296.5 19.12C298.8 8.25 308.4 .25 319.5 0H320c10.88 0 20.5 7.375 23.25 18l79.25 303.9l35.75-76.12C462.2 237.4 470.8 232 480 232h136C629.3 232 640 242.7 640 255.1z"/>
</>],
['solid',<>
	<path d="M640 240v32c0 8.875-7.125 15.1-16 15.1h-124.2l-55.13 110.2c-5.875 11.87-18.63 18.75-31.75 17.62c-13.25-1.375-24.25-10.62-27.75-23.5L323.8 167.3L255.2 486.8C252.2 501 239.8 511.5 225.1 512H224c-14.25 0-26.88-9.5-30.75-23.25L135.9 288H16c-8.875 0-16-7.125-16-15.1V240c0-8.875 7.125-15.1 16-15.1H160c14.25 0 26.88 9.503 30.75 23.25l28.75 100.7L288.8 25.27c3-14.37 15.62-24.87 30.37-25.25c14.75-.5 27.88 9.375 31.75 23.62l74 271.1l26.5-52.1C456.8 230.9 467.9 224 480 224h144C632.9 224 640 231.1 640 240z"/>
</>],
['thin',<>
	<path d="M640 248C640 252.4 636.4 256 632 256h-147.1l-61.78 123.6c-1.5 2.969-4.719 4.781-7.906 4.406c-3.281-.3125-6.031-2.594-6.938-5.781L320.1 72.5L231.8 473.8C231 477.3 227.9 479.9 224.3 480c-3.562 0-6.969-2.375-7.938-5.812L153.1 256H8C3.594 256 0 252.4 0 248S3.594 240 8 240H160c3.562 0 6.719 2.375 7.688 5.812l55.34 193.7L312.2 38.25C313 34.69 316.1 32.13 319.8 32c3.562 0 6.969 2.375 7.938 5.812l90.34 316.2l54.81-109.6C474.2 241.7 476.1 240 480 240h152C636.4 240 640 243.6 640 248z"/>
</>],

]);

const WavePulse: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WavePulse.displayName = "WavePulse";

export default WavePulse;
