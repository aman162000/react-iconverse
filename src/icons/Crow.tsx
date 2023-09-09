
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M544 87.1V191.1C544 298 458 384 352 384H126.1L51.51 441.4C37.5 452.1 17.41 449.5 6.638 435.5C-4.138 421.5-1.517 401.4 12.49 390.6L368 117.2V88C368 39.4 407.4 0 456 0C504.6 0 544 39.4 544 88V87.1zM456 111.1C469.3 111.1 480 101.3 480 87.1C480 74.74 469.3 63.1 456 63.1C442.7 63.1 432 74.74 432 87.1C432 101.3 442.7 111.1 456 111.1z"/><path className="fa-secondary" d="M544 120V88C544 66.73 536.5 47.22 523.9 32H574C603.4 32 628.1 51.99 636.1 80.48L640 96L544 120zM355.2 383.1C372.2 383.7 388.6 381.2 404.2 376.8L446.2 478.9C451.2 491.1 445.4 505.1 433.1 510.2C420.9 515.2 406.9 509.4 401.8 497.1L355.2 383.1zM259.2 384H311.1L350.2 478.9C355.2 491.1 349.4 505.1 337.1 510.2C324.9 515.2 310.9 509.4 305.8 497.1L259.2 384z"/>
</>],
['light',<>
	<path d="M440 96C440 109.3 429.3 120 416 120C402.7 120 392 109.3 392 96C392 82.75 402.7 72 416 72C429.3 72 440 82.75 440 96zM3.299 409.7C-2.075 402.7-.7434 392.7 6.272 387.3L320 146.1V96C320 42.98 362.1 0 416 0C444.4 0 469.1 12.36 487.6 31.1H560C604.2 31.1 640 67.82 640 111.1L512 143.1V192C512 270.8 464.5 338.5 396.6 368.1L446.8 489.9C450.2 498.1 446.3 507.4 438.1 510.8C429.9 514.2 420.6 510.3 417.2 502.1L366.3 378.4C351.4 382.1 335.1 384 320 384H307.2L350.8 489.9C354.2 498.1 350.3 507.4 342.1 510.8C333.9 514.2 324.6 510.3 321.2 502.1L272.6 384H63.2L25.73 412.7C18.71 418.1 8.672 416.7 3.298 409.7H3.299zM506.5 63.1C510.1 74.01 512 84.78 512 96V111L601.9 88.54C593.7 73.9 577.1 63.1 560 63.1H506.5zM205.9 315.2C268 302.1 313.6 249.1 319.4 187.8L132.7 330.8L205.9 315.2zM480 192V96C480 60.65 451.3 32 416 32C380.7 32 352 60.65 352 96L352 174.4C352 257.5 293.8 329.3 212.5 346.5L186.8 352H320C408.4 352 480 280.4 480 192V192z"/>
</>],
['regular',<>
	<path d="M416 103.1C416 90.74 426.7 79.1 440 79.1C453.3 79.1 464 90.74 464 103.1C464 117.3 453.3 127.1 440 127.1C426.7 127.1 416 117.3 416 103.1zM111.2 384L39.17 442.6C28.89 450.1 13.75 449.4 5.386 439.2C-2.982 428.9-1.431 413.8 8.849 405.4L336 139.1V104C336 46.56 382.6 0 440 0C469.5 0 496.1 12.28 515 32H558C596.8 32 630.6 58.39 640 96L544 120V192C544 279.1 484.9 354.1 404.2 376.8L446.2 478.9C451.2 491.1 445.4 505.1 433.1 510.2C420.9 515.2 406.9 509.4 401.8 497.1L355.2 383.1C354.1 383.1 353.1 384 352 384H311.1L350.2 478.9C355.2 491.1 349.4 505.1 337.1 510.2C324.9 515.2 310.9 509.4 305.8 497.1L259.2 384L111.2 384zM352 336C431.5 336 496 271.5 496 191.1V103.1C496 73.07 470.9 47.1 440 47.1C409.1 47.1 384 73.07 384 103.1V161.9L170.1 336H352zM360 127.1C373.3 127.1 384 138.7 384 151.1V175.2C384 261.7 323.8 336.5 239.3 354.1L109.1 383.4L98.87 336.6L229.1 308.1C291.5 294.4 336 239.1 336 175.2V151.1C336 138.7 346.7 127.1 360 127.1H360z"/>
</>],
['solid',<>
	<path d="M523.9 31.1H574C603.4 31.1 628.1 51.99 636.1 80.48L640 95.1L544 119.1V191.1C544 279.1 484.9 354.1 404.2 376.8L446.2 478.9C451.2 491.1 445.4 505.1 433.1 510.2C420.9 515.2 406.9 509.4 401.8 497.1L355.2 383.1C354.1 383.1 353.1 384 352 384H311.1L350.2 478.9C355.2 491.1 349.4 505.1 337.1 510.2C324.9 515.2 310.9 509.4 305.8 497.1L259.2 384H126.1L51.51 441.4C37.5 452.1 17.41 449.5 6.638 435.5C-4.138 421.5-1.517 401.4 12.49 390.6L368 117.2V88C368 39.4 407.4 0 456 0C483.3 0 507.7 12.46 523.9 32V31.1zM456 111.1C469.3 111.1 480 101.3 480 87.1C480 74.74 469.3 63.1 456 63.1C442.7 63.1 432 74.74 432 87.1C432 101.3 442.7 111.1 456 111.1z"/>
</>],
['thin',<>
	<path d="M424 96C424 87.16 431.2 80 440 80C448.8 80 456 87.16 456 96C456 104.8 448.8 112 440 112C431.2 112 424 104.8 424 96zM352 88C352 39.4 391.4 0 440 0C474.2 0 503.8 19.51 518.4 48H568C607.8 48 640 80.24 640 120L528 148V192C528 277.3 472.4 349.6 395.4 374.6L447.4 500.1C449.1 505 447.1 509.7 443 511.4C438.1 513.1 434.3 511.1 432.6 507L379.9 378.1C365.8 382.3 351.1 384 336 384H303.2L351.4 500.1C353.1 505 351.1 509.7 347 511.4C342.1 513.1 338.3 511.1 336.6 507L285.9 384H136.1L10.11 415.7C6.996 416.6 3.542 415.5 1.531 412.7C-1.068 409.1-.278 404.1 3.295 401.5L352 147.9L352 88zM528 131.5L622.7 107.8C617.1 82.76 594.8 64 568 64H524.7C526.8 71.63 528 79.68 528 88V131.5zM512 192V88C512 48.24 479.8 16 440 16C400.2 16 368 48.24 368 88V176C368 264.3 307.9 341.3 222.2 362.7L200.1 368H336C433.2 368 512 289.2 512 192H512zM218.4 347.2C296.9 327.5 352 256.1 352 176V167.7L46 390.3L218.4 347.2z"/>
</>],

]);

const Crow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Crow.displayName = "Crow";

export default Crow;