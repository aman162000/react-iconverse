
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256zM112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416z"/><path className="fa-secondary" d="M153.1 83.2L191.5 54.4C197 50.25 203.7 48 210.7 48H424C437.3 48 448 58.75 448 72V120C448 133.3 437.3 144 424 144H210.7C203.7 144 197 141.8 191.5 137.6L153.1 108.8C144.5 102.4 144.5 89.6 153.1 83.2V83.2zM210.7 208H488C501.3 208 512 218.7 512 232V280C512 293.3 501.3 304 488 304H210.7C203.7 304 197 301.8 191.5 297.6L153.1 268.8C144.5 262.4 144.5 249.6 153.1 243.2L191.5 214.4C197 210.2 203.7 208 210.7 208zM210.7 368H424C437.3 368 448 378.7 448 392V440C448 453.3 437.3 464 424 464H210.7C203.7 464 197 461.8 191.5 457.6L153.1 428.8C144.5 422.4 144.5 409.6 153.1 403.2L191.5 374.4C197 370.2 203.7 368 210.7 368z"/>
</>],
['light',<>
	<path d="M213.3 32H416C433.7 32 448 46.33 448 64V128C448 145.7 433.7 160 416 160H213.3C204.8 160 196.6 156.6 190.6 150.6L147.3 107.3C141.1 101.1 141.1 90.94 147.3 84.69L190.6 41.37C196.6 35.37 204.8 32 213.3 32V32zM416 128V64H213.3L181.3 96L213.3 128H416zM64 64C81.67 64 96 78.33 96 96C96 113.7 81.67 128 64 128C46.33 128 32 113.7 32 96C32 78.33 46.33 64 64 64zM64 224C81.67 224 96 238.3 96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224zM64 448C46.33 448 32 433.7 32 416C32 398.3 46.33 384 64 384C81.67 384 96 398.3 96 416C96 433.7 81.67 448 64 448zM213.3 352H416C433.7 352 448 366.3 448 384V448C448 465.7 433.7 480 416 480H213.3C204.8 480 196.6 476.6 190.6 470.6L147.3 427.3C141.1 421.1 141.1 410.9 147.3 404.7L190.6 361.4C196.6 355.4 204.8 352 213.3 352V352zM416 448V384H213.3L181.3 416L213.3 448H416zM147.3 244.7L190.6 201.4C196.6 195.4 204.8 192 213.3 192H480C497.7 192 512 206.3 512 224V288C512 305.7 497.7 320 480 320H213.3C204.8 320 196.6 316.6 190.6 310.6L147.3 267.3C141.1 261.1 141.1 250.9 147.3 244.7V244.7zM181.3 256L213.3 288H480V224H213.3L181.3 256z"/>
</>],
['regular',<>
	<path d="M147.3 84.69L190.6 41.37C196.6 35.37 204.8 32 213.3 32H416C433.7 32 448 46.33 448 64V128C448 145.7 433.7 160 416 160H213.3C204.8 160 196.6 156.6 190.6 150.6L147.3 107.3C141.1 101.1 141.1 90.94 147.3 84.69V84.69zM400 111.1V79.1H219.9L203.9 95.1L219.9 111.1H400zM64 63.1C81.67 63.1 96 78.33 96 95.1C96 113.7 81.67 127.1 64 127.1C46.33 127.1 32 113.7 32 95.1C32 78.33 46.33 63.1 64 63.1zM64 223.1C81.67 223.1 96 238.3 96 255.1C96 273.7 81.67 287.1 64 287.1C46.33 287.1 32 273.7 32 255.1C32 238.3 46.33 223.1 64 223.1zM64 448C46.33 448 32 433.7 32 416C32 398.3 46.33 384 64 384C81.67 384 96 398.3 96 416C96 433.7 81.67 448 64 448zM147.3 404.7L190.6 361.4C196.6 355.4 204.8 352 213.3 352H416C433.7 352 448 366.3 448 384V448C448 465.7 433.7 480 416 480H213.3C204.8 480 196.6 476.6 190.6 470.6L147.3 427.3C141.1 421.1 141.1 410.9 147.3 404.7V404.7zM400 432V400H219.9L203.9 416L219.9 432H400zM190.6 310.6L147.3 267.3C141.1 261.1 141.1 250.9 147.3 244.7L190.6 201.4C196.6 195.4 204.8 192 213.3 192H480C497.7 192 512 206.3 512 224V288C512 305.7 497.7 320 480 320H213.3C204.8 320 196.6 316.6 190.6 310.6V310.6zM203.9 255.1L219.9 271.1H464V239.1H219.9L203.9 255.1z"/>
</>],
['solid',<>
	<path d="M112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96zM16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM210.7 48H424C437.3 48 448 58.75 448 72V120C448 133.3 437.3 144 424 144H210.7C203.7 144 197 141.8 191.5 137.6L153.1 108.8C144.5 102.4 144.5 89.6 153.1 83.2L191.5 54.4C197 50.25 203.7 48 210.7 48V48zM153.1 243.2L191.5 214.4C197 210.2 203.7 208 210.7 208H488C501.3 208 512 218.7 512 232V280C512 293.3 501.3 304 488 304H210.7C203.7 304 197 301.8 191.5 297.6L153.1 268.8C144.5 262.4 144.5 249.6 153.1 243.2V243.2zM153.1 403.2L191.5 374.4C197 370.2 203.7 368 210.7 368H424C437.3 368 448 378.7 448 392V440C448 453.3 437.3 464 424 464H210.7C203.7 464 197 461.8 191.5 457.6L153.1 428.8C144.5 422.4 144.5 409.6 153.1 403.2z"/>
</>],
['thin',<>
	<path d="M213.3 32H416C433.7 32 448 46.33 448 64V128C448 145.7 433.7 160 416 160H213.3C204.8 160 196.6 156.6 190.6 150.6L147.3 107.3C141.1 101.1 141.1 90.94 147.3 84.69L190.6 41.37C196.6 35.37 204.8 32 213.3 32V32zM201.9 139.3C204.9 142.3 209 144 213.3 144H416C424.8 144 432 136.8 432 128V64C432 55.16 424.8 48 416 48H213.3C209 48 204.9 49.69 201.9 52.69L158.6 96L201.9 139.3zM64 144C37.49 144 16 122.5 16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144zM96 96C96 78.33 81.67 64 64 64C46.33 64 32 78.33 32 96C32 113.7 46.33 128 64 128C81.67 128 96 113.7 96 96zM64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256C112 282.5 90.51 304 64 304zM96 256C96 238.3 81.67 224 64 224C46.33 224 32 238.3 32 256C32 273.7 46.33 288 64 288C81.67 288 96 273.7 96 256zM64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416C16 389.5 37.49 368 64 368zM32 416C32 433.7 46.33 448 64 448C81.67 448 96 433.7 96 416C96 398.3 81.67 384 64 384C46.33 384 32 398.3 32 416zM213.3 352H416C433.7 352 448 366.3 448 384V448C448 465.7 433.7 480 416 480H213.3C204.8 480 196.6 476.6 190.6 470.6L147.3 427.3C141.1 421.1 141.1 410.9 147.3 404.7L190.6 361.4C196.6 355.4 204.8 352 213.3 352V352zM201.9 459.3C204.9 462.3 209 464 213.3 464H416C424.8 464 432 456.8 432 448V384C432 375.2 424.8 368 416 368H213.3C209 368 204.9 369.7 201.9 372.7L158.6 416L201.9 459.3zM147.3 244.7L190.6 201.4C196.6 195.4 204.8 192 213.3 192H480C497.7 192 512 206.3 512 224V288C512 305.7 497.7 320 480 320H213.3C204.8 320 196.6 316.6 190.6 310.6L147.3 267.3C141.1 261.1 141.1 250.9 147.3 244.7V244.7zM201.9 212.7L158.6 256L201.9 299.3C204.9 302.3 209 304 213.3 304H480C488.8 304 496 296.8 496 288V224C496 215.2 488.8 208 480 208H213.3C209 208 204.9 209.7 201.9 212.7z"/>
</>],

]);

const ListTimeline: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ListTimeline.displayName = "ListTimeline";

export default ListTimeline;
