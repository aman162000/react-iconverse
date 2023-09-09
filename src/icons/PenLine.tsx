
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M182.7 459.2C176.1 465.8 167.9 470.7 158.9 473.3L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L38.67 353.1C41.32 344.1 46.17 335.9 52.8 329.3L303 79.03L432.1 208.1L182.7 459.2z"/><path className="fa-secondary" d="M492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L432.1 208.1L303 79.03L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75zM552 464C565.3 464 576 474.7 576 488C576 501.3 565.3 512 552 512H248C234.7 512 224 501.3 224 488C224 474.7 234.7 464 248 464H552z"/>
</>],
['light',<>
	<path d="M373.2 16.97C395.1-4.897 430.5-4.897 452.4 16.97L495 59.6C516.9 81.47 516.9 116.9 495 138.8L182.3 451.6C170.9 462.9 156.9 471.2 141.5 475.8L20.52 511.4C14.9 513 8.827 511.5 4.687 507.3C.5466 503.2-1.002 497.1 .6506 491.5L36.23 370.5C40.76 355.1 49.09 341.1 60.44 329.7L373.2 16.97zM429.8 39.6C420.4 30.23 405.2 30.23 395.8 39.6L341 94.4L417.6 170.1L472.4 116.2C481.8 106.8 481.8 91.6 472.4 82.23L429.8 39.6zM66.93 379.6L39.63 472.4L132.4 445.1C142.7 442.1 152.1 436.5 159.6 428.9L394.1 193.6L318.4 117L83.07 352.4C75.5 359.9 69.95 369.3 66.93 379.6V379.6zM560 480C568.8 480 576 487.2 576 496C576 504.8 568.8 512 560 512H240C231.2 512 224 504.8 224 496C224 487.2 231.2 480 240 480H560z"/>
</>],
['regular',<>
	<path d="M36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9zM59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L383 191L320.1 128.1L92.51 357.4C91.92 358 91.35 358.6 90.8 359.3C86.94 363.6 84.07 368.8 82.42 374.4L59.44 452.6zM552 464C565.3 464 576 474.7 576 488C576 501.3 565.3 512 552 512H248C234.7 512 224 501.3 224 488C224 474.7 234.7 464 248 464H552z"/>
</>],
['solid',<>
	<path d="M492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75zM58.57 323.5L291.7 90.34L421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L58.57 323.5zM552 464C565.3 464 576 474.7 576 488C576 501.3 565.3 512 552 512H248C234.7 512 224 501.3 224 488C224 474.7 234.7 464 248 464H552z"/>
</>],
['thin',<>
	<path d="M383.7 14.63C402.4-4.12 432.8-4.12 451.5 14.63L497.4 60.46C516.1 79.2 516.1 109.6 497.4 128.3L176 449.7C163.7 461.1 148.5 471 131.8 475.9L10.26 511.7C7.449 512.5 4.413 511.7 2.343 509.7C.2733 507.6-.5009 504.6 .3254 501.7L36.08 380.2C40.99 363.5 50.02 348.3 62.32 335.1L383.7 14.63zM440.2 25.94C427.7 13.44 407.5 13.44 394.1 25.94L328.1 92.8L419.2 183.9L486.1 117C498.6 104.5 498.6 84.27 486.1 71.77L440.2 25.94zM51.43 384.7L19.81 492.2L127.3 460.6C141.5 456.4 154.3 448.8 164.7 438.4L407.9 195.2L316.8 104.1L73.63 347.3C63.22 357.7 55.59 370.5 51.44 384.7H51.43zM568 496C572.4 496 576 499.6 576 504C576 508.4 572.4 512 568 512H232C227.6 512 224 508.4 224 504C224 499.6 227.6 496 232 496H568z"/>
</>],

]);

const PenLine: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PenLine.displayName = "PenLine";

export default PenLine;
