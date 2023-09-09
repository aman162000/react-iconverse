
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 0v128h128L256 0zM264.3 358.4C274.1 342.5 280 324 280 304c0-57.44-46.56-104-104-104S72 246.6 72 304s46.56 104 104 104c19.1 0 38.5-5.922 54.36-15.71l48.67 48.67C283.7 445.7 289.8 448 296 448s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L264.3 358.4zM176 360c-30.88 0-56-25.12-56-56c0-30.88 25.12-56 56-56c30.88 0 56 25.12 56 56C232 334.9 206.9 360 176 360z"/><path className="fa-secondary" d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM312.1 440.1C308.3 445.7 302.2 448 296 448s-12.28-2.344-16.97-7.031l-48.67-48.67C214.5 402.1 195.1 408 176 408c-57.44 0-104-46.56-104-104S118.6 200 176 200s104 46.56 104 104c0 20-5.922 38.5-15.71 54.36l48.67 48.67C322.3 416.4 322.3 431.6 312.1 440.1zM176 248c-30.88 0-56 25.12-56 56c0 30.88 25.12 56 56 56c30.88 0 56-25.12 56-56C232 273.1 206.9 248 176 248z"/>
</>],
['light',<>
	<path d="M365.3 125.3l-106.5-106.5C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.66 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V170.5C384 153.5 377.3 137.3 365.3 125.3zM224 34.08c4.477 1.562 8.666 3.844 12.12 7.297l106.5 106.5C346.1 151.3 348.4 155.5 349.9 160H240C231.2 160 224 152.8 224 144V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112C192 170.5 213.5 192 240 192H352V448zM80 304c0 52.94 43.06 96 96 96c20.7 0 39.76-6.734 55.46-17.92l61.23 61.23C295.8 446.4 299.9 448 304 448s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-61.23-61.23C265.3 343.8 272 324.7 272 304c0-52.94-43.06-96-96-96S80 251.1 80 304zM240 304c0 35.28-28.72 64-64 64s-64-28.72-64-64s28.72-64 64-64S240 268.7 240 304z"/>
</>],
['regular',<>
	<path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM176 208c-53.02 0-96 42.98-96 96s42.98 96 96 96c17.77 0 34.21-5.16 48.48-13.58l46.55 46.55C275.7 437.7 281.8 440 288 440s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-46.55-46.55C266.8 338.2 272 321.8 272 304C272 250.1 229 208 176 208zM176 352C149.5 352 128 330.5 128 304S149.5 256 176 256S224 277.5 224 304S202.5 352 176 352z"/>
</>],
['solid',<>
	<path d="M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM312.1 407c9.375 9.375 9.375 24.56 0 33.94C308.3 445.7 302.2 448 296 448s-12.28-2.344-16.97-7.031l-48.67-48.67C214.5 402.1 195.1 408 176 408c-57.44 0-104-46.56-104-104S118.6 200 176 200s104 46.56 104 104c0 20-5.922 38.5-15.71 54.36L312.1 407zM256 0v128h128L256 0zM176 248c-30.88 0-56 25.12-56 56c0 30.88 25.12 56 56 56c30.88 0 56-25.12 56-56C232 273.1 206.9 248 176 248z"/>
</>],
['thin',<>
	<path d="M374.6 150.6l-141.3-141.3C227.4 3.371 219.2 0 210.7 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V173.3C384 164.8 380.6 156.6 374.6 150.6zM224 22.63L361.4 160H248C234.8 160 224 149.2 224 136V22.63zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h144v120c0 22.06 17.94 40 40 40h120V448zM176 208c-53.02 0-96 42.98-96 96s42.98 96 96 96c23.62 0 44.96-8.859 61.68-23l68.66 68.66C307.9 447.2 309.9 448 312 448s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31l-68.66-68.66C263.1 348.1 272 327.6 272 304C272 250.1 229 208 176 208zM176 384C131.9 384 96 348.1 96 304S131.9 224 176 224S256 259.9 256 304S220.1 384 176 384z"/>
</>],

]);

const FileMagnifyingGlass: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FileMagnifyingGlass.displayName = "FileMagnifyingGlass";

export default FileMagnifyingGlass;
