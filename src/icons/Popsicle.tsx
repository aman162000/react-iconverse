
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 512C151.5 512 143.4 508.6 137.4 502.6C131.4 496.6 128 488.5 128 480V192C128 183.5 131.4 175.4 137.4 169.4C143.4 163.4 151.5 160 160 160C168.5 160 176.6 163.4 182.6 169.4C188.6 175.4 192 183.5 192 192V480C192 488.5 188.6 496.6 182.6 502.6C176.6 508.6 168.5 512 160 512z"/><path className="fa-secondary" d="M320 160V352C320 360.5 316.6 368.6 310.6 374.6C304.6 380.6 296.5 384 288 384H192V192C192 183.5 188.6 175.4 182.6 169.4C176.6 163.4 168.5 160 160 160C151.5 160 143.4 163.4 137.4 169.4C131.4 175.4 128 183.5 128 192V384H32C23.51 384 15.37 380.6 9.372 374.6C3.371 368.6 0 360.5 0 352V160C0 117.6 16.86 76.87 46.86 46.86C76.87 16.86 117.6 0 160 0C202.4 0 243.1 16.86 273.1 46.86C303.1 76.87 320 117.6 320 160z"/>
</>],
['light',<>
	<path d="M273.1 46.86C303.1 76.87 320 117.6 320 160V352C320 360.5 316.6 368.6 310.6 374.6C304.6 380.6 296.5 384 288 384H176V496C176 500.2 174.3 504.3 171.3 507.3C168.3 510.3 164.2 512 160 512C155.8 512 151.7 510.3 148.7 507.3C145.7 504.3 144 500.2 144 496V384H32C23.51 384 15.37 380.6 9.372 374.6C3.371 368.6 0 360.5 0 352V160C0 117.6 16.86 76.87 46.86 46.86C76.87 16.86 117.6 0 160 0C202.4 0 243.1 16.86 273.1 46.86zM288 160C288 126.1 274.5 93.5 250.5 69.49C226.5 45.49 193.9 32 160 32C126.1 32 93.5 45.49 69.49 69.49C45.49 93.5 32 126.1 32 160V352H144V192C144 187.8 145.7 183.7 148.7 180.7C151.7 177.7 155.8 176 160 176C164.2 176 168.3 177.7 171.3 180.7C174.3 183.7 176 187.8 176 192V352H288V160z"/>
</>],
['regular',<>
	<path d="M273.1 46.86C303.1 76.87 320 117.6 320 160V352C320 360.5 316.6 368.6 310.6 374.6C304.6 380.6 296.5 384 288 384H184V488C184 494.4 181.5 500.5 176.1 504.1C172.5 509.5 166.4 512 160 512C153.6 512 147.5 509.5 143 504.1C138.5 500.5 136 494.4 136 488V384H32C23.51 384 15.37 380.6 9.372 374.6C3.371 368.6 0 360.5 0 352V160C0 117.6 16.86 76.87 46.86 46.86C76.87 16.86 117.6 0 160 0C202.4 0 243.1 16.86 273.1 46.86zM272 160C272 130.3 260.2 101.8 239.2 80.8C218.2 59.8 189.7 48 160 48C130.3 48 101.8 59.8 80.8 80.8C59.8 101.8 48 130.3 48 160V336H136V184C136 177.6 138.5 171.5 143 167C147.5 162.5 153.6 160 160 160C166.4 160 172.5 162.5 176.1 167C181.5 171.5 184 177.6 184 184V336H272V160z"/>
</>],
['solid',<>
	<path d="M273.1 46.86C303.1 76.87 320 117.6 320 160V352C320 360.5 316.6 368.6 310.6 374.6C304.6 380.6 296.5 384 288 384H32C23.51 384 15.37 380.6 9.372 374.6C3.371 368.6 0 360.5 0 352V160C0 117.6 16.86 76.87 46.86 46.86C76.87 16.86 117.6 0 160 0C202.4 0 243.1 16.86 273.1 46.86zM128 416H192V480C192 488.5 188.6 496.6 182.6 502.6C176.6 508.6 168.5 512 160 512C151.5 512 143.4 508.6 137.4 502.6C131.4 496.6 128 488.5 128 480V416z"/>
</>],
['thin',<>
	<path d="M273.1 46.86C303.1 76.87 320 117.6 320 160V352C320 360.5 316.6 368.6 310.6 374.6C304.6 380.6 296.5 384 288 384H192V480C192 488.5 188.6 496.6 182.6 502.6C176.6 508.6 168.5 512 160 512C151.5 512 143.4 508.6 137.4 502.6C131.4 496.6 128 488.5 128 480V384H32C23.51 384 15.37 380.6 9.372 374.6C3.371 368.6 0 360.5 0 352V160C0 117.6 16.86 76.87 46.86 46.86C76.87 16.86 117.6 0 160 0C202.4 0 243.1 16.86 273.1 46.86zM176 192C176 187.8 174.3 183.7 171.3 180.7C168.3 177.7 164.2 176 160 176C155.8 176 151.7 177.7 148.7 180.7C145.7 183.7 144 187.8 144 192V480C144 484.2 145.7 488.3 148.7 491.3C151.7 494.3 155.8 496 160 496C164.2 496 168.3 494.3 171.3 491.3C174.3 488.3 176 484.2 176 480V192zM304 160C304 121.8 288.8 85.18 261.8 58.18C234.8 31.17 198.2 16 160 16C121.8 16 85.18 31.17 58.18 58.18C31.17 85.18 16 121.8 16 160V352C16 356.2 17.69 360.3 20.69 363.3C23.69 366.3 27.76 368 32 368H128V192C128 183.5 131.4 175.4 137.4 169.4C143.4 163.4 151.5 160 160 160C168.5 160 176.6 163.4 182.6 169.4C188.6 175.4 192 183.5 192 192V368H288C292.2 368 296.3 366.3 299.3 363.3C302.3 360.3 304 356.2 304 352V160z"/>
</>],

]);

const Popsicle: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Popsicle.displayName = "Popsicle";

export default Popsicle;
