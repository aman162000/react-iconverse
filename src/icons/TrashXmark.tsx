
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM143 207C152.4 197.7 167.6 197.7 176.1 207L223.1 254.1L271 207C280.4 197.7 295.6 197.7 304.1 207C314.3 216.4 314.3 231.6 304.1 240.1L257.9 287.1L304.1 335C314.3 344.4 314.3 359.6 304.1 368.1C295.6 378.3 280.4 378.3 271 368.1L223.1 321.9L176.1 368.1C167.6 378.3 152.4 378.3 143 368.1C133.7 359.6 133.7 344.4 143 335L190.1 287.1L143 240.1C133.7 231.6 133.7 216.4 143 207V207z"/><path className="fa-secondary" d="M394.6 466.8C393.1 492.2 372.1 512 346.7 512H101.3C75.87 512 54.86 492.2 53.39 466.8L32 96H416L394.6 466.8zM143 240.1L190.1 287.1L143 335C133.7 344.4 133.7 359.6 143 368.1C152.4 378.3 167.6 378.3 176.1 368.1L223.1 321.9L271 368.1C280.4 378.3 295.6 378.3 304.1 368.1C314.3 359.6 314.3 344.4 304.1 335L257.9 287.1L304.1 240.1C314.3 231.6 314.3 216.4 304.1 207C295.6 197.7 280.4 197.7 271 207L223.1 254.1L176.1 207C167.6 197.7 152.4 197.7 143 207C133.7 216.4 133.7 231.6 143 240.1V240.1z"/>
</>],
['light',<>
	<path d="M148.7 212.7C154.9 206.4 165.1 206.4 171.3 212.7L224 265.4L276.7 212.7C282.9 206.4 293.1 206.4 299.3 212.7C305.6 218.9 305.6 229.1 299.3 235.3L246.6 288L299.3 340.7C305.6 346.9 305.6 357.1 299.3 363.3C293.1 369.6 282.9 369.6 276.7 363.3L224 310.6L171.3 363.3C165.1 369.6 154.9 369.6 148.7 363.3C142.4 357.1 142.4 346.9 148.7 340.7L201.4 288L148.7 235.3C142.4 229.1 142.4 218.9 148.7 212.7zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H413.7L388.2 452.6C385.9 486.1 357.1 512 324.4 512H123.6C90.01 512 62.15 486.1 59.75 452.6L34.29 96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM91.67 450.3C92.87 467 106.8 480 123.6 480H324.4C341.2 480 355.1 467 356.3 450.3L381.6 96H66.37L91.67 450.3z"/>
</>],
['regular',<>
	<path d="M143 207C152.4 197.7 167.6 197.7 176.1 207L223.1 254.1L271 207C280.4 197.7 295.6 197.7 304.1 207C314.3 216.4 314.3 231.6 304.1 240.1L257.9 287.1L304.1 335C314.3 344.4 314.3 359.6 304.1 368.1C295.6 378.3 280.4 378.3 271 368.1L223.1 321.9L176.1 368.1C167.6 378.3 152.4 378.3 143 368.1C133.7 359.6 133.7 344.4 143 335L190.1 287.1L143 240.1C133.7 231.6 133.7 216.4 143 207V207zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H412.4L388.4 452.7C385.9 486.1 358.1 512 324.6 512H123.4C89.92 512 62.09 486.1 59.61 452.7L35.56 128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94V24.94zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM107.5 449.2C108.1 457.5 115.1 464 123.4 464H324.6C332.9 464 339.9 457.5 340.5 449.2L364.3 128H83.69L107.5 449.2z"/>
</>],
['solid',<>
	<path d="M284.2 0C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2zM31.1 128H416L394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128zM143 272.1L190.1 319.1L143 367C133.7 376.4 133.7 391.6 143 400.1C152.4 410.3 167.6 410.3 176.1 400.1L223.1 353.9L271 400.1C280.4 410.3 295.6 410.3 304.1 400.1C314.3 391.6 314.3 376.4 304.1 367L257.9 319.1L304.1 272.1C314.3 263.6 314.3 248.4 304.1 239C295.6 229.7 280.4 229.7 271 239L223.1 286.1L176.1 239C167.6 229.7 152.4 229.7 143 239C133.7 248.4 133.7 263.6 143 272.1V272.1z"/>
</>],
['thin',<>
	<path d="M115.6 64L143.8 18.8C151.1 7.105 163.9 0 177.7 0H270.3C284.1 0 296.9 7.105 304.2 18.8L332.4 64H440C444.4 64 448 67.58 448 72C448 76.42 444.4 80 440 80H8C3.582 80 0 76.42 0 72C0 67.58 3.582 64 8 64H115.6zM134.4 64H313.6L290.6 27.28C286.2 20.26 278.5 16 270.3 16H177.7C169.5 16 161.8 20.26 157.4 27.28L134.4 64zM39.34 112C43.74 111.7 47.61 114.9 47.97 119.3L76.3 459.3C78.03 480.1 95.36 496 116.2 496H331.8C352.6 496 369.1 480.1 371.7 459.3L400 119.3C400.4 114.9 404.3 111.7 408.7 112C413.1 112.4 416.3 116.3 415.1 120.7L387.6 460.6C385.2 489.7 360.1 512 331.8 512H116.2C87.04 512 62.78 489.7 60.36 460.6L32.03 120.7C31.66 116.3 34.93 112.4 39.34 112H39.34zM146.3 210.3C149.5 207.2 154.5 207.2 157.7 210.3L224 276.7L290.3 210.3C293.5 207.2 298.5 207.2 301.7 210.3C304.8 213.5 304.8 218.5 301.7 221.7L235.3 288L301.7 354.3C304.8 357.5 304.8 362.5 301.7 365.7C298.5 368.8 293.5 368.8 290.3 365.7L224 299.3L157.7 365.7C154.5 368.8 149.5 368.8 146.3 365.7C143.2 362.5 143.2 357.5 146.3 354.3L212.7 288L146.3 221.7C143.2 218.5 143.2 213.5 146.3 210.3V210.3z"/>
</>],

]);

const TrashXmark: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrashXmark.displayName = "TrashXmark";

export default TrashXmark;