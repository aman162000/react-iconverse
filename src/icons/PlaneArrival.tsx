
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M19.51 52.34L55.07 60.24C65.63 62.59 74.29 70.11 78.09 80.24L95.1 127.1L223.3 165.6L181.8 20.4C178.9 10.18 186.6 .0015 197.2 .0015H237.3C248.8 .0015 259.5 6.237 265.2 16.31L374.2 210.2L481.5 241.8C497.4 246.5 512.2 254.3 525.2 264.7L559.6 292.2C583.7 311.4 577.7 349.5 548.9 360.5C507.7 376.1 462.7 378.5 420.1 367.4L121.7 289.8C110.6 286.9 100.5 281.1 92.4 272.9L9.536 189.4C3.606 183.4 .2707 175.3 .2528 166.9L.0425 67.99C.0208 57.74 9.507 50.11 19.51 52.34V52.34z"/><path className="fa-secondary" d="M192 368C192 385.7 177.7 400 160 400C142.3 400 128 385.7 128 368C128 350.3 142.3 336 160 336C177.7 336 192 350.3 192 368zM0 480C0 462.3 14.33 448 32 448H608C625.7 448 640 462.3 640 480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480zM224 384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384C288 401.7 273.7 416 256 416C238.3 416 224 401.7 224 384z"/>
</>],
['light',<>
	<path d="M413.1 234.2L498.2 257.8C518.7 263.5 537.7 273.7 553.8 287.6L580.4 310.7C611.9 337.8 598.9 389.2 558.3 398.1C526 405.3 492.5 404.3 460.6 395.2L161.8 310.3C156.4 308.8 151.3 306.3 146.8 303L52.13 234.6C39.67 225.6 32.28 211.2 32.25 195.8L32.04 100C31.1 79.52 50.97 64.27 70.98 68.72L105.2 76.31C122.1 80.08 135.7 92.73 140.7 109.4L156.8 162.9L222.6 181.2L182.4 40.79C176.6 20.35 191.1 .0007 213.2 .0007H253.3C270.6 .0007 286.6 9.354 295.1 24.47L413.1 234.2zM213.2 32L269 227.4L131.2 189L110.1 118.6C108.4 113 103.9 108.8 98.21 107.5L64.04 99.95L64.25 195.7C64.26 200.8 66.72 205.7 70.87 208.7L165.5 277.1C167.1 278.2 168.8 279 170.5 279.5L469.4 364.4C496.1 372 524.3 372.9 551.4 366.9C566.3 363.6 571 344.8 559.5 334.9L532.8 311.8C520.3 301 505.5 293.1 489.6 288.7L391.7 261.5L267.2 40.16C264.4 35.12 259.1 32 253.3 32L213.2 32zM624 480C632.8 480 640 487.2 640 496C640 504.8 632.8 512 624 512H16C7.164 512 0 504.8 0 496C0 487.2 7.164 480 16 480H624zM176 368C176 381.3 165.3 392 152 392C138.7 392 128 381.3 128 368C128 354.7 138.7 344 152 344C165.3 344 176 354.7 176 368zM224 400C224 386.7 234.7 376 248 376C261.3 376 272 386.7 272 400C272 413.3 261.3 424 248 424C234.7 424 224 413.3 224 400zM166.2 294.9L161.8 310.3z"/>
</>],
['regular',<>
	<path d="M455.1 394.8L137 310.3C129.6 308.3 122.6 304.8 116.6 300L21.43 224.4C8.079 213.8 .2842 197.7 .248 180.7L.0438 84.59C-.0115 58.53 24.47 39.38 49.75 45.7L77.95 52.75C95.39 57.11 109.7 69.58 116.4 86.28L137.8 139.9L198.6 156.1L167.2 51.49C159.5 25.83 178.7 .001 205.5 .001H246.6C261.1 .001 274.4 7.796 281.5 20.39L385.1 206.1L489.2 233.6C513 239.1 534.9 252 553.1 268.7L584.9 298.1C616 326.7 604.9 378.3 564.7 391.6C529.2 403.3 491.1 404.4 455.1 394.8L455.1 394.8zM520.5 304C508.1 292.6 493.1 284.3 476.8 279.1L354 247.2L241.1 48H216.3L269.2 224.6L102.2 180.1L71.79 104.1C70.84 101.7 68.8 99.94 66.31 99.31L48.07 94.75L48.25 180.6C48.25 183 49.37 185.3 51.27 186.9L146.4 262.4C147.3 263.1 148.3 263.6 149.4 263.9L467.4 348.4C494.5 355.6 523 354.8 549.6 346C555.1 344.2 556.6 337.2 552.4 333.3L520.5 304zM616 464C629.3 464 640 474.7 640 488C640 501.3 629.3 512 616 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H616zM192 368C192 385.7 177.7 400 160 400C142.3 400 128 385.7 128 368C128 350.3 142.3 336 160 336C177.7 336 192 350.3 192 368zM224 400C224 382.3 238.3 368 256 368C273.7 368 288 382.3 288 400C288 417.7 273.7 432 256 432C238.3 432 224 417.7 224 400zM143.2 287.1L149.4 263.9z"/>
</>],
['solid',<>
	<path d="M.2528 166.9L.0426 67.99C.0208 57.74 9.508 50.11 19.51 52.34L55.07 60.24C65.63 62.58 74.29 70.11 78.09 80.24L95.1 127.1L223.3 165.6L181.8 20.4C178.9 10.18 186.6 .001 197.2 .001H237.3C248.8 .001 259.5 6.236 265.2 16.31L374.2 210.2L481.5 241.8C497.4 246.5 512.2 254.3 525.2 264.7L559.6 292.2C583.7 311.4 577.7 349.5 548.9 360.5C507.7 376.1 462.7 378.5 420.1 367.4L121.7 289.8C110.6 286.9 100.5 281.1 92.4 272.9L9.536 189.4C3.606 183.4 .2707 175.3 .2528 166.9V166.9zM608 448C625.7 448 640 462.3 640 480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448H608zM192 368C192 385.7 177.7 400 160 400C142.3 400 128 385.7 128 368C128 350.3 142.3 336 160 336C177.7 336 192 350.3 192 368zM224 384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384C288 401.7 273.7 416 256 416C238.3 416 224 401.7 224 384z"/>
</>],
['thin',<>
	<path d="M19.51 52.34L53.68 59.93C64.99 62.44 74.06 70.87 77.39 81.97L95.1 143.1L228.3 183.1L181.8 20.4C178.9 10.18 186.6 .001 197.2 .001H237.3C248.8 .001 259.5 6.236 265.2 16.31L385 229.3L481.5 257.8C497.4 262.5 512.2 270.3 525.2 280.7L552.6 302.6C577.9 322.8 569.1 363.2 537.8 371.2C503.6 379.9 467.7 379.8 433.4 370.9L121.7 289.8C110.6 286.9 100.5 281.1 92.4 272.9L9.535 189.4C3.605 183.4 .2701 175.3 .2522 166.9L.0419 67.99C.0202 57.74 9.507 50.11 19.51 52.34L19.51 52.34zM83.16 156.9L62.07 86.57C60.4 81.02 55.87 76.8 50.21 75.55L16.04 67.95L16.25 166.9C16.26 171.1 17.93 175.1 20.89 178.1L103.8 261.7C109.8 267.8 117.4 272.1 125.7 274.3L437.5 355.4C469.1 363.7 502.2 363.7 533.9 355.7C552.4 350.9 557.5 327 542.6 315.1L515.2 293.1C503.8 284.1 490.9 277.3 476.9 273.2L374.2 242.9L251.2 24.16C248.4 19.12 243.1 16 237.3 16H197.2L251.7 206.7L83.16 156.9zM632 496C636.4 496 640 499.6 640 504C640 508.4 636.4 512 632 512H8C3.582 512 0 508.4 0 504C0 499.6 3.582 496 8 496H632zM128 368C128 350.3 142.3 336 160 336C177.7 336 192 350.3 192 368C192 385.7 177.7 400 160 400C142.3 400 128 385.7 128 368zM160 384C168.8 384 176 376.8 176 368C176 359.2 168.8 352 160 352C151.2 352 144 359.2 144 368C144 376.8 151.2 384 160 384zM288 384C288 401.7 273.7 416 256 416C238.3 416 224 401.7 224 384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384zM256 368C247.2 368 240 375.2 240 384C240 392.8 247.2 400 256 400C264.8 400 272 392.8 272 384C272 375.2 264.8 368 256 368z"/>
</>],

]);

const PlaneArrival: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PlaneArrival.displayName = "PlaneArrival";

export default PlaneArrival;
