
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 0C291.3 0 320 28.65 320 64V352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352V64C0 28.65 28.65 0 64 0H256zM160 320C133.5 320 112 341.5 112 368C112 394.5 133.5 416 160 416C186.5 416 208 394.5 208 368C208 341.5 186.5 320 160 320zM160 288C186.5 288 208 266.5 208 240C208 213.5 186.5 192 160 192C133.5 192 112 213.5 112 240C112 266.5 133.5 288 160 288zM160 64C133.5 64 112 85.49 112 112C112 138.5 133.5 160 160 160C186.5 160 208 138.5 208 112C208 85.49 186.5 64 160 64z"/><path className="fa-secondary" d="M160 288C133.5 288 112 266.5 112 240C112 213.5 133.5 192 160 192C186.5 192 208 213.5 208 240C208 266.5 186.5 288 160 288z"/>
</>],
['light',<>
	<path d="M104 392C104 361.1 129.1 336 160 336C190.9 336 216 361.1 216 392C216 422.9 190.9 448 160 448C129.1 448 104 422.9 104 392zM160 416C173.3 416 184 405.3 184 392C184 378.7 173.3 368 160 368C146.7 368 136 378.7 136 392C136 405.3 146.7 416 160 416zM104 256C104 225.1 129.1 200 160 200C190.9 200 216 225.1 216 256C216 286.9 190.9 312 160 312C129.1 312 104 286.9 104 256zM104 120C104 89.07 129.1 64 160 64C190.9 64 216 89.07 216 120C216 150.9 190.9 176 160 176C129.1 176 104 150.9 104 120zM160 144C173.3 144 184 133.3 184 120C184 106.7 173.3 96 160 96C146.7 96 136 106.7 136 120C136 133.3 146.7 144 160 144zM0 64C0 28.65 28.65 0 64 0H256C291.3 0 320 28.65 320 64V352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352V64zM32 64V352C32 422.7 89.31 480 160 480C230.7 480 288 422.7 288 352V64C288 46.33 273.7 32 256 32H64C46.33 32 32 46.33 32 64z"/>
</>],
['regular',<>
	<path d="M112 376C112 349.5 133.5 328 160 328C186.5 328 208 349.5 208 376C208 402.5 186.5 424 160 424C133.5 424 112 402.5 112 376zM160 392C168.8 392 176 384.8 176 376C176 367.2 168.8 360 160 360C151.2 360 144 367.2 144 376C144 384.8 151.2 392 160 392zM112 256C112 229.5 133.5 208 160 208C186.5 208 208 229.5 208 256C208 282.5 186.5 304 160 304C133.5 304 112 282.5 112 256zM112 136C112 109.5 133.5 88 160 88C186.5 88 208 109.5 208 136C208 162.5 186.5 184 160 184C133.5 184 112 162.5 112 136zM160 152C168.8 152 176 144.8 176 136C176 127.2 168.8 120 160 120C151.2 120 144 127.2 144 136C144 144.8 151.2 152 160 152zM0 64C0 28.65 28.65 0 64 0H256C291.3 0 320 28.65 320 64V352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352V64zM48 64V352C48 413.9 98.14 464 160 464C221.9 464 272 413.9 272 352V64C272 55.16 264.8 48 256 48H64C55.16 48 48 55.16 48 64z"/>
</>],
['solid',<>
	<path d="M136 368C136 354.7 146.7 344 160 344C173.3 344 184 354.7 184 368C184 381.3 173.3 392 160 392C146.7 392 136 381.3 136 368zM136 112C136 98.75 146.7 88 160 88C173.3 88 184 98.75 184 112C184 125.3 173.3 136 160 136C146.7 136 136 125.3 136 112zM256 0C291.3 0 320 28.65 320 64V352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352V64C0 28.65 28.65 0 64 0H256zM160 416C186.5 416 208 394.5 208 368C208 341.5 186.5 320 160 320C133.5 320 112 341.5 112 368C112 394.5 133.5 416 160 416zM160 288C186.5 288 208 266.5 208 240C208 213.5 186.5 192 160 192C133.5 192 112 213.5 112 240C112 266.5 133.5 288 160 288zM160 160C186.5 160 208 138.5 208 112C208 85.49 186.5 64 160 64C133.5 64 112 85.49 112 112C112 138.5 133.5 160 160 160z"/>
</>],
['thin',<>
	<path d="M216 392C216 422.9 190.9 448 160 448C129.1 448 104 422.9 104 392C104 361.1 129.1 336 160 336C190.9 336 216 361.1 216 392zM160 352C137.9 352 120 369.9 120 392C120 414.1 137.9 432 160 432C182.1 432 200 414.1 200 392C200 369.9 182.1 352 160 352zM176 256C176 264.8 168.8 272 160 272C151.2 272 144 264.8 144 256C144 247.2 151.2 240 160 240C168.8 240 176 247.2 176 256zM104 256C104 225.1 129.1 200 160 200C190.9 200 216 225.1 216 256C216 286.9 190.9 312 160 312C129.1 312 104 286.9 104 256zM160 296C182.1 296 200 278.1 200 256C200 233.9 182.1 216 160 216C137.9 216 120 233.9 120 256C120 278.1 137.9 296 160 296zM216 120C216 150.9 190.9 176 160 176C129.1 176 104 150.9 104 120C104 89.07 129.1 64 160 64C190.9 64 216 89.07 216 120zM160 80C137.9 80 120 97.91 120 120C120 142.1 137.9 160 160 160C182.1 160 200 142.1 200 120C200 97.91 182.1 80 160 80zM256 0C291.3 0 320 28.65 320 64V352C320 440.4 248.4 512 160 512C71.63 512 0 440.4 0 352V64C0 28.65 28.65 0 64 0H256zM256 16H64C37.49 16 16 37.49 16 64V352C16 431.5 80.47 496 160 496C239.5 496 304 431.5 304 352V64C304 37.49 282.5 16 256 16z"/>
</>],

]);

const TrafficLightSlow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrafficLightSlow.displayName = "TrafficLightSlow";

export default TrafficLightSlow;