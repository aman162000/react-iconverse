
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM211.8 371.8C200.9 382.7 183.1 382.7 172.2 371.8L108.2 307.8C97.27 296.9 97.27 279.1 108.2 268.2C119.1 257.3 136.9 257.3 147.8 268.2L192 312.4L300.2 204.2C311.1 193.3 328.9 193.3 339.8 204.2C350.7 215.1 350.7 232.9 339.8 243.8L211.8 371.8z"/><path className="fa-secondary" d="M394.6 466.8C393.1 492.2 372.1 512 346.7 512H101.3C75.87 512 54.86 492.2 53.39 466.8L32 96H416L394.6 466.8zM339.8 243.8C350.7 232.9 350.7 215.1 339.8 204.2C328.9 193.3 311.1 193.3 300.2 204.2L192 312.4L147.8 268.2C136.9 257.3 119.1 257.3 108.2 268.2C97.27 279.1 97.27 296.9 108.2 307.8L172.2 371.8C183.1 382.7 200.9 382.7 211.8 371.8L339.8 243.8z"/>
</>],
['light',<>
	<path d="M203.3 363.3C197.1 369.6 186.9 369.6 180.7 363.3L116.7 299.3C110.4 293.1 110.4 282.9 116.7 276.7C122.9 270.4 133.1 270.4 139.3 276.7L192 329.4L308.7 212.7C314.9 206.4 325.1 206.4 331.3 212.7C337.6 218.9 337.6 229.1 331.3 235.3L203.3 363.3zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H413.7L388.2 452.6C385.9 486.1 357.1 512 324.4 512H123.6C90.01 512 62.15 486.1 59.75 452.6L34.29 96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM91.67 450.3C92.87 467 106.8 480 123.6 480H324.4C341.2 480 355.1 467 356.3 450.3L381.6 96H66.37L91.67 450.3z"/>
</>],
['regular',<>
	<path d="M211.8 355.8C200.9 366.7 183.1 366.7 172.2 355.8L124.2 307.8C113.3 296.9 113.3 279.1 124.2 268.2C135.1 257.3 152.9 257.3 163.8 268.2L192 296.4L284.2 204.2C295.1 193.3 312.9 193.3 323.8 204.2C334.7 215.1 334.7 232.9 323.8 243.8L211.8 355.8zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H412.4L388.4 452.7C385.9 486.1 358.1 512 324.6 512H123.4C89.92 512 62.09 486.1 59.61 452.7L35.56 128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94V24.94zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM107.5 449.2C108.1 457.5 115.1 464 123.4 464H324.6C332.9 464 339.9 457.5 340.5 449.2L364.3 128H83.69L107.5 449.2z"/>
</>],
['solid',<>
	<path d="M284.2 0C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2zM31.1 128H416L394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128zM339.8 251.8C350.7 240.9 350.7 223.1 339.8 212.2C328.9 201.3 311.1 201.3 300.2 212.2L192 320.4L147.8 276.2C136.9 265.3 119.1 265.3 108.2 276.2C97.27 287.1 97.27 304.9 108.2 315.8L172.2 379.8C183.1 390.7 200.9 390.7 211.8 379.8L339.8 251.8z"/>
</>],
['thin',<>
	<path d="M115.6 64L143.8 18.8C151.1 7.105 163.9 0 177.7 0H270.3C284.1 0 296.9 7.105 304.2 18.8L332.4 64H440C444.4 64 448 67.58 448 72C448 76.42 444.4 80 440 80H8C3.582 80 0 76.42 0 72C0 67.58 3.582 64 8 64H115.6zM134.4 64H313.6L290.6 27.28C286.2 20.26 278.5 16 270.3 16H177.7C169.5 16 161.8 20.26 157.4 27.28L134.4 64zM39.34 112C43.74 111.7 47.61 114.9 47.97 119.3L76.3 459.3C78.03 480.1 95.36 496 116.2 496H331.8C352.6 496 369.1 480.1 371.7 459.3L400 119.3C400.4 114.9 404.3 111.7 408.7 112C413.1 112.4 416.3 116.3 415.1 120.7L387.6 460.6C385.2 489.7 360.1 512 331.8 512H116.2C87.04 512 62.78 489.7 60.36 460.6L32.03 120.7C31.66 116.3 34.93 112.4 39.34 112H39.34zM197.7 357.7C194.5 360.8 189.5 360.8 186.3 357.7L122.3 293.7C119.2 290.5 119.2 285.5 122.3 282.3C125.5 279.2 130.5 279.2 133.7 282.3L192 340.7L314.3 218.3C317.5 215.2 322.5 215.2 325.7 218.3C328.8 221.5 328.8 226.5 325.7 229.7L197.7 357.7z"/>
</>],

]);

const TrashCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrashCheck.displayName = "TrashCheck";

export default TrashCheck;