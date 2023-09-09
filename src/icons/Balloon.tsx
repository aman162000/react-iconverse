
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 192c0-106-85.96-192-192-192S0 85.96 0 192c0 84.42 101.3 196.4 158.8 238.7l-29.07 58.14c-2.469 4.969-2.219 10.84 .6875 15.56C133.3 509.1 138.5 512 144 512h96c5.531 0 10.69-2.875 13.62-7.594c2.906-4.719 3.156-10.59 .6875-15.56l-29.07-58.14C282.7 388.4 384 276.4 384 192zM176 96C131.9 96 96 131.9 96 176C96 184.8 88.84 192 80 192S64 184.8 64 176C64 114.3 114.3 64 176 64C184.8 64 192 71.16 192 80S184.8 96 176 96z"/><path className="fa-secondary" d="M176 96C131.9 96 96 131.9 96 176C96 184.8 88.84 192 80 192S64 184.8 64 176C64 114.3 114.3 64 176 64C184.8 64 192 71.16 192 80S184.8 96 176 96z"/>
</>],
['light',<>
	<path d="M176 80c-52.94 0-96 43.06-96 96C80 184.8 87.16 192 96 192s16-7.156 16-16c0-35.28 28.72-64 64-64C184.8 112 192 104.8 192 96S184.8 80 176 80zM384 187.4C384 84.09 297.9 0 192 0S0 84.09 0 187.4c0 81.31 98.06 189.1 157.2 228.8l-42.9 71.49c-2.969 4.938-3.031 11.09-.2187 16.09C116.9 508.9 122.3 512 128 512h128c5.75 0 11.09-3.094 13.94-8.125c2.812-5 2.75-11.16-.2187-16.09l-42.9-71.49C285.9 376.5 384 268.7 384 187.4zM227.8 480h-71.5l28.8-48h13.9L227.8 480zM192.6 400C169.7 396.2 32 272.9 32 187.4C32 101.7 103.8 32 192 32s160 69.72 160 155.4C352 272.9 214.4 396.2 192.6 400z"/>
</>],
['regular',<>
	<path d="M184 80C126.7 80 80 126.7 80 184c0 13.25 10.75 24 24 24S128 197.3 128 184C128 153.1 153.1 128 184 128c13.25 0 24-10.75 24-24S197.3 80 184 80zM384 192c0-105.9-86.13-192-192-192S0 86.13 0 192c0 77.22 86.33 182.1 147.1 226.6l-32.1 57.78c-4.156 7.438-4.031 16.5 .2813 23.81C119.6 507.5 127.5 512 136 512h112c8.5 0 16.38-4.5 20.69-11.84c4.312-7.312 4.438-16.38 .2813-23.81l-32.1-57.78C297.7 374.1 384 269.2 384 192zM192 391.3C162.3 378 48 266.8 48 192c0-79.41 64.59-144 144-144s144 64.59 144 144C336 266.8 221.7 378 192 391.3z"/>
</>],
['solid',<>
	<path d="M384 192c0-106-85.96-192-192-192S0 85.96 0 192c0 84.42 101.3 196.4 158.8 238.7l-29.07 58.14c-2.469 4.969-2.219 10.84 .6875 15.56C133.3 509.1 138.5 512 144 512h96c5.531 0 10.69-2.875 13.62-7.594c2.906-4.719 3.156-10.59 .6875-15.56l-29.07-58.14C282.7 388.4 384 276.4 384 192zM176 96C131.9 96 96 131.9 96 176C96 184.8 88.84 192 80 192S64 184.8 64 176C64 114.3 114.3 64 176 64C184.8 64 192 71.16 192 80S184.8 96 176 96z"/>
</>],
['thin',<>
	<path d="M384 189.7C384 85.09 297.9 0 192 0S0 85.09 0 189.7c0 86.91 105.8 197.1 159.8 235.5l-37.5 62.56c-3.031 5-3.125 11.03-.25 16.12C124.9 508.9 130.3 512 136 512h112c5.75 0 11.09-3.125 13.94-8.125c2.875-5.094 2.781-11.12-.2187-16.12l-37.53-62.56C278.2 387.7 384 276.6 384 189.7zM248 496H136l38.37-64h35.2L248 496zM208.1 416H175C127.4 386.2 16 273.3 16 189.7C16 93.94 94.97 16 192 16s176 77.94 176 173.7C368 273.3 256.6 386.2 208.1 416zM176 72c-57.34 0-104 46.66-104 104c0 4.406 3.594 8 8 8S88 180.4 88 176c0-48.53 39.47-88 88-88c4.406 0 8-3.594 8-8S180.4 72 176 72z"/>
</>],

]);

const Balloon: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Balloon.displayName = "Balloon";

export default Balloon;
