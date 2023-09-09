
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 127.1C121.3 127.1 64 185.3 64 255.1C64 326.7 121.3 384 192 384C220.9 384 247.4 374.5 268.8 358.4C282.9 347.8 302.1 350.6 313.6 364.8C324.2 378.9 321.4 398.1 307.2 409.6C275.1 433.7 235.2 448 192 448C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64C235.2 64 275.1 78.3 307.2 102.4C321.4 113 324.2 133.1 313.6 147.2C302.1 161.4 282.9 164.2 268.8 153.6C247.4 137.5 220.9 128 192 128V127.1z"/><path className="fa-secondary" d="M192 0C209.7 0 224 14.33 224 32V66.66C213.6 64.91 202.9 64 192 64C181.1 64 170.4 64.91 160 66.65V32C160 14.33 174.3 0 192 0zM192 448C202.9 448 213.6 447.1 224 445.3V480C224 497.7 209.7 512 192 512C174.3 512 160 497.7 160 480V445.3C170.4 447.1 181.1 448 192 448z"/>
</>],
['light',<>
	<path d="M176 .0003C184.8 .0003 192 7.164 192 16V64.04C193.3 64.01 194.7 64 195.1 64C240 64 280.7 78.24 313.5 102.3C320.6 107.5 322.1 117.6 316.9 124.7C311.7 131.8 301.6 133.3 294.5 128.1C267.1 107.1 233 96 195.1 96C105.1 96 31.1 167.1 31.1 256C31.1 344 105.1 416 195.1 416C233 416 267.1 404 294.5 383.9C301.6 378.7 311.7 380.2 316.9 387.3C322.1 394.4 320.6 404.5 313.5 409.7C280.7 433.8 240 448 195.1 448C194.7 448 193.3 447.1 192 447.1V496C192 504.8 184.8 512 176 512C167.2 512 160 504.8 160 496V444.8C69.17 428.2 0 350.3 0 256C0 161.7 69.17 83.77 160 67.23V16C160 7.164 167.2 0 176 0V.0003z"/>
</>],
['regular',<>
	<path d="M184 0C197.3 0 208 10.75 208 24V72.47C245.9 75.04 280.1 87.97 309.9 108.4C320.7 116.1 323.2 131 315.6 141.9C307.9 152.7 292.1 155.2 282.1 147.6C257.7 130.3 227.2 120 193.1 120C111.1 120 48 182.2 48 256C48 329.8 111.1 392 193.1 392C227.2 392 257.7 381.7 282.1 364.4C292.1 356.8 307.9 359.3 315.6 370.1C323.2 380.1 320.7 395.9 309.9 403.6C280.1 424 245.9 436.1 208 439.5V488C208 501.3 197.3 512 184 512C170.7 512 160 501.3 160 488V437.2C69.99 422 0 347.7 0 256C0 164.3 69.99 89.99 160 74.83V24C160 10.75 170.7 0 184 0V0z"/>
</>],
['solid',<>
	<path d="M192 0C209.7 0 224 14.33 224 32V66.66C254.9 71.84 283.2 84.39 307.2 102.4C321.4 113 324.2 133.1 313.6 147.2C302.1 161.4 282.9 164.2 268.8 153.6C247.4 137.5 220.9 128 192 128C121.3 128 64 185.3 64 256C64 326.7 121.3 384 192 384C220.9 384 247.4 374.5 268.8 358.4C282.9 347.8 302.1 350.6 313.6 364.8C324.2 378.9 321.4 398.1 307.2 409.6C283.2 427.6 254.9 440.2 224 445.3V480C224 497.7 209.7 512 192 512C174.3 512 160 497.7 160 480V445.3C69.19 430.1 0 351.1 0 256C0 160.9 69.19 81.89 160 66.66V32C160 14.33 174.3 .0006 192 .0006V0z"/>
</>],
['thin',<>
	<path d="M192 0C196.4 0 200 3.582 200 8V64.01C243.7 64.43 284.1 78.61 316.7 102.3C320.3 104.9 321.1 109.9 318.5 113.5C315.9 117.1 310.9 117.9 307.3 115.3C276.9 93.14 239 80 197.1 80C97.24 80 16 159 16 256C16 352.1 97.24 432 197.1 432C239 432 276.9 418.9 307.3 396.7C310.9 394.1 315.9 394.9 318.5 398.5C321.1 402.1 320.3 407.1 316.7 409.7C284.1 433.4 243.7 447.6 200 447.1V504C200 508.4 196.4 512 192 512C187.6 512 184 508.4 184 504V447.5C81.39 440.6 0 357.7 0 256C0 154.3 81.39 71.43 184 64.47V8C184 3.582 187.6 0 192 0V0z"/>
</>],

]);

const CentSign: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CentSign.displayName = "CentSign";

export default CentSign;
