
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 64C110.1 64 0 125.9 0 208v98.13C0 384.5 114.6 448 256 448c141.4 0 256-63.52 256-141.9V208C512 125.9 401.9 64 256 64zM256 288C149.1 288 64 252.2 64 208S149.1 128 256 128c105.1 0 192 35.82 192 80S361.1 288 256 288z"/><path className="fa-secondary" d="M64 208C64 163.8 149.1 128 256 128c105.1 0 192 35.82 192 80c0 21.81-20.95 41.57-54.9 56C358.3 249.2 309.7 240 256 240S153.8 249.2 118.9 264C85 249.6 64 229.8 64 208z"/>
</>],
['light',<>
	<path d="M256 64C87.88 64 0 128.4 0 192v114.1C0 384.5 114.6 448 256 448s256-63.5 256-141.9V192C512 128.4 424.1 64 256 64zM480 306.1C480 358.1 388 416 256 416s-224-57.88-224-109.9V256c39.38 36.63 114.5 64 224 64s184.6-27.38 224-64V306.1zM89.38 256C130.2 236.4 189.8 224 256 224s125.8 12.38 166.6 32C381.6 275.6 322.2 288 256 288S130.4 275.6 89.38 256zM454.3 236.6C411.2 210.2 345 192 256 192S100.8 210.2 57.75 236.6C41.38 223.4 32 208.1 32 192c0-53 100.2-96 224-96s224 43 224 96C480 208.1 470.6 223.4 454.3 236.6z"/>
</>],
['regular',<>
	<path d="M256 64C109.1 64 0 125.9 0 208v98.13C0 384.5 114.6 448 256 448s256-63.5 256-141.9V208C512 125.9 401.1 64 256 64zM256 112c110.5 0 200 35.88 200 80c0 9.125-4 17.75-11 25.88C398.2 192.2 331 176 256 176S113.8 192.2 67 217.9C60 209.8 56 201.1 56 192C56 147.9 145.5 112 256 112zM397.8 248.5C361.5 263 311.4 272 256 272S150.5 263 114.2 248.5C149.1 234.2 198.4 224 256 224S361.1 234.2 397.8 248.5zM464 306.1C464 344.4 383 400 256 400s-208-55.63-208-93.88V266.4C94.38 298.8 170.1 320 256 320s161.6-21.25 208-53.63V306.1z"/>
</>],
['solid',<>
	<path d="M256 64C109.1 64 0 125.9 0 208v98.13C0 384.5 114.6 448 256 448s256-63.5 256-141.9V208C512 125.9 401.1 64 256 64zM256 288C203.1 288 155.1 279.1 120.4 264.6C155 249.9 201.6 240 256 240s101 9.875 135.6 24.62C356.9 279.1 308.9 288 256 288zM437.1 234.4C392.1 208.3 328.3 192 256 192S119.9 208.3 74.88 234.4C68 226.1 64 217.3 64 208C64 163.9 149.1 128 256 128c105.1 0 192 35.88 192 80C448 217.3 444 226.1 437.1 234.4z"/>
</>],
['thin',<>
	<path d="M256 64C114.6 64 0 121.3 0 192v128c0 70.69 114.6 128 256 128s256-57.31 256-128V192C512 121.3 397.4 64 256 64zM256 80c130.1 0 240 51.29 240 112c0 19.59-11.57 38.16-31.45 54.38C418.2 213.6 342.4 192 256 192S93.79 213.6 47.45 246.4C27.57 230.2 16 211.6 16 192C16 131.3 125.9 80 256 80zM451.1 256.1C407.1 284.8 335.4 304 256 304S104.9 284.8 60.9 256.1C104.8 227.3 176.4 208 256 208S407.2 227.3 451.1 256.1zM496 320c0 60.71-109.9 112-240 112S16 380.7 16 320V236.2C52.03 285.1 145.7 320 256 320s203.1-34.92 240-83.8V320z"/>
</>],

]);

const Ring: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Ring.displayName = "Ring";

export default Ring;
