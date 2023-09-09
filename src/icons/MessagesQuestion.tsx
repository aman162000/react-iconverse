
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M234.5 96.23c9.176 0 16.82 7.646 16.82 16.82c0 6.117-3.059 11.47-8.412 14.53l-43.59 26C193.2 157.4 190.1 163.5 190.1 169.6v12.23c0 9.941 8.41 18.35 18.35 18.35s18.35-8.412 18.35-18.35V180.4l35.18-21.41C278.1 149 288 131.4 288 113.1c0-29.82-23.71-53.53-53.53-53.53H194.7c-29.82 0-53.53 23.71-53.53 53.53c0 9.941 8.412 18.35 18.35 18.35c9.939 0 18.35-8.412 18.35-18.35c0-9.178 7.646-16.82 16.82-16.82H234.5zM576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128zM208.5 219.5C194.7 219.5 184 230.2 184 244c0 13.76 10.71 24.47 24.47 24.47c13.77 0 24.47-10.71 24.47-24.47C232.9 230.2 222.2 219.5 208.5 219.5z"/><path className="fa-secondary" d="M352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9c35.25 .125 64-28.68 64-63.92V63.1C416 28.75 387.3 0 352 0zM208.5 268.5C194.7 268.5 184 257.8 184 244c0-13.77 10.71-24.47 24.47-24.47c13.77 0 24.47 10.71 24.47 24.47C232.9 257.8 222.2 268.5 208.5 268.5zM261.1 158.9l-35.18 21.41v1.529c0 9.941-8.412 18.35-18.35 18.35S190.1 191.8 190.1 181.9V169.6c0-6.117 3.059-12.23 9.176-16.06l43.59-26c5.354-3.059 8.412-8.412 8.412-14.53c0-9.178-7.648-16.82-16.82-16.82H194.7c-9.178 0-16.82 7.646-16.82 16.82c0 9.941-8.412 18.35-18.35 18.35c-9.941 0-18.35-8.412-18.35-18.35c0-29.82 23.71-53.53 53.53-53.53h39.76C264.3 59.53 288 83.23 288 113.1C288 131.4 278.1 149 261.1 158.9z"/>
</>],
['light',<>
	<path d="M208 216c-11.04 0-20 8.953-20 20C188 247 196.1 256 208 256s20-8.955 20-20C228 224.1 219 216 208 216zM224.6 64H188.2C163.8 64 144 83.84 144 108.2c0 8.844 7.156 16 16 16s16-7.156 16-16C176 101.5 181.5 96 188.2 96h36.36C233.1 96 240 102.9 240 111.4c0 5.875-3.266 11.16-8.734 13.89L200.6 141.2C195.3 143.1 192 149.4 192 155.4V176C192 184.8 199.2 192 208 192S224 184.8 224 175.9V165.1l21.78-11.31C261.1 145.8 272 129.5 272 111.4C272 85.27 250.7 64 224.6 64zM576 128H448v32h128c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32h-64v49.57L424.4 416H320c-17.64 0-32-14.36-32-32v-32l-32-.0039v31.98c0 35.25 28.75 63.1 63.1 63.1L416 448l108.9 61.63C527.1 511.3 529.6 512 532 512C538.3 512 544 507.1 544 500v-52.03h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.3 28.75 320 64 320l32 .0106V372C96 379.1 101.8 384 108 384c2.375 0 4.875-.75 7.125-2.375L224 320l128-.075C387.3 319.9 416 291.3 416 256zM215.6 288L128 337.6V288H64C46.36 288 32 273.6 32 256V64c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32H215.6z"/>
</>],
['regular',<>
	<path d="M188 224C188 212.1 196.1 204 208 204C219 204 228 212.1 228 224C228 235 219 244 208 244C196.1 244 188 235 188 224zM191.1 72H221.8C247.9 72 269.2 93.27 269.2 119.4C269.2 137.5 259.1 153.8 242.1 161.8L223.1 171.3V176C223.1 184.8 216.8 192 207.1 192C199.2 192 191.1 184.8 191.1 176V161.4C191.1 155.3 195.4 149.8 200.8 147.1L228.7 133.2C233.9 130.6 237.2 125.3 237.2 119.4C237.2 110.9 230.3 104 221.8 104H191.1C184.3 104 178.8 109.5 178.8 116.2C178.8 125.1 171.7 132.2 162.8 132.2C153.1 132.2 146.8 125.1 146.8 116.2C146.8 91.84 166.7 72 191.1 72L191.1 72zM352 319.9L224 320L115.1 381.6C112.9 383.3 110.4 384 108 384C101.8 384 96 379.1 96 372V320L64 320C28.75 320 0 291.3 0 256V63.1C0 28.75 28.75 0 64 0H352C387.3 0 416 28.75 416 63.1V256C416 291.3 387.3 319.9 352 319.9V319.9zM352 272C360.7 272 368 264.8 368 256V64C368 55.25 360.7 48 352 48H64C55.25 48 48 55.25 48 64V256C48 264.8 55.25 272 64 272H144V310.1L211.4 272H352zM304 352V384C304 392.7 311.2 400 320 400H428.6L496 438.1V400H576C584.7 400 592 392.7 592 384V192C592 183.2 584.7 176 576 176H448V128H576C611.3 128 640 156.7 640 191.1V384C640 419.3 611.3 448 576 448L544 448V500C544 507.1 538.2 512 532 512C529.6 512 527.1 511.3 524.9 509.6L416 448L320 447.9C284.8 447.9 256 419.3 256 384V352L304 352z"/>
</>],
['solid',<>
	<path d="M576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM208.5 268.5C194.7 268.5 184 257.8 184 244c0-13.77 10.71-24.47 24.47-24.47c13.77 0 24.47 10.71 24.47 24.47C232.9 257.8 222.2 268.5 208.5 268.5zM261.1 158.9l-35.18 21.41v1.529c0 9.941-8.412 18.35-18.35 18.35S190.1 191.8 190.1 181.9V169.6c0-6.117 3.059-12.23 9.176-16.06l43.59-26c5.354-3.059 8.412-8.412 8.412-14.53c0-9.178-7.648-16.82-16.82-16.82H194.7c-9.178 0-16.82 7.646-16.82 16.82c0 9.941-8.412 18.35-18.35 18.35c-9.941 0-18.35-8.412-18.35-18.35c0-29.82 23.71-53.53 53.53-53.53h39.76C264.3 59.53 288 83.23 288 113.1C288 131.4 278.1 149 261.1 158.9z"/>
</>],
['thin',<>
	<path d="M208 233.2c-6.299 0-11.41 5.105-11.41 11.41C196.6 250.9 201.7 256 208 256s11.41-5.107 11.41-11.41C219.4 238.3 214.3 233.2 208 233.2zM228.7 72H183.3C159.4 72 140 91.38 140 115.2c0 4.422 3.578 8 8 8s8-3.578 8-8C156 100.2 168.3 88 183.3 88h45.44C245.1 88 260 101.1 260 119.2c0 11.88-6.625 22.55-17.38 27.91L204.3 166.9C201.7 168.3 200 171 200 174V200c0 4.422 3.578 8 8 8s8-3.578 8-8V178.9l33.86-17.53C265.1 153.3 276 137.1 276 119.2C276 93.16 254.8 72 228.7 72zM576 128H472c-4.418 0-8 3.582-8 8s3.582 8 8 8H576c26.51 0 48 21.49 48 48v191.1c0 26.51-21.49 47.1-47.99 47.1H528v57.74l-76.91-57.74H320c-26.51 0-48-21.49-48-48v-7.971c0-4.418-3.582-8-8-8s-8 3.582-8 8v7.983c0 35.2 28.8 63.1 63.1 63.1l125.8-.0073l82.75 62.12C530.3 511.4 532.3 512 534.2 512C539.2 512 544 507.1 544 502.2v-54.24h32c35.2 0 64-28.8 64-63.1V191.1C640 156.8 611.2 128 576 128zM352 319.9c35.15 0 64-28.75 64-63.92V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25C96 380 100.8 384.1 105.8 384.1c1.941 0 3.926-.5977 5.699-1.918l82.75-62.12L352 319.9zM194.2 304L188.9 304L112 361.8V304L64 304c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 16 64 16h288c26.47 0 48 21.53 48 47.99v192c0 26.4-21.43 47.87-48.01 47.87L194.2 304z"/>
</>],

]);

const MessagesQuestion: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MessagesQuestion.displayName = "MessagesQuestion";

export default MessagesQuestion;
