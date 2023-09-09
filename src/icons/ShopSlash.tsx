
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M5.112 9.194C13.29-1.238 28.37-3.067 38.81 5.11L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.194V9.194z"/><path className="fa-secondary" d="M512 375.1V224H576V426.2L512 375.1zM320 225.5V224H384V275.7L320 225.5zM74.13 32.8L81.75 21.37C90.65 8.021 105.6 0 121.7 0H518.3C534.4 0 549.3 8.021 558.2 21.37L633.8 134.7C637.8 140.8 640 147.9 640 155.2C640 175.5 623.5 192 603.2 192H277.3L74.13 32.8zM0 155.2C0 147.9 2.153 140.8 6.188 134.7L20.98 112.5L121.8 192H36.84C16.5 192 .0003 175.5 .0003 155.2H0zM320 384V348.1L384 398.5V464C384 490.5 362.5 512 336 512H112C85.49 512 64 490.5 64 464V224H128V384H320z"/>
</>],
['light',<>
	<path d="M633.9 483.4C640.9 488.9 642 498.1 636.6 505.9C631.1 512.9 621 514 614.1 508.6L6.087 28.56C-.849 23.08-2.033 13.02 3.443 6.086C8.918-.8493 18.98-2.033 25.92 3.443L633.9 483.4zM0 185.8C0 179.4 1.606 173.1 4.67 167.4L34.73 112.3L60.21 132.4L32.76 182.8C32.26 183.7 32 184.7 32 185.8C32 189.2 34.8 192 38.25 192H135.6L176.2 224H96V352H338.3L384 388.1V464C384 490.5 362.5 512 336 512H112C85.49 512 64 490.5 64 464V224H38.25C17.12 224 0 206.9 0 185.8L0 185.8zM112 480H336C344.8 480 352 472.8 352 464V384H96V464C96 472.8 103.2 480 112 480V480zM139.6 32L104.5 4.35C110.7 1.53 117.5 .0006 124.5 .0006H515.5C533.1 .0006 549.2 9.595 557.6 25.02L635.3 167.4C638.4 173.1 640 179.4 640 185.8C640 206.9 622.9 224 601.8 224H576V376.6L544 351.3V224H382.8L342.2 192H601.8C605.2 192 608 189.2 608 185.8C608 184.7 607.7 183.7 607.2 182.8L529.6 40.34C526.7 35.2 521.4 32 515.5 32L139.6 32z"/>
</>],
['regular',<>
	<path d="M76.92 34.98L82.36 25.02C90.77 9.596 106.9 .001 124.5 .001H515.5C533.1 .001 549.2 9.596 557.6 25.02L635.3 167.4C638.4 173.1 640 179.4 640 185.8C640 206.9 622.9 224 601.8 224H576V426.2L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L76.92 34.98zM115.2 65L256.8 176H585.3L515.5 48H124.5L115.2 65zM318.1 224L528 388.5V224H318.1zM.0003 185.8C.0003 179.4 1.606 173.1 4.67 167.4L30.52 120L68.76 150.2L54.68 176H101.5L162.5 224H111.1V320H284.3L384 398.5V472C384 494.1 366.1 512 344 512H103.1C81.91 512 63.1 494.1 63.1 472V224H38.25C17.12 224 0 206.9 0 185.8L.0003 185.8zM336 464V368H112V464H336z"/>
</>],
['solid',<>
	<path d="M74.13 32.8L81.75 21.38C90.65 8.022 105.6 .001 121.7 .001H518.3C534.4 .001 549.3 8.022 558.2 21.38L633.8 134.7C637.8 140.8 640 147.9 640 155.2C640 175.5 623.5 192 603.2 192H277.3L320 225.5V224H384V275.7L512 375.1V224H576V426.2L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L74.13 32.8zM0 155.2C0 147.9 2.153 140.8 6.188 134.7L20.98 112.5L121.8 192H36.84C16.5 192 .0003 175.5 .0003 155.2H0zM320 384V348.1L384 398.5V464C384 490.5 362.5 512 336 512H112C85.49 512 64 490.5 64 464V224H128V384H320z"/>
</>],
['thin',<>
	<path d="M636.1 497.7C640.4 500.5 641 505.5 638.3 508.1C635.5 512.4 630.5 513 627 510.3L3.023 14.26C-.4362 11.51-1.011 6.481 1.738 3.022C4.487-.4365 9.52-1.012 12.98 1.738L636.1 497.7zM0 185.8C0 179.4 1.606 173.1 4.67 167.4L30.84 119.5L43.58 129.5L18.72 175.1C16.93 178.4 16 182 16 185.8C16 198 25.96 208 38.25 208H143L163.3 224H79.1V464C79.1 481.7 94.33 496 111.1 496H336C353.7 496 368 481.7 368 464V385.6L384 398.3V464C384 490.5 362.5 512 336 512H111.1C85.49 512 63.1 490.5 63.1 464V224H38.25C17.12 224 0 206.9 0 185.8H0zM132.2 16L113.5 1.268C117.1 .4352 120.8 .0006 124.5 .0006H515.5C533.1 .0006 549.2 9.595 557.6 25.02L635.3 167.4C638.4 173.1 640 179.4 640 185.8C640 206.9 622.9 224 601.8 224H576V366.4L560 353.7V224H395.7L375.4 208H601.8C614 208 624 198 624 185.8C624 182 623.1 178.4 621.3 175.1L543.6 32.68C537.1 22.4 527.2 16 515.5 16H132.2zM496 486.7L528.1 512H520C506.7 512 496 501.3 496 488V486.7zM512 256V315.8L496 303.2V256C496 251.6 499.6 248 504 248C508.4 248 512 251.6 512 256V256zM303.1 360V335.1L319.1 347.7V360C319.1 373.3 309.3 384 295.1 384H151.1C138.7 384 127.1 373.3 127.1 360V256C127.1 251.6 131.6 248 135.1 248C140.4 248 143.1 251.6 143.1 256V360C143.1 364.4 147.6 368 151.1 368H295.1C300.4 368 303.1 364.4 303.1 360V360z"/>
</>],

]);

const ShopSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ShopSlash.displayName = "ShopSlash";

export default ShopSlash;