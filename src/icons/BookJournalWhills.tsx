
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M96 384h304c26.51 0 48-21.49 48-48v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1C448 462.3 433.7 448 416 448l-318.6 0c-16.71 0-31.64-12.22-33.23-28.85C62.33 400.1 77.29 384 96 384zM133.1 160.4l21.25 21.25c3.125 3.125 8.125 3.125 11.25 0s3.125-8.125 0-11.25l-26.38-26.5c10-20.75 26.25-38 46.38-49.25c-17 27.12-11 62.75 14 82.63C185.5 192 180.5 213.1 186.5 232.5c5.875 19.38 22 34.13 41.88 38.25l1.375-32.75L219.4 245.1C218.8 245.5 217.9 245.8 217.1 245.8c-1 0-2-.375-2.75-1c-.75-.875-1.25-1.875-1.25-3c0-.625 .25-1.375 .5-2L222.3 225.5l-18-3.75c-1.75-.375-3.125-2.125-3.125-4s1.375-3.5 3.125-3.875l18-3.75L213.6 195.9C212.8 194.3 213 192.1 214.4 190.9s3.5-1.5 5-.375l12 8.125L236 87.88C236.1 85.63 237.9 84 240 84s3.875 1.625 4 3.875l4.75 112.3l14.12-9.625c.625-.4998 1.5-.625 2.25-.75c1.5 0 2.75 .75 3.5 2s.625 2.875-.125 4.125L260 210.1l17.1 3.75c1.751 .375 3.125 2 3.125 3.875s-1.375 3.625-3.125 4L260 225.4l8.5 14.38c.75 1.25 .875 2.75 .125 4s-2 2-3.5 2c-.75 0-1.625-.25-2.25-.625L250.3 236.5l1.375 34.25c19.88-4.125 36-18.88 41.88-38.25c6-19.38 1-40.63-13.12-55.25c25-19.88 31-55.5 14-82.63c20.25 11.25 36.38 28.5 46.38 49.25l-26.38 26.5c-3.125 3.125-3.125 8.125 0 11.25s8.125 3.125 11.25 0l21.25-21.25C349.9 170.5 352 181 352 192c0 .5-.125 1-.125 1.5l-37.13 32.5C313.1 227.6 312.1 229.8 312 232c.125 1.875 .7504 3.75 1.1 5.25C315.6 238.9 317.8 239.9 320 240c1.999 0 3.875-.7501 5.25-1.1l23.62-20.63C337.3 267 293.1 304 240 304S142.8 267 131.1 217.4l23.62 20.63C156.3 239.2 158.1 239.9 160 240c3.375 0 6.25-2.125 7.5-5.125c1.125-3.125 .25-6.75-2.25-8.875L128.1 193.5C128.1 193 128 192.5 128 192C128 181 130.1 170.5 133.1 160.4z"/><path className="fa-secondary" d="M400 384H96c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32h320v-66.94C410.1 382.8 405.6 384 400 384z"/>
</>],
['light',<>
	<path d="M308 85.25c-4.75-2.625-10.62-1.75-14.5 2.125c-3.75 4-4.375 10-1.5 14.63c16.25 25.87 10.38 59.87-13.5 78.87c-2.5 2.25-4 5.25-4.375 8.625c-.25 3.25 1 6.5 3.25 9c13 13.38 17.75 32.63 12.5 50.5S270.1 280.6 252 284.9V259.3l6.25 6.375c3.125 3.125 8.25 3.125 11.38 0s3.125-8.125 0-11.25L259.3 244H272c4.375 0 8-3.625 8-8s-3.625-8-8-8h-12.75l10.38-10.38c3.125-3.125 3.125-8.125 0-11.25s-8.125-3.125-11.25 0L252 212.8V84c0-6.625-5.375-12-12-12s-12 5.375-12 12v128.8L221.6 206.4c-3.125-3.125-8.125-3.125-11.25 0s-3.125 8.125 0 11.25L220.6 228H208c-4.375 0-8 3.625-8 8s3.625 8 8 8h12.62L210.4 254.4c-3.125 3.125-3.125 8.125 0 11.25s8.125 3.125 11.25 0L228 259.3v25.62C209.9 280.6 195.4 267 190.1 249.1S189.6 211.9 202.5 198.5C204.9 196 206.1 192.8 205.9 189.5C205.6 186.1 204.1 183 201.5 180.9c-24-19-29.75-53-13.5-78.87c1.125-1.875 1.75-4.125 1.75-6.25c-.125-3.125-1.25-6-3.375-8.375C182.6 83.5 176.8 82.63 171.9 85.25C127.5 110.1 100 156.8 100 207c0 77.13 62.88 140 140 140s140-62.88 140-140C380 156.8 352.4 110.1 308 85.25zM330.4 197.6c3.125 3.125 8.125 3.125 11.25 0l12.25-12.25C355.3 192.5 356 199.8 356 207c0 4.75-.875 9.375-1.5 14.12l-23.88 20.88c-2.125 1.875-3.125 4.75-2.5 7.625c.5 2.75 2.5 5 5.25 6c2.75 .875 5.75 .25 7.875-1.625L348.1 248C331.4 291.8 289.5 323 240 323S148.5 291.8 131.9 248l6.875 6c3.249 2.875 8.375 2.625 11.25-.7501C151.4 251.6 152.1 249.6 152 247.5S150.9 243.4 149.3 242L125.5 221.1C124.9 216.4 124 211.8 124 207c0-7.25 .625-14.5 1.999-21.62l12.38 12.25c3.125 3.125 8.125 3.125 11.25 0s3.125-8.25 0-11.38L131.3 167.9C136.5 153.4 144.5 140.1 155 128.8c-.125 1.625-.25 3.375-.25 5C154.9 155.1 163 175.6 177.5 191.3c-21.88 31.62-16.75 74.63 12 100.1c28.88 25.62 72.13 25.62 101 0c28.75-25.5 33.88-68.5 11.88-100.1c14.62-15.62 22.75-36.13 22.75-57.5c0-1.625 0-3.375-.125-5C335.4 140 343.5 153.4 348.8 167.9l-18.44 18.38C327.3 189.4 327.3 194.5 330.4 197.6zM448 368v-320C448 21.49 426.5 0 400 0h-320C35.82 0 0 35.82 0 80V448c0 35.35 28.65 64 64 64h368c8.844 0 16-7.156 16-16S440.8 480 432 480H416v-66.95C434.6 406.4 448 388.8 448 368zM384 480H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320V480zM400 384H64c-11.71 0-22.55 3.389-32 8.9V80C32 53.49 53.49 32 80 32h320C408.8 32 416 39.16 416 48v320C416 376.8 408.8 384 400 384z"/>
</>],
['regular',<>
	<path d="M448 352V48C448 21.53 426.5 0 400 0h-320C35.89 0 0 35.88 0 80v352C0 476.1 35.89 512 80 512h344c13.25 0 24-10.75 24-24s-10.75-24-24-24H416v-66.95C434.6 390.4 448 372.8 448 352zM368 464h-288c-17.64 0-32-14.34-32-32s14.36-32 32-32h288V464zM400 352h-320c-11.38 0-22.2 2.375-32 6.688V80c0-17.66 14.36-32 32-32h320V352zM149.3 230.5C151.5 232.4 152.4 235.3 151.9 238.1c-.5 2.75-2.625 5.125-5.25 6C143.9 245 140.9 244.5 138.8 242.5l-20-17.5C130.5 279.3 180.4 320 240 320s109.5-40.75 121.3-95l-20 17.5c-3.25 3-8.375 2.625-11.25-.75C328.8 240.3 328.1 238.5 328 236.5c.125-2.25 1.125-4.375 2.75-6l33.13-29c0-.375 .125-.75 .125-1.125c0-10.75-1.625-21.5-4.625-31.88l-17.75 17.75c-3.125 3-8.188 3.125-11.31 0S327.3 178 330.4 174.9L353 152.1c-11.12-23.75-29.62-43.25-52.88-55.63C298.6 95.63 296.6 96 295.4 97.25C294.8 98.13 294.4 99 294.3 100c.125 .75 .25 1.5 .625 2.125C301.1 111.8 304.5 123 304.5 134.4c0 14.38-5.125 27.88-15 39.13c-1.125 1.375-1.25 3.5-.25 5c11.5 16.38 13.88 37.5 6.5 56.13c-7.25 18.62-23.5 32.38-43.13 36.5H252V243.4l6.375 6.25c2 2.125 4.875 2.875 7.75 2.125C268.9 251 271 248.9 271.8 246.1s-.125-5.75-2.125-7.75L259.3 228H272c4.375 0 8-3.625 8-8s-3.625-8-8-8h-12.75l10.38-10.38c3.125-3.125 3.125-8.125 0-11.25s-8.125-3.125-11.25 0L252 196.8V100c0-6.625-5.375-12-12-12s-12 5.375-12 12v96.75L221.6 190.4c-3.125-3.125-8.125-3.125-11.25 0s-3.125 8.125 0 11.25L220.6 212H208c-4.375 0-8 3.625-8 8s3.625 8 8 8h12.62L210.4 238.4c-3.125 3.125-3.125 8.125 0 11.25s8.125 3.125 11.25 0L228 243.3v27.88h-.625C207.8 267 191.6 253.3 184.3 234.6s-5-39.75 6.5-56.13c1-1.625 .875-3.625-.25-5c-9.875-11.25-15-24.75-15-39.13c0-11.38 3.375-22.62 9.625-32.25c.8746-1.5 .75-3.5-.5-4.875S181.4 95.63 179.8 96.5C156.6 108.9 138.1 128.4 127 152.1l22.62 22.75c3.125 3.125 3.125 8.25 0 11.38s-8.125 3-11.25-.125L120.6 168.5C117.6 178.9 116 189.6 116 200.4c0 .375 .125 .75 .125 1.125L149.3 230.5z"/>
</>],
['solid',<>
	<path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM133.1 160.4l21.25 21.25c3.125 3.125 8.125 3.125 11.25 0s3.125-8.125 0-11.25l-26.38-26.5c10-20.75 26.25-38 46.38-49.25c-17 27.12-11 62.75 14 82.63C185.5 192 180.5 213.1 186.5 232.5c5.875 19.38 22 34.13 41.88 38.25l1.375-32.75L219.4 245.1C218.8 245.5 217.9 245.8 217.1 245.8c-1 0-2-.375-2.75-1c-.75-.875-1.25-1.875-1.25-3c0-.625 .25-1.375 .5-2L222.3 225.5l-18-3.75c-1.75-.375-3.125-2.125-3.125-4s1.375-3.5 3.125-3.875l18-3.75L213.6 195.9C212.8 194.3 213 192.1 214.4 190.9s3.5-1.5 5-.375l12 8.125L236 87.88C236.1 85.63 237.9 84 240 84s3.875 1.625 4 3.875l4.75 112.3l14.12-9.625c.625-.5 1.5-.625 2.25-.75c1.5 0 2.75 .75 3.5 2s.625 2.875-.125 4.125L260 210.1l17.1 3.75c1.75 .375 3.125 2 3.125 3.875s-1.375 3.625-3.125 4L260 225.4l8.5 14.38c.75 1.25 .875 2.75 .125 4s-2 2-3.5 2c-.75 0-1.625-.25-2.25-.625L250.3 236.5l1.375 34.25c19.88-4.125 36-18.88 41.88-38.25c6-19.38 1-40.63-13.12-55.25c25-19.88 31-55.5 14-82.63c20.25 11.25 36.38 28.5 46.38 49.25l-26.38 26.5c-3.125 3.125-3.125 8.125 0 11.25s8.125 3.125 11.25 0l21.25-21.25C349.9 170.5 352 181 352 192c0 .5-.125 1-.125 1.5l-37.13 32.5C313.1 227.6 312.1 229.8 312 232c.125 1.875 .7496 3.75 1.1 5.25C315.6 238.9 317.8 239.9 320 240c1.1 0 3.875-.7499 5.25-1.1l23.62-20.63C337.3 267 293.1 304 240 304S142.8 267 131.1 217.4l23.62 20.63C156.3 239.3 158.1 239.9 160 240c3.375 0 6.25-2.125 7.5-5.125c1.125-3.125 .25-6.75-2.25-8.875L128.1 193.5C128.1 193 128 192.5 128 192C128 181 130.1 170.5 133.1 160.4zM384 448H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h288V448z"/>
</>],
['thin',<>
	<path d="M314 103.6c-1.885-1.352-4.119-2.117-6.471-2.117c-3.705 .0586-7.234 1.887-9.354 5c-2.059 3.117-2.529 7.059-1.117 10.53c2.766 7 4.178 14.41 4.178 21.94c0 18.52-8.424 35.43-22.94 47.07c10.17 9.957 16.52 23.8 16.52 39.16c0 27.55-20.39 50.15-46.86 54.05V247.2l15.88 7.938C265 255.7 266.2 256 267.4 256c2.938 0 5.75-1.625 7.156-4.438c1.969-3.938 .375-8.75-3.594-10.72l-13.12-6.562L271 227.7c3.969-1.969 5.562-6.781 3.594-10.72s-6.844-5.469-10.72-3.594L248 221.3V104C248 99.59 244.4 96 240 96s-8 3.594-8 8v117.3L216.1 213.4C212.3 211.5 207.4 213 205.4 217C203.4 220.9 205 225.8 209 227.7l13.12 6.562L209 240.8C205 242.8 203.4 247.6 205.4 251.6C206.8 254.4 209.6 256 212.6 256C213.8 256 215 255.7 216.1 255.2L232 247.2v31.98c-26.47-3.898-46.86-26.5-46.86-54.05c0-15.36 6.348-29.21 16.52-39.16C187.1 174.3 178.7 157.4 178.7 138.9c0-7.531 1.412-14.94 4.178-21.94C184.3 113.5 183.8 109.6 181.8 106.4c-2.119-3.113-5.648-4.941-9.354-5c-2.352 0-4.586 .7656-6.471 2.117C130.3 128.8 110.1 169.9 112.1 213.4C115.2 279.7 171.1 334.8 240 334.9c68.88-.0078 124.8-55.18 127.9-121.4C369.9 169.9 349.7 128.8 314 103.6zM330.3 213.7C331.9 215.2 333.9 216 336 216s4.094-.7813 5.656-2.344l9.67-9.672c.0957 2.93 .6895 5.766 .5547 8.723c-2.701 58.52-52.89 106.1-111.9 106.1C181 318.8 130.8 271.2 128.1 212.7c-.1348-2.961 .459-5.797 .5547-8.727l9.67 9.672C139.9 215.2 141.9 216 144 216s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L130.1 183.7c4.857-22.07 15.97-42.34 32.86-57.89C163.1 130.1 162.7 134.5 162.7 138.9c0 17.76 6.23 34.69 17.46 48.27C172.1 198.4 169.1 211.5 169.1 225.1C169.1 264.2 200.9 296 240 296s70.86-31.79 70.86-70.86c0-13.66-3.85-26.71-11.04-37.96c11.23-13.58 17.46-30.51 17.46-48.27c0-4.426-.3828-8.809-1.146-13.14c16.88 15.54 28.01 35.81 32.87 57.9l-18.66 18.66C327.2 205.5 327.2 210.5 330.3 213.7zM448 384V32c0-17.67-14.33-32-32-32H64C28.65 0 0 28.65 0 64v391.1c0 30.93 25.07 56 55.1 56l383.1 .0078C444.4 511.1 448 508.4 448 503.1c0-4.422-3.584-8.008-8.006-8.008H416V416C433.7 416 448 401.7 448 384zM400 495.1H56c-23.38 0-42.12-20.14-39.81-43.98c2.02-20.78 20.7-36.02 41.58-36.02L400 416V495.1zM56 399.1c-15.68 0-29.82 6.516-40 16.93V64c0-26.47 21.53-48 48-48h352c8.836 0 16 7.164 16 16v352c0 8.824-7.178 16-16 16L56 399.1z"/>
</>],

]);

const BookJournalWhills: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BookJournalWhills.displayName = "BookJournalWhills";

export default BookJournalWhills;
