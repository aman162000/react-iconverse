
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 205.3V320h-128V272C384 263.1 376.9 256 368 256h-32C327.1 256 320 263.1 320 272V320H192V272C192 263.1 184.9 256 176 256h-32C135.1 256 128 263.1 128 272V320H0V205.3c0-8.5 3.375-16.62 9.375-22.62l45.25-45.25C60.63 131.4 68.75 128 77.25 128h357.5c8.5 0 16.62 3.375 22.62 9.375l45.25 45.25C508.6 188.6 512 196.8 512 205.3z"/><path className="fa-secondary" d="M384 320v48c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16V320H192v48C192 376.9 184.9 384 176 384h-32C135.1 384 128 376.9 128 368V320H0v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128H384zM176 80h160V128H384V80C384 53.5 362.5 32 336 32h-160C149.5 32 128 53.5 128 80V128h48V80z"/>
</>],
['light',<>
	<path d="M493.3 173.3l-26.51-26.51C454.7 134.7 438.5 128 421.5 128H384V80C384 53.53 362.5 32 336 32h-160C149.5 32 128 53.53 128 80V128H90.51C73.54 128 57.26 134.7 45.26 146.7L18.75 173.3C6.744 185.3 0 201.5 0 218.5V416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V218.5C512 201.5 505.3 185.3 493.3 173.3zM160 80C160 71.17 167.2 64 176 64h160C344.8 64 352 71.17 352 80V128H160V80zM41.37 195.9l26.51-26.51C73.93 163.3 81.96 160 90.51 160h330.1c8.549 0 16.58 3.328 22.63 9.371l26.51 26.51C476.7 201.9 480 209.1 480 218.5V304h-112v-32C368 263.2 360.8 256 352 256s-16 7.156-16 16v32h-160v-32C176 263.2 168.8 256 160 256S144 263.2 144 272v32H32V218.5C32 209.1 35.33 201.9 41.37 195.9zM448 448H64c-17.64 0-32-14.36-32-32v-80h112v32c0 8.844 7.156 16 15.1 16S176 376.8 176 368v-32h160v32c0 8.844 7.156 16 16 16s16-7.156 16-16v-32H480V416C480 433.6 465.6 448 448 448z"/>
</>],
['regular',<>
	<path d="M502.6 214.6l-77.25-77.25C419.4 131.4 411.2 128 402.7 128H384V88C384 57.13 358.9 32 328 32h-144C153.1 32 128 57.13 128 88V128H109.3C100.8 128 92.63 131.4 86.63 137.4L9.373 214.6C3.371 220.6 0 228.8 0 237.3V416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V237.3C512 228.8 508.6 220.6 502.6 214.6zM176 88c0-4.406 3.594-8 8-8h144c4.406 0 8 3.594 8 8V128h-160V88zM115.9 176h280.2L464 243.9V296h-88V279.1C376 266.7 365.3 256 352 256s-24 10.75-24 23.1V296h-144V279.1C184 266.7 173.3 256 160 256C146.7 256 136 266.7 136 279.1V296H48V243.9L115.9 176zM448 432H64c-8.837 0-16-7.163-16-16v-72h88v16C136 373.3 146.7 384 159.1 384C173.3 384 184 373.3 184 360V344h144v16C328 373.3 338.7 384 352 384s24-10.75 24-23.1V344h88V416C464 424.8 456.8 432 448 432z"/>
</>],
['solid',<>
	<path d="M502.6 182.6l-45.25-45.25C451.4 131.4 443.3 128 434.8 128H384V80C384 53.5 362.5 32 336 32h-160C149.5 32 128 53.5 128 80V128H77.25c-8.5 0-16.62 3.375-22.62 9.375L9.375 182.6C3.375 188.6 0 196.8 0 205.3V304h128v-32C128 263.1 135.1 256 144 256h32C184.9 256 192 263.1 192 272v32h128v-32C320 263.1 327.1 256 336 256h32C376.9 256 384 263.1 384 272v32h128V205.3C512 196.8 508.6 188.6 502.6 182.6zM336 128h-160V80h160V128zM384 368c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-32H192v32C192 376.9 184.9 384 176 384h-32C135.1 384 128 376.9 128 368v-32H0V448c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-112h-128V368z"/>
</>],
['thin',<>
	<path d="M502.6 214.6l-77.25-77.25C419.4 131.4 411.2 128 402.7 128H384V72C384 49.94 366.1 32 344 32h-176C145.9 32 128 49.94 128 72V128H109.3C100.8 128 92.63 131.4 86.63 137.4L9.373 214.6C3.371 220.6 0 228.8 0 237.3V416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V237.3C512 228.8 508.6 220.6 502.6 214.6zM144 72c0-13.23 10.78-24 24-24h176c13.22 0 24 10.77 24 24V128h-224V72zM496 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48v-88h136v48c0 4.422 3.594 8 7.1 8S168 380.4 168 376v-48h176v48c0 4.422 3.594 8 8 8s8-3.578 8-8v-48h136V416zM496 312h-136v-48C360 259.6 356.4 256 352 256s-8 3.578-8 8v48h-176v-48C168 259.6 164.4 256 160 256S152 259.6 152 264v48H16V237.3c0-4.273 1.664-8.291 4.688-11.31l77.25-77.25C100.1 145.7 104.1 144 109.3 144h293.5c4.273 0 8.291 1.664 11.31 4.686l77.26 77.26C494.3 228.1 496 232.1 496 237.3V312z"/>
</>],

]);

const Toolbox: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Toolbox.displayName = "Toolbox";

export default Toolbox;