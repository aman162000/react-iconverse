
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3z"/><path className="fa-secondary" d="M507 208.7C484.3 198 458.8 192 432 192C334.8 192 256 270.8 256 368C256 403.7 266.6 436.9 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C103.6 15.73 186.5 24.72 236.5 75.67L256.4 96.64L275.4 75.67C325.4 24.72 407.3 15.73 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7z"/>
</>],
['light',<>
	<path d="M298.7 97.64L257 143.7L213.5 97.91C173.6 57.42 110 52.6 70.71 86.82L70.53 86.97C21.8 128.7 19.4 203.3 62.71 248.2L62.73 248.2L256.4 447.9C256.5 447.9 256.6 447.8 256.7 447.7L269.1 434.8C273.4 445.3 278.7 455.3 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C102.8 16.41 184.1 24.47 234.3 73.46C235 74.19 235.7 74.92 236.5 75.67L256.4 96.64L275.4 75.67C276.3 74.76 277.2 73.87 278.1 72.99C328.3 24.42 408.3 16.56 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C497.4 204.2 487.3 200.5 476.8 197.8C486.3 158.8 474.8 115.3 442.4 87C400.9 52.33 338.2 57.7 298.7 97.64V97.64zM499.3 324.7C505.6 330.9 505.6 341.1 499.3 347.3L427.3 419.3C421.1 425.6 410.9 425.6 404.7 419.3L364.7 379.3C358.4 373.1 358.4 362.9 364.7 356.7C370.9 350.4 381.1 350.4 387.3 356.7L416 385.4L476.7 324.7C482.9 318.4 493.1 318.4 499.3 324.7H499.3zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480z"/>
</>],
['regular',<>
	<path d="M310.3 108.6L257.3 167.2L201.1 109C167.2 73.77 113.2 71.03 81.21 98.88L80.94 99.12C39.31 134.8 37.21 198.7 74.21 237.1L74.24 237.1L256.4 424.1L263.2 417.9C268.1 434.7 275.5 450.4 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C98.77 19.96 171.8 23.55 222.2 62.93C227.2 66.83 231.1 71.08 236.5 75.67L256.4 96.64L275.4 75.67C280.1 70.91 285 66.51 290.2 62.5C340.4 23.53 412.5 20.11 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C492.7 201.1 477.3 197.1 461.2 194.4C469.4 160.9 459.7 123.5 432 99.16C397.6 70.61 344.6 74.22 310.3 108.6zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 223.1 432 223.1C511.5 223.1 576 288.5 576 368zM476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7H476.7z"/>
</>],
['solid',<>
	<path d="M256 368C256 403.7 266.6 436.9 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C103.6 15.73 186.5 24.72 236.5 75.67L256.4 96.64L275.4 75.67C325.4 24.72 407.3 15.73 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C484.3 198 458.8 192 432 192C334.8 192 256 270.8 256 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7H476.7z"/>
</>],
['thin',<>
	<path d="M287.1 86.64L256.7 120.2L224.1 86.79C180.1 41.06 106.8 34.17 60.2 74.75L60.11 74.83C4.288 122.7 1.603 207.9 51.22 259.4L244.1 459.1L245.2 459.4C250.6 465.2 261 465.9 268 459L276.4 450.3C279 455.2 281.8 460 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C103.6 15.73 186.5 24.72 236.5 75.67L256.4 96.64L275.4 75.67C325.4 24.72 407.3 15.73 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C502.2 206.5 497.2 204.4 492.1 202.5C503.4 157.7 490.2 107.5 452.8 74.84C404.1 34.04 331.8 41.21 287.1 86.64zM501.7 322.3C504.8 325.5 504.8 330.5 501.7 333.7L421.7 413.7C418.5 416.8 413.5 416.8 410.3 413.7L362.3 365.7C359.2 362.5 359.2 357.5 362.3 354.3C365.5 351.2 370.5 351.2 373.7 354.3L416 396.7L490.3 322.3C493.5 319.2 498.5 319.2 501.7 322.3H501.7zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM432 496C502.7 496 560 438.7 560 368C560 297.3 502.7 240 432 240C361.3 240 304 297.3 304 368C304 438.7 361.3 496 432 496z"/>
</>],

]);

const HeartCircleCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HeartCircleCheck.displayName = "HeartCircleCheck";

export default HeartCircleCheck;
