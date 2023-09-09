
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M1.999 145.6C-1.813 136.8-.0781 126.7 6.406 119.7l104-112c9.094-9.781 26.09-9.781 35.19 0l104 112c6.484 6.984 8.219 17.17 4.406 25.92C250.2 154.3 241.5 160 232 160H176v96h-96V160H24C14.45 160 5.812 154.3 1.999 145.6z"/><path className="fa-secondary" d="M254 366.7c3.812 8.75 2.078 18.94-4.406 25.92l-104 112c-9.094 9.781-26.09 9.781-35.19 0l-104-112C-.0781 385.7-1.813 375.5 2 366.7S14.45 352.3 24 352.3H80v-96h96v96h56C241.5 352.3 250.2 357.1 254 366.7z"/>
</>],
['light',<>
	<path d="M232 352h-88l.0039-192h87.1c9.547 0 18.19-5.656 21.1-14.41s2.078-18.94-4.406-25.92l-104-112C140.8 2.555 134.4-.004 127.1-.004S115.2 2.555 110.4 7.672l-104 112C-.0781 126.7-1.811 136.8 1.999 145.6C5.814 154.3 14.45 160 24 160h88L111.1 352H24c-9.547 0-18.19 5.656-22 14.41s-2.078 18.94 4.406 25.92l103.1 112c4.75 5.117 11.17 7.668 17.59 7.668s12.85-2.551 17.6-7.668l104-112c6.484-6.984 8.217-17.17 4.407-25.92C250.2 357.7 241.5 352 232 352zM42.34 128L128 35.75L213.7 128H42.34zM128 476.3L42.34 384h171.3L128 476.3z"/>
</>],
['regular',<>
	<path d="M254 366.4C250.2 357.7 241.5 352 232 352H152V160h80c9.547 0 18.19-5.656 21.1-14.41c3.813-8.75 2.078-18.94-4.406-25.92l-104-112C141 2.781 134.5 .3359 128 .3359s-13.05 2.445-17.59 7.336l-104 112C-.0781 126.7-1.813 136.8 1.999 145.6C5.812 154.3 14.45 160 24 160h80v192H24c-9.547 0-18.19 5.656-22 14.41s-2.078 18.94 4.406 25.92l103.1 112c4.547 4.891 11.07 7.336 17.6 7.336s13.05-2.445 17.59-7.336l104-112C256.1 385.3 257.8 375.2 254 366.4z"/>
</>],
['solid',<>
	<path d="M249.6 392.3l-104 112c-9.094 9.781-26.09 9.781-35.19 0l-103.1-112c-6.484-6.984-8.219-17.17-4.406-25.92S14.45 352 24 352H80V160H24C14.45 160 5.812 154.3 1.999 145.6C-1.813 136.8-.0781 126.7 6.406 119.7l104-112c9.094-9.781 26.09-9.781 35.19 0l104 112c6.484 6.984 8.219 17.17 4.406 25.92C250.2 154.3 241.5 160 232 160H176v192h56c9.547 0 18.19 5.656 22 14.41S256.1 385.3 249.6 392.3z"/>
</>],
['thin',<>
	<path d="M121.8 2.867l-120 144C-.1405 149.2-.5155 152.6 .7345 155.4c1.312 2.812 4.156 4.609 7.25 4.609h112l.0078 192H7.992c-3.094 0-5.938 1.797-7.25 4.609c-1.312 2.797-.875 6.125 1.094 8.516l120 144c1.531 1.812 3.781 2.879 6.156 2.879s4.625-1.066 6.156-2.879l120-144c1.219-1.469 1.844-3.281 1.844-5.125c0-1.156-.25-2.312-.75-3.391c-1.312-2.812-4.156-4.609-7.25-4.609h-112l-.0078-192h112c3.094 0 5.938-1.797 7.25-4.609c.5-1.078 .75-2.234 .75-3.391c0-1.844-.625-3.656-1.844-5.125l-120-144C132.6 1.055 130.4-.004 127.1-.004S123.4 1.055 121.8 2.867zM230.9 367.1l-102.9 123.5l-102.9-123.5H230.9zM230.9 143.1H25.08l102.9-123.5L230.9 143.1z"/>
</>],

]);

const UpDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={256} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UpDown.displayName = "UpDown";

export default UpDown;
