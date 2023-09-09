
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M223 296.1C213.7 287.6 213.7 272.4 223 263L303 183C312.4 173.7 327.6 173.7 336.1 183L416.1 263C426.3 272.4 426.3 287.6 416.1 296.1C407.6 306.3 392.4 306.3 383 296.1L344 257.9V392C344 405.3 333.3 416 320 416C306.7 416 296 405.3 296 392V257.9L256.1 296.1C247.6 306.3 232.4 306.3 223 296.1V296.1z"/><path className="fa-secondary" d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM223 263C213.7 272.4 213.7 287.6 223 296.1C232.4 306.3 247.6 306.3 256.1 296.1L296 257.9V392C296 405.3 306.7 416 320 416C333.3 416 344 405.3 344 392V257.9L383 296.1C392.4 306.3 407.6 306.3 416.1 296.1C426.3 287.6 426.3 272.4 416.1 263L336.1 183C327.6 173.7 312.4 173.7 303 183L223 263z"/>
</>],
['light',<>
	<path d="M308.7 164.7C314.9 158.4 325.1 158.4 331.3 164.7L411.3 244.7C417.6 250.9 417.6 261.1 411.3 267.3C405.1 273.6 394.9 273.6 388.7 267.3L336 214.6V368C336 376.8 328.8 384 320 384C311.2 384 304 376.8 304 368V214.6L251.3 267.3C245.1 273.6 234.9 273.6 228.7 267.3C222.4 261.1 222.4 250.9 228.7 244.7L308.7 164.7zM272 32C331.5 32 384.1 61.55 416 106.8C430.5 99.87 446.8 96 464 96C525.9 96 576 146.1 576 208C576 218.7 574.5 228.1 571.7 238.8C612.3 260.2 640 302.9 640 352C640 422.7 582.7 480 512 480H144C64.47 480 0 415.5 0 336C0 273.2 40.15 219.9 96.17 200.1C100.3 106.6 177.4 32 272 32zM272 64C194.6 64 131.5 125 128.1 201.5C127.6 214.6 119.1 225.1 106.8 230.3C63.18 245.7 32 287.2 32 336C32 397.9 82.14 448 144 448H512C565 448 608 405 608 352C608 315.2 587.3 283.2 556.8 267.1C543.4 259.1 536.8 244.5 540.9 229.1C542.9 223 544 215.7 544 208C544 163.8 508.2 128 464 128C451.7 128 440.1 130.8 429.7 135.7C415.7 142.4 398.8 137.9 389.8 125.2C363.7 88.12 320.7 64 272 64V64z"/>
</>],
['regular',<>
	<path d="M303 175C312.4 165.7 327.6 165.7 336.1 175L416.1 255C426.3 264.4 426.3 279.6 416.1 288.1C407.6 298.3 392.4 298.3 383 288.1L344 249.9V384C344 397.3 333.3 408 320 408C306.7 408 296 397.3 296 384V249.9L256.1 288.1C247.6 298.3 232.4 298.3 223 288.1C213.7 279.6 213.7 264.4 223 255L303 175zM144 480C64.47 480 0 415.5 0 336C0 273.3 40.07 219.1 96 200.2V200C96 107.2 171.2 32 264 32C314.9 32 360.4 54.6 391.3 90.31C406.2 83.68 422.6 80 440 80C506.3 80 560 133.7 560 200C560 206.6 559.5 213 558.5 219.3C606.5 240.3 640 288.3 640 344C640 416.4 583.4 475.6 512 479.8V480H144zM264 80C197.7 80 144 133.7 144 200L144 234.1L111.1 245.5C74.64 258.7 48 294.3 48 336C48 389 90.98 432 144 432H506.6L509.2 431.8C555.4 429.2 592 390.8 592 344C592 308 570.4 276.9 539.2 263.3L505.1 248.4L511.1 211.7C511.7 207.9 512 204 512 200C512 160.2 479.8 128 440 128C429.5 128 419.6 130.2 410.8 134.2L378.2 148.7L354.9 121.7C332.8 96.08 300.3 80 263.1 80L264 80z"/>
</>],
['solid',<>
	<path d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM223 263C213.7 272.4 213.7 287.6 223 296.1C232.4 306.3 247.6 306.3 256.1 296.1L296 257.9V392C296 405.3 306.7 416 320 416C333.3 416 344 405.3 344 392V257.9L383 296.1C392.4 306.3 407.6 306.3 416.1 296.1C426.3 287.6 426.3 272.4 416.1 263L336.1 183C327.6 173.7 312.4 173.7 303 183L223 263z"/>
</>],
['thin',<>
	<path d="M314.3 186.3C317.5 183.2 322.5 183.2 325.7 186.3L413.7 274.3C416.8 277.5 416.8 282.5 413.7 285.7C410.5 288.8 405.5 288.8 402.3 285.7L328 211.3V408C328 412.4 324.4 416 320 416C315.6 416 312 412.4 312 408V211.3L237.7 285.7C234.5 288.8 229.5 288.8 226.3 285.7C223.2 282.5 223.2 277.5 226.3 274.3L314.3 186.3zM256 32C309.6 32 356.1 58.31 386 98.71C389.1 103 392 107.5 394.7 112.2C398.2 109.8 401.9 107.7 405.7 105.8C418.5 99.52 432.8 96 448 96C501 96 544 138.1 544 192C544 198.6 543.3 204.1 542.1 211.2C541 216.5 539.5 221.6 537.6 226.6C542.9 227.6 548.1 229 553.1 230.7C603.6 247.9 640 295.7 640 352C640 422.7 582.7 480 512 480H144C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32V32zM528 192C528 147.8 492.2 112 448 112C431.5 112 416.3 116.1 403.6 125.5C399.9 127.9 395.4 128.7 391.1 127.7C386.7 126.7 383 123.1 380.8 120.2C355.9 76.99 309.3 48 256 48C176.5 48 112 112.5 112 192C112 194.5 112.1 196.9 112.2 199.3C112.5 206.4 108.2 212.9 101.5 215.2C51.68 232.7 16 280.2 16 336C16 406.7 73.31 464 144 464H512C573.9 464 624 413.9 624 352C624 297.8 585.5 252.6 534.4 242.2C529.8 241.3 525.8 238.4 523.6 234.2C521.3 230.1 520.1 225.2 522.7 220.8C526.1 211.9 528 202.2 528 192V192z"/>
</>],

]);

const CloudArrowUp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CloudArrowUp.displayName = "CloudArrowUp";

export default CloudArrowUp;