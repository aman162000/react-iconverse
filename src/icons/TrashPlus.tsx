
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM199.1 376V312H135.1C122.7 312 111.1 301.3 111.1 288C111.1 274.7 122.7 264 135.1 264H199.1V200C199.1 186.7 210.7 176 223.1 176C237.3 176 248 186.7 248 200V264H312C325.3 264 336 274.7 336 288C336 301.3 325.3 312 312 312H248V376C248 389.3 237.3 400 223.1 400C210.7 400 199.1 389.3 199.1 376z"/><path className="fa-secondary" d="M394.6 466.8C393.1 492.2 372.1 512 346.7 512H101.3C75.87 512 54.86 492.2 53.39 466.8L32 96H416L394.6 466.8zM224 400C237.3 400 248 389.3 248 376V312H312C325.3 312 336 301.3 336 288C336 274.7 325.3 264 312 264H248V200C248 186.7 237.3 176 224 176C210.7 176 200 186.7 200 200V264H136C122.7 264 112 274.7 112 288C112 301.3 122.7 312 136 312H200V376C200 389.3 210.7 400 224 400z"/>
</>],
['light',<>
	<path d="M208 384V304H128C119.2 304 112 296.8 112 288C112 279.2 119.2 272 128 272H208V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V272H320C328.8 272 336 279.2 336 288C336 296.8 328.8 304 320 304H240V384C240 392.8 232.8 400 224 400C215.2 400 208 392.8 208 384zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H413.7L388.2 452.6C385.9 486.1 357.1 512 324.4 512H123.6C90.01 512 62.15 486.1 59.75 452.6L34.29 96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM91.67 450.3C92.87 467 106.8 480 123.6 480H324.4C341.2 480 355.1 467 356.3 450.3L381.6 96H66.37L91.67 450.3z"/>
</>],
['regular',<>
	<path d="M200 376V312H136C122.7 312 112 301.3 112 288C112 274.7 122.7 264 136 264H200V200C200 186.7 210.7 176 224 176C237.3 176 248 186.7 248 200V264H312C325.3 264 336 274.7 336 288C336 301.3 325.3 312 312 312H248V376C248 389.3 237.3 400 224 400C210.7 400 200 389.3 200 376zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H412.4L388.4 452.7C385.9 486.1 358.1 512 324.6 512H123.4C89.92 512 62.09 486.1 59.61 452.7L35.56 128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94V24.94zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM107.5 449.2C108.1 457.5 115.1 464 123.4 464H324.6C332.9 464 339.9 457.5 340.5 449.2L364.3 128H83.69L107.5 449.2z"/>
</>],
['solid',<>
	<path d="M284.2 0C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2zM31.1 128H416L394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128zM223.1 432C237.3 432 248 421.3 248 408V344H312C325.3 344 336 333.3 336 320C336 306.7 325.3 296 312 296H248V232C248 218.7 237.3 208 223.1 208C210.7 208 199.1 218.7 199.1 232V296H135.1C122.7 296 111.1 306.7 111.1 320C111.1 333.3 122.7 344 135.1 344H199.1V408C199.1 421.3 210.7 432 223.1 432z"/>
</>],
['thin',<>
	<path d="M115.6 64L143.8 18.8C151.1 7.105 163.9 0 177.7 0H270.3C284.1 0 296.9 7.105 304.2 18.8L332.4 64H440C444.4 64 448 67.58 448 72C448 76.42 444.4 80 440 80H8C3.582 80 0 76.42 0 72C0 67.58 3.582 64 8 64H115.6zM134.4 64H313.6L290.6 27.28C286.2 20.26 278.5 16 270.3 16H177.7C169.5 16 161.8 20.26 157.4 27.28L134.4 64zM39.34 112C43.74 111.7 47.61 114.9 47.97 119.3L76.3 459.3C78.03 480.1 95.36 496 116.2 496H331.8C352.6 496 369.1 480.1 371.7 459.3L400 119.3C400.4 114.9 404.3 111.7 408.7 112C413.1 112.4 416.3 116.3 415.1 120.7L387.6 460.6C385.2 489.7 360.1 512 331.8 512H116.2C87.04 512 62.78 489.7 60.36 460.6L32.03 120.7C31.66 116.3 34.93 112.4 39.34 112H39.34zM216 384V296H128C123.6 296 120 292.4 120 288C120 283.6 123.6 280 128 280H216V192C216 187.6 219.6 184 224 184C228.4 184 232 187.6 232 192V280H320C324.4 280 328 283.6 328 288C328 292.4 324.4 296 320 296H232V384C232 388.4 228.4 392 224 392C219.6 392 216 388.4 216 384z"/>
</>],

]);

const TrashPlus: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrashPlus.displayName = "TrashPlus";

export default TrashPlus;
