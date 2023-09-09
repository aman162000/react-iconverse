
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32 480C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480H32zM32 224C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32z"/><path className="fa-secondary" d="M32 352C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352H32zM32 96C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32z"/>
</>],
['light',<>
	<path d="M432 48C440.8 48 448 55.16 448 64C448 72.84 440.8 80 432 80H16C7.164 80 0 72.84 0 64C0 55.16 7.164 48 16 48H432zM0 192C0 183.2 7.164 176 16 176H432C440.8 176 448 183.2 448 192C448 200.8 440.8 208 432 208H16C7.164 208 0 200.8 0 192zM432 304C440.8 304 448 311.2 448 320C448 328.8 440.8 336 432 336H16C7.164 336 0 328.8 0 320C0 311.2 7.164 304 16 304H432zM432 432C440.8 432 448 439.2 448 448C448 456.8 440.8 464 432 464H16C7.164 464 0 456.8 0 448C0 439.2 7.164 432 16 432H432z"/>
</>],
['regular',<>
	<path d="M424 40C437.3 40 448 50.75 448 64C448 77.25 437.3 88 424 88H24C10.75 88 0 77.25 0 64C0 50.75 10.75 40 24 40H424zM424 168C437.3 168 448 178.7 448 192C448 205.3 437.3 216 424 216H24C10.75 216 0 205.3 0 192C0 178.7 10.75 168 24 168H424zM0 320C0 306.7 10.75 296 24 296H424C437.3 296 448 306.7 448 320C448 333.3 437.3 344 424 344H24C10.75 344 0 333.3 0 320zM424 424C437.3 424 448 434.7 448 448C448 461.3 437.3 472 424 472H24C10.75 472 0 461.3 0 448C0 434.7 10.75 424 24 424H424z"/>
</>],
['solid',<>
	<path d="M416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96zM416 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352zM0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192zM416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480z"/>
</>],
['thin',<>
	<path d="M440 56C444.4 56 448 59.58 448 64C448 68.42 444.4 72 440 72H8C3.582 72 0 68.42 0 64C0 59.58 3.582 56 8 56H440zM0 192C0 187.6 3.582 184 8 184H440C444.4 184 448 187.6 448 192C448 196.4 444.4 200 440 200H8C3.582 200 0 196.4 0 192zM440 312C444.4 312 448 315.6 448 320C448 324.4 444.4 328 440 328H8C3.582 328 0 324.4 0 320C0 315.6 3.582 312 8 312H440zM440 440C444.4 440 448 443.6 448 448C448 452.4 444.4 456 440 456H8C3.582 456 0 452.4 0 448C0 443.6 3.582 440 8 440H440z"/>
</>],

]);

const AlignJustify: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

AlignJustify.displayName = "AlignJustify";

export default AlignJustify;
