
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M128.1 217.8C118.9 226.1 105.1 226.1 95.94 217.8L15.94 145.8C6.093 136.1 5.294 121.8 14.16 111.9C23.03 102.1 38.2 101.3 48.06 110.2L88 146.1V24C88 10.75 98.75 0 112 0C125.3 0 136 10.75 136 24V146.1L175.9 110.2C185.8 101.3 200.1 102.1 209.8 111.9C218.7 121.8 217.9 136.1 208.1 145.8L128.1 217.8zM480.1 217.8C470.9 226.1 457.1 226.1 447.9 217.8L367.9 145.8C358.1 136.1 357.3 121.8 366.2 111.9C375 102.1 390.2 101.3 400.1 110.2L440 146.1V24C440 10.75 450.7 0 464 0C477.3 0 488 10.75 488 24V146.1L527.9 110.2C537.8 101.3 552.1 102.1 561.8 111.9C570.7 121.8 569.9 136.1 560.1 145.8L480.1 217.8z"/><path className="fa-secondary" d="M268.6 166.5C280.1 157.8 295.9 157.8 307.4 166.5L475.4 294.5C482 299.6 486.4 307 487.6 315.3L511.6 475.3C513 484.5 510.3 493.8 504.2 500.9C498.2 507.9 489.3 512 480 512H384L287.1 352V512H96C86.68 512 77.83 507.9 71.75 500.9C65.67 493.8 62.97 484.5 64.35 475.3L88.35 315.3C89.59 307 93.98 299.6 100.6 294.5L268.6 166.5z"/>
</>],
['light',<>
	<path d="M203.9 117.3C209.8 123.9 209.3 133.1 202.7 139.9L122.7 211.9C116.6 217.4 107.4 217.4 101.3 211.9L21.3 139.9C14.73 133.1 14.2 123.9 20.11 117.3C26.02 110.7 36.14 110.2 42.7 116.1L96 164.1V16C96 7.164 103.2 0 112 0C120.8 0 128 7.164 128 16V164.1L181.3 116.1C187.9 110.2 197.1 110.7 203.9 117.3H203.9zM555.9 117.3C561.8 123.9 561.3 133.1 554.7 139.9L474.7 211.9C468.6 217.4 459.4 217.4 453.3 211.9L373.3 139.9C366.7 133.1 366.2 123.9 372.1 117.3C378 110.7 388.1 110.2 394.7 116.1L448 164.1V16C448 7.164 455.2 0 464 0C472.8 0 480 7.164 480 16V164.1L533.3 116.1C539.9 110.2 549.1 110.7 555.9 117.3H555.9zM470.6 291C481.1 298.8 487.9 310.5 489.6 323.4L507.2 457.8C510.9 486.5 488.5 512 459.6 512H116.4C87.47 512 65.1 486.5 68.85 457.8L86.37 323.4C88.06 310.5 94.94 298.8 105.4 291L278.5 163.1C284.1 158.1 291.9 158.1 297.5 163.1L470.6 291zM118.1 327.6L100.6 461.9C99.33 471.5 106.8 480 116.4 480H271.1V207.7L124.5 316.8C120.1 319.4 118.7 323.3 118.1 327.6V327.6zM405.6 479.6L405.9 480H459.6C469.2 480 476.7 471.5 475.4 461.9L457.9 327.6C457.3 323.3 455 319.4 451.5 316.8L304 207.7V315.4L405.6 479.6zM368.2 480L304 376.2V480H368.2z"/>
</>],
['regular',<>
	<path d="M209.8 111.9C218.7 121.8 217.9 136.1 208.1 145.8L128.1 217.8C118.9 226.1 105.1 226.1 95.94 217.8L15.94 145.8C6.093 136.1 5.294 121.8 14.16 111.9C23.03 102.1 38.2 101.3 48.06 110.2L88 146.1V24C88 10.75 98.75 0 112 0C125.3 0 136 10.75 136 24V146.1L175.9 110.2C185.8 101.3 200.1 102.1 209.8 111.9H209.8zM561.8 111.9C570.7 121.8 569.9 136.1 560.1 145.8L480.1 217.8C470.9 226.1 457.1 226.1 447.9 217.8L367.9 145.8C358.1 136.1 357.3 121.8 366.2 111.9C375 102.1 390.2 101.3 400.1 110.2L440 146.1V24C440 10.75 450.7 0 464 0C477.3 0 488 10.75 488 24V146.1L527.9 110.2C537.8 101.3 552.1 102.1 561.8 111.9H561.8zM468.4 293.1C479.9 301.1 487.5 315 489.6 329.5L506.5 448.1C511.4 481.8 485.2 512 451.1 512H124.9C90.82 512 64.64 481.8 69.46 448.1L86.4 329.5C88.47 315 96.07 301.1 107.6 293.1L273.3 165C281.1 158.3 294 158.3 302.7 165L468.4 293.1zM133.9 336.2L116.1 454.9C116.3 459.7 120 464 124.9 464H264V232.9L136.1 331C135.3 332.3 134.2 334.2 133.9 336.2V336.2zM374.4 464H451.1C455.1 464 459.7 459.7 459 454.9L442.1 336.2C441.8 334.2 440.7 332.3 439 331L312 232.9V360L374.4 464z"/>
</>],
['solid',<>
	<path d="M209.8 111.9C218.7 121.8 217.9 136.1 208.1 145.8L128.1 217.8C118.9 226.1 105.1 226.1 95.94 217.8L15.94 145.8C6.093 136.1 5.294 121.8 14.16 111.9C23.03 102.1 38.2 101.3 48.06 110.2L88 146.1V24C88 10.75 98.75 0 112 0C125.3 0 136 10.75 136 24V146.1L175.9 110.2C185.8 101.3 200.1 102.1 209.8 111.9H209.8zM561.8 111.9C570.7 121.8 569.9 136.1 560.1 145.8L480.1 217.8C470.9 226.1 457.1 226.1 447.9 217.8L367.9 145.8C358.1 136.1 357.3 121.8 366.2 111.9C375 102.1 390.2 101.3 400.1 110.2L440 146.1V24C440 10.75 450.7 0 464 0C477.3 0 488 10.75 488 24V146.1L527.9 110.2C537.8 101.3 552.1 102.1 561.8 111.9H561.8zM475.4 294.5C482 299.6 486.4 307 487.6 315.3L511.6 475.3C513 484.5 510.3 493.8 504.2 500.9C498.2 507.9 489.3 512 480 512H384L287.1 352V512H96C86.68 512 77.83 507.9 71.75 500.9C65.67 493.8 62.97 484.5 64.35 475.3L88.35 315.3C89.59 307 93.98 299.6 100.6 294.5L268.6 166.5C280.1 157.8 295.9 157.8 307.4 166.5L475.4 294.5z"/>
</>],
['thin',<>
	<path d="M197.9 122.6C200.9 125.9 200.6 130.1 197.4 133.9L117.4 205.9C114.3 208.7 109.7 208.7 106.6 205.9L26.65 133.9C23.36 130.1 23.1 125.9 26.05 122.6C29.01 119.4 34.07 119.1 37.35 122.1L104 182V8C104 3.582 107.6 0 112 0C116.4 0 120 3.582 120 8V182L186.6 122.1C189.9 119.1 194.1 119.4 197.9 122.6H197.9zM283.4 161.5C286.1 159.5 289.9 159.5 292.6 161.5L473 289.3C482.3 295.8 488.3 305.9 489.6 317.1L507.6 467.2C510.5 491 491.9 512 467.9 512H108.1C84.09 512 65.5 491 68.35 467.2L86.37 317.1C87.71 305.9 93.74 295.8 102.1 289.3L283.4 161.5zM491.8 469.1L473.7 319C472.9 312.3 469.3 306.2 463.8 302.3L296 183.5V317.8L404.5 496H467.9C482.3 496 493.5 483.4 491.8 469.1L491.8 469.1zM279.1 183.5L112.2 302.3C106.7 306.2 103.1 312.3 102.3 319L84.24 469.1C82.53 483.4 93.68 496 108.1 496H279.1V183.5zM296 348.5V496H385.8L296 348.5zM469.4 205.9C466.3 208.7 461.7 208.7 458.6 205.9L378.6 133.9C375.4 130.1 375.1 125.9 378.1 122.6C381 119.4 386.1 119.1 389.4 122.1L456 182V8C456 3.582 459.6 0 464 0C468.4 0 472 3.582 472 8V182L538.6 122.1C541.9 119.1 546.1 119.4 549.9 122.6C552.9 125.9 552.6 130.1 549.4 133.9L469.4 205.9z"/>
</>],

]);

const TentArrowsDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TentArrowsDown.displayName = "TentArrowsDown";

export default TentArrowsDown;
