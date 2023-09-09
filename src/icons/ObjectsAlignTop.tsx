
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 24C0 10.75 10.75 0 24 0H488C501.3 0 512 10.75 512 24C512 37.25 501.3 48 488 48H24C10.75 48 0 37.25 0 24z"/><path className="fa-secondary" d="M176 128C202.5 128 224 149.5 224 176V464C224 490.5 202.5 512 176 512H112C85.49 512 64 490.5 64 464V176C64 149.5 85.49 128 112 128H176zM400 128C426.5 128 448 149.5 448 176V336C448 362.5 426.5 384 400 384H336C309.5 384 288 362.5 288 336V176C288 149.5 309.5 128 336 128H400z"/>
</>],
['light',<>
	<path d="M496 0C504.8 0 512 7.164 512 16C512 24.84 504.8 32 496 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H496zM176 128C202.5 128 224 149.5 224 176V464C224 490.5 202.5 512 176 512H112C85.49 512 64 490.5 64 464V176C64 149.5 85.49 128 112 128H176zM176 160H112C103.2 160 96 167.2 96 176V464C96 472.8 103.2 480 112 480H176C184.8 480 192 472.8 192 464V176C192 167.2 184.8 160 176 160zM400 128C426.5 128 448 149.5 448 176V336C448 362.5 426.5 384 400 384H336C309.5 384 288 362.5 288 336V176C288 149.5 309.5 128 336 128H400zM400 160H336C327.2 160 320 167.2 320 176V336C320 344.8 327.2 352 336 352H400C408.8 352 416 344.8 416 336V176C416 167.2 408.8 160 400 160z"/>
</>],
['regular',<>
	<path d="M488 0C501.3 0 512 10.75 512 24C512 37.25 501.3 48 488 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H488zM176 128C202.5 128 224 149.5 224 176V464C224 490.5 202.5 512 176 512H112C85.49 512 64 490.5 64 464V176C64 149.5 85.49 128 112 128H176zM176 176H112V464H176V176zM400 128C426.5 128 448 149.5 448 176V336C448 362.5 426.5 384 400 384H336C309.5 384 288 362.5 288 336V176C288 149.5 309.5 128 336 128H400zM400 176H336V336H400V176z"/>
</>],
['solid',<>
	<path d="M488 0C501.3 0 512 10.75 512 24C512 37.25 501.3 48 488 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H488zM64 176C64 149.5 85.49 128 112 128H176C202.5 128 224 149.5 224 176V464C224 490.5 202.5 512 176 512H112C85.49 512 64 490.5 64 464V176zM288 176C288 149.5 309.5 128 336 128H400C426.5 128 448 149.5 448 176V336C448 362.5 426.5 384 400 384H336C309.5 384 288 362.5 288 336V176z"/>
</>],
['thin',<>
	<path d="M504 0C508.4 0 512 3.582 512 8C512 12.42 508.4 16 504 16H8C3.582 16 0 12.42 0 8C0 3.582 3.582 0 8 0H504zM176 96C202.5 96 224 117.5 224 144V464C224 490.5 202.5 512 176 512H112C85.49 512 64 490.5 64 464V144C64 117.5 85.49 96 112 96H176zM176 112H112C94.33 112 80 126.3 80 144V464C80 481.7 94.33 496 112 496H176C193.7 496 208 481.7 208 464V144C208 126.3 193.7 112 176 112zM400 96C426.5 96 448 117.5 448 144V336C448 362.5 426.5 384 400 384H336C309.5 384 288 362.5 288 336V144C288 117.5 309.5 96 336 96H400zM400 112H336C318.3 112 304 126.3 304 144V336C304 353.7 318.3 368 336 368H400C417.7 368 432 353.7 432 336V144C432 126.3 417.7 112 400 112z"/>
</>],

]);

const ObjectsAlignTop: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ObjectsAlignTop.displayName = "ObjectsAlignTop";

export default ObjectsAlignTop;
