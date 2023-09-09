
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M544 128h-224v288h160c17.62 0 32-14.38 32-32v-32c0-17.62 14.38-32 32-32s32-14.38 32-32V160C576 142.4 561.6 128 544 128zM440 360c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16V360zM440 200c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16V200zM536 200c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16V200zM16 96h320C344.9 96 352 88.88 352 80v-32C352 39.13 344.9 32 336 32H256V16C256 7.125 248.9 0 240 0h-128C103.1 0 96 7.125 96 16V32H16C7.125 32 0 39.13 0 48v32C0 88.88 7.125 96 16 96zM336 448h-320C7.125 448 0 455.1 0 464v32C0 504.9 7.125 512 16 512h320c8.875 0 16-7.125 16-16v-32C352 455.1 344.9 448 336 448z"/><path className="fa-secondary" d="M320 448H32V96h288V448z"/>
</>],
['light',<>
	<path d="M112 32h128C248.8 32 256 24.84 256 16C256 7.162 248.8 0 240 0h-128C103.2 0 96 7.162 96 16C96 24.84 103.2 32 112 32zM336 480H320V96h16C344.8 96 352 88.84 352 80C352 71.16 344.8 64 336 64h-320C7.164 64 0 71.16 0 80C0 88.84 7.164 96 16 96H32v384H16C7.164 480 0 487.2 0 496C0 504.8 7.164 512 16 512h320c8.836 0 16-7.164 16-16C352 487.2 344.8 480 336 480zM288 480H64V96h224V480zM528 128h-160C359.2 128 352 135.2 352 144S359.2 160 368 160h160C536.8 160 544 167.2 544 176v128c0 8.828-7.188 16-16 16c-26.47 0-48 21.53-48 48v32c0 8.828-7.188 16-16 16h-96c-8.844 0-16 7.156-16 16s7.156 16 16 16h96c26.47 0 48-21.53 48-48v-32c0-8.828 7.188-16 16-16c26.47 0 48-21.53 48-48v-128C576 149.5 554.5 128 528 128zM384 376c0 4.418 3.582 8 8 8h16c4.418 0 8-3.582 8-8v-16c0-4.42-3.582-8-8-8h-16C387.6 352 384 355.6 384 360V376zM504 224C508.4 224 512 220.4 512 216v-16C512 195.6 508.4 192 504 192h-16C483.6 192 480 195.6 480 200v16C480 220.4 483.6 224 488 224H504zM392 224h16C412.4 224 416 220.4 416 216v-16C416 195.6 412.4 192 408 192h-16C387.6 192 384 195.6 384 200v16C384 220.4 387.6 224 392 224z"/>
</>],
['regular',<>
	<path d="M544 128h-224V80h8C341.3 80 352 69.25 352 56C352 42.74 341.3 32 328 32H256V16C256 7.162 248.8 0 240 0h-128C103.2 0 96 7.162 96 16V32H24C10.75 32 0 42.74 0 56C0 69.25 10.75 80 24 80H32v384H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h304c13.25 0 24-10.75 24-24c0-13.26-10.75-24-24-24H320V416h160c17.62 0 32-14.38 32-32v-32c0-17.62 14.38-32 32-32s32-14.38 32-32V160C576 142.4 561.6 128 544 128zM272 464h-192v-384h192V464zM440 360c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16V360zM440 200c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16V200zM536 200c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16V200z"/>
</>],
['solid',<>
	<path d="M544 128h-192v288h128c17.62 0 32-14.38 32-32v-32c0-17.62 14.38-32 32-32s32-14.38 32-32V160C576 142.4 561.6 128 544 128zM440 360c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16V360zM440 200c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16V200zM536 200c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16V200zM336 448H320V96h16C344.9 96 352 88.88 352 80v-32C352 39.12 344.9 32 336 32H256V16C256 7.125 248.9 0 240 0h-128C103.1 0 96 7.125 96 16V32H16C7.125 32 0 39.12 0 48v32C0 88.88 7.125 96 16 96H32v352H16C7.125 448 0 455.1 0 464v32C0 504.9 7.125 512 16 512h320c8.875 0 16-7.125 16-16v-32C352 455.1 344.9 448 336 448z"/>
</>],
['thin',<>
	<path d="M344 496H320V64h24C348.4 64 352 60.41 352 56S348.4 48 344 48h-80V40C264 17.94 246.1 0 224 0H128C105.9 0 88 17.94 88 40V48h-80C3.594 48 0 51.59 0 56S3.594 64 8 64H32v432H8C3.594 496 0 499.6 0 504S3.594 512 8 512h336c4.406 0 8-3.594 8-8S348.4 496 344 496zM104 40C104 26.78 114.8 16 128 16h96c13.22 0 24 10.78 24 24V48h-144V40zM304 496h-256V64h256V496zM537.8 128H360C355.6 128 352 131.6 352 136s3.594 8 8 8h177.8C550 144 560 153.1 560 166.2v120.9c0 12.25-9.969 22.22-22.22 22.22c-21.06 0-38.22 17.16-38.22 38.22v30.22c0 12.25-9.969 22.22-22.22 22.22H360c-4.406 0-8 3.594-8 8S355.6 416 360 416h117.3c21.06 0 38.22-17.16 38.22-38.22v-30.22c0-12.25 9.969-22.22 22.22-22.22C558.8 325.3 576 308.2 576 287.1V166.2C576 145.2 558.8 128 537.8 128zM368 344c0 13.22 10.78 24 24 24h16c13.22 0 24-10.78 24-24v-16c0-13.22-10.78-24-24-24h-16c-13.22 0-24 10.78-24 24V344zM384 328c0-4.5 3.5-8 8-8h16c4.5 0 8 3.5 8 8v16c0 4.5-3.5 8-8 8h-16C387.5 352 384 348.5 384 344V328zM392 240h16c13.22 0 24-10.78 24-24v-16c0-13.22-10.78-24-24-24h-16c-13.22 0-24 10.78-24 24v16C368 229.2 378.8 240 392 240zM384 200C384 195.5 387.5 192 392 192h16C412.5 192 416 195.5 416 200v16C416 220.5 412.5 224 408 224h-16C387.5 224 384 220.5 384 216V200zM504 240c13.22 0 24-10.78 24-24v-16c0-13.22-10.78-24-24-24h-16c-13.22 0-24 10.78-24 24v16c0 13.22 10.78 24 24 24H504zM480 216v-16C480 195.5 483.5 192 488 192h16C508.5 192 512 195.5 512 200v16C512 220.5 508.5 224 504 224h-16C483.5 224 480 220.5 480 216z"/>
</>],

]);

const FilmCanister: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FilmCanister.displayName = "FilmCanister";

export default FilmCanister;