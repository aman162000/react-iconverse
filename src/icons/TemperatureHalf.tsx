
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9z"/><path className="fa-secondary" d="M272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z"/>
</>],
['light',<>
	<path d="M208 384c0 26.5-21.5 48-48 48S112 410.5 112 384c0-20.88 13.37-38.63 31.1-45.25L144 208c0-8.875 7.125-16 15.1-16s16 7.125 16 16l.0006 130.7C194.6 345.4 208 363.1 208 384zM256 299.4C275.9 321.9 288 351.5 288 384c0 70.75-57.25 128-127.1 128L159.1 512c-70.37-.5-127.5-58.38-127.1-128.6c.125-32.25 12.25-61.62 31.1-84V96c0-53 42.1-95.1 95.1-95.1S256 43 256 96V299.4zM256 384c0-39.88-22.87-62.13-31.1-72.5V96c0-35.25-28.75-64-63.1-64S96 60.75 96 96v215.5c-9.5 10.62-31.75 32.5-31.1 72C63.75 436.2 106.6 479.6 159.4 480h.625C212.9 480 256 436.9 256 384z"/>
</>],
['regular',<>
	<path d="M272 112c0-61.88-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.62-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368c0-33.1-12.25-64.88-32-89.5V112zM160 464c-52.88 0-96-43.13-96-96c0-27 11.75-47.25 21.5-59.5L96 295.4V112c0-35.25 28.75-64 64-64s64 28.75 64 64v183.2l10.5 13.13C244.3 320.8 256 341 256 368C256 420.9 212.9 464 160 464zM176 322.9l.0002-114.9c0-8.75-7.25-16-16-16c-8.75 0-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9z"/>
</>],
['solid',<>
	<path d="M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9zM272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z"/>
</>],
['thin',<>
	<path d="M240 322.5V80c0-44.18-35.82-79.1-79.1-79.1S80 35.82 80 80v242.5c-19.58 20.13-32 47.21-32 77.51c0 61.86 50.14 112 112 112S272 461.9 272 400C272 369.7 259.6 342.6 240 322.5zM160 496c-52.94 0-96-43.07-96-96c0-24.57 9.756-48.14 27.47-66.35L96 328.1V80c0-35.29 28.71-64 64-64s64 28.71 64 64v248.1l4.529 4.658C246.2 351.9 256 375.4 256 400C256 452.9 212.9 496 160 496zM168 352.8V200c0-4.422-3.594-7.1-7.1-7.1S152 195.6 152 200v152.8C129.3 356.6 112 376.2 112 400c0 26.51 21.49 48 48 48S208 426.5 208 400C208 376.2 190.7 356.6 168 352.8zM160 432C142.4 432 128 417.6 128 400s14.36-32 32-32s32 14.36 32 32S177.6 432 160 432z"/>
</>],

]);

const TemperatureHalf: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TemperatureHalf.displayName = "TemperatureHalf";

export default TemperatureHalf;
