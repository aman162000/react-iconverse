
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 32C433.7 32 448 46.33 448 64V448C448 465.7 433.7 480 416 480C398.3 480 384 465.7 384 448V64C384 46.33 398.3 32 416 32z"/><path className="fa-secondary" d="M32 32C49.67 32 64 46.33 64 64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32zM160 32C177.7 32 192 46.33 192 64V448C192 465.7 177.7 480 160 480C142.3 480 128 465.7 128 448V64C128 46.33 142.3 32 160 32zM320 448C320 465.7 305.7 480 288 480C270.3 480 256 465.7 256 448V64C256 46.33 270.3 32 288 32C305.7 32 320 46.33 320 64V448z"/>
</>],
['light',<>
	<path d="M47.1 464C47.1 472.8 40.84 480 31.1 480C23.16 480 15.1 472.8 15.1 464V48C15.1 39.16 23.16 32 31.1 32C40.84 32 47.1 39.16 47.1 48V464zM175.1 464C175.1 472.8 168.8 480 159.1 480C151.2 480 143.1 472.8 143.1 464V48C143.1 39.16 151.2 32 159.1 32C168.8 32 175.1 39.16 175.1 48V464zM288 32C296.8 32 304 39.16 304 48V464C304 472.8 296.8 480 288 480C279.2 480 272 472.8 272 464V48C272 39.16 279.2 32 288 32zM432 464C432 472.8 424.8 480 416 480C407.2 480 400 472.8 400 464V48C400 39.16 407.2 32 416 32C424.8 32 432 39.16 432 48V464z"/>
</>],
['regular',<>
	<path d="M56 448C56 461.3 45.25 472 32 472C18.75 472 8 461.3 8 448V64C8 50.75 18.75 40 32 40C45.25 40 56 50.75 56 64V448zM184 448C184 461.3 173.3 472 160 472C146.7 472 136 461.3 136 448V64C136 50.75 146.7 40 160 40C173.3 40 184 50.75 184 64V448zM288 40C301.3 40 312 50.75 312 64V448C312 461.3 301.3 472 288 472C274.7 472 264 461.3 264 448V64C264 50.75 274.7 40 288 40zM440 448C440 461.3 429.3 472 416 472C402.7 472 392 461.3 392 448V64C392 50.75 402.7 40 416 40C429.3 40 440 50.75 440 64V448z"/>
</>],
['solid',<>
	<path d="M64 448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V448zM192 448C192 465.7 177.7 480 160 480C142.3 480 128 465.7 128 448V64C128 46.33 142.3 32 160 32C177.7 32 192 46.33 192 64V448zM288 32C305.7 32 320 46.33 320 64V448C320 465.7 305.7 480 288 480C270.3 480 256 465.7 256 448V64C256 46.33 270.3 32 288 32zM448 448C448 465.7 433.7 480 416 480C398.3 480 384 465.7 384 448V64C384 46.33 398.3 32 416 32C433.7 32 448 46.33 448 64V448z"/>
</>],
['thin',<>
	<path d="M39.1 472C39.1 476.4 36.42 480 31.1 480C27.58 480 23.1 476.4 23.1 472V40C23.1 35.58 27.58 32 31.1 32C36.42 32 39.1 35.58 39.1 40V472zM167.1 472C167.1 476.4 164.4 480 159.1 480C155.6 480 151.1 476.4 151.1 472V40C151.1 35.58 155.6 32 159.1 32C164.4 32 167.1 35.58 167.1 40V472zM288 32C292.4 32 296 35.58 296 40V472C296 476.4 292.4 480 288 480C283.6 480 280 476.4 280 472V40C280 35.58 283.6 32 288 32zM424 472C424 476.4 420.4 480 416 480C411.6 480 408 476.4 408 472V40C408 35.58 411.6 32 416 32C420.4 32 424 35.58 424 40V472z"/>
</>],

]);

const Tally4: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Tally4.displayName = "Tally4";

export default Tally4;
