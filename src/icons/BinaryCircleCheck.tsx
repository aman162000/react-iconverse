
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3z"/><path className="fa-secondary" d="M336 160H352C369.7 160 384 174.3 384 192C384 209.7 369.7 224 352 224H256C238.3 224 224 209.7 224 192C224 174.3 238.3 160 256 160H272V76.4L266.1 78.36C249.4 83.95 231.2 74.89 225.7 58.12C220.1 41.35 229.1 23.23 245.9 17.64L293.9 1.642C303.6-1.61 314.4 .0261 322.7 6.04C331.1 12.05 336 21.71 336 32L336 160zM112 448H128C145.7 448 160 462.3 160 480C160 497.7 145.7 512 128 512H32.01C14.34 512 .0086 497.7 .0086 480C.0086 462.3 14.34 448 32.01 448H48.01V364.4L42.13 366.4C25.36 371.9 7.24 362.9 1.651 346.1C-3.938 329.4 5.123 311.2 21.89 305.6L69.89 289.6C79.65 286.4 90.38 288 98.72 294C107.1 300.1 112 309.7 112 320L112 448zM.0086 64C.0086 28.65 28.66 .0001 64.01 .0001H128C163.4 .0001 192 28.65 192 64V160C192 195.3 163.4 224 128 224H64.01C28.66 224 .0086 195.3 .0086 160V64zM128 64H64.01V160H128V64zM320 288C323.4 288 326.7 288.3 329.9 288.8C320.6 308.2 314.6 329.5 312.7 352H256V448L330.3 448C338.7 465.5 349.8 481.4 363.1 495.3C351.8 505.7 336.6 512 320 512H256C220.7 512 192 483.3 192 448V352C192 316.7 220.7 288 256 288H320z"/>
</>],
['light',<>
	<path d="M320 192H368C376.8 192 384 199.2 384 208C384 216.8 376.8 224 368 224H240C231.2 224 224 216.8 224 208C224 199.2 231.2 192 240 192H288V38.2L261.1 47.18C252.7 49.97 243.6 45.44 240.8 37.06C238 28.68 242.6 19.62 250.9 16.82L298.9 .8212C303.8-.8051 309.2 .0128 313.4 3.02C317.5 6.028 320 10.86 320 16V192zM96 480H144C152.8 480 160 487.2 160 496C160 504.8 152.8 512 144 512H16C7.164 512 0 504.8 0 496C0 487.2 7.164 480 16 480H64V326.2L37.06 335.2C28.68 337.1 19.62 333.4 16.82 325.1C14.03 316.7 18.56 307.6 26.94 304.8L74.94 288.8C79.82 287.2 85.18 288 89.36 291C93.53 294 95.1 298.9 95.1 304L96 480zM0 80C0 35.82 35.82 .0004 80 .0004H112C156.2 .0004 192 35.82 192 80V144C192 188.2 156.2 224 112 224H80C35.82 224 0 188.2 0 144V80zM80 32C53.49 32 32 53.49 32 80V144C32 170.5 53.49 192 80 192H112C138.5 192 160 170.5 160 144V80C160 53.49 138.5 32 112 32H80zM304 288C312.5 288 320.8 289.3 328.5 291.8C324.1 301.5 320.5 311.6 317.8 322C313.4 320.7 308.8 320 304 320H272C245.5 320 224 341.5 224 368V432C224 458.5 245.5 480 272 480H304C317.1 480 330.5 474 339.3 464.5C344.1 473.7 351.5 482.4 358.6 490.4C344.3 503.8 325.1 512 304 512H272C227.8 512 192 476.2 192 432V368C192 323.8 227.8 288 272 288H304zM563.3 324.7C569.6 330.9 569.6 341.1 563.3 347.3L491.3 419.3C485.1 425.6 474.9 425.6 468.7 419.3L428.7 379.3C422.4 373.1 422.4 362.9 428.7 356.7C434.9 350.4 445.1 350.4 451.3 356.7L480 385.4L540.7 324.7C546.9 318.4 557.1 318.4 563.3 324.7H563.3zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 480C557.9 480 608 429.9 608 368C608 306.1 557.9 256 496 256C434.1 256 384 306.1 384 368C384 429.9 434.1 480 496 480z"/>
</>],
['regular',<>
	<path d="M328 176H360C373.3 176 384 186.7 384 200C384 213.3 373.3 224 360 224H248C234.7 224 224 213.3 224 200C224 186.7 234.7 176 248 176H280V57.3L263.6 62.77C251 66.96 237.4 60.16 233.2 47.59C229 35.01 235.8 21.42 248.4 17.23L296.4 1.232C303.7-1.208 311.8 .0196 318 4.53C324.3 9.041 328 16.29 328 24V176zM104 464H136C149.3 464 160 474.7 160 488C160 501.3 149.3 512 136 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H56V345.3L39.59 350.8C27.01 354.1 13.42 348.2 9.232 335.6C5.04 323 11.84 309.4 24.41 305.2L72.41 289.2C79.73 286.8 87.77 288 94.03 292.5C100.3 297 104 304.3 104 312V464zM0 72C0 32.24 32.24 .0001 72 .0001H120C159.8 .0001 192 32.24 192 72V152C192 191.8 159.8 224 120 224H72C32.24 224 0 191.8 0 152V72zM72 48C58.75 48 48 58.75 48 72V152C48 165.3 58.75 176 72 176H120C133.3 176 144 165.3 144 152V72C144 58.75 133.3 48 120 48H72zM312 288C317.1 288 323.7 288.7 329.3 290.1C322.5 304.5 317.6 319.1 314.7 336.2C313.8 336.1 312.9 336 312 336H264C250.7 336 240 346.7 240 360V440C240 453.3 250.7 464 264 464H312C320.7 464 328.3 459.4 332.5 452.5C340.1 467.2 349.7 480.8 360.9 492.9C348 504.7 330.9 512 312 512H264C224.2 512 192 479.8 192 440V360C192 320.2 224.2 288 264 288H312zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 223.1 496 223.1C575.5 223.1 640 288.5 640 368zM540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7H540.7z"/>
</>],
['solid',<>
	<path d="M322.7 6.04C331.1 12.05 336 21.71 336 32V160H352C369.7 160 384 174.3 384 192C384 209.7 369.7 224 352 224H256C238.3 224 224 209.7 224 192C224 174.3 238.3 160 256 160H272V76.4L266.1 78.36C249.4 83.95 231.2 74.89 225.7 58.12C220.1 41.35 229.1 23.23 245.9 17.64L293.9 1.642C303.6-1.61 314.4 .0261 322.7 6.04H322.7zM98.72 294C107.1 300.1 112 309.7 112 320V448H128C145.7 448 160 462.3 160 480C160 497.7 145.7 512 128 512H32.01C14.34 512 .0086 497.7 .0086 480C.0086 462.3 14.34 448 32.01 448H48.01V364.4L42.13 366.4C25.36 371.9 7.24 362.9 1.651 346.1C-3.938 329.4 5.123 311.2 21.89 305.6L69.89 289.6C79.65 286.4 90.38 288 98.72 294L98.72 294zM128 .0001C163.4 .0001 192 28.65 192 64V160C192 195.3 163.4 224 128 224H64.01C28.66 224 .0086 195.3 .0086 160V64C.0086 28.65 28.66 .0001 64.01 .0001H128zM64.01 160H128V64H64.01V160zM192 352C192 316.7 220.7 288 256 288H320C323.4 288 326.7 288.3 329.9 288.8C320.6 308.2 314.6 329.5 312.7 352H256V448L330.3 448C338.7 465.5 349.8 481.4 363.1 495.3C351.8 505.7 336.6 512 320 512H256C220.7 512 192 483.3 192 448L192 352zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 223.1 496 223.1C575.5 223.1 640 288.5 640 368zM540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7H540.7z"/>
</>],
['thin',<>
	<path d="M312 208H376C380.4 208 384 211.6 384 216C384 220.4 380.4 224 376 224H232C227.6 224 224 220.4 224 216C224 211.6 227.6 208 232 208H296V19.54L242.8 39.49C238.7 41.04 234.1 38.95 232.5 34.81C230.1 30.67 233.1 26.06 237.2 24.51L301.2 .5094C303.6-.4118 306.4-.0698 308.6 1.425C310.7 2.919 312 5.376 312 8V208zM88 496H152C156.4 496 160 499.6 160 504C160 508.4 156.4 512 152 512H8C3.582 512 0 508.4 0 504C0 499.6 3.582 496 8 496H72V307.5L18.81 327.5C14.67 329 10.06 326.9 8.509 322.8C6.958 318.7 9.054 314.1 13.19 312.5L77.19 288.5C79.65 287.6 82.4 287.9 84.56 289.4C86.71 290.9 88 293.4 88 296V496zM16 64C16 28.65 44.65 0 80 0H112C147.3 0 176 28.65 176 64V160C176 195.3 147.3 224 112 224H80C44.65 224 16 195.3 16 160V64zM80 16C53.49 16 32 37.49 32 64V160C32 186.5 53.49 208 80 208H112C138.5 208 160 186.5 160 160V64C160 37.49 138.5 16 112 16H80zM304 288C312.5 288 320.6 289.7 328.1 292.7C325.9 297.5 323.9 302.5 322.2 307.6C316.6 305.3 310.4 304 304 304H272C245.5 304 224 325.5 224 352V448C224 474.5 245.5 496 272 496H304C321.3 496 336.5 486.8 344.9 473.1C348.1 477.7 351.6 482.1 355.2 486.4C343.5 501.1 324.9 512 304 512H272C236.7 512 208 483.3 208 448V352C208 316.7 236.7 288 272 288H304zM565.7 322.3C568.8 325.5 568.8 330.5 565.7 333.7L485.7 413.7C482.5 416.8 477.5 416.8 474.3 413.7L426.3 365.7C423.2 362.5 423.2 357.5 426.3 354.3C429.5 351.2 434.5 351.2 437.7 354.3L480 396.7L554.3 322.3C557.5 319.2 562.5 319.2 565.7 322.3H565.7zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 496C566.7 496 624 438.7 624 368C624 297.3 566.7 240 496 240C425.3 240 368 297.3 368 368C368 438.7 425.3 496 496 496z"/>
</>],

]);

const BinaryCircleCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BinaryCircleCheck.displayName = "BinaryCircleCheck";

export default BinaryCircleCheck;