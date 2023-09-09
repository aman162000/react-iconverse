
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M128 192C110.3 192 96 206.3 96 223.1V288C96 305.7 110.3 320 127.1 320S160 305.7 160 288V223.1C160 206.3 145.7 192 128 192zM320 0C302.3 0 288 14.33 288 31.1V480C288 497.7 302.3 512 319.1 512S352 497.7 352 480V31.1C352 14.33 337.7 0 320 0zM512 64c-17.67 0-32 14.33-32 31.1V416C480 433.7 494.3 448 511.1 448C529.7 448 544 433.7 544 416V95.1C544 78.33 529.7 64 512 64z"/><path className="fa-secondary" d="M224 96C206.3 96 192 110.3 192 127.1v256C192 401.7 206.3 416 223.1 416S256 401.7 256 384V127.1C256 110.3 241.7 96 224 96zM32 224C14.33 224 0 238.3 0 255.1S14.33 288 31.1 288S64 273.7 64 256S49.67 224 32 224zM608 224c-17.67 0-32 14.33-32 31.1S590.3 288 608 288s32-14.33 32-31.1S625.7 224 608 224zM416 128C398.3 128 384 142.3 384 159.1v192C384 369.7 398.3 384 415.1 384S448 369.7 448 352V159.1C448 142.3 433.7 128 416 128z"/>
</>],
['light',<>
	<path d="M224 96C215.2 96 208 103.2 208 111.1v288C208 408.8 215.2 416 223.1 416C232.8 416 240 408.8 240 400V111.1C240 103.2 232.8 96 224 96zM128 192C119.2 192 112 199.2 112 207.1V304C112 312.8 119.2 320 127.1 320S144 312.8 144 304V207.1C144 199.2 136.8 192 128 192zM32 224C23.2 224 16 231.2 16 239.1V272C16 280.8 23.2 288 31.1 288S48 280.8 48 272V239.1C48 231.2 40.8 224 32 224zM416 128C407.2 128 400 135.2 400 143.1v224C400 376.8 407.2 384 415.1 384S432 376.8 432 368V143.1C432 135.2 424.8 128 416 128zM608 224c-8.8 0-16 7.2-16 15.1V272C592 280.8 599.2 288 608 288s16-7.2 16-15.1V239.1C624 231.2 616.8 224 608 224zM512 64c-8.8 0-16 7.2-16 15.1V432C496 440.8 503.2 448 511.1 448C520.8 448 528 440.8 528 432V79.1C528 71.2 520.8 64 512 64zM320 0C311.2 0 304 7.2 304 15.1V496C304 504.8 311.2 512 319.1 512S336 504.8 336 496V15.1C336 7.2 328.8 0 320 0z"/>
</>],
['regular',<>
	<path d="M320 0C306.7 0 296 10.75 296 23.1V488C296 501.3 306.7 512 319.1 512S344 501.3 344 488V23.1C344 10.75 333.3 0 320 0zM224 96C210.7 96 200 106.7 200 119.1v272C200 405.3 210.7 416 223.1 416S248 405.3 248 392V119.1C248 106.7 237.3 96 224 96zM416 128C402.7 128 392 138.7 392 151.1v208C392 373.3 402.7 384 415.1 384S440 373.3 440 360V151.1C440 138.7 429.3 128 416 128zM512 64c-13.25 0-24 10.75-24 23.1V424C488 437.3 498.7 448 511.1 448C525.3 448 536 437.3 536 424V87.1C536 74.75 525.3 64 512 64zM128 192C114.7 192 104 202.7 104 215.1V296C104 309.3 114.7 320 127.1 320S152 309.3 152 296V215.1C152 202.7 141.3 192 128 192zM32 224C18.75 224 8 234.7 8 247.1V264C8 277.3 18.75 288 31.1 288S56 277.3 56 264V247.1C56 234.7 45.25 224 32 224zM608 224c-13.25 0-24 10.75-24 23.1V264C584 277.3 594.7 288 608 288s24-10.75 24-23.1V247.1C632 234.7 621.3 224 608 224z"/>
</>],
['solid',<>
	<path d="M224 96C206.3 96 192 110.3 192 127.1v256C192 401.7 206.3 416 223.1 416S256 401.7 256 384V127.1C256 110.3 241.7 96 224 96zM32 224C14.33 224 0 238.3 0 255.1S14.33 288 31.1 288S64 273.7 64 256S49.67 224 32 224zM320 0C302.3 0 288 14.33 288 31.1V480C288 497.7 302.3 512 319.1 512S352 497.7 352 480V31.1C352 14.33 337.7 0 320 0zM128 192C110.3 192 96 206.3 96 223.1V288C96 305.7 110.3 320 127.1 320S160 305.7 160 288V223.1C160 206.3 145.7 192 128 192zM608 224c-17.67 0-32 14.33-32 31.1S590.3 288 608 288s32-14.33 32-31.1S625.7 224 608 224zM416 128C398.3 128 384 142.3 384 159.1v192C384 369.7 398.3 384 415.1 384S448 369.7 448 352V159.1C448 142.3 433.7 128 416 128zM512 64c-17.67 0-32 14.33-32 31.1V416C480 433.7 494.3 448 511.1 448C529.7 448 544 433.7 544 416V95.1C544 78.33 529.7 64 512 64z"/>
</>],
['thin',<>
	<path d="M224 96C219.6 96 216 99.59 216 104v304c0 4.406 3.594 8 7.1 8S232 412.4 232 408v-304C232 99.59 228.4 96 224 96zM320 0C315.6 0 312 3.594 312 8v496c0 4.406 3.594 8 7.1 8S328 508.4 328 504V8C328 3.594 324.4 0 320 0zM416 128C411.6 128 408 131.6 408 136v240c0 4.406 3.594 8 7.1 8S424 380.4 424 376v-240C424 131.6 420.4 128 416 128zM512 64c-4.406 0-8 3.594-8 8v368c0 4.406 3.594 8 7.1 8C516.4 448 520 444.4 520 440V72C520 67.59 516.4 64 512 64zM608 224c-4.406 0-8 3.594-8 8v48C600 284.4 603.6 288 608 288s8-3.594 8-8v-48C616 227.6 612.4 224 608 224zM128 192C123.6 192 120 195.6 120 200v112C120 316.4 123.6 320 127.1 320C132.4 320 136 316.4 136 312v-112C136 195.6 132.4 192 128 192zM32 224C27.59 224 24 227.6 24 232v48C24 284.4 27.59 288 31.1 288S40 284.4 40 280v-48C40 227.6 36.41 224 32 224z"/>
</>],

]);

const WaveformLines: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WaveformLines.displayName = "WaveformLines";

export default WaveformLines;