
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M31.1 415.1h384l.0002 32.01c0 35.35-28.65 64-64 64h-256c-35.35 0-64-28.65-64-64L31.1 415.1zM404.9 233.9c7.25 16.13 10.1 36.6 11.12 54.1H32c.0273-29.11 9.875-60.32 28.05-83.05l76.93-96.16c4.541-5.673 7.011-12.73 7.011-19.1L143.1 63.92h160l.0005 24.9c0 7.423 2.58 14.77 7.3 20.51l10.07 12.32c19.38-23.13 51.12-31.68 79.5-21.31c28.38 10.38 47.25 37.39 47.13 67.64C447.1 196.6 431.1 222.4 404.9 233.9zM399.9 167.2c-.375-13-11-23.25-23.88-23.25c-11 0-19.88 7.499-22.75 17.63l24.13 30.13C390.2 190.1 400.2 180.1 399.9 167.2z"/><path className="fa-secondary" d="M303.1 63.92h-160c-8.837 0-16-7.163-16-16L127.1 16c0-8.837 7.164-16 16-16h159.1c8.837 0 15.1 7.163 15.1 16l-.0003 31.92C319.1 56.76 312.8 63.92 303.1 63.92zM415.1 287.1H32L31.1 415.1h384V287.1z"/>
</>],
['light',<>
	<path d="M144 32h160c8.836 0 15.1-7.164 15.1-16c0-8.838-7.164-16-15.1-16H143.1c-8.836 0-16 7.162-16 16C127.1 24.84 135.2 32 144 32zM448 159.1c0-35.3-28.72-64-64-64c-24.33 0-45.29 13.81-56.11 33.86l-16.89-21.11c-4.531-5.664-6.1-12.68-6.1-19.93L304 80c0-8.838-7.164-16-16-16S272 71.16 272 80v8.75c0 14.5 5 28.62 14 40l76.1 96.13C376.6 242 384 263.1 384 284.9V288H64V284.9c0-21.75 7.375-42.88 21-60l76.1-96.13C171 117.4 176 103.3 176 88.75V80c0-8.838-7.164-16-16-16S144 71.16 144 80L143.1 88.76c0 7.252-2.48 14.33-7.011 19.1l-76.93 96.16C41.93 227.6 31.1 255.9 31.1 284.9l-.0003 163.1c0 35.35 28.65 64 64 64h256c35.35 0 64-28.66 64-64l.0002-163.1c0-22.17-5.853-43.83-16.66-62.93C427.2 215 448 189.1 448 159.1zM384 448c0 17.6-14.4 32-32 32H96c-17.6 0-32-14.4-32-32v-32h320V448zM384 384H64v-64h320V384zM384 192h-6.4L352 160c0-17.64 14.34-32 32-32s32 14.36 32 32S401.7 192 384 192z"/>
</>],
['regular',<>
	<path d="M447.1 167.1C447.1 128.2 415.8 96 376 96c-21.12 0-41.13 9.393-54.63 25.64l-10.37-12.89c-4.5-5.625-6.1-12.68-6.1-19.93L304 48c13.25 0 24-10.75 24-24S317.2 0 303.1 0H143.1C130.7 0 120 10.75 120 24S130.8 48 144 48L143.1 88.76c0 7.281-2.462 14.31-7.011 19.1l-76.93 96.16C41.86 227.7 31.1 255.8 31.1 284.9L32 432C32 476.2 67.82 512 112 512h224c44.18 0 80-35.82 80-80l-.0002-147.1c-.125-17.5-3.875-34.88-11.13-51C431.1 222.4 447.1 196.6 447.1 167.1zM97.5 234.9l77-96.13C185.8 124.5 192 106.9 192 88.75V48h64v40.75c0 18.21 6.195 35.87 17.57 50.09L350.5 235C361.8 249.2 368 266.8 368 284.9V288h-288V284.9C80 266.8 86.25 249.1 97.5 234.9zM336 464h-224c-17.67 0-32-14.33-32-32V416h288v16C368 449.7 353.7 464 336 464zM377.4 191.7l-24.13-30.13c2.875-10.12 11.75-17.63 22.75-17.63c12.88 0 23.5 10.25 23.88 23.25C400.2 180.1 390.2 190.1 377.4 191.7z"/>
</>],
['solid',<>
	<path d="M447.1 167.1c.125-30.25-18.75-57.27-47.13-67.64c-28.38-10.37-60.12-1.82-79.5 21.31l-10.37-12.89C308.1 104.1 306.1 100.6 305.2 96H142.7C141.9 100.6 139.9 105 136.1 108.8l-76.93 96.16C41.93 227.5 31.1 255.8 31.1 284.9l-.0003 163.1c0 35.38 28.75 64 64 64h256c35.38 0 64-28.63 64-64l.0002-163.1c-.125-17.5-3.875-34.88-11.13-51C431.1 222.4 447.1 196.6 447.1 167.1zM351.1 383.1c0 17.62-14.38 32-32 32h-192c-17.62 0-32-14.38-32-32v-64c0-17.62 14.38-32 32-32h192c17.62 0 32 14.38 32 32V383.1zM377.4 191.7l-24.13-30.13c2.875-10.12 11.75-17.63 22.75-17.63c12.88 0 23.5 10.25 23.88 23.25C400.2 180.1 390.2 190.1 377.4 191.7zM151.1 64h144c6.375 0 12.5-2.5 17-7s7-10.62 7-17v-16c0-6.375-2.5-12.5-7-17s-10.62-7-17-7h-144c-6.375 0-12.5 2.5-17 7s-7 10.62-7 17v16c0 6.375 2.5 12.5 7 17S145.6 64 151.1 64z"/>
</>],
['thin',<>
	<path d="M319.1 287.1h-192c-17.62 0-32 14.38-32 32v64c0 17.62 14.38 32 32 32h192c17.62 0 32-14.38 32-32v-64C351.1 302.4 337.6 287.1 319.1 287.1zM336 383.1c0 8.824-7.178 16-16 16H128c-8.822 0-16-7.176-16-16v-64c0-8.824 7.178-16 16-16h192c8.822 0 16 7.176 16 16V383.1zM448 159.1c0-35.35-28.65-64-64-64c-25.85 0-47.37 15.74-57.44 37.82l-12.07-15.07c-6.742-8.52-10.49-19.13-10.49-29.93L304 62.42c3.334-1.172 6.455-2.875 8.1-5.422c4.5-4.5 7-10.62 7-17v-16c0-6.375-2.5-12.5-7-17s-10.62-7-17-7h-144c-6.375 0-12.5 2.5-17 7s-7 10.62-7 17v16c0 6.375 2.5 12.5 7 17C137.5 59.55 140.7 61.25 144 62.42L143.1 88.76c0 10.8-3.746 21.47-10.55 30.07L56.51 214.9c-15.82 19.88-24.51 44.78-24.51 70.05L32 463.1c0 26.47 21.53 48 48 48h288c26.47 0 48-21.53 48-48l-.0002-179.1c0-22.29-7.099-44.03-19.53-62.51C425.8 216.5 448 191 448 159.1zM144 23.1c0-2.145 .8438-4.215 2.314-5.688C147.8 16.84 149.9 15.1 152 15.1h144c2.143 0 4.217 .8438 5.688 2.312C303.2 19.79 304 21.86 304 23.1v15.1c0 2.145-.8438 4.215-2.314 5.688C300.2 47.16 298.1 47.1 296 47.1h-144c-2.143 0-4.217-.8438-5.686-2.312C144.8 44.21 144 42.14 144 39.1V23.1zM400 284.9v179.1c0 17.62-14.38 32-32 32h-288c-17.62 0-32-14.38-32-32V284.9c0-21.75 7.375-42.87 21-60l76.1-96.13C155 117.4 160 103.2 160 88.75V63.1h128v24.75c0 14.5 5 28.62 13.1 40L379 224.9C392.6 242 400 263.1 400 284.9zM385.8 207.8L338.4 148.5C343.6 127.8 361.6 111.1 384 111.1c26.47 0 48 21.53 48 48C432 185.8 411.4 206.8 385.8 207.8z"/>
</>],

]);

const Jug: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Jug.displayName = "Jug";

export default Jug;