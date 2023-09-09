
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M543.1 0h-512C14.33 0 0 14.33 0 31.1s14.33 32.01 31.1 32.01h512C561.7 64.01 576 49.68 576 32.01S561.7 0 543.1 0zM320 386.8v-34.75H256v34.75L180.7 462.1c-6.25 6.25-6.271 16.46-.0208 22.71l22.54 22.54c6.25 6.251 16.48 6.249 22.73-.0018L288 445.3l61.1 62.01c6.25 6.251 16.48 6.252 22.73 .0018l22.54-22.54c6.25-6.251 6.229-16.46-.0208-22.71L320 386.8z"/><path className="fa-secondary" d="M512 352H64C46.38 352 32 337.7 32 320L31.1 64.01H96v224h384V64.01h63.1L544 320C544 337.7 529.6 352 512 352z"/>
</>],
['light',<>
	<path d="M528 64C519.2 64 512 71.16 512 80V288c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V80C64 71.16 56.84 64 48 64S32 71.16 32 80V288c0 35.2 28.8 64 64 64h176v41.38l-91.27 91.39c-6.25 6.25-6.292 16.3-.0417 22.55s16.33 6.246 22.58-.0035L288 422.6l84.73 84.68C375.9 510.4 379.9 512 384 512s8.188-1.562 11.31-4.688c6.25-6.25 6.208-16.3-.0417-22.55L304 393.4V352H480c35.2 0 64-28.8 64-64V80C544 71.16 536.8 64 528 64zM560 0h-544C7.156 0 0 7.156 0 16S7.156 32 16 32h544C568.8 32 576 24.84 576 16S568.8 0 560 0z"/>
</>],
['regular',<>
	<path d="M496 304h-416v-224H32v240c0 17.6 14.4 32 32 32L264 352v47.02l-72 72c-9.354 9.352-9.354 24.52 0 33.88c9.348 9.348 24.51 9.359 33.87 .0195L288 442.9l62.09 62.09c9.391 9.391 24.63 9.348 33.97-.0938c9.301-9.406 9.258-24.55-.0938-33.91L312 399V352L512 352c17.6 0 32-14.4 32-32V80h-48V304zM552 0H23.96C10.72 0 0 10.73 0 23.95S10.72 48 23.96 48h528.1C565.3 48 576 37.27 576 24.05S565.3 0 552 0z"/>
</>],
['solid',<>
	<path d="M543.1 0h-512C14.33 0 0 14.33 0 31.1c0 17.67 14.33 32.01 31.1 32.01L32 320c0 17.6 14.4 32 32 32L256 352v34.75L180.7 462.1c-6.256 6.257-6.277 16.46-.0208 22.71l22.54 22.54c6.256 6.257 16.47 6.255 22.73-.0018L288 445.3l61.1 62.01c6.256 6.257 16.47 6.259 22.73 .0018l22.54-22.54c6.256-6.257 6.235-16.46-.0208-22.71L320 386.8v-34.75l192-.0132c17.6 0 32-14.4 32-32l-.0007-256C561.7 64.01 576 49.68 576 32.01C576 14.33 561.7 0 543.1 0zM480 288H96V64.01h384V288z"/>
</>],
['thin',<>
	<path d="M568 0H8C3.594 0 0 3.578 0 8S3.594 16 8 16h560C572.4 16 576 12.42 576 8S572.4 0 568 0zM536 48c-4.406 0-8 3.578-8 8v256c0 13.23-10.78 24-24 24H72c-13.22 0-24-10.77-24-24v-256c0-4.422-3.594-8-8-8S32 51.58 32 56v256C32 334.1 49.94 352 72 352h208v52.69l-93.66 93.66c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0l87.03-87.03C285.8 423.2 286.7 424 288 424s2.232-.8262 3.314-1.373l87.03 87.03C379.9 511.2 381.9 512 384 512s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L296 404.7V352h208C526.1 352 544 334.1 544 312v-256C544 51.58 540.4 48 536 48z"/>
</>],

]);

const PresentationScreen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PresentationScreen.displayName = "PresentationScreen";

export default PresentationScreen;
