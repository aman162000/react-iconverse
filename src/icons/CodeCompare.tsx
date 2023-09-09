
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M432 160C387.8 160 352 124.2 352 80C352 35.82 387.8 0 432 0C476.2 0 512 35.82 512 80C512 124.2 476.2 160 432 160zM456 80C456 66.75 445.3 56 432 56C418.7 56 408 66.75 408 80C408 93.25 418.7 104 432 104C445.3 104 456 93.25 456 80zM80 352C124.2 352 160 387.8 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 387.8 35.82 352 80 352zM56 432C56 445.3 66.75 456 80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432z"/><path className="fa-secondary" d="M232.1 6.162L312.1 78.16C317.1 82.71 320 89.2 320 96C320 102.8 317.1 109.3 312.1 113.8L232.1 185.8C225 192.2 214.9 193.8 206.2 189.9C197.6 186.1 192 177.5 192 168V128H176C140.7 128 112 156.7 112 192V358.7C102.2 354.4 91.38 352 80 352C68.62 352 57.8 354.4 48 358.7V192C48 121.3 105.3 64 176 64H192V24C192 14.52 197.6 5.932 206.2 2.076C214.9-1.78 225-.1789 232.1 6.161V6.162zM320 488C320 497.5 314.4 506.1 305.8 509.9C297.1 513.8 286.1 512.2 279.9 505.8L199.9 433.8C194.9 429.3 192 422.8 192 416C192 409.2 194.9 402.7 199.9 398.2L279.9 326.2C286.1 319.8 297.1 318.2 305.8 322.1C314.4 325.9 320 334.5 320 344V384H336C371.3 384 400 355.3 400 320V153.3C409.8 157.6 420.6 160 432 160C443.4 160 454.2 157.6 464 153.3V320C464 390.7 406.7 448 336 448H320V488z"/>
</>],
['light',<>
	<path d="M322.8 484.2C329.3 490.1 329.8 500.2 323.8 506.8C317.9 513.3 307.8 513.8 301.2 507.8L213.2 427.8C209.9 424.8 208 420.5 208 416C208 411.5 209.9 407.2 213.2 404.2L301.2 324.2C307.8 318.2 317.9 318.7 323.8 325.2C329.8 331.8 329.3 341.9 322.8 347.8L265.4 400H336C380.2 400 416 364.2 416 320V158.4C379.5 150.1 352 118.7 352 80C352 35.82 387.8 0 432 0C476.2 0 512 35.82 512 80C512 118.7 484.5 150.1 448 158.4V320C448 381.9 397.9 432 336 432H265.4L322.8 484.2zM384 80C384 106.5 405.5 128 432 128C458.5 128 480 106.5 480 80C480 53.49 458.5 32 432 32C405.5 32 384 53.49 384 80zM189.2 27.84C182.7 21.9 182.2 11.78 188.2 5.237C194.1-1.301 204.2-1.783 210.8 4.161L298.8 84.16C302.1 87.19 304 91.49 304 96C304 100.5 302.1 104.8 298.8 107.8L210.8 187.8C204.2 193.8 194.1 193.3 188.2 186.8C182.2 180.2 182.7 170.1 189.2 164.2L246.6 112H176C131.8 112 96 147.8 96 192V353.6C132.5 361 160 393.3 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 393.3 27.48 361 64 353.6V192C64 130.1 114.1 80 176 80H246.6L189.2 27.84zM128 432C128 405.5 106.5 384 80 384C53.49 384 32 405.5 32 432C32 458.5 53.49 480 80 480C106.5 480 128 458.5 128 432z"/>
</>],
['regular',<>
	<path d="M320 488C320 497.5 314.4 506.1 305.8 509.9C297.1 513.8 286.1 512.2 279.9 505.8L199.9 433.8C194.9 429.3 192 422.8 192 416C192 409.2 194.9 402.7 199.9 398.2L279.9 326.2C286.1 319.8 297.1 318.2 305.8 322.1C314.4 325.9 320 334.5 320 344V392H336C375.8 392 408 359.8 408 320V156.3C375.5 146.1 352 115.8 352 80C352 35.82 387.8 0 432 0C476.2 0 512 35.82 512 80C512 115.8 488.5 146.1 456 156.3V320C456 386.3 402.3 440 336 440H320V488zM464 79.1C464 62.33 449.7 47.1 432 47.1C414.3 47.1 400 62.33 400 79.1C400 97.67 414.3 111.1 432 111.1C449.7 111.1 464 97.67 464 79.1zM192 24C192 14.52 197.6 5.932 206.2 2.076C214.9-1.78 225-.1789 232.1 6.161L312.1 78.16C317.1 82.71 320 89.2 320 96C320 102.8 317.1 109.3 312.1 113.8L232.1 185.8C225 192.2 214.9 193.8 206.2 189.9C197.6 186.1 192 177.5 192 168V120H176C136.2 120 104 152.2 104 192V355.7C136.5 365.9 160 396.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 396.2 23.54 365.9 56 355.7V192C56 125.7 109.7 72 176 72H192V24zM48 432C48 449.7 62.33 464 80 464C97.67 464 112 449.7 112 432C112 414.3 97.67 400 80 400C62.33 400 48 414.3 48 432z"/>
</>],
['solid',<>
	<path d="M320 488C320 497.5 314.4 506.1 305.8 509.9C297.1 513.8 286.1 512.2 279.9 505.8L199.9 433.8C194.9 429.3 192 422.8 192 416C192 409.2 194.9 402.7 199.9 398.2L279.9 326.2C286.1 319.8 297.1 318.2 305.8 322.1C314.4 325.9 320 334.5 320 344V384H336C371.3 384 400 355.3 400 320V153.3C371.7 140.1 352 112.8 352 80C352 35.82 387.8 0 432 0C476.2 0 512 35.82 512 80C512 112.8 492.3 140.1 464 153.3V320C464 390.7 406.7 448 336 448H320V488zM456 79.1C456 66.74 445.3 55.1 432 55.1C418.7 55.1 408 66.74 408 79.1C408 93.25 418.7 103.1 432 103.1C445.3 103.1 456 93.25 456 79.1zM192 24C192 14.52 197.6 5.932 206.2 2.076C214.9-1.78 225-.1789 232.1 6.161L312.1 78.16C317.1 82.71 320 89.2 320 96C320 102.8 317.1 109.3 312.1 113.8L232.1 185.8C225 192.2 214.9 193.8 206.2 189.9C197.6 186.1 192 177.5 192 168V128H176C140.7 128 112 156.7 112 192V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V192C48 121.3 105.3 64 176 64H192V24zM56 432C56 445.3 66.75 456 80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432z"/>
</>],
['thin',<>
	<path d="M205.4 10.08L293.4 90.08C295 91.6 296 93.75 296 96C296 98.25 295 100.4 293.4 101.9L205.4 181.9C202.1 184.9 197.1 184.7 194.1 181.4C191.1 178.1 191.3 173.1 194.6 170.1L267.3 104H176C127.4 104 88 143.4 88 192V384.5C119.6 388.4 144 415.4 144 448C144 483.3 115.3 512 80 512C44.65 512 16 483.3 16 448C16 415.4 40.43 388.4 72 384.5V192C72 134.6 118.6 88 176 88H267.3L194.6 21.92C191.3 18.95 191.1 13.89 194.1 10.62C197.1 7.35 202.1 7.109 205.4 10.08V10.08zM127.1 448C127.1 421.5 106.5 400 79.1 400C53.49 400 31.1 421.5 31.1 448C31.1 474.5 53.49 496 79.1 496C106.5 496 127.1 474.5 127.1 448zM306.6 501.9L218.6 421.9C216.1 420.4 215.1 418.3 215.1 416C215.1 413.7 216.1 411.6 218.6 410.1L306.6 330.1C309.9 327.1 314.9 327.4 317.9 330.6C320.9 333.9 320.6 338.9 317.4 341.9L244.7 408H336C384.6 408 424 368.6 424 320V127.5C392.4 123.6 368 96.64 368 64C368 28.65 396.7 0 432 0C467.3 0 496 28.65 496 64C496 96.64 471.6 123.6 440 127.5V320C440 377.4 393.4 424 336 424H244.7L317.4 490.1C320.6 493.1 320.9 498.1 317.9 501.4C314.9 504.6 309.9 504.9 306.6 501.9V501.9zM384 64C384 90.51 405.5 112 432 112C458.5 112 480 90.51 480 64C480 37.49 458.5 16 432 16C405.5 16 384 37.49 384 64z"/>
</>],

]);

const CodeCompare: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CodeCompare.displayName = "CodeCompare";

export default CodeCompare;
