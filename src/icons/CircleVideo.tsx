
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 328c0 13.25-10.75 24-24 24h-144c-13.25 0-24-10.75-24-24V184c0-13.26 10.75-24 24-24h144c13.25 0 24 10.74 24 24V328zM416 307.4c0 10.2-11.68 16.16-20.16 10.32L352 287.5V224.5l43.84-30.24C404.4 188.4 416 194.4 416 204.6V307.4z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM320 328c0 13.25-10.75 24-24 24h-144c-13.25 0-24-10.75-24-24V184c0-13.26 10.75-24 24-24h144c13.25 0 24 10.74 24 24V328zM416 307.4c0 10.2-11.68 16.16-20.16 10.32L352 287.5V224.5l43.84-30.24C404.4 188.4 416 194.4 416 204.6V307.4z"/>
</>],
['light',<>
	<path d="M409.2 178.9c-4.266-2.984-9.719-3.703-14.64-1.922L320 204.1V192c0-17.67-14.33-32-32-32H160C142.3 160 128 174.3 128 192v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V307.9l74.53 27.1C396.3 335.7 398.2 336 400 336c3.234 0 6.453-.9844 9.172-2.891C413.5 330.1 416 325.2 416 320V192C416 186.8 413.5 181.9 409.2 178.9zM288 320H160V192h128V320zM384 297.2L320 273.9V238.1l64-23.27V297.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"/>
</>],
['regular',<>
	<path d="M284 176h-120C152.1 176 144 184.1 144 196v120c0 11.04 8.955 20 20 20h120c11.04 0 20-8.955 20-20v-120C304 184.1 295 176 284 176zM379.8 194.3L336 224.5v62.96l43.84 30.2C388.3 323.5 400 317.6 400 307.4V204.6C400 194.4 388.4 188.4 379.8 194.3zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM320 328c0 13.25-10.75 24-24 24h-144c-13.25 0-24-10.75-24-24V184c0-13.26 10.75-24 24-24h144c13.25 0 24 10.74 24 24V328zM416 307.4c0 10.2-11.68 16.16-20.16 10.32L352 287.5V224.5l43.84-30.24C404.4 188.4 416 194.4 416 204.6V307.4z"/>
</>],
['thin',<>
	<path d="M288 160H160C142.3 160 128 174.3 128 192v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V192C320 174.3 305.7 160 288 160zM304 320c0 8.822-7.178 16-16 16H160c-8.822 0-16-7.178-16-16V192c0-8.822 7.178-16 16-16h128c8.822 0 16 7.178 16 16V320zM392.9 182.6l-52.44 26.22c-3.969 1.969-5.562 6.781-3.594 10.72c2 4 6.938 5.531 10.72 3.594L400 196.9v118.1l-52.44-26.22c-3.812-1.906-8.719-.375-10.72 3.594c-1.969 3.938-.375 8.75 3.594 10.72l52.44 26.22C395.1 330.5 397.6 331.1 400 331.1c2.938 0 5.812-.7813 8.406-2.375C413.2 325.8 416 320.7 416 315.1V196.9c0-5.594-2.844-10.69-7.594-13.62S397.8 180.1 392.9 182.6zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleVideo: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleVideo.displayName = "CircleVideo";

export default CircleVideo;