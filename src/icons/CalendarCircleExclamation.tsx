
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 416C418.7 416 408 426.7 408 440C408 453.3 418.7 464 432 464C445.3 464 456 453.3 456 440C456 426.7 445.3 416 432 416zM447.1 288C447.1 279.2 440.8 272 431.1 272C423.2 272 415.1 279.2 415.1 288V368C415.1 376.8 423.2 384 431.1 384C440.8 384 447.1 376.8 447.1 368V288z"/><path className="fa-secondary" d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM416 192.7C326.3 200.8 256 276.2 256 368C256 427.5 285.6 480.1 330.8 512H48C21.49 512 0 490.5 0 464V192H416V192.7z"/>
</>],
['light',<>
	<path d="M112 0C120.8 0 128 7.164 128 16V64H320V16C320 7.164 327.2 0 336 0C344.8 0 352 7.164 352 16V64H384C419.3 64 448 92.65 448 128V192H32V448C32 465.7 46.33 480 64 480H296.2C306.3 492.1 317.9 502.9 330.8 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H96V16C96 7.164 103.2 0 112 0zM384 96H64C46.33 96 32 110.3 32 128V160H416V128C416 110.3 401.7 96 384 96zM448 432C448 440.8 440.8 448 432 448C423.2 448 416 440.8 416 432C416 423.2 423.2 416 432 416C440.8 416 448 423.2 448 432zM447.1 384C447.1 392.8 440.8 400 431.1 400C423.2 400 415.1 392.8 415.1 384V304C415.1 295.2 423.2 288 431.1 288C440.8 288 447.1 295.2 447.1 304V384zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480z"/>
</>],
['regular',<>
	<path d="M151.1 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V192H47.1V448C47.1 456.8 55.16 464 63.1 464H284.5C296.7 482.8 312.5 499.1 330.8 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24L151.1 64zM576 368C576 447.5 511.5 512 432 512C352.5 512 287.1 447.5 287.1 368C287.1 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 416C418.7 416 408 426.7 408 440C408 453.3 418.7 464 432 464C445.3 464 456 453.3 456 440C456 426.7 445.3 416 432 416zM447.1 288C447.1 279.2 440.8 272 431.1 272C423.2 272 415.1 279.2 415.1 288V368C415.1 376.8 423.2 384 431.1 384C440.8 384 447.1 376.8 447.1 368V288z"/>
</>],
['solid',<>
	<path d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM416 192.7C326.3 200.8 256 276.2 256 368C256 427.5 285.6 480.1 330.8 512H48C21.49 512 0 490.5 0 464V192H416V192.7zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 416C418.7 416 408 426.7 408 440C408 453.3 418.7 464 432 464C445.3 464 456 453.3 456 440C456 426.7 445.3 416 432 416zM447.1 288C447.1 279.2 440.8 272 431.1 272C423.2 272 415.1 279.2 415.1 288V368C415.1 376.8 423.2 384 431.1 384C440.8 384 447.1 376.8 447.1 368V288z"/>
</>],
['thin',<>
	<path d="M120 0C124.4 0 128 3.582 128 8V64H320V8C320 3.582 323.6 0 328 0C332.4 0 336 3.582 336 8V64H384C419.3 64 448 92.65 448 128V192H16V448C16 474.5 37.49 496 64 496H311.2C317.3 501.8 323.9 507.1 330.8 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H112V8C112 3.582 115.6 0 120 0zM112 120V80H64C37.49 80 16 101.5 16 128V176H432V128C432 101.5 410.5 80 384 80H336V120C336 124.4 332.4 128 328 128C323.6 128 320 124.4 320 120V80H128V120C128 124.4 124.4 128 120 128C115.6 128 112 124.4 112 120zM448 432C448 440.8 440.8 448 432 448C423.2 448 416 440.8 416 432C416 423.2 423.2 416 432 416C440.8 416 448 423.2 448 432zM439.1 384C439.1 388.4 436.4 392 431.1 392C427.6 392 423.1 388.4 423.1 384V288C423.1 283.6 427.6 280 431.1 280C436.4 280 439.1 283.6 439.1 288V384zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM432 496C502.7 496 560 438.7 560 368C560 297.3 502.7 240 432 240C361.3 240 304 297.3 304 368C304 438.7 361.3 496 432 496z"/>
</>],

]);

const CalendarCircleExclamation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CalendarCircleExclamation.displayName = "CalendarCircleExclamation";

export default CalendarCircleExclamation;