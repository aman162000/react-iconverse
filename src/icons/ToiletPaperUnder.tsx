
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 0c-53 0-96 86-96 192c0 84.04 27.07 155.3 64.68 181.3C394.5 380.1 405 384 416 384H128v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192C512 86 469 0 416 0zM416 256c-17.62 0-32-28.62-32-64S398.4 128 416 128s31.1 28.62 31.1 64S433.6 256 416 256zM191.1 224c8.875 0 16.01-7.125 16.01-16S200.8 192 191.1 192S175.1 199.1 175.1 208S183.1 224 191.1 224zM255.1 224c8.875 0 16-7.125 16-16s-7.125-16-16-16S239.1 199.1 239.1 208S247.1 224 255.1 224zM143.1 208c0-8.875-7.128-16-16-16S111.1 199.1 111.1 208S119.1 224 127.1 224S143.1 216.9 143.1 208zM63.98 192c-8.875 0-16 7.125-16 16s7.125 16 16 16s15.1-7.125 15.1-16S72.86 192 63.98 192z"/><path className="fa-secondary" d="M320 192c0-105.1 43-192 96-192H96C43 0 0 86 0 192c0 106 43 192 96 192h320C363 384 320 298 320 192zM63.98 224c-8.875 0-16-7.125-16-16s7.125-16 16-16s15.1 7.125 15.1 16S72.86 224 63.98 224zM127.1 224C119.1 224 111.1 216.9 111.1 208S119.1 192 127.1 192s16 7.125 16 16S136.8 224 127.1 224zM191.1 224C183.1 224 175.1 216.9 175.1 208S183.1 192 191.1 192s16.01 7.125 16.01 16S200.8 224 191.1 224zM255.1 224C247.1 224 239.1 216.9 239.1 208S247.1 192 255.1 192s16 7.125 16 16S264.8 224 255.1 224z"/>
</>],
['light',<>
	<path d="M159.1 192C151.1 192 143.1 199.1 143.1 208S151.1 224 159.1 224c8.875 0 15.99-7.125 15.99-16S168.9 192 159.1 192zM95.98 192C87.11 192 79.98 199.1 79.98 208S87.11 224 95.98 224s15.1-7.125 15.1-16S104.9 192 95.98 192zM223.1 192C215.1 192 207.1 199.1 207.1 208S215.1 224 223.1 224s15.99-7.125 15.99-16S232.9 192 223.1 192zM399.1 112c-27.38 0-48 34.41-48 80s20.63 80 48 80c27.38 0 48-34.41 48-80S427.4 112 399.1 112zM399.1 240c-9.127 0-15.1-20.64-15.1-48c0-27.36 6.872-48 15.1-48c9.125 0 15.1 20.64 15.1 48C415.1 219.4 409.1 240 399.1 240zM512 192c0-106-50.15-192-112-192H112C50.15 0 0 85.96 0 192s50.15 192 112 192H399.1c31.36 0 59.67-22.15 80-57.75V464c0 8.812-7.188 16-16 16h-320C135.2 480 128 472.8 128 464v-32C128 423.2 120.8 416 112 416S96 423.2 96 432v32C96 490.5 117.5 512 144 512h320c26.47 0 48-21.53 48-48V224c0-2.051-.4629-3.979-1.164-5.779C511.5 209.6 512 200.9 512 192zM112 352C74.16 352 32 286.3 32 192s42.16-160 80-160h226.1c-30.21 34.39-50.14 93.18-50.14 160s19.94 125.6 50.14 160H112zM400 352C362.2 352 320 286.3 320 192s42.16-160 80-160S480 97.71 480 192S437.8 352 400 352z"/>
</>],
['regular',<>
	<path d="M399.1 144c-13.25 0-23.1 21.5-23.1 48s10.75 48 23.1 48c13.25 0 24-21.5 24-48S413.2 144 399.1 144zM399.1 0H112C50.24 0 0 86.13 0 192s50.24 192 112 192H128v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192C512 86.13 461.8 0 399.1 0zM112 336c-25.5 0-64.01-57.38-64.01-144S86.5 48 112 48h214.2c-23.34 35.21-38.16 86.64-38.16 144s14.82 108.8 38.16 144H112zM464 464h-288V384h223.1c23.8 0 45.84-12.88 64-34.66V464zM399.1 336c-25.5 0-64-57.38-64-144s38.5-144 64-144C425.5 48 464 105.4 464 192S425.5 336 399.1 336zM175.1 192C167.2 192 159.1 199.2 159.1 207.1c0 8.828 7.164 15.99 15.99 15.99c8.83 0 15.1-7.168 15.1-15.1C191.1 199.2 184.8 192 175.1 192zM239.1 192c-8.83 0-15.1 7.167-15.1 15.1S231.2 224 239.1 224s15.1-7.167 15.1-15.1S248.8 192 239.1 192zM111.1 192c-8.834 0-16 7.167-16 15.1c0 8.834 7.166 16 16 16s16-7.166 16-15.1C127.1 199.2 120.8 192 111.1 192z"/>
</>],
['solid',<>
	<path d="M416 384c53 0 96-85.1 96-192c0-105.1-43-192-96-192s-96 86-96 192C320 298 363 384 416 384zM416 128c17.62 0 31.1 28.62 31.1 64S433.6 256 416 256s-32-28.62-32-64S398.4 128 416 128zM287.1 192c0-83.6 23.68-153.5 60.44-192H96C43 0 0 86 0 192c0 106 43 192 96 192h252.4C311.7 345.5 287.1 275.6 287.1 192zM47.97 224c-8.875 0-16-7.125-16-16S39.11 192 47.99 192s15.99 7.125 15.99 16S56.85 224 47.97 224zM111.1 223.1c-8.875 0-16-7.125-16-16S103.1 192 111.1 192s16 7.124 16 15.1S120.9 223.1 111.1 223.1zM175.1 223.1c-8.875 0-15.99-7.12-15.99-15.99S167.1 192 175.1 192s15.1 7.121 15.1 15.1S184.9 223.1 175.1 223.1zM239.1 224C231.1 224 223.1 216.9 223.1 208s7.122-15.1 15.1-15.1s15.1 7.122 15.1 15.1S248.9 224 239.1 224zM422.1 415.7L128 416v64c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-137C490.3 385.5 459.1 412.6 422.1 415.7z"/>
</>],
['thin',<>
	<path d="M63.98 192c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16s15.1-7.164 15.1-16C79.98 199.2 72.82 192 63.98 192zM144 192C135.2 192 127.1 199.2 127.1 207.1C127.1 216.8 135.2 224 144 224s15.99-7.167 15.99-16C159.1 199.2 152.8 192 144 192zM399.1 0H112C50.25 0 0 86.13 0 192s50.25 192 112 192H399.1c40.76 0 76.41-37.65 96-93.62V472c0 13.23-10.77 24-24 24h-304c-13.23 0-24-10.77-24-24v-48C144 419.6 140.4 416 136 416S128 419.6 128 424v48C128 494.1 145.9 512 168 512h304c22.06 0 40-17.94 40-40V192C512 86.13 461.7 0 399.1 0zM112 368c-52.94 0-96-78.95-96-176s43.06-176 96-176h243.4C315.8 45.63 287.1 113.3 287.1 192s27.78 146.4 67.38 176H112zM400 368c-52.94 0-96-78.95-96-176s43.06-176 96-176s96 78.95 96 176S452.9 368 400 368zM223.1 192c-8.836 0-16.01 7.162-16.01 16c0 8.836 7.174 16 16.01 16s15.99-7.164 15.99-16C239.1 199.2 232.8 192 223.1 192zM400 120c-22.8 0-40 30.95-40 72s17.2 72 40 72S440 233 440 192S422.8 120 400 120zM400 248c-11.33 0-24-23.95-24-56S388.7 136 400 136S423.1 159.1 423.1 192S411.3 248 400 248z"/>
</>],

]);

const ToiletPaperUnder: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ToiletPaperUnder.displayName = "ToiletPaperUnder";

export default ToiletPaperUnder;