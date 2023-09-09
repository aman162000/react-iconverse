
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80C160 124.2 124.2 160 80 160C35.82 160 0 124.2 0 80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM0 432C0 387.8 35.82 352 80 352C124.2 352 160 387.8 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456zM512 432C512 476.2 476.2 512 432 512C387.8 512 352 476.2 352 432C352 387.8 387.8 352 432 352C476.2 352 512 387.8 512 432zM432 408C418.7 408 408 418.7 408 432C408 445.3 418.7 456 432 456C445.3 456 456 445.3 456 432C456 418.7 445.3 408 432 408z"/><path className="fa-secondary" d="M320 64H336C406.7 64 464 121.3 464 192V358.7C454.2 354.4 443.4 352 432 352C420.6 352 409.8 354.4 400 358.7V192C400 156.7 371.3 128 336 128H320V168C320 177.5 314.4 186.1 305.8 189.9C297.1 193.8 286.1 192.2 279.9 185.8L199.9 113.8C194.9 109.3 192 102.8 192 96C192 89.2 194.9 82.71 199.9 78.16L279.9 6.161C286.1-.1791 297.1-1.779 305.8 2.077C314.4 5.933 320 14.52 320 24V64zM48 153.3C57.8 157.6 68.62 160 80 160C91.38 160 102.2 157.6 112 153.3V358.7C102.2 354.4 91.38 352 80 352C68.62 352 57.8 354.4 48 358.7V153.3z"/>
</>],
['light',<>
	<path d="M323.8 5.237C329.8 11.78 329.3 21.9 322.8 27.84L265.4 80H336C397.9 80 448 130.1 448 192V353.6C484.5 361 512 393.3 512 432C512 476.2 476.2 512 432 512C387.8 512 352 476.2 352 432C352 393.3 379.5 361 416 353.6V192C416 147.8 380.2 112 336 112H265.4L322.8 164.2C329.3 170.1 329.8 180.2 323.8 186.8C317.9 193.3 307.8 193.8 301.2 187.8L213.2 107.8C209.9 104.8 208 100.5 208 96C208 91.49 209.9 87.19 213.2 84.16L301.2 4.161C307.8-1.783 317.9-1.301 323.8 5.237V5.237zM432 384C405.5 384 384 405.5 384 432C384 458.5 405.5 480 432 480C458.5 480 480 458.5 480 432C480 405.5 458.5 384 432 384zM96 353.6C132.5 361 160 393.3 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 393.3 27.48 361 64 353.6V158.4C27.48 150.1 0 118.7 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80C160 118.7 132.5 150.1 96 158.4V353.6zM80 32C53.49 32 32 53.49 32 80C32 106.5 53.49 128 80 128C106.5 128 128 106.5 128 80C128 53.49 106.5 32 80 32zM80 384C53.49 384 32 405.5 32 432C32 458.5 53.49 480 80 480C106.5 480 128 458.5 128 432C128 405.5 106.5 384 80 384z"/>
</>],
['regular',<>
	<path d="M305.8 2.076C314.4 5.932 320 14.52 320 24V72H336C402.3 72 456 125.7 456 192V355.7C488.5 365.9 512 396.2 512 432C512 476.2 476.2 512 432 512C387.8 512 352 476.2 352 432C352 396.2 375.5 365.9 408 355.7V192C408 152.2 375.8 120 336 120H320V168C320 177.5 314.4 186.1 305.8 189.9C297.1 193.8 286.1 192.2 279.9 185.8L199.9 113.8C194.9 109.3 192 102.8 192 96C192 89.2 194.9 82.71 199.9 78.16L279.9 6.161C286.1-.1791 297.1-1.779 305.8 2.077V2.076zM432 464C449.7 464 464 449.7 464 432C464 414.3 449.7 400 432 400C414.3 400 400 414.3 400 432C400 449.7 414.3 464 432 464zM104 355.7C136.5 365.9 160 396.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 396.2 23.54 365.9 56 355.7V156.3C23.54 146.1 0 115.8 0 80C0 35.82 35.82 .0001 80 .0001C124.2 .0001 160 35.82 160 80C160 115.8 136.5 146.1 104 156.3V355.7zM80 48C62.33 48 48 62.33 48 80C48 97.67 62.33 112 80 112C97.67 112 112 97.67 112 80C112 62.33 97.67 48 80 48zM80 400C62.33 400 48 414.3 48 432C48 449.7 62.33 464 80 464C97.67 464 112 449.7 112 432C112 414.3 97.67 400 80 400z"/>
</>],
['solid',<>
	<path d="M305.8 2.076C314.4 5.932 320 14.52 320 24V64H336C406.7 64 464 121.3 464 192V358.7C492.3 371 512 399.2 512 432C512 476.2 476.2 512 432 512C387.8 512 352 476.2 352 432C352 399.2 371.7 371 400 358.7V192C400 156.7 371.3 128 336 128H320V168C320 177.5 314.4 186.1 305.8 189.9C297.1 193.8 286.1 192.2 279.9 185.8L199.9 113.8C194.9 109.3 192 102.8 192 96C192 89.2 194.9 82.71 199.9 78.16L279.9 6.161C286.1-.1791 297.1-1.779 305.8 2.077V2.076zM432 456C445.3 456 456 445.3 456 432C456 418.7 445.3 408 432 408C418.7 408 408 418.7 408 432C408 445.3 418.7 456 432 456zM112 358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 .0004 80 .0004C124.2 .0004 160 35.82 160 80C160 112.8 140.3 140.1 112 153.3V358.7zM80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56zM80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408z"/>
</>],
['thin',<>
	<path d="M88 384.5C119.6 388.4 144 415.4 144 448C144 483.3 115.3 512 80 512C44.65 512 16 483.3 16 448C16 415.4 40.43 388.4 72 384.5V127.5C40.43 123.6 16 96.64 16 64C16 28.65 44.65 0 80 0C115.3 0 144 28.65 144 64C144 96.64 119.6 123.6 88 127.5V384.5zM80 16C53.49 16 32 37.49 32 64C32 90.51 53.49 112 80 112C106.5 112 128 90.51 128 64C128 37.49 106.5 16 80 16zM80 400C53.49 400 32 421.5 32 448C32 474.5 53.49 496 80 496C106.5 496 128 474.5 128 448C128 421.5 106.5 400 80 400zM368 448C368 415.4 392.4 388.4 424 384.5V192C424 143.4 384.6 104 336 104H244.7L317.4 170.1C320.6 173.1 320.9 178.1 317.9 181.4C314.9 184.7 309.9 184.9 306.6 181.9L218.6 101.9C216.1 100.4 216 98.25 216 96C216 93.75 216.1 91.6 218.6 90.08L306.6 10.08C309.9 7.109 314.9 7.35 317.9 10.62C320.9 13.89 320.6 18.95 317.4 21.92L244.7 88H336C393.4 88 440 134.6 440 192V384.5C471.6 388.4 496 415.4 496 448C496 483.3 467.3 512 432 512C396.7 512 368 483.3 368 448zM432 496C458.5 496 480 474.5 480 448C480 421.5 458.5 400 432 400C405.5 400 384 421.5 384 448C384 474.5 405.5 496 432 496z"/>
</>],

]);

const CodePullRequest: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CodePullRequest.displayName = "CodePullRequest";

export default CodePullRequest;
