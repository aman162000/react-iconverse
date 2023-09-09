
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM312 264C325.3 264 336 274.7 336 288C336 301.3 325.3 312 312 312H135.1C122.7 312 111.1 301.3 111.1 288C111.1 274.7 122.7 264 135.1 264H312z"/><path className="fa-secondary" d="M416 448C416 483.3 387.3 512 352 512H96C60.65 512 32 483.3 32 448V96H416V448zM136 264C122.7 264 112 274.7 112 288C112 301.3 122.7 312 136 312H312C325.3 312 336 301.3 336 288C336 274.7 325.3 264 312 264H136z"/>
</>],
['light',<>
	<path d="M148.7 212.7C154.9 206.4 165.1 206.4 171.3 212.7L224 265.4L276.7 212.7C282.9 206.4 293.1 206.4 299.3 212.7C305.6 218.9 305.6 229.1 299.3 235.3L246.6 288L299.3 340.7C305.6 346.9 305.6 357.1 299.3 363.3C293.1 369.6 282.9 369.6 276.7 363.3L224 310.6L171.3 363.3C165.1 369.6 154.9 369.6 148.7 363.3C142.4 357.1 142.4 346.9 148.7 340.7L201.4 288L148.7 235.3C142.4 229.1 142.4 218.9 148.7 212.7zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM64 432C64 458.5 85.49 480 112 480H336C362.5 480 384 458.5 384 432V96H64V432z"/>
</>],
['regular',<>
	<path d="M143 207C152.4 197.7 167.6 197.7 176.1 207L223.1 254.1L271 207C280.4 197.7 295.6 197.7 304.1 207C314.3 216.4 314.3 231.6 304.1 240.1L257.9 287.1L304.1 335C314.3 344.4 314.3 359.6 304.1 368.1C295.6 378.3 280.4 378.3 271 368.1L223.1 321.9L176.1 368.1C167.6 378.3 152.4 378.3 143 368.1C133.7 359.6 133.7 344.4 143 335L190.1 287.1L143 240.1C133.7 231.6 133.7 216.4 143 207V207zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/>
</>],
['solid',<>
	<path d="M284.2 0C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM143 272.1L190.1 319.1L143 367C133.7 376.4 133.7 391.6 143 400.1C152.4 410.3 167.6 410.3 176.1 400.1L223.1 353.9L271 400.1C280.4 410.3 295.6 410.3 304.1 400.1C314.3 391.6 314.3 376.4 304.1 367L257.9 319.1L304.1 272.1C314.3 263.6 314.3 248.4 304.1 239C295.6 229.7 280.4 229.7 271 239L223.1 286.1L176.1 239C167.6 229.7 152.4 229.7 143 239C133.7 248.4 133.7 263.6 143 272.1V272.1z"/>
</>],
['thin',<>
	<path d="M115.6 64L143.8 18.8C151.1 7.105 163.9 0 177.7 0H270.3C284.1 0 296.9 7.105 304.2 18.8L332.4 64H440C444.4 64 448 67.58 448 72C448 76.42 444.4 80 440 80H8C3.582 80 0 76.42 0 72C0 67.58 3.582 64 8 64H115.6zM134.4 64H313.6L290.6 27.28C286.2 20.26 278.5 16 270.3 16H177.7C169.5 16 161.8 20.26 157.4 27.28L134.4 64zM40 112C44.42 112 48 115.6 48 120V440C48 470.9 73.07 496 104 496H344C374.9 496 400 470.9 400 440V120C400 115.6 403.6 112 408 112C412.4 112 416 115.6 416 120V440C416 479.8 383.8 512 344 512H104C64.24 512 32 479.8 32 440V120C32 115.6 35.58 112 40 112zM146.3 210.3C149.5 207.2 154.5 207.2 157.7 210.3L224 276.7L290.3 210.3C293.5 207.2 298.5 207.2 301.7 210.3C304.8 213.5 304.8 218.5 301.7 221.7L235.3 288L301.7 354.3C304.8 357.5 304.8 362.5 301.7 365.7C298.5 368.8 293.5 368.8 290.3 365.7L224 299.3L157.7 365.7C154.5 368.8 149.5 368.8 146.3 365.7C143.2 362.5 143.2 357.5 146.3 354.3L212.7 288L146.3 221.7C143.2 218.5 143.2 213.5 146.3 210.3V210.3z"/>
</>],

]);

const TrashCanXmark: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrashCanXmark.displayName = "TrashCanXmark";

export default TrashCanXmark;
