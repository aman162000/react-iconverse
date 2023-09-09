
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M273.8 3.734C279.4-1.26 287.1-1.242 293.5 3.773C313.3 21.55 331.8 40.74 349 61.49C356.9 51.61 365.8 40.76 375.5 31.99C381.1 26.87 389.9 26.89 395.5 32.03C420.2 54.71 441.1 84.69 455.8 113.2C470.4 141.2 480 169.9 480 190.1C480 277.9 408.7 352 320 352C230.3 352 160 277.8 160 190.1C160 163.7 172.7 131.5 192.4 99.52C212.4 67.16 240.5 33.43 273.8 3.734V3.734zM320.1 287.1C339 287.1 355 282.1 370 272.1C400 251.1 408 209.1 390 176.1C388 172.1 386 168.1 383 164.1L347 206.1C347 206.1 289 132.1 285 127.1C255 164.1 240 185.1 240 209.1C240 258.1 276 287.1 320.1 287.1z"/><path className="fa-secondary" d="M104 256C117.3 256 128 266.7 128 280C128 293.3 117.3 304 104 304H80V384H560V304H536C522.7 304 512 293.3 512 280C512 266.7 522.7 256 536 256H584C597.3 256 608 266.7 608 280V384C625.7 384 640 398.3 640 416V480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480V416C0 398.3 14.33 384 32 384V280C32 266.7 42.75 256 56 256H104zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM448 480C465.7 480 480 465.7 480 448C480 430.3 465.7 416 448 416C430.3 416 416 430.3 416 448C416 465.7 430.3 480 448 480zM192 416C174.3 416 160 430.3 160 448C160 465.7 174.3 480 192 480C209.7 480 224 465.7 224 448C224 430.3 209.7 416 192 416z"/>
</>],
['light',<>
	<path d="M285.1 95.1C289.9 96.02 294.5 98.22 297.5 102C299.6 104.6 315.1 124.4 330.1 143.5L347.6 165.8L370.9 138.6C374 134.9 378.7 132.8 383.5 133C388.4 133.2 392.9 135.5 395.8 139.4C399.7 144.6 402.2 149.7 404.1 153.5L404.2 153.6C425.5 192.9 416.5 244 379.2 270.1L378.9 270.3C361.3 282 342.3 287.1 320.1 287.1C295.1 287.1 270.8 279.6 252.8 263.2C234.7 246.6 224 222.7 224 193.1C224 178.3 229 164.3 237.4 149.8C245.6 135.7 257.7 120.3 272.6 101.9C275.6 98.16 280.2 95.98 285.1 95.1V95.1zM379.8 177.3L359.1 201.4C356 205.1 351.4 207.1 346.6 206.1C341.9 206.9 337.4 204.6 334.4 200.9L284.9 137.8C276.3 148.8 269.8 157.8 265.1 165.9C258.5 177.2 256 185.7 256 193.1C256 214.3 263.3 229.4 274.4 239.6C285.7 249.9 301.9 255.1 321 255.1C335.7 255.1 348.6 252 360.1 243.8C381.1 229.6 388.8 201.1 379.8 177.3H379.8zM327.5 37.13C334.9 45 342.1 53.12 349 61.49C355.5 53.42 362.6 44.71 370.3 37C371.1 35.27 373.7 33.59 375.5 31.99C381.1 26.87 389.9 26.89 395.5 32.03C420.2 54.71 441.1 84.69 455.8 113.2C470.4 141.2 480 169.9 480 190.1C480 277.9 408.7 352 319.1 352C230.3 352 159.1 277.8 159.1 190.1C159.1 163.7 172.7 131.5 192.4 99.52C212.4 67.16 240.5 33.43 273.8 3.734C279.4-1.26 287.1-1.242 293.5 3.773C305.3 14.38 316.7 25.49 327.5 37.13V37.13zM349.4 93.49C339.8 93.59 330.6 89.36 324.4 81.95C311.6 66.48 297.1 51.92 283.6 38.22C257.6 63.23 235.6 90.47 219.6 116.3C201 146.4 192 172.5 192 190.1C192 260.9 248.7 319.1 320 319.1C390.4 319.1 448 260.8 448 190.1C448 177.7 441.2 154.5 427.4 127.9C416.5 106.8 402.1 85.26 385.6 67.43C381.8 71.79 377.1 76.5 374.1 81.41C368.1 88.94 359 93.38 349.4 93.49L349.4 93.49zM168 448C168 434.7 178.7 424 192 424C205.3 424 216 434.7 216 448C216 461.3 205.3 472 192 472C178.7 472 168 461.3 168 448zM344 448C344 461.3 333.3 472 320 472C306.7 472 296 461.3 296 448C296 434.7 306.7 424 320 424C333.3 424 344 434.7 344 448zM424 448C424 434.7 434.7 424 448 424C461.3 424 472 434.7 472 448C472 461.3 461.3 472 448 472C434.7 472 424 461.3 424 448zM32 271.1C32 263.2 39.16 255.1 48 255.1H112C120.8 255.1 128 263.2 128 271.1C128 280.8 120.8 287.1 112 287.1H64V384H576V287.1H528C519.2 287.1 512 280.8 512 271.1C512 263.2 519.2 255.1 528 255.1H592C600.8 255.1 608 263.2 608 271.1V386.7C626.6 393.3 640 411.1 640 432V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V432C0 411.1 13.36 393.3 32 386.7V271.1zM32 464C32 472.8 39.16 480 48 480H592C600.8 480 608 472.8 608 464V432C608 423.2 600.8 416 592 416H48C39.16 416 32 423.2 32 432V464zM347 190.1L334.4 200.9z"/>
</>],
['regular',<>
	<path d="M349 61.49C356.9 51.61 365.8 40.76 375.5 31.99C381.1 26.87 389.9 26.89 395.5 32.03C420.2 54.71 441.1 84.69 455.8 113.2C470.4 141.2 480 169.9 480 190.1C480 277.9 408.7 352 320 352C230.3 352 160 277.8 160 190.1C160 163.7 172.7 131.5 192.4 99.52C212.4 67.16 240.5 33.43 273.8 3.734C279.4-1.26 287.1-1.242 293.5 3.773C313.3 21.55 331.8 40.74 349 61.49V61.49zM390 176.1C388 172.1 386 168.1 383 164.1L347 206.1C347 206.1 289 132.1 285 127.1C255 164.1 240 185.1 240 209.1C240 258.1 276 287.1 320.1 287.1C339 287.1 355 282.1 370 272.1C400 251.1 408 209.1 390 176.1zM32 279.1C32 266.7 42.75 255.1 56 255.1H104C117.3 255.1 128 266.7 128 279.1C128 293.3 117.3 303.1 104 303.1H80V384H560V303.1H536C522.7 303.1 512 293.3 512 279.1C512 266.7 522.7 255.1 536 255.1H584C597.3 255.1 608 266.7 608 279.1V384C625.7 384 640 398.3 640 416V480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480V416C0 398.3 14.33 384 32 384V279.1zM164.3 464C161.6 459.3 160 453.8 160 448C160 442.2 161.6 436.7 164.3 432H48V464H164.3zM219.7 464H292.3C289.6 459.3 288 453.8 288 448C288 442.2 289.6 436.7 292.3 432H219.7C222.4 436.7 224 442.2 224 448C224 453.8 222.4 459.3 219.7 464zM347.7 464H420.3C417.6 459.3 416 453.8 416 448C416 442.2 417.6 436.7 420.3 432H347.7C350.4 436.7 352 442.2 352 448C352 453.8 350.4 459.3 347.7 464zM592 432H475.7C478.4 436.7 480 442.2 480 448C480 453.8 478.4 459.3 475.7 464H592V432z"/>
</>],
['solid',<>
	<path d="M349 61.49C356.9 51.61 365.8 40.76 375.5 31.99C381.1 26.87 389.9 26.89 395.5 32.03C420.2 54.71 441.1 84.69 455.8 113.2C470.4 141.2 480 169.9 480 190.1C480 277.9 408.7 352 320 352C230.3 352 160 277.8 160 190.1C160 163.7 172.7 131.5 192.4 99.52C212.4 67.16 240.5 33.43 273.8 3.734C279.4-1.26 287.1-1.242 293.5 3.773C313.3 21.55 331.8 40.74 349 61.49V61.49zM390 176.1C388 172.1 386 168.1 383 164.1L347 206.1C347 206.1 289 132.1 285 127.1C255 164.1 240 185.1 240 209.1C240 258.1 276 287.1 320.1 287.1C339 287.1 355 282.1 370 272.1C400 251.1 408 209.1 390 176.1zM32 287.1C32 270.3 46.33 255.1 64 255.1H96C113.7 255.1 128 270.3 128 287.1C128 305.7 113.7 319.1 96 319.1V384H544V319.1C526.3 319.1 512 305.7 512 287.1C512 270.3 526.3 255.1 544 255.1H576C593.7 255.1 608 270.3 608 287.1V384C625.7 384 640 398.3 640 416V480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480V416C0 398.3 14.33 384 32 384V287.1zM320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480zM448 416C430.3 416 416 430.3 416 448C416 465.7 430.3 480 448 480C465.7 480 480 465.7 480 448C480 430.3 465.7 416 448 416zM192 480C209.7 480 224 465.7 224 448C224 430.3 209.7 416 192 416C174.3 416 160 430.3 160 448C160 465.7 174.3 480 192 480z"/>
</>],
['thin',<>
	<path d="M281.7 95.1C284.1 96.01 286.4 97.11 287.9 99C290.1 101.8 307.3 123.6 323.8 144.7L350.3 178.5L383.7 139.6C385.3 137.8 387.6 136.7 390 136.8C392.5 136.9 394.7 138.1 396.2 140C399.9 145 402.4 149.1 404.6 154.3L404.6 154.4C426.1 193.9 416.8 244.8 380 270.5L379.9 270.6C362 282.5 342.9 288.5 321.4 288.5C294.8 288.5 270.5 279.1 252.7 263.7C234.8 247.3 224 223.6 224 194.5C224 179.4 228.8 165.6 237.5 150.6C246.1 135.8 258.9 119.3 275.4 98.96C276.1 97.08 279.3 95.99 281.7 95.1V95.1zM343.8 196.1L311.2 154.6C299.1 140.2 288.5 125.6 281.6 116.8C268.2 133.5 258.2 146.8 251.3 158.6C243.5 172.1 240 183.1 240 194.5C240 219.4 249.1 238.7 263.5 251.9C277.9 265.1 298.2 272.5 321.4 272.5C339.6 272.5 355.7 267.5 370.9 257.4C400.3 236.8 408.6 195.1 390.5 161.9L390.3 161.6C389.8 160.5 389.2 159.4 388.7 158.4L356.1 196.4C354.6 198.2 352.3 199.2 349.9 199.2C347.5 199.1 345.2 197.1 343.8 196.1H343.8zM338.4 49.12C342 53.18 345.6 57.3 349 61.49C352.3 57.39 355.8 53.12 359.4 48.9C364.4 42.96 369.9 37.12 375.5 31.99C381.1 26.87 389.9 26.89 395.5 32.03C420.2 54.71 441.1 84.69 455.8 113.2C470.4 141.2 480 169.9 480 190.1C480 277.9 408.7 352 320 352C230.3 352 160 277.8 160 190.1C160 163.7 172.7 131.5 192.4 99.52C212.4 67.16 240.5 33.43 273.8 3.734C279.4-1.26 287.1-1.242 293.5 3.773C309.3 17.96 324.3 33.05 338.4 49.12V49.12zM349.2 77.49C344.4 77.54 339.8 75.42 336.7 71.72C320.2 51.85 302.5 33.45 283.6 16.38C251.8 44.94 224.1 77.22 206 107.9C186.9 138.1 176 168.1 176 190.1C176 269.4 239.5 336 320 336C399.6 336 464 269.4 464 190.1C464 173.8 455.8 147.9 441.6 120.5C427.7 93.6 408.1 65.6 385.5 44.56C377.1 52.27 369.1 61.91 361.6 71.45C358.6 75.22 354 77.44 349.2 77.49H349.2zM304 448C304 439.2 311.2 432 320 432C328.8 432 336 439.2 336 448C336 456.8 328.8 464 320 464C311.2 464 304 456.8 304 448zM464 448C464 456.8 456.8 464 448 464C439.2 464 432 456.8 432 448C432 439.2 439.2 432 448 432C456.8 432 464 439.2 464 448zM176 448C176 439.2 183.2 432 192 432C200.8 432 208 439.2 208 448C208 456.8 200.8 464 192 464C183.2 464 176 456.8 176 448zM32 263.1C32 259.6 35.58 255.1 40 255.1H88C92.42 255.1 96 259.6 96 263.1C96 268.4 92.42 271.1 88 271.1H48V384H592V271.1H552C547.6 271.1 544 268.4 544 263.1C544 259.6 547.6 255.1 552 255.1H600C604.4 255.1 608 259.6 608 263.1V384C625.7 384 640 398.3 640 416V480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480V416C0 398.3 14.33 384 32 384V263.1zM16 416V480C16 488.8 23.16 496 32 496H608C616.8 496 624 488.8 624 480V416C624 407.2 616.8 400 608 400H32C23.16 400 16 407.2 16 416zM350.1 191.2L343.8 196.1z"/>
</>],

]);

const FireBurner: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FireBurner.displayName = "FireBurner";

export default FireBurner;