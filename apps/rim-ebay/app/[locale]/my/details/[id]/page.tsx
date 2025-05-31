import MyAnnonceDetailsUI from "./ui";
import BackButton from "@repo/ui/Navigation";
import { cookies } from "next/headers";

export default async function AnnonceDetail(
  props: {
    params: Promise<{ locale: string; annonceId: string; id: string }>;
  }
) {
  const params = await props.params;
  const userid = (await cookies()).get("user");
  const userIdConverted = String(userid?.value || "");
  return (
    <div className="p-4 sm:p-6 md:p-9 overflow-hidden">
      <div>
        <BackButton />
      </div>
      <MyAnnonceDetailsUI lang={params.locale} annonceId={userIdConverted} />
    </div>
  );
}
