
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M240 224C240 250.5 218.5 272 192 272C165.5 272 144 250.5 144 224C144 197.5 165.5 176 192 176C218.5 176 240 197.5 240 224z"/><path className="fa-secondary" d="M192 24C192 10.75 202.7 0 216 0H296C309.3 0 320 10.75 320 24C320 37.25 309.3 48 296 48H280V73.55C312.9 77.83 342.1 90.78 368 110L386.1 91.95L374.8 80.64C365.4 71.26 365.4 56.07 374.8 46.7C384.2 37.32 399.4 37.32 408.7 46.7L465.3 103.3C474.7 112.6 474.7 127.8 465.3 137.2C455.9 146.6 440.7 146.6 431.4 137.2L420 125.9L401.1 143.1C421.2 169 434.2 199.1 438.4 231.1H464V215.1C464 202.7 474.7 191.1 488 191.1C501.3 191.1 512 202.7 512 215.1V295.1C512 309.3 501.3 319.1 488 319.1C474.7 319.1 464 309.3 464 295.1V279.1H438.4C434.2 312.9 421.2 342.1 401.1 368L420 386.1L431.4 374.8C440.7 365.4 455.9 365.4 465.3 374.8C474.7 384.2 474.7 399.4 465.3 408.7L408.7 465.3C399.4 474.7 384.2 474.7 374.8 465.3C365.4 455.9 365.4 440.7 374.8 431.4L386.1 420L368 401.1C342.1 421.2 312.9 434.2 280 438.4V464H296C309.3 464 320 474.7 320 488C320 501.3 309.3 512 296 512H216C202.7 512 192 501.3 192 488C192 474.7 202.7 464 216 464H232V438.4C199.1 434.2 169 421.2 143.1 401.1L125.9 420L137.2 431.4C146.6 440.7 146.6 455.9 137.2 465.3C127.8 474.7 112.6 474.7 103.3 465.3L46.7 408.7C37.32 399.4 37.32 384.2 46.7 374.8C56.07 365.4 71.26 365.4 80.64 374.8L91.95 386.1L110 368C90.78 342.1 77.83 312.9 73.55 279.1H48V295.1C48 309.3 37.25 319.1 24 319.1C10.75 319.1 0 309.3 0 295.1V215.1C0 202.7 10.75 191.1 24 191.1C37.25 191.1 48 202.7 48 215.1V231.1H73.55C77.83 199.1 90.78 169 110 143.1L91.95 125.9L80.64 137.2C71.26 146.6 56.07 146.6 46.7 137.2C37.32 127.8 37.32 112.6 46.7 103.3L103.3 46.7C112.6 37.32 127.8 37.32 137.2 46.7C146.6 56.07 146.6 71.27 137.2 80.64L125.9 91.95L143.1 110C169 90.78 199.1 77.83 232 73.55V47.1H216C202.7 47.1 192 37.25 192 23.1V24zM192 176C165.5 176 144 197.5 144 224C144 250.5 165.5 272 192 272C218.5 272 240 250.5 240 224C240 197.5 218.5 176 192 176zM304 328C317.3 328 328 317.3 328 304C328 290.7 317.3 280 304 280C290.7 280 280 290.7 280 304C280 317.3 290.7 328 304 328z"/>
</>],
['light',<>
	<path d="M144 224C144 197.5 165.5 176 192 176C218.5 176 240 197.5 240 224C240 250.5 218.5 272 192 272C165.5 272 144 250.5 144 224zM192 240C200.8 240 208 232.8 208 224C208 215.2 200.8 208 192 208C183.2 208 176 215.2 176 224C176 232.8 183.2 240 192 240zM280 304C280 290.7 290.7 280 304 280C317.3 280 328 290.7 328 304C328 317.3 317.3 328 304 328C290.7 328 280 317.3 280 304zM296 0C304.8 0 312 7.164 312 16C312 24.84 304.8 32 296 32H272V72.69C310.8 76.03 346.1 91.41 374.3 115.1L403.1 86.3L386.1 69.33C379.9 63.08 379.9 52.95 386.1 46.7C392.4 40.45 402.5 40.45 408.7 46.7L465.3 103.3C471.6 109.5 471.6 119.6 465.3 125.9C459.1 132.1 448.9 132.1 442.7 125.9L425.7 108.9L396.9 137.7C420.6 165.9 435.1 201.2 439.3 240H480V216C480 207.2 487.2 200 496 200C504.8 200 512 207.2 512 216V296C512 304.8 504.8 312 496 312C487.2 312 480 304.8 480 296V272H439.3C435.1 310.8 420.6 346.1 396.9 374.3L425.7 403.1L442.7 386.1C448.9 379.9 459.1 379.9 465.3 386.1C471.5 392.4 471.5 402.5 465.3 408.7L408.7 465.3C402.5 471.6 392.4 471.6 386.1 465.3C379.9 459.1 379.9 448.9 386.1 442.7L403.1 425.7L374.3 396.9C346.1 420.6 310.8 435.1 272 439.3V480H296C304.8 480 312 487.2 312 496C312 504.8 304.8 512 296 512H215.1C207.2 512 199.1 504.8 199.1 496C199.1 487.2 207.2 480 215.1 480H239.1V439.3C201.2 435.1 165.9 420.6 137.7 396.9L108.9 425.7L125.9 442.7C132.1 448.9 132.1 459.1 125.9 465.3C119.6 471.5 109.5 471.5 103.3 465.3L46.7 408.7C40.45 402.5 40.45 392.4 46.7 386.1C52.94 379.9 63.07 379.9 69.32 386.1L86.3 403.1L115.1 374.3C91.41 346.1 76.03 310.8 72.69 271.1H32V295.1C32 304.8 24.84 311.1 16 311.1C7.164 311.1 0 304.8 0 295.1V215.1C0 207.2 7.164 199.1 16 199.1C24.84 199.1 32 207.2 32 215.1V239.1H72.69C76.03 201.2 91.41 165.9 115.1 137.7L86.3 108.9L69.33 125.9C63.08 132.1 52.95 132.1 46.7 125.9C40.45 119.6 40.45 109.5 46.7 103.3L103.3 46.7C109.5 40.45 119.6 40.45 125.9 46.7C132.1 52.94 132.1 63.07 125.9 69.32L108.9 86.3L137.7 115.1C165.9 91.41 201.2 76.03 240 72.69V32H216C207.2 32 200 24.84 200 16C200 7.164 207.2 0 216 0L296 0zM256 408C339.9 408 408 339.9 408 256C408 172.1 339.9 104 256 104C172.1 104 104 172.1 104 256C104 339.9 172.1 408 256 408z"/>
</>],
['regular',<>
	<path d="M256 240C256 266.5 234.5 288 208 288C181.5 288 160 266.5 160 240C160 213.5 181.5 192 208 192C234.5 192 256 213.5 256 240zM280 304C280 290.7 290.7 280 304 280C317.3 280 328 290.7 328 304C328 317.3 317.3 328 304 328C290.7 328 280 317.3 280 304zM296 0C309.3 0 320 10.75 320 24C320 37.25 309.3 48 296 48H280V81.62C310.7 85.8 338.8 97.88 362.3 115.7L386.1 91.95L374.8 80.64C365.4 71.26 365.4 56.07 374.8 46.7C384.2 37.32 399.4 37.32 408.7 46.7L465.3 103.3C474.7 112.6 474.7 127.8 465.3 137.2C455.9 146.6 440.7 146.6 431.4 137.2L420 125.9L396.3 149.7C414.1 173.2 426.2 201.3 430.4 232H464V216C464 202.7 474.7 192 488 192C501.3 192 512 202.7 512 216V296C512 309.3 501.3 320 488 320C474.7 320 464 309.3 464 296V280H430.4C426.2 310.7 414.1 338.8 396.3 362.3L420 386.1L431.4 374.8C440.7 365.4 455.9 365.4 465.3 374.8C474.7 384.2 474.7 399.4 465.3 408.7L408.7 465.3C399.4 474.7 384.2 474.7 374.8 465.3C365.4 455.9 365.4 440.7 374.8 431.4L386.1 420L362.3 396.3C338.8 414.1 310.7 426.2 280 430.4V464H296C309.3 464 320 474.7 320 488C320 501.3 309.3 512 296 512H216C202.7 512 192 501.3 192 488C192 474.7 202.7 464 216 464H232V430.4C201.3 426.2 173.2 414.1 149.7 396.3L125.9 420.1L137.2 431.4C146.6 440.7 146.6 455.9 137.2 465.3C127.8 474.7 112.6 474.7 103.3 465.3L46.7 408.7C37.32 399.4 37.32 384.2 46.7 374.8C56.07 365.4 71.27 365.4 80.64 374.8L91.95 386.1L115.7 362.3C97.88 338.8 85.8 310.7 81.62 280H48V296C48 309.3 37.25 320 24 320C10.75 320 0 309.3 0 296V216C0 202.7 10.75 192 24 192C37.25 192 48 202.7 48 216V232H81.62C85.8 201.3 97.88 173.2 115.7 149.7L91.95 125.9L80.64 137.2C71.26 146.6 56.07 146.6 46.7 137.2C37.32 127.8 37.32 112.6 46.7 103.3L103.3 46.7C112.6 37.33 127.8 37.33 137.2 46.7C146.6 56.07 146.6 71.27 137.2 80.64L125.9 91.95L149.7 115.7C173.2 97.88 201.3 85.8 232 81.62V48H216C202.7 48 192 37.26 192 24C192 10.75 202.7 .0006 216 .0006L296 0zM256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256C128 326.7 185.3 384 256 384z"/>
</>],
['solid',<>
	<path d="M192 24C192 10.75 202.7 0 216 0H296C309.3 0 320 10.75 320 24C320 37.25 309.3 48 296 48H280V81.62C310.7 85.8 338.8 97.88 362.3 115.7L386.1 91.95L374.8 80.64C365.4 71.26 365.4 56.07 374.8 46.7C384.2 37.32 399.4 37.32 408.7 46.7L465.3 103.3C474.7 112.6 474.7 127.8 465.3 137.2C455.9 146.6 440.7 146.6 431.4 137.2L420 125.9L396.3 149.7C414.1 173.2 426.2 201.3 430.4 232H464V216C464 202.7 474.7 192 488 192C501.3 192 512 202.7 512 216V296C512 309.3 501.3 320 488 320C474.7 320 464 309.3 464 296V280H430.4C426.2 310.7 414.1 338.8 396.3 362.3L420 386.1L431.4 374.8C440.7 365.4 455.9 365.4 465.3 374.8C474.7 384.2 474.7 399.4 465.3 408.7L408.7 465.3C399.4 474.7 384.2 474.7 374.8 465.3C365.4 455.9 365.4 440.7 374.8 431.4L386.1 420L362.3 396.3C338.8 414.1 310.7 426.2 280 430.4V464H296C309.3 464 320 474.7 320 488C320 501.3 309.3 512 296 512H216C202.7 512 192 501.3 192 488C192 474.7 202.7 464 216 464H232V430.4C201.3 426.2 173.2 414.1 149.7 396.3L125.9 420.1L137.2 431.4C146.6 440.7 146.6 455.9 137.2 465.3C127.8 474.7 112.6 474.7 103.3 465.3L46.7 408.7C37.32 399.4 37.32 384.2 46.7 374.8C56.07 365.4 71.27 365.4 80.64 374.8L91.95 386.1L115.7 362.3C97.88 338.8 85.8 310.7 81.62 280H48V296C48 309.3 37.25 320 24 320C10.75 320 0 309.3 0 296V216C0 202.7 10.75 192 24 192C37.25 192 48 202.7 48 216V232H81.62C85.8 201.3 97.88 173.2 115.7 149.7L91.95 125.9L80.64 137.2C71.26 146.6 56.07 146.6 46.7 137.2C37.32 127.8 37.32 112.6 46.7 103.3L103.3 46.7C112.6 37.33 127.8 37.33 137.2 46.7C146.6 56.07 146.6 71.27 137.2 80.64L125.9 91.95L149.7 115.7C173.2 97.88 201.3 85.8 232 81.62V48H216C202.7 48 192 37.26 192 24V24zM192 176C165.5 176 144 197.5 144 224C144 250.5 165.5 272 192 272C218.5 272 240 250.5 240 224C240 197.5 218.5 176 192 176zM304 328C317.3 328 328 317.3 328 304C328 290.7 317.3 280 304 280C290.7 280 280 290.7 280 304C280 317.3 290.7 328 304 328z"/>
</>],
['thin',<>
	<path d="M144 224C144 197.5 165.5 176 192 176C218.5 176 240 197.5 240 224C240 250.5 218.5 272 192 272C165.5 272 144 250.5 144 224zM192 256C209.7 256 224 241.7 224 224C224 206.3 209.7 192 192 192C174.3 192 160 206.3 160 224C160 241.7 174.3 256 192 256zM288 304C288 295.2 295.2 288 304 288C312.8 288 320 295.2 320 304C320 312.8 312.8 320 304 320C295.2 320 288 312.8 288 304zM296 8C300.4 8 304 11.58 304 16C304 20.42 300.4 24 296 24H264V72.17C308.8 74.09 349.4 92.01 380.3 120.4L414.4 86.3L391.8 63.67C388.6 60.54 388.6 55.48 391.8 52.36C394.9 49.23 399.1 49.23 403.1 52.36L459.6 108.9C462.8 112 462.8 117.1 459.6 120.2C456.5 123.4 451.5 123.4 448.3 120.2L425.7 97.61L391.6 131.7C419.1 162.6 437.9 203.2 439.8 248H488V216C488 211.6 491.6 208 496 208C500.4 208 504 211.6 504 216V296C504 300.4 500.4 304 496 304C491.6 304 488 300.4 488 296V264H439.8C437.9 308.8 419.1 349.4 391.6 380.3L425.7 414.4L448.3 391.8C451.5 388.6 456.5 388.6 459.6 391.8C462.8 394.9 462.8 399.1 459.6 403.1L403.1 459.6C399.1 462.8 394.9 462.8 391.8 459.6C388.6 456.5 388.6 451.5 391.8 448.3L414.4 425.7L380.3 391.6C349.4 419.1 308.8 437.9 264 439.8V488H296C300.4 488 304 491.6 304 496C304 500.4 300.4 504 296 504H216C211.6 504 208 500.4 208 496C208 491.6 211.6 488 216 488H248V439.8C203.2 437.9 162.6 419.1 131.7 391.6L97.61 425.7L120.2 448.3C123.4 451.5 123.4 456.5 120.2 459.6C117.1 462.8 112 462.8 108.9 459.6L52.35 403.1C49.23 399.1 49.23 394.9 52.35 391.8C55.48 388.6 60.54 388.6 63.67 391.8L86.3 414.4L120.4 380.3C92.01 349.4 74.09 308.8 72.17 264H24V296C24 300.4 20.42 304 16 304C11.58 304 8 300.4 8 296V216C8 211.6 11.58 208 16 208C20.42 208 24 211.6 24 216V248H72.17C74.09 203.2 92.01 162.6 120.4 131.7L86.3 97.61L63.67 120.2C60.54 123.4 55.48 123.4 52.36 120.2C49.23 117.1 49.23 112 52.36 108.9L108.9 52.35C112 49.23 117.1 49.23 120.2 52.35C123.4 55.48 123.4 60.54 120.2 63.67L97.61 86.3L131.7 120.4C162.6 92.01 203.2 74.09 248 72.17V24H216C211.6 24 208 20.42 208 16C208 11.58 211.6 8 216 8H296zM256 424C348.8 424 424 348.8 424 256C424 163.2 348.8 88 256 88C163.2 88 88 163.2 88 256C88 348.8 163.2 424 256 424z"/>
</>],

]);

const VirusCovid: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

VirusCovid.displayName = "VirusCovid";

export default VirusCovid;