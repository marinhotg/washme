import { Login } from "../src/screens/login";
import { CreateAccount } from "../src/screens/create-account";
import { AccessLaundry } from "../src/screens/access-laundry";
import { ReportLostItem} from "../src/screens/report-lost";
import { LostItems } from "../src/screens/lost-items";
import { LostItemDetails } from "../src/screens/lost-item-details";
import { WashingGuide } from "../src/screens/washing-guide";
import { Help } from "../src/screens/help";
import { Settings } from "../src/screens/settings";
import { Users } from "../src/screens/users";
import { AvailableMachines } from "../src/screens/availabre-machines";

export default function Index() {
  return <AvailableMachines />;
}