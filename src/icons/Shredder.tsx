
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M448 192H64C28.65 192 0 220.7 0 256v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V256C512 220.7 483.3 192 448 192zM432 296c-13.25 0-24-10.75-24-24c0-13.27 10.75-24 24-24s24 10.73 24 24C456 285.3 445.3 296 432 296z"/><path className="fa-secondary" d="M424 416v72C424 501.3 434.7 512 448 512s24-10.75 24-23.1V416H424zM40 488C40 501.3 50.75 512 63.1 512S88 501.3 88 488V416h-48V488zM232 488C232 501.3 242.7 512 256 512s24-10.75 24-23.1V416h-48V488zM136 488C136 501.3 146.7 512 159.1 512S184 501.3 184 488V416h-48V488zM328 488C328 501.3 338.7 512 352 512s24-10.75 24-23.1V416h-48V488zM448 192V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v160h64V64h229.5L384 90.51V192H448z"/>
</>],
['light',<>
	<path d="M208 352C199.2 352 192 359.2 192 368v128C192 504.8 199.2 512 208 512S224 504.8 224 496v-128C224 359.2 216.8 352 208 352zM304 352c-8.844 0-16 7.156-16 16v128c0 8.844 7.156 16 16 16s16-7.156 16-16v-128C320 359.2 312.8 352 304 352zM112 352C103.2 352 96 359.2 96 368v128C96 504.8 103.2 512 112 512S128 504.8 128 496v-128C128 359.2 120.8 352 112 352zM448 192V70.63C448 62.14 444.6 54 438.6 48L400 9.375C393.1 3.371 385.9 0 377.4 0H128C92.65 0 64 28.65 64 64v128C28.7 192 0 220.7 0 256v112C0 376.8 7.156 384 16 384S32 376.8 32 368V256c0-17.67 14.33-32 32-32h384c17.67 0 32 14.33 32 32v112c0 8.844 7.156 16 16 16s16-7.156 16-16V256C512 220.7 483.3 192 448 192zM416 192H96V64c0-17.67 14.33-32 32-32h249.4L416 70.63V192zM400 352c-8.844 0-16 7.156-16 16v128c0 8.844 7.156 16 16 16s16-7.156 16-16v-128C416 359.2 408.8 352 400 352zM432 248c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C456 258.7 445.3 248 432 248z"/>
</>],
['regular',<>
	<path d="M111.1 48h254.1L400 81.94V160H448V81.94c0-12.73-5.057-24.94-14.06-33.94l-33.94-33.94C391 5.057 378.8 0 366.1 0H111.1C85.49 0 64.01 21.48 64 47.98l.002 82.28c-.002 0 .002 0 0 0L64 160h48.01L111.1 48zM440 192H72C32.3 192 0 224.3 0 264v96C0 373.3 10.75 384 24 384h16v104C40 501.3 50.75 512 63.1 512S88 501.3 88 488V384h48v104C136 501.3 146.7 512 159.1 512S184 501.3 184 488V384h48v104C232 501.3 242.8 512 256 512s24-10.75 24-23.1V384h48v104C328 501.3 338.8 512 352 512s24-10.75 24-23.1V384h48v104C424 501.3 434.8 512 448 512s24-10.75 24-23.1V384h16c13.25 0 24-10.75 24-24v-96C512 224.3 479.7 192 440 192zM464 336h-416V264c0-13.23 10.77-24 24-24h368c13.23 0 24 10.77 24 24V336z"/>
</>],
['solid',<>
	<path d="M136 488C136 501.3 146.7 512 159.1 512S184 501.3 184 488V416h-48V488zM40 488C40 501.3 50.75 512 63.1 512S88 501.3 88 488V416h-48V488zM232 488C232 501.3 242.7 512 256 512s24-10.75 24-23.1V416h-48V488zM448 192V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v160C28.65 192 0 220.7 0 256v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V256C512 220.7 483.3 192 448 192zM384 192H128V64h229.5L384 90.51V192zM432 296c-13.25 0-24-10.75-24-24c0-13.27 10.75-24 24-24s24 10.73 24 24C456 285.3 445.3 296 432 296zM328 488C328 501.3 338.7 512 352 512s24-10.75 24-23.1V416h-48V488zM424 488C424 501.3 434.7 512 448 512s24-10.75 24-23.1V416h-48V488z"/>
</>],
['thin',<>
	<path d="M88 160C92.41 160 96 156.4 96 152v-112C96 26.77 106.8 16 120 16h226.8c6.312 0 12.5 2.562 16.97 7.031l45.25 45.25C413.4 72.75 416 78.94 416 85.25V152C416 156.4 419.6 160 424 160s8-3.578 8-8V85.25c0-10.69-4.156-20.72-11.72-28.28l-45.25-45.25C367.6 4.266 357.3 0 346.8 0H120C97.94 0 80 17.94 80 40v112C80 156.4 83.59 160 88 160zM432 256C423.2 256 416 263.2 416 272S423.2 288 432 288S448 280.8 448 272S440.8 256 432 256zM448 192H64C28.65 192 0 220.7 0 256v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V256C512 220.7 483.3 192 448 192zM496 352c0 8.822-7.176 16-16 16H32c-8.824 0-16-7.178-16-16V256c0-26.47 21.53-48 48-48h384c26.47 0 48 21.53 48 48V352zM64 408c-4.422 0-8 3.594-8 8v88c0 4.406 3.578 8 7.1 8S72 508.4 72 504V416C72 411.6 68.42 408 64 408zM160 408c-4.422 0-8 3.594-8 8v88c0 4.406 3.578 8 7.1 8S168 508.4 168 504V416C168 411.6 164.4 408 160 408zM256 408c-4.422 0-8 3.594-8 8v88C248 508.4 251.6 512 256 512s8-3.594 8-8V416C264 411.6 260.4 408 256 408zM352 408c-4.422 0-8 3.594-8 8v88c0 4.406 3.578 8 8 8s8-3.594 8-8V416C360 411.6 356.4 408 352 408zM448 408c-4.422 0-8 3.594-8 8v88c0 4.406 3.578 8 8 8s8-3.594 8-8V416C456 411.6 452.4 408 448 408z"/>
</>],

]);

const Shredder: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Shredder.displayName = "Shredder";

export default Shredder;
