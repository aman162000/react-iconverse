
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M226.7 293.3h-40v-40C186.7 245.1 180.7 240 173.3 240h-26.67c-7.363 0-13.33 5.969-13.33 13.33v40H93.33c-7.363 0-13.33 5.969-13.33 13.33v26.67c0 7.363 5.971 13.33 13.33 13.33h40v40c0 7.363 5.969 13.33 13.33 13.33h26.67c7.363 0 13.33-5.971 13.33-13.33v-40h40c7.363 0 13.33-5.971 13.33-13.33V306.7C239.1 299.3 234 293.3 226.7 293.3zM379.3 94.06l-43.32-43.32C323.1 38.74 307.7 32 290.8 32h-66.75c0-17.67-14.33-32-32-32H127.1c-17.67 0-32 14.33-32 32l-.0003 128h128l.0002-64h66.75l43.31 43.31c6.248 6.248 16.38 6.248 22.63 0l22.62-22.62C385.6 110.4 385.6 100.3 379.3 94.06z"/><path className="fa-secondary" d="M299.4 218.2C296.4 185.2 268.7 160 235.6 160H84.37C51.27 160 23.63 185.2 20.63 218.2l-20.36 224C-3.139 479.7 26.37 512 64.01 512h191.1c37.63 0 67.14-32.31 63.74-69.79L299.4 218.2zM239.1 333.3c0 7.363-5.971 13.33-13.33 13.33h-40v40c0 7.363-5.969 13.33-13.33 13.33h-26.67c-7.363 0-13.33-5.971-13.33-13.33v-40H93.33c-7.363 0-13.33-5.971-13.33-13.33V306.7c0-7.365 5.971-13.33 13.33-13.33h40v-40C133.3 245.1 139.3 240 146.7 240h26.67c7.363 0 13.33 5.969 13.33 13.33v40h40c7.363 0 13.33 5.969 13.33 13.33V333.3z"/>
</>],
['light',<>
	<path d="M379.3 100.7l-48-48C328.3 49.69 324.3 48 320 48h-80V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96.41C48.9 130.6 23.49 154.7 20.63 186.2l-20.36 256C-3.139 479.7 26.37 512 64.01 512h191.1c37.63 0 67.14-32.31 63.74-69.79l-20.36-256C296.5 154.7 271.1 130.6 240 128.4V80h73.38l43.31 43.31C359.8 126.4 363.9 128 368 128s8.188-1.562 11.31-4.688C385.6 117.1 385.6 106.9 379.3 100.7zM112 32h96v96h-96V32zM267.5 188.7l20.39 256.4c.8242 9.064-2.102 17.76-8.24 24.48C273.5 476.3 265.1 480 255.1 480H64.01c-9.102 0-17.49-3.701-23.63-10.42c-6.139-6.721-9.064-15.41-8.211-24.84l20.33-255.6C53.92 173.5 66.4 161.1 82.19 160h155.6C253.6 161.1 266.1 173.5 267.5 188.7zM226.7 293.3h-40v-40C186.7 245.1 180.7 240 173.3 240h-26.67c-7.363 0-13.33 5.969-13.33 13.33v40H93.33c-7.363 0-13.33 5.969-13.33 13.33v26.67c0 7.363 5.971 13.33 13.33 13.33h40v40c0 7.363 5.969 13.33 13.33 13.33h26.67c7.363 0 13.33-5.971 13.33-13.33v-40h40c7.363 0 13.33-5.971 13.33-13.33V306.7C239.1 299.3 234 293.3 226.7 293.3z"/>
</>],
['regular',<>
	<path d="M186.7 293.3v-40C186.7 245.1 180.7 240 173.3 240h-26.67c-7.363 0-13.33 5.969-13.33 13.33v40H93.33c-7.363 0-13.33 5.969-13.33 13.33v26.67c0 7.363 5.971 13.33 13.33 13.33h40v40c0 7.363 5.969 13.33 13.33 13.33h26.67c7.363 0 13.33-5.971 13.33-13.33v-40h40c7.363 0 13.33-5.971 13.33-13.33V306.7c0-7.365-5.971-13.33-13.33-13.33H186.7zM376.1 103l-56-56C316.5 42.53 310.4 40 304 40h-64V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96.41C48.9 130.6 23.49 154.7 20.63 186.2l-20.36 256C-3.139 479.7 26.37 512 64.01 512h191.1c37.63 0 67.14-32.31 63.74-69.79l-20.36-256C296.5 154.7 271.1 130.6 240 128.4V88h54.06l48.97 48.97C347.7 141.7 353.9 144 360 144s12.28-2.344 16.97-7.031C386.3 127.6 386.3 112.4 376.1 103zM128 48h64V128H128V48zM251.5 190l20.41 256.5C272.7 455.3 265.1 464 255.1 464H64.01c-8.762 0-16.86-7.254-15.89-17.99l20.32-255.5C69.19 182.3 76.04 176 84.37 176h151.3C243.1 176 250.8 182.3 251.5 190z"/>
</>],
['solid',<>
	<path d="M379.3 94.06l-43.32-43.32C323.1 38.74 307.7 32 290.8 32h-66.75c0-17.67-14.33-32-32-32H127.1c-17.67 0-32 14.33-32 32L96 128h128l-.0002-32h66.75l43.31 43.31c6.248 6.248 16.38 6.248 22.63 0l22.62-22.62C385.6 110.4 385.6 100.3 379.3 94.06zM235.6 160H84.37C51.27 160 23.63 185.2 20.63 218.2l-20.36 224C-3.139 479.7 26.37 512 64.01 512h191.1c37.63 0 67.14-32.31 63.74-69.79l-20.36-224C296.4 185.2 268.7 160 235.6 160zM239.1 333.3c0 7.363-5.971 13.33-13.33 13.33h-40v40c0 7.363-5.969 13.33-13.33 13.33h-26.67c-7.363 0-13.33-5.971-13.33-13.33v-40H93.33c-7.363 0-13.33-5.971-13.33-13.33V306.7c0-7.365 5.971-13.33 13.33-13.33h40v-40C133.3 245.1 139.3 240 146.7 240h26.67c7.363 0 13.33 5.969 13.33 13.33v40h40c7.363 0 13.33 5.969 13.33 13.33V333.3z"/>
</>],
['thin',<>
	<path d="M235.6 160H84.37C51.27 160 23.63 185.2 20.63 218.2l-20.36 224C-3.139 479.7 26.37 512 64.01 512h191.1c37.63 0 67.14-32.31 63.74-69.79l-20.36-224C296.4 185.2 268.7 160 235.6 160zM291.4 480.4C282.2 490.4 269.6 496 255.1 496H64.01c-13.65 0-26.24-5.551-35.44-15.63c-9.207-10.08-13.6-23.12-12.36-36.71l20.36-224C38.83 194.8 59.38 176 84.37 176h151.3c24.99 0 45.54 18.77 47.8 43.65l20.36 223.1C305 457.2 300.6 470.3 291.4 480.4zM365.7 114.3l-46.63-46.63C311.5 60.16 301.4 56 290.8 56H224L223.1 32c0-17.67-14.33-32-32-32H127.1c-17.67 0-32 14.33-32 32L96 120C96 124.4 99.58 128 104 128S112 124.4 112 120V32c0-8.836 7.164-16 16-16h64c8.838 0 16 7.164 16 16v88C208 124.4 211.6 128 216 128S224 124.4 224 120v-48h66.75c6.312 0 12.5 2.562 16.97 7.031l46.63 46.63C355.9 127.2 357.1 128 360 128s4.094-.7813 5.656-2.344C368.8 122.5 368.8 117.5 365.7 114.3zM232 280h-32v-32c0-8.836-7.162-16-16-16h-48c-8.836 0-16 7.164-16 16v32h-32c-8.836 0-16 7.164-16 16v48c0 8.836 7.164 16 16 16h32v32c0 8.836 7.164 16 16 16h48c8.838 0 16-7.164 16-16v-32h32c8.838 0 16-7.164 16-16v-48C248 287.2 240.8 280 232 280zM232 344h-48v48h-48v-48h-48v-48h48v-48h48v48h48V344z"/>
</>],

]);

const PumpMedical: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PumpMedical.displayName = "PumpMedical";

export default PumpMedical;
