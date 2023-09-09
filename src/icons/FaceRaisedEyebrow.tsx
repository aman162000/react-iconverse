
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M299.3 171.3C293.1 177.6 282.9 177.6 276.7 171.3C270.4 165.1 270.4 154.9 276.7 148.7L306.2 119.2C331.2 94.2 372.8 98.32 392.4 127.7L397.3 135.1C402.2 142.5 400.2 152.4 392.9 157.3C385.5 162.2 375.6 160.2 370.7 152.9L365.8 145.5C357.4 132.9 339.5 131.1 328.8 141.8L299.3 171.3zM192 144C200.8 144 208 151.2 208 160C208 168.8 200.8 176 192 176H128C119.2 176 112 168.8 112 160C112 151.2 119.2 144 128 144H192zM208.4 240C208.4 257.7 194 272 176.4 272C158.7 272 144.4 257.7 144.4 240C144.4 222.3 158.7 208 176.4 208C194 208 208.4 222.3 208.4 240zM368.4 240C368.4 257.7 354 272 336.4 272C318.7 272 304.4 257.7 304.4 240C304.4 222.3 318.7 208 336.4 208C354 208 368.4 222.3 368.4 240z"/><path className="fa-secondary" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176.4 208C158.7 208 144.4 222.3 144.4 240C144.4 257.7 158.7 272 176.4 272C194 272 208.4 257.7 208.4 240C208.4 222.3 194 208 176.4 208zM336.4 272C354 272 368.4 257.7 368.4 240C368.4 222.3 354 208 336.4 208C318.7 208 304.4 222.3 304.4 240C304.4 257.7 318.7 272 336.4 272zM160 368H352C360.8 368 368 360.8 368 352C368 343.2 360.8 336 352 336H160C151.2 336 144 343.2 144 352C144 360.8 151.2 368 160 368zM328.8 141.8C339.5 131.1 357.4 132.9 365.8 145.5L370.7 152.9C375.6 160.2 385.5 162.2 392.9 157.3C400.2 152.4 402.2 142.5 397.3 135.1L392.4 127.7C372.8 98.32 331.2 94.2 306.2 119.2L276.7 148.7C270.4 154.9 270.4 165.1 276.7 171.3C282.9 177.6 293.1 177.6 299.3 171.3L328.8 141.8zM128 144C119.2 144 112 151.2 112 160C112 168.8 119.2 176 128 176H192C200.8 176 208 168.8 208 160C208 151.2 200.8 144 192 144H128z"/>
</>],
['light',<>
	<path d="M200.4 240C200.4 253.3 189.6 264 176.4 264C163.1 264 152.4 253.3 152.4 240C152.4 226.7 163.1 216 176.4 216C189.6 216 200.4 226.7 200.4 240zM312.4 240C312.4 226.7 323.1 216 336.4 216C349.6 216 360.4 226.7 360.4 240C360.4 253.3 349.6 264 336.4 264C323.1 264 312.4 253.3 312.4 240zM365.8 145.5C357.4 132.9 339.5 131.1 328.8 141.8L299.3 171.3C293.1 177.6 282.9 177.6 276.7 171.3C270.4 165.1 270.4 154.9 276.7 148.7L306.2 119.2C331.2 94.2 372.8 98.32 392.4 127.7L397.3 135.1C402.2 142.5 400.2 152.4 392.9 157.3C385.5 162.2 375.6 160.2 370.7 152.9L365.8 145.5zM112 160C112 151.2 119.2 144 128 144H192C200.8 144 208 151.2 208 160C208 168.8 200.8 176 192 176H128C119.2 176 112 168.8 112 160zM336 336C344.8 336 352 343.2 352 352C352 360.8 344.8 368 336 368H176C167.2 368 160 360.8 160 352C160 343.2 167.2 336 176 336H336zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480z"/>
</>],
['regular',<>
	<path d="M208.4 240C208.4 257.7 194 272 176.4 272C158.7 272 144.4 257.7 144.4 240C144.4 222.3 158.7 208 176.4 208C194 208 208.4 222.3 208.4 240zM304.4 240C304.4 222.3 318.7 208 336.4 208C354 208 368.4 222.3 368.4 240C368.4 257.7 354 272 336.4 272C318.7 272 304.4 257.7 304.4 240zM160 352C160 338.7 170.7 328 184 328H328C341.3 328 352 338.7 352 352C352 365.3 341.3 376 328 376H184C170.7 376 160 365.3 160 352zM299.3 171.3C293.1 177.6 282.9 177.6 276.7 171.3C270.4 165.1 270.4 154.9 276.7 148.7L306.2 119.2C331.2 94.2 372.8 98.32 392.4 127.7L397.3 135.1C402.2 142.5 400.2 152.4 392.9 157.3C385.5 162.2 375.6 160.2 370.7 152.9L365.8 145.5C357.4 132.9 339.5 131.1 328.8 141.8L299.3 171.3zM192 144C200.8 144 208 151.2 208 160C208 168.8 200.8 176 192 176H128C119.2 176 112 168.8 112 160C112 151.2 119.2 144 128 144H192zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176.4 208C158.7 208 144.4 222.3 144.4 240C144.4 257.7 158.7 272 176.4 272C194 272 208.4 257.7 208.4 240C208.4 222.3 194 208 176.4 208zM336.4 272C354 272 368.4 257.7 368.4 240C368.4 222.3 354 208 336.4 208C318.7 208 304.4 222.3 304.4 240C304.4 257.7 318.7 272 336.4 272zM160 368H352C360.8 368 368 360.8 368 352C368 343.2 360.8 336 352 336H160C151.2 336 144 343.2 144 352C144 360.8 151.2 368 160 368zM328.8 141.8C339.5 131.1 357.4 132.9 365.8 145.5L370.7 152.9C375.6 160.2 385.5 162.2 392.9 157.3C400.2 152.4 402.2 142.5 397.3 135.1L392.4 127.7C372.8 98.32 331.2 94.2 306.2 119.2L276.7 148.7C270.4 154.9 270.4 165.1 276.7 171.3C282.9 177.6 293.1 177.6 299.3 171.3L328.8 141.8zM128 144C119.2 144 112 151.2 112 160C112 168.8 119.2 176 128 176H192C200.8 176 208 168.8 208 160C208 151.2 200.8 144 192 144H128z"/>
</>],
['thin',<>
	<path d="M192.4 240C192.4 248.8 185.2 256 176.4 256C167.5 256 160.4 248.8 160.4 240C160.4 231.2 167.5 224 176.4 224C185.2 224 192.4 231.2 192.4 240zM320.4 240C320.4 231.2 327.5 224 336.4 224C345.2 224 352.4 231.2 352.4 240C352.4 248.8 345.2 256 336.4 256C327.5 256 320.4 248.8 320.4 240zM372.4 141C361.2 124.2 337.4 121.9 323.2 136.2L293.7 165.7C290.5 168.8 285.5 168.8 282.3 165.7C279.2 162.5 279.2 157.5 282.3 154.3L311.8 124.8C333.3 103.4 368.9 106.1 385.7 132.2L390.7 139.6C393.1 143.2 392.1 148.2 388.4 150.7C384.8 153.1 379.8 152.1 377.3 148.4L372.4 141zM120 160C120 155.6 123.6 152 128 152H192C196.4 152 200 155.6 200 160C200 164.4 196.4 168 192 168H128C123.6 168 120 164.4 120 160zM344 344C348.4 344 352 347.6 352 352C352 356.4 348.4 360 344 360H168C163.6 360 160 356.4 160 352C160 347.6 163.6 344 168 344H344zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496z"/>
</>],

]);

const FaceRaisedEyebrow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceRaisedEyebrow.displayName = "FaceRaisedEyebrow";

export default FaceRaisedEyebrow;