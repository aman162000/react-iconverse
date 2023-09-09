
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M303.2 399.6C289.1 410.6 272.5 416.1 256 416.1s-33.06-5.458-47.16-16.44L0 237.2v226.8C0 490.5 21.49 512 48 512h416c26.51 0 48-21.49 48-47.1V237.2L303.2 399.6zM495.9 209.1c12.94-10.2 13.89-30.14 2.389-41.95c-1.451-1.492-3.014-2.891-4.686-4.184C481.4 153.4 470.2 144.6 448 128.1V246.4C448 246.4 495.9 209.2 495.9 209.1zM256.4 0H255.6c-18.44 0-42.96 18.33-60.66 32h122.2C299.4 18.33 274.9 0 256.4 0zM16.18 209.2L64 246.4V128.1C41.8 144.6 30.56 153.4 18.38 163C16.7 164.3 15.14 165.7 13.69 167.2C2.191 178.1 3.24 199 16.18 209.2C16.25 209.3 16.11 209.2 16.18 209.2zM176 223.1h160c8.836 0 16-7.164 16-16c0-8.838-7.164-15.1-16-15.1h-160c-8.836 0-16 7.162-16 15.1C160 216.8 167.2 223.1 176 223.1zM176 159.1h160c8.836 0 16-7.164 16-15.1c0-8.838-7.164-15.1-16-15.1h-160c-8.836 0-16 7.162-16 15.1C160 152.8 167.2 159.1 176 159.1z"/><path className="fa-secondary" d="M416 32H96c-17.67 0-32 14.33-32 31.1V246.4l164.5 127.9c16.2 12.6 38.87 12.6 55.06 0L448 246.4V64C448 46.33 433.7 32 416 32zM336 223.1h-160c-8.836 0-16-7.164-16-16c0-8.838 7.164-15.1 16-15.1h160c8.836 0 16 7.162 16 15.1C352 216.8 344.8 223.1 336 223.1zM336 159.1h-160c-8.836 0-16-7.164-16-15.1c0-8.838 7.164-15.1 16-15.1h160c8.836 0 16 7.162 16 15.1C352 152.8 344.8 159.1 336 159.1z"/>
</>],
['light',<>
	<path d="M496 192C487.2 192 480 199.2 480 208v256c0 8.836-7.164 16-16 16h-416C39.16 480 32 472.8 32 464v-256C32 199.2 24.84 192 16 192S0 199.2 0 208v256C0 490.5 21.49 512 48 512h416c26.51 0 48-21.49 48-47.1V208C512 199.2 504.8 192 496 192zM64.88 276.3C65.16 277.3 65.43 278.3 65.88 279.2c.4355 .8633 1.012 1.605 1.607 2.385c.6953 .9102 1.393 1.75 2.264 2.49c.2949 .25 .4434 .6035 .7598 .8359l132.8 97.72C218.7 393.1 236.9 399.1 256 399.1s37.3-6.023 52.7-17.4l132.8-97.72c.3164-.2324 .4648-.5859 .7598-.8359c.8711-.7402 1.568-1.58 2.264-2.49c.5957-.7793 1.172-1.521 1.607-2.385c.457-.8984 .7266-1.84 1.01-2.826c.3027-1.061 .5586-2.078 .6406-3.176C447.8 272.8 448 272.4 448 272v-224C448 21.53 426.5 0 400 0h-288C85.53 0 64 21.53 64 48v224c0 .4121 .2031 .7578 .2344 1.162C64.32 274.3 64.57 275.3 64.88 276.3zM96 48C96 39.19 103.2 32 112 32h288C408.8 32 416 39.19 416 48v215.9l-126.3 92.92c-19.78 14.62-47.64 14.62-67.45 0L96 263.9V48zM352 239.1c0-8.838-7.164-16-16-16h-160c-8.836 0-16 7.162-16 16c0 8.836 7.164 15.1 16 15.1h160C344.8 255.1 352 248.8 352 239.1zM176 159.1h160c8.836 0 16-7.164 16-15.1c0-8.838-7.164-15.1-16-15.1h-160c-8.836 0-16 7.162-16 15.1C160 152.8 167.2 159.1 176 159.1z"/>
</>],
['regular',<>
	<path d="M476.8 214.2c-8.244 0-16.23 2.891-22.56 8.168l-156.9 130.8c-22.68 18.9-59.8 18.91-82.49 .002L57.8 222.3c-6.332-5.277-14.32-8.168-22.56-8.168C15.78 214.2 0 229.9 0 249.4v198.6C0 483.3 28.65 512 64 512h384c35.35 0 64-28.67 64-64.01V249.4C512 229.9 496.2 214.2 476.8 214.2zM464 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V276.7l136.1 113.4C204.3 406.8 229.8 416.1 256 416.1s51.75-9.224 71.97-26.02L464 276.7V448zM112 225.9V56c0-4.406 3.594-8 8-8h272c4.406 0 8 3.594 8 8v169.8l33.72-28.1C438.1 194.1 442.9 191.3 448 188.9V56C448 25.12 422.9 0 392 0h-272C89.13 0 64 25.12 64 56v132.9c5.064 2.41 9.941 5.23 14.3 8.863L112 225.9zM328 96h-144C170.7 96 160 106.7 160 120C160 133.3 170.7 144 184 144h144C341.3 144 352 133.3 352 120C352 106.7 341.3 96 328 96zM328 176h-144C170.7 176 160 186.7 160 200C160 213.3 170.7 224 184 224h144C341.3 224 352 213.3 352 200C352 186.7 341.3 176 328 176z"/>
</>],
['solid',<>
	<path d="M256 417.1c-16.38 0-32.88-4.1-46.88-15.12L0 250.9v213.1C0 490.5 21.5 512 48 512h416c26.5 0 48-21.5 48-47.1V250.9l-209.1 151.1C288.9 412 272.4 417.1 256 417.1zM493.6 163C484.8 156 476.4 149.5 464 140.1v-44.12c0-26.5-21.5-48-48-48l-77.5 .0016c-3.125-2.25-5.875-4.25-9.125-6.5C312.6 29.13 279.3-.3732 256 .0018C232.8-.3732 199.4 29.13 182.6 41.5c-3.25 2.25-6 4.25-9.125 6.5L96 48c-26.5 0-48 21.5-48 48v44.12C35.63 149.5 27.25 156 18.38 163C6.75 172 0 186 0 200.8v10.62l96 69.37V96h320v184.7l96-69.37V200.8C512 186 505.3 172 493.6 163zM176 255.1h160c8.836 0 16-7.164 16-15.1c0-8.838-7.164-16-16-16h-160c-8.836 0-16 7.162-16 16C160 248.8 167.2 255.1 176 255.1zM176 191.1h160c8.836 0 16-7.164 16-16c0-8.838-7.164-15.1-16-15.1h-160c-8.836 0-16 7.162-16 15.1C160 184.8 167.2 191.1 176 191.1z"/>
</>],
['thin',<>
	<path d="M490.9 178.3L448 142.6V104C448 81.94 430.1 64 408 64h-54.7l-61.27-50.86C281.8 4.666 269 .0018 256 .0018S230.2 4.666 219.1 13.13L158.7 64H104C81.94 64 64 81.94 64 104v38.61L21.05 178.3C7.676 189.4 0 205.1 0 223.9v224.1C0 483.3 28.71 512 64 512h384c35.29 0 64-28.71 64-64.01V223.9C512 205.1 504.3 189.4 490.9 178.3zM448 163.4l32.73 27.17c9.113 7.562 18.69 19.22 0 34.75L448 252.5V163.4zM230.2 25.46C237.8 19.16 246.9 16.01 256 16.01s18.22 3.15 25.81 9.451L328.2 64H183.8L230.2 25.46zM80 104c0-13.22 10.78-24 24-24h304c13.22 0 24 10.78 24 24v161.8l-150.2 124.7C274.2 396.8 265.1 399.1 256 399.1s-18.22-3.16-25.81-9.463L80 265.8V104zM31.27 190.6L64 163.4v89.1L31.27 225.3C12.49 209.7 22.38 197.1 31.27 190.6zM496 447.1c0 26.52-21.49 48.02-48 48.02H64c-26.51 0-48-21.5-48-48.02V231.8c1.688 1.938 3.047 4.139 5.055 5.805l198.9 165.2C230.2 411.3 242.1 416.1 256 416.1c13.02 0 25.82-4.72 36.02-13.2l198.9-165.2C492.1 235.1 494.3 233.8 496 231.8V447.1zM168 176h176C348.4 176 352 172.4 352 168S348.4 160 344 160h-176C163.6 160 160 163.6 160 168S163.6 176 168 176zM352 248c0-4.406-3.578-8-8-8h-176C163.6 240 160 243.6 160 248S163.6 256 168 256h176C348.4 256 352 252.4 352 248z"/>
</>],

]);

const EnvelopeOpenText: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

EnvelopeOpenText.displayName = "EnvelopeOpenText";

export default EnvelopeOpenText;
