
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M262.4 232.9C212.5 219.1 205.7 212.4 208.5 196.6c1.031-5.688 4.156-10.27 9.344-13.61c8.594-5.547 30.84-12.88 83.63 .5781c12.81 3.297 25.94-4.469 29.19-17.31c3.281-12.84-4.469-25.92-17.31-29.19c-53.66-13.69-94.47-11.81-121.5 5.562C175.5 153.2 164.7 169.4 161.3 188.2c-11.28 63.38 48.66 80 88.31 91c49.94 13.86 56.69 20.53 53.88 36.31c-1.312 7.312-4.344 11.81-10.12 15.06c-18.09 10.09-58.5 5.844-100.6-10.7c-12.22-4.75-26.28 1.188-31.12 13.58c-4.844 12.33 1.219 26.27 13.56 31.11c18.31 7.172 54.88 19.48 90.63 19.48c18 0 35.78-3.109 50.94-11.58c18.38-10.28 30.09-27.06 33.94-48.53C361.1 260.6 302.1 243.9 262.4 232.9z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM350.7 323.9c-3.844 21.47-15.56 38.25-33.94 48.53c-15.16 8.469-32.94 11.58-50.94 11.58c-35.75 0-72.31-12.31-90.63-19.48c-12.34-4.844-18.41-18.78-13.56-31.11c4.844-12.39 18.91-18.33 31.12-13.58c42.06 16.55 82.47 20.8 100.6 10.7c5.781-3.25 8.812-7.75 10.12-15.06c2.812-15.78-3.938-22.45-53.88-36.31c-39.66-11-99.59-27.62-88.31-91c3.375-18.83 14.22-35 30.59-45.55c27.03-17.38 67.84-19.25 121.5-5.562c12.84 3.266 20.59 16.34 17.31 29.19c-3.25 12.84-16.38 20.61-29.19 17.31C248.7 170.1 226.5 177.5 217.9 183c-5.188 3.344-8.312 7.922-9.344 13.61c-2.812 15.78 3.938 22.45 53.88 36.31C302.1 243.9 361.1 260.6 350.7 323.9z"/>
</>],
['light',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM260.2 240.6C209.4 226.1 187.7 218.1 192.8 190.4c1.094-5.953 4.469-14.41 14.38-20.81c13.41-8.672 42.06-15.94 102.2-1.062c8.719 2.094 17.25-3.125 19.38-11.69c2.125-8.578-3.125-17.25-11.69-19.38c-57.16-14.11-99.94-12.39-127.2 5.25c-15.22 9.844-25.34 24.73-28.5 41.92C150.3 244.2 209 260 251.8 271.5c50.78 13.66 72.47 22.53 67.38 50.22c-1.938 10.55-6.969 17.78-15.81 22.77c-23.06 12.92-70.81 8.766-121.7-10.61c-8.188-3.094-17.5 .9844-20.62 9.266c-3.156 8.25 1 17.5 9.25 20.64c15.66 5.953 57.13 20.16 96.94 20.16c18.59 0 36.81-3.094 51.84-11.56c17.06-9.594 27.97-25.11 31.62-44.88C361.7 267.9 303 252.1 260.2 240.6z"/>
</>],
['regular',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM262.4 232.9C212.5 219.1 205.7 212.4 208.5 196.6c1.031-5.688 4.156-10.27 9.344-13.61c8.594-5.547 30.84-12.88 83.63 .5781c12.81 3.297 25.94-4.469 29.19-17.31c3.281-12.84-4.469-25.92-17.31-29.19c-53.66-13.69-94.47-11.81-121.5 5.562C175.5 153.2 164.7 169.4 161.3 188.2c-11.28 63.38 48.66 80 88.31 91c49.94 13.86 56.69 20.53 53.88 36.31c-1.312 7.312-4.344 11.81-10.12 15.06c-18.09 10.09-58.5 5.844-100.6-10.7c-12.22-4.75-26.28 1.188-31.12 13.58c-4.844 12.33 1.219 26.27 13.56 31.11c18.31 7.172 54.88 19.48 90.63 19.48c18 0 35.78-3.109 50.94-11.58c18.38-10.28 30.09-27.06 33.94-48.53C361.1 260.6 302.1 243.9 262.4 232.9z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM350.7 323.9c-3.844 21.47-15.56 38.25-33.94 48.53c-15.16 8.469-32.94 11.58-50.94 11.58c-35.75 0-72.31-12.31-90.63-19.48c-12.34-4.844-18.41-18.78-13.56-31.11c4.844-12.39 18.91-18.33 31.12-13.58c42.06 16.55 82.47 20.8 100.6 10.7c5.781-3.25 8.812-7.75 10.12-15.06c2.812-15.78-3.938-22.45-53.88-36.31c-39.66-11-99.59-27.62-88.31-91c3.375-18.83 14.22-35 30.59-45.55c27.03-17.38 67.84-19.25 121.5-5.562c12.84 3.266 20.59 16.34 17.31 29.19c-3.25 12.84-16.38 20.61-29.19 17.31C248.7 170.1 226.5 177.5 217.9 183c-5.188 3.344-8.312 7.922-9.344 13.61c-2.812 15.78 3.938 22.45 53.88 36.31C302.1 243.9 361.1 260.6 350.7 323.9z"/>
</>],
['thin',<>
	<path d="M258 248.3C202.8 233.9 169.8 222.3 177 184.1c2.156-11.48 8.875-21.16 19.41-27.98c16.31-10.58 50.5-19.58 120.6-2.719c4.281 .9844 8.625-1.609 9.656-5.906S325 138.9 320.7 137.8c-60.66-14.59-105.3-12.95-133 4.844C173.4 151.1 164.3 165.2 161.3 181.1c-10.5 55.64 44.34 70 92.72 82.67c55.25 14.47 88.25 26 81.03 64.23c-2.594 13.73-9.594 23.66-21.44 30.36c-33.53 18.91-95.72 7-142.8-10.42c-4.031-1.531-8.75 .5781-10.28 4.719s.5625 8.75 4.719 10.28c16.78 6.219 61.28 21.06 103.1 21.06c19.25 0 37.94-3.141 53.09-11.7c15.97-9.047 25.81-22.94 29.31-41.33C361.3 275.4 306.4 261 258 248.3zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleS: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleS.displayName = "CircleS";

export default CircleS;