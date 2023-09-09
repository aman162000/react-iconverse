
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z"/><path className="fa-secondary" d="M112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336z"/>
</>],
['light',<>
	<path d="M192 256C192 220.7 220.7 192 256 192C291.3 192 320 220.7 320 256C320 291.3 291.3 320 256 320C220.7 320 192 291.3 192 256zM256 288C273.7 288 288 273.7 288 256C288 238.3 273.7 224 256 224C238.3 224 224 238.3 224 256C224 273.7 238.3 288 256 288zM96 256C96 167.6 167.6 96 256 96C344.4 96 416 167.6 416 256C416 344.4 344.4 416 256 416C167.6 416 96 344.4 96 256zM256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256C128 326.7 185.3 384 256 384zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M192 256C192 220.7 220.7 192 256 192C291.3 192 320 220.7 320 256C320 291.3 291.3 320 256 320C220.7 320 192 291.3 192 256zM256 272C264.8 272 272 264.8 272 256C272 247.2 264.8 240 256 240C247.2 240 240 247.2 240 256C240 264.8 247.2 272 256 272zM96 256C96 167.6 167.6 96 256 96C344.4 96 416 167.6 416 256C416 344.4 344.4 416 256 416C167.6 416 96 344.4 96 256zM256 368C317.9 368 368 317.9 368 256C368 194.1 317.9 144 256 144C194.1 144 144 194.1 144 256C144 317.9 194.1 368 256 368zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z"/>
</>],
['thin',<>
	<path d="M328 256C328 295.8 295.8 328 256 328C216.2 328 184 295.8 184 256C184 216.2 216.2 184 256 184C295.8 184 328 216.2 328 256zM256 200C225.1 200 200 225.1 200 256C200 286.9 225.1 312 256 312C286.9 312 312 286.9 312 256C312 225.1 286.9 200 256 200zM88 256C88 163.2 163.2 88 256 88C348.8 88 424 163.2 424 256C424 348.8 348.8 424 256 424C163.2 424 88 348.8 88 256zM256 408C339.9 408 408 339.9 408 256C408 172.1 339.9 104 256 104C172.1 104 104 172.1 104 256C104 339.9 172.1 408 256 408zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496z"/>
</>],

]);

const Bullseye: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Bullseye.displayName = "Bullseye";

export default Bullseye;