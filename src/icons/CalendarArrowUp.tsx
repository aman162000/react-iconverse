
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V192H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM248 424C248 437.3 237.3 448 224 448C210.7 448 200 437.3 200 424V321.9L160.1 360.1C151.6 370.3 136.4 370.3 127 360.1C117.7 351.6 117.7 336.4 127 327L207 247C216.4 237.7 231.6 237.7 240.1 247L320.1 327C330.3 336.4 330.3 351.6 320.1 360.1C311.6 370.3 296.4 370.3 287 360.1L248 321.9V424z"/><path className="fa-secondary" d="M448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464zM287 360.1C296.4 370.3 311.6 370.3 320.1 360.1C330.3 351.6 330.3 336.4 320.1 327L240.1 247C231.6 237.7 216.4 237.7 207 247L127 327C117.7 336.4 117.7 351.6 127 360.1C136.4 370.3 151.6 370.3 160.1 360.1L200 321.9V424C200 437.3 210.7 448 224 448C237.3 448 248 437.3 248 424V321.9L287 360.1z"/>
</>],
['light',<>
	<path d="M208 294.6L155.3 347.3C149.1 353.6 138.9 353.6 132.7 347.3C126.4 341.1 126.4 330.9 132.7 324.7L212.7 244.7C218.9 238.4 229.1 238.4 235.3 244.7L315.3 324.7C321.6 330.9 321.6 341.1 315.3 347.3C309.1 353.6 298.9 353.6 292.7 347.3L240 294.6V416C240 424.8 232.8 432 223.1 432C215.2 432 207.1 424.8 207.1 416L208 294.6zM128 64H320V16C320 7.164 327.2 0 336 0C344.8 0 352 7.164 352 16V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H96V16C96 7.164 103.2 0 112 0C120.8 0 128 7.164 128 16V64zM32 448C32 465.7 46.33 480 64 480H384C401.7 480 416 465.7 416 448V192H32V448zM32 128V160H416V128C416 110.3 401.7 96 384 96H64C46.33 96 32 110.3 32 128z"/>
</>],
['regular',<>
	<path d="M200 305.9L160.1 344.1C151.6 354.3 136.4 354.3 127 344.1C117.7 335.6 117.7 320.4 127 311L207 231C216.4 221.7 231.6 221.7 240.1 231L320.1 311C330.3 320.4 330.3 335.6 320.1 344.1C311.6 354.3 296.4 354.3 287 344.1L248 305.9V408C248 421.3 237.3 432 224 432C210.7 432 200 421.3 200 408V305.9zM128 0C141.3 0 152 10.75 152 24V64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0zM400 192H48V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192z"/>
</>],
['solid',<>
	<path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM248 321.9L287 360.1C296.4 370.3 311.6 370.3 320.1 360.1C330.3 351.6 330.3 336.4 320.1 327L240.1 247C231.6 237.7 216.4 237.7 207 247L127 327C117.7 336.4 117.7 351.6 127 360.1C136.4 370.3 151.6 370.3 160.1 360.1L200 321.9V424C200 437.3 210.7 448 224 448C237.3 448 248 437.3 248 424V321.9z"/>
</>],
['thin',<>
	<path d="M216 267.3L141.7 341.7C138.5 344.8 133.5 344.8 130.3 341.7C127.2 338.5 127.2 333.5 130.3 330.3L218.3 242.3C221.5 239.2 226.5 239.2 229.7 242.3L317.7 330.3C320.8 333.5 320.8 338.5 317.7 341.7C314.5 344.8 309.5 344.8 306.3 341.7L232 267.3V424C232 428.4 228.4 432 224 432C219.6 432 216 428.4 216 424L216 267.3zM128 64H320V8C320 3.582 323.6 0 328 0C332.4 0 336 3.582 336 8V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H112V8C112 3.582 115.6 0 120 0C124.4 0 128 3.582 128 8V64zM16 448C16 474.5 37.49 496 64 496H384C410.5 496 432 474.5 432 448V192H16V448zM64 80C37.49 80 16 101.5 16 128V176H432V128C432 101.5 410.5 80 384 80H336V120C336 124.4 332.4 128 328 128C323.6 128 320 124.4 320 120V80H128V120C128 124.4 124.4 128 120 128C115.6 128 112 124.4 112 120V80H64z"/>
</>],

]);

const CalendarArrowUp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CalendarArrowUp.displayName = "CalendarArrowUp";

export default CalendarArrowUp;
