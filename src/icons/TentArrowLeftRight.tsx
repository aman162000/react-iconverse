
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M454.2 7.945C463-1.907 478.2-2.706 488.1 6.161L568.1 78.16C573.1 82.71 576 89.2 576 96C576 102.8 573.1 109.3 568.1 113.8L488.1 185.8C478.2 194.7 463 193.9 454.2 184.1C445.3 174.2 446.1 159 455.9 150.2L489.5 120H86.54L120.1 150.2C129.9 159 130.7 174.2 121.8 184.1C112.1 193.9 97.8 194.7 87.94 185.8L7.945 113.8C2.888 109.3 0 102.8 0 96C0 89.2 2.888 82.71 7.945 78.16L87.94 6.161C97.8-2.706 112.1-1.907 121.8 7.945C130.7 17.8 129.9 32.97 120.1 41.84L86.54 72H489.5L455.9 41.84C446.1 32.97 445.3 17.8 454.2 7.945H454.2z"/><path className="fa-secondary" d="M268.6 166.5C280.1 157.8 295.9 157.8 307.4 166.5L475.4 294.5C482 299.6 486.4 307 487.6 315.3L511.6 475.3C513 484.5 510.3 493.8 504.2 500.9C498.2 507.9 489.3 512 480 512H384L287.1 352V512H96C86.68 512 77.83 507.9 71.75 500.9C65.67 493.8 62.97 484.5 64.35 475.3L88.35 315.3C89.59 307 93.98 299.6 100.6 294.5L268.6 166.5z"/>
</>],
['light',<>
	<path d="M570.8 84.16C574.1 87.19 576 91.49 576 96C576 100.5 574.1 104.8 570.8 107.8L482.8 187.8C476.2 193.8 466.1 193.3 460.2 186.8C454.2 180.2 454.7 170.1 461.2 164.2L518.6 112H57.39L114.8 164.2C121.3 170.1 121.8 180.2 115.8 186.8C109.9 193.3 99.78 193.8 93.24 187.8L5.237 107.8C1.901 104.8 0 100.5 0 96C0 91.49 1.902 87.19 5.237 84.16L93.24 4.161C99.78-1.783 109.9-1.301 115.8 5.237C121.8 11.78 121.3 21.89 114.8 27.84L57.39 80H518.6L461.2 27.84C454.7 21.9 454.2 11.78 460.2 5.237C466.1-1.301 476.2-1.783 482.8 4.161L570.8 84.16zM470.6 291C481.1 298.8 487.9 310.5 489.6 323.4L507.2 457.8C510.9 486.5 488.5 512 459.6 512H116.4C87.47 512 65.1 486.5 68.85 457.8L86.37 323.4C88.06 310.5 94.94 298.8 105.4 291L278.5 163.1C284.1 158.1 291.9 158.1 297.5 163.1L470.6 291zM272 207.7L124.5 316.8C120.1 319.4 118.7 323.3 118.1 327.6L100.6 461.9C99.33 471.5 106.8 480 116.4 480H272V320.3C271.1 320.1 271.1 319.9 272 319.8L272 207.7zM304 376.2V480H368.2L304 376.2zM405.6 479.6L405.9 480H459.6C469.2 480 476.7 471.5 475.4 461.9L457.9 327.6C457.3 323.3 455 319.4 451.5 316.8L304 207.7V315.4L405.6 479.6z"/>
</>],
['regular',<>
	<path d="M568.1 78.16C573.1 82.71 576 89.2 576 96C576 102.8 573.1 109.3 568.1 113.8L488.1 185.8C478.2 194.7 463 193.9 454.2 184.1C445.3 174.2 446.1 159 455.9 150.2L489.5 120H86.54L120.1 150.2C129.9 159 130.7 174.2 121.8 184.1C112.1 193.9 97.8 194.7 87.94 185.8L7.945 113.8C2.888 109.3 0 102.8 0 96C0 89.2 2.888 82.71 7.945 78.16L87.94 6.161C97.8-2.706 112.1-1.907 121.8 7.945C130.7 17.8 129.9 32.97 120.1 41.84L86.54 72H489.5L455.9 41.84C446.1 32.97 445.3 17.8 454.2 7.945C463-1.907 478.2-2.706 488.1 6.161L568.1 78.16zM468.4 293.1C479.9 301.1 487.5 315 489.6 329.5L506.5 448.1C511.4 481.8 485.2 512 451.1 512H124.9C90.82 512 64.64 481.8 69.46 448.1L86.41 329.5C88.47 315 96.07 301.1 107.6 293.1L273.3 165C281.1 158.3 294 158.3 302.7 165L468.4 293.1zM133.9 336.2L116.1 454.9C116.3 459.7 120 464 124.9 464H264V232.9L136.1 331C135.3 332.3 134.2 334.2 133.9 336.2V336.2zM374.4 464H451.1C455.1 464 459.7 459.7 459 454.9L442.1 336.2C441.8 334.2 440.7 332.3 439 331L312 232.9V360L374.4 464z"/>
</>],
['solid',<>
	<path d="M568.1 78.16C573.1 82.71 576 89.2 576 96C576 102.8 573.1 109.3 568.1 113.8L488.1 185.8C478.2 194.7 463 193.9 454.2 184.1C445.3 174.2 446.1 159 455.9 150.2L489.5 120H86.54L120.1 150.2C129.9 159 130.7 174.2 121.8 184.1C112.1 193.9 97.8 194.7 87.94 185.8L7.945 113.8C2.888 109.3 0 102.8 0 96C0 89.2 2.888 82.71 7.945 78.16L87.94 6.161C97.8-2.706 112.1-1.907 121.8 7.945C130.7 17.8 129.9 32.97 120.1 41.84L86.54 72H489.5L455.9 41.84C446.1 32.97 445.3 17.8 454.2 7.945C463-1.907 478.2-2.706 488.1 6.161L568.1 78.16zM475.4 294.5C482 299.6 486.4 307 487.6 315.3L511.6 475.3C513 484.5 510.3 493.8 504.2 500.9C498.2 507.9 489.3 512 480 512H384L287.1 352V512H96C86.68 512 77.83 507.9 71.75 500.9C65.67 493.8 62.97 484.5 64.35 475.3L88.35 315.3C89.59 307 93.98 299.6 100.6 294.5L268.6 166.5C280.1 157.8 295.9 157.8 307.4 166.5L475.4 294.5z"/>
</>],
['thin',<>
	<path d="M573.4 90.1C575.1 91.62 576 93.76 576 96C576 98.24 575.1 100.4 573.4 101.9L477.4 189.9C474.2 192.9 469.1 192.7 466.1 189.4C463.1 186.1 463.3 181.1 466.6 178.1L547.4 104H28.57L109.4 178.1C112.7 181.1 112.9 186.1 109.9 189.4C106.9 192.7 101.9 192.9 98.59 189.9L2.594 101.9C.9411 100.4 0 98.24 0 96C0 93.76 .9411 91.62 2.594 90.1L98.59 2.103C101.9-.8828 106.9-.6626 109.9 2.594C112.9 5.851 112.7 10.91 109.4 13.9L28.57 88H547.4L466.6 13.9C463.3 10.91 463.1 5.851 466.1 2.594C469.1-.6626 474.2-.8828 477.4 2.103L573.4 90.1zM473 289.3C482.3 295.8 488.3 305.9 489.6 317.1L507.6 467.2C510.5 491 491.9 512 467.9 512H108.1C84.09 512 65.5 491 68.35 467.2L86.37 317.1C87.71 305.9 93.74 295.8 102.1 289.3L283.4 161.5C286.1 159.5 289.9 159.5 292.6 161.5L473 289.3zM296 317.8L404.5 496H467.9C482.3 496 493.5 483.4 491.8 469.1L473.7 319C472.9 312.3 469.3 306.2 463.8 302.3L296 183.5L296 317.8zM296 496H385.8L296 348.5V496zM280 319.9V183.5L112.2 302.3C106.7 306.2 103.1 312.3 102.3 319L84.24 469.1C82.53 483.4 93.68 496 108.1 496H280V320.1C279.1 320.1 279.1 319.1 280 319.9H280z"/>
</>],

]);

const TentArrowLeftRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TentArrowLeftRight.displayName = "TentArrowLeftRight";

export default TentArrowLeftRight;
