
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 315L512 352c0 17.67-14.33 32-31.1 32h-416c-17.67 0-32-14.33-32-32l0-207.8c0-28.5 18.88-53.63 46.38-61.5L256 32V16c0-8.801 7.199-16 16-16l31.1 0c8.801 0 16 7.199 16 16V96h-48c-8.801 0-16 7.199-16 16c0 8.797 7.199 16 16 16h48v32h-48c-8.801 0-16 7.199-16 16c0 8.797 7.199 16 16 16h48L439.3 221.9C482 232.6 512 270.9 512 315z"/><path className="fa-secondary" d="M272 128h48V96h-48c-8.836 0-16 7.164-16 16S263.2 128 272 128zM552 416c-13.2 0-24 10.8-24 23.1C528 453.3 517.3 464 504 464h-71.1L432 384H384l0 80h-240L144 384H96l0 80H32c-17.6 0-31.1 14.4-31.1 31.1C.0001 510 13.18 512 16 512h496c35.2 0 64-28.8 64-64L576 439.1C576 426.8 565.2 416 552 416zM272 192h48V160h-48c-8.836 0-16 7.164-16 16S263.2 192 272 192z"/>
</>],
['light',<>
	<path d="M560 416c-8.799 0-16 7.199-16 16c0 26.51-21.49 48-48 48H416v-16c0-8.836-7.164-16-16-16s-15.1 7.164-15.1 16L384 480H128v-16C128 455.2 120.8 448 112 448s-15.1 7.164-15.1 16L96 480H16c-8.799 0-15.1 7.199-15.1 15.1S7.201 512 16 512H496c44.18 0 80-35.82 80-80C576 423.2 568.8 416 560 416zM96 416H448c35.2 0 64-28.8 64-64l.0001-37c0-44.02-30.01-82.42-72.72-93.12L320 192V16c0-8.801-7.199-16-16-16C295.2 0 288 7.199 288 16V32H281.9C222.5 32 163.8 43.33 108.7 65.37L62.17 83.98C43.95 91.27 32 108.9 32 128.5L32 352C32 387.3 60.75 416 96 416zM64 128.6c0-6.535 3.977-12.41 10.04-14.85l40.4-16.2C169.6 75.38 228.5 64 288 64v64H240C231.2 128 224 135.2 224 143.1S231.2 160 240 160H288v32H240C231.2 192 224 199.2 224 207.1S231.2 224 240 224h76.13l115.5 28.88C460.1 259.1 480 285.5 480 314.8V352c0 17.6-14.4 32-32 32H96c-17.6 0-32-14.4-32-32V128.6z"/>
</>],
['regular',<>
	<path d="M552 416c-13.2 0-24 10.8-24 23.1C528 453.3 517.3 464 504 464h-71.1l0-48H448c35.2 0 64-28.8 64-64V299c0-44.12-30-82.38-72.75-93.12L352 184v-160C352 10.8 341.2 0 328 0S304 10.8 304 23.1V32H204.2c-8 0-16.12 1.625-23.75 4.625L52.12 88C40 92.75 32 104.6 32 117.8L32 352c0 35.25 28.75 64 64 64v48H23.1C10.8 464 0 474.8 0 487.1S10.8 512 23.1 512h488c35.2 0 64-28.8 64-64L576 439.1C576 426.8 565.2 416 552 416zM80 352V128.5l118.4-47.38C200.2 80.25 202.2 80 204.2 80H304v47.1L240 128C231.2 128 224 135.2 224 143.1C224 152.8 231.2 160 240 160h64v32h-64C231.2 192 224 199.2 224 207.1C224 216.8 231.2 224 240 224h74.13l113.5 28.38C449 257.8 464 276.9 464 299V352c0 8.8-7.2 16-16 16H96C87.2 368 80 360.8 80 352zM144 416h240l0 48h-240L144 416z"/>
</>],
['solid',<>
	<path d="M64 384h416C497.7 384 512 369.7 512 352l.0001-37c0-44.13-29.97-82.37-72.72-93.12L320 192h-48c-8.801 0-16-7.203-16-16c0-8.801 7.199-16 16-16h48V128h-48c-8.801 0-16-7.203-16-16c0-8.801 7.199-16 16-16h48V16c0-8.801-7.199-16-16-16l-31.1 0c-8.801 0-16 7.199-16 16V32L78.38 82.75c-27.5 7.875-46.38 33-46.38 61.5L32 352C32 369.7 46.33 384 64 384zM552 416c-13.2 0-24 10.8-24 23.1C528 453.3 517.3 464 504 464h-71.1l0-48h-48l0 48h-240L144 416H96v48H32c-17.6 0-31.1 14.4-31.1 31.1C.0001 510 13.18 512 16 512h496c35.2 0 64-28.8 64-64L576 439.1C576 426.8 565.2 416 552 416z"/>
</>],
['thin',<>
	<path d="M72 383.1h400c22.06 0 40-17.94 40-40V301.9c0-45.91-31.41-85.78-76.5-97.03L320 177.7V7.1c0-4.406-3.578-8-8-8s-8 3.594-8 8v17.75L82.64 80.94C52.83 89.41 32 116.8 32 147.6v196.4C32 366.1 49.94 383.1 72 383.1zM48 147.6c0-23.62 16.05-44.72 38.77-51.19L304 42.25v69.75H264c-4.422 0-8 3.594-8 8s3.578 8 8 8l40 .0001v47.1H264c-4.422 0-8 3.594-8 8s3.578 8 8 8h47.04l120.7 28.38C469.6 229.8 496 263.3 496 301.9v42.13c0 13.22-10.77 24-24 24H72c-13.23 0-24-10.78-24-24V147.6zM568 415.1c-4.422 0-8 3.594-8 8v16c0 30.88-25.12 56-56 56h-80v-72c0-4.406-3.578-8-8-8s-8 3.594-8 8v72h-272v-72c0-4.406-3.578-8-8-8s-8 3.594-8 8v72h-112c-4.422 0-8 3.594-8 8s3.578 8 8 8h496c39.7 0 72-32.31 72-71.1v-16C576 419.6 572.4 415.1 568 415.1z"/>
</>],

]);

const IceSkate: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

IceSkate.displayName = "IceSkate";

export default IceSkate;
