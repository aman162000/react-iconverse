
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 210.6c-69.13 14.12-116.6 87.5-86.5 164.9c11.12 28.75 34.25 51.88 63 63C213.9 468.6 287.3 421.1 301.4 352H160V210.6zM256 0v128h128L256 0z"/><path className="fa-secondary" d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM136.5 438.5c-28.75-11.12-51.88-34.25-63-63C43.38 298.1 90.88 224.8 160 210.6V352h141.4C287.3 421.1 213.9 468.6 136.5 438.5zM192 320V199.9c66.38 0 120.1 53.75 120.1 120.1H192z"/>
</>],
['light',<>
	<path d="M176 224v96c0 8.844 7.156 16 16 16h96c8.844 0 16-7.156 16-16c0-61.75-50.25-112-112-112C183.2 208 176 215.2 176 224zM208 241.6C239.3 247.1 264 272.7 270.4 304H208V241.6zM184 408c-44.13 0-80-35.88-80-80c0-32.7 19.81-60.74 48-73.1V221.4C105.9 235.3 72 277.5 72 328c0 61.75 50.25 112 112 112c50.53 0 92.73-33.89 106.6-80h-33.45C244.7 388.2 216.7 408 184 408zM365.3 125.3l-106.5-106.5C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5C384 153.5 377.3 137.3 365.3 125.3zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5C346.1 151.3 348.4 155.5 349.9 160H240C231.2 160 224 152.8 224 144V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112C192 170.5 213.5 192 240 192H352V448z"/>
</>],
['regular',<>
	<path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM176 240c-53.02 0-96 42.98-96 96s42.98 96 96 96s96-42.98 96-96h-96V240zM208 304h96c0-53.02-42.98-96-96-96V304z"/>
</>],
['solid',<>
	<path d="M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM136.5 438.5c-28.75-11.12-51.88-34.25-63-63C43.38 298.1 90.88 224.8 160 210.6V352h141.4C287.3 421.1 213.9 468.6 136.5 438.5zM312.1 320H192V199.9C258.4 199.9 312.1 253.6 312.1 320zM256 0v128h128L256 0z"/>
</>],
['thin',<>
	<path d="M374.6 150.6l-141.3-141.3C227.4 3.371 219.2 0 210.7 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V173.3C384 164.8 380.6 156.6 374.6 150.6zM224 22.63L361.4 160H248C234.8 160 224 149.2 224 136V22.63zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h144v120c0 22.06 17.94 40 40 40h120V448zM274.3 354.2c-4.312-1.344-8.688 1.156-9.953 5.375C252.9 398.1 218.3 424 178.3 424C128.5 424 88 383.5 88 333.8c0-40 25.91-74.59 64.45-86.09c4.234-1.25 6.641-5.719 5.391-9.938C156.6 233.5 152.2 230.9 147.9 232.3C102.5 245.8 72 286.6 72 333.8C72 392.3 119.7 440 178.3 440c47.17 0 87.94-30.5 101.4-75.91C280.9 359.8 278.5 355.4 274.3 354.2zM199.1 208.7C195 209.2 192 212.6 192 216.7V312C192 316.4 195.6 320 200 320h95.36c4 0 7.625-4.844 8.172-8.812C303.8 309.3 304 307.5 304 305.6C304 251.8 260.2 208 206.4 208C204.4 208 202.5 208.3 199.1 208.7zM208 224c43.73 .8438 79.14 36.28 79.98 80H208V224z"/>
</>],

]);

const FileChartPie: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FileChartPie.displayName = "FileChartPie";

export default FileChartPie;
