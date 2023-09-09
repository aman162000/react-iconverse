
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M204.6 166.5C216.1 157.8 231.9 157.8 243.4 166.5L411.4 294.5C418 299.6 422.4 307 423.6 315.3L447.6 475.3C449 484.5 446.3 493.8 440.2 500.9C434.2 507.9 425.3 512 416 512H319.1L223.1 352V512H32C22.68 512 13.83 507.9 7.753 500.9C1.674 493.8-1.028 484.5 .3542 475.3L24.35 315.3C25.59 307 29.98 299.6 36.61 294.5L204.6 166.5z"/><path className="fa-secondary" d="M603.4 134.5C610 139.6 614.4 147 615.6 155.3L639.6 315.3C641 324.5 638.3 333.8 632.2 340.9C626.2 347.9 617.3 352 608 352H461.5L455.3 310.5C452.8 294 444 279.2 430.8 269.1L262.8 141.1C254.6 134.9 245.4 130.9 235.8 129.1L396.6 6.546C408.1-2.182 423.9-2.182 435.4 6.546L603.4 134.5z"/>
</>],
['light',<>
	<path d="M598.6 131C609.1 138.8 615.9 150.5 617.6 163.4L635.2 297.8C638.9 326.5 616.5 352 587.6 352H461.5L456.7 320H587.6C597.2 320 604.7 311.5 603.4 301.9L585.9 167.6C585.3 163.3 583 159.4 579.5 156.8L416 35.9L268.1 145.2L262.8 141.1C254.7 134.9 245.5 130.9 236 129.1L406.5 3.133C412.1-1.044 419.9-1.044 425.5 3.133L598.6 131zM406.6 291C417.1 298.8 423.9 310.5 425.6 323.4L443.2 457.8C446.9 486.5 424.5 512 395.6 512H52.45C23.47 512 1.101 486.5 4.848 457.8L22.37 323.4C24.06 310.5 30.94 298.8 41.44 291L214.5 163.1C220.1 158.1 227.9 158.1 233.5 163.1L406.6 291zM54.1 327.6L36.58 461.9C35.33 471.5 42.79 480 52.45 480H208V207.7L60.46 316.8C56.96 319.4 54.67 323.3 54.11 327.6H54.1zM241.2 311.6L345.2 479.6L345.4 480H395.6C405.2 480 412.7 471.5 411.4 461.9L393.9 327.6C393.3 323.3 391 319.4 387.5 316.8L240 207.7V309.9C240.4 310.4 240.8 310.1 241.2 311.6H241.2zM307.8 480L240 370.5V480H307.8z"/>
</>],
['regular',<>
	<path d="M595.1 124.6C607.4 133.5 615.6 147.2 617.6 162.3L634.8 288.4C639.4 322.1 613.3 352 579.3 352H461.5L455.3 310.5C454.1 308.3 454.5 306.1 453.1 304H579.3C584.2 304 587.9 299.7 587.3 294.9L570.1 168.8C569.8 166.6 568.6 164.7 566.8 163.4L416 53.68L278.9 153.4L262.8 141.1C253.6 134.1 242.1 129.9 232.1 128.5C233.6 127.1 235.2 125.8 236.9 124.6L401.9 4.59C410.3-1.53 421.7-1.53 430.1 4.59L595.1 124.6zM404.4 293.1C415.9 301.1 423.5 315 425.6 329.5L442.5 448.1C447.4 481.8 421.2 512 387.1 512H60.9C26.82 512 .6406 481.8 5.46 448.1L22.41 329.5C24.47 315 32.07 301.1 43.6 293.1L209.3 165C217.1 158.3 230 158.3 238.7 165L404.4 293.1zM69.92 336.2L52.98 454.9C52.29 459.7 56.03 464 60.9 464H200V232.9L72.95 331C71.3 332.3 70.22 334.2 69.92 336.2V336.2zM310.4 464H387.1C391.1 464 395.7 459.7 395 454.9L378.1 336.2C377.8 334.2 376.7 332.3 375 331L248 232.9V360L310.4 464z"/>
</>],
['solid',<>
	<path d="M396.6 6.546C408.1-2.182 423.9-2.182 435.4 6.546L603.4 134.5C610 139.6 614.4 147 615.6 155.3L639.6 315.3C641 324.5 638.3 333.8 632.2 340.9C626.2 347.9 617.3 352 608 352H461.5L455.3 310.5C452.8 294 444 279.2 430.8 269.1L262.8 141.1C254.6 134.9 245.4 130.9 235.8 129.1L396.6 6.546zM411.4 294.5C418 299.6 422.4 307 423.6 315.3L447.6 475.3C449 484.5 446.3 493.8 440.2 500.9C434.2 507.9 425.3 512 416 512H319.1L223.1 352V512H32C22.68 512 13.83 507.9 7.753 500.9C1.674 493.8-1.028 484.5 .3542 475.3L24.35 315.3C25.59 307 29.98 299.6 36.61 294.5L204.6 166.5C216.1 157.8 231.9 157.8 243.4 166.5L411.4 294.5z"/>
</>],
['thin',<>
	<path d="M601.1 129.3C610.3 135.8 616.3 145.9 617.7 157L635.4 299C638.4 322.9 619.8 344 595.8 344H460.3L457.9 328H595.8C610.2 328 621.4 315.3 619.6 301L601.8 158.1C600.1 152.3 597.4 146.3 591.9 142.4L416.1 17.87L255.7 136.4C250.1 133.2 244.2 130.9 238.1 129.6L238.3 129.4L411.2 1.567C414-.4868 417.8-.5249 420.6 1.472L601.1 129.3zM409 289.3C418.3 295.8 424.3 305.9 425.6 317.1L443.6 467.2C446.5 491 427.9 512 403.9 512H44.07C20.09 512 1.498 491 4.355 467.2L22.37 317.1C23.71 305.9 29.74 295.8 38.96 289.3L219.4 161.5C222.1 159.5 225.9 159.5 228.6 161.5L409 289.3zM340.5 496H403.9C418.3 496 429.5 483.4 427.8 469.1L409.8 319C408.9 312.3 405.3 306.2 399.8 302.3L232 183.5V317.8L340.5 496zM38.25 319L20.24 469.1C18.53 483.4 29.68 496 44.07 496H216V183.5L48.21 302.3C42.68 306.2 39.06 312.3 38.25 319L38.25 319zM321.8 496L232 348.5V496H321.8z"/>
</>],

]);

const Tents: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Tents.displayName = "Tents";

export default Tents;