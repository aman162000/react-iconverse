
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M360.7 360.7L183.3 183.3L420.6 8.398C428 2.943 436.1 0 446.2 0C457.6 0 468.5 4.539 476.6 12.62L531.4 67.38C539.5 75.46 543.1 86.42 543.1 97.84C543.1 107 541.1 115.1 535.6 123.4L360.7 360.7zM140.7 473.9L109.7 504.1C105.2 509.5 99.05 512 92.69 512H24C10.75 512 0 501.3 0 488V483.3C0 476.1 2.529 470.8 7.029 466.3L70.06 403.3L140.7 473.9z"/><path className="fa-secondary" d="M183.3 183.3L360.7 360.7L334.4 396.5C325.3 408.8 310.1 416 295.7 416H223.1L198.6 441.4C186.1 453.9 165.9 453.9 153.4 441.4L102.6 390.6C90.13 378.1 90.13 357.9 102.6 345.4L127.1 320L127.1 248.3C127.1 233 135.2 218.7 147.5 209.6L183.3 183.3zM552 464C565.3 464 576 474.7 576 488C576 501.3 565.3 512 552 512H223.1C210.7 512 199.1 501.3 199.1 488C199.1 474.7 210.7 464 223.1 464H552z"/>
</>],
['light',<>
	<path d="M311.4 416H263.4L219.7 459.7C208.3 471.1 191.8 474.2 177.6 469L141.7 504.1C137.2 509.5 131.1 512 124.7 512H24C10.75 512 0 501.3 0 488V483.3C0 476.1 2.529 470.8 7.029 466.3L91 382.4C85.82 368.2 88.92 351.7 100.3 340.3L143.1 296.6V248.6C143.1 233.2 151.4 218.7 164 209.6L441.8 10.2C451 3.567 462.1 0 473.5 0C487.9 0 501.7 5.726 511.9 15.92L544.1 48.08C554.3 58.27 559.1 72.1 559.1 86.51C559.1 97.88 556.4 108.1 549.8 118.2L350.4 395.1C341.3 408.6 326.8 416 311.4 416V416zM122.9 362.1C119.8 366.1 119.8 371.1 122.9 374.3L185.7 437.1C188.9 440.2 193.9 440.2 197 437.1L250.1 384H311.4C316.5 384 321.4 381.5 324.4 377.3L343.7 350.4L209.6 216.3L182.7 235.6C178.5 238.6 175.1 243.5 175.1 248.6V309.9L122.9 362.1zM362.6 324L523.8 99.54C526.5 95.75 527.1 91.19 527.1 86.51C527.1 80.58 525.6 74.9 521.4 70.71L489.3 38.55C485.1 34.35 479.4 32 473.5 32C468.8 32 464.2 33.47 460.5 36.19L235.1 197.4L362.6 324zM38.63 480H121.4L152.4 448.1L111 407.6L38.63 480zM560 480C568.8 480 576 487.2 576 496C576 504.8 568.8 512 560 512H240C231.2 512 224 504.8 224 496C224 487.2 231.2 480 240 480H560z"/>
</>],
['regular',<>
	<path d="M303.4 416H255.4L211.7 459.7C200.1 470.4 185.7 473.8 172.1 469.8L139.3 502.6C133.3 508.6 125.2 512 116.7 512H32C14.33 512 0 497.7 0 480V475.3C0 466.8 3.372 458.7 9.372 452.7L82.18 379.9C78.21 366.3 81.58 351 92.29 340.3L135.1 296.6V248.6C135.1 233.2 143.4 218.7 156 209.6L433.8 10.2C443 3.567 454.1 0 465.5 0C479.9 0 493.7 5.726 503.9 15.92L536.1 48.08C546.3 58.27 551.1 72.1 551.1 86.51C551.1 97.88 548.4 108.1 541.8 118.2L342.4 395.1C333.3 408.6 318.8 416 303.4 416L303.4 416zM131.9 368.6L183.4 420.1L235.5 368H303.4L319.5 345.5L206.5 232.5L183.1 248.6V316.5L131.9 368.6zM347.9 305.1L502.8 90.21C503.6 89.13 503.1 87.84 503.1 86.51C503.1 84.83 503.3 83.21 502.1 82.02L469.1 49.86C468.8 48.67 467.2 48 465.5 48C464.2 48 462.9 48.42 461.8 49.19L246 204.1L347.9 305.1zM65.94 464H110.1L134.7 439.3L112.7 417.3L65.94 464zM552 464C565.3 464 576 474.7 576 488C576 501.3 565.3 512 552 512H248C234.7 512 224 501.3 224 488C224 474.7 234.7 464 248 464H552z"/>
</>],
['solid',<>
	<path d="M127.1 248.3C127.1 233 135.2 218.7 147.5 209.6L420.6 8.398C428 2.943 436.1 0 446.2 0C457.6 0 468.5 4.539 476.6 12.62L531.4 67.38C539.5 75.46 543.1 86.42 543.1 97.84C543.1 107 541.1 115.1 535.6 123.4L334.4 396.5C325.3 408.8 310.1 416 295.7 416H223.1L198.6 441.4C186.1 453.9 165.9 453.9 153.4 441.4L102.6 390.6C90.13 378.1 90.13 357.9 102.6 345.4L127.1 320L127.1 248.3zM229 229L314.1 314.1L473.4 99.92L444.1 70.59L229 229zM140.7 473.9L109.7 504.1C105.2 509.5 99.05 512 92.69 512H24C10.75 512 0 501.3 0 488V483.3C0 476.1 2.529 470.8 7.029 466.3L70.06 403.3L140.7 473.9zM552 464C565.3 464 576 474.7 576 488C576 501.3 565.3 512 552 512H224C210.7 512 200 501.3 200 488C200 474.7 210.7 464 224 464H552z"/>
</>],
['thin',<>
	<path d="M295.4 416H231.4L195.7 451.7C180 467.3 154.7 467.3 139.1 451.7L92.29 404.9C76.66 389.3 76.66 363.1 92.29 348.3L127.1 312.6V248.6C127.1 233.2 135.4 218.7 148 209.6L425.8 10.2C435 3.567 446.1 0 457.5 0C471.9 0 485.7 5.726 495.9 15.92L528.1 48.08C538.3 58.27 543.1 72.1 543.1 86.51C543.1 97.88 540.4 108.1 533.8 118.2L334.4 395.1C325.3 408.6 310.8 416 295.4 416L295.4 416zM103.6 359.6C94.23 369 94.23 384.2 103.6 393.6L150.4 440.4C159.8 449.8 174.1 449.8 184.4 440.4L224.8 400H295.4C305.7 400 315.4 395 321.4 386.7L343.9 355.2L188.8 200.1L157.3 222.6C148.1 228.6 143.1 238.3 143.1 248.6V319.2L103.6 359.6zM353.4 342.1L520.8 108.9C525.5 102.4 527.1 94.54 527.1 86.51C527.1 76.34 523.1 66.59 516.8 59.4L484.6 27.23C477.4 20.04 467.7 16 457.5 16C449.5 16 441.6 18.52 435.1 23.2L201.9 190.6L353.4 342.1zM70.72 428.6L18.63 480.7C16.95 482.4 16 484.6 16 487C16 491.1 20.02 496 24.97 496H82.75C89.11 496 95.22 493.5 99.72 488.1L115.4 473.3C118.5 470.2 123.6 470.2 126.7 473.3C129.8 476.4 129.8 481.5 126.7 484.6L111 500.3C103.5 507.8 93.35 512 82.75 512H24.97C11.18 512 0 500.8 0 487C0 480.4 2.631 474.1 7.314 469.4L59.41 417.3C62.53 414.2 67.6 414.2 70.72 417.3C73.85 420.4 73.85 425.5 70.72 428.6L70.72 428.6zM568 496C572.4 496 576 499.6 576 504C576 508.4 572.4 512 568 512H232C227.6 512 224 508.4 224 504C224 499.6 227.6 496 232 496H568z"/>
</>],

]);

const HighlighterLine: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HighlighterLine.displayName = "HighlighterLine";

export default HighlighterLine;
