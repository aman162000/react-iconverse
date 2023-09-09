
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 192C0 174.3 14.33 160 32 160H84.5L106.8 96.29C120.3 57.78 156.6 32 197.4 32H378.6C419.4 32 455.7 57.78 469.2 96.29L491.5 160H544C561.7 160 576 174.3 576 192C576 209.7 561.7 224 544 224H535.4C540.9 233.4 544 244.3 544 256V400H32V256C32 244.3 35.12 233.4 40.56 224H32C14.33 224 0 209.7 0 192zM141.1 192H434.9L408.8 117.4C404.3 104.6 392.2 96 378.6 96H197.4C183.8 96 171.7 104.6 167.2 117.4L141.1 192zM128 256C110.3 256 96 270.3 96 288C96 305.7 110.3 320 128 320C145.7 320 160 305.7 160 288C160 270.3 145.7 256 128 256zM448 320C465.7 320 480 305.7 480 288C480 270.3 465.7 256 448 256C430.3 256 416 270.3 416 288C416 305.7 430.3 320 448 320z"/><path className="fa-secondary" d="M378.6 96C392.2 96 404.3 104.6 408.8 117.4L434.9 192H141.1L167.2 117.4C171.7 104.6 183.8 96 197.4 96H378.6zM32 400H128V448C128 465.7 113.7 480 96 480H64C46.33 480 32 465.7 32 448V400zM544 448C544 465.7 529.7 480 512 480H480C462.3 480 448 465.7 448 448V400H544V448z"/>
</>],
['light',<>
	<path d="M160 296C160 309.3 149.3 320 136 320C122.7 320 112 309.3 112 296C112 282.7 122.7 272 136 272C149.3 272 160 282.7 160 296zM416 296C416 282.7 426.7 272 440 272C453.3 272 464 282.7 464 296C464 309.3 453.3 320 440 320C426.7 320 416 309.3 416 296zM56.44 224H32C23.16 224 16 216.8 16 208C16 199.2 23.16 192 32 192H84.1L114.1 89.01C125.1 55.17 156.3 32 191.6 32H384.4C419.7 32 450.9 55.17 461 89.01L491.9 192H544C552.8 192 560 199.2 560 208C560 216.8 552.8 224 544 224H519.6C534.8 240.1 544 263.4 544 288V464C544 472.8 536.8 480 528 480C519.2 480 512 472.8 512 464V416H64V464C64 472.8 56.84 480 48 480C39.16 480 32 472.8 32 464V288C32 263.4 41.24 240.1 56.44 224zM191.6 64C170.4 64 151.7 77.9 145.6 98.21L117.3 192.6C120.8 192.2 124.4 192 128 192H448C451.6 192 455.2 192.2 458.7 192.6L430.4 98.21C424.3 77.9 405.6 64 384.4 64H191.6zM106.7 227.9L106.3 227.8C81.62 236.7 64 260.3 64 288V384H512V288C512 260.3 494.4 236.7 469.7 227.8L469.3 227.9L469.2 227.6C462.5 225.3 455.4 224 448 224H128C120.6 224 113.5 225.3 106.8 227.6L106.7 227.9z"/>
</>],
['regular',<>
	<path d="M176 288C176 305.7 161.7 320 144 320C126.3 320 112 305.7 112 288C112 270.3 126.3 256 144 256C161.7 256 176 270.3 176 288zM400 288C400 270.3 414.3 256 432 256C449.7 256 464 270.3 464 288C464 305.7 449.7 320 432 320C414.3 320 400 305.7 400 288zM44.84 224H40C26.75 224 16 213.3 16 200C16 186.7 26.75 176 40 176H84.57L114.3 90.93C126.7 55.63 160 32 197.4 32H378.6C415.1 32 449.3 55.63 461.7 90.93L491.4 176H536C549.3 176 560 186.7 560 200C560 213.3 549.3 224 536 224H531.2C539.3 238.1 544 254.5 544 272V456C544 469.3 533.3 480 520 480C506.7 480 496 469.3 496 456V400H80V456C80 469.3 69.25 480 56 480C42.75 480 32 469.3 32 456V272C32 254.5 36.67 238.1 44.84 224zM197.4 80C180.4 80 165.3 90.74 159.7 106.8L135.4 176H440.6L416.3 106.8C410.7 90.74 395.6 80 378.6 80H197.4zM80 272V352H496V272C496 245.5 474.5 224 448 224H128C101.5 224 80 245.5 80 272z"/>
</>],
['solid',<>
	<path d="M0 192C0 174.3 14.33 160 32 160H84.5L106.8 96.29C120.3 57.78 156.6 32 197.4 32H378.6C419.4 32 455.7 57.78 469.2 96.29L491.5 160H544C561.7 160 576 174.3 576 192C576 209.7 561.7 224 544 224H535.4C540.9 233.4 544 244.3 544 256V448C544 465.7 529.7 480 512 480H480C462.3 480 448 465.7 448 448V400H128V448C128 465.7 113.7 480 96 480H64C46.33 480 32 465.7 32 448V256C32 244.3 35.12 233.4 40.56 224H32C14.33 224 0 209.7 0 192zM141.1 192H434.9L408.8 117.4C404.3 104.6 392.2 96 378.6 96H197.4C183.8 96 171.7 104.6 167.2 117.4L141.1 192zM128 256C110.3 256 96 270.3 96 288C96 305.7 110.3 320 128 320C145.7 320 160 305.7 160 288C160 270.3 145.7 256 128 256zM448 320C465.7 320 480 305.7 480 288C480 270.3 465.7 256 448 256C430.3 256 416 270.3 416 288C416 305.7 430.3 320 448 320z"/>
</>],
['thin',<>
	<path d="M160 288C160 305.7 145.7 320 128 320C110.3 320 96 305.7 96 288C96 270.3 110.3 256 128 256C145.7 256 160 270.3 160 288zM128 272C119.2 272 112 279.2 112 288C112 296.8 119.2 304 128 304C136.8 304 144 296.8 144 288C144 279.2 136.8 272 128 272zM416 288C416 270.3 430.3 256 448 256C465.7 256 480 270.3 480 288C480 305.7 465.7 320 448 320C430.3 320 416 305.7 416 288zM448 304C456.8 304 464 296.8 464 288C464 279.2 456.8 272 448 272C439.2 272 432 279.2 432 288C432 296.8 439.2 304 448 304zM192.3 32H383.7C415.9 32 444.1 53.31 452.1 84.22L479.4 176.8C486.7 166.6 498.6 160 512 160H552C565.3 160 576 170.7 576 184V200C576 213.3 565.3 224 552 224H519.6C534.8 240.1 544 263.4 544 288V472C544 476.4 540.4 480 536 480C531.6 480 528 476.4 528 472V400H48V472C48 476.4 44.42 480 40 480C35.58 480 32 476.4 32 472V288C32 263.4 41.24 240.1 56.44 224H24C10.75 224 0 213.3 0 200V184C0 170.7 10.75 160 24 160H64C77.44 160 89.34 166.6 96.59 176.8L123 84.22C131.9 53.31 160.1 32 192.3 32H192.3zM108.3 194C114.7 192.7 121.3 192 128 192H448C454.7 192 461.3 192.7 467.7 194L437.6 88.62C430.7 64.57 408.7 48 383.7 48H192.3C167.3 48 145.3 64.57 138.4 88.62L108.3 194zM64 176H24C19.58 176 16 179.6 16 184V200C16 204.4 19.58 208 24 208H74.92C79.06 205.2 83.43 202.8 88 200.7V200C88 186.7 77.25 176 64 176zM488 200.7C492.6 202.8 496.9 205.2 501.1 208H552C556.4 208 560 204.4 560 200V184C560 179.6 556.4 176 552 176H512C498.7 176 488 186.7 488 200V200.7zM496 223.1C482.6 213.1 466 208 448 208H128C109.1 208 93.37 213.1 80 223.1C60.57 238.6 48 261.8 48 288V384H528V288C528 261.8 515.4 238.6 496 223.1z"/>
</>],

]);

const CarMirrors: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CarMirrors.displayName = "CarMirrors";

export default CarMirrors;