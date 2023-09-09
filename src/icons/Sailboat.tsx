
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M5.718 404.3C2.848 394.1 10.52 384 21.12 384H554.9C565.5 384 573.2 394.1 570.3 404.3L566.3 418.7C550.7 473.9 500.4 512 443 512H132.1C75.62 512 25.27 473.9 9.747 418.7L5.718 404.3z"/><path className="fa-secondary" d="M256 16C256 9.018 260.5 2.841 267.2 .7414C273.9-1.358 281.1 1.105 285.1 6.826L509.1 326.8C512.5 331.7 512.9 338.1 510.2 343.4C507.4 348.7 501.1 352 496 352H272C263.2 352 256 344.8 256 336V16zM224 336C224 344.8 216.8 352 208 352H80C74.3 352 69.02 348.1 66.16 344C63.3 339.1 63.28 333 66.11 328.1L194.1 104.1C197.7 97.76 205.1 94.68 212.1 96.54C219.1 98.4 224 104.7 224 112V336z"/>
</>],
['light',<>
	<path d="M509.1 326.8C512.5 331.7 512.9 338.1 510.2 343.4C507.4 348.7 501.1 352 496 352H271.1C263.2 352 255.1 344.8 255.1 336V16C255.1 9.018 260.5 2.841 267.2 .7414C273.8-1.358 281.1 1.105 285.1 6.826L509.1 326.8zM465.3 320L287.1 66.76V320H465.3zM212.1 96.54C219.1 98.4 223.1 104.7 223.1 112V336C223.1 344.8 216.8 352 207.1 352H79.1C74.3 352 69.02 348.1 66.16 344C63.3 339.1 63.28 333 66.11 328.1L194.1 104.1C197.7 97.76 205.1 94.68 212.1 96.54zM107.6 320H191.1V172.3L107.6 320zM554.9 384C565.5 384 573.1 394.1 570.3 404.3L566.3 418.7C550.7 473.9 500.4 512 443 512H132.1C75.62 512 25.27 473.9 9.745 418.7L5.716 404.3C2.846 394.1 10.52 384 21.12 384H554.9zM42.45 416C55.92 454.1 92.07 480 132.1 480H443C483.9 480 520.1 454.1 533.5 416H42.45z"/>
</>],
['regular',<>
	<path d="M508.6 294.2C512.4 299 513.1 305.5 510.4 311C507.7 316.5 502.1 320 496 320H272C263.2 320 256 312.8 256 304V16C256 9.166 260.3 3.086 266.8 .867C273.3-1.351 280.4 .7825 284.6 6.178L508.6 294.2zM212.6 96.69C219.4 98.73 224 104.1 224 112V304C224 312.8 216.8 320 208 320H80C74.1 320 68.68 316.8 65.89 311.6C63.11 306.3 63.41 300 66.69 295.1L194.7 103.1C198.6 97.26 205.9 94.64 212.6 96.69V96.69zM556 352C566.3 352 573.9 361.5 571.6 371.5L562.5 412.1C549.3 470.5 497.5 512 437.6 512H138.4C78.53 512 26.66 470.5 13.52 412.1L4.389 371.5C2.138 361.5 9.746 352 19.1 352H556zM59.1 400L60.35 401.6C68.56 438.1 100.1 464 138.4 464H437.6C475 464 507.4 438.1 515.6 401.6L516 400H59.1z"/>
</>],
['solid',<>
	<path d="M256 16C256 9.018 260.5 2.841 267.2 .7414C273.9-1.358 281.1 1.105 285.1 6.826L509.1 326.8C512.5 331.7 512.9 338.1 510.2 343.4C507.4 348.7 501.1 352 496 352H272C263.2 352 256 344.8 256 336V16zM212.1 96.54C219.1 98.4 224 104.7 224 112V336C224 344.8 216.8 352 208 352H80C74.3 352 69.02 348.1 66.16 344C63.3 339.1 63.28 333 66.11 328.1L194.1 104.1C197.7 97.76 205.1 94.68 212.1 96.54V96.54zM5.718 404.3C2.848 394.1 10.52 384 21.12 384H554.9C565.5 384 573.2 394.1 570.3 404.3L566.3 418.7C550.7 473.9 500.4 512 443 512H132.1C75.62 512 25.27 473.9 9.747 418.7L5.718 404.3z"/>
</>],
['thin',<>
	<path d="M510.5 339.4C512.3 341.8 512.5 344.1 511.1 347.7C509.7 350.3 506.1 352 504 352H263.1C259.6 352 255.1 348.4 255.1 344V8C255.1 4.523 258.2 1.443 261.6 .3822C264.9-.6792 268.5 .5208 270.5 3.351L510.5 339.4zM488.5 336L271.1 32.96V336H488.5zM218.1 96.29C221.6 97.25 223.1 100.4 223.1 104V344C223.1 348.4 220.4 352 215.1 352H71.1C69.12 352 66.46 350.5 65.04 347.9C63.62 345.4 63.66 342.4 65.14 339.9L209.1 99.88C210.1 96.8 214.7 95.33 218.1 96.29H218.1zM86.13 336H207.1V132.9L86.13 336zM554.9 384C565.5 384 573.1 394.1 570.3 404.3L566.3 418.7C550.7 473.9 500.4 512 443 512H132.1C75.62 512 25.27 473.9 9.745 418.7L5.716 404.3C2.846 394.1 10.52 384 21.12 384H554.9zM554.9 400H21.12L25.15 414.3C38.73 462.6 82.79 496 132.1 496H443C493.2 496 537.3 462.6 550.8 414.3L554.9 400z"/>
</>],

]);

const Sailboat: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Sailboat.displayName = "Sailboat";

export default Sailboat;
