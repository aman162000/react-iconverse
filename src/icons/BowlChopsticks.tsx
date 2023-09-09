
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M511.1 256.2c0 95.69-51.5 179-127.1 223.8C383.1 497.7 369.7 512 351.1 512H160c-17.67 0-31.1-14.33-31.1-32c-76.5-44.81-127.1-128.1-127.1-223.8c0-17.8 14.37-32.19 31.1-32.19h447.1C497.6 223.1 511.1 238.4 511.1 256.2z"/><path className="fa-secondary" d="M14.71 127.1c1.84 0-26.02 4.596 477.2-80.24C504.1 45.63 512 35.29 512 24.08c0-14.41-11.93-24.01-23.98-24.01c-3.727 0 27.4-6.23-476.3 98.77C4.854 100.3 0 106.4 0 113.2C0 122.1 7.361 127.1 14.71 127.1zM487.6 128.8L15.74 143.5C6.969 143.8 0 150.1 0 159.8C0 168.7 7.275 176 16.25 176h472.1C501.4 176 512 165.4 512 152.4C512 139 500.1 128.3 487.6 128.8z"/>
</>],
['light',<>
	<path d="M479.1 223.1H32c-17.62 0-31.1 14.56-31.1 32.19c0 94.76 51.5 176.9 128 221.3l-.0033 2.501C128 497.7 142.3 512 160 512h191.1c17.67 0 31.1-14.33 31.1-32l-.0033-2.501c76.5-44.38 128-126.6 128-221.3C511.1 238.6 497.6 223.1 479.1 223.1zM367.9 449.8c-9.869 5.725-15.94 16.27-15.94 27.68v2.5H160v-2.5c0-11.41-6.074-21.96-15.94-27.68c-69.12-40.09-112.1-114.4-112.1-193.8h447.1C479.1 335.4 437.1 409.7 367.9 449.8zM15.97 128c1.062 0 2.125-.0938 3.156-.3125l479.1-96.01c8.687-1.734 14.31-10.16 12.56-18.83c-1.75-8.688-10.59-14.31-18.81-12.55L12.88 96.33C4.194 98.07-1.431 106.5 .319 115.2C1.85 122.8 8.506 128 15.97 128zM15.97 191.1c.375 0 .7187-.0156 1.094-.0313l479.1-32c8.812-.5938 15.5-8.219 14.91-17.03c-.5938-8.829-8.375-15.2-17.03-14.91L14.94 160C6.131 160.6-.5559 168.2 .0378 177C.6003 185.5 7.631 191.1 15.97 191.1z"/>
</>],
['regular',<>
	<path d="M14.71 127.1c1.84 0-26.02 4.596 477.2-80.24C504.1 45.63 512 35.29 512 24.08c0-14.41-11.93-24.01-23.98-24.01c-3.727 0 27.4-6.23-476.3 98.77C4.854 100.3 0 106.4 0 113.2C0 122.1 7.361 127.1 14.71 127.1zM479.1 223.1H32c-17.62 0-32 14.39-32 32.19c0 95.69 51.5 179 127.1 223.8c0 17.67 14.33 32 32 32h191.1c17.67 0 32-14.33 32-32c76.5-44.81 127.1-128.1 127.1-223.8C511.1 238.4 497.6 223.1 479.1 223.1zM359.7 438.6c-9.928 5.816-17.27 14.89-20.99 25.42H173.3c-3.723-10.53-11.07-19.6-20.99-25.42C92.47 403.6 53.74 340.7 48.59 272h414.8C458.3 340.7 419.5 403.6 359.7 438.6zM487.6 128.8L15.74 143.5C6.969 143.8 0 150.1 0 159.8C0 168.7 7.275 176 16.25 176h472.1C501.4 176 512 165.4 512 152.4C512 139 500.1 128.3 487.6 128.8z"/>
</>],
['solid',<>
	<path d="M14.71 127.1c1.84 0-26.02 4.596 477.2-80.24C504.1 45.63 512 35.29 512 24.08c0-14.41-11.93-24.01-23.98-24.01c-3.727 0 27.4-6.23-476.3 98.77C4.854 100.3 0 106.4 0 113.2C0 122.1 7.361 127.1 14.71 127.1zM479.1 223.1H32c-17.62 0-32 14.39-32 32.19c0 95.69 51.5 179 127.1 223.8c0 17.67 14.33 32 32 32h191.1c17.67 0 32-14.33 32-32c76.5-44.81 127.1-128.1 127.1-223.8C511.1 238.4 497.6 223.1 479.1 223.1zM487.6 128.8L15.74 143.5C6.969 143.8 0 150.1 0 159.8C0 168.7 7.275 176 16.25 176h472.1C501.4 176 512 165.4 512 152.4C512 139 500.1 128.3 487.6 128.8z"/>
</>],
['thin',<>
	<path d="M479.1 223.1H32c-17.62 0-31.1 14.56-31.1 32.19c0 94.75 51.51 176.9 128 221.3l-.0033 2.501C128 497.7 142.3 512 160 512h191.1c17.67 0 31.1-14.33 31.1-32l-.0033-2.501c76.5-44.38 128-126.6 128-221.3C511.1 238.6 497.6 223.1 479.1 223.1zM375.1 463.7c-4.934 2.861-7.971 8.135-7.971 13.84V480c0 8.822-7.178 16-16 16H160c-8.822 0-16-7.178-16-16v-2.5c0-5.705-3.037-10.98-7.971-13.84C62 420.7 16.01 341.1 16.01 256c0-8.822 7.178-16 16-16h447.1c8.822 0 16 7.178 16 16C495.1 341.1 449.1 420.7 375.1 463.7zM8.014 120c.5313 0 1.094-.0469 1.656-.1719l495.1-104c4.312-.9062 7.094-5.143 6.188-9.471c-.9375-4.297-4.969-7.158-9.498-6.188L6.359 104.2C2.047 105.1-.7344 109.3 .1719 113.7C.9844 117.4 4.297 120 8.014 120zM8.014 168c.1562 0 .3438 0 .5-.0156l495.1-32.01c4.436-.2813 7.779-4.096 7.467-8.502c-.2813-4.391-4.031-7.861-8.467-7.471L7.514 152c-4.436 .2813-7.779 4.096-7.467 8.502C.2969 164.7 3.828 168 8.014 168z"/>
</>],

]);

const BowlChopsticks: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BowlChopsticks.displayName = "BowlChopsticks";

export default BowlChopsticks;