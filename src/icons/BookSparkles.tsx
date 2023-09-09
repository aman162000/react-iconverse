
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M96 384h304c26.51 0 48-21.49 48-48v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1C448 462.3 433.7 448 416 448H97.71c-15.94 0-30.71-10.89-33.27-26.63C61.18 401.3 76.56 384 96 384zM261.1 197.4l.3711-.4277l20.56-49.31c1.012-2.033 3.671-3.675 5.942-3.691c.0078 0-.0078 0 0 0c2.279 0 4.966 1.648 5.982 3.691l20.7 49.64l49.64 20.7C366.3 219.1 368 221.7 368 223.1c0 2.266-1.652 4.949-3.682 5.965l-49.64 20.7l-20.7 49.64c-1.016 2.043-3.697 3.695-5.977 3.695c-.0078 0 .0078 0 0 0c-2.271-.0156-4.936-1.662-5.947-3.695l-20.72-49.63L211.7 229.1c-2.023-1.012-3.664-3.676-3.676-5.938c.0117-2.27 1.65-4.977 3.676-5.988L261.1 197.4zM130.2 108.4L159.1 96l12.42-29.79C173 64.99 174.6 64 175.1 64s2.969 .9902 3.578 2.217L191.1 96L221.8 108.4c1.217 .6094 2.209 2.211 2.209 3.576c0 1.359-.9922 2.971-2.209 3.58L191.1 127.1L179.6 157.8C178.1 159 177.4 160 175.1 160S173 159 172.4 157.8L159.1 127.1L130.2 115.6C128.1 114.1 128 113.4 128 111.1C128 110.6 128.1 109 130.2 108.4z"/><path className="fa-secondary" d="M400 384H96c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32h320v-66.94C410.1 382.8 405.6 384 400 384z"/>
</>],
['light',<>
	<path d="M448 368v-320C448 21.49 426.5 0 400 0h-320C35.82 0 0 35.82 0 80V448c0 35.35 28.65 64 64 64h368c8.844 0 16-7.156 16-16S440.8 480 432 480H416v-66.95C434.6 406.4 448 388.8 448 368zM384 480H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320V480zM400 384H64c-11.71 0-22.55 3.389-32 8.9V80C32 53.49 53.49 32 80 32h320C408.8 32 416 39.16 416 48v320C416 376.8 408.8 384 400 384zM352 224h-48V176c0-8.844-7.155-15.1-15.1-15.1S272 167.2 272 176V224H224C215.2 224 208 231.1 208 239.1S215.2 255.1 224 255.1L272 256v48c0 8.844 7.155 15.1 15.1 15.1S304 312.8 304 304V256L352 255.1c8.844 0 16-7.152 16-15.1S360.8 224 352 224zM223.1 128c0-8.844-7.148-16-15.99-16h-32l-.0039-32C175.1 71.16 168.8 64 160 64S144 71.16 144 80v32h-32C103.2 112 96 119.2 96 128s7.156 16 16 16h32v32C144 184.8 151.2 192 160 192s15.1-7.156 15.1-16L176 144h32C216.8 144 223.1 136.8 223.1 128z"/>
</>],
['regular',<>
	<path d="M448 352V48C448 21.53 426.5 0 400 0h-320C35.89 0 0 35.88 0 80v352C0 476.1 35.89 512 80 512h344c13.25 0 24-10.75 24-24s-10.75-24-24-24H416v-66.95C434.6 390.4 448 372.8 448 352zM368 464h-288c-17.64 0-32-14.34-32-32s14.36-32 32-32h288V464zM400 352h-320c-11.38 0-22.2 2.375-32 6.688V80c0-17.66 14.36-32 32-32h320V352zM159.1 144l12.42 29.78C173 175 174.6 176 175.1 176s2.965-.9922 3.574-2.219L191.1 144L221.8 131.6C222.1 130.1 223.1 129.4 223.1 128c0-1.367-1-2.969-2.217-3.578L191.1 112L179.6 82.22C178.1 80.99 177.4 80 175.1 80S173 80.99 172.4 82.22L159.1 112L130.2 124.4C128.1 125 128 126.6 128 128c0 1.359 .9922 2.969 2.211 3.578L159.1 144zM208 239.1c.0117 2.266 1.67 4.965 3.693 5.973l49.38 20.59l.4004 .4492l20.56 49.3c1.012 2.035 3.672 3.68 5.944 3.695c2.279 0 4.965-1.652 5.98-3.695l20.7-49.64l49.64-20.7C366.3 244.9 368 242.3 368 240c0-2.281-1.652-4.945-3.682-5.961L314.7 213.3l-20.7-49.64c-1.016-2.043-3.698-3.693-5.977-3.693c-2.271 .0156-4.935 1.662-5.947 3.693l-20.72 49.63L211.7 234C209.7 235 208 237.7 208 239.1z"/>
</>],
['solid',<>
	<path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM261.5 197l20.56-49.31c1.012-2.033 3.671-3.675 5.942-3.691c2.281 0 4.966 1.648 5.982 3.691l20.7 49.64l49.64 20.7C366.3 219.1 368 221.7 368 223.1c0 2.266-1.652 4.949-3.682 5.965l-49.64 20.7l-20.7 49.64c-1.016 2.043-3.697 3.695-5.977 3.695c-2.271-.0156-4.936-1.662-5.947-3.695l-20.72-49.63L211.7 229.1c-2.023-1.012-3.664-3.676-3.676-5.938c.0117-2.27 1.65-4.977 3.676-5.988l49.41-20.6L261.5 197zM130.2 108.4L159.1 96l12.42-29.79C173 64.99 174.6 64 175.1 64s2.969 .9902 3.578 2.217L191.1 96L221.8 108.4c1.217 .6094 2.209 2.211 2.209 3.576c0 1.359-.9922 2.971-2.209 3.58L191.1 127.1L179.6 157.8C178.1 159 177.4 160 175.1 160S173 159 172.4 157.8L159.1 127.1L130.2 115.6C128.1 114.1 128 113.4 128 111.1C128 110.6 128.1 109 130.2 108.4zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"/>
</>],
['thin',<>
	<path d="M200 119.1h-32v-32C168 83.57 164.4 80 160 80S152 83.57 152 87.1v32h-32c-4.406 0-8 3.578-8 8s3.594 8 8 8h32v31.1c0 4.422 3.594 8 8 8s8-3.578 8-8V135.1h32c4.406 0 8-3.578 8-8S204.4 119.1 200 119.1zM344 247.1h-48v-48c0-4.422-3.594-8-8-8s-8 3.578-8 8v48h-48c-4.406 0-8 3.582-8 8.004s3.594 7.996 8 7.996h48v48c0 4.422 3.592 8.004 7.998 8.004S296 316.4 296 311.1v-48h48c4.406 0 8-3.574 8-7.996S348.4 247.1 344 247.1zM448 384V32c0-17.67-14.33-32-32-32H64C28.65 0 0 28.65 0 64v391.1c0 30.93 25.07 56 55.1 56l383.1 .0078C444.4 511.1 448 508.4 448 503.1c0-4.422-3.584-8.008-8.006-8.008H416V416C433.7 416 448 401.7 448 384zM400 495.1H56c-23.38 0-42.12-20.14-39.81-43.98c2.02-20.78 20.7-36.02 41.58-36.02L400 416V495.1zM56 399.1c-15.68 0-29.82 6.516-40 16.93V64c0-26.47 21.53-48 48-48h352c8.836 0 16 7.164 16 16v352c0 8.824-7.178 16-16 16L56 399.1z"/>
</>],

]);

const BookSparkles: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BookSparkles.displayName = "BookSparkles";

export default BookSparkles;
