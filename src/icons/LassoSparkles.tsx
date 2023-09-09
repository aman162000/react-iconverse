
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M336 0C342.7 0 348.7 4.168 351 10.45L365.7 50.26L405.6 64.99C411.8 67.32 416 73.3 416 80C416 86.7 411.8 92.68 405.6 95.01L365.7 109.7L351 149.6C348.7 155.8 342.7 160 336 160C329.3 160 323.3 155.8 320.1 149.6L306.3 109.7L266.4 95.01C260.2 92.68 256 86.7 256 80C256 73.3 260.2 67.32 266.4 64.99L306.3 50.26L320.1 10.45C323.3 4.168 329.3 0 336 0V0zM496 352C502.7 352 508.7 356.2 511 362.4L525.7 402.3L565.6 416.1C571.8 419.3 576 425.3 576 432C576 438.7 571.8 444.7 565.6 447L525.7 461.7L511 501.6C508.7 507.8 502.7 512 496 512C489.3 512 483.3 507.8 480.1 501.6L466.3 461.7L426.4 447C420.2 444.7 416 438.7 416 432C416 425.3 420.2 419.3 426.4 416.1L466.3 402.3L480.1 362.4C483.3 356.2 489.3 352 496 352z"/><path className="fa-secondary" d="M281.4 25.36L255.3 34.98C240.2 40.58 229.2 53.26 225.4 68.43C132.2 81.97 64 125 64 176C64 237.9 164.3 288 288 288C411.7 288 512 237.9 512 176C512 144.8 486.4 116.5 445.2 96.21C447 91.1 448 85.63 448 80C448 59.92 435.5 41.95 416.7 34.98L390.6 25.36L385 10.24C496.4 34.58 576 99.61 576 176C576 273.2 447.1 352 288 352C274.8 352 261.7 351.5 248.1 350.4C253.6 363.2 256 376.9 256 391C256 457.8 201.8 512 135 512H64C46.33 512 32 497.7 32 480C32 462.3 46.33 448 64 448H135C166.5 448 192 422.5 192 391C192 369.4 179.8 349.7 160.5 340L113.7 316.6L113.9 316.2C44.69 284.1 0 233.2 0 176C0 78.8 128.9 0 288 0C288.9 0 289.8 .0026 290.7 .0077L281.4 25.36z"/>
</>],
['light',<>
	<path d="M336 0C344.8 0 352 7.164 352 16V64H400C408.8 64 416 71.16 416 80C416 88.84 408.8 96 400 96H352V144C352 152.8 344.8 160 336 160C327.2 160 320 152.8 320 144V96H272C263.2 96 256 88.84 256 80C256 71.16 263.2 64 272 64H320V16C320 7.164 327.2 0 336 0zM255.5 1.11C264.5 .4899 272 7.77 272 16.82C272 25.44 265.2 32.48 256.6 33.08C130 41.79 32 102.5 32 175.1C32 223.1 72.22 264.9 134.4 291.2C139.9 293.5 145.6 295.7 151.4 297.8C190.9 311.9 237.8 319.1 288 319.1C429.4 319.1 544 255.5 544 175.1C544 121.7 490.6 74.42 411.7 49.88C404.8 47.76 400 41.51 400 34.34C400 23.94 409.8 16.33 419.7 19.45C512.5 48.68 576 107.8 576 175.1C576 273.2 447.1 352 288 352C265.1 352 242.7 350.4 221.3 347.3C233.3 364.5 240 385.2 240 407C240 464.1 192.1 511.1 135 511.1H48C39.16 511.1 32 504.8 32 495.1C32 487.2 39.16 479.1 48 479.1H135C175.3 479.1 208 447.3 208 407C208 379.4 192.4 354.1 167.6 341.7L132.8 324.3C52.92 292.1 0 238.3 0 175.1C0 85.52 111.7 10.99 255.5 1.11V1.11zM512 416H560C568.8 416 576 423.2 576 432C576 440.8 568.8 448 560 448H512V496C512 504.8 504.8 512 496 512C487.2 512 480 504.8 480 496V448H432C423.2 448 416 440.8 416 432C416 423.2 423.2 416 432 416H480V368C480 359.2 487.2 352 496 352C504.8 352 512 359.2 512 368V416z"/>
</>],
['regular',<>
	<path d="M281.4 25.36L255.3 34.98C246.4 38.28 238.9 44.04 233.5 51.31C127.2 64.47 48 115.3 48 176C48 246.7 155.5 304 288 304C420.5 304 528 246.7 528 176C528 138.1 497.1 104 447.1 80.59L448 80C448 59.92 435.5 41.95 416.7 34.98L390.6 25.36L385 10.24C496.4 34.58 576 99.61 576 176C576 273.2 447.1 352 288 352C273.1 352 258.4 351.3 244.1 349.1C251.8 365.3 256 382.4 256 400.2C256 461.9 205.9 512 144.2 512H56C42.75 512 32 501.3 32 488C32 474.7 42.75 464 56 464H144.2C179.4 464 208 435.4 208 400.2C208 375.3 193.5 352.7 170.9 342.2L126.6 321.8C50.2 290.1 0 236.6 0 176C0 78.8 128.9 0 288 0L290.7 .0077L281.4 25.36zM365.7 50.26L405.6 64.99C411.8 67.32 416 73.31 416 80C416 86.7 411.8 92.68 405.6 95.01L365.7 109.7L351 149.6C348.7 155.8 342.7 160 336 160C329.3 160 323.3 155.8 320.1 149.6L306.3 109.7L266.4 95.01C260.2 92.68 256 86.7 256 80C256 73.31 260.2 67.32 266.4 64.99L306.3 50.26L320.1 10.45C323.3 4.169 329.3 .0003 336 .0003C342.7 .0003 348.7 4.169 351 10.45L365.7 50.26zM496 352C502.7 352 508.7 356.2 511 362.4L525.7 402.3L565.6 416.1C571.8 419.3 576 425.3 576 432C576 438.7 571.8 444.7 565.6 447L525.7 461.7L511 501.6C508.7 507.8 502.7 512 496 512C489.3 512 483.3 507.8 480.1 501.6L466.3 461.7L426.4 447C420.2 444.7 416 438.7 416 432C416 425.3 420.2 419.3 426.4 416.1L466.3 402.3L480.1 362.4C483.3 356.2 489.3 352 496 352z"/>
</>],
['solid',<>
	<path d="M281.4 25.36L255.3 34.98C240.2 40.58 229.2 53.26 225.4 68.43C132.2 81.97 64 125 64 176C64 237.9 164.3 288 288 288C411.7 288 512 237.9 512 176C512 144.8 486.4 116.5 445.2 96.21C447 91.1 448 85.63 448 80C448 59.92 435.5 41.95 416.7 34.98L390.6 25.36L385 10.24C496.4 34.58 576 99.61 576 176C576 273.2 447.1 352 288 352C274.8 352 261.7 351.5 248.1 350.4C253.6 363.2 256 376.9 256 391C256 457.8 201.8 512 135 512H64C46.33 512 32 497.7 32 480C32 462.3 46.33 448 64 448H135C166.5 448 192 422.5 192 391C192 369.4 179.8 349.7 160.5 340L113.7 316.6L113.9 316.2C44.69 284.1 0 233.2 0 176C0 78.8 128.9 0 288 0L290.7 .0077L281.4 25.36zM365.7 50.26L405.6 64.99C411.8 67.32 416 73.31 416 80C416 86.7 411.8 92.68 405.6 95.01L365.7 109.7L351 149.6C348.7 155.8 342.7 160 336 160C329.3 160 323.3 155.8 320.1 149.6L306.3 109.7L266.4 95.01C260.2 92.68 256 86.7 256 80C256 73.31 260.2 67.32 266.4 64.99L306.3 50.26L320.1 10.45C323.3 4.169 329.3 .0006 336 .0006C342.7 .0006 348.7 4.169 351 10.45L365.7 50.26zM496 352C502.7 352 508.7 356.2 511 362.4L525.7 402.3L565.6 416.1C571.8 419.3 576 425.3 576 432C576 438.7 571.8 444.7 565.6 447L525.7 461.7L511 501.6C508.7 507.8 502.7 512 496 512C489.3 512 483.3 507.8 480.1 501.6L466.3 461.7L426.4 447C420.2 444.7 416 438.7 416 432C416 425.3 420.2 419.3 426.4 416.1L466.3 402.3L480.1 362.4C483.3 356.2 489.3 352 496 352z"/>
</>],
['thin',<>
	<path d="M279.1 .0636C284.4-.0103 288 3.578 288 7.997C288 12.41 284.4 15.99 279.1 16.06C133.5 18.56 16 89.21 16 175.1C16 229.9 61.3 277.6 130.7 306.6C136.6 309 142.8 311.4 149 313.6C189.7 327.8 237.2 335.1 288 335.1C438.2 335.1 560 264.4 560 175.1C560 108.9 489.8 51.45 390.2 27.68C386.6 26.82 384 23.59 384 19.87C384 14.8 388.7 11.02 393.6 12.21C500.4 37.95 576 101.6 576 175.1C576 273.2 447.1 351.1 288 351.1C257.6 351.1 228.4 349.1 200.9 343.8C220.4 361.9 232 387.6 232 414.1C232 468.6 188.6 511.1 135 511.1H40C35.58 511.1 32 508.4 32 503.1C32 499.6 35.58 495.1 40 495.1H135C179.7 495.1 216 459.7 216 414.1C216 384.3 198.7 356.3 171.2 342.6L140.5 327.2C56.36 296.5 0 240.3 0 175.1C0 80.43 124.6 2.659 279.1 .063V.0636zM336 7.996C340.4 7.996 344 11.58 344 15.1V71.1H400C404.4 71.1 408 75.58 408 79.1C408 84.41 404.4 87.1 400 87.1H344V143.1C344 148.4 340.4 151.1 336 151.1C331.6 151.1 328 148.4 328 143.1V87.1H272C267.6 87.1 264 84.41 264 79.1C264 75.58 267.6 71.1 272 71.1H328V15.1C328 11.58 331.6 7.996 336 7.996V7.996zM504 423.1H560C564.4 423.1 568 427.6 568 431.1C568 436.4 564.4 439.1 560 439.1H504V495.1C504 500.4 500.4 503.1 496 503.1C491.6 503.1 488 500.4 488 495.1V439.1H432C427.6 439.1 424 436.4 424 431.1C424 427.6 427.6 423.1 432 423.1H488V367.1C488 363.6 491.6 359.1 496 359.1C500.4 359.1 504 363.6 504 367.1V423.1z"/>
</>],

]);

const LassoSparkles: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LassoSparkles.displayName = "LassoSparkles";

export default LassoSparkles;