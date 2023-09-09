
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M104 216C104 202.7 114.7 192 128 192C141.3 192 152 202.7 152 216V280C152 293.3 141.3 304 128 304C114.7 304 104 293.3 104 280V216zM184 120C184 106.7 194.7 96 208 96C221.3 96 232 106.7 232 120V280C232 293.3 221.3 304 208 304C194.7 304 184 293.3 184 280V120zM264 184C264 170.7 274.7 160 288 160C301.3 160 312 170.7 312 184V280C312 293.3 301.3 304 288 304C274.7 304 264 293.3 264 280V184zM457.4 502.6L330.7 375.1C348 363.3 363.3 348 375.1 330.7L502.6 457.4C515.1 469.9 515.1 490.1 502.6 502.6C490.1 515.1 469.9 515.1 457.4 502.6z"/><path className="fa-secondary" d="M0 208C0 93.12 93.12 0 208 0C322.9 0 416 93.12 416 208C416 322.9 322.9 416 208 416C93.12 416 0 322.9 0 208zM104 280C104 293.3 114.7 304 128 304C141.3 304 152 293.3 152 280V216C152 202.7 141.3 192 128 192C114.7 192 104 202.7 104 216V280zM184 280C184 293.3 194.7 304 208 304C221.3 304 232 293.3 232 280V120C232 106.7 221.3 96 208 96C194.7 96 184 106.7 184 120V280zM264 280C264 293.3 274.7 304 288 304C301.3 304 312 293.3 312 280V184C312 170.7 301.3 160 288 160C274.7 160 264 170.7 264 184V280z"/>
</>],
['light',<>
	<path d="M128 224C128 215.2 135.2 208 144 208C152.8 208 160 215.2 160 224V288C160 296.8 152.8 304 144 304C135.2 304 128 296.8 128 288V224zM192 128C192 119.2 199.2 112 208 112C216.8 112 224 119.2 224 128V288C224 296.8 216.8 304 208 304C199.2 304 192 296.8 192 288V128zM256 192C256 183.2 263.2 176 272 176C280.8 176 288 183.2 288 192V288C288 296.8 280.8 304 272 304C263.2 304 256 296.8 256 288V192zM0 208C0 93.12 93.12 0 208 0C322.9 0 416 93.12 416 208C416 259.7 397.2 306.1 365.1 343.3L507.3 484.7C513.6 490.9 513.6 501.1 507.3 507.3C501.1 513.6 490.9 513.6 484.7 507.3L343.3 365.1C306.1 397.2 259.7 416 208 416C93.12 416 0 322.9 0 208zM208 384C305.2 384 384 305.2 384 208C384 110.8 305.2 32 208 32C110.8 32 32 110.8 32 208C32 305.2 110.8 384 208 384z"/>
</>],
['regular',<>
	<path d="M104 216C104 202.7 114.7 192 128 192C141.3 192 152 202.7 152 216V280C152 293.3 141.3 304 128 304C114.7 304 104 293.3 104 280V216zM184 120C184 106.7 194.7 96 208 96C221.3 96 232 106.7 232 120V280C232 293.3 221.3 304 208 304C194.7 304 184 293.3 184 280V120zM264 184C264 170.7 274.7 160 288 160C301.3 160 312 170.7 312 184V280C312 293.3 301.3 304 288 304C274.7 304 264 293.3 264 280V184zM0 208C0 93.12 93.12 0 208 0C322.9 0 416 93.12 416 208C416 256.8 399.2 301.7 371.1 337.1L504.1 471C514.3 480.4 514.3 495.6 504.1 504.1C495.6 514.3 480.4 514.3 471 504.1L337.1 371.1C301.7 399.2 256.8 416 208 416C93.12 416 0 322.9 0 208V208zM208 368C296.4 368 368 296.4 368 208C368 119.6 296.4 48 208 48C119.6 48 48 119.6 48 208C48 296.4 119.6 368 208 368z"/>
</>],
['solid',<>
	<path d="M416 208C416 253.9 401.1 296.3 375.1 330.7L502.6 457.4C515.1 469.9 515.1 490.1 502.6 502.6C490.1 515.1 469.9 515.1 457.4 502.6L330.7 375.1C296.3 401.1 253.9 416 208 416C93.12 416 0 322.9 0 208C0 93.12 93.12 0 208 0C322.9 0 416 93.12 416 208zM104 280C104 293.3 114.7 304 128 304C141.3 304 152 293.3 152 280V216C152 202.7 141.3 192 128 192C114.7 192 104 202.7 104 216V280zM184 280C184 293.3 194.7 304 208 304C221.3 304 232 293.3 232 280V120C232 106.7 221.3 96 208 96C194.7 96 184 106.7 184 120V280zM264 280C264 293.3 274.7 304 288 304C301.3 304 312 293.3 312 280V184C312 170.7 301.3 160 288 160C274.7 160 264 170.7 264 184V280z"/>
</>],
['thin',<>
	<path d="M144 224V288C144 305.7 129.7 320 112 320C94.33 320 80 305.7 80 288V224C80 206.3 94.33 192 112 192C129.7 192 144 206.3 144 224zM112 208C103.2 208 96 215.2 96 224V288C96 296.8 103.2 304 112 304C120.8 304 128 296.8 128 288V224C128 215.2 120.8 208 112 208zM240 128V288C240 305.7 225.7 320 208 320C190.3 320 176 305.7 176 288V128C176 110.3 190.3 96 208 96C225.7 96 240 110.3 240 128zM208 112C199.2 112 192 119.2 192 128V288C192 296.8 199.2 304 208 304C216.8 304 224 296.8 224 288V128C224 119.2 216.8 112 208 112zM336 192V288C336 305.7 321.7 320 304 320C286.3 320 272 305.7 272 288V192C272 174.3 286.3 160 304 160C321.7 160 336 174.3 336 192zM304 176C295.2 176 288 183.2 288 192V288C288 296.8 295.2 304 304 304C312.8 304 320 296.8 320 288V192C320 183.2 312.8 176 304 176zM0 208C0 93.12 93.12 0 208 0C322.9 0 416 93.12 416 208C416 262.6 394.1 312.2 360.6 349.3L509.7 498.3C512.8 501.5 512.8 506.5 509.7 509.7C506.5 512.8 501.5 512.8 498.3 509.7L349.3 360.6C312.2 394.1 262.6 416 208 416C93.12 416 0 322.9 0 208V208zM208 400C314 400 400 314 400 208C400 101.1 314 16 208 16C101.1 16 16 101.1 16 208C16 314 101.1 400 208 400z"/>
</>],

]);

const MagnifyingGlassChart: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MagnifyingGlassChart.displayName = "MagnifyingGlassChart";

export default MagnifyingGlassChart;