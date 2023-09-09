
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M152.6 395.3l30.06 30.06c9.156 9.156 11.91 22.91 6.937 34.87C184.6 472.2 172.9 479.1 160 479.1H24c-13.25 0-23.1-10.74-23.1-23.1v-135.1c0-12.94 7.781-24.61 19.75-29.56C23.72 288.8 27.88 288 32 288c8.312 0 16.5 3.242 22.63 9.367l30.06 30.06l210.7-210.8l-30.06-30.06c-9.156-9.156-11.91-22.91-6.937-34.87c4.937-11.95 16.62-19.75 29.56-19.75h135.1c13.26 0 23.1 10.75 23.1 23.1v135.1c0 12.94-7.781 24.61-19.75 29.56c-11.1 4.906-25.72 2.203-34.87-6.937l-30.06-30.06L152.6 395.3z"/><path className="fa-secondary" d="M152.6 116.7l30.06-30.06C191.8 77.47 194.5 63.72 189.6 51.75c-4.938-11.95-16.62-19.75-29.56-19.75H24c-13.26 0-23.1 10.75-23.1 23.1v135.1c0 12.94 7.781 24.61 19.75 29.56c12 4.906 25.72 2.203 34.87-6.937l30.06-30.06l71.44 71.44l67.87-67.88L152.6 116.7zM428.2 290.4C424.3 288.8 420.1 288 415.1 288c-8.312 0-16.5 3.248-22.62 9.373L363.3 327.4l-71.44-71.44L224 323.9l71.44 71.44l-30.06 30.06c-9.156 9.156-11.91 22.91-6.937 34.87c4.938 11.95 16.62 19.75 29.56 19.75h135.1c13.25 0 23.1-10.75 23.1-23.1V319.1C447.1 307.1 440.2 295.4 428.2 290.4z"/>
</>],
['light',<>
	<path d="M348.7 153.9l44.68 44.68c6.156 6.125 14.28 9.375 22.59 9.375c4.125 0 8.312-.8125 12.28-2.453C440.3 200.5 448 188.1 448 175.1V64c0-17.64-14.34-32-32-32h-111.1c-13 0-24.59 7.766-29.56 19.77s-2.25 25.69 6.938 34.86l44.67 44.67L224 233.4L121.9 131.3L166.6 86.63c6.125-6.156 9.375-14.28 9.375-22.59c0-4.125-.8125-8.312-2.453-12.28C168.5 39.75 156.1 32 143.1 32H32C14.36 32 0 46.34 0 64v111.1c0 13 7.766 24.59 19.77 29.56s25.69 2.25 34.86-6.938l44.67-44.67L201.4 256l-102.1 102.1L54.63 313.4C48.47 307.3 40.34 304 32.03 304c-4.125 0-8.312 .8125-12.28 2.453C7.75 311.5 0 323 0 336V448c0 17.64 14.34 32 32 32h111.1c13 0 24.59-7.766 29.56-19.77s2.25-25.69-6.938-34.86l-44.67-44.67L224 278.6l102.1 102.1l-44.68 44.68c-6.125 6.156-9.375 14.28-9.375 22.59c0 4.125 .8125 8.312 2.453 12.28C279.5 472.3 291 480 304 480H416c17.64 0 32-14.34 32-32v-111.1c0-13-7.766-24.59-19.77-29.56s-25.69-2.25-34.86 6.938l-44.67 44.67L246.6 256L348.7 153.9zM32.01 176C32.01 176 32.01 176.1 32.01 176L32 64h111.1L32.01 176zM144 447.1C144 447.1 144.1 447.1 144 447.1L32 448v-111.1L144 447.1zM415.1 335.1C415.1 335.1 415.1 335.9 415.1 335.1L416 448h-111.1L415.1 335.1zM303.1 64.01C303.1 64.01 303.9 64.01 303.1 64.01L416 64v111.1L303.1 64.01z"/>
</>],
['regular',<>
	<path d="M428.2 290.4c-11.97-4.969-25.72-2.219-34.87 6.937l-47.03 47.04L257.9 256l88.4-88.41l47.03 47.03c6.127 6.117 14.3 9.352 22.63 9.352c4.117 0 8.276-.7977 12.24-2.415c11.97-4.953 19.75-16.62 19.75-29.56V56c0-13.25-10.74-23.1-23.1-23.1h-135.1c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.937 34.87l47.03 47.03L224 222.1L135.6 133.7l47.03-47.03c6.117-6.129 9.362-14.29 9.362-22.63c0-4.117-.8077-8.277-2.425-12.25c-4.953-11.97-16.62-19.75-29.56-19.75H24c-13.25 0-23.1 10.74-23.1 23.1v135.1c0 12.94 7.797 24.62 19.75 29.56c11.97 4.969 25.72 2.219 34.87-6.937l47.03-47.03L190.1 256l-88.41 88.41L54.63 297.4c-6.127-6.117-14.29-9.367-22.63-9.367c-4.117 0-8.279 .8125-12.25 2.43c-11.97 4.953-19.75 16.62-19.75 29.56v135.1c0 13.25 10.74 23.1 23.1 23.1h135.1c12.94 0 24.62-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.937-34.87l-47.03-47.03l88.41-88.41l88.4 88.41l-47.03 47.02c-6.117 6.129-9.351 14.3-9.351 22.64c0 4.117 .7968 8.271 2.414 12.24c4.953 11.97 16.62 19.75 29.56 19.75h135.1c13.25 0 23.1-10.74 23.1-23.1V319.1C447.1 307.1 440.2 295.4 428.2 290.4z"/>
</>],
['solid',<>
	<path d="M447.1 319.1v135.1c0 13.26-10.75 23.1-23.1 23.1h-135.1c-12.94 0-24.61-7.781-29.56-19.75c-4.906-11.1-2.203-25.72 6.937-34.87l30.06-30.06L224 323.9l-71.43 71.44l30.06 30.06c9.156 9.156 11.91 22.91 6.937 34.87C184.6 472.2 172.9 479.1 160 479.1H24c-13.25 0-23.1-10.74-23.1-23.1v-135.1c0-12.94 7.781-24.61 19.75-29.56C23.72 288.8 27.88 288 32 288c8.312 0 16.5 3.242 22.63 9.367l30.06 30.06l71.44-71.44L84.69 184.6L54.63 214.6c-9.156 9.156-22.91 11.91-34.87 6.937C7.798 216.6 .0013 204.9 .0013 191.1v-135.1c0-13.26 10.75-23.1 23.1-23.1h135.1c12.94 0 24.61 7.781 29.56 19.75C191.2 55.72 191.1 59.87 191.1 63.1c0 8.312-3.237 16.5-9.362 22.63L152.6 116.7l71.44 71.44l71.43-71.44l-30.06-30.06c-9.156-9.156-11.91-22.91-6.937-34.87c4.937-11.95 16.62-19.75 29.56-19.75h135.1c13.26 0 23.1 10.75 23.1 23.1v135.1c0 12.94-7.781 24.61-19.75 29.56c-11.1 4.906-25.72 2.203-34.87-6.937l-30.06-30.06l-71.43 71.43l71.44 71.44l30.06-30.06c9.156-9.156 22.91-11.91 34.87-6.937C440.2 295.4 447.1 307.1 447.1 319.1z"/>
</>],
['thin',<>
	<path d="M354.9 136.4l47.61 47.57c17.89 17.87 45.5 3.271 45.5-18.83v-113.2c0-11.03-8.949-19.97-19.99-19.97h-113.3c-22.59 0-36.25 28.07-18.85 45.46l47.69 47.65L224 244.7L104.4 125.1L151.1 77.5C169.9 59.61 155.3 32 133.2 32h-113.2C8.942 32-.001 40.95-.001 51.99v113.3c0 22.59 28.07 36.25 45.46 18.85l47.65-47.68L212.7 256l-119.6 119.6l-47.61-47.57c-17.89-17.87-45.5-3.269-45.5 18.83v113.2c0 11.03 8.949 19.98 19.99 19.98h113.3c22.59 0 36.25-28.08 18.85-45.46l-47.69-47.65L224 267.3l119.6 119.6l-47.58 47.61C278.1 452.4 292.7 480 314.8 480h113.2c11.03 0 19.97-8.949 19.97-19.99v-113.3c0-22.58-28.07-36.25-45.46-18.84l-47.65 47.68L235.3 256L354.9 136.4zM314.7 47.98h113.3c2.203 0 3.998 1.791 3.998 3.994v113.2c0 9.002-11.21 14.52-18.2 7.531L307.2 66.17C299.1 58.98 305.9 47.98 314.7 47.98zM34.16 172.8C26.98 179.1 15.98 174.1 15.98 165.3V51.99c0-2.205 1.793-3.998 3.994-3.998h113.2c8.1 0 14.52 11.2 7.529 18.2L34.16 172.8zM133.3 464H19.99c-2.203 0-3.998-1.793-3.998-3.996v-113.2c0-8.1 11.21-14.52 18.2-7.529l106.6 106.5C148 453 142.1 464 133.3 464zM413.8 339.2c7.184-7.195 18.18-1.252 18.18 7.535v113.3c0 2.203-1.793 3.998-3.994 3.998h-113.2c-8.1 0-14.52-11.2-7.529-18.2L413.8 339.2z"/>
</>],

]);

const Maximize: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Maximize.displayName = "Maximize";

export default Maximize;