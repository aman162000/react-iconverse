
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 448v32l32 32h64l32-32l32 32h64l32-32l32 32h64l32-32l32 32h64l32-32v-32H0zM352 80v-64C352 7.25 344.8 0 336 0h-320C7.25 0 0 7.25 0 16V96h336C344.8 96 352 88.75 352 80z"/><path className="fa-secondary" d="M512 378.1V448H0V96h320v64h-48C263.2 160 256 167.2 256 176S263.2 192 271.1 192H320v32h-48C263.2 224 256 231.2 256 240S263.2 256 271.1 256H320l119.2 29.75C481.1 296.5 512 334.8 512 378.1z"/>
</>],
['light',<>
	<path d="M415 247.8L352 232V192c0-17.67-14.33-32-32-32H240C231.2 160 224 167.2 224 176S231.2 192 240 192H320v32H240C231.2 224 224 231.2 224 240S231.2 256 240 256H320l87.25 22.75C450.1 289.5 480 327.8 480 371.9V384H32V128h320c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v434.7c0 8.5 3.322 16.49 9.322 22.49l13.43 13.39C28.75 508.6 36.75 512 45.25 512h37.49c8.488 0 16.63-3.373 22.63-9.375L128 480l22.62 22.62C156.6 508.6 164.8 512 173.3 512h37.49c8.373 0 16.41-3.314 22.34-9.219L256 480l22.62 22.62C284.6 508.6 292.8 512 301.3 512h37.27c8.516 0 16.69-3.371 22.72-9.375L384 480l22.62 22.62C412.6 508.6 420.8 512 429.3 512h37.49c8.5 0 16.5-3.375 22.5-9.375l13.38-13.29C508.6 483.3 512 475.2 512 466.7v-94.76C512 313.2 472 262 415 247.8zM32 32h320v64H32V32zM480 466.8L466.8 480h-37.5l-22.62-22.62C400.6 451.4 392.5 448 384 448s-16.62 3.375-22.62 9.375L338.8 480h-37.5l-22.62-22.62C272.6 451.4 264.5 448 256 448s-16.62 3.375-22.62 9.375L210.8 480h-37.5l-22.62-22.62C144.6 451.4 136.5 448 128 448s-16.62 3.375-22.62 9.375L82.75 480h-37.5L32 466.8V416h448V466.8z"/>
</>],
['regular',<>
	<path d="M414.1 263.7L352 248V144c17.75 0 32-14.25 32-32v-64C384 21.49 362.5 0 336 0h-288C21.49 0 0 21.49 0 48v418.7c0 8.373 3.418 16.55 9.322 22.49L32 512h64l32-32l32 32h64l32-32l32 32h64l32-32l32 32h64l22.63-22.67C508.6 483.3 512 475.2 512 466.7V388C512 329.2 472 278 414.1 263.7zM48 48h288V96h-288V48zM464 416h-416V144h256V192h-64C231.2 192 224 199.2 224 207.1S231.2 224 240 224h64v32h-64C231.2 256 224 263.2 224 272S231.2 288 239.1 288h74.13l89.25 22.25C439.1 319.2 464 351.1 464 387.9V416z"/>
</>],
['solid',<>
	<path d="M0 480l32 32h64l32-32l32 32h64l32-32l32 32h64l32-32l32 32h64l32-32v-32H0V480zM352 80v-64C352 7.25 344.8 0 336 0h-320C7.25 0 0 7.25 0 16V96h336C344.8 96 352 88.75 352 80zM439.2 285.8L320 256h-48C263.2 256 256 248.8 256 240S263.2 224 271.1 224H320V192h-48C263.2 192 256 184.8 256 176S263.2 160 271.1 160H320V128H0v288h512v-37.04C512 334.8 481.1 296.5 439.2 285.8z"/>
</>],
['thin',<>
	<path d="M439.2 285.8L320 256V112c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v434.7c0 8.486 3.32 16.49 9.322 22.49L32 512h64l32-32l32 32h64l32-32l32 32h64l32-32l32 32h64l22.63-22.67C508.6 483.3 512 475.2 512 466.7v-87.79C512 334.9 482 296.4 439.2 285.8zM16 32c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v48C336 88.82 328.8 96 320 96H16V32zM304 112v32H224c-4.422 0-8 3.578-8 8S219.6 160 224 160h80v40H224c-4.422 0-8 3.578-8 8S219.6 216 224 216h80V256H224C219.6 256 216 259.6 216 264S219.6 272 224 272h94.04l117.3 29.27C471.1 310.2 496 342.1 496 378.9V416h-480V112H304zM491.3 478.1L473.4 496h-50.75l-27.31-27.31C392.2 465.6 388.1 464 384 464s-8.189 1.562-11.31 4.686L345.4 496h-50.75l-27.31-27.31C264.2 465.6 260.1 464 256 464s-8.189 1.562-11.31 4.686L217.4 496H166.6l-27.31-27.31C136.2 465.6 132.1 464 128 464s-8.189 1.562-11.31 4.686L89.37 496H38.63l-17.94-17.94C17.66 475 16 471 16 466.7V432h480v34.75C496 471 494.3 475 491.3 478.1z"/>
</>],

]);

const Boot: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Boot.displayName = "Boot";

export default Boot;