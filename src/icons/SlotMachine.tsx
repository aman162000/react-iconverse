
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M592 128C565.5 128 544 149.5 544 176c0 14.16 6.246 26.76 16 35.54V416c0 17.66-14.34 32-32 32H448v-32H64v32c0 35.35 28.65 64 64 64h400c52.94 0 96-43.06 96-96V211.5C633.8 202.8 640 190.2 640 176C640 149.5 618.5 128 592 128zM384 0H128C92.65 0 64 28.65 64 64h384C448 28.65 419.3 0 384 0z"/><path className="fa-secondary" d="M448 96H64C28.65 96 0 124.7 0 160v192c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM166.6 208.1l-40 112C123.1 329.9 113.8 336 104 336c-2.688 0-5.406-.4375-8.062-1.406c-12.5-4.438-19-18.19-14.53-30.66L109.9 224H80C66.75 224 56 213.3 56 200S66.75 176 80 176h64c7.812 0 15.12 3.781 19.62 10.19C168.1 192.6 169.2 200.7 166.6 208.1zM310.6 208.1l-40 112C267.1 329.9 257.8 336 248 336c-2.688 0-5.406-.4375-8.062-1.406c-12.5-4.438-19-18.19-14.53-30.66L253.9 224H224C210.8 224 200 213.3 200 200S210.8 176 224 176h64c7.812 0 15.12 3.781 19.62 10.19C312.1 192.6 313.2 200.7 310.6 208.1zM454.6 208.1l-40 112C411.1 329.9 401.8 336 392 336c-2.688 0-5.406-.4375-8.062-1.406c-12.5-4.438-19-18.19-14.53-30.66L397.9 224H368c-13.25 0-24-10.75-24-24S354.8 176 368 176h64c7.812 0 15.12 3.781 19.62 10.19C456.1 192.6 457.2 200.7 454.6 208.1z"/>
</>],
['light',<>
	<path d="M160 176H96C87.16 176 80 183.2 80 192S87.16 208 96 208h43.5L112.5 316.1c-2.125 8.562 3.062 17.25 11.66 19.41C125.4 335.8 126.7 336 128 336c7.188 0 13.72-4.844 15.53-12.12l32-128c1.188-4.781 .125-9.844-2.906-13.72S164.9 176 160 176zM288 176H224C215.2 176 208 183.2 208 192S215.2 208 224 208h43.5L240.5 316.1c-2.125 8.562 3.062 17.25 11.66 19.41C253.4 335.8 254.7 336 256 336c7.188 0 13.72-4.844 15.53-12.12l32-128c1.188-4.781 .125-9.844-2.906-13.72S292.9 176 288 176zM592 128C565.5 128 544 149.5 544 176c0 20.87 13.4 38.45 32 45.06V432c0 26.47-21.53 48-48 48H448v-64c35.35 0 64-28.65 64-64V160c0-35.35-28.65-64-64-64V64c0-35.35-28.65-64-64-64H128C92.65 0 64 28.65 64 64v32C28.65 96 0 124.7 0 160v192c0 35.35 28.65 64 64 64v32c0 35.35 28.65 64 64 64h400c44.13 0 80-35.88 80-80V221.1C626.6 214.5 640 196.9 640 176C640 149.5 618.5 128 592 128zM96 64c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32v32H96V64zM64 384c-17.64 0-32-14.36-32-32V160c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32H64zM416 448c0 17.67-14.33 32-32 32H128c-17.67 0-32-14.33-32-32v-32h320V448zM592 192C583.2 192 576 184.8 576 176S583.2 160 592 160S608 167.2 608 176S600.8 192 592 192zM416 176h-64c-8.844 0-16 7.156-16 16s7.156 16 16 16h43.5l-27.03 108.1c-2.125 8.562 3.062 17.25 11.66 19.41C381.4 335.8 382.7 336 384 336c7.188 0 13.72-4.844 15.53-12.12l32-128c1.188-4.781 .125-9.844-2.906-13.72S420.9 176 416 176z"/>
</>],
['regular',<>
	<path d="M592 128C565.5 128 544 149.5 544 176c0 17.72 9.713 33.03 24 41.34V424c0 22.06-17.94 40-40 40H448V416c35.35 0 64-28.65 64-64V160c0-35.35-28.65-64-64-64V64c0-35.35-28.65-64-64-64H128C92.65 0 64 28.65 64 64v32C28.65 96 0 124.7 0 160v192c0 35.35 28.65 64 64 64v32c0 35.35 28.65 64 64 64h400c48.53 0 88-39.47 88-88V217.3C630.3 209 640 193.7 640 176C640 149.5 618.5 128 592 128zM112 64c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16v32h-288V64zM64 368c-8.822 0-16-7.178-16-16V160c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16v192c0 8.822-7.178 16-16 16H64zM400 448c0 8.836-7.164 16-16 16H128c-8.836 0-16-7.164-16-16v-32h288V448zM168 176h-56c-13.25 0-24 10.75-24 24S98.75 224 112 224h21.94L105.4 303.9c-4.469 12.47 2.031 26.22 14.53 30.66C122.6 335.6 125.3 336 128 336c9.844 0 19.09-6.125 22.59-15.94l40-112c2.625-7.344 1.531-15.5-2.969-21.88C183.1 179.8 175.8 176 168 176zM408 176H352c-13.25 0-24 10.75-24 24S338.8 224 352 224h21.94l-28.53 79.94c-4.469 12.47 2.031 26.22 14.53 30.66C362.6 335.6 365.3 336 368 336c9.844 0 19.09-6.125 22.59-15.94l40-112c2.625-7.344 1.531-15.5-2.969-21.88C423.1 179.8 415.8 176 408 176zM288 176H232C218.8 176 208 186.8 208 200S218.8 224 232 224h21.94L225.4 303.9c-4.469 12.47 2.031 26.22 14.53 30.66C242.6 335.6 245.3 336 248 336c9.844 0 19.09-6.125 22.59-15.94l40-112c2.625-7.344 1.531-15.5-2.969-21.88C303.1 179.8 295.8 176 288 176z"/>
</>],
['solid',<>
	<path d="M384 0H128C92.65 0 64 28.65 64 64h384C448 28.65 419.3 0 384 0zM592 128C565.5 128 544 149.5 544 176c0 14.16 6.246 26.76 16 35.54V416c0 17.66-14.34 32-32 32H448v-32c35.35 0 64-28.65 64-64V160c0-35.35-28.65-64-64-64H64C28.65 96 0 124.7 0 160v192c0 35.35 28.65 64 64 64v32c0 35.35 28.65 64 64 64h400c52.94 0 96-43.06 96-96V211.5C633.8 202.8 640 190.2 640 176C640 149.5 618.5 128 592 128zM166.6 208.1l-40 112C123.1 329.9 113.8 336 104 336c-2.688 0-5.406-.4375-8.062-1.406c-12.5-4.438-19-18.19-14.53-30.66L109.9 224H80C66.75 224 56 213.3 56 200S66.75 176 80 176h64c7.812 0 15.12 3.781 19.62 10.19C168.1 192.6 169.2 200.7 166.6 208.1zM310.6 208.1l-40 112C267.1 329.9 257.8 336 248 336c-2.688 0-5.406-.4375-8.062-1.406c-12.5-4.438-19-18.19-14.53-30.66L253.9 224H224C210.8 224 200 213.3 200 200S210.8 176 224 176h64c7.812 0 15.12 3.781 19.62 10.19C312.1 192.6 313.2 200.7 310.6 208.1zM392 336c-2.688 0-5.406-.4375-8.062-1.406c-12.5-4.438-19-18.19-14.53-30.66L397.9 224H368c-13.25 0-24-10.75-24-24S354.8 176 368 176h64c7.812 0 15.12 3.781 19.62 10.19c4.5 6.375 5.594 14.53 2.969 21.88l-40 112C411.1 329.9 401.8 336 392 336z"/>
</>],
['thin',<>
	<path d="M440 176h-80C355.6 176 352 179.6 352 184S355.6 192 360 192h69.47l-37.19 133.8c-1.156 4.281 1.312 8.688 5.562 9.875C398.6 335.9 399.3 336 400 336c3.5 0 6.719-2.312 7.719-5.844l40-144c.6562-2.438 .1562-5-1.344-7C444.8 177.2 442.5 176 440 176zM296 176h-80C211.6 176 208 179.6 208 184S211.6 192 216 192h69.47l-37.19 133.8c-1.156 4.281 1.312 8.688 5.562 9.875C254.6 335.9 255.3 336 256 336c3.5 0 6.719-2.312 7.719-5.844l40-144c.6562-2.438 .1562-5-1.344-7C300.8 177.2 298.5 176 296 176zM152 176h-80C67.59 176 64 179.6 64 184S67.59 192 72 192h69.47l-37.19 133.8c-1.156 4.281 1.312 8.688 5.562 9.875C110.6 335.9 111.3 336 112 336c3.5 0 6.719-2.312 7.719-5.844l40-144c.6562-2.438 .1562-5-1.344-7C156.8 177.2 154.5 176 152 176zM592 128C565.5 128 544 149.5 544 176c0 23.77 17.32 43.37 40 47.19V440c0 30.88-25.12 56-56 56h-102.1C439.3 484.3 448 467.2 448 448v-32c35.35 0 64-28.65 64-64V160c0-35.35-28.65-64-64-64V64c0-35.35-28.65-64-64-64H128C92.65 0 64 28.65 64 64v32C28.65 96 0 124.7 0 160v192c0 35.35 28.65 64 64 64v32c0 35.35 28.65 64 64 64h400c39.69 0 72-32.31 72-72V223.2C622.7 219.4 640 199.8 640 176C640 149.5 618.5 128 592 128zM80 64c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48v32h-352V64zM16 352V160c0-26.47 21.53-48 48-48h384c26.47 0 48 21.53 48 48v192c0 26.47-21.53 48-48 48H64C37.53 400 16 378.5 16 352zM384 496H128c-26.47 0-48-21.53-48-48v-32h352v32C432 474.5 410.5 496 384 496zM592 208c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S609.6 208 592 208z"/>
</>],

]);

const SlotMachine: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SlotMachine.displayName = "SlotMachine";

export default SlotMachine;
