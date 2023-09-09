
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 224c53 0 96-43 96-96c0 0-32 32-96 32C206.3 160 192 142.5 192 128L192 96c0-17.62 14.38-32 32-32h128c17.62 0 32 14.38 32 32l0 32c0 34.25-17.5 66.5-42.13 90.75L288 272l17.75-1c77.13-4.375 141.6-65.25 142.3-141.5L447.1 96c0-53-42.1-96-95.1-96H223.1c-53 0-95.1 43-95.1 96l.001 32C128 179.1 172.9 224 224 224z"/><path className="fa-secondary" d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1c-8.748 0-15.1 7.274-15.1 16.02L.0001 496C.0001 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3z"/>
</>],
['light',<>
	<path d="M558.2 333.6c-9.5-8.619-22-13.37-35.12-13.37c-12.5 0-24.88 4.248-34.62 12.12l-61.45 49.21c-1.928 1.545-4.324 2.385-6.795 2.385h-41.62c4.625-9.619 6.5-20.74 4.75-32.23C379.4 323.7 353.7 304 325.6 304H181.2c-20.75 0-40.1 6.746-57.5 19.24l-38.5 28.73H16c-8.801 0-16 7.195-16 15.99S7.198 383.1 15.1 383.1l80.01 .0114l46.86-35.29c11.12-8.244 24.62-12.74 38.37-12.74h146.7c13.25 0 24 10.74 24 23.99s-10.75 23.98-24 23.98H239.1c-8.75 0-16 7.246-16 15.99c0 8.746 7.25 15.99 16 15.99h180.2c9.625 0 19-3.248 26.62-9.246l61.62-49.22c4.25-3.373 9.5-5.248 14.62-5.248c5 0 9.875 1.75 13.75 5.248c10.12 9.119 9.375 24.48-.875 32.61l-100.7 80.58c-7.584 6.064-17.01 9.369-26.72 9.369H16c-8.801 0-15.1 7.189-15.1 15.98S7.198 512 15.1 512h392.5c17 0 33.38-5.871 46.62-16.37l100.9-80.7c12.25-9.744 19.5-24.36 19.1-39.98C576.5 359.3 569.1 344.2 558.2 333.6zM223.1 192h15.1C292.9 192 336 148.9 336 96c0-8.844-7.156-16-16-16S304 87.16 304 96c0 35.28-28.72 64-64 64H224C188.7 160 160 131.3 160 96s28.72-64 64-64h106.7C377.7 32 416 70.28 416 117.3c0 26.69-12.75 52.22-34.13 68.25l-55.47 41.59c-7.062 5.312-8.5 15.34-3.219 22.41C326.3 253.8 331.2 256 336 256c3.344 0 6.719-1.031 9.594-3.188l55.5-41.63C430.5 189.1 448 154 448 117.3C448 52.63 395.4 0 330.7 0H223.1c-52.94 0-95.1 43.06-95.1 96S171.1 192 223.1 192z"/>
</>],
['regular',<>
	<path d="M551.1 312.1c-31.13-26.36-69.26-16.12-88.39-1.75l-60.38 45.47h-3.375C399.7 317.9 369.3 288 330.7 288H186.7C158.3 288 130.3 297.4 108.1 314.4l-28.38 21.74H24C10.8 336.1 0 346.9 0 360.1c0 13.19 10.8 23.99 24 23.99l72-.0596l41.26-31.42c14-10.74 31.5-16.49 49.51-16.49h144c27.88 0 29 40.23-1.125 40.23H269.8c-7.5 0-13.75 6.123-13.75 13.74c0 7.619 6.252 13.87 13.75 13.87h134.6c9.711 0 19.16-3.158 26.92-8.996l61.26-46.1c8.252-6.121 20.5-6.621 28.38 0c10.12 8.496 9.375 23.11-.877 30.73l-100.6 75.46c-7.75 5.746-17.13 8.994-26.88 8.994H24C10.8 464 0 474.8 0 488C0 501.2 10.8 512 24 512h368.8c20 0 39.38-6.496 55.26-18.49l100.8-75.83c16.63-12.49 26.5-31.48 27.13-51.97C576.7 345.2 567.8 325.6 551.1 312.1zM224 208c53 0 95.99-43 95.99-96c0 0-31.99 32-95.99 32c-17.75 0-32-17.5-32-32L192 96c0-17.62 14.38-32 32-32h128c17.62 0 32 14.38 32 32L384 112c0 34.25-17.5 66.5-42.13 90.75L288 256l17.75-1C382.9 250.6 447.4 189.8 448 113.5L447.1 96c0-53-42.1-96-95.1-96H223.1c-53 0-95.1 43-95.1 96L128 112C128 163.1 172.9 208 224 208z"/>
</>],
['solid',<>
	<path d="M224 224c53 0 96-43 96-96c0 0-32 32-96 32C206.3 160 192 142.5 192 128L192 96c0-17.62 14.38-32 32-32h128c17.62 0 32 14.38 32 32l0 32c0 34.25-17.5 66.5-42.13 90.75L288 272l17.75-1c77.13-4.375 141.6-65.25 142.3-141.5L447.1 96c0-53-42.1-96-95.1-96H223.1c-53 0-95.1 43-95.1 96l.001 32C128 179.1 172.9 224 224 224zM568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1c-8.748 0-15.1 7.274-15.1 16.02L.0001 496C.0001 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3z"/>
</>],
['thin',<>
	<path d="M223.1 192h15.1c44.11 0 79.1-35.88 79.1-80c0-4.406-3.584-8-8.005-8s-7.1 3.594-7.1 8c0 35.28-28.7 64-63.1 64H223.1C179.9 176 143.1 140.1 143.1 96s35.89-80 79.1-80h127.1c44.11 0 79.1 35.88 79.1 80v3.812c0 69.5-46.9 130.5-114.1 148.5c-4.265 1.125-6.812 5.5-5.672 9.781C313.2 261.6 316.4 264 319.1 264c.6719 0 1.375-.0938 2.062-.2813c74.15-19.78 125.9-87.19 125.9-163.9L447.1 96c0-52.94-43.06-96-95.1-96H223.1c-52.94 0-95.1 43.06-95.1 96S171.1 192 223.1 192zM566.6 323.6c-7.64-10.38-18.84-17.12-31.55-19.03c-12.77-2-25.31 1.25-35.58 8.875L381.1 400H263.1c-4.344 0-7.1-3.656-7.1-7.969c0-4.344 3.656-8 7.1-8h78.23c20.36 0 38.09-14.31 41.26-33.34c1.906-11.72-1.359-23.59-8.984-32.53c-7.625-8.969-18.76-14.12-30.53-14.12H183.1c-28.72 0-56.83 9.969-79.15 28.03l-44.3 35.97H7.1C3.578 368 0 371.6 0 376s3.578 8 7.1 8h58.22l48.69-39.53c19.48-15.78 44.01-24.47 69.08-24.47h159.1c7.078 0 13.77 3.094 18.34 8.469c4.64 5.469 6.547 12.44 5.39 19.59c-1.891 11.38-12.84 19.94-25.48 19.94H263.1c-13.23 0-23.1 10.78-23.1 24S250.7 416 263.1 416h123.2l121.8-89.72c6.859-5.094 15.31-7.094 23.69-5.938c8.468 1.281 15.94 5.781 21.05 12.72c5.062 6.875 7.156 15.31 5.875 23.75c-1.281 8.469-5.765 15.91-12.66 20.97l-135.1 99.5C395.5 489.3 375.3 496 354.1 496H7.1C3.578 496 0 499.6 0 504S3.578 512 7.1 512h346.1c23.72 0 47.33-7.75 66.45-21.84l135.1-99.5c10.31-7.594 17.06-18.75 18.98-31.44C577.4 346.6 574.2 333.9 566.6 323.6z"/>
</>],

]);

const HandHoldingMagic: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HandHoldingMagic.displayName = "HandHoldingMagic";

export default HandHoldingMagic;