
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"/>
</>],
['light',<>
	<path d="M488.9 96C406.3 96 346.3 178.5 320 222.5C293.8 178.5 233.8 96 151.1 96C67.75 96 0 167.8 0 256s67.75 160 151.1 160C233.6 416 293.8 333.5 320 289.5C346.3 333.5 406.3 416 488.9 416C572.3 416 640 344.3 640 256S572.3 96 488.9 96zM151.1 384C85.5 384 32 326.6 32 256s53.5-128 119.1-128c78 0 136.5 100.6 150.9 128C287.6 283.4 229.1 384 151.1 384zM488.9 384c-78 0-136.5-100.6-150.9-128c14.38-27.38 72.88-128 150.9-128C554.5 128 608 185.4 608 256S554.5 384 488.9 384z"/>
</>],
['regular',<>
	<path d="M484.4 96C407 96 349.2 164.1 320 208.5C290.8 164.1 233 96 155.6 96C69.75 96 0 167.8 0 256s69.75 160 155.6 160C233.1 416 290.8 347.9 320 303.5C349.2 347.9 407 416 484.4 416C570.3 416 640 344.2 640 256S570.3 96 484.4 96zM155.6 368C96.25 368 48 317.8 48 256s48.25-112 107.6-112c67.75 0 120.5 82.25 137.1 112C276 285.8 223.4 368 155.6 368zM484.4 368c-67.75 0-120.5-82.25-137.1-112C364 226.2 416.6 144 484.4 144C543.8 144 592 194.2 592 256S543.8 368 484.4 368z"/>
</>],
['solid',<>
	<path d="M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"/>
</>],
['thin',<>
	<path d="M482.2 119.1c-70.85 0-133.1 78.13-162.2 121.4C286.8 191.8 226.7 119.1 157.8 119.1c-73.78 0-133.8 61-133.8 136s60 136 133.8 136c70.85 0 133.1-78.13 162.2-121.4c33.24 49.57 93.32 121.4 162.2 121.4c73.78 0 133.8-61 133.8-136S556 119.1 482.2 119.1zM157.8 375.1c-64.94 0-117.8-53.84-117.8-120s52.84-120 117.8-120c66.19 0 127 80.69 152.7 120C284.9 295.3 224.2 375.1 157.8 375.1zM482.2 375.1c-66.19 0-127-80.69-152.7-120c25.59-39.34 86.28-120 152.7-120c64.94 0 117.8 53.84 117.8 120S547.2 375.1 482.2 375.1z"/>
</>],

]);

const Infinity: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Infinity.displayName = "Infinity";

export default Infinity;
