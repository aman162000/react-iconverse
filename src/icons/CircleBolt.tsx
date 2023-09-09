
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280.3 240H344C350.8 240 356.8 244.2 359.1 250.6C361.3 256.1 359.4 264.1 354.2 268.4L218.2 380.4C212.5 385 204.3 385.2 198.4 380.8C192.5 376.4 190.4 368.5 193.3 361.7L231.7 271.1H168C161.2 271.1 155.2 267.8 152.9 261.4C150.7 255 152.6 247.9 157.8 243.6L293.8 131.6C299.5 126.1 307.7 126.8 313.6 131.2C319.5 135.6 321.6 143.5 318.7 150.3L280.3 240z"/><path className="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM293.8 131.6L157.8 243.6C152.6 247.9 150.7 255 152.9 261.4C155.2 267.8 161.2 271.1 168 271.1H231.7L193.3 361.7C190.4 368.5 192.5 376.4 198.4 380.8C204.3 385.2 212.5 385 218.2 380.4L354.2 268.4C359.4 264.1 361.3 256.1 359.1 250.6C356.8 244.2 350.8 240 344 240H280.3L318.7 150.3C321.6 143.5 319.5 135.6 313.6 131.2C307.7 126.8 299.5 126.1 293.8 131.6L293.8 131.6z"/>
</>],
['light',<>
	<path d="M333.4 122.7L301.8 224H362.5C374.4 224 384 233.6 384 245.5C384 251.6 381.4 257.4 376.9 261.5L212 410.7C208.3 414.1 203.3 416 198.2 416C184.3 416 174.4 402.5 178.6 389.3L210.2 288H148.9C137.4 288 128 278.6 128 267.1C128 261.2 130.5 255.6 134.8 251.6L299.9 101.4C303.7 97.91 308.6 96 313.8 96C327.7 96 337.6 109.5 333.4 122.7H333.4zM232 256C237.1 256 241.9 258.4 244.9 262.5C247.9 266.6 248.8 271.9 247.3 276.8L221.6 358.9L335.3 256H280C274.9 256 270.1 253.6 267.1 249.5C264.1 245.4 263.2 240.1 264.7 235.2L290.3 153.4L177.5 256H232zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M313.6 131.2C319.5 135.6 321.6 143.5 318.7 150.3L280.3 240H344C350.8 240 356.8 244.2 359.1 250.6C361.3 256.1 359.4 264.1 354.2 268.4L218.2 380.4C212.5 385 204.3 385.2 198.4 380.8C192.5 376.4 190.4 368.5 193.3 361.7L231.7 271.1H168C161.2 271.1 155.2 267.8 152.9 261.4C150.7 255 152.6 247.9 157.8 243.6L293.8 131.6C299.5 126.1 307.7 126.8 313.6 131.2V131.2zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM293.8 131.6L157.8 243.6C152.6 247.9 150.7 255 152.9 261.4C155.2 267.8 161.2 271.1 168 271.1H231.7L193.3 361.7C190.4 368.5 192.5 376.4 198.4 380.8C204.3 385.2 212.5 385 218.2 380.4L354.2 268.4C359.4 264.1 361.3 256.1 359.1 250.6C356.8 244.2 350.8 240 344 240H280.3L318.7 150.3C321.6 143.5 319.5 135.6 313.6 131.2C307.7 126.8 299.5 126.1 293.8 131.6L293.8 131.6z"/>
</>],
['thin',<>
	<path d="M325.8 112.3L290.9 224H364.9C375.5 224 384 232.5 384 243.1C384 248.5 381.7 253.6 377.8 257.2L206.7 412.7C204.4 414.8 201.4 416 198.2 416C189.7 416 183.7 407.8 186.2 399.7L221.1 288H146.5C136.3 288 128 279.7 128 269.5C128 264.3 130.2 259.4 134 255.9L305.3 99.29C307.6 97.18 310.6 96 313.8 96C322.3 96 328.3 104.2 325.8 112.3V112.3zM144 269.5C144 270.9 145.1 272 146.5 272H232C234.5 272 236.9 273.2 238.4 275.3C239.1 277.3 240.4 279.1 239.6 282.4L205.3 392.4L366.1 245.4C367.6 244.8 368 243.1 368 243.1C368 241.4 366.6 240 364.9 240H280C277.5 240 275.1 238.8 273.6 236.7C272 234.7 271.6 232 272.4 229.6L306.7 119.7L144.8 267.7C144.3 268.1 144 268.8 144 269.5V269.5zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const CircleBolt: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleBolt.displayName = "CircleBolt";

export default CircleBolt;