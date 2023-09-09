
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 96c26.5 0 48-21.5 48-48S282.5 0 256 0S208 21.5 208 48S229.5 96 256 96zM152.6 276.5l31.38-37.75L184 416h64v-96h16v96h64l.0065-177.3l31.38 37.75c11.38 13.5 31.5 15.38 45.13 4.125c13.5-11.38 15.38-31.5 4.125-45.13l-70.5-84.5C326 136.4 308 128 289 128h-66c-19 0-37 8.375-49.12 23l-70.5 84.5c-11.25 13.62-9.5 33.75 4.125 45.13C121.1 291.9 141.3 290 152.6 276.5zM384 448H128c-17.62 0-32 14.38-32 32v32h320v-32C416 462.4 401.6 448 384 448z"/><path className="fa-secondary" d="M509.8 44.38L480 32l-12.38-29.75C466.9 .875 465.5 0 464 0s-2.875 .875-3.625 2.25L448 32l-29.75 12.38C416.9 45.13 416 46.5 416 48s.875 2.875 2.25 3.625L448 64l12.38 29.75C461.1 95.13 462.5 96 464 96s2.875-.875 3.625-2.25L480 64l29.75-12.38C511.1 50.88 512 49.5 512 48S511.1 45.13 509.8 44.38zM64 96L51.63 66.25C50.88 64.88 49.5 64 48 64S45.13 64.88 44.38 66.25L32 96L2.25 108.4C.875 109.1 0 110.5 0 112s.875 2.875 2.25 3.625L32 128l12.38 29.75C45.13 159.1 46.5 160 48 160s2.875-.875 3.625-2.25L64 128l29.75-12.38C95.13 114.9 96 113.5 96 112S95.13 109.1 93.75 108.4L64 96z"/>
</>],
['light',<>
	<path d="M124.3 282.3l51.22-61.47C180.3 215 185.1 210.4 192 206.3V400C192 408.8 199.2 416 208 416S224 408.8 224 400V193.4C228.3 192.7 232.6 192 236.1 192h38.06C279.4 192 283.7 192.7 288 193.4V400c0 8.844 7.156 16 16 16s16-7.156 16-16V206.3c6.023 4.125 11.7 8.791 16.48 14.54l51.22 61.45C390.9 286 395.4 288 400 288c3.609 0 7.234-1.219 10.23-3.703c6.781-5.656 7.703-15.75 2.047-22.55l-51.22-61.44C339.7 174.7 308.4 160 275 160H236.1C203.6 160 172.3 174.7 150.9 200.3L99.7 261.8c-5.656 6.797-4.734 16.89 2.047 22.55C108.6 289.9 118.7 289 124.3 282.3zM256 128c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64S192 28.65 192 64C192 99.35 220.7 128 256 128zM256 32c17.64 0 32 14.36 32 32s-14.36 32-32 32S224 81.64 224 64S238.4 32 256 32zM80 96H64V80C64 71.16 56.84 64 48 64S32 71.16 32 80V96H16C7.156 96 0 103.2 0 112S7.156 128 16 128H32v16C32 152.8 39.16 160 48 160S64 152.8 64 144V128h16C88.84 128 96 120.8 96 112S88.84 96 80 96zM496 32H480V16C480 7.156 472.8 0 464 0S448 7.156 448 16V32h-16C423.2 32 416 39.16 416 48S423.2 64 432 64H448v16C448 88.84 455.2 96 464 96S480 88.84 480 80V64h16C504.8 64 512 56.84 512 48S504.8 32 496 32zM368 448h-224C117.5 448 96 469.5 96 496C96 504.8 103.2 512 112 512S128 504.8 128 496C128 487.2 135.2 480 144 480h224c8.828 0 16 7.172 16 16c0 8.844 7.156 16 16 16s16-7.156 16-16C416 469.5 394.5 448 368 448z"/>
</>],
['regular',<>
	<path d="M256 96c26.5 0 48-21.5 48-48S282.5 0 256 0S208 21.5 208 48S229.5 96 256 96zM93.75 108.4L64 96L51.63 66.25C50.88 64.88 49.5 64 48 64S45.13 64.88 44.38 66.25L32 96L2.25 108.4C.875 109.1 0 110.5 0 112s.875 2.875 2.25 3.625L32 128l12.38 29.75C45.13 159.1 46.5 160 48 160s2.875-.875 3.625-2.25L64 128l29.75-12.38C95.13 114.9 96 113.5 96 112S95.13 109.1 93.75 108.4zM509.8 44.38L480 32l-12.38-29.75C466.9 .875 465.5 0 464 0s-2.875 .875-3.625 2.25L448 32l-29.75 12.38C416.9 45.13 416 46.5 416 48s.875 2.875 2.25 3.625L448 64l12.38 29.75C461.1 95.13 462.5 96 464 96s2.875-.875 3.625-2.25L480 64l29.75-12.38C511.1 50.88 512 49.5 512 48S511.1 45.13 509.8 44.38zM392 464H320V211.3l53.13 67.63c8.25 10.38 23.25 12.12 33.75 4c10.38-8.25 12.12-23.25 4-33.75L332.5 149.4C321.9 135.9 305.7 128 288.5 128H223.5C206.3 128 190.1 135.9 179.5 149.4L101.1 249.1c-8.25 10.5-6.375 25.5 4 33.75c10.5 8.125 25.5 6.375 33.75-4L192 211.3V464H120C106.7 464 96 474.7 96 488C96 501.3 106.7 512 120 512h272c13.25 0 24-10.75 24-24C416 474.7 405.3 464 392 464zM264 464h-16V320h16V464z"/>
</>],
['solid',<>
	<path d="M152.6 276.5l31.38-37.75L184 416h64v-96h16v96h64l.0065-177.3l31.38 37.75c11.38 13.5 31.5 15.38 45.13 4.125c13.5-11.38 15.38-31.5 4.125-45.13l-70.5-84.5C326 136.4 308 128 289 128h-66c-19 0-37 8.375-49.12 23l-70.5 84.5c-11.25 13.62-9.5 33.75 4.125 45.13C121.1 291.9 141.3 290 152.6 276.5zM93.75 108.4L64 96L51.63 66.25C50.88 64.88 49.5 64 48 64S45.13 64.88 44.38 66.25L32 96L2.25 108.4C.875 109.1 0 110.5 0 112s.875 2.875 2.25 3.625L32 128l12.38 29.75C45.13 159.1 46.5 160 48 160s2.875-.875 3.625-2.25L64 128l29.75-12.38C95.13 114.9 96 113.5 96 112S95.13 109.1 93.75 108.4zM256 96c26.5 0 48-21.5 48-48S282.5 0 256 0S208 21.5 208 48S229.5 96 256 96zM384 448H128c-17.62 0-32 14.38-32 32v32h320v-32C416 462.4 401.6 448 384 448zM509.8 44.38L480 32l-12.38-29.75C466.9 .875 465.5 0 464 0s-2.875 .875-3.625 2.25L448 32l-29.75 12.38C416.9 45.13 416 46.5 416 48s.875 2.875 2.25 3.625L448 64l12.38 29.75C461.1 95.13 462.5 96 464 96s2.875-.875 3.625-2.25L480 64l29.75-12.38C511.1 50.88 512 49.5 512 48S511.1 45.13 509.8 44.38z"/>
</>],
['thin',<>
	<path d="M248 312v96C248 412.4 251.6 416 256 416s8-3.578 8-8v-96c0-4.422-3.578-8-8-8S248 307.6 248 312zM256 96c26.5 0 48-21.5 48-48S282.5 0 256 0S208 21.5 208 48S229.5 96 256 96zM256 16c17.64 0 32 14.36 32 32s-14.36 32-32 32s-32-14.36-32-32S238.4 16 256 16zM127.1 287.1c9.186 0 18.29-3.914 24.67-11.48l31.38-37.75L184 408c0 4.418 3.582 8 8 8c4.42 0 8-3.582 8-8V238.8c0-6.09-3.418-11.81-8.939-14.38C180.3 219.3 172.9 227.1 171.7 228.5l-31.31 37.67C134.5 273.2 124.3 273.7 117.8 268.3C111 262.7 110.1 252.5 115.7 245.8l70.53-84.54C195.3 150.3 208.7 144 223 144h66c14.32 0 27.74 6.273 36.84 17.25l70.45 84.44c5.621 6.809 4.682 16.99-1.975 22.6c-7.234 5.973-17.33 4.279-22.63-2.014l-31.38-37.75c-1.186-1.43-8.549-9.17-19.35-4.158c-5.529 2.566-8.953 8.289-8.953 14.38V408c0 4.418 3.582 8 8 8c4.42 0 8-3.582 8-8l-.013-169.3l31.38 37.75c6.375 7.564 15.51 11.48 24.7 11.48c7.207 0 14.44-2.408 20.43-7.354c13.5-11.38 15.38-31.5 4.125-45.13l-70.5-84.5C326 136.4 308 128 289 128h-66c-19 0-36.1 8.375-49.12 23l-70.5 84.5c-11.25 13.62-9.5 33.75 4.125 45.13C113.5 285.6 120.8 287.1 127.1 287.1zM504 40h-32v-32C472 3.578 468.4 0 464 0s-8 3.578-8 8v32h-32C419.6 40 416 43.58 416 48s3.578 8 8 8h32v32C456 92.42 459.6 96 464 96s8-3.578 8-8v-32h32C508.4 56 512 52.42 512 48S508.4 40 504 40zM376 448h-240C113.9 448 96 465.9 96 488v16C96 508.4 99.58 512 104 512s8-3.578 8-8v-16c0-13.23 10.77-24 24-24h240c13.23 0 24 10.77 24 24v16c0 4.422 3.578 8 8 8S416 508.4 416 504v-16C416 465.9 398.1 448 376 448zM88 104h-32v-32C56 67.58 52.42 64 48 64S40 67.58 40 72v32h-32C3.578 104 0 107.6 0 112s3.578 8 8 8h32v32C40 156.4 43.58 160 48 160s8-3.578 8-8v-32h32C92.42 120 96 116.4 96 112S92.42 104 88 104z"/>
</>],

]);

const Transporter: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Transporter.displayName = "Transporter";

export default Transporter;