import { metaObject } from "@/config/site.config";
import BlankPage from "./blank/page";

export const metadata = {
  ...metaObject(),
};

export default function FileDashboardPage() {
  return <BlankPage />;
}
