
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196V9.196z"/><path className="fa-secondary" d="M186 120.5C209 85.37 245.4 59.84 288 51.2V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V51.2C425 66.03 480 130.6 480 208V226.8C480 273.9 497.3 319.2 528.5 354.4L535.9 362.7C544.3 372.2 546.4 385.6 541.2 397.1C540.1 397.5 540.8 397.1 540.6 398.4L186 120.5zM160 226.8V222.1L406.2 416H128C115.4 416 103.1 408.6 98.81 397.1C93.65 385.6 95.71 372.2 104.1 362.7L111.5 354.4C142.7 319.2 160 273.9 160 226.8V226.8zM320 512C303 512 286.7 505.3 274.7 493.3C262.7 481.3 256 464.1 256 448H384C384 464.1 377.3 481.3 365.3 493.3C353.3 505.3 336.1 512 320 512z"/>
</>],
['light',<>
	<path d="M378.8 384L419.4 416H140.3C115.8 416 95.1 396.2 95.1 371.7C95.1 359.1 100.7 348.7 108.1 340.4L111.7 337.7C142.6 306.7 159.1 264.8 159.1 221.1V211.2L191.4 236C187.9 282.8 167.7 326.9 134.3 360.3L131.6 363C129.3 365.3 127.1 368.5 127.1 371.7C127.1 378.5 133.5 384 140.3 384H378.8zM303.1 16C303.1 7.164 311.2 0 319.1 0C328.8 0 336 7.164 336 16V32.79C416.9 40.82 480 109 480 192V221.1C480 264.8 497.4 306.7 528.3 337.7L531 340.4C531.8 341.2 532.6 342 533.3 342.9L458.2 283.5C451.5 263.6 448 242.5 448 221.1V191.1C448 121.3 390.7 63.1 319.1 63.1C284.2 63.1 251.9 78.68 228.6 102.3L203.4 82.42C229.2 55.03 264.5 36.71 303.1 32.79L303.1 16zM319.1 480C333.9 480 345.8 471.1 350.2 458.7C353.1 450.3 362.3 445.1 370.6 448.9C378.9 451.9 383.3 461 380.4 469.3C371.6 494.2 347.9 512 319.1 512C292.1 512 268.4 494.2 259.6 469.3C256.7 461 261.1 451.9 269.4 448.9C277.7 445.1 286.9 450.3 289.8 458.7C294.2 471.1 306.1 480 319.1 480zM633.9 483.4C640.9 488.9 642 498.1 636.6 505.9C631.1 512.9 621 514 614.1 508.6L6.086 28.56C-.8493 23.08-2.033 13.02 3.443 6.087C8.918-.849 18.98-2.033 25.91 3.443L633.9 483.4z"/>
</>],
['regular',<>
	<path d="M183.6 118.6C206.5 82.58 244.1 56.84 288 49.88V32C288 14.33 302.3 .0003 320 .0003C337.7 .0003 352 14.33 352 32V49.88C424.5 61.39 480 124.2 480 200V233.4C480 278.8 495.5 322.9 523.8 358.4L538.7 377C543.1 383.5 545.4 392.2 542.6 400L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L183.6 118.6zM221.7 148.4L450.7 327.1C438.4 298.2 432 266.1 432 233.4V200C432 142.6 385.4 96 328 96H312C273.3 96 239.6 117.1 221.7 148.4V148.4zM160 233.4V222.1L206.7 258.9C202.7 297.7 189.5 335.2 168.3 368H345.2L406.2 416H120C110.8 416 102.4 410.7 98.37 402.4C94.37 394.1 95.5 384.2 101.3 377L116.2 358.4C144.5 322.9 160 278.8 160 233.4V233.4zM384 448C384 464.1 377.3 481.3 365.3 493.3C353.3 505.3 336.1 512 320 512C303 512 286.7 505.3 274.7 493.3C262.7 481.3 256 464.1 256 448H384z"/>
</>],
['solid',<>
	<path d="M186 120.5C209 85.38 245.4 59.84 288 51.2V32C288 14.33 302.3 .0003 320 .0003C337.7 .0003 352 14.33 352 32V51.2C425 66.03 480 130.6 480 208V226.8C480 273.9 497.3 319.2 528.5 354.4L535.9 362.7C544.3 372.2 546.4 385.6 541.2 397.1C540.1 397.5 540.8 397.1 540.6 398.4L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L186 120.5zM160 226.8V222.1L406.2 416H128C115.4 416 103.1 408.6 98.81 397.1C93.65 385.6 95.71 372.2 104.1 362.7L111.5 354.4C142.7 319.2 160 273.9 160 226.8V226.8zM320 512C303 512 286.7 505.3 274.7 493.3C262.7 481.3 256 464.1 256 448H384C384 464.1 377.3 481.3 365.3 493.3C353.3 505.3 336.1 512 320 512z"/>
</>],
['thin',<>
	<path d="M386.2 400L406.5 416H127.7C110.2 416 95.1 401.8 95.1 384.3C95.1 377.1 98.45 370.1 102.9 364.5L119.7 343.6C145.8 310.1 159.1 270.4 159.1 228.7V221.4L175.9 233.1C174.8 277.5 159.4 319.5 132.2 353.6L115.4 374.5C113.2 377.3 111.1 380.7 111.1 384.3C111.1 392.1 119 400 127.7 400L386.2 400zM311.1 32V8C311.1 3.582 315.6 0 319.1 0C324.4 0 328 3.582 328 8V32L327.1 32.2C412.6 36.36 480 106.3 480 192V228.6C480 254.4 485.4 279.7 495.7 302.1L471.9 284.2C466.7 266.2 464 247.6 464 228.7V192C464 112.5 399.5 48 319.1 48C282 48 247.5 62.7 221.8 86.71L209.1 76.69C236 50.74 272.1 34.16 312 32.2L311.1 32zM286.1 481.9C295.1 490.9 307.3 496 319.1 496C332.7 496 344.9 490.9 353.9 481.9C362.9 472.9 368 460.7 368 448C368 443.6 371.6 440 376 440C380.4 440 384 443.6 384 448C384 464.1 377.3 481.3 365.3 493.3C353.3 505.3 336.1 512 319.1 512C303 512 286.7 505.3 274.7 493.3C262.7 481.3 255.1 464.1 255.1 448C255.1 443.6 259.6 440 263.1 440C268.4 440 271.1 443.6 271.1 448C271.1 460.7 277.1 472.9 286.1 481.9zM636.1 497.7C640.4 500.5 641 505.5 638.3 508.1C635.5 512.4 630.5 513 627 510.3L3.022 14.26C-.4365 11.51-1.012 6.482 1.738 3.023C4.487-.4358 9.52-1.011 12.98 1.739L636.1 497.7z"/>
</>],

]);

const BellSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BellSlash.displayName = "BellSlash";

export default BellSlash;