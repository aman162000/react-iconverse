
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32 144C32 64.47 96.47 0 176 0C255.5 0 320 64.47 320 144C320 223.5 255.5 288 176 288C96.47 288 32 223.5 32 144zM112 144C112 108.7 140.7 80 176 80C184.8 80 192 72.84 192 64C192 55.16 184.8 48 176 48C122.1 48 80 90.98 80 144C80 152.8 87.16 160 96 160C104.8 160 112 152.8 112 144z"/><path className="fa-secondary" d="M176 288C186.1 288 197.7 286.8 208 284.4V480C208 497.7 193.7 512 176 512C158.3 512 144 497.7 144 480V284.4C154.3 286.8 165 288 176 288V288z"/>
</>],
['light',<>
	<path d="M112 160C103.2 160 96 152.8 96 144C96 99.82 131.8 64 176 64C184.8 64 192 71.16 192 80C192 88.84 184.8 96 176 96C149.5 96 128 117.5 128 144C128 152.8 120.8 160 112 160zM320 144C320 218.1 264 279.2 192 287.1V496C192 504.8 184.8 512 176 512C167.2 512 160 504.8 160 496V287.1C88 279.2 32 218.1 32 144C32 64.47 96.47 0 176 0C255.5 0 320 64.47 320 144zM176 256C237.9 256 288 205.9 288 144C288 82.14 237.9 32 176 32C114.1 32 64 82.14 64 144C64 205.9 114.1 256 176 256z"/>
</>],
['regular',<>
	<path d="M200 488C200 501.3 189.3 512 176 512C162.7 512 152 501.3 152 488V286C83.9 274.6 32 215.4 32 144C32 64.47 96.47 0 176 0C255.5 0 320 64.47 320 144C320 215.4 268.1 274.6 200 286V488zM176 48C122.1 48 80 90.98 80 144C80 197 122.1 240 176 240C229 240 272 197 272 144C272 90.98 229 48 176 48z"/>
</>],
['solid',<>
	<path d="M320 144C320 223.5 255.5 288 176 288C96.47 288 32 223.5 32 144C32 64.47 96.47 0 176 0C255.5 0 320 64.47 320 144zM192 64C192 55.16 184.8 48 176 48C122.1 48 80 90.98 80 144C80 152.8 87.16 160 96 160C104.8 160 112 152.8 112 144C112 108.7 140.7 80 176 80C184.8 80 192 72.84 192 64zM144 480V317.1C154.4 319 165.1 319.1 176 319.1C186.9 319.1 197.6 319 208 317.1V480C208 497.7 193.7 512 176 512C158.3 512 144 497.7 144 480z"/>
</>],
['thin',<>
	<path d="M88 144C83.58 144 80 140.4 80 136C80 87.4 119.4 48 168 48C172.4 48 176 51.58 176 56C176 60.42 172.4 64 168 64C128.2 64 96 96.24 96 136C96 140.4 92.42 144 88 144zM320 144C320 220.8 259.8 283.6 184 287.8V504C184 508.4 180.4 512 176 512C171.6 512 168 508.4 168 504V287.8C92.19 283.6 32 220.8 32 144C32 64.47 96.47 0 176 0C255.5 0 320 64.47 320 144V144zM176 272C246.7 272 304 214.7 304 144C304 73.31 246.7 16 176 16C105.3 16 48 73.31 48 144C48 214.7 105.3 272 176 272z"/>
</>],

]);

const MapPin: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MapPin.displayName = "MapPin";

export default MapPin;
