
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 367.5c0 60.71 51.14 111.8 111.9 111.8s111.9-51.12 111.9-111.8V255.7H0V367.5zM556.2 300.4l-63.93-92.66l-188.6 131l63.93 92.66c35.16 51.12 108.7 63.91 159.8 28.76S591.3 351.5 556.2 300.4z"/><path className="fa-secondary" d="M111.1 32C51.24 32-.0021 83.25-.0021 143.1L0 255.7h223.7L223.9 143.9C223.9 83.23 172.7 32 111.1 32zM425.1 111.9c-35.16-51.12-108.7-63.91-159.8-28.76L255.7 92.71v178.9l47.94 67.1l188.6-131L425.1 111.9z"/>
</>],
['light',<>
	<path d="M554.6 302.2l-131.7-181.2c-21.01-28.91-54.9-46.17-90.67-46.17c-23.76 0-46.51 7.398-65.77 21.39C244.1 112.4 230 135.6 224 160.6L223.9 143.9C223.9 82.19 173.7 32 111.1 32S-.0021 82.2-.0021 143.1L-.0028 368c0 61.76 50.24 112 112 112s112-50.24 112-112L224 214.4C227.4 227.8 233.1 240.8 241.7 252.6l131.7 181.2C394.4 462.7 428.3 480 464.1 480c23.76 0 46.5-7.398 65.77-21.4C579.8 422.3 590.9 352.1 554.6 302.2zM191.1 368c0 44.18-35.81 80-79.1 80c-44.18 0-79.1-35.82-79.1-80L32 272h160L191.1 368zM192 240H32l-.0003-96c0-44.18 35.82-80 79.1-80c44.18 0 79.1 35.82 79.1 80L192 240zM285.3 122.1c14.2-10.32 30.65-15.28 46.96-15.29c24.74 0 49.13 11.44 64.79 32.98l71.7 98.68l-15.27-20.1l-129.4 94.03L267.6 233.8C241.6 198.1 249.6 148 285.3 122.1zM511 432.7C496.8 443 480.4 448 464.1 448c-24.74 0-49.13-11.44-64.79-32.98L339.1 332.1l3.787 5.209l129.5-94.03l56.42 77.66C554.7 356.7 546.8 406.7 511 432.7z"/>
</>],
['regular',<>
	<path d="M553.8 301l-133.1-179.5c-37-49.59-107.2-59.79-156.7-22.79C244.1 112.8 231 131.8 224 152.6L223.9 143.9C223.9 82.07 173.8 32 111.1 32S-.0021 82.08-.0021 143.1L-.0028 368c0 61.88 50.13 112 112 112s112-50.13 112-112L224 223c3.688 11.31 8.75 22.34 16.26 32.4l133.1 179.5c37 49.59 107.2 59.79 156.7 22.79C580.6 420.7 590.8 350.6 553.8 301zM176 256h-128V144c0-84.75 128-84.75 128 0V256zM345.7 316.5L278.7 226.7c-50.68-67.92 51.91-144.5 102.6-76.55L448.3 239.9L345.7 316.5z"/>
</>],
['solid',<>
	<path d="M555.3 300.1L424.3 112.8C401.9 81 366.4 64 330.4 64c-22.63 0-45.5 6.75-65.5 20.75C245.2 98.5 231.2 117.5 223.4 138.5C220.5 79.25 171.1 32 111.1 32c-61.88 0-111.1 50.08-111.1 111.1L-.0028 368c0 61.88 50.12 112 112 112s112-50.13 112-112L223.1 218.9C227.2 227.5 231.2 236 236.7 243.9l131.3 187.4C390.3 463 425.8 480 461.8 480c22.75 0 45.5-6.75 65.5-20.75C579 423.1 591.5 351.8 555.3 300.1zM159.1 256H63.99V144c0-26.5 21.5-48 48-48s48 21.5 48 48V256zM354.8 300.9l-65.5-93.63c-7.75-11-10.75-24.5-8.375-37.63c2.375-13.25 9.75-24.87 20.75-32.5C310.1 131.1 320.1 128 330.4 128c16.5 0 31.88 8 41.38 21.5l65.5 93.75L354.8 300.9z"/>
</>],
['thin',<>
	<path d="M111.1 48C59.06 48 16 91.06 16 144v224c0 52.94 43.06 96 95.1 96s95.1-43.06 95.1-96v-224C207.1 91.06 164.9 48 111.1 48zM191.1 368c0 44.11-35.88 80-79.1 80s-79.1-35.89-79.1-80L31.1 264h159.1L191.1 368zM191.1 248H31.1L31.1 144c0-44.11 35.88-80 79.1-80s79.1 35.89 79.1 80L191.1 248zM541.2 308l-136.3-187c-32.09-44.05-94.62-54.16-139.2-22.52C243.9 113.9 229.5 136.7 225.3 162.8C221 188.7 227.2 214.7 242.8 235.1l136.3 187c19.47 26.7 50.12 40.94 81.18 40.94c20.16 0 40.5-5.984 58.06-18.42c21.75-15.41 36.09-38.23 40.34-64.31C562.9 355.3 556.7 329.3 541.2 308zM255.7 226.5C242.7 208.7 237.5 187 241.1 165.4C244.6 143.5 256.6 124.4 274.9 111.5c14.78-10.47 31.87-15.5 48.84-15.5c26.12 0 51.87 11.94 68.22 34.39l63.38 86.95l-136.1 96.32L255.7 226.5zM542.9 378.6c-3.562 21.81-15.59 40.92-33.81 53.83c-37.53 26.61-90.12 18.14-117.1-18.89l-63.38-86.95l136.1-96.32l63.53 87.15C541.3 335.3 546.4 356.1 542.9 378.6z"/>
</>],

]);

const Capsules: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Capsules.displayName = "Capsules";

export default Capsules;
