
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M511 17.25c-3.719-12.7-16.1-19.1-29.78-16.28L51.75 126.9C43.7 129.2 36.52 133.2 30 137.1c9.869-6.223 21.47-9.953 33.1-9.953l154.5-.0081l276.2-80.97C507.5 43.3 514.7 29.97 511 17.25zM367.1 240c-44.16 0-80 35.84-80 80s35.84 79.1 80 79.1s79.1-35.84 79.1-79.1S412.2 240 367.1 240z"/><path className="fa-secondary" d="M447.1 128H64c-35.35 0-63.1 28.65-63.1 63.1v255.1c0 35.35 28.65 63.1 63.1 63.1h383.1c35.35 0 63.1-28.65 63.1-63.1V192C511.1 156.7 483.3 128 447.1 128zM80 248c0-4.406 3.594-7.1 7.1-7.1h111.1c4.406 0 7.1 3.594 7.1 7.1V263.1c0 4.406-3.594 7.1-7.1 7.1h-111.1c-4.406 0-7.1-3.594-7.1-7.1V248zM208 391.1c0 4.406-3.594 7.1-7.1 7.1h-111.1c-4.406 0-7.1-3.594-7.1-7.1v-15.1c0-4.406 3.594-7.1 7.1-7.1h111.1c4.406 0 7.1 3.594 7.1 7.1V391.1zM224 327.1c0 4.406-3.594 7.1-7.1 7.1H72c-4.406 0-7.1-3.594-7.1-7.1V311.1c0-4.406 3.594-7.1 7.1-7.1h143.1c4.406 0 7.1 3.594 7.1 7.1V327.1zM367.1 399.1c-44.16 0-80-35.84-80-79.1s35.84-80 80-80s79.1 35.85 79.1 80S412.2 399.1 367.1 399.1z"/>
</>],
['light',<>
	<path d="M351.1 224c-52.1 0-95.1 42.1-95.1 95.1s42.1 95.1 95.1 95.1s96-43 96-96S404.1 224 351.1 224zM351.1 384c-35.37 0-63.1-28.63-63.1-64s28.62-63.1 63.1-63.1s63.1 28.62 63.1 63.1S387.4 384 351.1 384zM191.1 368H95.1c-8.844 0-15.1 7.159-15.1 16S87.16 400 95.1 400H191.1c8.844 0 16-7.153 16-15.1S200.8 368 191.1 368zM95.1 272H191.1c8.844 0 16-7.15 16-15.99c0-8.844-7.157-16.01-16-16.01H95.1c-8.844 0-15.1 7.163-15.1 16.01C79.1 264.9 87.16 272 95.1 272zM207.1 304H79.1c-8.844 0-15.1 7.161-15.1 16s7.156 15.99 15.1 15.99h127.1c8.844 0 16-7.151 16-15.99S216.8 304 207.1 304zM447.1 128L198.5 128l302.4-96.76c8.422-2.687 13.06-11.69 10.36-20.11c-2.703-8.406-11.62-13.08-20.11-10.36L93.52 128L64 128c-35.37 0-63.1 28.62-63.1 63.1v255.1c0 35.37 28.62 63.1 63.1 63.1h383.1c35.37 0 63.1-28.62 63.1-63.1V192C511.1 156.6 483.4 128 447.1 128zM479.1 448c0 17.62-14.37 31.1-31.1 31.1H63.1c-17.62 0-31.1-14.37-31.1-31.1V192c0-17.62 14.37-31.1 31.1-31.1h383.1c17.62 0 31.1 14.37 31.1 31.1V448z"/>
</>],
['regular',<>
	<path d="M111.1 272H208C216.8 272 224 264.8 224 256C224 247.2 216.8 240 208 240H111.1C103.2 240 96 247.2 96 255.1C96 264.8 103.2 272 111.1 272zM208 368H111.1C103.2 368 96 375.2 96 383.1C96 392.8 103.2 400 111.1 400H208C216.8 400 224 392.8 224 384C224 375.2 216.8 368 208 368zM224 304H95.1C87.2 304 80 311.2 80 319.1C80 328.8 87.2 336 95.1 336H224C232.8 336 240 328.8 240 320C240 311.2 232.8 304 224 304zM351.1 240c-44.16 0-79.1 35.84-79.1 79.1s35.84 79.1 79.1 79.1s79.1-35.84 79.1-79.1S396.2 240 351.1 240zM439.1 127.1H201.2l293.1-80.86c12.78-3.531 20.28-16.75 16.76-29.52c-3.516-12.78-16.78-20.23-29.51-16.77L52.86 119.1C21.73 127.7 0 156.3 0 188.5v251.5C0 479.7 32.3 512 71.1 512h367.1c39.7 0 71.1-32.3 71.1-72V199.1C511.1 160.3 479.7 127.1 439.1 127.1zM463.1 439.1c0 13.23-10.77 24-24 24H71.1c-13.23 0-23.1-10.77-23.1-24V199.1c0-13.23 10.77-24 23.1-24h367.1c13.23 0 24 10.77 24 24V439.1z"/>
</>],
['solid',<>
	<path d="M447.1 128L218.5 128l276.2-80.97c12.72-3.734 19.1-17.06 16.28-29.78c-3.719-12.7-16.1-19.1-29.78-16.28L51.75 126.9c-29.07 8.512-49.55 34.8-51.39 64.78L.0007 192v255.1c0 35.31 28.69 63.1 63.1 63.1h383.1c35.31 0 63.1-28.69 63.1-63.1V192C511.1 156.7 483.3 128 447.1 128zM80 248c0-4.406 3.594-7.1 7.1-7.1h111.1c4.406 0 7.1 3.594 7.1 7.1V263.1c0 4.406-3.594 7.1-7.1 7.1h-111.1c-4.406 0-7.1-3.594-7.1-7.1V248zM208 391.1c0 4.406-3.594 7.1-7.1 7.1h-111.1c-4.406 0-7.1-3.594-7.1-7.1v-15.1c0-4.406 3.594-7.1 7.1-7.1h111.1c4.406 0 7.1 3.594 7.1 7.1V391.1zM224 327.1c0 4.406-3.594 7.1-7.1 7.1H72c-4.406 0-7.1-3.594-7.1-7.1V311.1c0-4.406 3.594-7.1 7.1-7.1h143.1c4.406 0 7.1 3.594 7.1 7.1V327.1zM367.1 399.1c-44.16 0-80-35.84-80-79.1s35.84-80 80-80s79.1 35.85 79.1 80S412.2 399.1 367.1 399.1z"/>
</>],
['thin',<>
	<path d="M351.1 224c-52.99 0-95.1 43.01-95.1 95.1s43.01 95.1 95.1 95.1s96-43.02 96-96S404.1 224 351.1 224zM351.1 400c-44.11 0-79.1-35.89-79.1-79.1s35.89-79.1 79.1-79.1s79.1 35.89 79.1 79.1S396.1 400 351.1 400zM87.1 264h111.1c4.406 0 7.999-3.6 7.999-8.006c0-4.406-3.593-7.993-7.999-7.993H87.1c-4.406 0-8 3.587-8 7.993C79.1 260.4 83.59 264 87.1 264zM215.1 312H71.1c-4.406 0-8 3.589-8 7.995s3.594 8.004 8 8.004h143.1c4.406 0 7.999-3.598 7.999-8.004S220.4 312 215.1 312zM199.1 376H87.1c-4.406 0-8 3.59-8 7.996s3.594 8.003 8 8.003h111.1c4.406 0 7.999-3.597 7.999-8.003S204.4 376 199.1 376zM447.1 128L134.2 128l372.1-112.3c4.219-1.281 6.625-5.75 5.344-9.968c-1.25-4.218-5.531-6.718-9.969-5.343L78.83 128L64 128c-35.35 0-63.1 28.66-63.1 63.1v255.1c0 35.34 28.65 63.1 63.1 63.1h383.1c35.35 0 63.1-28.66 63.1-63.1V192C511.1 156.7 483.3 128 447.1 128zM495.1 448c0 26.46-21.53 47.1-47.1 47.1H63.1c-26.47 0-47.1-21.53-47.1-47.1V192c0-26.46 21.53-47.1 47.1-47.1h383.1c26.47 0 47.1 21.53 47.1 47.1V448z"/>
</>],

]);

const Radio: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Radio.displayName = "Radio";

export default Radio;