
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M10.06 99.61L191.9 32.01L192 416L22 478.8C11.49 483.1 0 475.3 0 464V114.5C0 107.9 3.984 102 10.06 99.61V99.61zM576 48.02V397.6C576 404.1 572 409.1 565.9 412.4L384 480V96.01L554 33.16C564.6 28.96 576 36.7 576 48.02V48.02z"/><path className="fa-secondary" d="M192 32L384 96V480L192.1 416L192 32z"/>
</>],
['light',<>
	<path d="M170.1 33.14C173.4 31.83 176.1 31.64 180.4 32.62L399.1 95.11L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L405.9 478.9C402.6 480.2 399 480.4 395.6 479.4L176.9 416.9L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13L170.1 33.14zM32 440.4L160 389.2V71.63L32 122.8V440.4zM384 124.1L192 69.21V387.9L384 442.8V124.1zM416 440.4L544 389.2V71.63L416 122.8V440.4z"/>
</>],
['regular',<>
	<path d="M565.6 36.24C572.1 40.72 576 48.11 576 56V392C576 401.1 569.8 410.9 560.5 414.4L392.5 478.4C387.4 480.4 381.7 480.5 376.4 478.8L192.5 417.5L32.54 478.4C25.17 481.2 16.88 480.2 10.38 475.8C3.882 471.3 0 463.9 0 456V120C0 110 6.15 101.1 15.46 97.57L183.5 33.57C188.6 31.6 194.3 31.48 199.6 33.23L383.5 94.52L543.5 33.57C550.8 30.76 559.1 31.76 565.6 36.24H565.6zM48 421.2L168 375.5V90.83L48 136.5V421.2zM360 137.3L216 89.3V374.7L360 422.7V137.3zM408 421.2L528 375.5V90.83L408 136.5V421.2z"/>
</>],
['solid',<>
	<path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"/>
</>],
['thin',<>
	<path d="M181.3 32.48C182.9 31.89 184.7 31.84 186.4 32.35L391.8 95.56L533.1 44.19C553.9 36.6 576 52.06 576 74.26V391.2C576 404.6 567.6 416.7 554.9 421.3L394.7 479.5C393.1 480.1 391.3 480.2 389.6 479.6L184.2 416.4L42.94 467.8C22.07 475.4 0 459.9 0 437.7V120.8C0 107.4 8.418 95.34 21.06 90.74L181.3 32.48zM16 120.8V437.7C16 448.8 27.03 456.6 37.47 452.8L176 402.4V51.42L26.53 105.8C20.21 108.1 16 114.1 16 120.8V120.8zM384 109.9L192 50.83V402.1L384 461.2V109.9zM400 460.6L549.5 406.2C555.8 403.9 560 397.9 560 391.2V74.26C560 63.16 548.1 55.43 538.5 59.23L400 109.6V460.6z"/>
</>],

]);

const Map: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Map.displayName = "Map";

export default Map;