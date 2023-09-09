
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 0C209.7 0 224 14.33 224 32V128H96V32C96 14.33 110.3 0 128 0H192zM0 256C0 202.1 42.98 160 96 160H224C277 160 320 202.1 320 256V464C320 490.5 298.5 512 272 512H48C21.49 512 0 490.5 0 464V256zM160 256C115.8 256 80 291.8 80 336C80 380.2 115.8 416 160 416C204.2 416 240 380.2 240 336C240 291.8 204.2 256 160 256z"/><path className="fa-secondary" d="M384 48C384 49.36 383 50.97 381.8 51.58L352 64L339.6 93.78C338.1 95 337.4 96 336 96C334.6 96 333 95 332.4 93.78L320 64L290.2 51.58C288.1 50.97 288 49.36 288 48C288 46.62 288.1 45.03 290.2 44.42L320 32L332.4 2.219C333 1 334.6 0 336 0C337.4 0 338.1 1 339.6 2.219L352 32L381.8 44.42C383 45.03 384 46.62 384 48zM460.4 93.78L448 64L418.2 51.58C416.1 50.97 416 49.36 416 48C416 46.62 416.1 45.03 418.2 44.42L448 32L460.4 2.219C461 1 462.6 0 464 0C465.4 0 466.1 1 467.6 2.219L480 32L509.8 44.42C511 45.03 512 46.62 512 48C512 49.36 511 50.97 509.8 51.58L480 64L467.6 93.78C466.1 95 465.4 96 464 96C462.6 96 461 95 460.4 93.78zM467.6 194.2L480 224L509.8 236.4C511 237 512 238.6 512 240C512 241.4 511 242.1 509.8 243.6L480 256L467.6 285.8C466.1 287 465.4 288 464 288C462.6 288 461 287 460.4 285.8L448 256L418.2 243.6C416.1 242.1 416 241.4 416 240C416 238.6 416.1 237 418.2 236.4L448 224L460.4 194.2C461 193 462.6 192 464 192C465.4 192 466.1 193 467.6 194.2zM448 144C448 145.4 447 146.1 445.8 147.6L416 160L403.6 189.8C402.1 191 401.4 192 400 192C398.6 192 397 191 396.4 189.8L384 160L354.2 147.6C352.1 146.1 352 145.4 352 144C352 142.6 352.1 141 354.2 140.4L384 128L396.4 98.22C397 97 398.6 96 400 96C401.4 96 402.1 97 403.6 98.22L416 128L445.8 140.4C447 141 448 142.6 448 144zM80 336C80 291.8 115.8 256 160 256C204.2 256 240 291.8 240 336C240 380.2 204.2 416 160 416C115.8 416 80 380.2 80 336z"/>
</>],
['light',<>
	<path d="M80 320C80 275.8 115.8 240 160 240C204.2 240 240 275.8 240 320C240 364.2 204.2 400 160 400C115.8 400 80 364.2 80 320zM160 368C186.5 368 208 346.5 208 320C208 293.5 186.5 272 160 272C133.5 272 112 293.5 112 320C112 346.5 133.5 368 160 368zM96 128V32C96 14.33 110.3 0 128 0H192C209.7 0 224 14.33 224 32V128C277 128 320 170.1 320 224V448C320 483.3 291.3 512 256 512H64C28.65 512 0 483.3 0 448V224C0 170.1 42.98 128 96 128zM128 128H192V32H128V128zM224 160H96C60.65 160 32 188.7 32 224V448C32 465.7 46.33 480 64 480H256C273.7 480 288 465.7 288 448V224C288 188.7 259.3 160 224 160zM336 0C344.8 0 352 7.164 352 16V32H368C376.8 32 384 39.16 384 48C384 56.84 376.8 64 368 64H352V80C352 88.84 344.8 96 336 96C327.2 96 320 88.84 320 80V64H304C295.2 64 288 56.84 288 48C288 39.16 295.2 32 304 32H320V16C320 7.164 327.2 0 336 0zM480 32H496C504.8 32 512 39.16 512 48C512 56.84 504.8 64 496 64H480V80C480 88.84 472.8 96 464 96C455.2 96 448 88.84 448 80V64H432C423.2 64 416 56.84 416 48C416 39.16 423.2 32 432 32H448V16C448 7.164 455.2 0 464 0C472.8 0 480 7.164 480 16V32zM480 224H496C504.8 224 512 231.2 512 240C512 248.8 504.8 256 496 256H480V272C480 280.8 472.8 288 464 288C455.2 288 448 280.8 448 272V256H432C423.2 256 416 248.8 416 240C416 231.2 423.2 224 432 224H448V208C448 199.2 455.2 192 464 192C472.8 192 480 199.2 480 208V224zM416 128H432C440.8 128 448 135.2 448 144C448 152.8 440.8 160 432 160H416V176C416 184.8 408.8 192 400 192C391.2 192 384 184.8 384 176V160H368C359.2 160 352 152.8 352 144C352 135.2 359.2 128 368 128H384V112C384 103.2 391.2 96 400 96C408.8 96 416 103.2 416 112V128z"/>
</>],
['regular',<>
	<path d="M192 0C209.7 0 224 14.33 224 32V128H96V32C96 14.33 110.3 0 128 0H192zM96 336C96 300.7 124.7 272 160 272C195.3 272 224 300.7 224 336C224 371.3 195.3 400 160 400C124.7 400 96 371.3 96 336zM0 256C0 202.1 42.98 160 96 160H224C277 160 320 202.1 320 256V448C320 483.3 291.3 512 256 512H64C28.65 512 0 483.3 0 448V256zM48 256V448C48 456.8 55.16 464 64 464H256C264.8 464 272 456.8 272 448V256C272 229.5 250.5 208 224 208H96C69.49 208 48 229.5 48 256zM352 64L339.6 93.78C338.1 95 337.4 96 336 96C334.6 96 333 95 332.4 93.78L320 64L290.2 51.58C288.1 50.97 288 49.36 288 48C288 46.62 288.1 45.03 290.2 44.42L320 32L332.4 2.219C333 1 334.6 0 336 0C337.4 0 338.1 1 339.6 2.219L352 32L381.8 44.42C383 45.03 384 46.62 384 48C384 49.36 383 50.97 381.8 51.58L352 64zM418.2 51.58C416.1 50.97 416 49.36 416 48C416 46.62 416.1 45.03 418.2 44.42L448 32L460.4 2.219C461 1 462.6 0 464 0C465.4 0 466.1 1 467.6 2.219L480 32L509.8 44.42C511 45.03 512 46.62 512 48C512 49.36 511 50.97 509.8 51.58L480 64L467.6 93.78C466.1 95 465.4 96 464 96C462.6 96 461 95 460.4 93.78L448 64L418.2 51.58zM509.8 236.4C511 237 512 238.6 512 240C512 241.4 511 242.1 509.8 243.6L480 256L467.6 285.8C466.1 287 465.4 288 464 288C462.6 288 461 287 460.4 285.8L448 256L418.2 243.6C416.1 242.1 416 241.4 416 240C416 238.6 416.1 237 418.2 236.4L448 224L460.4 194.2C461 193 462.6 192 464 192C465.4 192 466.1 193 467.6 194.2L480 224L509.8 236.4zM416 160L403.6 189.8C402.1 191 401.4 192 400 192C398.6 192 397 191 396.4 189.8L384 160L354.2 147.6C352.1 146.1 352 145.4 352 144C352 142.6 352.1 141 354.2 140.4L384 128L396.4 98.22C397 97 398.6 96 400 96C401.4 96 402.1 97 403.6 98.22L416 128L445.8 140.4C447 141 448 142.6 448 144C448 145.4 447 146.1 445.8 147.6L416 160z"/>
</>],
['solid',<>
	<path d="M96 32C96 14.33 110.3 0 128 0H192C209.7 0 224 14.33 224 32V128H96V32zM224 160C277 160 320 202.1 320 256V464C320 490.5 298.5 512 272 512H48C21.49 512 0 490.5 0 464V256C0 202.1 42.98 160 96 160H224zM160 416C204.2 416 240 380.2 240 336C240 291.8 204.2 256 160 256C115.8 256 80 291.8 80 336C80 380.2 115.8 416 160 416zM384 48C384 49.36 383 50.97 381.8 51.58L352 64L339.6 93.78C338.1 95 337.4 96 336 96C334.6 96 333 95 332.4 93.78L320 64L290.2 51.58C288.1 50.97 288 49.36 288 48C288 46.62 288.1 45.03 290.2 44.42L320 32L332.4 2.219C333 1 334.6 0 336 0C337.4 0 338.1 1 339.6 2.219L352 32L381.8 44.42C383 45.03 384 46.62 384 48zM460.4 93.78L448 64L418.2 51.58C416.1 50.97 416 49.36 416 48C416 46.62 416.1 45.03 418.2 44.42L448 32L460.4 2.219C461 1 462.6 0 464 0C465.4 0 466.1 1 467.6 2.219L480 32L509.8 44.42C511 45.03 512 46.62 512 48C512 49.36 511 50.97 509.8 51.58L480 64L467.6 93.78C466.1 95 465.4 96 464 96C462.6 96 461 95 460.4 93.78zM467.6 194.2L480 224L509.8 236.4C511 237 512 238.6 512 240C512 241.4 511 242.1 509.8 243.6L480 256L467.6 285.8C466.1 287 465.4 288 464 288C462.6 288 461 287 460.4 285.8L448 256L418.2 243.6C416.1 242.1 416 241.4 416 240C416 238.6 416.1 237 418.2 236.4L448 224L460.4 194.2C461 193 462.6 192 464 192C465.4 192 466.1 193 467.6 194.2zM448 144C448 145.4 447 146.1 445.8 147.6L416 160L403.6 189.8C402.1 191 401.4 192 400 192C398.6 192 397 191 396.4 189.8L384 160L354.2 147.6C352.1 146.1 352 145.4 352 144C352 142.6 352.1 141 354.2 140.4L384 128L396.4 98.22C397 97 398.6 96 400 96C401.4 96 402.1 97 403.6 98.22L416 128L445.8 140.4C447 141 448 142.6 448 144z"/>
</>],
['thin',<>
	<path d="M184 0C206.1 0 224 17.91 224 40V120C224 124.4 220.4 128 216 128C211.6 128 208 124.4 208 120V40C208 26.75 197.3 16 184 16H136C122.7 16 112 26.75 112 40V120C112 124.4 108.4 128 104 128C99.58 128 96 124.4 96 120V40C96 17.91 113.9 0 136 0H184zM72 336C72 287.4 111.4 248 160 248C208.6 248 248 287.4 248 336C248 384.6 208.6 424 160 424C111.4 424 72 384.6 72 336zM160 264C120.2 264 88 296.2 88 336C88 375.8 120.2 408 160 408C199.8 408 232 375.8 232 336C232 296.2 199.8 264 160 264zM0 256C0 202.1 42.98 160 96 160H224C277 160 320 202.1 320 256V448C320 483.3 291.3 512 256 512H64C28.65 512 0 483.3 0 448V256zM16 256V448C16 474.5 37.49 496 64 496H256C282.5 496 304 474.5 304 448V256C304 211.8 268.2 176 224 176H96C51.82 176 16 211.8 16 256zM336 0C340.4 0 344 3.582 344 8V40H376C380.4 40 384 43.58 384 48C384 52.42 380.4 56 376 56H344V88C344 92.42 340.4 96 336 96C331.6 96 328 92.42 328 88V56H296C291.6 56 288 52.42 288 48C288 43.58 291.6 40 296 40H328V8C328 3.582 331.6 0 336 0zM464 0C468.4 0 472 3.582 472 8V88C472 92.42 468.4 96 464 96C459.6 96 456 92.42 456 88V8C456 3.582 459.6 0 464 0zM464 192C468.4 192 472 195.6 472 200V280C472 284.4 468.4 288 464 288C459.6 288 456 284.4 456 280V200C456 195.6 459.6 192 464 192zM400 96C404.4 96 408 99.58 408 104V184C408 188.4 404.4 192 400 192C395.6 192 392 188.4 392 184V104C392 99.58 395.6 96 400 96zM504 232H424C419.6 232 416 235.6 416 240C416 244.4 419.6 248 424 248H504C508.4 248 512 244.4 512 240C512 235.6 508.4 232 504 232zM504 40H424C419.6 40 416 43.58 416 48C416 52.42 419.6 56 424 56H504C508.4 56 512 52.42 512 48C512 43.58 508.4 40 504 40zM440 136H360C355.6 136 352 139.6 352 144C352 148.4 355.6 152 360 152H440C444.4 152 448 148.4 448 144C448 139.6 444.4 136 440 136z"/>
</>],

]);

const SprayCanSparkles: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SprayCanSparkles.displayName = "SprayCanSparkles";

export default SprayCanSparkles;