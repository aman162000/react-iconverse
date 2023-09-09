
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 0C100.3 0 0 100.3 0 224v96c0 106 85.96 192 192 192h64c106 0 192-85.96 192-192V224C448 100.3 347.7 0 224 0zM384 202.8C384 249.8 348.3 288 304 288h-22.5c7.375 12.25 12.5 23.38 15.75 32.88c31 4.625 54.63 31 54.63 63.13c0 35.5-29.38 64-64.88 64H160.9C125.4 448 96 419.5 96 384c0-32.13 23.75-58.5 54.63-63.13C153.9 311.5 159 300.3 166.4 288H144C99.75 288 64 249.8 64 202.8V172C64 165.4 69.38 160 76 160l67.97 .0417c37.22 0 67.86 27.13 76.73 63.96h6.477c9-36.83 39.75-64 76.85-64H372C378.6 160 384 165.4 384 172V202.8z"/><path className="fa-secondary" d="M372 160h-67.97c-37.1 0-67.85 27.17-76.85 64H220.7C211.8 187.2 181.2 160 143.1 160L76 160C69.38 160 64 165.4 64 172v30.75C64 249.8 99.75 288 144 288h22.38C159 300.3 153.9 311.5 150.6 320.9C119.8 325.5 96 351.9 96 384c0 35.5 29.38 64 64.88 64H287c35.5 0 64.88-28.5 64.88-64c0-32.13-23.62-58.5-54.63-63.13C293.1 311.4 288.9 300.3 281.5 288H304C348.3 288 384 249.8 384 202.8V172C384 165.4 378.6 160 372 160zM224 266.8C244.3 286.6 255.9 305.3 262.8 320h-77.5C192.1 305.3 203.8 286.6 224 266.8zM144 256C117.5 256 96 232.1 96 202.8V192h48C170.5 192 192 215.9 192 245.2V256H144zM288 352c17.62 0 32 14.38 32 32s-14.38 32-32 32H160c-17.62 0-32-14.38-32-32s14.38-32 32-32H288zM352 202.8C352 232.1 330.5 256 304 256h-47.98c.1406 .1875 .3125 .375 0 0L256 245.2C256 215.9 277.5 192 304 192H352V202.8z"/>
</>],
['light',<>
	<path d="M224 0C100.2 0 0 100.2 0 224v128c0 88.38 71.62 160 160 160h128c88.38 0 160-71.63 160-160V224C448 100.2 347.8 0 224 0zM416 352c0 70.63-57.38 128-128 128H160c-70.62 0-128-57.38-128-128V224c0-105.9 86.12-192 192-192s192 86.12 192 192V352zM226.5 226.2c-.875-.75-4.25-.75-5.125 0c-8.125-38-39.41-66.21-77.41-66.21L76 160C69.38 160 64 165.4 64 172v30.75C64 249.8 99.75 288 144 288h22.38c-7.375 12.25-12.5 23.5-15.75 32.88C119.8 325.5 96 351.9 96 384c0 35.5 29.38 64 64.88 64H287c35.5 0 64.88-28.5 64.88-64c0-32.13-23.62-58.5-54.63-63.13C293.1 311.4 288.9 300.2 281.5 288H304C348.2 288 384 249.8 384 202.8V172C384 165.4 378.6 160 372 160h-67.97C266.2 160 234.8 188.2 226.5 226.2zM262.8 320h-77.5C192.1 305.2 203.8 286.6 224 266.8C244.2 286.6 255.9 305.2 262.8 320zM144 256C117.5 256 96 232.1 96 202.8V192h48C170.5 192 192 215.9 192 245.2V254C191.4 254.8 190.8 255.2 190.2 256H144zM320 384c0 17.62-14.38 32-32 32H160c-17.62 0-32-14.38-32-32s14.38-32 32-32h128C305.6 352 320 366.4 320 384zM352 202.8C352 232.1 330.5 256 304 256h-46.25C257.2 255.2 256.6 254.8 256 254V245.2C256 215.9 277.5 192 304 192H352V202.8z"/>
</>],
['regular',<>
	<path d="M224 0C100.2 0 0 100.2 0 224v128c0 88.38 71.62 160 160 160h128c88.38 0 160-71.63 160-160V224C448 100.2 347.8 0 224 0zM400 352c0 61.75-50.25 112-112 112H160c-61.75 0-112-50.25-112-112V224c0-97 79-176 176-176s176 79 176 176V352zM226.5 226.2c-.875-.75-4.25-.75-5.125 0c-8.125-38-39.41-66.21-77.41-66.21L76 160C69.38 160 64 165.4 64 172v30.75C64 249.8 99.75 288 144 288h22.38c-7.375 12.25-12.5 23.5-15.75 32.88C119.8 325.5 96 351.9 96 384c0 35.5 29.38 64 64.88 64H287c35.5 0 64.88-28.5 64.88-64c0-32.13-23.62-58.5-54.63-63.13C293.1 311.4 288.9 300.2 281.5 288H304C348.2 288 384 249.8 384 202.8V172C384 165.4 378.6 160 372 160h-67.97C266.2 160 234.8 188.2 226.5 226.2zM224 266.8C244.2 286.6 255.9 305.2 262.8 320h-77.5C192.1 305.2 203.8 286.6 224 266.8zM144 256C117.5 256 96 232.1 96 202.8V192h48C170.5 192 192 215.9 192 245.2V254C191.4 254.8 190.8 255.2 190.2 256H144zM288 352c17.62 0 32 14.38 32 32s-14.38 32-32 32H160c-17.62 0-32-14.38-32-32s14.38-32 32-32H288zM352 202.8C352 232.1 330.5 256 304 256h-46.25C257.2 255.2 256.6 254.8 256 254V245.2C256 215.9 277.5 192 304 192H352V202.8z"/>
</>],
['solid',<>
	<path d="M262.8 320C255.9 305.3 244.3 286.6 224 266.8C203.8 286.6 192.1 305.3 185.3 320H262.8zM128 384c0 17.62 14.38 32 32 32h128c17.62 0 32-14.38 32-32s-14.38-32-32-32H160C142.4 352 128 366.4 128 384zM192 245.2C192 215.9 170.5 192 144 192H96v10.75C96 232.1 117.5 256 144 256H192V245.2zM256 245.2L256 256c.3125 .375 .1406 .1875 0 0H304C330.5 256 352 232.1 352 202.8V192h-48C277.5 192 256 215.9 256 245.2zM224 0C100.3 0 0 100.3 0 224v96c0 106 85.96 192 192 192h64c106 0 192-85.96 192-192V224C448 100.3 347.7 0 224 0zM384 202.8C384 249.8 348.3 288 304 288h-22.5c7.375 12.25 12.5 23.38 15.75 32.88c31 4.625 54.63 31 54.63 63.13c0 35.5-29.38 64-64.88 64H160.9C125.4 448 96 419.5 96 384c0-32.13 23.75-58.5 54.63-63.13C153.9 311.5 159 300.3 166.4 288H144C99.75 288 64 249.8 64 202.8V172C64 165.4 69.38 160 76 160l67.97 .0417c37.22 0 67.86 27.13 76.73 63.96h6.477c9-36.83 39.75-64 76.85-64H372C378.6 160 384 165.4 384 172V202.8z"/>
</>],
['thin',<>
	<path d="M224 0C100.3 0 0 100.3 0 224v96c0 106 85.96 192 192 192h64c106 0 192-85.96 192-192V224C448 100.3 347.7 0 224 0zM432 320c0 97.05-78.95 176-176 176H192c-97.05 0-176-78.95-176-176V224c0-114.7 93.31-208 208-208s208 93.31 208 208V320zM304 160c-35.83 0-66.45 23.57-80.09 57.16C210.2 183.7 179.7 160 143.1 160C144.1 160 115.7 160 96.75 160C74.98 160 72.71 160 67.7 166C65.31 168.9 64 172.5 64 176.3V192.3C64 245.1 103.4 288 151.8 288h36.77c-10.32 13.33-19.05 27.08-25.66 41.24C161.9 331.4 161.7 333.7 161.7 336H152C121.1 336 96 361.1 96 392S121.1 448 152 448h144c30.93 0 56-25.07 56-56s-25.07-56-56-56h-9.656c0-2.297-.2656-4.617-1.27-6.762c-6.605-14.17-15.34-27.93-25.67-41.26c17.47-.0547 36.93-.2266 36.93-.2266C344.6 287.8 384 244.8 384 192.1V176C384 167.2 376.8 160 368 160H304zM151.8 272C112.2 272 80 236.3 80 192.3V176.3C80.16 176.1 87.3 176 96.75 176c18.91 0 47.06 .25 47.06 .25c39.65 0 71.81 35.72 71.81 79.67v2.809C213.2 260.3 214.6 258.2 202 272H151.8zM296 352c22.05 0 40 17.95 40 40s-17.95 40-40 40h-144c-22.05 0-40-17.95-40-40S129.9 352 152 352H296zM270.6 336H177.4C185.7 318.3 199.7 295.9 224 272C248.3 295.9 262.3 318.3 270.6 336zM368 192.1c0 43.95-32.17 79.67-71.81 79.67c0 0-49.17 .2461-50.23 .2422c-12.74-13.97-11.15-11.73-13.58-13.27V255.7c0-43.95 32.16-79.67 71.81-79.67H368V192.1z"/>
</>],

]);

const LuchadorMask: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LuchadorMask.displayName = "LuchadorMask";

export default LuchadorMask;
