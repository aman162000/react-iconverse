
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32 448H352C369.7 448 384 462.3 384 480C384 497.7 369.7 512 352 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448zM32 0H352C369.7 0 384 14.33 384 32C384 49.67 369.7 64 352 64H288V74.98C288 100.4 277.9 124.9 259.9 142.9L192 210.7L124.1 142.9C106.1 124.9 96 100.4 96 74.98V64H32C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0V0z"/><path className="fa-secondary" d="M78.86 323.9L146.7 256L78.86 188.1C48.86 158.1 32 117.4 32 74.98V64H96V74.98C96 100.4 106.1 124.9 124.1 142.9L192 210.7L259.9 142.9C277.9 124.9 288 100.4 288 74.98V64H352V74.98C352 117.4 335.1 158.1 305.1 188.1L237.3 256L305.1 323.9C335.1 353.9 352 394.6 352 437V448H288V437C288 411.6 277.9 387.1 259.9 369.1L192 301.3L124.1 369.1C106.1 387.1 96 411.6 96 437V448H32V437C32 394.6 48.86 353.9 78.86 323.9V323.9zM101.5 346.5L78.86 323.9z"/>
</>],
['light',<>
	<path d="M205 201.3C202 205.5 197.2 208 192 208C186.8 208 181.1 205.5 178.1 201.3L98.98 89.3C95.5 84.42 95.03 78.01 97.77 72.68C100.5 67.35 106 64 111.1 64H272C277.1 64 283.5 67.35 286.2 72.68C288.1 78.01 288.5 84.42 285 89.3L205 201.3zM143.1 96L192 164.5L240.9 96H143.1zM16 480H32V435.3C32 403.7 42.41 372.1 61.61 347.9L131.9 256L61.61 164.1C42.41 139 32 108.3 32 76.67V32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H368C376.8 0 384 7.164 384 16C384 24.84 376.8 32 368 32H352V76.67C352 108.3 341.6 139 322.4 164.1L252.1 256L322.4 347.9C341.6 372.1 352 403.7 352 435.3V480H368C376.8 480 384 487.2 384 496C384 504.8 376.8 512 368 512H16C7.164 512 0 504.8 0 496C0 487.2 7.164 480 16 480zM64 480H320V435.3C320 410.7 311.9 386.8 296.1 367.3L219.3 265.7C214.9 259.1 214.9 252 219.3 246.3L296.1 144.7C311.9 125.2 320 101.3 320 76.67V32H64V76.67C64 101.3 72.09 125.2 87.03 144.7L164.7 246.3C169.1 252 169.1 259.1 164.7 265.7L87.03 367.3C72.09 386.8 64 410.7 64 435.3V480z"/>
</>],
['regular',<>
	<path d="M24 464H32V445C32 404.7 48.01 366 76.52 337.5L158.1 256L76.52 174.5C48.01 145.1 32 107.3 32 66.98V48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H360C373.3 0 384 10.75 384 24C384 37.25 373.3 48 360 48H352V66.98C352 107.3 335.1 145.1 307.5 174.5L225.9 256L307.5 337.5C335.1 366 352 404.7 352 445V464H360C373.3 464 384 474.7 384 488C384 501.3 373.3 512 360 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464zM273.5 371.5L192 289.9L110.5 371.5C90.96 390.1 80 417.4 80 445V464H304V445C304 417.4 293 390.1 273.5 371.5z"/>
</>],
['solid',<>
	<path d="M352 0C369.7 0 384 14.33 384 32C384 49.67 369.7 64 352 64V74.98C352 117.4 335.1 158.1 305.1 188.1L237.3 256L305.1 323.9C335.1 353.9 352 394.6 352 437V448C369.7 448 384 462.3 384 480C384 497.7 369.7 512 352 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V437C32 394.6 48.86 353.9 78.86 323.9L146.7 256L78.86 188.1C48.86 158.1 32 117.4 32 74.98V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H352zM259.9 369.1L192 301.3L124.1 369.1C106.1 387.1 96 411.6 96 437V448H288V437C288 411.6 277.9 387.1 259.9 369.1V369.1z"/>
</>],
['thin',<>
	<path d="M198.4 228.8C196.9 230.8 194.5 232 192 232C189.5 232 187.1 230.8 185.6 228.8L102.4 117.9C93.05 105.4 88 90.25 88 74.67V56C88 51.58 91.58 48 96 48H288C292.4 48 296 51.58 296 56V74.67C296 90.25 290.9 105.4 281.6 117.9L198.4 228.8zM115.2 108.3L192 210.7L268.8 108.3C276.1 98.57 280 86.78 280 74.67V64H104V74.67C104 86.78 107.9 98.57 115.2 108.3zM0 8C0 3.582 3.582 0 8 0H376C380.4 0 384 3.582 384 8C384 12.42 380.4 16 376 16H352V76.67C352 106.5 342.2 135.6 324 159.3L250.1 256L324 352.7C342.2 376.4 352 405.5 352 435.3V496H376C380.4 496 384 499.6 384 504C384 508.4 380.4 512 376 512H8C3.582 512 0 508.4 0 504C0 499.6 3.582 496 8 496H32V435.3C32 405.5 41.83 376.4 59.97 352.7L133.9 256L59.97 159.3C41.83 135.6 32 106.5 32 76.67V16H8C3.582 16 0 12.42 0 8V8zM48 76.67C48 103 56.67 128.6 72.68 149.6L150.4 251.1C152.5 254 152.5 257.1 150.4 260.9L72.68 362.4C56.67 383.4 48 408.1 48 435.3V496H336V435.3C336 408.1 327.3 383.4 311.3 362.4L233.6 260.9C231.5 257.1 231.5 254 233.6 251.1L311.3 149.6C327.3 128.6 336 103 336 76.67V16H48V76.67z"/>
</>],

]);

const HourglassStart: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HourglassStart.displayName = "HourglassStart";

export default HourglassStart;