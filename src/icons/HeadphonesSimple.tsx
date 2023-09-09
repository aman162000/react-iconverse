
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 288L144 288c-35.34 0-64 28.7-64 64.13v63.75C80 451.3 108.7 480 144 480L160 480c17.66 0 32-14.34 32-32.05v-127.9C192 302.3 177.7 288 160 288zM368 288L352 288c-17.66 0-32 14.32-32 32.04v127.9c0 17.7 14.34 32.05 32 32.05L368 480c35.34 0 64-28.7 64-64.13v-63.75C432 316.7 403.3 288 368 288z"/><path className="fa-secondary" d="M256 32C112.9 32 4.563 151.1 0 288v104C0 405.3 10.75 416 23.1 416S48 405.3 48 392V288c0-114.7 93.34-207.8 208-207.8C370.7 80.2 464 173.3 464 288v104C464 405.3 474.7 416 488 416S512 405.3 512 392V287.1C507.4 151.1 399.1 32 256 32z"/>
</>],
['light',<>
	<path d="M383.1 256L352 256.1c-17.62 0-32 14.38-32 32v159.9c0 17.62 14.38 32.05 32 32.05l31.99 .0156C419.4 480 448 451.3 448 415.9v-95.75C448 284.8 419.4 256 383.1 256zM416 415.9c0 17.62-14.38 32.13-32 32.13h-32V288l32 .0417c17.62 0 32 14.5 32 32.13V415.9zM160 256.1L127.1 256C92.62 256 64 284.8 64 320.2v95.75c0 35.38 28.62 64.09 63.99 64.09L160 480c17.62 0 32-14.42 32-32.05V288.1C192 270.4 177.6 256.1 160 256.1zM160 448.1H128c-17.62 0-32-14.5-32-32.13v-95.75c0-17.62 14.38-32.13 32-32.13l32-.0417V448.1zM243 32.38C105.5 39.21 0 157.9 0 295.5v104.5c0 8.801 7.201 16 16 16c8.801 0 16-7.168 16-15.97V294.6C32 174.1 124.4 70.3 244.7 64.34C373.3 57.98 480 160.8 480 288.1v112c0 8.801 7.201 15.97 16 15.97c8.801 0 16-7.199 16-16V287.1C512 142.5 390 25.08 243 32.38z"/>
</>],
['regular',<>
	<path d="M160 271.9H144c-35.34 0-64 28.7-64 64.13v79.88C80 451.3 108.7 480 144 480L160 480c17.66 0 32-14.34 32-32.05V303.9C192 286.2 177.7 271.9 160 271.9zM144 432c-8.822 0-16-7.234-16-16.12V336c0-8.893 7.178-16.12 16-16.12V432zM256 32C112.9 32 4.563 151.1 0 288v112c0 8.844 7.156 16 16 16L32 416c8.844 0 15.99-7.219 15.99-16.06L48 288c0-114.7 93.34-207.8 208-207.8C370.7 80.2 464 173.3 464 288l-.0068 111.9C463.1 408.8 471.2 416 480 416l16 .0313c8.844 0 16-7.156 16-16V287.1C507.4 151.1 399.1 32 256 32zM368 271.9H352c-17.66 0-32 14.34-32 32.06v144c0 17.7 14.34 32.05 32 32.05L368 480c35.34 0 64-28.7 64-64.13V336C432 300.6 403.3 271.9 368 271.9zM384 415.9C384 424.8 376.8 432 368 432V319.9c8.822 0 16 7.232 16 16.12V415.9z"/>
</>],
['solid',<>
	<path d="M256 32C112.9 32 4.563 151.1 0 288v104C0 405.3 10.75 416 23.1 416S48 405.3 48 392V288c0-114.7 93.34-207.8 208-207.8C370.7 80.2 464 173.3 464 288v104C464 405.3 474.7 416 488 416S512 405.3 512 392V287.1C507.4 151.1 399.1 32 256 32zM160 288L144 288c-35.34 0-64 28.7-64 64.13v63.75C80 451.3 108.7 480 144 480L160 480c17.66 0 32-14.34 32-32.05v-127.9C192 302.3 177.7 288 160 288zM368 288L352 288c-17.66 0-32 14.32-32 32.04v127.9c0 17.7 14.34 32.05 32 32.05L368 480c35.34 0 64-28.7 64-64.13v-63.75C432 316.7 403.3 288 368 288z"/>
</>],
['thin',<>
	<path d="M383.1 256c-26.47 0-48.01 21.53-48.01 48.03v127.9c0 26.5 21.54 48.09 48.01 48.09c44.11 0 80-35.91 80-80.09l-.0068-63.81C463.1 291.9 428.1 256 383.1 256zM447.1 399.9c0 35.42-28.66 64.13-64 64.13c-17.66 0-32-14.36-32-32.06V304.1c0-17.72 14.34-32.06 32-32.06c35.34 0 64 28.7 64 64.13V399.9zM256 32C117.2 32 4.781 144.3 0 288v88C0 380.4 3.594 384 8 384s8-3.578 8-8V288.3C20.47 153.5 125.9 48 256 48c130.1 0 235.5 105.5 240 240v88c0 4.422 3.594 8 8 8S512 380.4 512 376V287.1C507.2 144.6 394.8 32 256 32zM127.1 256c-44.11 0-80.01 35.91-80.01 80.09l.0068 63.81c0 44.18 35.89 80.09 80 80.09c26.47 0 47.99-21.59 47.99-48.09V304.1C175.1 277.6 154.5 256 127.1 256zM159.1 431.9c0 17.7-14.34 32.06-32 32.06c-35.34 0-64-28.7-64-64.13v-63.75c0-35.42 28.66-64.13 64-64.13c17.66 0 32 14.34 32 32.06V431.9z"/>
</>],

]);

const HeadphonesSimple: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HeadphonesSimple.displayName = "HeadphonesSimple";

export default HeadphonesSimple;