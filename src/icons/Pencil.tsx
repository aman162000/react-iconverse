
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M182.7 459.2C176.1 465.8 167.9 470.7 158.9 473.3L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L38.67 353.1C41.32 344.1 46.17 335.9 52.8 329.3L86.74 363.2C85.79 364.2 85.1 365.3 84.72 366.6L59.44 452.6L145.4 427.3C146.7 426.9 147.9 426.2 148.8 425.3L158.6 415.4H112C103.2 415.4 96 408.3 96 399.4V353.9L86.74 363.2L52.8 329.3L303 79.03L432.1 208.1L182.7 459.2z"/><path className="fa-secondary" d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L432.1 208.1L303 79.03L362.7 19.32z"/>
</>],
['light',<>
	<path d="M373.2 16.97C395.1-4.901 430.5-4.901 452.4 16.97L495 59.6C516.9 81.47 516.9 116.9 495 138.8L182.3 451.6C170.9 462.9 156.9 471.2 141.5 475.8L20.52 511.3C14.9 512.1 8.827 511.5 4.687 507.3C.5466 503.2-1.002 497.1 .6506 491.5L36.23 370.5C40.76 355.1 49.09 341.1 60.44 329.7L373.2 16.97zM429.8 39.6C420.4 30.22 405.2 30.22 395.8 39.6L341 94.4L417.6 170.1L472.4 116.2C481.8 106.8 481.8 91.6 472.4 82.23L429.8 39.6zM109.6 402.4L173.4 415.2L394.1 193.6L318.4 117L96.84 338.6L109.6 402.4zM70.51 370.2C69.08 373.2 67.88 376.3 66.93 379.5L39.63 472.4L132.4 445.1C135.7 444.1 138.8 442.9 141.8 441.5L92.86 431.7C86.53 430.4 81.58 425.5 80.31 419.1L70.51 370.2z"/>
</>],
['regular',<>
	<path d="M36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9zM59.44 452.6L137.6 429.6C139.9 428.9 142.2 427.1 144.4 426.9L108.1 419.6C100.2 418 93.97 411.8 92.39 403.9L85.13 367.6C84.02 369.8 83.11 372.1 82.42 374.4L59.44 452.6zM180.7 393.3L383 191L320.1 128.1L118.7 331.3L128.1 383L180.7 393.3z"/>
</>],
['solid',<>
	<path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/>
</>],
['thin',<>
	<path d="M383.7 14.63C402.4-4.12 432.8-4.12 451.5 14.63L497.4 60.46C516.1 79.2 516.1 109.6 497.4 128.3L176 449.7C163.7 461.1 148.5 471 131.8 475.9L10.26 511.7C7.449 512.5 4.413 511.7 2.343 509.7C.2733 507.6-.5008 504.6 .3254 501.7L36.08 380.2C40.99 363.5 50.02 348.3 62.32 335.1L383.7 14.63zM440.2 25.94C427.7 13.44 407.5 13.44 394.1 25.94L328.1 92.8L419.2 183.9L486.1 117C498.6 104.5 498.6 84.27 486.1 71.77L440.2 25.94zM71.78 349.2L79.36 432.6L162.8 440.2C163.5 439.6 164.1 438.1 164.7 438.4L407.9 195.2L316.8 104.1L73.63 347.3C73 347.9 72.39 348.5 71.78 349.2L71.78 349.2zM57.55 369.4C55.04 374.2 52.99 379.4 51.43 384.7L19.81 492.2L127.3 460.6C132.6 459 137.7 456.1 142.6 454.5L71.28 447.1C67.43 447.6 64.38 444.6 64.03 440.7L57.55 369.4z"/>
</>],

]);

const Pencil: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Pencil.displayName = "Pencil";

export default Pencil;
