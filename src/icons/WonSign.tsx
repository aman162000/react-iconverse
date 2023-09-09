
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M21.88 33.64C38.65 28.05 56.77 37.12 62.36 53.88L155.6 333.6L224.1 56.24C228.5 41.99 241.3 32 256 32C270.7 32 283.5 41.99 287 56.24L356.4 333.6L449.6 53.88C455.2 37.12 473.4 28.05 490.1 33.64C506.9 39.23 515.9 57.35 510.4 74.12L382.4 458.1C377.9 471.6 364.1 480.5 350.8 479.1C336.6 479.4 324.4 469.6 320.1 455.8L256 195.9L191 455.8C187.6 469.6 175.4 479.4 161.2 479.1C147 480.5 134.1 471.6 129.6 458.1L1.643 74.12C-3.946 57.35 5.115 39.23 21.88 33.64V33.64z"/><path className="fa-secondary" d="M72.94 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H51.6L72.94 288zM167 288H140.4L119.1 224H183L167 288zM248.1 224H263L279 288H232.1L248.1 224zM392.9 224L371.6 288H344.1L328.1 224H392.9zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H439.1L460.4 224H480z"/>
</>],
['light',<>
	<path d="M96.74 256H183.4L240.6 43.84C242.4 36.85 248.8 32 256 32C263.2 32 269.6 36.86 271.4 43.84L328.6 256H415.3L480.7 43.3C483.3 34.85 492.3 30.11 500.7 32.71C509.2 35.31 513.9 44.26 511.3 52.71L448.7 256H496C504.8 256 512 263.2 512 272C512 280.8 504.8 288 496 288H438.9L383.3 468.7C381.2 475.5 374.8 480.1 367.7 479.1C360.6 479.9 354.4 475 352.6 468.2L304 288H207.1L159.5 468.2C157.6 475 151.4 479.9 144.3 479.1C137.2 480.1 130.8 475.5 128.7 468.7L73.11 288H16C7.164 288 0 280.8 0 272C0 263.2 7.164 256 16 256H63.26L.7078 52.71C-1.891 44.26 2.849 35.31 11.3 32.71C19.74 30.11 28.69 34.85 31.29 43.3L96.74 256zM106.6 288L142.1 406.3L174.8 288H106.6zM216.6 256H295.4L256 109.5L216.6 256zM337.2 288L369 406.3L405.4 288H337.2z"/>
</>],
['regular',<>
	<path d="M128.9 255.1H183.3L232.7 50.4C235.3 39.61 244.9 32 256 32C267.1 32 276.7 39.61 279.3 50.4L328.7 255.1H383.1L440.9 49.53C444.5 36.77 457.7 29.32 470.5 32.89C483.2 36.46 490.7 49.71 487.1 62.47L432.9 256H488C501.3 256 512 266.7 512 280C512 293.3 501.3 304 488 304H419.5L375.1 462.5C372.2 472.1 362.5 480.2 351.6 479.1C340.6 479.8 331.2 472.2 328.7 461.6L290.8 304H221.2L183.3 461.6C180.8 472.2 171.4 479.8 160.4 479.1C149.5 480.2 139.8 472.1 136.9 462.5L92.52 304H24C10.75 304 0 293.3 0 280C0 266.7 10.75 256 24 256H79.08L24.89 62.47C21.31 49.71 28.76 36.46 41.53 32.89C54.29 29.32 67.54 36.77 71.11 49.53L128.9 255.1zM142.4 303.1L158.2 360.6L171.8 303.1H142.4zM232.7 255.1H279.3L256 158.8L232.7 255.1zM340.2 303.1L353.8 360.6L369.6 303.1H340.2z"/>
</>],
['solid',<>
	<path d="M119.1 224H183L224.1 56.24C228.5 41.99 241.3 32 256 32C270.7 32 283.5 41.99 287 56.24L328.1 224H392.9L449.6 53.88C455.2 37.12 473.4 28.05 490.1 33.64C506.9 39.23 515.9 57.35 510.4 74.12L460.4 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H439.1L382.4 458.1C377.9 471.6 364.1 480.5 350.8 479.1C336.6 479.4 324.4 469.6 320.1 455.8L279 288H232.1L191 455.8C187.6 469.6 175.4 479.4 161.2 479.1C147 480.5 134.1 471.6 129.6 458.1L72.94 288H32C14.33 288 .001 273.7 .001 256C.001 238.3 14.33 224 32 224H51.6L1.643 74.12C-3.946 57.35 5.115 39.23 21.88 33.64C38.65 28.05 56.77 37.12 62.36 53.88L119.1 224zM140.4 288L155.6 333.6L167 288H140.4zM248.1 224H263L256 195.9L248.1 224zM344.1 288L356.4 333.6L371.6 288H344.1z"/>
</>],
['thin',<>
	<path d="M100.4 271.1H187.6L248.3 37.99C249.2 34.46 252.4 32 256 32C259.6 32 262.8 34.46 263.7 37.99L324.4 271.1H411.6L472.3 37.99C473.4 33.72 477.7 31.15 482 32.26C486.3 33.36 488.9 37.73 487.7 42.01L428.1 271.1H504C508.4 271.1 512 275.6 512 279.1C512 284.4 508.4 287.1 504 287.1H423.1L375.7 474C374.8 477.5 371.6 480 368 480C364.4 480 361.2 477.5 360.3 474L312 287.1H199.1L151.7 474C150.8 477.5 147.6 480 144 480C140.4 480 137.2 477.5 136.3 474L88.03 287.1H8C3.582 287.1 0 284.4 0 279.1C0 275.6 3.582 271.1 8 271.1H83.88L24.26 42.01C23.15 37.73 25.72 33.36 29.99 32.26C34.27 31.15 38.64 33.72 39.74 37.99L100.4 271.1zM104.6 287.1L144 440.1L183.4 287.1H104.6zM204.1 271.1H307.9L256 71.88L204.1 271.1zM328.6 287.1L368 440.1L407.4 287.1H328.6z"/>
</>],

]);

const WonSign: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WonSign.displayName = "WonSign";

export default WonSign;