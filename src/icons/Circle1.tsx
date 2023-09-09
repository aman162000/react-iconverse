
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M344 360c0 13.25-10.75 24-24 24H192c-13.25 0-24-10.75-24-24S178.8 336 192 336h40V196.8L217.3 206.6C206.3 213.9 191.4 210.1 184 199.1C176.7 188.9 179.7 174 190.7 166.7l52-34.66c7.391-4.938 16.86-5.375 24.64-1.188C275.1 135 280 143.2 280 152v184H320C333.3 336 344 346.8 344 360z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM320 384H192c-13.25 0-24-10.75-24-24S178.8 336 192 336h40V196.8L217.3 206.6C206.3 213.9 191.4 210.1 184 199.1C176.7 188.9 179.7 174 190.7 166.7l52-34.66c7.391-4.938 16.86-5.375 24.64-1.188C275.1 135 280 143.2 280 152v184H320c13.25 0 24 10.75 24 24S333.3 384 320 384z"/>
</>],
['light',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM320 352h-48V144c0-5.906-3.25-11.31-8.453-14.09c-5.172-2.812-11.5-2.5-16.42 .7813l-48 32C191.8 167.6 189.8 177.5 194.7 184.9c4.875 7.344 14.8 9.312 22.19 4.438L240 173.9V352H192c-8.844 0-16 7.156-16 16S183.2 384 192 384h128c8.844 0 16-7.156 16-16S328.8 352 320 352z"/>
</>],
['regular',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM320 336h-40V152c0-8.844-4.875-16.97-12.67-21.16c-7.781-4.188-17.25-3.75-24.64 1.188l-52 34.66C179.7 174 176.7 188.9 184 199.1c7.328 11 22.23 13.97 33.28 6.656L232 196.8V336H192c-13.25 0-24 10.75-24 24S178.8 384 192 384h128c13.25 0 24-10.75 24-24S333.3 336 320 336z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM320 384H192c-13.25 0-24-10.75-24-24S178.8 336 192 336h40V196.8L217.3 206.6C206.3 213.9 191.4 210.1 184 199.1C176.7 188.9 179.7 174 190.7 166.7l52-34.66c7.391-4.938 16.86-5.375 24.64-1.188C275.1 135 280 143.2 280 152v184H320c13.25 0 24 10.75 24 24S333.3 384 320 384z"/>
</>],
['thin',<>
	<path d="M320 368h-56V136c0-2.844-1.516-5.5-3.984-6.906c-2.438-1.406-5.484-1.469-7.984-.0313l-56 32C192.2 163.3 190.9 168.1 193 171.1c2.219 3.844 7.094 5.125 10.92 2.969L248 149.8V368H192c-4.422 0-8 3.594-8 8S187.6 384 192 384h128c4.422 0 8-3.594 8-8S324.4 368 320 368zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const Circle1: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Circle1.displayName = "Circle1";

export default Circle1;
