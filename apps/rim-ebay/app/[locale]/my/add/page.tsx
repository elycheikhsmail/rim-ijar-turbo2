import AddAnnonceUI from "./AddAnnonceUI";
import { cookies } from "next/headers";

export default async function AddAnnonce(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const userid = (await cookies()).get("user");
  const userIdConverted = String(userid?.value);
  //? parseInt(userid.value) : 0;
  console.log("userid : ", userIdConverted);
  return (
    <>
      <AddAnnonceUI lang={params.locale} userid={userIdConverted} />
    </>
  );
}
