
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M301.2 139.7C316.8 124.1 342.1 124.1 357.8 139.7L372.1 154.1C387.8 169.7 387.8 195 372.1 210.7L350.7 232.1L279.8 161.1L301.2 139.7zM328.1 254.7L222.9 359.9C218.8 364 213.6 366.9 208 368.3L147.9 383.4C142.4 384.7 136.7 383.1 132.7 379.2C128.7 375.2 127.1 369.4 128.5 363.1L143.5 303.8C144.9 298.2 147.8 293.1 151.9 288.1L257.1 183.8L328.1 254.7z"/><path className="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM357.8 139.7C342.1 124.1 316.8 124.1 301.2 139.7L279.8 161.1L350.7 232.1L372.1 210.7C387.8 195 387.8 169.7 372.1 154.1L357.8 139.7zM143.5 303.8L128.5 363.1C127.1 369.4 128.7 375.2 132.7 379.2C136.7 383.1 142.4 384.7 147.9 383.4L208 368.3C213.6 366.9 218.8 364 222.9 359.9L328.1 254.7L257.1 183.8L151.9 288.1C147.8 293.1 144.9 298.2 143.5 303.8z"/>
</>],
['light',<>
	<path d="M286.2 140.7C304.1 121.1 335.3 121.1 354.1 140.7L371.4 158.1C390.2 176.8 390.2 207.2 371.4 225.9L245.1 352.3C238.9 358.5 231.2 362.8 222.8 364.1L147.9 383.7C142.4 385 136.7 383.4 132.7 379.5C128.7 375.5 127.1 369.7 128.5 364.3L147.2 289.4C149.3 280.9 153.7 273.2 159.8 267.1L286.2 140.7zM331.5 163.3C325.2 157.1 315.1 157.1 308.8 163.3L287.4 184.8L327.4 224.8L348.8 203.3C355.1 197.1 355.1 186.9 348.8 180.7L331.5 163.3zM178.2 297.1L165.1 346.2L215 333.9C217.8 333.2 220.4 331.7 222.4 329.7L304.8 247.4L264.8 207.4L182.5 289.7C180.4 291.8 178.9 294.3 178.2 297.1V297.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M372.1 154.1C387.8 169.7 387.8 195 372.1 210.7L350.7 232.1L279.8 161.1L301.2 139.7C316.8 124.1 342.1 124.1 357.8 139.7L372.1 154.1zM151.9 288.1L257.1 183.8L328.1 254.7L222.9 359.9C218.8 364 213.6 366.9 208 368.3L147.9 383.4C142.4 384.7 136.7 383.1 132.7 379.2C128.7 375.2 127.1 369.4 128.5 363.1L143.5 303.8C144.9 298.2 147.8 293.1 151.9 288.1V288.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM357.8 139.7C342.1 124.1 316.8 124.1 301.2 139.7L279.8 161.1L350.7 232.1L372.1 210.7C387.8 195 387.8 169.7 372.1 154.1L357.8 139.7zM143.5 303.8L128.5 363.1C127.1 369.4 128.7 375.2 132.7 379.2C136.7 383.1 142.4 384.7 147.9 383.4L208 368.3C213.6 366.9 218.8 364 222.9 359.9L328.1 254.7L257.1 183.8L151.9 288.1C147.8 293.1 144.9 298.2 143.5 303.8z"/>
</>],
['thin',<>
	<path d="M132.7 379.2C128.7 375.2 127.1 369.4 128.5 363.1L143.5 303.8C144.9 298.2 147.8 293.1 151.9 288.1L307.4 133.5C323 117.9 348.3 117.9 363.1 133.5L378.3 147.9C393.1 163.5 393.1 188.8 378.3 204.5L222.9 359.9C218.8 364 213.6 366.9 208 368.3L204.1 352.8C206.9 352.1 209.5 350.7 211.6 348.6L330.4 229.7L282.1 181.4L163.2 300.3C161.2 302.3 159.7 304.9 159 307.7L144 367.9L204.1 352.8L208 368.3L147.9 383.4C142.4 384.7 136.7 383.1 132.7 379.2L132.7 379.2zM367 159.2L352.6 144.8C343.3 135.4 328.1 135.4 318.7 144.8L293.4 170.1L341.7 218.4L367 193.1C376.4 183.8 376.4 168.6 367 159.2V159.2zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const PenCircle: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PenCircle.displayName = "PenCircle";

export default PenCircle;
