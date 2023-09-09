
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M572.6 465.7C580.5 481.5 574.1 500.7 558.3 508.6C542.5 516.5 523.3 510.1 515.4 494.3L508.2 480H419.8L412.6 494.3C404.7 510.1 385.5 516.5 369.7 508.6C353.9 500.7 347.5 481.5 355.4 465.7L435.4 305.7C440.8 294.8 451.9 288 464 288C476.1 288 487.2 294.8 492.6 305.7L572.6 465.7zM480.2 424L464 391.6L447.8 424H480.2z"/><path className="fa-secondary" d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H32C18.67 288 6.735 279.7 2.046 267.3C-2.643 254.8 .8963 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"/>
</>],
['light',<>
	<path d="M314.8 33.27L246.7 224H356.1C371.9 224 384 236.1 384 251C384 258.8 380.7 266.2 374.9 271.3L109.1 505.8C104.6 509.8 98.7 512 92.63 512C75.41 512 63.39 494.9 69.18 478.7L137.3 288H25.81C11.56 288 0 276.4 0 262.2C0 254.8 3.153 247.8 8.664 242.9L274.8 6.288C279.4 2.237 285.3 0 291.4 0C308.6 0 320.6 17.05 314.8 33.27H314.8zM160 256C165.2 256 170.1 258.5 173.1 262.8C176.1 267 176.8 272.5 175.1 277.4L108.6 463.6L343.8 256H224C218.8 256 213.9 253.5 210.9 249.2C207.9 244.1 207.2 239.5 208.9 234.6L275.3 48.65L42.08 256L160 256zM464 288C470.1 288 475.6 291.4 478.3 296.8L574.3 488.8C578.3 496.7 575.1 506.4 567.2 510.3C559.3 514.3 549.6 511.1 545.7 503.2L526.1 464H401.9L382.3 503.2C378.4 511.1 368.7 514.3 360.8 510.3C352.9 506.4 349.7 496.7 353.7 488.8L449.7 296.8C452.4 291.4 457.9 288 464 288V288zM417.9 432H510.1L464 339.8L417.9 432z"/>
</>],
['regular',<>
	<path d="M263.8 224H349.1C368.4 224 384 239.6 384 258.9C384 269.2 379.5 278.9 371.7 285.6L112.9 505.2C107.7 509.6 101.1 512 94.27 512C75.18 512 61.4 493.7 66.64 475.4L120.2 288H33.74C15.1 288 0 272.9 0 254.3C0 244.4 4.315 235 11.81 228.6L271.1 6.893C276.3 2.445 282.9 0 289.7 0C308.8 0 322.6 18.26 317.4 36.61L263.8 224zM152 240C159.5 240 166.6 243.5 171.2 249.5C175.7 255.6 177.1 263.4 175.1 270.6L130.3 427.5L313.5 272H232C224.5 272 217.4 268.5 212.8 262.5C208.3 256.4 206.9 248.6 208.9 241.4L253.6 84.99L72.36 240H152zM464 288C473.1 288 481.4 293.1 485.5 301.3L573.5 477.3C579.4 489.1 574.6 503.5 562.7 509.5C550.9 515.4 536.5 510.6 530.5 498.7L517.2 472H410.8L397.5 498.7C391.5 510.6 377.1 515.4 365.3 509.5C353.4 503.5 348.6 489.1 354.5 477.3L442.5 301.3C446.6 293.1 454.9 288 464 288H464zM434.8 424H493.2L464 365.7L434.8 424z"/>
</>],
['solid',<>
	<path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H32C18.67 288 6.735 279.7 2.046 267.3C-2.643 254.8 .8963 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224zM464 288C476.1 288 487.2 294.8 492.6 305.7L572.6 465.7C580.5 481.5 574.1 500.7 558.3 508.6C542.5 516.5 523.3 510.1 515.4 494.3L508.2 480H419.8L412.6 494.3C404.7 510.1 385.5 516.5 369.7 508.6C353.9 500.7 347.5 481.5 355.4 465.7L435.4 305.7C440.8 294.8 451.9 288 464 288H464zM447.8 424H480.2L464 391.6L447.8 424z"/>
</>],
['thin',<>
	<path d="M317.3 34.66L236.1 224H359.4C373 224 384 234.1 384 248.6C384 255.6 380.1 262.3 375.7 266.9L106.1 505.7C101.5 509.8 95.68 512 89.6 512C71.74 512 59.7 493.7 66.73 477.3L147.9 288H23.35C10.45 288 0 277.5 0 264.7C0 257.1 2.839 251.7 7.805 247.2L277.9 6.309C282.4 2.246 288.3 0 294.4 0C312.3 0 324.3 18.25 317.3 34.66L317.3 34.66zM18.46 259.2C16.89 260.6 16 262.6 16 264.7C16 268.7 19.29 272 23.35 272H160C162.7 272 165.2 273.4 166.7 275.6C168.2 277.8 168.4 280.7 167.4 283.2L81.44 483.6C78.93 489.5 83.22 496 89.6 496C91.77 496 93.86 495.2 95.49 493.8L365.1 254.1C366.1 253.3 368 250.1 368 248.6C368 243.8 364.2 240 359.4 240H224C221.3 240 218.8 238.6 217.3 236.4C215.8 234.2 215.6 231.3 216.6 228.8L302.6 28.35C305.1 22.51 300.8 16 294.4 16C292.3 16 290.2 16.8 288.5 18.25L18.46 259.2zM464 288C467 288 469.8 289.7 471.2 292.4L575.2 500.4C577.1 504.4 575.5 509.2 571.6 511.2C567.6 513.1 562.8 511.5 560.8 507.6L539.1 464H388.9L367.2 507.6C365.2 511.5 360.4 513.1 356.4 511.2C352.5 509.2 350.9 504.4 352.8 500.4L456.8 292.4C458.2 289.7 460.1 288 464 288H464zM396.9 448H531.1L464 313.9L396.9 448z"/>
</>],

]);

const BoltAuto: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BoltAuto.displayName = "BoltAuto";

export default BoltAuto;
