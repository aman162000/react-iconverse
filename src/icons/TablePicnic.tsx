
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M96 128h320c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32H96C78.33 64 64 78.33 64 96C64 113.7 78.33 128 96 128zM480 224H32C14.33 224 0 238.3 0 256c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32C512 238.3 497.7 224 480 224z"/><path className="fa-secondary" d="M106.3 224h68.94L213.7 128H144.7L106.3 224zM34.28 404.1c-6.562 16.41 1.438 35.03 17.84 41.59C56 447.3 60.03 448 64 448c12.69 0 24.72-7.594 29.72-20.12L149.7 288H80.73L34.28 404.1zM367.3 128H298.3l38.4 96h68.94L367.3 128zM477.7 404.1L431.3 288H362.3l55.95 139.9C423.3 440.4 435.3 448 448 448c3.969 0 8-.7187 11.88-2.281C476.3 439.2 484.3 420.5 477.7 404.1z"/>
</>],
['light',<>
	<path d="M410.4 288c-11.43 0-19.17 11.63-14.75 22.17l53.59 128C451.8 444.3 457.8 448 464 448c2.062 0 4.156-.4062 6.188-1.25c8.156-3.406 11.97-12.78 8.562-20.94l-53.58-127.1C422.7 291.9 416.9 288 410.4 288zM33.25 425.8c-3.406 8.156 .4062 17.53 8.562 20.94C43.84 447.6 45.94 448 48 448c6.25 0 12.19-3.688 14.75-9.812L116.3 310.2C120.7 299.6 113 288 101.6 288C95.14 288 89.32 291.9 86.83 297.8L33.25 425.8zM496 224h-101.8l-53.56-128H432C440.8 96 448 88.84 448 80C448 71.16 440.8 64 432 64h-352C71.16 64 64 71.16 64 80C64 88.84 71.16 96 80 96h91.31L117.8 224H16C7.164 224 0 231.2 0 240C0 248.8 7.164 256 16 256h480C504.8 256 512 248.8 512 240C512 231.2 504.8 224 496 224zM152.4 224l53.58-128h100l53.58 128H152.4z"/>
</>],
['regular',<>
	<path d="M33.84 414.8c-5.094 12.25 .7187 26.28 12.97 31.34C49.81 447.4 52.94 448 56 448c9.406 0 18.34-5.562 22.16-14.81L125.1 320H73.16L33.84 414.8zM438.8 320h-51.93l46.93 113.2C437.7 442.4 446.6 448 456 448c3.062 0 6.188-.5938 9.188-1.844c12.25-5.062 18.06-19.09 12.97-31.34L438.8 320zM488 240h-82.33l-53.07-128H424C437.3 112 448 101.3 448 88C448 74.74 437.3 64 424 64H88C74.75 64 64 74.74 64 88C64 101.3 74.75 112 88 112h71.4l-53.07 128H24C10.75 240 0 250.7 0 264C0 277.3 10.75 288 24 288h464C501.3 288 512 277.3 512 264C512 250.7 501.3 240 488 240zM158.3 240l53.07-128h89.34l53.07 128H158.3z"/>
</>],
['solid',<>
	<path d="M480 224h-74.33l-38.4-96H416c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32H96C78.33 64 64 78.33 64 96c0 17.67 14.33 32 32 32h48.73L106.3 224H32C14.33 224 0 238.3 0 256c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32C512 238.3 497.7 224 480 224zM175.3 224L213.7 128h84.66l38.4 96H175.3zM34.28 404.1c-6.562 16.41 1.438 35.03 17.84 41.59C56 447.3 60.03 448 64 448c12.69 0 24.72-7.594 29.72-20.12L136.9 320H67.93L34.28 404.1zM444.1 320h-68.94l43.15 107.9C423.3 440.4 435.3 448 448 448c3.969 0 8-.7187 11.88-2.281c16.41-6.562 24.41-25.19 17.84-41.59L444.1 320z"/>
</>],
['thin',<>
	<path d="M427.2 320c-5.666 0-9.539 5.721-7.436 10.98l44.79 111.1C465.8 446.1 468.8 448 472 448c1 0 1.1-.1875 2.969-.5625c4.094-1.656 6.094-6.312 4.469-10.41l-44.8-111.1C433.4 321.1 430.5 320 427.2 320zM84.8 320c-3.275 0-6.219 1.992-7.436 5.033l-44.8 111.1c-1.625 4.094 .375 8.75 4.469 10.41C37.1 447.8 39 448 40 448c3.188 0 6.188-1.906 7.438-5.031l44.79-111.1C94.34 325.7 90.46 320 84.8 320zM480 224h-85.75l-38.42-96H416c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32H96C78.33 64 64 78.33 64 96c0 17.67 14.33 32 32 32h60.18L117.8 224H32C14.33 224 0 238.3 0 256c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32C512 238.3 497.7 224 480 224zM96 112C87.18 112 80 104.8 80 96S87.18 80 96 80h320c8.822 0 16 7.178 16 16S424.8 112 416 112H96zM173.4 128h165.1l38.4 96H135L173.4 128zM480 272H32C23.18 272 16 264.8 16 256S23.18 240 32 240h448c8.822 0 16 7.178 16 16S488.8 272 480 272z"/>
</>],

]);

const TablePicnic: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TablePicnic.displayName = "TablePicnic";

export default TablePicnic;
