
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 0v128h128L384 0zM296.1 215c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L302.1 288H24C10.75 288 0 298.8 0 312s10.75 24 24 24h278.1l-39.03 39.03C258.3 379.7 256 385.8 256 392s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94L296.1 215z"/><path className="fa-secondary" d="M512 128v336c0 26.51-21.49 48-48 48h-288C149.5 512 128 490.5 128 464v-128h174.1l-39.03 39.03C258.3 379.7 256 385.8 256 392s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94l-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L302.1 288H128V48C128 21.49 149.5 0 176 0H384v128H512z"/>
</>],
['light',<>
	<path d="M260.7 404.7c-6.25 6.25-6.25 16.38 0 22.62C263.8 430.4 267.9 432 272 432s8.188-1.562 11.31-4.688l96-96c6.25-6.25 6.25-16.38 0-22.62l-96-96c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L329.4 304H16C7.156 304 0 311.2 0 320s7.156 16 16 16h313.4L260.7 404.7zM493.3 125.3l-106.5-106.5C374.7 6.742 358.5 0 341.5 0H192C156.7 0 128 28.65 128 64v176C128 248.8 135.2 256 144 256C152.8 256 160 248.8 160 240V64c0-17.67 14.33-32 32-32h128v112C320 170.5 341.5 192 368 192H480v256c0 17.67-14.33 32-32 32H192c-17.67 0-32-14.33-32-32v-48C160 391.2 152.8 384 144 384C135.2 384 128 391.2 128 400L128 448c0 35.35 28.66 64 64 64H448c35.35 0 64-28.65 64-64V170.5C512 153.5 505.3 137.3 493.3 125.3zM368 160C359.2 160 352 152.8 352 144V34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5C474.1 151.3 476.4 155.5 477.9 160H368z"/>
</>],
['regular',<>
	<path d="M263 383C258.3 387.7 256 393.8 256 400s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94l-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L302.1 296H24C10.75 296 0 306.8 0 320s10.75 24 24 24h278.1L263 383zM493.3 93.38l-74.63-74.64C406.6 6.742 390.3 0 373.4 0H192C156.7 0 127.1 28.66 128 64l.0078 168c.002 13.26 10.75 24 24 24s24-10.75 23.1-24L176 64.13c0-8.836 7.162-16 16-16h160L352 128c0 17.67 14.33 32 32 32h79.1v288c0 8.836-7.164 16-16 16H192c-8.838 0-16-7.164-16-16l-.002-40C176 394.7 165.3 384 152 384s-24 10.75-23.1 24L128 448c.002 35.34 28.65 64 64 64H448c35.2 0 64-28.8 64-64V138.6C512 121.7 505.3 105.4 493.3 93.38z"/>
</>],
['solid',<>
	<path d="M384 0v128h128L384 0zM352 128L352 0H176C149.5 0 128 21.49 128 48V288h174.1l-39.03-39.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l80 80c9.375 9.375 9.375 24.56 0 33.94l-80 80c-9.375 9.375-24.56 9.375-33.94 0C258.3 404.3 256 398.2 256 392s2.344-12.28 7.031-16.97L302.1 336H128v128C128 490.5 149.5 512 176 512h288c26.51 0 48-21.49 48-48V160h-127.1C366.3 160 352 145.7 352 128zM24 288C10.75 288 0 298.7 0 312c0 13.25 10.75 24 24 24H128V288H24z"/>
</>],
['thin',<>
	<path d="M263.5 402.3c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0l106.8-106.8c3.125-3.125 3.125-8.188 0-11.31l-108-108C272.1 185.1 270.1 185.2 268 185.2s-4.094 .7813-5.656 2.344c-3.125 3.125-3.125 8.188 0 11.31l94.34 94.34H8c-4.406 0-8 3.578-8 8s3.594 8 8 8h348.7L263.5 402.3zM502.6 150.6l-141.3-141.2C355.4 3.371 347.2 0 338.7 0H192C156.7 0 128 28.65 128 64v184C128 252.4 131.6 256 136 256S144 252.4 144 248V64c0-26.51 21.49-48 48-48h144v120c0 22.09 17.91 40 40 40h120V448c0 26.51-21.49 48-48 48H192c-26.51 0-48-21.49-48-48v-88C144 355.6 140.4 352 136 352S128 355.6 128 360L128 448c0 35.34 28.66 64 64 64H448c35.35 0 64-28.66 64-64V173.3C512 164.8 508.6 156.6 502.6 150.6zM376 160C362.8 160 352 149.2 352 136V22.63L489.4 160H376z"/>
</>],

]);

const FileImport: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FileImport.displayName = "FileImport";

export default FileImport;
