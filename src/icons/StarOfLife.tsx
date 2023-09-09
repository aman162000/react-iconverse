
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M489.1 363.3l-24.03 41.59c-6.634 11.49-21.34 15.43-32.82 8.78l-177.1-102.4L78.87 413.7c-11.49 6.646-26.19 2.712-32.82-8.78l-24.03-41.59c-6.617-11.46-2.68-26.13 8.774-32.77l177.2-102.6L207.1 24c0-13.25 10.76-24 24.02-24h48.04c13.26 0 24.02 10.75 24.02 24l-.015 203.9l177.2 102.6C492.7 337.2 496.6 351.8 489.1 363.3z"/><path className="fa-secondary" d="M207.1 172.9L78.87 98.33c-11.49-6.645-26.19-2.711-32.82 8.781L22.02 148.7C15.4 160.2 19.34 174.8 30.8 181.5L159.5 256l48.43-28.07L207.1 172.9zM207.1 339.1V488c0 13.25 10.76 24 24.02 24h48.04c13.26 0 24.02-10.75 24.02-24v-148.9l-48.03-27.8L207.1 339.1zM489.1 148.7l-24.02-41.59c-6.634-11.49-21.34-15.43-32.82-8.78l-129.1 74.56l-.0154 55.05L352.5 256l128.8-74.53C492.7 174.8 496.6 160.2 489.1 148.7z"/>
</>],
['light',<>
	<path d="M477.9 384c-2.971 5.125-8.349 8-13.88 8c-2.721 0-5.472-.6875-7.99-2.156l-183.1-106.1V496c0 8.844-7.161 16-16.01 16s-16.01-7.156-16.01-16V283.7l-183.1 106.1C53.51 391.3 50.75 392 48.03 392c-5.535 0-10.91-2.875-13.88-8c-4.425-7.656-1.798-17.44 5.863-21.84L224 256L40.01 149.8C32.35 145.4 29.72 135.7 34.15 128c4.425-7.656 14.23-10.31 21.87-5.844l183.1 106.1V16C239.1 7.156 247.2 0 256 0s16.01 7.156 16.01 16v212.3l183.1-106.1C463.6 117.7 473.4 120.3 477.9 128c4.425 7.656 1.798 17.44-5.863 21.84L287.1 256l183.1 106.2C479.6 366.6 482.3 376.3 477.9 384z"/>
</>],
['regular',<>
	<path d="M476.8 384C472.3 391.7 464.2 396 455.1 396c-4.094 0-8.234-1.031-12.03-3.25L280 297.7V488c0 13.25-10.75 24-24 24s-24-10.75-24-24V297.7l-163.1 95.09C64.25 394.1 60.11 396 56.02 396c-8.266 0-16.33-4.281-20.78-11.97c-6.641-11.47-2.734-26.16 8.719-32.78L208.2 256l-164.2-95.25C32.5 154.1 28.6 139.4 35.24 127.1c6.641-11.5 21.34-15.41 32.81-8.719L232 214.3V24C232 10.75 242.8 0 256 0s24 10.75 24 24v190.3l163.1-95.09c11.48-6.688 26.16-2.781 32.81 8.719c6.641 11.47 2.734 26.16-8.719 32.78L303.8 256l164.2 95.25C479.5 357.9 483.4 372.6 476.8 384z"/>
</>],
['solid',<>
	<path d="M489.1 363.3l-24.03 41.59c-6.635 11.48-21.33 15.41-32.82 8.78l-129.1-74.56V488c0 13.25-10.75 24-24.02 24H231.1c-13.27 0-24.02-10.75-24.02-24v-148.9L78.87 413.7c-11.49 6.629-26.19 2.698-32.82-8.78l-24.03-41.59c-6.635-11.48-2.718-26.14 8.774-32.77L159.9 256L30.8 181.5C19.3 174.8 15.39 160.2 22.02 148.7l24.03-41.59c6.635-11.48 21.33-15.41 32.82-8.781l129.1 74.56L207.1 24c0-13.25 10.75-24 24.02-24h48.04c13.27 0 24.02 10.75 24.02 24l.0005 148.9l129.1-74.56c11.49-6.629 26.19-2.698 32.82 8.78l24.02 41.59c6.637 11.48 2.718 26.14-8.774 32.77L352.1 256l129.1 74.53C492.7 337.2 496.6 351.8 489.1 363.3z"/>
</>],
['thin',<>
	<path d="M483.1 377.1c3.844 2.188 5.172 7.062 2.984 10.91C485.5 390.6 482.8 392 480 392c-1.359 0-2.719-.3438-3.969-1.062L264 269.8V504c0 4.406-3.578 8-8 8s-8-3.594-8-8V269.8l-212 121.2C34.72 391.7 33.36 392 32 392c-2.766 0-5.469-1.438-6.953-4.031c-2.188-3.844-.8594-8.719 2.984-10.91L239.9 256L28.03 134.9C24.19 132.8 22.86 127.9 25.05 124c2.203-3.906 7.094-5.188 10.92-2.969L248 242.2V8C248 3.594 251.6 0 256 0s8 3.594 8 8v234.2l212-121.2c3.75-2.219 8.703-.9375 10.92 2.969c2.188 3.844 .8594 8.719-2.984 10.91L272.1 256L483.1 377.1z"/>
</>],

]);

const StarOfLife: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

StarOfLife.displayName = "StarOfLife";

export default StarOfLife;
